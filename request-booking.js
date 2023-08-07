//Attempt requesting booking
requestBooking(sessionStorage.getItem("selectedDay"), sessionStorage.getItem("idService")); //Reading value without incitializing varible to avoid error because of duplicated variables when trying multiple times

function requestBooking(selectedDay, idService) {
    console.log("Requesting booking...")
    console.log(selectedDay);
    console.log(idService);

    //Retrieve timeslot and request booking on first time
    $.ajax({
        url: 'https://prenotami.esteri.it/BookingCalendar/RetrieveTimeSlots',
        type: 'POST',
        data: JSON.stringify({"selectedDay": selectedDay, "idService": idService}),
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        success: function (response) {
            console.log('success')
            console.log(response)
            readTimeSlot(JSON.parse(response)[0]);
        },
        error: function (response) {
            console.log('error')
            console.log(response)
            alert('error')
        }
    });
}

function readTimeSlot(timeslot) {
    console.log("Reading time slot");
    console.log(timeslot);
    try {
        if (timeslot.SlotLiberi > 0) {
        
            let idCalendarioGiornaliero = timeslot.IDCalendarioServizioGiornaliero;
            
            let dateString = timeslot.Data.split(" ")[0];
            let dateParts = dateString.split("/");
            let selectedDay = "" + dateParts[2] + "-" + dateParts[1] + "-" + dateParts[0];
            
            let selectedHour = "" + String(timeslot.OrarioInizioFascia.Hours).padStart(2, '0')  + ":" + String(timeslot.OrarioInizioFascia.Minutes).padStart(2, '0') + " - " + String(timeslot.OrarioFineFascia.Hours).padStart(2, '0')  + ":" + String(timeslot.OrarioFineFascia.Minutes).padStart(2, '0') + "(" + timeslot.SlotLiberi + ")"
            
            insertNewBooking(idCalendarioGiornaliero, selectedDay, selectedHour);
        }
        else {
            alert("No hay turnos disponibles en el día elegido");
        }
    } catch (exception) {
        console.log(exception)
        alert("Error obteniendo horarios. " + exception);
    }
};

function insertNewBooking(idCalendarioGiornaliero, selectedDay, selectedHour) {
    console.log("Inserting booking...");

    $.ajax({
        type: "POST",
        url: '/BookingCalendar/InsertNewBooking',
        data: { "idCalendarioGiornaliero": idCalendarioGiornaliero, "selectedDay": selectedDay, "selectedHour": selectedHour },
        dataType: "json",
        success: function (response) {
            console.log("success");
            console.log(response);
            alert("Puede que new booking!");
        },
        error: function (xhr, status, error) {                    
            console.log(xhr.statusText);
            console.log(status);
            console.log(error);
        }
    });
}
