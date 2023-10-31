const container = document.getElementsByTagName('section')[0];
container.innerHTML = '';

container.innerHTML = `
<form action="/Services/Booking/340" enctype="multipart/form-data" id="bookingForm" method="post">
    <div class="container" id="div-container">

        <h1 class="heading-container" id="ServizioDescrizione">Ciudadanía jure sanguinis</h1>
        <input id="hiddenServizioDesc" name="ServizioDescrizione" type="hidden"
            value="Ciudadanía jure sanguinis">
        <input data-val="true" data-val-required="The MessaggioRassicuranteWaitingList field is required."
            id="MessaggioRassicuranteWaitingList" name="MessaggioRassicuranteWaitingList" type="hidden"
            value="False">
        <input data-val="true" data-val-required="The isWaitingListEnabled field is required."
            id="isWaitingListEnabled" name="isWaitingListEnabled" type="hidden" value="False">


        <div id="divRiepilogoPrenotazione" class="riepilogoPrenotazione" style="">
            <div id="divTitolo">Reserva unica</div>
            <div id="divDettaglio">

                You are booking for 1 Appointment</div>
            <div id="divAppuntamenti">
                <ul>
                    <li></li>
                </ul>
            </div>
        </div>
        <div>
            <h2>Información acerca de la reserva</h2>

            <div id="typeofbooking">
                <input data-val="true" data-val-number="The field IDServizioConsolare must be a number."
                    data-val-required="The IDServizioConsolare field is required." id="IDServizioConsolare"
                    name="IDServizioConsolare" type="hidden" value="27">
                <input data-val="true" data-val-number="The field IDServizioErogato must be a number."
                    data-val-required="The IDServizioErogato field is required." id="IDServizioErogato"
                    name="IDServizioErogato" type="hidden" value="340">
                <label>Tipo de reserva</label>
                <select id="typeofbookingddl">
                    <option value="1">Reserva unica</option>
                </select>
                <input data-val="true" data-val-number="The field IdTipoPrenotazione must be a number."
                    data-val-required="The IdTipoPrenotazione field is required." id="hiddenTipoPrenotazione"
                    name="IdTipoPrenotazione" type="hidden" value="1">
                <input data-val="true" data-val-number="The field NumMaxAccompagnatori must be a number."
                    data-val-required="The NumMaxAccompagnatori field is required." id="hiddenNumMax"
                    name="NumMaxAccompagnatori" type="hidden" value="0">



            </div>
            <div id="numberOfCompanions" style="display:none">
                <label>Cantidad de solicitantes adicionales</label>
                <select id="ddlnumberofcompanions">
                </select>
                <input data-val="true" data-val-number="The field NumAccompagnatoriSelected must be a number."
                    data-val-required="The NumAccompagnatoriSelected field is required." id="numAccSelected"
                    name="NumAccompagnatoriSelected" type="hidden" value="0">
            </div>

            <div id="infoapplicant" style="">
                <h2>Datos del solicitante</h2>
                <div id="datoaddizionale_0">
                    <label id="addizionale">
                        Estado Civil &nbsp;<b>*</b> </label>
                    <input id="DatiAddizionaliPrenotante_0___Descrizione"
                        name="DatiAddizionaliPrenotante[0]._Descrizione" type="hidden" value="Estado Civil">
                    <select id="ddls_0" data-index="0" onchange="ControloSelect(this)">
                        <option value="0"> </option>
                        <option value="13">Casado/a</option>
                        <option value="14">Divorciado/a</option>
                        <option value="15">Viudo/a</option>
                        <option value="16">Soltero/a</option>
                        <option value="17">Separado/a</option>
                        <option value="18">Unido/a civilmente</option>
                        <option value="19">Separado/a de Un. Civ.</option>
                        <option value="20">Divorciado/a de Un. Civ.</option>
                        <option value="21">Viudo/a de Un. Civ.</option>
                    </select><input data-val="true" data-val-required="The _Obbligatorio field is required."
                        id="DatiAddizionaliPrenotante_0___Obbligatorio"
                        name="DatiAddizionaliPrenotante[0]._Obbligatorio" type="hidden" value="True">
                    <div>
                        <p><span class="field-validation-valid" data-valmsg-for="addizionale_0"
                                data-valmsg-replace="true" style="color: red; display: none;"></span></p>
                        <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_0"
                                data-valmsg-replace="true" style="color:red"></span></p>
                    </div>
                </div>
                <input data-val="true" data-val-number="The field _Id must be a number."
                    data-val-required="The _Id field is required." id="hiddenId0"
                    name="DatiAddizionaliPrenotante[0]._Id" type="hidden" value="1691"><input data-val="true"
                    data-val-number="The field IDTipoDatoAddizionale must be a number."
                    data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADD_0"
                    name="DatiAddizionaliPrenotante[0]._TipoDatoAddizionale.IDTipoDatoAddizionale" type="hidden"
                    value="17"><input data-val="true"
                    data-val-number="The field IDTipoControllo must be a number."
                    data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAdd_0"
                    name="DatiAddizionaliPrenotante[0]._TipoDatoAddizionale.IDTipoControllo" type="hidden"
                    value="3"><input id="hiddenRegEx_0"
                    name="DatiAddizionaliPrenotante[0]._TipoDatoAddizionale.RegEx" type="hidden" value="">
                <div id="datoaddizionale_1">
                    <label id="addizionale">
                        Dirección completa de residencia &nbsp;<b>*</b> </label>
                    <input id="DatiAddizionaliPrenotante_1___Descrizione"
                        name="DatiAddizionaliPrenotante[1]._Descrizione" type="hidden"
                        value="Dirección completa de residencia">
                    <input id="DatiAddizionaliPrenotante_1___testo" maxlength="100"
                        name="DatiAddizionaliPrenotante[1]._testo" onchange="ControlloTesto(this)" type="text"
                        value=""><input data-val="true" data-val-required="The _Obbligatorio field is required."
                        id="DatiAddizionaliPrenotante_1___Obbligatorio"
                        name="DatiAddizionaliPrenotante[1]._Obbligatorio" type="hidden" value="True">
                    <div>
                        <p><span class="field-validation-valid" data-valmsg-for="addizionale_1"
                                data-valmsg-replace="true" style="color:red"></span></p>
                        <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_1"
                                data-valmsg-replace="true" style="color:red"></span></p>
                    </div>
                </div>
                <input data-val="true" data-val-number="The field _Id must be a number."
                    data-val-required="The _Id field is required." id="hiddenId1"
                    name="DatiAddizionaliPrenotante[1]._Id" type="hidden" value="1692"><input data-val="true"
                    data-val-number="The field IDTipoDatoAddizionale must be a number."
                    data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADD_1"
                    name="DatiAddizionaliPrenotante[1]._TipoDatoAddizionale.IDTipoDatoAddizionale" type="hidden"
                    value="25"><input data-val="true"
                    data-val-number="The field IDTipoControllo must be a number."
                    data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAdd_1"
                    name="DatiAddizionaliPrenotante[1]._TipoDatoAddizionale.IDTipoControllo" type="hidden"
                    value="2"><input id="hiddenRegEx_1"
                    name="DatiAddizionaliPrenotante[1]._TipoDatoAddizionale.RegEx" type="hidden" value="">
                <div id="datoaddizionale_2">
                    <label id="addizionale">
                        Número de hijos menores &nbsp;<b>*</b> </label>
                    <input id="DatiAddizionaliPrenotante_2___Descrizione"
                        name="DatiAddizionaliPrenotante[2]._Descrizione" type="hidden"
                        value="Número de hijos menores">
                    <input id="DatiAddizionaliPrenotante_2___testo" maxlength="100"
                        name="DatiAddizionaliPrenotante[2]._testo" onchange="ControlloTesto(this)" type="text"
                        value=""><input data-val="true" data-val-required="The _Obbligatorio field is required."
                        id="DatiAddizionaliPrenotante_2___Obbligatorio"
                        name="DatiAddizionaliPrenotante[2]._Obbligatorio" type="hidden" value="True">
                    <div>
                        <p><span class="field-validation-valid" data-valmsg-for="addizionale_2"
                                data-valmsg-replace="true" style="color:red"></span></p>
                        <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_2"
                                data-valmsg-replace="true" style="color:red"></span></p>
                    </div>
                </div>
                <input data-val="true" data-val-number="The field _Id must be a number."
                    data-val-required="The _Id field is required." id="hiddenId2"
                    name="DatiAddizionaliPrenotante[2]._Id" type="hidden" value="1693"><input data-val="true"
                    data-val-number="The field IDTipoDatoAddizionale must be a number."
                    data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADD_2"
                    name="DatiAddizionaliPrenotante[2]._TipoDatoAddizionale.IDTipoDatoAddizionale" type="hidden"
                    value="12"><input data-val="true"
                    data-val-number="The field IDTipoControllo must be a number."
                    data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAdd_2"
                    name="DatiAddizionaliPrenotante[2]._TipoDatoAddizionale.IDTipoControllo" type="hidden"
                    value="2"><input id="hiddenRegEx_2"
                    name="DatiAddizionaliPrenotante[2]._TipoDatoAddizionale.RegEx" type="hidden" value="">
                <input data-val="true" data-val-number="The field _idSelezionato must be a number."
                    data-val-required="The _idSelezionato field is required." id="hiddenSelezionato_0"
                    name="DatiAddizionaliPrenotante[0]._idSelezionato" type="hidden" value="0">
            </div>

            <div id="ifMultiple" style="display: none;">
            </div>
        </div>
        <div>
            <h2>Notas para la Sede</h2>
            <textarea cols="20" id="BookingNotes" maxlength="100" name="BookingNotes" rows="2"
                style="width:100%; height: 200px; resize:none"></textarea>
        </div>


        <div>
            <h2>Información acerca de la Privacidad</h2>
            <div>
                <div class="row">
                    <input data-val="true" data-val-required="The PrivacyCheck field is required."
                        id="PrivacyCheck" name="PrivacyCheck" required=""
                        style="-ms-transform: scale(2); -webkit-transform: scale(2); width:50px;"
                        type="checkbox" value="true"><input name="PrivacyCheck" type="hidden" value="false">
                    <label style="font-size:large">He leído y acepto ... <a
                            href="/Content/docs/PRIVACY_LLTP.pdf#toolbar=0&amp;zoom=141" target="_blank">
                            Información por la privacidad</a></label>
                    <div>
                        <br>
                        <span class="field-validation-valid" data-valmsg-for="Privacy"
                            data-valmsg-replace="true" style="text-align:left; color:red;"></span>
                        <span tipoprenotazionegiainserito="Type of reservation already made for this service"
                            class="field-validation-valid" data-valmsg-for="Invalid booking"
                            data-valmsg-replace="true" style="text-align:left; color:red;"></span>

                    </div>
                </div>
            </div>
        </div>
        <div class="footing-container">
            <button type="button" class="button primary"
                onclick="window.location.href='/Services/Index';">Volver a la lista</button>
            <button type="submit" id="btnAvanti" class="button primary g-recaptcha"
                data-sitekey="6LdSmG4cAAAAAOarRxGIhehvv4sPgVeF-vRi-Jqb"
                data-callback="onSubmit">Avanzar</button>
        </div>
    </div>
</form>
`;

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
            $('#divRiepilogoPrenotazione > #divDettaglio').html("\n\n  You are booking for   " + 1 +
                " Appointment");


            $('#divRiepilogoPrenotazione > #divAppuntamenti ul').empty();
            $('#divRiepilogoPrenotazione > #divAppuntamenti ul').append('\n<li></li>')

            break;
        case '2':
            var numapp = parseInt($('#ddlnumberofcompanions').val()) + 1;
            if (numapp == 1) {
                $('#divRiepilogoPrenotazione > #divDettaglio').html("\n\n You are booking for  " + numapp +
                    " Appointment");

            } else {
                $('#divRiepilogoPrenotazione > #divDettaglio').html("\n\n You are booking for  " + numapp +
                    " Appointments");

            }

            $('#divRiepilogoPrenotazione > #divAppuntamenti ul').empty();
            $('#divRiepilogoPrenotazione > #divAppuntamenti ul').append('\n<li></li>');
            for (var i = 0; i < parseInt($('#ddlnumberofcompanions').val()); i++) {
                $('#divRiepilogoPrenotazione > #divAppuntamenti ul').append('\n<li>' + $('#Accompagnatori_' +
                    i + '__CognomeAccompagnatore').val() + ' ' + $('#Accompagnatori_' + i +
                    '__NomeAccompagnatore').val() + '</li>');
            }

            break;
            //Model.PrenotazioneSenzaRichiedente &&
        case '3':
            var numapp = 1;
            if (numapp == 1) {
                $('#divRiepilogoPrenotazione > #divDettaglio').html("\n\n You are booking for  " + numapp +
                    " Appointment");

            } else {
                $('#divRiepilogoPrenotazione > #divDettaglio').html("\n\n You are booking for  " + numapp +
                    " Appointments");

            }

            $('#divRiepilogoPrenotazione > #divAppuntamenti ul').empty();

            $('#divRiepilogoPrenotazione > #divAppuntamenti ul').append('\n<li>' + $(
                    '#RichiedenteFittizioCognome').val() + ' ' + $('#RichiedenteFittizioNome').val() +
                '</li>')

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
        } else {
            $('#ddlnumberofcompanions').val("1");
            CreateDivCompanion(1);
        }
        ShowInfoApplicant();
    }

    if (selected === '3') {

        //show FORM RICHIEDENTE
        ShowInfoApplicant();

        $('#divRichiedenteFittizio').show();
        ShowInfoApplicant();


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
        } else {
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
            divrel.append($('<select/>', {
                id: "TypeOfRelationDDL" + i,
                'data-index': i
            }));
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
        } else {
            $('#typeofbookingddl').append($('<option/>', {
                value: data[0].Value,
                text: data[0].Text
            }));
        }
        if (0 === 0) {
            $('#typeofbookingddl').val(1);
        } else {
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

    RegEx = true;
    MaxLength = false
    var tipodatoAddizionale = $('#hiddenCodDatoAdd_' + 0).val();
    if (tipodatoAddizionale == 2) {
        if (RegEx == false && MaxLength == false) {
            $('#datoaddizionale_' + 0).append(
                '<input id="DatiAddizionaliPrenotante_0___testo" maxlength="100" name="DatiAddizionaliPrenotante[0]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />'
                );
        } else if (RegEx == false && MaxLength != false) {
            $('#datoaddizionale_' + 0).append(
                '<input id="DatiAddizionaliPrenotante_0___testo" name="DatiAddizionaliPrenotante[0]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />'
                );
        } else if (RegEx != false && MaxLength == false) {
            $('#datoaddizionale_' + 0).append(
                '<input id="DatiAddizionaliPrenotante_0___testo" maxlength="100" name="DatiAddizionaliPrenotante[0]._testo" onchange="ControlloTesto(this)" type="text" value="" />'
                );
        } else if (RegEx != false && MaxLength != false) {
            $('#datoaddizionale_' + 0).append(
                '<input id="DatiAddizionaliPrenotante_0___testo" name="DatiAddizionaliPrenotante[0]._testo" onchange="ControlloTesto(this)" type="text" value="" />'
                );
        }
    }
    if (tipodatoAddizionale == 1) {
        if (RegEx != false && MaxLength != false) {
            $('#datoaddizionale_' + 0).append(
                '<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="DatiAddizionaliPrenotante_0___data" name="DatiAddizionaliPrenotante[0]._data" type="date" value="" />'
                );
        } else if (RegEx != false && MaxLength == false) {
            $('#datoaddizionale_' + 0).append(
                '<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="DatiAddizionaliPrenotante_0___data" name="DatiAddizionaliPrenotante[0]._data" type="date" value="" />'
                );
        } else if (RegEx == false && MaxLength != false) {
            $('#datoaddizionale_' + 0).append(
                '<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="DatiAddizionaliPrenotante_0___data" name="DatiAddizionaliPrenotante[0]._data" type="date" value="" />'
                );
        } else if (RegEx == false && MaxLength == false) {
            $('#datoaddizionale_' + 0).append(
                '<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="DatiAddizionaliPrenotante_0___data" name="DatiAddizionaliPrenotante[0]._data" type="date" value="" />'
                );
        }
    }
    if (tipodatoAddizionale == 3) {
        $('#datoaddizionale_' + 0).append($('<select/>', {
            id: "ddls_" + 0,
            'data-index': 0,
            onchange: "ControloSelect(this)"
        }));
        $('#ddls_' + 0).append($('<option/>', {
            value: 0,
            text: " "
        }));
        $('#infoapplicant').append(
            '<input data-val="true" data-val-number="The field _idSelezionato must be a number." data-val-required="The _idSelezionato field is required." id="hiddenSelezionato_0" name="DatiAddizionaliPrenotante[0]._idSelezionato" type="hidden" value="0" />'
            );
        getDropDownListsValues($('#hiddenIdDatoADD_' + 0).val(), $('#ddls_0'), 0);
    }

    $('#datoaddizionale_' + 0).append(
        '<input data-val="true" data-val-required="The _Obbligatorio field is required." id="DatiAddizionaliPrenotante_0___Obbligatorio" name="DatiAddizionaliPrenotante[0]._Obbligatorio" type="hidden" value="True" />'
        );
    $('#datoaddizionale_' + 0).append(
        '<div><p><span class="field-validation-valid" data-valmsg-for="addizionale_0" data-valmsg-replace="true" style="color:red"></span></p> <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_0" data-valmsg-replace="true" style="color:red"></span></p> </div >'
        );

    RegEx = true;
    MaxLength = false
    var tipodatoAddizionale = $('#hiddenCodDatoAdd_' + 1).val();
    if (tipodatoAddizionale == 2) {
        if (RegEx == false && MaxLength == false) {
            $('#datoaddizionale_' + 1).append(
                '<input id="DatiAddizionaliPrenotante_1___testo" maxlength="100" name="DatiAddizionaliPrenotante[1]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />'
                );
        } else if (RegEx == false && MaxLength != false) {
            $('#datoaddizionale_' + 1).append(
                '<input id="DatiAddizionaliPrenotante_1___testo" name="DatiAddizionaliPrenotante[1]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />'
                );
        } else if (RegEx != false && MaxLength == false) {
            $('#datoaddizionale_' + 1).append(
                '<input id="DatiAddizionaliPrenotante_1___testo" maxlength="100" name="DatiAddizionaliPrenotante[1]._testo" onchange="ControlloTesto(this)" type="text" value="" />'
                );
        } else if (RegEx != false && MaxLength != false) {
            $('#datoaddizionale_' + 1).append(
                '<input id="DatiAddizionaliPrenotante_1___testo" name="DatiAddizionaliPrenotante[1]._testo" onchange="ControlloTesto(this)" type="text" value="" />'
                );
        }
    }
    if (tipodatoAddizionale == 1) {
        if (RegEx != false && MaxLength != false) {
            $('#datoaddizionale_' + 1).append(
                '<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="DatiAddizionaliPrenotante_1___data" name="DatiAddizionaliPrenotante[1]._data" type="date" value="" />'
                );
        } else if (RegEx != false && MaxLength == false) {
            $('#datoaddizionale_' + 1).append(
                '<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="DatiAddizionaliPrenotante_1___data" name="DatiAddizionaliPrenotante[1]._data" type="date" value="" />'
                );
        } else if (RegEx == false && MaxLength != false) {
            $('#datoaddizionale_' + 1).append(
                '<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="DatiAddizionaliPrenotante_1___data" name="DatiAddizionaliPrenotante[1]._data" type="date" value="" />'
                );
        } else if (RegEx == false && MaxLength == false) {
            $('#datoaddizionale_' + 1).append(
                '<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="DatiAddizionaliPrenotante_1___data" name="DatiAddizionaliPrenotante[1]._data" type="date" value="" />'
                );
        }
    }
    if (tipodatoAddizionale == 3) {
        $('#datoaddizionale_' + 1).append($('<select/>', {
            id: "ddls_" + 1,
            'data-index': 1,
            onchange: "ControloSelect(this)"
        }));
        $('#ddls_' + 1).append($('<option/>', {
            value: 0,
            text: " "
        }));
        $('#infoapplicant').append(
            '<input data-val="true" data-val-number="The field _idSelezionato must be a number." data-val-required="The _idSelezionato field is required." id="hiddenSelezionato_1" name="DatiAddizionaliPrenotante[1]._idSelezionato" type="hidden" value="0" />'
            );
        getDropDownListsValues($('#hiddenIdDatoADD_' + 1).val(), $('#ddls_1'), 0);
    }

    $('#datoaddizionale_' + 1).append(
        '<input data-val="true" data-val-required="The _Obbligatorio field is required." id="DatiAddizionaliPrenotante_1___Obbligatorio" name="DatiAddizionaliPrenotante[1]._Obbligatorio" type="hidden" value="True" />'
        );
    $('#datoaddizionale_' + 1).append(
        '<div><p><span class="field-validation-valid" data-valmsg-for="addizionale_1" data-valmsg-replace="true" style="color:red"></span></p> <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_1" data-valmsg-replace="true" style="color:red"></span></p> </div >'
        );

    RegEx = true;
    MaxLength = false
    var tipodatoAddizionale = $('#hiddenCodDatoAdd_' + 2).val();
    if (tipodatoAddizionale == 2) {
        if (RegEx == false && MaxLength == false) {
            $('#datoaddizionale_' + 2).append(
                '<input id="DatiAddizionaliPrenotante_2___testo" maxlength="100" name="DatiAddizionaliPrenotante[2]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />'
                );
        } else if (RegEx == false && MaxLength != false) {
            $('#datoaddizionale_' + 2).append(
                '<input id="DatiAddizionaliPrenotante_2___testo" name="DatiAddizionaliPrenotante[2]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />'
                );
        } else if (RegEx != false && MaxLength == false) {
            $('#datoaddizionale_' + 2).append(
                '<input id="DatiAddizionaliPrenotante_2___testo" maxlength="100" name="DatiAddizionaliPrenotante[2]._testo" onchange="ControlloTesto(this)" type="text" value="" />'
                );
        } else if (RegEx != false && MaxLength != false) {
            $('#datoaddizionale_' + 2).append(
                '<input id="DatiAddizionaliPrenotante_2___testo" name="DatiAddizionaliPrenotante[2]._testo" onchange="ControlloTesto(this)" type="text" value="" />'
                );
        }
    }
    if (tipodatoAddizionale == 1) {
        if (RegEx != false && MaxLength != false) {
            $('#datoaddizionale_' + 2).append(
                '<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="DatiAddizionaliPrenotante_2___data" name="DatiAddizionaliPrenotante[2]._data" type="date" value="" />'
                );
        } else if (RegEx != false && MaxLength == false) {
            $('#datoaddizionale_' + 2).append(
                '<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="DatiAddizionaliPrenotante_2___data" name="DatiAddizionaliPrenotante[2]._data" type="date" value="" />'
                );
        } else if (RegEx == false && MaxLength != false) {
            $('#datoaddizionale_' + 2).append(
                '<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="DatiAddizionaliPrenotante_2___data" name="DatiAddizionaliPrenotante[2]._data" type="date" value="" />'
                );
        } else if (RegEx == false && MaxLength == false) {
            $('#datoaddizionale_' + 2).append(
                '<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="DatiAddizionaliPrenotante_2___data" name="DatiAddizionaliPrenotante[2]._data" type="date" value="" />'
                );
        }
    }
    if (tipodatoAddizionale == 3) {
        $('#datoaddizionale_' + 2).append($('<select/>', {
            id: "ddls_" + 2,
            'data-index': 2,
            onchange: "ControloSelect(this)"
        }));
        $('#ddls_' + 2).append($('<option/>', {
            value: 0,
            text: " "
        }));
        $('#infoapplicant').append(
            '<input data-val="true" data-val-number="The field _idSelezionato must be a number." data-val-required="The _idSelezionato field is required." id="hiddenSelezionato_2" name="DatiAddizionaliPrenotante[2]._idSelezionato" type="hidden" value="0" />'
            );
        getDropDownListsValues($('#hiddenIdDatoADD_' + 2).val(), $('#ddls_2'), 0);
    }

    $('#datoaddizionale_' + 2).append(
        '<input data-val="true" data-val-required="The _Obbligatorio field is required." id="DatiAddizionaliPrenotante_2___Obbligatorio" name="DatiAddizionaliPrenotante[2]._Obbligatorio" type="hidden" value="True" />'
        );
    $('#datoaddizionale_' + 2).append(
        '<div><p><span class="field-validation-valid" data-valmsg-for="addizionale_2" data-valmsg-replace="true" style="color:red"></span></p> <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_2" data-valmsg-replace="true" style="color:red"></span></p> </div >'
        );
}

