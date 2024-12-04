//ADD HTML COMPONENTS

const container = document.getElementsByTagName('section')[0];
container.innerHTML = `
<div>
    <br>
    <label for="otp">OTP (opcional):</label>
    <input type="text" name="otp" id="otp"></input>
    <br>
    <label for="booking-day-calendar">Fecha de Intento:</label>
    <input type="date" name="booking-day-calendar" id="booking-day-calendar"></input>
    <button onclick="submitForm()" class="button">Enviar</button>

    <br>
    <hr>
    <br>

    Formulario: <span id="status-form"></span>    

    <hr>

    Intentos:
    <div id="attempts" style="overflow-y: scroll; height:300px;">
        <!--
        <div>
            <label style="display: inline;">Intento 1:</label>
            <span id="status-attempt-1">...</span>
        </div>
        -->
    </div>
</div>
`;

//SCRIPTS

function submitForm() {
    updateFormStatus('Enviando Form...');
    localStorage.setItem("config-selected_day", document.getElementById('booking-day-calendar').value);

    let service = 0;
    let cookies = localStorage.getItem('config-cookies');
    let form_data = localStorage.getItem('config-form_data').split(';');    

    const formData = new FormData();        
    for (var i = 0; i < form_data.length; i++) {
        let line = form_data[i];
        let key = line.split(': ')[0];
        let value = line.split(': ')[1];
        formData.append(key, value);
        
        //Get service ID from config
        if (key == 'IDServizioErogato') {
            service = value;
            localStorage.setItem("config-service", service);
        }                    
    }
    let otp = document.getElementById('otp').value
    if (otp)
        formData.append('otp-input', otp)

    const headers = new Headers();
    headers.append("Accept", "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7");
    headers.append("Accept-Language", "en-US,en;q=0.9,it;q=0.8");//TODO: check
    headers.append("Cache-Control", "no-cache");
    headers.append("Connection", "keep-alive");
    headers.append("Cookie", cookies);
    headers.append("Origin", "https://prenotami.esteri.it");
    headers.append("Pragma", "no-cache");
    headers.append("Referer", "https://prenotami.esteri.it/Services/Booking/" + service);
    headers.append("Sec-Fetch-Dest", "document");
    headers.append("Sec-Fetch-Mode", "navigate");
    headers.append("Sec-Fetch-Site", "same-origin");
    headers.append("Sec-Fetch-User", "?1");
    headers.append("Upgrade-Insecure-Requests", "1");
    headers.append("User-Agent", window.navigator.userAgent);
    //headers.append("sec-ch-ua", "");
    //headers.append("sec-ch-ua-mobile", "?0");
    //headers.append("sec-ch-ua-platform", "");
    
    const requestOptions = {
        method: "POST",
        headers: headers,
        body: formData,
        redirect: "follow"
    };

    fetch("https://prenotami.esteri.it/Services/Booking/" + service, requestOptions)
    .then((response) => readResponse(response))
    .then((result) => readFormResult(result)) //Todo catch calendar and errors here
    .catch((error) => readErrorResult(error));
}

function readResponse(response) {
    console.log(response);
    console.log('status: ', response.status);
    let url = response.url;
    console.log('url: ', url);    
    console.log('redirect: ', response.redirected);

    if (url.includes('https://prenotami.esteri.it/BookingCalendar'))
        updateFormStatus('Form OK. Calendar.');
    else if (url.includes('https://prenotami.esteri.it/Services') && !url.includes('https://prenotami.esteri.it/Services/Booking'))
        updateFormStatus('Index. Form cerrado. Volver a intentar si aun no abrió.');
    else
        updateFormStatus('Form ERROR. Form desactualizado?');

    return response.text();
}
function readFormResult(result) {
    console.log('formResult');
    console.log(result);    
}

function readErrorResult(error) {
    console.error('errorResult');
    console.error(error);

    updateFormStatus('Result');
}

function updateFormStatus (message) {
    let formStatus = document.getElementById("status-form");
    formStatus.innerHTML = message;
}