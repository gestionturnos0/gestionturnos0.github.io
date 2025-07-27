const container = document.getElementsByTagName('section')[0];
container.innerHTML = '';

container.innerHTML = `
<script src="https://www.google.com/recaptcha/enterprise.js?render=6LdkwrIqAAAAAC4NX-g_j7lEx9vh1rg94ZL2cFfY"></script>
 <script>
     function onSubmit(token) {
         document.getElementById("bookingForm").submit();
     }
 </script>
 
<form action="https://prenotami.esteri.it/Services/Booking/5291" enctype="multipart/form-data" id="bookingForm" method="post">    <link href="./Booking - Prenot@Mi.html prueba 2_files/Site.css" rel="stylesheet">
    <div class="container" id="div-container">

        <h1 class="heading-container" id="ServizioDescrizione">Cittadinanza IURE SANGUINIS per FIGLI e NIPOTI di ITALIANI NATI IN ITALIA </h1>
        <input id="hiddenServizioDesc" name="ServizioDescrizione" type="hidden" value="Cittadinanza IURE SANGUINIS per FIGLI e NIPOTI di ITALIANI NATI IN ITALIA ">
        <input data-val="true" data-val-required="The MessaggioRassicuranteWaitingList field is required." id="MessaggioRassicuranteWaitingList" name="MessaggioRassicuranteWaitingList" type="hidden" value="True">
        <input data-val="true" data-val-required="The isWaitingListEnabled field is required." id="isWaitingListEnabled" name="isWaitingListEnabled" type="hidden" value="False">
        
        
        <div id="divRiepilogoPrenotazione" class="riepilogoPrenotazione" style=""><div id="divTitolo">Prenotazione Singola</div><div id="divDettaglio">
            
        </div><div id="divAppuntamenti"><ul>
<li></li></ul></div></div>
        <div>
            <h2>Informazioni sulla prenotazione</h2>

            <div id="typeofbooking">
                <input data-val="true" data-val-number="Il campo IDServizioConsolare deve essere un numero." data-val-required="The IDServizioConsolare field is required." id="IDServizioConsolare" name="IDServizioConsolare" type="hidden" value="27">
                <input data-val="true" data-val-number="Il campo IDServizioErogato deve essere un numero." data-val-required="The IDServizioErogato field is required." id="IDServizioErogato" name="IDServizioErogato" type="hidden" value="5291">
                <label>Tipo Prenotazione</label>
                <select id="typeofbookingddl"><option value="1">Prenotazione Singola</option></select>
                <input data-val="true" data-val-number="Il campo IdTipoPrenotazione deve essere un numero." data-val-required="The IdTipoPrenotazione field is required." id="hiddenTipoPrenotazione" name="IdTipoPrenotazione" type="hidden" value="1">
                <input data-val="true" data-val-number="Il campo NumMaxAccompagnatori deve essere un numero." data-val-required="The NumMaxAccompagnatori field is required." id="hiddenNumMax" name="NumMaxAccompagnatori" type="hidden" value="0">



            </div>
            <div id="numberOfCompanions" style="display:none">
                <label>Numero richiedenti aggiuntivi</label>
                <select id="ddlnumberofcompanions">
                </select>
                <input data-val="true" data-val-number="Il campo NumAccompagnatoriSelected deve essere un numero." data-val-required="The NumAccompagnatoriSelected field is required." id="numAccSelected" name="NumAccompagnatoriSelected" type="hidden" value="0">
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
                                Nome dell'avo italiano o del parente già cittadino e registrato in anagrafe Consolare &nbsp;<b>*</b>                            </label>
                            <input id="DatiAddizionaliPrenotante_0___Descrizione" name="DatiAddizionaliPrenotante[0]._Descrizione" type="hidden" value="Nome dell&#39;avo italiano o del parente già cittadino e registrato in anagrafe Consolare">
                        <input id="DatiAddizionaliPrenotante_0___testo" maxlength="100" name="DatiAddizionaliPrenotante[0]._testo" onchange="ControlloTesto(this)" type="text" value=""><input data-val="true" data-val-required="The _Obbligatorio field is required." id="DatiAddizionaliPrenotante_0___Obbligatorio" name="DatiAddizionaliPrenotante[0]._Obbligatorio" type="hidden" value="True"><div><p><span class="field-validation-valid" data-valmsg-for="addizionale_0" data-valmsg-replace="true" style="color:red"></span></p> <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_0" data-valmsg-replace="true" style="color:red"></span></p> </div></div>
<input data-val="true" data-val-number="Il campo _Id deve essere un numero." data-val-required="The _Id field is required." id="hiddenId0" name="DatiAddizionaliPrenotante[0]._Id" type="hidden" value="76830"><input data-val="true" data-val-number="Il campo IDTipoDatoAddizionale deve essere un numero." data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADD_0" name="DatiAddizionaliPrenotante[0]._TipoDatoAddizionale.IDTipoDatoAddizionale" type="hidden" value="60"><input data-val="true" data-val-number="Il campo IDTipoControllo deve essere un numero." data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAdd_0" name="DatiAddizionaliPrenotante[0]._TipoDatoAddizionale.IDTipoControllo" type="hidden" value="2"><input id="hiddenRegEx_0" name="DatiAddizionaliPrenotante[0]._TipoDatoAddizionale.RegEx" type="hidden" value="">                                        <div id="docAddizionale_0">
                            <label id="doc">
                                Documento di identità/viaggio  &nbsp;<b>*</b>                            </label>
                            <p class="helper">E' possibile inserire file in formato PDF di massimo un 1MB<b>;</b></p>
                            <input id="DocumentiPrenotante_0___Descrizione" name="DocumentiPrenotante[0]._Descrizione" type="hidden" value="Documento di identità/viaggio">
                            <input id="File_0" name="DocumentiPrenotante[0]._File" onchange="controlloFileCaricato(this)" type="file" value="">
                            <span class="field-validation-valid" data-valmsg-for="Lenght_0" data-valmsg-replace="true" style="color:red"></span>
                            <input data-val="true" data-val-required="The _Obbligatorio field is required." id="DocumentiPrenotante_0___Obbligatorio" name="DocumentiPrenotante[0]._Obbligatorio" type="hidden" value="True">
                            <span class="field-validation-valid validator-required" data-valmsg-for="Required_0" data-valmsg-replace="true" style="color:red"></span>
                            <span class="field-validation-valid validator-required" data-valmsg-for="Extension_0" data-valmsg-replace="true" style="color:red"></span>
                            <input data-val="true" data-val-number="Il campo _Id deve essere un numero." data-val-required="The _Id field is required." id="DocumentiPrenotante_0___Id" name="DocumentiPrenotante[0]._Id" type="hidden" value="19387">
                        </div>
<input data-val="true" data-val-number="Il campo IDTipoDocumento deve essere un numero." data-val-required="The IDTipoDocumento field is required." id="hiddenIdDocADD_0" name="DocumentiPrenotante[0]._TipoDocumento.IDTipoDocumento" type="hidden" value="4"><input id="hiddenFile_0" name="DocumentiPrenotante[0]._File" type="hidden" value="">            </div>

            <div id="ifMultiple" style="display: none;">
            </div>
        </div>
        <div>
            <h2>Note per la sede</h2>
            <textarea cols="20" id="BookingNotes" maxlength="100" name="BookingNotes" rows="2" style="width:100%; height: 200px; resize:none"></textarea>
        </div>

        <div style="margin:30px 0px 30px 0px;">
                <h2>OTP</h2>
                <input type="text" placeholder="OTP" id="otp-input" name="otp-input" class="name form-control" style="margin-bottom:20px;" required="">
                <button type="button" class="button primary" id="otp-send" onclick="sendOTP();">Invia nuovo codice</button>
                <img id="otp-loader" src="./Booking - Prenot@Mi.html prueba 2_files/loading.GIF" alt="" style="height:50px;margin-left:20px;display:none;">
                <div id="IdOtpSent" style="display:none; color:green;"><p>Nuovo codice inviato!</p></div>
                <div id="IdOtpInvalid" style="display: none; color: red;"><p>Codice errato!</p></div>

        </div>

        <div>
            <h2>Informativa sulla Privacy</h2>
            <div>
                <div class="row">
                    <input data-val="true" data-val-required="The PrivacyCheck field is required." id="PrivacyCheck" name="PrivacyCheck" required="" style="-ms-transform: scale(2); -webkit-transform: scale(2); width:50px;" type="checkbox" value="true"><input name="PrivacyCheck" type="hidden" value="false">
                    <label style="font-size:large">Ho preso visione e accetto l <a href="https://prenotami.esteri.it/Content/docs/PRIVACY_LLTP.pdf#toolbar=0&amp;zoom=141" target="_blank"> Informativa per la privacy</a></label>
                    <div>
                        <br>
                        <span class="field-validation-valid" data-valmsg-for="Privacy" data-valmsg-replace="true" style="text-align:left; color:red;"></span>
                        <span tipoprenotazionegiainserito="Tipo di prenotazione già effettuata per questo servizio" class="field-validation-valid" data-valmsg-for="Invalid booking" data-valmsg-replace="true" style="text-align:left; color:red;"></span>

                    </div>
                </div>
            </div>
        </div>
        <div class="footing-container">
            <button type="button" class="button primary" onclick="window.location.href=&#39;/Services/Index&#39;;">Torna alla lista</button>
            <div><div class="grecaptcha-badge" data-style="none" style="width: 256px; height: 60px; position: fixed; visibility: hidden;"><div class="grecaptcha-logo"><iframe title="reCAPTCHA" width="256" height="60" role="presentation" name="a-qiw5uih3qdbn" frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation" src="./Booking - Prenot@Mi.html prueba 2_files/anchor.html"></iframe></div><div class="grecaptcha-error"></div><textarea id="g-recaptcha-response" name="g-recaptcha-response" class="g-recaptcha-response" style="width: 250px; height: 40px; border: 1px solid rgb(193, 193, 193); margin: 10px 25px; padding: 0px; resize: none; display: none;"></textarea></div><iframe style="display: none;" src="./Booking - Prenot@Mi.html prueba 2_files/saved_resource(2).html"></iframe></div><button type="submit" id="btnAvanti" class="button primary g-recaptcha" data-sitekey="6LdkwrIqAAAAAC4NX-g_j7lEx9vh1rg94ZL2cFfY" data-callback="onSubmit">Avanti</button>
        </div>
    </div>
</form>
`;
