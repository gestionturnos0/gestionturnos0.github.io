const container = document.getElementsByTagName('section')[0];
container.innerHTML = '';

container.innerHTML = `
<form action="https://prenotami.esteri.it/Services/Booking/340" enctype="multipart/form-data" id="bookingForm"
method="post">    
<div class="container" id="div-container">

    <h1 class="heading-container" id="ServizioDescrizione">Ciudadanía jure sanguinis</h1>
    <input id="hiddenServizioDesc" name="ServizioDescrizione" type="hidden" value="Ciudadanía jure sanguinis">
    <input data-val="true" data-val-required="The MessaggioRassicuranteWaitingList field is required."
        id="MessaggioRassicuranteWaitingList" name="MessaggioRassicuranteWaitingList" type="hidden" value="False">
    <input data-val="true" data-val-required="The isWaitingListEnabled field is required." id="isWaitingListEnabled"
        name="isWaitingListEnabled" type="hidden" value="False">


    <div id="divRiepilogoPrenotazione" class="riepilogoPrenotazione" style="">
        <div id="divTitolo"></div>
        <div id="divDettaglio"></div>
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
                name="IDServizioConsolare" type="hidden" value="27">
            <input data-val="true" data-val-number="Il campo IDServizioErogato deve essere un numero."
                data-val-required="The IDServizioErogato field is required." id="IDServizioErogato"
                name="IDServizioErogato" type="hidden" value="340">
            <label>Tipo Prenotazione</label>
            <select id="typeofbookingddl">
                <option value="1">Prenotazione Singola</option>
            </select>
            <input data-val="true" data-val-number="Il campo IdTipoPrenotazione deve essere un numero."
                data-val-required="The IdTipoPrenotazione field is required." id="hiddenTipoPrenotazione"
                name="IdTipoPrenotazione" type="hidden" value="1">
            <input data-val="true" data-val-number="Il campo NumMaxAccompagnatori deve essere un numero."
                data-val-required="The NumMaxAccompagnatori field is required." id="hiddenNumMax"
                name="NumMaxAccompagnatori" type="hidden" value="0">



        </div>
        <div id="numberOfCompanions" style="display:none">
            <label>Numero richiedenti aggiuntivi</label>
            <select id="ddlnumberofcompanions">
            </select>
            <input data-val="true" data-val-number="Il campo NumAccompagnatoriSelected deve essere un numero."
                data-val-required="The NumAccompagnatoriSelected field is required." id="numAccSelected"
                name="NumAccompagnatoriSelected" type="hidden" value="0">
        </div>

        <div id="applicantBufferDiv" style="margin: 10px 0px 30px; display: none;">
            <h2>Dati Richiedente</h2>
            <p><strong>Cognome</strong></p>
            <p><strong>Nome</strong></p>
            <p><strong>Data di nascita</strong></p>
        </div>

        <div id="infoapplicant" style="">
            <div id="datoaddizionale_0">
                <label id="addizionale">
                    Estado Civil &nbsp;<b>*</b> </label>
                <input id="DatiAddizionaliPrenotante_0___Descrizione"
                    name="DatiAddizionaliPrenotante[0]._Descrizione" type="hidden" value="Estado Civil">
                <select id="ddls_0" data-index="0" onchange="ControloSelect(this)">
                    <option value="0"> </option>
                    <option value="13">Coniugato/a</option>
                    <option value="14">Divorziato/a</option>
                    <option value="15">Vedovo/a</option>
                    <option value="16">Celibe/Nubile</option>
                    <option value="17">Separato/a</option>
                    <option value="18">Unito/a Civilmente</option>
                    <option value="19">Separato/a da Un. Civ.</option>
                    <option value="20">Divorziato/a da Un. Civ.</option>
                    <option value="21">Vedovo/a da Un. Civ.</option>
                </select><input data-val="true" data-val-required="The _Obbligatorio field is required."
                    id="DatiAddizionaliPrenotante_0___Obbligatorio"
                    name="DatiAddizionaliPrenotante[0]._Obbligatorio" type="hidden" value="True">
                <div>
                    <p><span class="field-validation-error" data-valmsg-for="addizionale_0"
                            data-valmsg-replace="true" style="color:red">Campo Obbligatorio</span></p>
                    <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_0"
                            data-valmsg-replace="true" style="color:red"></span></p>
                </div>
            </div>
            <input data-val="true" data-val-number="Il campo _Id deve essere un numero."
                data-val-required="The _Id field is required." id="hiddenId0"
                name="DatiAddizionaliPrenotante[0]._Id" type="hidden" value="67728"><input data-val="true"
                data-val-number="Il campo IDTipoDatoAddizionale deve essere un numero."
                data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADD_0"
                name="DatiAddizionaliPrenotante[0]._TipoDatoAddizionale.IDTipoDatoAddizionale" type="hidden"
                value="17"><input data-val="true" data-val-number="Il campo IDTipoControllo deve essere un numero."
                data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAdd_0"
                name="DatiAddizionaliPrenotante[0]._TipoDatoAddizionale.IDTipoControllo" type="hidden"
                value="3"><input id="hiddenRegEx_0" name="DatiAddizionaliPrenotante[0]._TipoDatoAddizionale.RegEx"
                type="hidden" value="">
            <div id="datoaddizionale_1">
                <label id="addizionale">
                    Dirección completa de residencia &nbsp;<b>*</b> </label>
                <input id="DatiAddizionaliPrenotante_1___Descrizione"
                    name="DatiAddizionaliPrenotante[1]._Descrizione" type="hidden"
                    value="Dirección completa de residencia">
                <input id="DatiAddizionaliPrenotante_1___testo" name="DatiAddizionaliPrenotante[1]._testo"
                    onchange="ControlloTesto(this)" type="text" value="Test"><input data-val="true"
                    data-val-required="The _Obbligatorio field is required."
                    id="DatiAddizionaliPrenotante_1___Obbligatorio"
                    name="DatiAddizionaliPrenotante[1]._Obbligatorio" type="hidden" value="True">
                <div>
                    <p><span class="field-validation-valid" data-valmsg-for="addizionale_1"
                            data-valmsg-replace="true" style="color:red"></span></p>
                    <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_1"
                            data-valmsg-replace="true" style="color:red"></span></p>
                </div>
            </div>
            <input data-val="true" data-val-number="Il campo _Id deve essere un numero."
                data-val-required="The _Id field is required." id="hiddenId1"
                name="DatiAddizionaliPrenotante[1]._Id" type="hidden" value="67729"><input data-val="true"
                data-val-number="Il campo IDTipoDatoAddizionale deve essere un numero."
                data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADD_1"
                name="DatiAddizionaliPrenotante[1]._TipoDatoAddizionale.IDTipoDatoAddizionale" type="hidden"
                value="25"><input data-val="true" data-val-number="Il campo IDTipoControllo deve essere un numero."
                data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAdd_1"
                name="DatiAddizionaliPrenotante[1]._TipoDatoAddizionale.IDTipoControllo" type="hidden"
                value="2"><input id="hiddenRegEx_1" name="DatiAddizionaliPrenotante[1]._TipoDatoAddizionale.RegEx"
                type="hidden" value="">
            <div id="datoaddizionale_2">
                <label id="addizionale">
                    Número de hijos menores &nbsp;<b>*</b> </label>
                <input id="DatiAddizionaliPrenotante_2___Descrizione"
                    name="DatiAddizionaliPrenotante[2]._Descrizione" type="hidden" value="Número de hijos menores">
                <input id="DatiAddizionaliPrenotante_2___testo" name="DatiAddizionaliPrenotante[2]._testo"
                    onchange="ControlloTesto(this)" type="text" value="0"><input data-val="true"
                    data-val-required="The _Obbligatorio field is required."
                    id="DatiAddizionaliPrenotante_2___Obbligatorio"
                    name="DatiAddizionaliPrenotante[2]._Obbligatorio" type="hidden" value="True">
                <div>
                    <p><span class="field-validation-valid" data-valmsg-for="addizionale_2"
                            data-valmsg-replace="true" style="color:red"></span></p>
                    <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_2"
                            data-valmsg-replace="true" style="color:red"></span></p>
                </div>
            </div>
            <input data-val="true" data-val-number="Il campo _Id deve essere un numero."
                data-val-required="The _Id field is required." id="hiddenId2"
                name="DatiAddizionaliPrenotante[2]._Id" type="hidden" value="67730"><input data-val="true"
                data-val-number="Il campo IDTipoDatoAddizionale deve essere un numero."
                data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADD_2"
                name="DatiAddizionaliPrenotante[2]._TipoDatoAddizionale.IDTipoDatoAddizionale" type="hidden"
                value="12"><input data-val="true" data-val-number="Il campo IDTipoControllo deve essere un numero."
                data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAdd_2"
                name="DatiAddizionaliPrenotante[2]._TipoDatoAddizionale.IDTipoControllo" type="hidden"
                value="2"><input id="hiddenRegEx_2" name="DatiAddizionaliPrenotante[2]._TipoDatoAddizionale.RegEx"
                type="hidden" value=""> <input data-val="true"
                data-val-number="Il campo _idSelezionato deve essere un numero."
                data-val-required="The _idSelezionato field is required." id="hiddenSelezionato_0"
                name="DatiAddizionaliPrenotante[0]._idSelezionato" type="hidden" value="0">
        </div>

        <div id="ifMultiple" style="display: none;">
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
                <input checked="checked" data-val="true" data-val-required="The PrivacyCheck field is required."
                    id="PrivacyCheck" name="PrivacyCheck" required=""
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
        <button type="submit" id="btnAvanti" class="button primary g-recaptcha" data-sitekey=""
            data-callback="onSubmit">Avanti</button>
    </div>
</div>
</form>
`;
