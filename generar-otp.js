var xmlhttp;
if (window.XMLHttpRequest) {
    xmlhttp = new XMLHttpRequest();
} else {
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
}
xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        console.log("opt sent");
    }
}
xmlhttp.open("GET", 'https://prenotami.esteri.it/BookingCalendar/GenerateOTP', true);
xmlhttp.send();