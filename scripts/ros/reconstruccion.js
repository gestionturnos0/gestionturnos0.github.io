const container = document.getElementsByTagName('section')[0];
container.innerHTML = '';

container.innerHTML = `
<form action="https://prenotami.esteri.it/Services/Booking/974" enctype="multipart/form-data" id="bookingForm"
    method="post">    
    <div class="container" id="div-container">

        <h1 class="heading-container" id="ServizioDescrizione">Reconstrucción de ciudadanía</h1>
        <input id="hiddenServizioDesc" name="ServizioDescrizione" type="hidden" value="Reconstrucción de ciudadanía">
        <input data-val="true" data-val-required="The MessaggioRassicuranteWaitingList field is required."
            id="MessaggioRassicuranteWaitingList" name="MessaggioRassicuranteWaitingList" type="hidden" value="True">
        <input data-val="true" data-val-required="The isWaitingListEnabled field is required." id="isWaitingListEnabled"
            name="isWaitingListEnabled" type="hidden" value="False">


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
                    name="IDServizioErogato" type="hidden" value="974">
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

            <div id="applicantBufferDiv" style="margin: 10px 0px 30px; display: none;">
                <h2>Datos del solicitante</h2>
                <p><strong>Apellido</strong></p>
                <p><strong>Nombre</strong></p>
                <p><strong>Fecha de nacimiento</strong></p>
            </div>

            <div id="infoapplicant" style="">
                <div id="docAddizionale_0">
                    <label id="doc">
                        Documento de identidad/viaje &nbsp;<b>*</b> </label>
                    <p class="helper">Se pueden ingresar archivos en formato PDF de un máximo de 1MB<b>;</b></p>
                    <input id="DocumentiPrenotante_0___Descrizione" name="DocumentiPrenotante[0]._Descrizione"
                        type="hidden" value="Documento de identidad/viaje">
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
                    <input data-val="true" data-val-number="The field _Id must be a number."
                        data-val-required="The _Id field is required." id="DocumentiPrenotante_0___Id"
                        name="DocumentiPrenotante[0]._Id" type="hidden" value="15824">
                </div>
                <input data-val="true" data-val-number="The field IDTipoDocumento must be a number."
                    data-val-required="The IDTipoDocumento field is required." id="hiddenIdDocADD_0"
                    name="DocumentiPrenotante[0]._TipoDocumento.IDTipoDocumento" type="hidden" value="4"><input
                    id="hiddenFile_0" name="DocumentiPrenotante[0]._File" type="hidden" value="">
                <div id="docAddizionale_1">
                    <label id="doc">
                        Documentos que comprueben la residencia en el exterior &nbsp;<b>*</b> </label>
                    <p class="helper">Se pueden ingresar archivos en formato PDF de un máximo de 1MB<b>;</b></p>
                    <input id="DocumentiPrenotante_1___Descrizione" name="DocumentiPrenotante[1]._Descrizione"
                        type="hidden" value="Documentos que comprueben la residencia en el exterior">
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
                    <input data-val="true" data-val-number="The field _Id must be a number."
                        data-val-required="The _Id field is required." id="DocumentiPrenotante_1___Id"
                        name="DocumentiPrenotante[1]._Id" type="hidden" value="15825">
                </div>
                <input data-val="true" data-val-number="The field IDTipoDocumento must be a number."
                    data-val-required="The IDTipoDocumento field is required." id="hiddenIdDocADD_1"
                    name="DocumentiPrenotante[1]._TipoDocumento.IDTipoDocumento" type="hidden" value="11"><input
                    id="hiddenFile_1" name="DocumentiPrenotante[1]._File" type="hidden" value="">
            </div>

            <div id="ifMultiple" style="display: none;">
            </div>
        </div>
        <div>
            <h2>Notas para la Sede</h2>
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
            <h2>Información acerca de la Privacidad</h2>
            <div>
                <div class="row">
                    <input data-val="true" data-val-required="The PrivacyCheck field is required." id="PrivacyCheck"
                        name="PrivacyCheck" required=""
                        style="-ms-transform: scale(2); -webkit-transform: scale(2); width:50px;" type="checkbox"
                        value="true"><input name="PrivacyCheck" type="hidden" value="false">
                    <label style="font-size:large">He leído y acepto ... <a
                            href="https://prenotami.esteri.it/Content/docs/PRIVACY_LLTP.pdf#toolbar=0&amp;zoom=141"
                            target="_blank"> Información por la privacidad</a></label>
                    <div>
                        <br>
                        <span class="field-validation-valid" data-valmsg-for="Privacy" data-valmsg-replace="true"
                            style="text-align:left; color:red;"></span>
                        <span tipoprenotazionegiainserito="Type of reservation already made for this service"
                            class="field-validation-valid" data-valmsg-for="Invalid booking" data-valmsg-replace="true"
                            style="text-align:left; color:red;"></span>

                    </div>
                </div>
            </div>
        </div>
        <div class="footing-container">
            <button type="button" class="button primary"
                onclick="window.location.href=&#39;/Services/Index&#39;;">Volver a la lista</button>
            <button type="submit" id="btnAvanti" class="button primary g-recaptcha"
                data-sitekey="6LdSmG4cAAAAAOarRxGIhehvv4sPgVeF-vRi-Jqb" data-callback="onSubmit">Avanzar</button>
        </div>
    </div>
</form>
`;
