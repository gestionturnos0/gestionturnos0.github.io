  const container = document.getElementsByTagName('section')[0];
  container.innerHTML = '';

  container.innerHTML = `
  <form action="https://prenotami.esteri.it/Services/Booking/92" enctype="multipart/form-data" id="bookingForm"
    method="post">    
    <div class="container" id="div-container">

        <h1 class="heading-container" id="ServizioDescrizione">RITIRO PASSAPORTI (solo previa ricezione convocazione)
        </h1>
        <input id="hiddenServizioDesc" name="ServizioDescrizione" type="hidden"
            value="RITIRO PASSAPORTI (solo previa ricezione convocazione)">
        <input data-val="true" data-val-required="The MessaggioRassicuranteWaitingList field is required."
            id="MessaggioRassicuranteWaitingList" name="MessaggioRassicuranteWaitingList" type="hidden" value="False">
        <input data-val="true" data-val-required="The isWaitingListEnabled field is required." id="isWaitingListEnabled"
            name="isWaitingListEnabled" type="hidden" value="False">


        <div id="divRiepilogoPrenotazione" class="riepilogoPrenotazione" style="">
            <div id="divTitolo">Prenotazione Singola</div>
            <div id="divDettaglio">

                Stai prenotando per 1 Appuntamento</div>
            <div id="divAppuntamenti">
                <ul>
                    <li></li>
                </ul>
            </div>
        </div>
        <div>
            <h2>Informazioni sulla prenotazione</h2>

            <div id="typeofbooking">
                <input data-val="true" data-val-number="Il campo IDServizioConsolare deve essere un numero."
                    data-val-required="The IDServizioConsolare field is required." id="IDServizioConsolare"
                    name="IDServizioConsolare" type="hidden" value="2">
                <input data-val="true" data-val-number="Il campo IDServizioErogato deve essere un numero."
                    data-val-required="The IDServizioErogato field is required." id="IDServizioErogato"
                    name="IDServizioErogato" type="hidden" value="92">
                <label>Tipo Prenotazione</label>
                <select id="typeofbookingddl">
                    <option value="1">Prenotazione Singola</option>
                    <option value="2">Prenotazione Multipla</option>
                </select>
                <input data-val="true" data-val-number="Il campo IdTipoPrenotazione deve essere un numero."
                    data-val-required="The IdTipoPrenotazione field is required." id="hiddenTipoPrenotazione"
                    name="IdTipoPrenotazione" type="hidden" value="1">
                <input data-val="true" data-val-number="Il campo NumMaxAccompagnatori deve essere un numero."
                    data-val-required="The NumMaxAccompagnatori field is required." id="hiddenNumMax"
                    name="NumMaxAccompagnatori" type="hidden" value="4">



            </div>
            <div id="numberOfCompanions" style="display:none">
                <label>Numero richiedenti aggiuntivi</label>
                <select id="ddlnumberofcompanions">
                    <option value="1"> 1 </option>
                    <option value="2"> 2 </option>
                    <option value="3"> 3 </option>
                    <option value="4"> 4 </option>
                </select>
                <input data-val="true" data-val-number="Il campo NumAccompagnatoriSelected deve essere un numero."
                    data-val-required="The NumAccompagnatoriSelected field is required." id="numAccSelected"
                    name="NumAccompagnatoriSelected" type="hidden" value="0">
            </div>

            <div id="infoapplicant" style="">
                <h2>Dati Richiedente</h2>
                <div id="datoaddizionale_0">
                    <label id="addizionale">
                        Codice ritiro passaporto &nbsp;<b>*</b> </label>
                    <input id="DatiAddizionaliPrenotante_0___Descrizione"
                        name="DatiAddizionaliPrenotante[0]._Descrizione" type="hidden" value="Codice ritiro passaporto">
                    <input id="DatiAddizionaliPrenotante_0___testo" maxlength="100"
                        name="DatiAddizionaliPrenotante[0]._testo" onchange="ControlloTesto(this)"
                        pattern="((RITPAS|ritpas)/[0-9]{5})$" type="text" value=""><input data-val="true"
                        data-val-required="The _Obbligatorio field is required."
                        id="DatiAddizionaliPrenotante_0___Obbligatorio"
                        name="DatiAddizionaliPrenotante[0]._Obbligatorio" type="hidden" value="True">
                    <div>
                        <p><span class="field-validation-valid" data-valmsg-for="addizionale_0"
                                data-valmsg-replace="true" style="color:red"></span></p>
                        <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_0"
                                data-valmsg-replace="true" style="color:red"></span></p>
                    </div>
                </div>
                <input data-val="true" data-val-number="Il campo _Id deve essere un numero."
                    data-val-required="The _Id field is required." id="hiddenId0"
                    name="DatiAddizionaliPrenotante[0]._Id" type="hidden" value="21211"><input data-val="true"
                    data-val-number="Il campo IDTipoDatoAddizionale deve essere un numero."
                    data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADD_0"
                    name="DatiAddizionaliPrenotante[0]._TipoDatoAddizionale.IDTipoDatoAddizionale" type="hidden"
                    value="35"><input data-val="true" data-val-number="Il campo IDTipoControllo deve essere un numero."
                    data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAdd_0"
                    name="DatiAddizionaliPrenotante[0]._TipoDatoAddizionale.IDTipoControllo" type="hidden"
                    value="2"><input id="hiddenRegEx_0" name="DatiAddizionaliPrenotante[0]._TipoDatoAddizionale.RegEx"
                    type="hidden" value="((RITPAS|ritpas)/[0-9]{5})$">
            </div>

            <div id="ifMultiple" style="display: none;">
                <div id="divCompanion_0" style="display: none;">
                    <h2>Dati richiedente aggiuntivo 1</h2>
                    <div>
                        Cognome *
                        <input class="text-box single-line" id="Accompagnatori_0__CognomeAccompagnatore"
                            name="Accompagnatori[0].CognomeAccompagnatore" onkeyup="aggiornaElencoPrenotanti()"
                            type="text" value="">
                        <span class="field-validation-valid" data-valmsg-for="Surname0" data-valmsg-replace="true"
                            style="color:red"></span>
                    </div>
                    <div>
                        Nome *
                        <input class="text-box single-line" id="Accompagnatori_0__NomeAccompagnatore"
                            name="Accompagnatori[0].NomeAccompagnatore" onkeyup="aggiornaElencoPrenotanti()" type="text"
                            value="">
                        <span class="field-validation-valid" data-valmsg-for="Name0" data-valmsg-replace="true"
                            style="color:red"></span>
                    </div>
                    <div>
                        Data di nascita *
                        <input class="text-box single-line" data-val="true"
                            data-val-date="Il campo DataNascitaAccompagnatore deve essere una data."
                            id="Accompagnatori_0__DataNascitaAccompagnatore"
                            name="Accompagnatori[0].DataNascitaAccompagnatore" type="date" value="">
                    </div>
                    <div>
                        <span class="field-validation-valid" data-valmsg-for="Date0" data-valmsg-replace="true"
                            style="color:red"></span>
                        <span class="field-validation-valid" data-valmsg-for="dateRange0" data-valmsg-replace="true"
                            style="color:red"></span>
                    </div>
                    Relazione di parentela
                    <div id="ddlRelation_0">
                    </div>
                </div>
                <input data-val="true" data-val-number="Il campo IdTipoParentela deve essere un numero."
                    id="hiddenParentela_0" name="Accompagnatori[0].IdTipoParentela" type="hidden" value="">
                <div id="divCompanion_1" style="display: none;">
                    <h2>Dati richiedente aggiuntivo 2</h2>
                    <div>
                        Cognome *
                        <input class="text-box single-line" id="Accompagnatori_1__CognomeAccompagnatore"
                            name="Accompagnatori[1].CognomeAccompagnatore" onkeyup="aggiornaElencoPrenotanti()"
                            type="text" value="">
                        <span class="field-validation-valid" data-valmsg-for="Surname1" data-valmsg-replace="true"
                            style="color:red"></span>
                    </div>
                    <div>
                        Nome *
                        <input class="text-box single-line" id="Accompagnatori_1__NomeAccompagnatore"
                            name="Accompagnatori[1].NomeAccompagnatore" onkeyup="aggiornaElencoPrenotanti()" type="text"
                            value="">
                        <span class="field-validation-valid" data-valmsg-for="Name1" data-valmsg-replace="true"
                            style="color:red"></span>
                    </div>
                    <div>
                        Data di nascita *
                        <input class="text-box single-line" data-val="true"
                            data-val-date="Il campo DataNascitaAccompagnatore deve essere una data."
                            id="Accompagnatori_1__DataNascitaAccompagnatore"
                            name="Accompagnatori[1].DataNascitaAccompagnatore" type="date" value="">
                    </div>
                    <div>
                        <span class="field-validation-valid" data-valmsg-for="Date1" data-valmsg-replace="true"
                            style="color:red"></span>
                        <span class="field-validation-valid" data-valmsg-for="dateRange1" data-valmsg-replace="true"
                            style="color:red"></span>
                    </div>
                    Relazione di parentela
                    <div id="ddlRelation_1">
                    </div>
                </div>
                <input data-val="true" data-val-number="Il campo IdTipoParentela deve essere un numero."
                    id="hiddenParentela_1" name="Accompagnatori[1].IdTipoParentela" type="hidden" value="">
                <div id="divCompanion_2" style="display: none;">
                    <h2>Dati richiedente aggiuntivo 3</h2>
                    <div>
                        Cognome *
                        <input class="text-box single-line" id="Accompagnatori_2__CognomeAccompagnatore"
                            name="Accompagnatori[2].CognomeAccompagnatore" onkeyup="aggiornaElencoPrenotanti()"
                            type="text" value="">
                        <span class="field-validation-valid" data-valmsg-for="Surname2" data-valmsg-replace="true"
                            style="color:red"></span>
                    </div>
                    <div>
                        Nome *
                        <input class="text-box single-line" id="Accompagnatori_2__NomeAccompagnatore"
                            name="Accompagnatori[2].NomeAccompagnatore" onkeyup="aggiornaElencoPrenotanti()" type="text"
                            value="">
                        <span class="field-validation-valid" data-valmsg-for="Name2" data-valmsg-replace="true"
                            style="color:red"></span>
                    </div>
                    <div>
                        Data di nascita *
                        <input class="text-box single-line" data-val="true"
                            data-val-date="Il campo DataNascitaAccompagnatore deve essere una data."
                            id="Accompagnatori_2__DataNascitaAccompagnatore"
                            name="Accompagnatori[2].DataNascitaAccompagnatore" type="date" value="">
                    </div>
                    <div>
                        <span class="field-validation-valid" data-valmsg-for="Date2" data-valmsg-replace="true"
                            style="color:red"></span>
                        <span class="field-validation-valid" data-valmsg-for="dateRange2" data-valmsg-replace="true"
                            style="color:red"></span>
                    </div>
                    Relazione di parentela
                    <div id="ddlRelation_2">
                    </div>
                </div>
                <input data-val="true" data-val-number="Il campo IdTipoParentela deve essere un numero."
                    id="hiddenParentela_2" name="Accompagnatori[2].IdTipoParentela" type="hidden" value="">
                <div id="divCompanion_3" style="display: none;">
                    <h2>Dati richiedente aggiuntivo 4</h2>
                    <div>
                        Cognome *
                        <input class="text-box single-line" id="Accompagnatori_3__CognomeAccompagnatore"
                            name="Accompagnatori[3].CognomeAccompagnatore" onkeyup="aggiornaElencoPrenotanti()"
                            type="text" value="">
                        <span class="field-validation-valid" data-valmsg-for="Surname3" data-valmsg-replace="true"
                            style="color:red"></span>
                    </div>
                    <div>
                        Nome *
                        <input class="text-box single-line" id="Accompagnatori_3__NomeAccompagnatore"
                            name="Accompagnatori[3].NomeAccompagnatore" onkeyup="aggiornaElencoPrenotanti()" type="text"
                            value="">
                        <span class="field-validation-valid" data-valmsg-for="Name3" data-valmsg-replace="true"
                            style="color:red"></span>
                    </div>
                    <div>
                        Data di nascita *
                        <input class="text-box single-line" data-val="true"
                            data-val-date="Il campo DataNascitaAccompagnatore deve essere una data."
                            id="Accompagnatori_3__DataNascitaAccompagnatore"
                            name="Accompagnatori[3].DataNascitaAccompagnatore" type="date" value="">
                    </div>
                    <div>
                        <span class="field-validation-valid" data-valmsg-for="Date3" data-valmsg-replace="true"
                            style="color:red"></span>
                        <span class="field-validation-valid" data-valmsg-for="dateRange3" data-valmsg-replace="true"
                            style="color:red"></span>
                    </div>
                    Relazione di parentela
                    <div id="ddlRelation_3">
                    </div>
                </div>
                <input data-val="true" data-val-number="Il campo IdTipoParentela deve essere un numero."
                    id="hiddenParentela_3" name="Accompagnatori[3].IdTipoParentela" type="hidden" value="">
            </div>
        </div>
        <div>
            <h2>Note per la sede</h2>
            <textarea cols="20" id="BookingNotes" maxlength="100" name="BookingNotes" rows="2"
                style="width:100%; height: 200px; resize:none"></textarea>
        </div>

        <div style="margin:30px 0px 30px 0px;">
            <div id="IdOtpSent" style="display:none; color:green;">
                <p></p>
            </div>
            <div id="IdOtpInvalid" style="display: none; color: red;">
                <p></p>
            </div>

        </div>

        <div>
            <h2>Informativa sulla Privacy</h2>
            <div>
                <div class="row">
                    <input data-val="true" data-val-required="The PrivacyCheck field is required." id="PrivacyCheck"
                        name="PrivacyCheck" required=""
                        style="-ms-transform: scale(2); -webkit-transform: scale(2); width:50px;" type="checkbox"
                        value="true"><input name="PrivacyCheck" type="hidden" value="false">
                    <label style="font-size:large">Ho preso visione e accetto l <a
                            href="https://prenotami.esteri.it/Content/docs/PRIVACY_LLTP.pdf#toolbar=0&amp;zoom=141"
                            target="_blank"> Informativa per la privacy</a></label>
                    <div>
                        <br>
                        <span class="field-validation-valid" data-valmsg-for="Privacy" data-valmsg-replace="true"
                            style="text-align:left; color:red;"></span>
                        <span tipoprenotazionegiainserito="Tipo di prenotazione già effettuata per questo servizio"
                            class="field-validation-valid" data-valmsg-for="Invalid booking" data-valmsg-replace="true"
                            style="text-align:left; color:red;"></span>

                    </div>
                </div>
            </div>
        </div>
        <div class="footing-container">
            <button type="button" class="button primary" onclick="window.location.href=&#39;/Services/Index&#39;;">Torna
                alla lista</button>
            <button type="submit" id="btnAvanti" class="button primary g-recaptcha"
                data-sitekey="6LdSmG4cAAAAAOarRxGIhehvv4sPgVeF-vRi-Jqb" data-callback="onSubmit">Avanti</button>
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
