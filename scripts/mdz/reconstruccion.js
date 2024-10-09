const container = document.getElementsByTagName('section')[0];
container.innerHTML = '';

container.innerHTML = `
<form action="/Services/Booking/5291" enctype="multipart/form-data" id="bookingForm" method="post">    
    <div class="container" id="div-container">

        <h1 class="heading-container" id="ServizioDescrizione"></h1>
        <input id="hiddenServizioDesc" name="ServizioDescrizione" type="hidden"
            value="Servizio trattazione pratiche cittadinanza per discendenza" />
        <input data-val="true" data-val-required="The MessaggioRassicuranteWaitingList field is required."
            id="MessaggioRassicuranteWaitingList" name="MessaggioRassicuranteWaitingList" type="hidden" value="False" />
        <input data-val="true" data-val-required="The isWaitingListEnabled field is required." id="isWaitingListEnabled"
            name="isWaitingListEnabled" type="hidden" value="False" />


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
                    name="IDServizioConsolare" type="hidden" value="27" />
                <input data-val="true" data-val-number="Il campo IDServizioErogato deve essere un numero."
                    data-val-required="The IDServizioErogato field is required." id="IDServizioErogato"
                    name="IDServizioErogato" type="hidden" value="5291" />
                <label>Tipo Prenotazione</label>
                <select id="typeofbookingddl"></select>
                <input data-val="true" data-val-number="Il campo IdTipoPrenotazione deve essere un numero."
                    data-val-required="The IdTipoPrenotazione field is required." id="hiddenTipoPrenotazione"
                    name="IdTipoPrenotazione" type="hidden" value="1" />
                <input data-val="true" data-val-number="Il campo NumMaxAccompagnatori deve essere un numero."
                    data-val-required="The NumMaxAccompagnatori field is required." id="hiddenNumMax"
                    name="NumMaxAccompagnatori" type="hidden" value="0" />



            </div>
            <div id="numberOfCompanions" style="display:none">
                <label>Numero richiedenti aggiuntivi</label>
                <select id="ddlnumberofcompanions">
                </select>
                <input data-val="true" data-val-number="Il campo NumAccompagnatoriSelected deve essere un numero."
                    data-val-required="The NumAccompagnatoriSelected field is required." id="numAccSelected"
                    name="NumAccompagnatoriSelected" type="hidden" value="0" />
            </div>

            <div id="applicantBufferDiv" style="margin:10px 0px 30px 0px;">
                <h2>Dati Richiedente</h2>
                <p><strong>Cognome</strong></p>
                <p><strong>Nome</strong></p>
                <p><strong>Data di nascita</strong></p>
            </div>

            <div id="infoapplicant" style="display:none">
            </div>

            <div id="ifMultiple">
            </div>
        </div>
        <div>
            <h2>Note per la sede</h2>
            <textarea cols="20" id="BookingNotes" maxlength="100" name="BookingNotes" rows="2"
                style="width:100%; height: 200px; resize:none">
</textarea>
        </div>

        <div style="margin:30px 0px 30px 0px;">
            <h2>OTP</h2>
            <input type="text" placeholder="OTP" id="otp-input" name="otp-input" class="name form-control"
                style="margin-bottom:20px;" required />
            <button type="button" class="button primary" id="otp-send" onclick="sendOTP();">Invia nuovo codice</button>
            <img id="otp-loader" src="/Content/img/loading.GIF" alt=""
                style="height:50px;margin-left:20px;display:none;">
            <div id="IdOtpSent" style="display:none; color:green;">
                <p>Nuovo codice inviato!</p>
            </div>
            <div id="IdOtpInvalid" style="display: none; color: red;">
                <p>Codice errato!</p>
            </div>
            <script>
                window.alert('Codice errato!');
            </script>

        </div>

        <div>
            <h2>Informativa sulla Privacy</h2>
            <div>
                <div class="row">
                    <input checked="checked" data-val="true" data-val-required="The PrivacyCheck field is required."
                        id="PrivacyCheck" name="PrivacyCheck" required=""
                        style="-ms-transform: scale(2); -webkit-transform: scale(2); width:50px;" type="checkbox"
                        value="true" /><input name="PrivacyCheck" type="hidden" value="false" />
                    <label style="font-size:large">Ho preso visione e accetto l <a
                            href="/Content/docs/PRIVACY_LLTP.pdf#toolbar=0&amp;zoom=141" target="_blank"> Informativa
                            per la privacy</a></label>
                    <div>
                        <br />
                        <span class="field-validation-valid" data-valmsg-for="Privacy" data-valmsg-replace="true"
                            style="text-align:left; color:red;"></span>
                        <span TipoPrenotazioneGiaInserito="Tipo di prenotazione già effettuata per questo servizio"
                            class="field-validation-valid" data-valmsg-for="Invalid booking" data-valmsg-replace="true"
                            style="text-align:left; color:red;"></span>

                    </div>
                </div>
            </div>
        </div>
        <div class="footing-container">
            <button type="button" class="button primary" onclick="window.location.href='/Services/Index';">Torna alla
                lista</button>
            <button type="submit" id="btnAvanti" class="button primary g-recaptcha" data-sitekey=""
                data-callback="onSubmit">Avanti</button>
        </div>
    </div>
</form>
`;
