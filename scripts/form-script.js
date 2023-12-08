const footingContainer = document.getElementsByClassName('footing-container')[0];
footingContainer.setAttribute('style', 'text-align: left;');
const dateContainer = document.createElement('div');
footingContainer.insertBefore(dateContainer, footingContainer.firstChild);
dateContainer.innerHTML = `<h2>Fecha a Intentar</h2><input type="date" name="booking-day-calendar" id="booking-day-calendar">`

var numDivCompanionsVisibile = 0;
  //$(document).ready(function () {
      $('#ServizioDescrizione').text($('#hiddenServizioDesc').val());
      getTypeofBooking();
      ShowInfoApplicant();
      getDatiAddizionali();

      $('#ddlnumberofcompanions').val(0);
      var x = 0;
      if (x !== 0) {
          CreateDivCompanion(x);
      }

  //});

  function aggiornaDettaglioPrenotazione() {
      $('#divRiepilogoPrenotazione').hide();


      aggiornaElencoPrenotanti();

      $('#divRiepilogoPrenotazione').slideDown(1000);
  }
  function aggiornaElencoPrenotanti() {
      $('#divRiepilogoPrenotazione > #divTitolo').text($("#typeofbookingddl option:selected").text());
      switch ($('#typeofbookingddl').val()) {
          case '1':
              $('#divRiepilogoPrenotazione > #divDettaglio').html("\n\n  Stai prenotando per   " + 1 + " Appuntamento");
              

              $('#divRiepilogoPrenotazione > #divAppuntamenti ul').empty();
              $('#divRiepilogoPrenotazione > #divAppuntamenti ul').append('\n<li>Cristina Perez</li>')

              break;
          case '2':
              var numapp = parseInt($('#ddlnumberofcompanions').val()) + 1;
              if (numapp == 1) {
                   $('#divRiepilogoPrenotazione > #divDettaglio').html("\n\n Stai prenotando per  " + numapp + " Appuntamento");
                  
              } else {
                  $('#divRiepilogoPrenotazione > #divDettaglio').html("\n\n Stai prenotando per  " + numapp + " Appuntamenti");
                  
              }

              $('#divRiepilogoPrenotazione > #divAppuntamenti ul').empty();
              $('#divRiepilogoPrenotazione > #divAppuntamenti ul').append('\n<li>Cristina Perez</li>');
              for (var i = 0; i < parseInt($('#ddlnumberofcompanions').val()); i++) {
                  $('#divRiepilogoPrenotazione > #divAppuntamenti ul').append('\n<li>' + $('#Accompagnatori_' + i + '__CognomeAccompagnatore').val() + ' ' + $('#Accompagnatori_' + i + '__NomeAccompagnatore').val() + '</li>');
              }

              break;
              //Model.PrenotazioneSenzaRichiedente &&
          case '3':
                  var numapp = $('#ddlnumberofcompanions').val();
              if (numapp == 1) {
                   $('#divRiepilogoPrenotazione > #divDettaglio').html("\n\n Stai prenotando per  " + numapp + " Appuntamento");
                  
              } else {
                  $('#divRiepilogoPrenotazione > #divDettaglio').html("\n\n Stai prenotando per  " + numapp + " Appuntamenti");
                  
              }

              $('#divRiepilogoPrenotazione > #divAppuntamenti ul').empty();
                  
                  for (var i = 0; i < parseInt($('#ddlnumberofcompanions').val()); i++) {
                      $('#divRiepilogoPrenotazione > #divAppuntamenti ul').append('\n<li>' + $('#Accompagnatori_' + i + '__CognomeAccompagnatore').val() + ' ' + $('#Accompagnatori_' + i + '__NomeAccompagnatore').val()+'</li>')
                  }
                  
              break;
      }
  }

  function ShowInfoApplicant() {
      if ($('#infoapplicant').children().length > 1) {
          $('#infoapplicant').show();
      }
  }
  var _datiAddizionaliAccompagnatoriCreati = false;
  function ShowCompanions() {

      $('#divRichiedenteFittizio').hide();
      $('#infoapplicant').hide();

      var selected = $('#typeofbookingddl').val();
      if (selected === '1') {
          $('#numberOfCompanions').hide();
          $('#ifMultiple').hide();
          $('#numAccSelected').val(0);
          ShowInfoApplicant();
      }
      if (selected === '2') {
          if (_datiAddizionaliAccompagnatoriCreati == false) {
              GetDatiAddizionaliAccompagnatori();
              _datiAddizionaliAccompagnatoriCreati = true;
          }
          $('#numberOfCompanions').show();
          var x = 0;
          if (x !== 0) {
              $('#ddlnumberofcompanions').val(x);
              CreateDivCompanion(x);
          }
          else {
          $('#ddlnumberofcompanions').val("1");
              CreateDivCompanion(1);
          }
          ShowInfoApplicant();
      }

      if (selected === '3') {

          //show FORM RICHIEDENTE
          ShowInfoApplicant();
              

              $('#infoapplicant').hide();

              if (_datiAddizionaliAccompagnatoriCreati == false) {
                  GetDatiAddizionaliAccompagnatori();
                  _datiAddizionaliAccompagnatoriCreati = true;
              }
              $('#numberOfCompanions').show();
              var x = 0;
              if (x !== 0)
              {
                  $('#ddlnumberofcompanions').val(x);
                  CreateDivCompanion(x);
              }
              else
              {
                  $('#ddlnumberofcompanions').val("1");
                  CreateDivCompanion(1);
              }
              

      }
      $('#hiddenTipoPrenotazione').val(selected);
  }
  function CreateDivCompanion(d) {
      for (i = 0; i < d; i++) {
          let div = document.querySelector('#divCompanion_' + i);
          div.style.display = 'block';

          if (d >= numDivCompanionsVisibile) {
              for (let i = d - numDivCompanionsVisibile; i < d; i++) {
                  let div = document.querySelector('#divCompanion_' + i);
                  div.style.display = 'block';
              }
          }
          else {
              for (let i = numDivCompanionsVisibile - 1; i >= d; i--) {
                  let div = document.querySelector('#divCompanion_' + i);
                  div.style.display = 'none';
              }
          }
          $('#ifMultiple').show();

          for (let i = 0; i < d; i++) {
              let div = document.querySelector('#divCompanion_' + i);
              div.style.display = 'block';
              let divrel = $('#ddlRelation_' + i);
              divrel.empty();
              divrel.append($('<select/>', { id: "TypeOfRelationDDL" + i, 'data-index': i }));
              ddl = $('#TypeOfRelationDDL' + i)
              getRelationshipType(ddl, i);
              ddl.change(function () {
                  let index = $(this).data('index');
                  let selected = $('#TypeOfRelationDDL' + index).val();
                  $('#hiddenParentela_' + index).val(selected);
              });
          }
          numDivCompanionsVisibile = d;
          $('#numAccSelected').val(d);
      }
  }
  function getTypeofBooking() {
      $.getJSON("/Services/GetBookingTypes", function (data) {
          var numMax = $('#hiddenNumMax').val();
          if (numMax !== "0") {
              for (i = 0; i < data.length; i++) {
                  $('#typeofbookingddl').append($('<option/>', {
                      value: data[i].Value,
                      text: data[i].Text
                  }));
              }
          }
          else {
              $('#typeofbookingddl').append($('<option/>', {
                  value: data[0].Value,
                  text: data[0].Text
              }));
          }
          if (0 === 0) {
              $('#typeofbookingddl').val(1);
          }
          else {
              $('#typeofbookingddl').val(0);
          }
          ShowCompanions();
          aggiornaDettaglioPrenotazione();
      });
  }
  function getRelationshipType(ddl, index) {
      $.getJSON("/Services/GetRelationshipType", function (data) {
          for (i = 0; i < data.length; i++) {
              ddl.append($('<option/>', {
                  value: data[i].Value,
                  text: data[i].Text
              }));
              var x = $('#hiddenParentela_' + index).val();
              ddl.val(x);
          }
      })
  }

  function getDatiAddizionali() {
      let RegEx;
      let MaxLength;

      RegEx = false;
      MaxLength = false
      var tipodatoAddizionale = $('#hiddenCodDatoAdd_' + 0).val();
      if (tipodatoAddizionale == 2) {
          if (RegEx == false && MaxLength == false) {
              $('#datoaddizionale_' + 0).append('<input id="DatiAddizionaliPrenotante_0___testo" maxlength="100" name="DatiAddizionaliPrenotante[0]._testo" onchange="ControlloTesto(this)" pattern="((RITPAS|ritpas)/[0-9]{5})$" type="text" value="" />');
          }
          else if (RegEx == false && MaxLength != false) {
              $('#datoaddizionale_' + 0).append('<input id="DatiAddizionaliPrenotante_0___testo" name="DatiAddizionaliPrenotante[0]._testo" onchange="ControlloTesto(this)" pattern="((RITPAS|ritpas)/[0-9]{5})$" type="text" value="" />');
          }
          else if (RegEx != false && MaxLength == false) {
              $('#datoaddizionale_' + 0).append('<input id="DatiAddizionaliPrenotante_0___testo" maxlength="100" name="DatiAddizionaliPrenotante[0]._testo" onchange="ControlloTesto(this)" type="text" value="" />');
          }
          else if (RegEx != false && MaxLength != false) {
               $('#datoaddizionale_' + 0).append('<input id="DatiAddizionaliPrenotante_0___testo" name="DatiAddizionaliPrenotante[0]._testo" onchange="ControlloTesto(this)" type="text" value="" />');
          }
      }
      if (tipodatoAddizionale == 1) {
          if (RegEx != false && MaxLength != false) {
              $('#datoaddizionale_' + 0).append('<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="DatiAddizionaliPrenotante_0___data" name="DatiAddizionaliPrenotante[0]._data" type="date" value="" />');
          }
          else if (RegEx != false && MaxLength == false) {
              $('#datoaddizionale_' + 0).append('<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="DatiAddizionaliPrenotante_0___data" name="DatiAddizionaliPrenotante[0]._data" type="date" value="" />');
          }
          else if (RegEx == false && MaxLength != false) {
              $('#datoaddizionale_' + 0).append('<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="DatiAddizionaliPrenotante_0___data" name="DatiAddizionaliPrenotante[0]._data" type="date" value="" />');
          }
          else if (RegEx == false && MaxLength == false) {
              $('#datoaddizionale_' + 0).append('<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="DatiAddizionaliPrenotante_0___data" name="DatiAddizionaliPrenotante[0]._data" type="date" value="" />');
          }
      }
      if (tipodatoAddizionale == 3)
      {
          $('#datoaddizionale_' + 0).append($('<select/>', { id: "ddls_" + 0, 'data-index': 0, onchange:"ControloSelect(this)"  }));
          $('#ddls_' +0).append($('<option/>', {
              value: 0,
              text: " "
          }));
          $('#infoapplicant').append('<input data-val="true" data-val-number="Il campo _idSelezionato deve essere un numero." data-val-required="The _idSelezionato field is required." id="hiddenSelezionato_0" name="DatiAddizionaliPrenotante[0]._idSelezionato" type="hidden" value="0" />');
          getDropDownListsValues($('#hiddenIdDatoADD_' +0).val(), $('#ddls_0'), 0);
      }

      $('#datoaddizionale_' + 0).append('<input data-val="true" data-val-required="The _Obbligatorio field is required." id="DatiAddizionaliPrenotante_0___Obbligatorio" name="DatiAddizionaliPrenotante[0]._Obbligatorio" type="hidden" value="True" />');
      $('#datoaddizionale_' + 0).append('<div><p><span class="field-validation-valid" data-valmsg-for="addizionale_0" data-valmsg-replace="true" style="color:red"></span></p> <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_0" data-valmsg-replace="true" style="color:red"></span></p> </div >');
                  }
  function GetDatiAddizionaliAccompagnatori() {
          let RegEx;
          let MaxLength;
      }

  function getDropDownListsValues(_id, ddl, selectedValue) {
      $.getJSON("/Services/GetDdlValuesByID/",
          {
              id: _id
          }
          , function (data) {
              for (i = 0; i < data.length; i++) {
                  ddl.append($('<option/>', {
                      value: data[i].Value,
                      text: data[i].Text
                  }));
              }
              ddl.val(selectedValue);
          }
      )
  };
  function saveDdlValue() {
              
              if ($('#ddls_' + 0).val() !== undefined && $('#ddls_' + 0).val() !== '' && $('#ddls_' + 0).val() != 0) {
                  let selected = $('#ddls_' + 0).val();
                  $('#hiddenSelezionato_' + 0).val(selected);
              }
              
              };
  function CheckMaxFileSize() {
      let result = true;
      $('input[type="file"]').each(function () {
          if (result) {
              let _f = $(this)[0];
              if (_f.files.length > 0) {
                  if (_f.files[0].size > 1024 * 1024 * 1) {
                      alert('File troppo grande');
                      result = false;
                  }
              }
          }

      });
      return result;
  }
  $('#typeofbookingddl').change(function () {
      ShowCompanions();
      aggiornaDettaglioPrenotazione();
  });
  $('#ddlnumberofcompanions').change(function () {
      var n = $('#ddlnumberofcompanions').val();
      CreateDivCompanion(n);
      aggiornaDettaglioPrenotazione();
  });
  $(function () {
      $("#btnAvanti").click(function () {

          document.getElementById("IdOtpSent").style.display = "none";

          if (!CheckMaxFileSize()) {
              event.preventDefault();
              return;
          }

          saveDdlValue();

          event.preventDefault();
          alert('avanti2');        

          const bookingForm = document.getElementById("bookingForm");
          const formData = new FormData(bookingForm);
          const action = bookingForm.getAttribute('action');

          var xhr = new XMLHttpRequest();
          xhr.open("POST", action); 
          xhr.onload = function(event){ 
              console.log('Booking passed :)');                        

              if (event.target.status == 200) {
                  window.open(event.target.responseURL, '_blank');
                  
                  //Request booking
                  requestBooking("2023-12-21", "92");


              } else {
                  console.log('Error en target status');
                  console.log(event);
              }
          }; 
          // or onerror, onabort
          //
          xhr.send(formData);
          
      });
  });

  

