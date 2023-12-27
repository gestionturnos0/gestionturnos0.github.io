const container = document.getElementsByTagName('section')[0];
container.innerHTML = '';

container.innerHTML = `
<form action="https://prenotami.esteri.it/Services/Booking/974" enctype="multipart/form-data" id="bookingForm"
    method="post">    
    <div class="container" id="div-container">

        <h1 class="heading-container" id="ServizioDescrizione">Ricostruzione di cittadinanza</h1>
        <input id="hiddenServizioDesc" name="ServizioDescrizione" type="hidden" value="Ricostruzione di cittadinanza">
        <input data-val="true" data-val-required="The MessaggioRassicuranteWaitingList field is required."
            id="MessaggioRassicuranteWaitingList" name="MessaggioRassicuranteWaitingList" type="hidden" value="False">
        <input data-val="true" data-val-required="The isWaitingListEnabled field is required." id="isWaitingListEnabled"
            name="isWaitingListEnabled" type="hidden" value="False">


        <div id="divRiepilogoPrenotazione" class="riepilogoPrenotazione" style="display:none;">
            <div id="divTitolo"></div>
            <div id="divDettaglio"></div>
            <div id="divAppuntamenti">
                <ul></ul>
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
                    name="IDServizioErogato" type="hidden" value="974">
                <label>Tipo Prenotazione</label>
                <select id="typeofbookingddl"></select>
                <input data-val="true" data-val-number="Il campo IdTipoPrenotazione deve essere un numero."
                    data-val-required="The IdTipoPrenotazione field is required." id="hiddenTipoPrenotazione"
                    name="IdTipoPrenotazione" type="hidden" value="0">
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

            <div id="infoapplicant" style="">
                <h2>Dati Richiedente</h2>
                <div id="docAddizionale_0">
                    <label id="doc">
                        Documento di identità/viaggio &nbsp;<b>*</b> </label>
                    <p class="helper">E' possibile inserire file in formato PDF di massimo un 1MB<b>;</b></p>
                    <input id="DocumentiPrenotante_0___Descrizione" name="DocumentiPrenotante[0]._Descrizione"
                        type="hidden" value="Documento di identità/viaggio">
                    <input id="File_0" name="DocumentiPrenotante[0]._File" onchange="controlloFileCaricato(this)"
                        type="file" value="">
                    <span class="field-validation-valid" data-valmsg-for="Lenght_0" data-valmsg-replace="true"
                        style="color:red"></span>
                    <input data-val="true" data-val-required="The _Obbligatorio field is required."
                        id="DocumentiPrenotante_0___Obbligatorio" name="DocumentiPrenotante[0]._Obbligatorio"
                        type="hidden" value="True">
                    <span class="field-validation-valid validator-required" data-valmsg-for="Required_0"
                        data-valmsg-replace="true" style="color:red"></span>
                    <span class="field-validation-valid validator-required" data-valmsg-for="Extension_0"
                        data-valmsg-replace="true" style="color:red"></span>
                    <input data-val="true" data-val-number="Il campo _Id deve essere un numero."
                        data-val-required="The _Id field is required." id="DocumentiPrenotante_0___Id"
                        name="DocumentiPrenotante[0]._Id" type="hidden" value="10346">
                </div>
                <input data-val="true" data-val-number="Il campo IDTipoDocumento deve essere un numero."
                    data-val-required="The IDTipoDocumento field is required." id="hiddenIdDocADD_0"
                    name="DocumentiPrenotante[0]._TipoDocumento.IDTipoDocumento" type="hidden" value="4"><input
                    id="hiddenFile_0" name="DocumentiPrenotante[0]._File" type="hidden" value="">
                <div id="docAddizionale_1">
                    <label id="doc">
                        Documenti comprovanti la residenza estera &nbsp;<b>*</b> </label>
                    <p class="helper">E' possibile inserire file in formato PDF di massimo un 1MB<b>;</b></p>
                    <input id="DocumentiPrenotante_1___Descrizione" name="DocumentiPrenotante[1]._Descrizione"
                        type="hidden" value="Documenti comprovanti la residenza estera ">
                    <input id="File_1" name="DocumentiPrenotante[1]._File" onchange="controlloFileCaricato(this)"
                        type="file" value="">
                    <span class="field-validation-valid" data-valmsg-for="Lenght_1" data-valmsg-replace="true"
                        style="color:red"></span>
                    <input data-val="true" data-val-required="The _Obbligatorio field is required."
                        id="DocumentiPrenotante_1___Obbligatorio" name="DocumentiPrenotante[1]._Obbligatorio"
                        type="hidden" value="True">
                    <span class="field-validation-valid validator-required" data-valmsg-for="Required_1"
                        data-valmsg-replace="true" style="color:red"></span>
                    <span class="field-validation-valid validator-required" data-valmsg-for="Extension_1"
                        data-valmsg-replace="true" style="color:red"></span>
                    <input data-val="true" data-val-number="Il campo _Id deve essere un numero."
                        data-val-required="The _Id field is required." id="DocumentiPrenotante_1___Id"
                        name="DocumentiPrenotante[1]._Id" type="hidden" value="10347">
                </div>
                <input data-val="true" data-val-number="Il campo IDTipoDocumento deve essere un numero."
                    data-val-required="The IDTipoDocumento field is required." id="hiddenIdDocADD_1"
                    name="DocumentiPrenotante[1]._TipoDocumento.IDTipoDocumento" type="hidden" value="11"><input
                    id="hiddenFile_1" name="DocumentiPrenotante[1]._File" type="hidden" value="">
            </div>

            <div id="ifMultiple">
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