function GetDatiAddizionaliAccompagnatori() {
    let RegEx;
    let MaxLength;
}

function getDropDownListsValues(_id, ddl, selectedValue) {
    $.getJSON("/Services/GetDdlValuesByID/", {
        id: _id
    }, function (data) {
        for (i = 0; i < data.length; i++) {
            ddl.append($('<option/>', {
                value: data[i].Value,
                text: data[i].Text
            }));
        }
        ddl.val(selectedValue);
    })
};

function saveDdlValue() {

    if ($('#ddls_' + 0).val() !== undefined && $('#ddls_' + 0).val() !== '' && $('#ddls_' + 0).val() != 0) {
        let selected = $('#ddls_' + 0).val();
        $('#hiddenSelezionato_' + 0).val(selected);
    }


    if ($('#ddls_' + 1).val() !== undefined && $('#ddls_' + 1).val() !== '' && $('#ddls_' + 1).val() != 0) {
        let selected = $('#ddls_' + 1).val();
        $('#hiddenSelezionato_' + 1).val(selected);
    }


    if ($('#ddls_' + 2).val() !== undefined && $('#ddls_' + 2).val() !== '' && $('#ddls_' + 2).val() != 0) {
        let selected = $('#ddls_' + 2).val();
        $('#hiddenSelezionato_' + 2).val(selected);
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


        if (!CheckMaxFileSize()) {
            event.preventDefault();
            return;
        }

        saveDdlValue();



        if (window.confirm("Quiere confirmar esta reserva? \n\n" + $(
                '#divRiepilogoPrenotazione').text())) {

        } else {
            event.preventDefault();
            return;
        }








    });

});



function controlloFileCaricato(file) {
    id = file.id.split("_");
    id1 = id[1];
    if (id.length > 2) {
        id2 = id[4];
        validator = $('span[data-valmsg-for="Required_' + id1 + '_' + id2 + '"]');
    } else {
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
    } else {
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
    } else {
        validator = $('span[data-valmsg-for="addizionale_' + id1 + '"]');
    }
    if (select.selectedIndex != 0) {
        validator.hide();
    }

}