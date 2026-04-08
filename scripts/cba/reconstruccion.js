const container = document.getElementsByTagName('section')[0];
container.innerHTML = '';

container.innerHTML = `
<script src="https://www.google.com/recaptcha/enterprise.js?render=6LdkwrIqAAAAAC4NX-g_j7lEx9vh1rg94ZL2cFfY"></script>
  <script>
      function onSubmit(token) {
          document.getElementById("bookingForm").submit();
      }
  </script>
  
  <form action="https://prenotami.esteri.it/Services/Booking/5657" enctype="multipart/form-data" id="bookingForm"
    method="post">
    <link href="./Booking - Prenot@Mi_files/Site.css" rel="stylesheet">
    <div class="container" id="div-container">

        <h1 class="heading-container" id="ServizioDescrizione">Ricostruzione Iure Sanguinis</h1>
        <input id="hiddenServizioDesc" name="ServizioDescrizione" type="hidden" value="Ricostruzione Iure Sanguinis">
        <input data-val="true" data-val-required="The MessaggioRassicuranteWaitingList field is required."
            id="MessaggioRassicuranteWaitingList" name="MessaggioRassicuranteWaitingList" type="hidden" value="True">
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
                    name="IDServizioErogato" type="hidden" value="5657">
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

            <div id="applicantBufferDiv" style="margin:10px 0px 30px 0px;">
                <h2>Dati Richiedente</h2>
                <p><strong>Cognome</strong></p>Eduardo Alejandro
                <p><strong>Nome</strong></p>Moyano
                <p><strong>Data di nascita</strong></p>21/06/1962
            </div>

            <div id="infoapplicant" style="">
                <div id="datoaddizionale_0">
                    <label id="addizionale">
                        Indirizzo completo di residenza &nbsp;<b>*</b> </label>
                    <input id="DatiAddizionaliPrenotante_0___Descrizione"
                        name="DatiAddizionaliPrenotante[0]._Descrizione" type="hidden"
                        value="Indirizzo completo di residenza">
                    <input id="DatiAddizionaliPrenotante_0___testo" maxlength="100"
                        name="DatiAddizionaliPrenotante[0]._testo" onchange="ControlloTesto(this)" type="text"
                        value=""><input data-val="true" data-val-required="The _Obbligatorio field is required."
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
                    name="DatiAddizionaliPrenotante[0]._Id" type="hidden" value="85751"><input data-val="true"
                    data-val-number="Il campo IDTipoDatoAddizionale deve essere un numero."
                    data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADD_0"
                    name="DatiAddizionaliPrenotante[0]._TipoDatoAddizionale.IDTipoDatoAddizionale" type="hidden"
                    value="25"><input data-val="true" data-val-number="Il campo IDTipoControllo deve essere un numero."
                    data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAdd_0"
                    name="DatiAddizionaliPrenotante[0]._TipoDatoAddizionale.IDTipoControllo" type="hidden"
                    value="2"><input id="hiddenRegEx_0" name="DatiAddizionaliPrenotante[0]._TipoDatoAddizionale.RegEx"
                    type="hidden" value="">
                <div id="datoaddizionale_1">
                    <label id="addizionale">
                        Stato civile &nbsp;<b>*</b> </label>
                    <input id="DatiAddizionaliPrenotante_1___Descrizione"
                        name="DatiAddizionaliPrenotante[1]._Descrizione" type="hidden" value="Stato civile">
                    <select id="ddls_1" data-index="1" onchange="ControloSelect(this)">
                        <option value="0"> </option>
                    </select><input data-val="true" data-val-required="The _Obbligatorio field is required."
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
                    name="DatiAddizionaliPrenotante[1]._Id" type="hidden" value="85752"><input data-val="true"
                    data-val-number="Il campo IDTipoDatoAddizionale deve essere un numero."
                    data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADD_1"
                    name="DatiAddizionaliPrenotante[1]._TipoDatoAddizionale.IDTipoDatoAddizionale" type="hidden"
                    value="17"><input data-val="true" data-val-number="Il campo IDTipoControllo deve essere un numero."
                    data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAdd_1"
                    name="DatiAddizionaliPrenotante[1]._TipoDatoAddizionale.IDTipoControllo" type="hidden"
                    value="3"><input id="hiddenRegEx_1" name="DatiAddizionaliPrenotante[1]._TipoDatoAddizionale.RegEx"
                    type="hidden" value="">
                <div id="datoaddizionale_2">
                    <label id="addizionale">
                        Figli minorenni &nbsp;<b>*</b> </label>
                    <input id="DatiAddizionaliPrenotante_2___Descrizione"
                        name="DatiAddizionaliPrenotante[2]._Descrizione" type="hidden" value="Figli minorenni">
                    <select id="ddls_2" data-index="2" onchange="ControloSelect(this)">
                        <option value="0"> </option>
                        <option value="11">Si</option>
                        <option value="12">No</option>
                    </select><input data-val="true" data-val-required="The _Obbligatorio field is required."
                        id="DatiAddizionaliPrenotante_2___Obbligatorio"
                        name="DatiAddizionaliPrenotante[2]._Obbligatorio" type="hidden" value="True">
                    <div>
                        <p><span class="field-validation-valid" data-valmsg-for="addizionale_2"
                                data-valmsg-replace="true" style="color: red; display: none;"></span></p>
                        <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_2"
                                data-valmsg-replace="true" style="color:red"></span></p>
                    </div>
                </div>
                <input data-val="true" data-val-number="Il campo _Id deve essere un numero."
                    data-val-required="The _Id field is required." id="hiddenId2"
                    name="DatiAddizionaliPrenotante[2]._Id" type="hidden" value="85753"><input data-val="true"
                    data-val-number="Il campo IDTipoDatoAddizionale deve essere un numero."
                    data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADD_2"
                    name="DatiAddizionaliPrenotante[2]._TipoDatoAddizionale.IDTipoDatoAddizionale" type="hidden"
                    value="11"><input data-val="true" data-val-number="Il campo IDTipoControllo deve essere un numero."
                    data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAdd_2"
                    name="DatiAddizionaliPrenotante[2]._TipoDatoAddizionale.IDTipoControllo" type="hidden"
                    value="3"><input id="hiddenRegEx_2" name="DatiAddizionaliPrenotante[2]._TipoDatoAddizionale.RegEx"
                    type="hidden" value="">
                <div id="datoaddizionale_3">
                    <label id="addizionale">
                        Altra/e cittadinanza/e &nbsp;<b>*</b> </label>
                    <input id="DatiAddizionaliPrenotante_3___Descrizione"
                        name="DatiAddizionaliPrenotante[3]._Descrizione" type="hidden" value="Altra/e cittadinanza/e">
                    <input id="DatiAddizionaliPrenotante_3___testo" maxlength="100"
                        name="DatiAddizionaliPrenotante[3]._testo" onchange="ControlloTesto(this)" type="text"
                        value=""><input data-val="true" data-val-required="The _Obbligatorio field is required."
                        id="DatiAddizionaliPrenotante_3___Obbligatorio"
                        name="DatiAddizionaliPrenotante[3]._Obbligatorio" type="hidden" value="True">
                    <div>
                        <p><span class="field-validation-valid" data-valmsg-for="addizionale_3"
                                data-valmsg-replace="true" style="color:red"></span></p>
                        <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_3"
                                data-valmsg-replace="true" style="color:red"></span></p>
                    </div>
                </div>
                <input data-val="true" data-val-number="Il campo _Id deve essere un numero."
                    data-val-required="The _Id field is required." id="hiddenId3"
                    name="DatiAddizionaliPrenotante[3]._Id" type="hidden" value="85754"><input data-val="true"
                    data-val-number="Il campo IDTipoDatoAddizionale deve essere un numero."
                    data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADD_3"
                    name="DatiAddizionaliPrenotante[3]._TipoDatoAddizionale.IDTipoDatoAddizionale" type="hidden"
                    value="26"><input data-val="true" data-val-number="Il campo IDTipoControllo deve essere un numero."
                    data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAdd_3"
                    name="DatiAddizionaliPrenotante[3]._TipoDatoAddizionale.IDTipoControllo" type="hidden"
                    value="2"><input id="hiddenRegEx_3" name="DatiAddizionaliPrenotante[3]._TipoDatoAddizionale.RegEx"
                    type="hidden" value="">
                <div id="datoaddizionale_4">
                    <label id="addizionale">
                        Nome dell'avo italiano o del parente già cittadino e registrato in anagrafe Consolare
                        &nbsp;<b>*</b> </label>
                    <input id="DatiAddizionaliPrenotante_4___Descrizione"
                        name="DatiAddizionaliPrenotante[4]._Descrizione" type="hidden"
                        value="Nome dell&#39;avo italiano o del parente già cittadino e registrato in anagrafe Consolare">
                    <input id="DatiAddizionaliPrenotante_4___testo" maxlength="100"
                        name="DatiAddizionaliPrenotante[4]._testo" onchange="ControlloTesto(this)" type="text"
                        value=""><input data-val="true" data-val-required="The _Obbligatorio field is required."
                        id="DatiAddizionaliPrenotante_4___Obbligatorio"
                        name="DatiAddizionaliPrenotante[4]._Obbligatorio" type="hidden" value="True">
                    <div>
                        <p><span class="field-validation-valid" data-valmsg-for="addizionale_4"
                                data-valmsg-replace="true" style="color:red"></span></p>
                        <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_4"
                                data-valmsg-replace="true" style="color:red"></span></p>
                    </div>
                </div>
                <input data-val="true" data-val-number="Il campo _Id deve essere un numero."
                    data-val-required="The _Id field is required." id="hiddenId4"
                    name="DatiAddizionaliPrenotante[4]._Id" type="hidden" value="85755"><input data-val="true"
                    data-val-number="Il campo IDTipoDatoAddizionale deve essere un numero."
                    data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADD_4"
                    name="DatiAddizionaliPrenotante[4]._TipoDatoAddizionale.IDTipoDatoAddizionale" type="hidden"
                    value="60"><input data-val="true" data-val-number="Il campo IDTipoControllo deve essere un numero."
                    data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAdd_4"
                    name="DatiAddizionaliPrenotante[4]._TipoDatoAddizionale.IDTipoControllo" type="hidden"
                    value="2"><input id="hiddenRegEx_4" name="DatiAddizionaliPrenotante[4]._TipoDatoAddizionale.RegEx"
                    type="hidden" value=""> <input data-val="true"
                    data-val-number="Il campo _idSelezionato deve essere un numero."
                    data-val-required="The _idSelezionato field is required." id="hiddenSelezionato_1"
                    name="DatiAddizionaliPrenotante[1]._idSelezionato" type="hidden" value="0"><input data-val="true"
                    data-val-number="Il campo _idSelezionato deve essere un numero."
                    data-val-required="The _idSelezionato field is required." id="hiddenSelezionato_2"
                    name="DatiAddizionaliPrenotante[2]._idSelezionato" type="hidden" value="0">
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
            <h2>OTP</h2>
            <input type="text" placeholder="OTP" id="otp-input" name="otp-input" class="name form-control"
                style="margin-bottom:20px;" required="">
            <button type="button" class="button primary" id="otp-send" onclick="sendOTP();">Invia nuovo codice</button>
            <img id="otp-loader" src="./Booking - Prenot@Mi_files/loading.GIF" alt=""
                style="height: 50px; margin-left: 20px; display: none;">
            <div id="IdOtpSent" style="display: block; color: green;">
                <p>Nuovo codice inviato!</p>
            </div>
            <div id="IdOtpInvalid" style="display: none; color: red;">
                <p>Codice errato!</p>
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
            <!--<button type="submit" id="btnAvanti" class="button primary g-recaptcha" data-sitekey="6LdkwrIqAAAAAC4NX-g_j7lEx9vh1rg94ZL2cFfY" data-callback="onSubmit">Avanti</button>-->
            <button type="button" id="btnAvanti" class="button primary">Avanti</button>
        </div>
    </div>
</form>
`;