function controlloFileCaricato(file) {
  id = file.id.split("_");
  id1 = id[1];
  if (id.length > 2) {
      id2 = id[4];
          validator = $('span[data-valmsg-for="Required_' + id1 + '_' + id2 + '"]');
  }
  else {
      validator = $('span[data-valmsg-for="Required_' + id1 + '"]');
  }
  if (file.files.length > 0) {
      validator.hide();
  }
}
function ControlloTesto(text) {
  id = text.id.split("_");
  id1 = id[1];
  if (id.length > 2) {
      id2 = id[4];
          validator = $('span[data-valmsg-for="addizionale_' + id1 + '_' + id2 + '"]');
  }
  else {
      validator = $('span[data-valmsg-for="addizionale_' + id1 + '"]');
  }
   if (text != " ") {
       validator.hide();
  }

}
function ControloSelect(select) {
  id = select.id.split("_");
  id1 = id[1];
  if (id.length > 2) {
      id2 = id[4];
          validator = $('span[data-valmsg-for="addizionale_' + id1 + '_' + id2 + '"]');
  }
  else {
      validator = $('span[data-valmsg-for="addizionale_' + id1 + '"]');
  }
   if (select.selectedIndex != 0) {
       validator.hide();
  }

}

  function sendOTP() {
      document.getElementById("IdOtpSent").style.display = "none";
      document.getElementById("IdOtpInvalid").style.display = "none";
  $('#otp-send').prop('disabled', true);
  $('#otp-loader').fadeIn(200, function () {
  var xmlhttp;
  if (window.XMLHttpRequest) { xmlhttp = new XMLHttpRequest(); }
  else { xmlhttp = new ActiveXObject("Microsoft.XMLHTTP"); }
  xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
          $('#otp-loader').fadeOut(200, function () {
              $('#otp-send').prop('disabled', false);
              if (xmlhttp.responseText == '"SENT"') { document.getElementById("IdOtpSent").style.display = "block"; }
              else { document.getElementById("IdOtpInvalid").style.display = "block"; }
          });
      }
  }
  xmlhttp.open("GET", '/BookingCalendar/GenerateOTP', true);
  xmlhttp.send();
  });
}

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
          alert("Error 1 obteniendo horarios. Prueba de nuevo. " + exception);
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
          alert("No hay turnos disponibles en el día elegido. Pureba otro día.");
      }
  } catch (exception) {
      console.log(exception)
      alert("Error 2 obteniendo horarios. Pureba de nuevo. " + exception);
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
      
          if (response.url) {
              let url = response.url;
              if  (url.includes("isBooking=True")) {
                  alert("RESERVADO CON EXITO! " + JSON.stringify(response));
                  window.location.replace("https://prenotami.esteri.it/" + response.url);
              } else {
                  alert(JSON.stringify(response))
              }
          }            
      },
      error: function (xhr, status, error) {                    
          console.log(xhr.statusText);
          console.log(status);
          console.log(error);
          alert("Error insertando reserva: " + error);
      }
  });
}
