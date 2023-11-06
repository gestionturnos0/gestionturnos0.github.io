const container = document.getElementsByTagName('section')[0];
container.innerHTML = '';

container.innerHTML = `
<form action="/Services/Booking/1193" enctype="multipart/form-data" id="bookingForm" method="post">    
<div class="container" id="div-container">

    <h1 class="heading-container" id="ServizioDescrizione">Servicio de emision de pasaporte</h1>
    <input id="hiddenServizioDesc" name="ServizioDescrizione" type="hidden"
        value="Servicio de emision de pasaporte">
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
        <h2>Información acerca de la reserva</h2>

        <div id="typeofbooking">
            <input data-val="true" data-val-number="The field IDServizioConsolare must be a number."
                data-val-required="The IDServizioConsolare field is required." id="IDServizioConsolare"
                name="IDServizioConsolare" type="hidden" value="2">
            <input data-val="true" data-val-number="The field IDServizioErogato must be a number."
                data-val-required="The IDServizioErogato field is required." id="IDServizioErogato"
                name="IDServizioErogato" type="hidden" value="1193">
            <label>Tipo de reserva</label>
            <select id="typeofbookingddl"></select>
            <input data-val="true" data-val-number="The field IdTipoPrenotazione must be a number."
                data-val-required="The IdTipoPrenotazione field is required." id="hiddenTipoPrenotazione"
                name="IdTipoPrenotazione" type="hidden" value="0">
            <input data-val="true" data-val-number="The field NumMaxAccompagnatori must be a number."
                data-val-required="The NumMaxAccompagnatori field is required." id="hiddenNumMax"
                name="NumMaxAccompagnatori" type="hidden" value="5">



        </div>
        <div id="numberOfCompanions" style="display:none">
            <label>Cantidad de solicitantes adicionales</label>
            <select id="ddlnumberofcompanions">
                <option value="1"> 1 </option>
                <option value="2"> 2 </option>
                <option value="3"> 3 </option>
                <option value="4"> 4 </option>
                <option value="5"> 5 </option>
            </select>
            <input data-val="true" data-val-number="The field NumAccompagnatoriSelected must be a number."
                data-val-required="The NumAccompagnatoriSelected field is required." id="numAccSelected"
                name="NumAccompagnatoriSelected" type="hidden" value="0">
        </div>

        <div id="infoapplicant" style="">
            <h2>Datos del solicitante</h2>
            <div id="datoaddizionale_0">
                <label id="addizionale">
                    Dirección completa de residencia &nbsp;<b>*</b> </label>
                <input id="DatiAddizionaliPrenotante_0___Descrizione"
                    name="DatiAddizionaliPrenotante[0]._Descrizione" type="hidden"
                    value="Dirección completa de residencia">
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
            <input data-val="true" data-val-number="The field _Id must be a number."
                data-val-required="The _Id field is required." id="hiddenId0"
                name="DatiAddizionaliPrenotante[0]._Id" type="hidden" value="36981"><input data-val="true"
                data-val-number="The field IDTipoDatoAddizionale must be a number."
                data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADD_0"
                name="DatiAddizionaliPrenotante[0]._TipoDatoAddizionale.IDTipoDatoAddizionale" type="hidden"
                value="25"><input data-val="true" data-val-number="The field IDTipoControllo must be a number."
                data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAdd_0"
                name="DatiAddizionaliPrenotante[0]._TipoDatoAddizionale.IDTipoControllo" type="hidden"
                value="2"><input id="hiddenRegEx_0" name="DatiAddizionaliPrenotante[0]._TipoDatoAddizionale.RegEx"
                type="hidden" value="">
            <div id="datoaddizionale_1">
                <label id="addizionale">
                    Hijos menores (S/N) &nbsp;<b>*</b> </label>
                <input id="DatiAddizionaliPrenotante_1___Descrizione"
                    name="DatiAddizionaliPrenotante[1]._Descrizione" type="hidden" value="Hijos menores (S/N)">
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
            <input data-val="true" data-val-number="The field _Id must be a number."
                data-val-required="The _Id field is required." id="hiddenId1"
                name="DatiAddizionaliPrenotante[1]._Id" type="hidden" value="36982"><input data-val="true"
                data-val-number="The field IDTipoDatoAddizionale must be a number."
                data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADD_1"
                name="DatiAddizionaliPrenotante[1]._TipoDatoAddizionale.IDTipoDatoAddizionale" type="hidden"
                value="11"><input data-val="true" data-val-number="The field IDTipoControllo must be a number."
                data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAdd_1"
                name="DatiAddizionaliPrenotante[1]._TipoDatoAddizionale.IDTipoControllo" type="hidden"
                value="3"><input id="hiddenRegEx_1" name="DatiAddizionaliPrenotante[1]._TipoDatoAddizionale.RegEx"
                type="hidden" value="">
            <div id="datoaddizionale_2">
                <label id="addizionale">
                    Número de hijos menores &nbsp;<b>*</b> </label>
                <input id="DatiAddizionaliPrenotante_2___Descrizione"
                    name="DatiAddizionaliPrenotante[2]._Descrizione" type="hidden" value="Número de hijos menores">
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
                name="DatiAddizionaliPrenotante[2]._Id" type="hidden" value="36983"><input data-val="true"
                data-val-number="The field IDTipoDatoAddizionale must be a number."
                data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADD_2"
                name="DatiAddizionaliPrenotante[2]._TipoDatoAddizionale.IDTipoDatoAddizionale" type="hidden"
                value="12"><input data-val="true" data-val-number="The field IDTipoControllo must be a number."
                data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAdd_2"
                name="DatiAddizionaliPrenotante[2]._TipoDatoAddizionale.IDTipoControllo" type="hidden"
                value="2"><input id="hiddenRegEx_2" name="DatiAddizionaliPrenotante[2]._TipoDatoAddizionale.RegEx"
                type="hidden" value="">
            <div id="datoaddizionale_3">
                <label id="addizionale">
                    Estado Civil &nbsp;<b>*</b> </label>
                <input id="DatiAddizionaliPrenotante_3___Descrizione"
                    name="DatiAddizionaliPrenotante[3]._Descrizione" type="hidden" value="Estado Civil">
                <select id="ddls_3" data-index="3" onchange="ControloSelect(this)">
                    <option value="0"> </option>
                </select><input data-val="true" data-val-required="The _Obbligatorio field is required."
                    id="DatiAddizionaliPrenotante_3___Obbligatorio"
                    name="DatiAddizionaliPrenotante[3]._Obbligatorio" type="hidden" value="True">
                <div>
                    <p><span class="field-validation-valid" data-valmsg-for="addizionale_3"
                            data-valmsg-replace="true" style="color:red"></span></p>
                    <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_3"
                            data-valmsg-replace="true" style="color:red"></span></p>
                </div>
            </div>
            <input data-val="true" data-val-number="The field _Id must be a number."
                data-val-required="The _Id field is required." id="hiddenId3"
                name="DatiAddizionaliPrenotante[3]._Id" type="hidden" value="36984"><input data-val="true"
                data-val-number="The field IDTipoDatoAddizionale must be a number."
                data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADD_3"
                name="DatiAddizionaliPrenotante[3]._TipoDatoAddizionale.IDTipoDatoAddizionale" type="hidden"
                value="17"><input data-val="true" data-val-number="The field IDTipoControllo must be a number."
                data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAdd_3"
                name="DatiAddizionaliPrenotante[3]._TipoDatoAddizionale.IDTipoControllo" type="hidden"
                value="3"><input id="hiddenRegEx_3" name="DatiAddizionaliPrenotante[3]._TipoDatoAddizionale.RegEx"
                type="hidden" value="">
            <div id="datoaddizionale_4">
                <label id="addizionale">
                    Nombre y Apellido del cónyuge &nbsp;<b>*</b> </label>
                <input id="DatiAddizionaliPrenotante_4___Descrizione"
                    name="DatiAddizionaliPrenotante[4]._Descrizione" type="hidden"
                    value="Nombre y Apellido del cónyuge">
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
            <input data-val="true" data-val-number="The field _Id must be a number."
                data-val-required="The _Id field is required." id="hiddenId4"
                name="DatiAddizionaliPrenotante[4]._Id" type="hidden" value="36985"><input data-val="true"
                data-val-number="The field IDTipoDatoAddizionale must be a number."
                data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADD_4"
                name="DatiAddizionaliPrenotante[4]._TipoDatoAddizionale.IDTipoDatoAddizionale" type="hidden"
                value="18"><input data-val="true" data-val-number="The field IDTipoControllo must be a number."
                data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAdd_4"
                name="DatiAddizionaliPrenotante[4]._TipoDatoAddizionale.IDTipoControllo" type="hidden"
                value="2"><input id="hiddenRegEx_4" name="DatiAddizionaliPrenotante[4]._TipoDatoAddizionale.RegEx"
                type="hidden" value="">
            <div id="datoaddizionale_5">
                <label id="addizionale">
                    Titular de pasaporte italiano vencido/próximo a vencer (S/N) &nbsp;<b>*</b> </label>
                <input id="DatiAddizionaliPrenotante_5___Descrizione"
                    name="DatiAddizionaliPrenotante[5]._Descrizione" type="hidden"
                    value="Titular de pasaporte italiano vencido/próximo a vencer (S/N)">
                <select id="ddls_5" data-index="5" onchange="ControloSelect(this)">
                    <option value="0"> </option>
                </select><input data-val="true" data-val-required="The _Obbligatorio field is required."
                    id="DatiAddizionaliPrenotante_5___Obbligatorio"
                    name="DatiAddizionaliPrenotante[5]._Obbligatorio" type="hidden" value="True">
                <div>
                    <p><span class="field-validation-valid" data-valmsg-for="addizionale_5"
                            data-valmsg-replace="true" style="color:red"></span></p>
                    <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_5"
                            data-valmsg-replace="true" style="color:red"></span></p>
                </div>
            </div>
            <input data-val="true" data-val-number="The field _Id must be a number."
                data-val-required="The _Id field is required." id="hiddenId5"
                name="DatiAddizionaliPrenotante[5]._Id" type="hidden" value="36986"><input data-val="true"
                data-val-number="The field IDTipoDatoAddizionale must be a number."
                data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADD_5"
                name="DatiAddizionaliPrenotante[5]._TipoDatoAddizionale.IDTipoDatoAddizionale" type="hidden"
                value="1"><input data-val="true" data-val-number="The field IDTipoControllo must be a number."
                data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAdd_5"
                name="DatiAddizionaliPrenotante[5]._TipoDatoAddizionale.IDTipoControllo" type="hidden"
                value="3"><input id="hiddenRegEx_5" name="DatiAddizionaliPrenotante[5]._TipoDatoAddizionale.RegEx"
                type="hidden" value="">
            <div id="datoaddizionale_6">
                <label id="addizionale">
                    Número de pasaporte &nbsp;<b>*</b> </label>
                <input id="DatiAddizionaliPrenotante_6___Descrizione"
                    name="DatiAddizionaliPrenotante[6]._Descrizione" type="hidden" value="Número de pasaporte">
                <input id="DatiAddizionaliPrenotante_6___testo" maxlength="100"
                    name="DatiAddizionaliPrenotante[6]._testo" onchange="ControlloTesto(this)" type="text"
                    value=""><input data-val="true" data-val-required="The _Obbligatorio field is required."
                    id="DatiAddizionaliPrenotante_6___Obbligatorio"
                    name="DatiAddizionaliPrenotante[6]._Obbligatorio" type="hidden" value="True">
                <div>
                    <p><span class="field-validation-valid" data-valmsg-for="addizionale_6"
                            data-valmsg-replace="true" style="color:red"></span></p>
                    <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_6"
                            data-valmsg-replace="true" style="color:red"></span></p>
                </div>
            </div>
            <input data-val="true" data-val-number="The field _Id must be a number."
                data-val-required="The _Id field is required." id="hiddenId6"
                name="DatiAddizionaliPrenotante[6]._Id" type="hidden" value="36987"><input data-val="true"
                data-val-number="The field IDTipoDatoAddizionale must be a number."
                data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADD_6"
                name="DatiAddizionaliPrenotante[6]._TipoDatoAddizionale.IDTipoDatoAddizionale" type="hidden"
                value="2"><input data-val="true" data-val-number="The field IDTipoControllo must be a number."
                data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAdd_6"
                name="DatiAddizionaliPrenotante[6]._TipoDatoAddizionale.IDTipoControllo" type="hidden"
                value="2"><input id="hiddenRegEx_6" name="DatiAddizionaliPrenotante[6]._TipoDatoAddizionale.RegEx"
                type="hidden" value="">
            <div id="datoaddizionale_7">
                <label id="addizionale">
                    Estatura en centímetros &nbsp;<b>*</b> </label>
                <input id="DatiAddizionaliPrenotante_7___Descrizione"
                    name="DatiAddizionaliPrenotante[7]._Descrizione" type="hidden" value="Estatura en centímetros">
                <input id="DatiAddizionaliPrenotante_7___testo" maxlength="100"
                    name="DatiAddizionaliPrenotante[7]._testo" onchange="ControlloTesto(this)" type="text"
                    value=""><input data-val="true" data-val-required="The _Obbligatorio field is required."
                    id="DatiAddizionaliPrenotante_7___Obbligatorio"
                    name="DatiAddizionaliPrenotante[7]._Obbligatorio" type="hidden" value="True">
                <div>
                    <p><span class="field-validation-valid" data-valmsg-for="addizionale_7"
                            data-valmsg-replace="true" style="color:red"></span></p>
                    <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_7"
                            data-valmsg-replace="true" style="color:red"></span></p>
                </div>
            </div>
            <input data-val="true" data-val-number="The field _Id must be a number."
                data-val-required="The _Id field is required." id="hiddenId7"
                name="DatiAddizionaliPrenotante[7]._Id" type="hidden" value="36988"><input data-val="true"
                data-val-number="The field IDTipoDatoAddizionale must be a number."
                data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADD_7"
                name="DatiAddizionaliPrenotante[7]._TipoDatoAddizionale.IDTipoDatoAddizionale" type="hidden"
                value="22"><input data-val="true" data-val-number="The field IDTipoControllo must be a number."
                data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAdd_7"
                name="DatiAddizionaliPrenotante[7]._TipoDatoAddizionale.IDTipoControllo" type="hidden"
                value="2"><input id="hiddenRegEx_7" name="DatiAddizionaliPrenotante[7]._TipoDatoAddizionale.RegEx"
                type="hidden" value="">
            <div id="datoaddizionale_8">
                <label id="addizionale">
                    Color de ojos &nbsp;<b>*</b> </label>
                <input id="DatiAddizionaliPrenotante_8___Descrizione"
                    name="DatiAddizionaliPrenotante[8]._Descrizione" type="hidden" value="Color de ojos">
                <select id="ddls_8" data-index="8" onchange="ControloSelect(this)">
                    <option value="0"> </option>
                </select><input data-val="true" data-val-required="The _Obbligatorio field is required."
                    id="DatiAddizionaliPrenotante_8___Obbligatorio"
                    name="DatiAddizionaliPrenotante[8]._Obbligatorio" type="hidden" value="True">
                <div>
                    <p><span class="field-validation-valid" data-valmsg-for="addizionale_8"
                            data-valmsg-replace="true" style="color:red"></span></p>
                    <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_8"
                            data-valmsg-replace="true" style="color:red"></span></p>
                </div>
            </div>
            <input data-val="true" data-val-number="The field _Id must be a number."
                data-val-required="The _Id field is required." id="hiddenId8"
                name="DatiAddizionaliPrenotante[8]._Id" type="hidden" value="36989"><input data-val="true"
                data-val-number="The field IDTipoDatoAddizionale must be a number."
                data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADD_8"
                name="DatiAddizionaliPrenotante[8]._TipoDatoAddizionale.IDTipoDatoAddizionale" type="hidden"
                value="23"><input data-val="true" data-val-number="The field IDTipoControllo must be a number."
                data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAdd_8"
                name="DatiAddizionaliPrenotante[8]._TipoDatoAddizionale.IDTipoControllo" type="hidden"
                value="3"><input id="hiddenRegEx_8" name="DatiAddizionaliPrenotante[8]._TipoDatoAddizionale.RegEx"
                type="hidden" value="">
            <div id="docAddizionale_0">
                <label id="doc">
                    Documento de identidad/viaje &nbsp;<b>*</b> </label>
                <p class="helper">Se pueden ingresar archivos en formato PDF de un máximo de 1MB <b>;</b>
                </p>
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
                    name="DocumentiPrenotante[0]._Id" type="hidden" value="7911">
            </div>
            <input data-val="true" data-val-number="The field IDTipoDocumento must be a number."
                data-val-required="The IDTipoDocumento field is required." id="hiddenIdDocADD_0"
                name="DocumentiPrenotante[0]._TipoDocumento.IDTipoDocumento" type="hidden" value="4"><input
                id="hiddenFile_0" name="DocumentiPrenotante[0]._File" type="hidden" value="">
            <div id="docAddizionale_1">
                <label id="doc">
                    Pasaporte </label>
                <p class="helper">Se pueden ingresar archivos en formato PDF de un máximo de 1MB <b>;</b>
                </p>
                <input id="DocumentiPrenotante_1___Descrizione" name="DocumentiPrenotante[1]._Descrizione"
                    type="hidden" value="Pasaporte">
                <input id="File_1" name="DocumentiPrenotante[1]._File" onchange="controlloFileCaricato(this)"
                    type="file" value="">
                <span class="field-validation-valid" data-valmsg-for="Lenght_1" data-valmsg-replace="true"
                    style="color:red"></span>
                <input data-val="true" data-val-required="The _Obbligatorio field is required."
                    id="DocumentiPrenotante_1___Obbligatorio" name="DocumentiPrenotante[1]._Obbligatorio"
                    type="hidden" value="False">
                <span class="field-validation-valid validator-required" data-valmsg-for="Required_1"
                    data-valmsg-replace="true" style="color:red"></span>
                <span class="field-validation-valid validator-required" data-valmsg-for="Extension_1"
                    data-valmsg-replace="true" style="color:red"></span>
                <input data-val="true" data-val-number="The field _Id must be a number."
                    data-val-required="The _Id field is required." id="DocumentiPrenotante_1___Id"
                    name="DocumentiPrenotante[1]._Id" type="hidden" value="7912">
            </div>
            <input data-val="true" data-val-number="The field IDTipoDocumento must be a number."
                data-val-required="The IDTipoDocumento field is required." id="hiddenIdDocADD_1"
                name="DocumentiPrenotante[1]._TipoDocumento.IDTipoDocumento" type="hidden" value="1"><input
                id="hiddenFile_1" name="DocumentiPrenotante[1]._File" type="hidden" value=""> <input data-val="true"
                data-val-number="The field _idSelezionato must be a number."
                data-val-required="The _idSelezionato field is required." id="hiddenSelezionato_1"
                name="DatiAddizionaliPrenotante[1]._idSelezionato" type="hidden" value="0"><input data-val="true"
                data-val-number="The field _idSelezionato must be a number."
                data-val-required="The _idSelezionato field is required." id="hiddenSelezionato_3"
                name="DatiAddizionaliPrenotante[3]._idSelezionato" type="hidden" value="0"><input data-val="true"
                data-val-number="The field _idSelezionato must be a number."
                data-val-required="The _idSelezionato field is required." id="hiddenSelezionato_5"
                name="DatiAddizionaliPrenotante[5]._idSelezionato" type="hidden" value="0"><input data-val="true"
                data-val-number="The field _idSelezionato must be a number."
                data-val-required="The _idSelezionato field is required." id="hiddenSelezionato_8"
                name="DatiAddizionaliPrenotante[8]._idSelezionato" type="hidden" value="0">
        </div>

        <div id="ifMultiple">
            <div id="divCompanion_0" style="display: none;">
                <h2>Datos del Solicitante adicional 1</h2>
                <div>
                    Apellido *
                    <input class="text-box single-line" id="Accompagnatori_0__CognomeAccompagnatore"
                        name="Accompagnatori[0].CognomeAccompagnatore" onkeyup="aggiornaElencoPrenotanti()"
                        type="text" value="">
                    <span class="field-validation-valid" data-valmsg-for="Surname0" data-valmsg-replace="true"
                        style="color:red"></span>
                </div>
                <div>
                    Nombre *
                    <input class="text-box single-line" id="Accompagnatori_0__NomeAccompagnatore"
                        name="Accompagnatori[0].NomeAccompagnatore" onkeyup="aggiornaElencoPrenotanti()" type="text"
                        value="">
                    <span class="field-validation-valid" data-valmsg-for="Name0" data-valmsg-replace="true"
                        style="color:red"></span>
                </div>
                <div>
                    Fecha de nacimiento *
                    <input class="text-box single-line" data-val="true"
                        data-val-date="The field DataNascitaAccompagnatore must be a date."
                        id="Accompagnatori_0__DataNascitaAccompagnatore"
                        name="Accompagnatori[0].DataNascitaAccompagnatore" type="date" value="">
                </div>
                <div>
                    <span class="field-validation-valid" data-valmsg-for="Date0" data-valmsg-replace="true"
                        style="color:red"></span>
                    <span class="field-validation-valid" data-valmsg-for="dateRange0" data-valmsg-replace="true"
                        style="color:red"></span>
                </div>
                Relación de parentesco
                <div id="ddlRelation_0">
                </div>
                <div id="divCompanionAdd_0_0">
                    <label>
                        Dirección completa de residencia &nbsp;<b>*</b> </label>
                    <input id="Accompagnatori_0__DatiAddizionaliAccompagnatore_0___Descrizione"
                        name="Accompagnatori[0].DatiAddizionaliAccompagnatore[0]._Descrizione" type="hidden"
                        value="Dirección completa de residencia">
                </div>
                <input data-val="true" data-val-number="The field _Id must be a number."
                    data-val-required="The _Id field is required." id="hiddenIdAcc0"
                    name="Accompagnatori[0].DatiAddizionaliAccompagnatore[0]._Id" type="hidden" value="36990"><input
                    data-val="true" data-val-number="The field IDTipoDatoAddizionale must be a number."
                    data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADDAcc_0"
                    name="Accompagnatori[0].DatiAddizionaliAccompagnatore[0]._TipoDatoAddizionale.IDTipoDatoAddizionale"
                    type="hidden" value="25"><input data-val="true"
                    data-val-number="The field IDTipoControllo must be a number."
                    data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAddAcc_0"
                    name="Accompagnatori[0].DatiAddizionaliAccompagnatore[0]._TipoDatoAddizionale.IDTipoControllo"
                    type="hidden" value="2"><input id="hiddenRegExAcc_0"
                    name="Accompagnatori[0].DatiAddizionaliAccompagnatore[0]._TipoDatoAddizionale.RegEx"
                    type="hidden" value="">
                <div id="divCompanionAdd_0_1">
                    <label>
                        Hijos menores (S/N) &nbsp;<b>*</b> </label>
                    <input id="Accompagnatori_0__DatiAddizionaliAccompagnatore_1___Descrizione"
                        name="Accompagnatori[0].DatiAddizionaliAccompagnatore[1]._Descrizione" type="hidden"
                        value="Hijos menores (S/N)">
                </div>
                <input data-val="true" data-val-number="The field _Id must be a number."
                    data-val-required="The _Id field is required." id="hiddenIdAcc0"
                    name="Accompagnatori[0].DatiAddizionaliAccompagnatore[1]._Id" type="hidden" value="36991"><input
                    data-val="true" data-val-number="The field IDTipoDatoAddizionale must be a number."
                    data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADDAcc_1"
                    name="Accompagnatori[0].DatiAddizionaliAccompagnatore[1]._TipoDatoAddizionale.IDTipoDatoAddizionale"
                    type="hidden" value="11"><input data-val="true"
                    data-val-number="The field IDTipoControllo must be a number."
                    data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAddAcc_1"
                    name="Accompagnatori[0].DatiAddizionaliAccompagnatore[1]._TipoDatoAddizionale.IDTipoControllo"
                    type="hidden" value="3"><input id="hiddenRegExAcc_1"
                    name="Accompagnatori[0].DatiAddizionaliAccompagnatore[1]._TipoDatoAddizionale.RegEx"
                    type="hidden" value="">
                <div id="divCompanionAdd_0_2">
                    <label>
                        Número de hijos menores &nbsp;<b>*</b> </label>
                    <input id="Accompagnatori_0__DatiAddizionaliAccompagnatore_2___Descrizione"
                        name="Accompagnatori[0].DatiAddizionaliAccompagnatore[2]._Descrizione" type="hidden"
                        value="Número de hijos menores">
                </div>
                <input data-val="true" data-val-number="The field _Id must be a number."
                    data-val-required="The _Id field is required." id="hiddenIdAcc0"
                    name="Accompagnatori[0].DatiAddizionaliAccompagnatore[2]._Id" type="hidden" value="36992"><input
                    data-val="true" data-val-number="The field IDTipoDatoAddizionale must be a number."
                    data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADDAcc_2"
                    name="Accompagnatori[0].DatiAddizionaliAccompagnatore[2]._TipoDatoAddizionale.IDTipoDatoAddizionale"
                    type="hidden" value="12"><input data-val="true"
                    data-val-number="The field IDTipoControllo must be a number."
                    data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAddAcc_2"
                    name="Accompagnatori[0].DatiAddizionaliAccompagnatore[2]._TipoDatoAddizionale.IDTipoControllo"
                    type="hidden" value="2"><input id="hiddenRegExAcc_2"
                    name="Accompagnatori[0].DatiAddizionaliAccompagnatore[2]._TipoDatoAddizionale.RegEx"
                    type="hidden" value="">
                <div id="divCompanionAdd_0_3">
                    <label>
                        Estado Civil &nbsp;<b>*</b> </label>
                    <input id="Accompagnatori_0__DatiAddizionaliAccompagnatore_3___Descrizione"
                        name="Accompagnatori[0].DatiAddizionaliAccompagnatore[3]._Descrizione" type="hidden"
                        value="Estado Civil">
                </div>
                <input data-val="true" data-val-number="The field _Id must be a number."
                    data-val-required="The _Id field is required." id="hiddenIdAcc0"
                    name="Accompagnatori[0].DatiAddizionaliAccompagnatore[3]._Id" type="hidden" value="36993"><input
                    data-val="true" data-val-number="The field IDTipoDatoAddizionale must be a number."
                    data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADDAcc_3"
                    name="Accompagnatori[0].DatiAddizionaliAccompagnatore[3]._TipoDatoAddizionale.IDTipoDatoAddizionale"
                    type="hidden" value="17"><input data-val="true"
                    data-val-number="The field IDTipoControllo must be a number."
                    data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAddAcc_3"
                    name="Accompagnatori[0].DatiAddizionaliAccompagnatore[3]._TipoDatoAddizionale.IDTipoControllo"
                    type="hidden" value="3"><input id="hiddenRegExAcc_3"
                    name="Accompagnatori[0].DatiAddizionaliAccompagnatore[3]._TipoDatoAddizionale.RegEx"
                    type="hidden" value="">
                <div id="divCompanionAdd_0_4">
                    <label>
                        Nombre y Apellido del cónyuge &nbsp;<b>*</b> </label>
                    <input id="Accompagnatori_0__DatiAddizionaliAccompagnatore_4___Descrizione"
                        name="Accompagnatori[0].DatiAddizionaliAccompagnatore[4]._Descrizione" type="hidden"
                        value="Nombre y Apellido del cónyuge">
                </div>
                <input data-val="true" data-val-number="The field _Id must be a number."
                    data-val-required="The _Id field is required." id="hiddenIdAcc0"
                    name="Accompagnatori[0].DatiAddizionaliAccompagnatore[4]._Id" type="hidden" value="36994"><input
                    data-val="true" data-val-number="The field IDTipoDatoAddizionale must be a number."
                    data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADDAcc_4"
                    name="Accompagnatori[0].DatiAddizionaliAccompagnatore[4]._TipoDatoAddizionale.IDTipoDatoAddizionale"
                    type="hidden" value="18"><input data-val="true"
                    data-val-number="The field IDTipoControllo must be a number."
                    data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAddAcc_4"
                    name="Accompagnatori[0].DatiAddizionaliAccompagnatore[4]._TipoDatoAddizionale.IDTipoControllo"
                    type="hidden" value="2"><input id="hiddenRegExAcc_4"
                    name="Accompagnatori[0].DatiAddizionaliAccompagnatore[4]._TipoDatoAddizionale.RegEx"
                    type="hidden" value="">
                <div id="divCompanionAdd_0_5">
                    <label>
                        Titular de pasaporte italiano vencido/próximo a vencer (S/N) &nbsp;<b>*</b> </label>
                    <input id="Accompagnatori_0__DatiAddizionaliAccompagnatore_5___Descrizione"
                        name="Accompagnatori[0].DatiAddizionaliAccompagnatore[5]._Descrizione" type="hidden"
                        value="Titular de pasaporte italiano vencido/próximo a vencer (S/N)">
                </div>
                <input data-val="true" data-val-number="The field _Id must be a number."
                    data-val-required="The _Id field is required." id="hiddenIdAcc0"
                    name="Accompagnatori[0].DatiAddizionaliAccompagnatore[5]._Id" type="hidden" value="36995"><input
                    data-val="true" data-val-number="The field IDTipoDatoAddizionale must be a number."
                    data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADDAcc_5"
                    name="Accompagnatori[0].DatiAddizionaliAccompagnatore[5]._TipoDatoAddizionale.IDTipoDatoAddizionale"
                    type="hidden" value="1"><input data-val="true"
                    data-val-number="The field IDTipoControllo must be a number."
                    data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAddAcc_5"
                    name="Accompagnatori[0].DatiAddizionaliAccompagnatore[5]._TipoDatoAddizionale.IDTipoControllo"
                    type="hidden" value="3"><input id="hiddenRegExAcc_5"
                    name="Accompagnatori[0].DatiAddizionaliAccompagnatore[5]._TipoDatoAddizionale.RegEx"
                    type="hidden" value="">
                <div id="divCompanionAdd_0_6">
                    <label>
                        Número de pasaporte &nbsp;<b>*</b> </label>
                    <input id="Accompagnatori_0__DatiAddizionaliAccompagnatore_6___Descrizione"
                        name="Accompagnatori[0].DatiAddizionaliAccompagnatore[6]._Descrizione" type="hidden"
                        value="Número de pasaporte">
                </div>
                <input data-val="true" data-val-number="The field _Id must be a number."
                    data-val-required="The _Id field is required." id="hiddenIdAcc0"
                    name="Accompagnatori[0].DatiAddizionaliAccompagnatore[6]._Id" type="hidden" value="36996"><input
                    data-val="true" data-val-number="The field IDTipoDatoAddizionale must be a number."
                    data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADDAcc_6"
                    name="Accompagnatori[0].DatiAddizionaliAccompagnatore[6]._TipoDatoAddizionale.IDTipoDatoAddizionale"
                    type="hidden" value="2"><input data-val="true"
                    data-val-number="The field IDTipoControllo must be a number."
                    data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAddAcc_6"
                    name="Accompagnatori[0].DatiAddizionaliAccompagnatore[6]._TipoDatoAddizionale.IDTipoControllo"
                    type="hidden" value="2"><input id="hiddenRegExAcc_6"
                    name="Accompagnatori[0].DatiAddizionaliAccompagnatore[6]._TipoDatoAddizionale.RegEx"
                    type="hidden" value="">
                <div id="divCompanionAdd_0_7">
                    <label>
                        Estatura en centímetros &nbsp;<b>*</b> </label>
                    <input id="Accompagnatori_0__DatiAddizionaliAccompagnatore_7___Descrizione"
                        name="Accompagnatori[0].DatiAddizionaliAccompagnatore[7]._Descrizione" type="hidden"
                        value="Estatura en centímetros">
                </div>
                <input data-val="true" data-val-number="The field _Id must be a number."
                    data-val-required="The _Id field is required." id="hiddenIdAcc0"
                    name="Accompagnatori[0].DatiAddizionaliAccompagnatore[7]._Id" type="hidden" value="36997"><input
                    data-val="true" data-val-number="The field IDTipoDatoAddizionale must be a number."
                    data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADDAcc_7"
                    name="Accompagnatori[0].DatiAddizionaliAccompagnatore[7]._TipoDatoAddizionale.IDTipoDatoAddizionale"
                    type="hidden" value="22"><input data-val="true"
                    data-val-number="The field IDTipoControllo must be a number."
                    data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAddAcc_7"
                    name="Accompagnatori[0].DatiAddizionaliAccompagnatore[7]._TipoDatoAddizionale.IDTipoControllo"
                    type="hidden" value="2"><input id="hiddenRegExAcc_7"
                    name="Accompagnatori[0].DatiAddizionaliAccompagnatore[7]._TipoDatoAddizionale.RegEx"
                    type="hidden" value="">
                <div id="divCompanionAdd_0_8">
                    <label>
                        Color de ojos &nbsp;<b>*</b> </label>
                    <input id="Accompagnatori_0__DatiAddizionaliAccompagnatore_8___Descrizione"
                        name="Accompagnatori[0].DatiAddizionaliAccompagnatore[8]._Descrizione" type="hidden"
                        value="Color de ojos">
                </div>
                <input data-val="true" data-val-number="The field _Id must be a number."
                    data-val-required="The _Id field is required." id="hiddenIdAcc0"
                    name="Accompagnatori[0].DatiAddizionaliAccompagnatore[8]._Id" type="hidden" value="36998"><input
                    data-val="true" data-val-number="The field IDTipoDatoAddizionale must be a number."
                    data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADDAcc_8"
                    name="Accompagnatori[0].DatiAddizionaliAccompagnatore[8]._TipoDatoAddizionale.IDTipoDatoAddizionale"
                    type="hidden" value="23"><input data-val="true"
                    data-val-number="The field IDTipoControllo must be a number."
                    data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAddAcc_8"
                    name="Accompagnatori[0].DatiAddizionaliAccompagnatore[8]._TipoDatoAddizionale.IDTipoControllo"
                    type="hidden" value="3"><input id="hiddenRegExAcc_8"
                    name="Accompagnatori[0].DatiAddizionaliAccompagnatore[8]._TipoDatoAddizionale.RegEx"
                    type="hidden" value="">
                <div id="docCompanionAdd_0_0">
                    <label>
                        Documento de identidad/viaje &nbsp;<b>*</b> </label>
                    <input id="Accompagnatori_0__DocumentiAccompagnatore_0___Descrizione"
                        name="Accompagnatori[0].DocumentiAccompagnatore[0]._Descrizione" type="hidden"
                        value="Documento de identidad/viaje">
                    <input id="Accompagnatori_0__DocumentiAccompagnatore_0___File"
                        name="Accompagnatori[0].DocumentiAccompagnatore[0]._File"
                        onchange="controlloFileCaricato(this)" type="file" value="">
                    <span class="field-validation-valid" data-valmsg-for="Lenght_0_0" data-valmsg-replace="true"
                        style="color:red"></span>
                    <input data-val="true" data-val-required="The _Obbligatorio field is required."
                        id="Accompagnatori_0__DocumentiAccompagnatore_0___Obbligatorio"
                        name="Accompagnatori[0].DocumentiAccompagnatore[0]._Obbligatorio" type="hidden"
                        value="True">
                    <span class="field-validation-valid validator-required" data-valmsg-for="Required_0_0"
                        data-valmsg-replace="true" style="color:red"></span>
                    <span class="field-validation-valid validator-required" data-valmsg-for="Extension_0_0"
                        data-valmsg-replace="true" style="color:red"></span>
                    <input data-val="true" data-val-number="The field _Id must be a number."
                        data-val-required="The _Id field is required." id="hiddenIdDoc0"
                        name="Accompagnatori[0].DocumentiAccompagnatore[0]._Id" type="hidden" value="7913">
                </div>
                <input data-val="true" data-val-number="The field IDTipoDocumento must be a number."
                    data-val-required="The IDTipoDocumento field is required." id="hiddenIdDocADDAcc_0"
                    name="Accompagnatori[0].DocumentiAccompagnatore[0]._TipoDocumento.IDTipoDocumento" type="hidden"
                    value="4">
                <div id="docCompanionAdd_0_1">
                    <label>
                        Pasaporte </label>
                    <input id="Accompagnatori_0__DocumentiAccompagnatore_1___Descrizione"
                        name="Accompagnatori[0].DocumentiAccompagnatore[1]._Descrizione" type="hidden"
                        value="Pasaporte">
                    <input id="Accompagnatori_0__DocumentiAccompagnatore_1___File"
                        name="Accompagnatori[0].DocumentiAccompagnatore[1]._File"
                        onchange="controlloFileCaricato(this)" type="file" value="">
                    <span class="field-validation-valid" data-valmsg-for="Lenght_0_1" data-valmsg-replace="true"
                        style="color:red"></span>
                    <input data-val="true" data-val-required="The _Obbligatorio field is required."
                        id="Accompagnatori_0__DocumentiAccompagnatore_1___Obbligatorio"
                        name="Accompagnatori[0].DocumentiAccompagnatore[1]._Obbligatorio" type="hidden"
                        value="False">
                    <span class="field-validation-valid validator-required" data-valmsg-for="Required_0_1"
                        data-valmsg-replace="true" style="color:red"></span>
                    <span class="field-validation-valid validator-required" data-valmsg-for="Extension_0_1"
                        data-valmsg-replace="true" style="color:red"></span>
                    <input data-val="true" data-val-number="The field _Id must be a number."
                        data-val-required="The _Id field is required." id="hiddenIdDoc0"
                        name="Accompagnatori[0].DocumentiAccompagnatore[1]._Id" type="hidden" value="7914">
                </div>
                <input data-val="true" data-val-number="The field IDTipoDocumento must be a number."
                    data-val-required="The IDTipoDocumento field is required." id="hiddenIdDocADDAcc_1"
                    name="Accompagnatori[0].DocumentiAccompagnatore[1]._TipoDocumento.IDTipoDocumento" type="hidden"
                    value="1">
            </div>
            <input data-val="true" data-val-number="The field IdTipoParentela must be a number."
                id="hiddenParentela_0" name="Accompagnatori[0].IdTipoParentela" type="hidden" value="">
            <div id="divCompanion_1" style="display: none;">
                <h2>Datos del Solicitante adicional 2</h2>
                <div>
                    Apellido *
                    <input class="text-box single-line" id="Accompagnatori_1__CognomeAccompagnatore"
                        name="Accompagnatori[1].CognomeAccompagnatore" onkeyup="aggiornaElencoPrenotanti()"
                        type="text" value="">
                    <span class="field-validation-valid" data-valmsg-for="Surname1" data-valmsg-replace="true"
                        style="color:red"></span>
                </div>
                <div>
                    Nombre *
                    <input class="text-box single-line" id="Accompagnatori_1__NomeAccompagnatore"
                        name="Accompagnatori[1].NomeAccompagnatore" onkeyup="aggiornaElencoPrenotanti()" type="text"
                        value="">
                    <span class="field-validation-valid" data-valmsg-for="Name1" data-valmsg-replace="true"
                        style="color:red"></span>
                </div>
                <div>
                    Fecha de nacimiento *
                    <input class="text-box single-line" data-val="true"
                        data-val-date="The field DataNascitaAccompagnatore must be a date."
                        id="Accompagnatori_1__DataNascitaAccompagnatore"
                        name="Accompagnatori[1].DataNascitaAccompagnatore" type="date" value="">
                </div>
                <div>
                    <span class="field-validation-valid" data-valmsg-for="Date1" data-valmsg-replace="true"
                        style="color:red"></span>
                    <span class="field-validation-valid" data-valmsg-for="dateRange1" data-valmsg-replace="true"
                        style="color:red"></span>
                </div>
                Relación de parentesco
                <div id="ddlRelation_1">
                </div>
                <div id="divCompanionAdd_1_0">
                    <label>
                        Dirección completa de residencia &nbsp;<b>*</b> </label>
                    <input id="Accompagnatori_1__DatiAddizionaliAccompagnatore_0___Descrizione"
                        name="Accompagnatori[1].DatiAddizionaliAccompagnatore[0]._Descrizione" type="hidden"
                        value="Dirección completa de residencia">
                </div>
                <input data-val="true" data-val-number="The field _Id must be a number."
                    data-val-required="The _Id field is required." id="hiddenIdAcc1"
                    name="Accompagnatori[1].DatiAddizionaliAccompagnatore[0]._Id" type="hidden" value="36990"><input
                    data-val="true" data-val-number="The field IDTipoDatoAddizionale must be a number."
                    data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADDAcc_0"
                    name="Accompagnatori[1].DatiAddizionaliAccompagnatore[0]._TipoDatoAddizionale.IDTipoDatoAddizionale"
                    type="hidden" value="25"><input data-val="true"
                    data-val-number="The field IDTipoControllo must be a number."
                    data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAddAcc_0"
                    name="Accompagnatori[1].DatiAddizionaliAccompagnatore[0]._TipoDatoAddizionale.IDTipoControllo"
                    type="hidden" value="2"><input id="hiddenRegExAcc_0"
                    name="Accompagnatori[1].DatiAddizionaliAccompagnatore[0]._TipoDatoAddizionale.RegEx"
                    type="hidden" value="">
                <div id="divCompanionAdd_1_1">
                    <label>
                        Hijos menores (S/N) &nbsp;<b>*</b> </label>
                    <input id="Accompagnatori_1__DatiAddizionaliAccompagnatore_1___Descrizione"
                        name="Accompagnatori[1].DatiAddizionaliAccompagnatore[1]._Descrizione" type="hidden"
                        value="Hijos menores (S/N)">
                </div>
                <input data-val="true" data-val-number="The field _Id must be a number."
                    data-val-required="The _Id field is required." id="hiddenIdAcc1"
                    name="Accompagnatori[1].DatiAddizionaliAccompagnatore[1]._Id" type="hidden" value="36991"><input
                    data-val="true" data-val-number="The field IDTipoDatoAddizionale must be a number."
                    data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADDAcc_1"
                    name="Accompagnatori[1].DatiAddizionaliAccompagnatore[1]._TipoDatoAddizionale.IDTipoDatoAddizionale"
                    type="hidden" value="11"><input data-val="true"
                    data-val-number="The field IDTipoControllo must be a number."
                    data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAddAcc_1"
                    name="Accompagnatori[1].DatiAddizionaliAccompagnatore[1]._TipoDatoAddizionale.IDTipoControllo"
                    type="hidden" value="3"><input id="hiddenRegExAcc_1"
                    name="Accompagnatori[1].DatiAddizionaliAccompagnatore[1]._TipoDatoAddizionale.RegEx"
                    type="hidden" value="">
                <div id="divCompanionAdd_1_2">
                    <label>
                        Número de hijos menores &nbsp;<b>*</b> </label>
                    <input id="Accompagnatori_1__DatiAddizionaliAccompagnatore_2___Descrizione"
                        name="Accompagnatori[1].DatiAddizionaliAccompagnatore[2]._Descrizione" type="hidden"
                        value="Número de hijos menores">
                </div>
                <input data-val="true" data-val-number="The field _Id must be a number."
                    data-val-required="The _Id field is required." id="hiddenIdAcc1"
                    name="Accompagnatori[1].DatiAddizionaliAccompagnatore[2]._Id" type="hidden" value="36992"><input
                    data-val="true" data-val-number="The field IDTipoDatoAddizionale must be a number."
                    data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADDAcc_2"
                    name="Accompagnatori[1].DatiAddizionaliAccompagnatore[2]._TipoDatoAddizionale.IDTipoDatoAddizionale"
                    type="hidden" value="12"><input data-val="true"
                    data-val-number="The field IDTipoControllo must be a number."
                    data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAddAcc_2"
                    name="Accompagnatori[1].DatiAddizionaliAccompagnatore[2]._TipoDatoAddizionale.IDTipoControllo"
                    type="hidden" value="2"><input id="hiddenRegExAcc_2"
                    name="Accompagnatori[1].DatiAddizionaliAccompagnatore[2]._TipoDatoAddizionale.RegEx"
                    type="hidden" value="">
                <div id="divCompanionAdd_1_3">
                    <label>
                        Estado Civil &nbsp;<b>*</b> </label>
                    <input id="Accompagnatori_1__DatiAddizionaliAccompagnatore_3___Descrizione"
                        name="Accompagnatori[1].DatiAddizionaliAccompagnatore[3]._Descrizione" type="hidden"
                        value="Estado Civil">
                </div>
                <input data-val="true" data-val-number="The field _Id must be a number."
                    data-val-required="The _Id field is required." id="hiddenIdAcc1"
                    name="Accompagnatori[1].DatiAddizionaliAccompagnatore[3]._Id" type="hidden" value="36993"><input
                    data-val="true" data-val-number="The field IDTipoDatoAddizionale must be a number."
                    data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADDAcc_3"
                    name="Accompagnatori[1].DatiAddizionaliAccompagnatore[3]._TipoDatoAddizionale.IDTipoDatoAddizionale"
                    type="hidden" value="17"><input data-val="true"
                    data-val-number="The field IDTipoControllo must be a number."
                    data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAddAcc_3"
                    name="Accompagnatori[1].DatiAddizionaliAccompagnatore[3]._TipoDatoAddizionale.IDTipoControllo"
                    type="hidden" value="3"><input id="hiddenRegExAcc_3"
                    name="Accompagnatori[1].DatiAddizionaliAccompagnatore[3]._TipoDatoAddizionale.RegEx"
                    type="hidden" value="">
                <div id="divCompanionAdd_1_4">
                    <label>
                        Nombre y Apellido del cónyuge &nbsp;<b>*</b> </label>
                    <input id="Accompagnatori_1__DatiAddizionaliAccompagnatore_4___Descrizione"
                        name="Accompagnatori[1].DatiAddizionaliAccompagnatore[4]._Descrizione" type="hidden"
                        value="Nombre y Apellido del cónyuge">
                </div>
                <input data-val="true" data-val-number="The field _Id must be a number."
                    data-val-required="The _Id field is required." id="hiddenIdAcc1"
                    name="Accompagnatori[1].DatiAddizionaliAccompagnatore[4]._Id" type="hidden" value="36994"><input
                    data-val="true" data-val-number="The field IDTipoDatoAddizionale must be a number."
                    data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADDAcc_4"
                    name="Accompagnatori[1].DatiAddizionaliAccompagnatore[4]._TipoDatoAddizionale.IDTipoDatoAddizionale"
                    type="hidden" value="18"><input data-val="true"
                    data-val-number="The field IDTipoControllo must be a number."
                    data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAddAcc_4"
                    name="Accompagnatori[1].DatiAddizionaliAccompagnatore[4]._TipoDatoAddizionale.IDTipoControllo"
                    type="hidden" value="2"><input id="hiddenRegExAcc_4"
                    name="Accompagnatori[1].DatiAddizionaliAccompagnatore[4]._TipoDatoAddizionale.RegEx"
                    type="hidden" value="">
                <div id="divCompanionAdd_1_5">
                    <label>
                        Titular de pasaporte italiano vencido/próximo a vencer (S/N) &nbsp;<b>*</b> </label>
                    <input id="Accompagnatori_1__DatiAddizionaliAccompagnatore_5___Descrizione"
                        name="Accompagnatori[1].DatiAddizionaliAccompagnatore[5]._Descrizione" type="hidden"
                        value="Titular de pasaporte italiano vencido/próximo a vencer (S/N)">
                </div>
                <input data-val="true" data-val-number="The field _Id must be a number."
                    data-val-required="The _Id field is required." id="hiddenIdAcc1"
                    name="Accompagnatori[1].DatiAddizionaliAccompagnatore[5]._Id" type="hidden" value="36995"><input
                    data-val="true" data-val-number="The field IDTipoDatoAddizionale must be a number."
                    data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADDAcc_5"
                    name="Accompagnatori[1].DatiAddizionaliAccompagnatore[5]._TipoDatoAddizionale.IDTipoDatoAddizionale"
                    type="hidden" value="1"><input data-val="true"
                    data-val-number="The field IDTipoControllo must be a number."
                    data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAddAcc_5"
                    name="Accompagnatori[1].DatiAddizionaliAccompagnatore[5]._TipoDatoAddizionale.IDTipoControllo"
                    type="hidden" value="3"><input id="hiddenRegExAcc_5"
                    name="Accompagnatori[1].DatiAddizionaliAccompagnatore[5]._TipoDatoAddizionale.RegEx"
                    type="hidden" value="">
                <div id="divCompanionAdd_1_6">
                    <label>
                        Número de pasaporte &nbsp;<b>*</b> </label>
                    <input id="Accompagnatori_1__DatiAddizionaliAccompagnatore_6___Descrizione"
                        name="Accompagnatori[1].DatiAddizionaliAccompagnatore[6]._Descrizione" type="hidden"
                        value="Número de pasaporte">
                </div>
                <input data-val="true" data-val-number="The field _Id must be a number."
                    data-val-required="The _Id field is required." id="hiddenIdAcc1"
                    name="Accompagnatori[1].DatiAddizionaliAccompagnatore[6]._Id" type="hidden" value="36996"><input
                    data-val="true" data-val-number="The field IDTipoDatoAddizionale must be a number."
                    data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADDAcc_6"
                    name="Accompagnatori[1].DatiAddizionaliAccompagnatore[6]._TipoDatoAddizionale.IDTipoDatoAddizionale"
                    type="hidden" value="2"><input data-val="true"
                    data-val-number="The field IDTipoControllo must be a number."
                    data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAddAcc_6"
                    name="Accompagnatori[1].DatiAddizionaliAccompagnatore[6]._TipoDatoAddizionale.IDTipoControllo"
                    type="hidden" value="2"><input id="hiddenRegExAcc_6"
                    name="Accompagnatori[1].DatiAddizionaliAccompagnatore[6]._TipoDatoAddizionale.RegEx"
                    type="hidden" value="">
                <div id="divCompanionAdd_1_7">
                    <label>
                        Estatura en centímetros &nbsp;<b>*</b> </label>
                    <input id="Accompagnatori_1__DatiAddizionaliAccompagnatore_7___Descrizione"
                        name="Accompagnatori[1].DatiAddizionaliAccompagnatore[7]._Descrizione" type="hidden"
                        value="Estatura en centímetros">
                </div>
                <input data-val="true" data-val-number="The field _Id must be a number."
                    data-val-required="The _Id field is required." id="hiddenIdAcc1"
                    name="Accompagnatori[1].DatiAddizionaliAccompagnatore[7]._Id" type="hidden" value="36997"><input
                    data-val="true" data-val-number="The field IDTipoDatoAddizionale must be a number."
                    data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADDAcc_7"
                    name="Accompagnatori[1].DatiAddizionaliAccompagnatore[7]._TipoDatoAddizionale.IDTipoDatoAddizionale"
                    type="hidden" value="22"><input data-val="true"
                    data-val-number="The field IDTipoControllo must be a number."
                    data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAddAcc_7"
                    name="Accompagnatori[1].DatiAddizionaliAccompagnatore[7]._TipoDatoAddizionale.IDTipoControllo"
                    type="hidden" value="2"><input id="hiddenRegExAcc_7"
                    name="Accompagnatori[1].DatiAddizionaliAccompagnatore[7]._TipoDatoAddizionale.RegEx"
                    type="hidden" value="">
                <div id="divCompanionAdd_1_8">
                    <label>
                        Color de ojos &nbsp;<b>*</b> </label>
                    <input id="Accompagnatori_1__DatiAddizionaliAccompagnatore_8___Descrizione"
                        name="Accompagnatori[1].DatiAddizionaliAccompagnatore[8]._Descrizione" type="hidden"
                        value="Color de ojos">
                </div>
                <input data-val="true" data-val-number="The field _Id must be a number."
                    data-val-required="The _Id field is required." id="hiddenIdAcc1"
                    name="Accompagnatori[1].DatiAddizionaliAccompagnatore[8]._Id" type="hidden" value="36998"><input
                    data-val="true" data-val-number="The field IDTipoDatoAddizionale must be a number."
                    data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADDAcc_8"
                    name="Accompagnatori[1].DatiAddizionaliAccompagnatore[8]._TipoDatoAddizionale.IDTipoDatoAddizionale"
                    type="hidden" value="23"><input data-val="true"
                    data-val-number="The field IDTipoControllo must be a number."
                    data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAddAcc_8"
                    name="Accompagnatori[1].DatiAddizionaliAccompagnatore[8]._TipoDatoAddizionale.IDTipoControllo"
                    type="hidden" value="3"><input id="hiddenRegExAcc_8"
                    name="Accompagnatori[1].DatiAddizionaliAccompagnatore[8]._TipoDatoAddizionale.RegEx"
                    type="hidden" value="">
                <div id="docCompanionAdd_1_0">
                    <label>
                        Documento de identidad/viaje &nbsp;<b>*</b> </label>
                    <input id="Accompagnatori_1__DocumentiAccompagnatore_0___Descrizione"
                        name="Accompagnatori[1].DocumentiAccompagnatore[0]._Descrizione" type="hidden"
                        value="Documento de identidad/viaje">
                    <input id="Accompagnatori_1__DocumentiAccompagnatore_0___File"
                        name="Accompagnatori[1].DocumentiAccompagnatore[0]._File"
                        onchange="controlloFileCaricato(this)" type="file" value="">
                    <span class="field-validation-valid" data-valmsg-for="Lenght_1_0" data-valmsg-replace="true"
                        style="color:red"></span>
                    <input data-val="true" data-val-required="The _Obbligatorio field is required."
                        id="Accompagnatori_1__DocumentiAccompagnatore_0___Obbligatorio"
                        name="Accompagnatori[1].DocumentiAccompagnatore[0]._Obbligatorio" type="hidden"
                        value="True">
                    <span class="field-validation-valid validator-required" data-valmsg-for="Required_1_0"
                        data-valmsg-replace="true" style="color:red"></span>
                    <span class="field-validation-valid validator-required" data-valmsg-for="Extension_1_0"
                        data-valmsg-replace="true" style="color:red"></span>
                    <input data-val="true" data-val-number="The field _Id must be a number."
                        data-val-required="The _Id field is required." id="hiddenIdDoc1"
                        name="Accompagnatori[1].DocumentiAccompagnatore[0]._Id" type="hidden" value="7913">
                </div>
                <input data-val="true" data-val-number="The field IDTipoDocumento must be a number."
                    data-val-required="The IDTipoDocumento field is required." id="hiddenIdDocADDAcc_0"
                    name="Accompagnatori[1].DocumentiAccompagnatore[0]._TipoDocumento.IDTipoDocumento" type="hidden"
                    value="4">
                <div id="docCompanionAdd_1_1">
                    <label>
                        Pasaporte </label>
                    <input id="Accompagnatori_1__DocumentiAccompagnatore_1___Descrizione"
                        name="Accompagnatori[1].DocumentiAccompagnatore[1]._Descrizione" type="hidden"
                        value="Pasaporte">
                    <input id="Accompagnatori_1__DocumentiAccompagnatore_1___File"
                        name="Accompagnatori[1].DocumentiAccompagnatore[1]._File"
                        onchange="controlloFileCaricato(this)" type="file" value="">
                    <span class="field-validation-valid" data-valmsg-for="Lenght_1_1" data-valmsg-replace="true"
                        style="color:red"></span>
                    <input data-val="true" data-val-required="The _Obbligatorio field is required."
                        id="Accompagnatori_1__DocumentiAccompagnatore_1___Obbligatorio"
                        name="Accompagnatori[1].DocumentiAccompagnatore[1]._Obbligatorio" type="hidden"
                        value="False">
                    <span class="field-validation-valid validator-required" data-valmsg-for="Required_1_1"
                        data-valmsg-replace="true" style="color:red"></span>
                    <span class="field-validation-valid validator-required" data-valmsg-for="Extension_1_1"
                        data-valmsg-replace="true" style="color:red"></span>
                    <input data-val="true" data-val-number="The field _Id must be a number."
                        data-val-required="The _Id field is required." id="hiddenIdDoc1"
                        name="Accompagnatori[1].DocumentiAccompagnatore[1]._Id" type="hidden" value="7914">
                </div>
                <input data-val="true" data-val-number="The field IDTipoDocumento must be a number."
                    data-val-required="The IDTipoDocumento field is required." id="hiddenIdDocADDAcc_1"
                    name="Accompagnatori[1].DocumentiAccompagnatore[1]._TipoDocumento.IDTipoDocumento" type="hidden"
                    value="1">
            </div>
            <input data-val="true" data-val-number="The field IdTipoParentela must be a number."
                id="hiddenParentela_1" name="Accompagnatori[1].IdTipoParentela" type="hidden" value="">
            <div id="divCompanion_2" style="display: none;">
                <h2>Datos del Solicitante adicional 3</h2>
                <div>
                    Apellido *
                    <input class="text-box single-line" id="Accompagnatori_2__CognomeAccompagnatore"
                        name="Accompagnatori[2].CognomeAccompagnatore" onkeyup="aggiornaElencoPrenotanti()"
                        type="text" value="">
                    <span class="field-validation-valid" data-valmsg-for="Surname2" data-valmsg-replace="true"
                        style="color:red"></span>
                </div>
                <div>
                    Nombre *
                    <input class="text-box single-line" id="Accompagnatori_2__NomeAccompagnatore"
                        name="Accompagnatori[2].NomeAccompagnatore" onkeyup="aggiornaElencoPrenotanti()" type="text"
                        value="">
                    <span class="field-validation-valid" data-valmsg-for="Name2" data-valmsg-replace="true"
                        style="color:red"></span>
                </div>
                <div>
                    Fecha de nacimiento *
                    <input class="text-box single-line" data-val="true"
                        data-val-date="The field DataNascitaAccompagnatore must be a date."
                        id="Accompagnatori_2__DataNascitaAccompagnatore"
                        name="Accompagnatori[2].DataNascitaAccompagnatore" type="date" value="">
                </div>
                <div>
                    <span class="field-validation-valid" data-valmsg-for="Date2" data-valmsg-replace="true"
                        style="color:red"></span>
                    <span class="field-validation-valid" data-valmsg-for="dateRange2" data-valmsg-replace="true"
                        style="color:red"></span>
                </div>
                Relación de parentesco
                <div id="ddlRelation_2">
                </div>
                <div id="divCompanionAdd_2_0">
                    <label>
                        Dirección completa de residencia &nbsp;<b>*</b> </label>
                    <input id="Accompagnatori_2__DatiAddizionaliAccompagnatore_0___Descrizione"
                        name="Accompagnatori[2].DatiAddizionaliAccompagnatore[0]._Descrizione" type="hidden"
                        value="Dirección completa de residencia">
                </div>
                <input data-val="true" data-val-number="The field _Id must be a number."
                    data-val-required="The _Id field is required." id="hiddenIdAcc2"
                    name="Accompagnatori[2].DatiAddizionaliAccompagnatore[0]._Id" type="hidden" value="36990"><input
                    data-val="true" data-val-number="The field IDTipoDatoAddizionale must be a number."
                    data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADDAcc_0"
                    name="Accompagnatori[2].DatiAddizionaliAccompagnatore[0]._TipoDatoAddizionale.IDTipoDatoAddizionale"
                    type="hidden" value="25"><input data-val="true"
                    data-val-number="The field IDTipoControllo must be a number."
                    data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAddAcc_0"
                    name="Accompagnatori[2].DatiAddizionaliAccompagnatore[0]._TipoDatoAddizionale.IDTipoControllo"
                    type="hidden" value="2"><input id="hiddenRegExAcc_0"
                    name="Accompagnatori[2].DatiAddizionaliAccompagnatore[0]._TipoDatoAddizionale.RegEx"
                    type="hidden" value="">
                <div id="divCompanionAdd_2_1">
                    <label>
                        Hijos menores (S/N) &nbsp;<b>*</b> </label>
                    <input id="Accompagnatori_2__DatiAddizionaliAccompagnatore_1___Descrizione"
                        name="Accompagnatori[2].DatiAddizionaliAccompagnatore[1]._Descrizione" type="hidden"
                        value="Hijos menores (S/N)">
                </div>
                <input data-val="true" data-val-number="The field _Id must be a number."
                    data-val-required="The _Id field is required." id="hiddenIdAcc2"
                    name="Accompagnatori[2].DatiAddizionaliAccompagnatore[1]._Id" type="hidden" value="36991"><input
                    data-val="true" data-val-number="The field IDTipoDatoAddizionale must be a number."
                    data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADDAcc_1"
                    name="Accompagnatori[2].DatiAddizionaliAccompagnatore[1]._TipoDatoAddizionale.IDTipoDatoAddizionale"
                    type="hidden" value="11"><input data-val="true"
                    data-val-number="The field IDTipoControllo must be a number."
                    data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAddAcc_1"
                    name="Accompagnatori[2].DatiAddizionaliAccompagnatore[1]._TipoDatoAddizionale.IDTipoControllo"
                    type="hidden" value="3"><input id="hiddenRegExAcc_1"
                    name="Accompagnatori[2].DatiAddizionaliAccompagnatore[1]._TipoDatoAddizionale.RegEx"
                    type="hidden" value="">
                <div id="divCompanionAdd_2_2">
                    <label>
                        Número de hijos menores &nbsp;<b>*</b> </label>
                    <input id="Accompagnatori_2__DatiAddizionaliAccompagnatore_2___Descrizione"
                        name="Accompagnatori[2].DatiAddizionaliAccompagnatore[2]._Descrizione" type="hidden"
                        value="Número de hijos menores">
                </div>
                <input data-val="true" data-val-number="The field _Id must be a number."
                    data-val-required="The _Id field is required." id="hiddenIdAcc2"
                    name="Accompagnatori[2].DatiAddizionaliAccompagnatore[2]._Id" type="hidden" value="36992"><input
                    data-val="true" data-val-number="The field IDTipoDatoAddizionale must be a number."
                    data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADDAcc_2"
                    name="Accompagnatori[2].DatiAddizionaliAccompagnatore[2]._TipoDatoAddizionale.IDTipoDatoAddizionale"
                    type="hidden" value="12"><input data-val="true"
                    data-val-number="The field IDTipoControllo must be a number."
                    data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAddAcc_2"
                    name="Accompagnatori[2].DatiAddizionaliAccompagnatore[2]._TipoDatoAddizionale.IDTipoControllo"
                    type="hidden" value="2"><input id="hiddenRegExAcc_2"
                    name="Accompagnatori[2].DatiAddizionaliAccompagnatore[2]._TipoDatoAddizionale.RegEx"
                    type="hidden" value="">
                <div id="divCompanionAdd_2_3">
                    <label>
                        Estado Civil &nbsp;<b>*</b> </label>
                    <input id="Accompagnatori_2__DatiAddizionaliAccompagnatore_3___Descrizione"
                        name="Accompagnatori[2].DatiAddizionaliAccompagnatore[3]._Descrizione" type="hidden"
                        value="Estado Civil">
                </div>
                <input data-val="true" data-val-number="The field _Id must be a number."
                    data-val-required="The _Id field is required." id="hiddenIdAcc2"
                    name="Accompagnatori[2].DatiAddizionaliAccompagnatore[3]._Id" type="hidden" value="36993"><input
                    data-val="true" data-val-number="The field IDTipoDatoAddizionale must be a number."
                    data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADDAcc_3"
                    name="Accompagnatori[2].DatiAddizionaliAccompagnatore[3]._TipoDatoAddizionale.IDTipoDatoAddizionale"
                    type="hidden" value="17"><input data-val="true"
                    data-val-number="The field IDTipoControllo must be a number."
                    data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAddAcc_3"
                    name="Accompagnatori[2].DatiAddizionaliAccompagnatore[3]._TipoDatoAddizionale.IDTipoControllo"
                    type="hidden" value="3"><input id="hiddenRegExAcc_3"
                    name="Accompagnatori[2].DatiAddizionaliAccompagnatore[3]._TipoDatoAddizionale.RegEx"
                    type="hidden" value="">
                <div id="divCompanionAdd_2_4">
                    <label>
                        Nombre y Apellido del cónyuge &nbsp;<b>*</b> </label>
                    <input id="Accompagnatori_2__DatiAddizionaliAccompagnatore_4___Descrizione"
                        name="Accompagnatori[2].DatiAddizionaliAccompagnatore[4]._Descrizione" type="hidden"
                        value="Nombre y Apellido del cónyuge">
                </div>
                <input data-val="true" data-val-number="The field _Id must be a number."
                    data-val-required="The _Id field is required." id="hiddenIdAcc2"
                    name="Accompagnatori[2].DatiAddizionaliAccompagnatore[4]._Id" type="hidden" value="36994"><input
                    data-val="true" data-val-number="The field IDTipoDatoAddizionale must be a number."
                    data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADDAcc_4"
                    name="Accompagnatori[2].DatiAddizionaliAccompagnatore[4]._TipoDatoAddizionale.IDTipoDatoAddizionale"
                    type="hidden" value="18"><input data-val="true"
                    data-val-number="The field IDTipoControllo must be a number."
                    data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAddAcc_4"
                    name="Accompagnatori[2].DatiAddizionaliAccompagnatore[4]._TipoDatoAddizionale.IDTipoControllo"
                    type="hidden" value="2"><input id="hiddenRegExAcc_4"
                    name="Accompagnatori[2].DatiAddizionaliAccompagnatore[4]._TipoDatoAddizionale.RegEx"
                    type="hidden" value="">
                <div id="divCompanionAdd_2_5">
                    <label>
                        Titular de pasaporte italiano vencido/próximo a vencer (S/N) &nbsp;<b>*</b> </label>
                    <input id="Accompagnatori_2__DatiAddizionaliAccompagnatore_5___Descrizione"
                        name="Accompagnatori[2].DatiAddizionaliAccompagnatore[5]._Descrizione" type="hidden"
                        value="Titular de pasaporte italiano vencido/próximo a vencer (S/N)">
                </div>
                <input data-val="true" data-val-number="The field _Id must be a number."
                    data-val-required="The _Id field is required." id="hiddenIdAcc2"
                    name="Accompagnatori[2].DatiAddizionaliAccompagnatore[5]._Id" type="hidden" value="36995"><input
                    data-val="true" data-val-number="The field IDTipoDatoAddizionale must be a number."
                    data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADDAcc_5"
                    name="Accompagnatori[2].DatiAddizionaliAccompagnatore[5]._TipoDatoAddizionale.IDTipoDatoAddizionale"
                    type="hidden" value="1"><input data-val="true"
                    data-val-number="The field IDTipoControllo must be a number."
                    data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAddAcc_5"
                    name="Accompagnatori[2].DatiAddizionaliAccompagnatore[5]._TipoDatoAddizionale.IDTipoControllo"
                    type="hidden" value="3"><input id="hiddenRegExAcc_5"
                    name="Accompagnatori[2].DatiAddizionaliAccompagnatore[5]._TipoDatoAddizionale.RegEx"
                    type="hidden" value="">
                <div id="divCompanionAdd_2_6">
                    <label>
                        Número de pasaporte &nbsp;<b>*</b> </label>
                    <input id="Accompagnatori_2__DatiAddizionaliAccompagnatore_6___Descrizione"
                        name="Accompagnatori[2].DatiAddizionaliAccompagnatore[6]._Descrizione" type="hidden"
                        value="Número de pasaporte">
                </div>
                <input data-val="true" data-val-number="The field _Id must be a number."
                    data-val-required="The _Id field is required." id="hiddenIdAcc2"
                    name="Accompagnatori[2].DatiAddizionaliAccompagnatore[6]._Id" type="hidden" value="36996"><input
                    data-val="true" data-val-number="The field IDTipoDatoAddizionale must be a number."
                    data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADDAcc_6"
                    name="Accompagnatori[2].DatiAddizionaliAccompagnatore[6]._TipoDatoAddizionale.IDTipoDatoAddizionale"
                    type="hidden" value="2"><input data-val="true"
                    data-val-number="The field IDTipoControllo must be a number."
                    data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAddAcc_6"
                    name="Accompagnatori[2].DatiAddizionaliAccompagnatore[6]._TipoDatoAddizionale.IDTipoControllo"
                    type="hidden" value="2"><input id="hiddenRegExAcc_6"
                    name="Accompagnatori[2].DatiAddizionaliAccompagnatore[6]._TipoDatoAddizionale.RegEx"
                    type="hidden" value="">
                <div id="divCompanionAdd_2_7">
                    <label>
                        Estatura en centímetros &nbsp;<b>*</b> </label>
                    <input id="Accompagnatori_2__DatiAddizionaliAccompagnatore_7___Descrizione"
                        name="Accompagnatori[2].DatiAddizionaliAccompagnatore[7]._Descrizione" type="hidden"
                        value="Estatura en centímetros">
                </div>
                <input data-val="true" data-val-number="The field _Id must be a number."
                    data-val-required="The _Id field is required." id="hiddenIdAcc2"
                    name="Accompagnatori[2].DatiAddizionaliAccompagnatore[7]._Id" type="hidden" value="36997"><input
                    data-val="true" data-val-number="The field IDTipoDatoAddizionale must be a number."
                    data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADDAcc_7"
                    name="Accompagnatori[2].DatiAddizionaliAccompagnatore[7]._TipoDatoAddizionale.IDTipoDatoAddizionale"
                    type="hidden" value="22"><input data-val="true"
                    data-val-number="The field IDTipoControllo must be a number."
                    data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAddAcc_7"
                    name="Accompagnatori[2].DatiAddizionaliAccompagnatore[7]._TipoDatoAddizionale.IDTipoControllo"
                    type="hidden" value="2"><input id="hiddenRegExAcc_7"
                    name="Accompagnatori[2].DatiAddizionaliAccompagnatore[7]._TipoDatoAddizionale.RegEx"
                    type="hidden" value="">
                <div id="divCompanionAdd_2_8">
                    <label>
                        Color de ojos &nbsp;<b>*</b> </label>
                    <input id="Accompagnatori_2__DatiAddizionaliAccompagnatore_8___Descrizione"
                        name="Accompagnatori[2].DatiAddizionaliAccompagnatore[8]._Descrizione" type="hidden"
                        value="Color de ojos">
                </div>
                <input data-val="true" data-val-number="The field _Id must be a number."
                    data-val-required="The _Id field is required." id="hiddenIdAcc2"
                    name="Accompagnatori[2].DatiAddizionaliAccompagnatore[8]._Id" type="hidden" value="36998"><input
                    data-val="true" data-val-number="The field IDTipoDatoAddizionale must be a number."
                    data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADDAcc_8"
                    name="Accompagnatori[2].DatiAddizionaliAccompagnatore[8]._TipoDatoAddizionale.IDTipoDatoAddizionale"
                    type="hidden" value="23"><input data-val="true"
                    data-val-number="The field IDTipoControllo must be a number."
                    data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAddAcc_8"
                    name="Accompagnatori[2].DatiAddizionaliAccompagnatore[8]._TipoDatoAddizionale.IDTipoControllo"
                    type="hidden" value="3"><input id="hiddenRegExAcc_8"
                    name="Accompagnatori[2].DatiAddizionaliAccompagnatore[8]._TipoDatoAddizionale.RegEx"
                    type="hidden" value="">
                <div id="docCompanionAdd_2_0">
                    <label>
                        Documento de identidad/viaje &nbsp;<b>*</b> </label>
                    <input id="Accompagnatori_2__DocumentiAccompagnatore_0___Descrizione"
                        name="Accompagnatori[2].DocumentiAccompagnatore[0]._Descrizione" type="hidden"
                        value="Documento de identidad/viaje">
                    <input id="Accompagnatori_2__DocumentiAccompagnatore_0___File"
                        name="Accompagnatori[2].DocumentiAccompagnatore[0]._File"
                        onchange="controlloFileCaricato(this)" type="file" value="">
                    <span class="field-validation-valid" data-valmsg-for="Lenght_2_0" data-valmsg-replace="true"
                        style="color:red"></span>
                    <input data-val="true" data-val-required="The _Obbligatorio field is required."
                        id="Accompagnatori_2__DocumentiAccompagnatore_0___Obbligatorio"
                        name="Accompagnatori[2].DocumentiAccompagnatore[0]._Obbligatorio" type="hidden"
                        value="True">
                    <span class="field-validation-valid validator-required" data-valmsg-for="Required_2_0"
                        data-valmsg-replace="true" style="color:red"></span>
                    <span class="field-validation-valid validator-required" data-valmsg-for="Extension_2_0"
                        data-valmsg-replace="true" style="color:red"></span>
                    <input data-val="true" data-val-number="The field _Id must be a number."
                        data-val-required="The _Id field is required." id="hiddenIdDoc2"
                        name="Accompagnatori[2].DocumentiAccompagnatore[0]._Id" type="hidden" value="7913">
                </div>
                <input data-val="true" data-val-number="The field IDTipoDocumento must be a number."
                    data-val-required="The IDTipoDocumento field is required." id="hiddenIdDocADDAcc_0"
                    name="Accompagnatori[2].DocumentiAccompagnatore[0]._TipoDocumento.IDTipoDocumento" type="hidden"
                    value="4">
                <div id="docCompanionAdd_2_1">
                    <label>
                        Pasaporte </label>
                    <input id="Accompagnatori_2__DocumentiAccompagnatore_1___Descrizione"
                        name="Accompagnatori[2].DocumentiAccompagnatore[1]._Descrizione" type="hidden"
                        value="Pasaporte">
                    <input id="Accompagnatori_2__DocumentiAccompagnatore_1___File"
                        name="Accompagnatori[2].DocumentiAccompagnatore[1]._File"
                        onchange="controlloFileCaricato(this)" type="file" value="">
                    <span class="field-validation-valid" data-valmsg-for="Lenght_2_1" data-valmsg-replace="true"
                        style="color:red"></span>
                    <input data-val="true" data-val-required="The _Obbligatorio field is required."
                        id="Accompagnatori_2__DocumentiAccompagnatore_1___Obbligatorio"
                        name="Accompagnatori[2].DocumentiAccompagnatore[1]._Obbligatorio" type="hidden"
                        value="False">
                    <span class="field-validation-valid validator-required" data-valmsg-for="Required_2_1"
                        data-valmsg-replace="true" style="color:red"></span>
                    <span class="field-validation-valid validator-required" data-valmsg-for="Extension_2_1"
                        data-valmsg-replace="true" style="color:red"></span>
                    <input data-val="true" data-val-number="The field _Id must be a number."
                        data-val-required="The _Id field is required." id="hiddenIdDoc2"
                        name="Accompagnatori[2].DocumentiAccompagnatore[1]._Id" type="hidden" value="7914">
                </div>
                <input data-val="true" data-val-number="The field IDTipoDocumento must be a number."
                    data-val-required="The IDTipoDocumento field is required." id="hiddenIdDocADDAcc_1"
                    name="Accompagnatori[2].DocumentiAccompagnatore[1]._TipoDocumento.IDTipoDocumento" type="hidden"
                    value="1">
            </div>
            <input data-val="true" data-val-number="The field IdTipoParentela must be a number."
                id="hiddenParentela_2" name="Accompagnatori[2].IdTipoParentela" type="hidden" value="">
            <div id="divCompanion_3" style="display: none;">
                <h2>Datos del Solicitante adicional 4</h2>
                <div>
                    Apellido *
                    <input class="text-box single-line" id="Accompagnatori_3__CognomeAccompagnatore"
                        name="Accompagnatori[3].CognomeAccompagnatore" onkeyup="aggiornaElencoPrenotanti()"
                        type="text" value="">
                    <span class="field-validation-valid" data-valmsg-for="Surname3" data-valmsg-replace="true"
                        style="color:red"></span>
                </div>
                <div>
                    Nombre *
                    <input class="text-box single-line" id="Accompagnatori_3__NomeAccompagnatore"
                        name="Accompagnatori[3].NomeAccompagnatore" onkeyup="aggiornaElencoPrenotanti()" type="text"
                        value="">
                    <span class="field-validation-valid" data-valmsg-for="Name3" data-valmsg-replace="true"
                        style="color:red"></span>
                </div>
                <div>
                    Fecha de nacimiento *
                    <input class="text-box single-line" data-val="true"
                        data-val-date="The field DataNascitaAccompagnatore must be a date."
                        id="Accompagnatori_3__DataNascitaAccompagnatore"
                        name="Accompagnatori[3].DataNascitaAccompagnatore" type="date" value="">
                </div>
                <div>
                    <span class="field-validation-valid" data-valmsg-for="Date3" data-valmsg-replace="true"
                        style="color:red"></span>
                    <span class="field-validation-valid" data-valmsg-for="dateRange3" data-valmsg-replace="true"
                        style="color:red"></span>
                </div>
                Relación de parentesco
                <div id="ddlRelation_3">
                </div>
                <div id="divCompanionAdd_3_0">
                    <label>
                        Dirección completa de residencia &nbsp;<b>*</b> </label>
                    <input id="Accompagnatori_3__DatiAddizionaliAccompagnatore_0___Descrizione"
                        name="Accompagnatori[3].DatiAddizionaliAccompagnatore[0]._Descrizione" type="hidden"
                        value="Dirección completa de residencia">
                </div>
                <input data-val="true" data-val-number="The field _Id must be a number."
                    data-val-required="The _Id field is required." id="hiddenIdAcc3"
                    name="Accompagnatori[3].DatiAddizionaliAccompagnatore[0]._Id" type="hidden" value="36990"><input
                    data-val="true" data-val-number="The field IDTipoDatoAddizionale must be a number."
                    data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADDAcc_0"
                    name="Accompagnatori[3].DatiAddizionaliAccompagnatore[0]._TipoDatoAddizionale.IDTipoDatoAddizionale"
                    type="hidden" value="25"><input data-val="true"
                    data-val-number="The field IDTipoControllo must be a number."
                    data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAddAcc_0"
                    name="Accompagnatori[3].DatiAddizionaliAccompagnatore[0]._TipoDatoAddizionale.IDTipoControllo"
                    type="hidden" value="2"><input id="hiddenRegExAcc_0"
                    name="Accompagnatori[3].DatiAddizionaliAccompagnatore[0]._TipoDatoAddizionale.RegEx"
                    type="hidden" value="">
                <div id="divCompanionAdd_3_1">
                    <label>
                        Hijos menores (S/N) &nbsp;<b>*</b> </label>
                    <input id="Accompagnatori_3__DatiAddizionaliAccompagnatore_1___Descrizione"
                        name="Accompagnatori[3].DatiAddizionaliAccompagnatore[1]._Descrizione" type="hidden"
                        value="Hijos menores (S/N)">
                </div>
                <input data-val="true" data-val-number="The field _Id must be a number."
                    data-val-required="The _Id field is required." id="hiddenIdAcc3"
                    name="Accompagnatori[3].DatiAddizionaliAccompagnatore[1]._Id" type="hidden" value="36991"><input
                    data-val="true" data-val-number="The field IDTipoDatoAddizionale must be a number."
                    data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADDAcc_1"
                    name="Accompagnatori[3].DatiAddizionaliAccompagnatore[1]._TipoDatoAddizionale.IDTipoDatoAddizionale"
                    type="hidden" value="11"><input data-val="true"
                    data-val-number="The field IDTipoControllo must be a number."
                    data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAddAcc_1"
                    name="Accompagnatori[3].DatiAddizionaliAccompagnatore[1]._TipoDatoAddizionale.IDTipoControllo"
                    type="hidden" value="3"><input id="hiddenRegExAcc_1"
                    name="Accompagnatori[3].DatiAddizionaliAccompagnatore[1]._TipoDatoAddizionale.RegEx"
                    type="hidden" value="">
                <div id="divCompanionAdd_3_2">
                    <label>
                        Número de hijos menores &nbsp;<b>*</b> </label>
                    <input id="Accompagnatori_3__DatiAddizionaliAccompagnatore_2___Descrizione"
                        name="Accompagnatori[3].DatiAddizionaliAccompagnatore[2]._Descrizione" type="hidden"
                        value="Número de hijos menores">
                </div>
                <input data-val="true" data-val-number="The field _Id must be a number."
                    data-val-required="The _Id field is required." id="hiddenIdAcc3"
                    name="Accompagnatori[3].DatiAddizionaliAccompagnatore[2]._Id" type="hidden" value="36992"><input
                    data-val="true" data-val-number="The field IDTipoDatoAddizionale must be a number."
                    data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADDAcc_2"
                    name="Accompagnatori[3].DatiAddizionaliAccompagnatore[2]._TipoDatoAddizionale.IDTipoDatoAddizionale"
                    type="hidden" value="12"><input data-val="true"
                    data-val-number="The field IDTipoControllo must be a number."
                    data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAddAcc_2"
                    name="Accompagnatori[3].DatiAddizionaliAccompagnatore[2]._TipoDatoAddizionale.IDTipoControllo"
                    type="hidden" value="2"><input id="hiddenRegExAcc_2"
                    name="Accompagnatori[3].DatiAddizionaliAccompagnatore[2]._TipoDatoAddizionale.RegEx"
                    type="hidden" value="">
                <div id="divCompanionAdd_3_3">
                    <label>
                        Estado Civil &nbsp;<b>*</b> </label>
                    <input id="Accompagnatori_3__DatiAddizionaliAccompagnatore_3___Descrizione"
                        name="Accompagnatori[3].DatiAddizionaliAccompagnatore[3]._Descrizione" type="hidden"
                        value="Estado Civil">
                </div>
                <input data-val="true" data-val-number="The field _Id must be a number."
                    data-val-required="The _Id field is required." id="hiddenIdAcc3"
                    name="Accompagnatori[3].DatiAddizionaliAccompagnatore[3]._Id" type="hidden" value="36993"><input
                    data-val="true" data-val-number="The field IDTipoDatoAddizionale must be a number."
                    data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADDAcc_3"
                    name="Accompagnatori[3].DatiAddizionaliAccompagnatore[3]._TipoDatoAddizionale.IDTipoDatoAddizionale"
                    type="hidden" value="17"><input data-val="true"
                    data-val-number="The field IDTipoControllo must be a number."
                    data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAddAcc_3"
                    name="Accompagnatori[3].DatiAddizionaliAccompagnatore[3]._TipoDatoAddizionale.IDTipoControllo"
                    type="hidden" value="3"><input id="hiddenRegExAcc_3"
                    name="Accompagnatori[3].DatiAddizionaliAccompagnatore[3]._TipoDatoAddizionale.RegEx"
                    type="hidden" value="">
                <div id="divCompanionAdd_3_4">
                    <label>
                        Nombre y Apellido del cónyuge &nbsp;<b>*</b> </label>
                    <input id="Accompagnatori_3__DatiAddizionaliAccompagnatore_4___Descrizione"
                        name="Accompagnatori[3].DatiAddizionaliAccompagnatore[4]._Descrizione" type="hidden"
                        value="Nombre y Apellido del cónyuge">
                </div>
                <input data-val="true" data-val-number="The field _Id must be a number."
                    data-val-required="The _Id field is required." id="hiddenIdAcc3"
                    name="Accompagnatori[3].DatiAddizionaliAccompagnatore[4]._Id" type="hidden" value="36994"><input
                    data-val="true" data-val-number="The field IDTipoDatoAddizionale must be a number."
                    data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADDAcc_4"
                    name="Accompagnatori[3].DatiAddizionaliAccompagnatore[4]._TipoDatoAddizionale.IDTipoDatoAddizionale"
                    type="hidden" value="18"><input data-val="true"
                    data-val-number="The field IDTipoControllo must be a number."
                    data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAddAcc_4"
                    name="Accompagnatori[3].DatiAddizionaliAccompagnatore[4]._TipoDatoAddizionale.IDTipoControllo"
                    type="hidden" value="2"><input id="hiddenRegExAcc_4"
                    name="Accompagnatori[3].DatiAddizionaliAccompagnatore[4]._TipoDatoAddizionale.RegEx"
                    type="hidden" value="">
                <div id="divCompanionAdd_3_5">
                    <label>
                        Titular de pasaporte italiano vencido/próximo a vencer (S/N) &nbsp;<b>*</b> </label>
                    <input id="Accompagnatori_3__DatiAddizionaliAccompagnatore_5___Descrizione"
                        name="Accompagnatori[3].DatiAddizionaliAccompagnatore[5]._Descrizione" type="hidden"
                        value="Titular de pasaporte italiano vencido/próximo a vencer (S/N)">
                </div>
                <input data-val="true" data-val-number="The field _Id must be a number."
                    data-val-required="The _Id field is required." id="hiddenIdAcc3"
                    name="Accompagnatori[3].DatiAddizionaliAccompagnatore[5]._Id" type="hidden" value="36995"><input
                    data-val="true" data-val-number="The field IDTipoDatoAddizionale must be a number."
                    data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADDAcc_5"
                    name="Accompagnatori[3].DatiAddizionaliAccompagnatore[5]._TipoDatoAddizionale.IDTipoDatoAddizionale"
                    type="hidden" value="1"><input data-val="true"
                    data-val-number="The field IDTipoControllo must be a number."
                    data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAddAcc_5"
                    name="Accompagnatori[3].DatiAddizionaliAccompagnatore[5]._TipoDatoAddizionale.IDTipoControllo"
                    type="hidden" value="3"><input id="hiddenRegExAcc_5"
                    name="Accompagnatori[3].DatiAddizionaliAccompagnatore[5]._TipoDatoAddizionale.RegEx"
                    type="hidden" value="">
                <div id="divCompanionAdd_3_6">
                    <label>
                        Número de pasaporte &nbsp;<b>*</b> </label>
                    <input id="Accompagnatori_3__DatiAddizionaliAccompagnatore_6___Descrizione"
                        name="Accompagnatori[3].DatiAddizionaliAccompagnatore[6]._Descrizione" type="hidden"
                        value="Número de pasaporte">
                </div>
                <input data-val="true" data-val-number="The field _Id must be a number."
                    data-val-required="The _Id field is required." id="hiddenIdAcc3"
                    name="Accompagnatori[3].DatiAddizionaliAccompagnatore[6]._Id" type="hidden" value="36996"><input
                    data-val="true" data-val-number="The field IDTipoDatoAddizionale must be a number."
                    data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADDAcc_6"
                    name="Accompagnatori[3].DatiAddizionaliAccompagnatore[6]._TipoDatoAddizionale.IDTipoDatoAddizionale"
                    type="hidden" value="2"><input data-val="true"
                    data-val-number="The field IDTipoControllo must be a number."
                    data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAddAcc_6"
                    name="Accompagnatori[3].DatiAddizionaliAccompagnatore[6]._TipoDatoAddizionale.IDTipoControllo"
                    type="hidden" value="2"><input id="hiddenRegExAcc_6"
                    name="Accompagnatori[3].DatiAddizionaliAccompagnatore[6]._TipoDatoAddizionale.RegEx"
                    type="hidden" value="">
                <div id="divCompanionAdd_3_7">
                    <label>
                        Estatura en centímetros &nbsp;<b>*</b> </label>
                    <input id="Accompagnatori_3__DatiAddizionaliAccompagnatore_7___Descrizione"
                        name="Accompagnatori[3].DatiAddizionaliAccompagnatore[7]._Descrizione" type="hidden"
                        value="Estatura en centímetros">
                </div>
                <input data-val="true" data-val-number="The field _Id must be a number."
                    data-val-required="The _Id field is required." id="hiddenIdAcc3"
                    name="Accompagnatori[3].DatiAddizionaliAccompagnatore[7]._Id" type="hidden" value="36997"><input
                    data-val="true" data-val-number="The field IDTipoDatoAddizionale must be a number."
                    data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADDAcc_7"
                    name="Accompagnatori[3].DatiAddizionaliAccompagnatore[7]._TipoDatoAddizionale.IDTipoDatoAddizionale"
                    type="hidden" value="22"><input data-val="true"
                    data-val-number="The field IDTipoControllo must be a number."
                    data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAddAcc_7"
                    name="Accompagnatori[3].DatiAddizionaliAccompagnatore[7]._TipoDatoAddizionale.IDTipoControllo"
                    type="hidden" value="2"><input id="hiddenRegExAcc_7"
                    name="Accompagnatori[3].DatiAddizionaliAccompagnatore[7]._TipoDatoAddizionale.RegEx"
                    type="hidden" value="">
                <div id="divCompanionAdd_3_8">
                    <label>
                        Color de ojos &nbsp;<b>*</b> </label>
                    <input id="Accompagnatori_3__DatiAddizionaliAccompagnatore_8___Descrizione"
                        name="Accompagnatori[3].DatiAddizionaliAccompagnatore[8]._Descrizione" type="hidden"
                        value="Color de ojos">
                </div>
                <input data-val="true" data-val-number="The field _Id must be a number."
                    data-val-required="The _Id field is required." id="hiddenIdAcc3"
                    name="Accompagnatori[3].DatiAddizionaliAccompagnatore[8]._Id" type="hidden" value="36998"><input
                    data-val="true" data-val-number="The field IDTipoDatoAddizionale must be a number."
                    data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADDAcc_8"
                    name="Accompagnatori[3].DatiAddizionaliAccompagnatore[8]._TipoDatoAddizionale.IDTipoDatoAddizionale"
                    type="hidden" value="23"><input data-val="true"
                    data-val-number="The field IDTipoControllo must be a number."
                    data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAddAcc_8"
                    name="Accompagnatori[3].DatiAddizionaliAccompagnatore[8]._TipoDatoAddizionale.IDTipoControllo"
                    type="hidden" value="3"><input id="hiddenRegExAcc_8"
                    name="Accompagnatori[3].DatiAddizionaliAccompagnatore[8]._TipoDatoAddizionale.RegEx"
                    type="hidden" value="">
                <div id="docCompanionAdd_3_0">
                    <label>
                        Documento de identidad/viaje &nbsp;<b>*</b> </label>
                    <input id="Accompagnatori_3__DocumentiAccompagnatore_0___Descrizione"
                        name="Accompagnatori[3].DocumentiAccompagnatore[0]._Descrizione" type="hidden"
                        value="Documento de identidad/viaje">
                    <input id="Accompagnatori_3__DocumentiAccompagnatore_0___File"
                        name="Accompagnatori[3].DocumentiAccompagnatore[0]._File"
                        onchange="controlloFileCaricato(this)" type="file" value="">
                    <span class="field-validation-valid" data-valmsg-for="Lenght_3_0" data-valmsg-replace="true"
                        style="color:red"></span>
                    <input data-val="true" data-val-required="The _Obbligatorio field is required."
                        id="Accompagnatori_3__DocumentiAccompagnatore_0___Obbligatorio"
                        name="Accompagnatori[3].DocumentiAccompagnatore[0]._Obbligatorio" type="hidden"
                        value="True">
                    <span class="field-validation-valid validator-required" data-valmsg-for="Required_3_0"
                        data-valmsg-replace="true" style="color:red"></span>
                    <span class="field-validation-valid validator-required" data-valmsg-for="Extension_3_0"
                        data-valmsg-replace="true" style="color:red"></span>
                    <input data-val="true" data-val-number="The field _Id must be a number."
                        data-val-required="The _Id field is required." id="hiddenIdDoc3"
                        name="Accompagnatori[3].DocumentiAccompagnatore[0]._Id" type="hidden" value="7913">
                </div>
                <input data-val="true" data-val-number="The field IDTipoDocumento must be a number."
                    data-val-required="The IDTipoDocumento field is required." id="hiddenIdDocADDAcc_0"
                    name="Accompagnatori[3].DocumentiAccompagnatore[0]._TipoDocumento.IDTipoDocumento" type="hidden"
                    value="4">
                <div id="docCompanionAdd_3_1">
                    <label>
                        Pasaporte </label>
                    <input id="Accompagnatori_3__DocumentiAccompagnatore_1___Descrizione"
                        name="Accompagnatori[3].DocumentiAccompagnatore[1]._Descrizione" type="hidden"
                        value="Pasaporte">
                    <input id="Accompagnatori_3__DocumentiAccompagnatore_1___File"
                        name="Accompagnatori[3].DocumentiAccompagnatore[1]._File"
                        onchange="controlloFileCaricato(this)" type="file" value="">
                    <span class="field-validation-valid" data-valmsg-for="Lenght_3_1" data-valmsg-replace="true"
                        style="color:red"></span>
                    <input data-val="true" data-val-required="The _Obbligatorio field is required."
                        id="Accompagnatori_3__DocumentiAccompagnatore_1___Obbligatorio"
                        name="Accompagnatori[3].DocumentiAccompagnatore[1]._Obbligatorio" type="hidden"
                        value="False">
                    <span class="field-validation-valid validator-required" data-valmsg-for="Required_3_1"
                        data-valmsg-replace="true" style="color:red"></span>
                    <span class="field-validation-valid validator-required" data-valmsg-for="Extension_3_1"
                        data-valmsg-replace="true" style="color:red"></span>
                    <input data-val="true" data-val-number="The field _Id must be a number."
                        data-val-required="The _Id field is required." id="hiddenIdDoc3"
                        name="Accompagnatori[3].DocumentiAccompagnatore[1]._Id" type="hidden" value="7914">
                </div>
                <input data-val="true" data-val-number="The field IDTipoDocumento must be a number."
                    data-val-required="The IDTipoDocumento field is required." id="hiddenIdDocADDAcc_1"
                    name="Accompagnatori[3].DocumentiAccompagnatore[1]._TipoDocumento.IDTipoDocumento" type="hidden"
                    value="1">
            </div>
            <input data-val="true" data-val-number="The field IdTipoParentela must be a number."
                id="hiddenParentela_3" name="Accompagnatori[3].IdTipoParentela" type="hidden" value="">
            <div id="divCompanion_4" style="display: none;">
                <h2>Datos del Solicitante adicional 5</h2>
                <div>
                    Apellido *
                    <input class="text-box single-line" id="Accompagnatori_4__CognomeAccompagnatore"
                        name="Accompagnatori[4].CognomeAccompagnatore" onkeyup="aggiornaElencoPrenotanti()"
                        type="text" value="">
                    <span class="field-validation-valid" data-valmsg-for="Surname4" data-valmsg-replace="true"
                        style="color:red"></span>
                </div>
                <div>
                    Nombre *
                    <input class="text-box single-line" id="Accompagnatori_4__NomeAccompagnatore"
                        name="Accompagnatori[4].NomeAccompagnatore" onkeyup="aggiornaElencoPrenotanti()" type="text"
                        value="">
                    <span class="field-validation-valid" data-valmsg-for="Name4" data-valmsg-replace="true"
                        style="color:red"></span>
                </div>
                <div>
                    Fecha de nacimiento *
                    <input class="text-box single-line" data-val="true"
                        data-val-date="The field DataNascitaAccompagnatore must be a date."
                        id="Accompagnatori_4__DataNascitaAccompagnatore"
                        name="Accompagnatori[4].DataNascitaAccompagnatore" type="date" value="">
                </div>
                <div>
                    <span class="field-validation-valid" data-valmsg-for="Date4" data-valmsg-replace="true"
                        style="color:red"></span>
                    <span class="field-validation-valid" data-valmsg-for="dateRange4" data-valmsg-replace="true"
                        style="color:red"></span>
                </div>
                Relación de parentesco
                <div id="ddlRelation_4">
                </div>
                <div id="divCompanionAdd_4_0">
                    <label>
                        Dirección completa de residencia &nbsp;<b>*</b> </label>
                    <input id="Accompagnatori_4__DatiAddizionaliAccompagnatore_0___Descrizione"
                        name="Accompagnatori[4].DatiAddizionaliAccompagnatore[0]._Descrizione" type="hidden"
                        value="Dirección completa de residencia">
                </div>
                <input data-val="true" data-val-number="The field _Id must be a number."
                    data-val-required="The _Id field is required." id="hiddenIdAcc4"
                    name="Accompagnatori[4].DatiAddizionaliAccompagnatore[0]._Id" type="hidden" value="36990"><input
                    data-val="true" data-val-number="The field IDTipoDatoAddizionale must be a number."
                    data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADDAcc_0"
                    name="Accompagnatori[4].DatiAddizionaliAccompagnatore[0]._TipoDatoAddizionale.IDTipoDatoAddizionale"
                    type="hidden" value="25"><input data-val="true"
                    data-val-number="The field IDTipoControllo must be a number."
                    data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAddAcc_0"
                    name="Accompagnatori[4].DatiAddizionaliAccompagnatore[0]._TipoDatoAddizionale.IDTipoControllo"
                    type="hidden" value="2"><input id="hiddenRegExAcc_0"
                    name="Accompagnatori[4].DatiAddizionaliAccompagnatore[0]._TipoDatoAddizionale.RegEx"
                    type="hidden" value="">
                <div id="divCompanionAdd_4_1">
                    <label>
                        Hijos menores (S/N) &nbsp;<b>*</b> </label>
                    <input id="Accompagnatori_4__DatiAddizionaliAccompagnatore_1___Descrizione"
                        name="Accompagnatori[4].DatiAddizionaliAccompagnatore[1]._Descrizione" type="hidden"
                        value="Hijos menores (S/N)">
                </div>
                <input data-val="true" data-val-number="The field _Id must be a number."
                    data-val-required="The _Id field is required." id="hiddenIdAcc4"
                    name="Accompagnatori[4].DatiAddizionaliAccompagnatore[1]._Id" type="hidden" value="36991"><input
                    data-val="true" data-val-number="The field IDTipoDatoAddizionale must be a number."
                    data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADDAcc_1"
                    name="Accompagnatori[4].DatiAddizionaliAccompagnatore[1]._TipoDatoAddizionale.IDTipoDatoAddizionale"
                    type="hidden" value="11"><input data-val="true"
                    data-val-number="The field IDTipoControllo must be a number."
                    data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAddAcc_1"
                    name="Accompagnatori[4].DatiAddizionaliAccompagnatore[1]._TipoDatoAddizionale.IDTipoControllo"
                    type="hidden" value="3"><input id="hiddenRegExAcc_1"
                    name="Accompagnatori[4].DatiAddizionaliAccompagnatore[1]._TipoDatoAddizionale.RegEx"
                    type="hidden" value="">
                <div id="divCompanionAdd_4_2">
                    <label>
                        Número de hijos menores &nbsp;<b>*</b> </label>
                    <input id="Accompagnatori_4__DatiAddizionaliAccompagnatore_2___Descrizione"
                        name="Accompagnatori[4].DatiAddizionaliAccompagnatore[2]._Descrizione" type="hidden"
                        value="Número de hijos menores">
                </div>
                <input data-val="true" data-val-number="The field _Id must be a number."
                    data-val-required="The _Id field is required." id="hiddenIdAcc4"
                    name="Accompagnatori[4].DatiAddizionaliAccompagnatore[2]._Id" type="hidden" value="36992"><input
                    data-val="true" data-val-number="The field IDTipoDatoAddizionale must be a number."
                    data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADDAcc_2"
                    name="Accompagnatori[4].DatiAddizionaliAccompagnatore[2]._TipoDatoAddizionale.IDTipoDatoAddizionale"
                    type="hidden" value="12"><input data-val="true"
                    data-val-number="The field IDTipoControllo must be a number."
                    data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAddAcc_2"
                    name="Accompagnatori[4].DatiAddizionaliAccompagnatore[2]._TipoDatoAddizionale.IDTipoControllo"
                    type="hidden" value="2"><input id="hiddenRegExAcc_2"
                    name="Accompagnatori[4].DatiAddizionaliAccompagnatore[2]._TipoDatoAddizionale.RegEx"
                    type="hidden" value="">
                <div id="divCompanionAdd_4_3">
                    <label>
                        Estado Civil &nbsp;<b>*</b> </label>
                    <input id="Accompagnatori_4__DatiAddizionaliAccompagnatore_3___Descrizione"
                        name="Accompagnatori[4].DatiAddizionaliAccompagnatore[3]._Descrizione" type="hidden"
                        value="Estado Civil">
                </div>
                <input data-val="true" data-val-number="The field _Id must be a number."
                    data-val-required="The _Id field is required." id="hiddenIdAcc4"
                    name="Accompagnatori[4].DatiAddizionaliAccompagnatore[3]._Id" type="hidden" value="36993"><input
                    data-val="true" data-val-number="The field IDTipoDatoAddizionale must be a number."
                    data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADDAcc_3"
                    name="Accompagnatori[4].DatiAddizionaliAccompagnatore[3]._TipoDatoAddizionale.IDTipoDatoAddizionale"
                    type="hidden" value="17"><input data-val="true"
                    data-val-number="The field IDTipoControllo must be a number."
                    data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAddAcc_3"
                    name="Accompagnatori[4].DatiAddizionaliAccompagnatore[3]._TipoDatoAddizionale.IDTipoControllo"
                    type="hidden" value="3"><input id="hiddenRegExAcc_3"
                    name="Accompagnatori[4].DatiAddizionaliAccompagnatore[3]._TipoDatoAddizionale.RegEx"
                    type="hidden" value="">
                <div id="divCompanionAdd_4_4">
                    <label>
                        Nombre y Apellido del cónyuge &nbsp;<b>*</b> </label>
                    <input id="Accompagnatori_4__DatiAddizionaliAccompagnatore_4___Descrizione"
                        name="Accompagnatori[4].DatiAddizionaliAccompagnatore[4]._Descrizione" type="hidden"
                        value="Nombre y Apellido del cónyuge">
                </div>
                <input data-val="true" data-val-number="The field _Id must be a number."
                    data-val-required="The _Id field is required." id="hiddenIdAcc4"
                    name="Accompagnatori[4].DatiAddizionaliAccompagnatore[4]._Id" type="hidden" value="36994"><input
                    data-val="true" data-val-number="The field IDTipoDatoAddizionale must be a number."
                    data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADDAcc_4"
                    name="Accompagnatori[4].DatiAddizionaliAccompagnatore[4]._TipoDatoAddizionale.IDTipoDatoAddizionale"
                    type="hidden" value="18"><input data-val="true"
                    data-val-number="The field IDTipoControllo must be a number."
                    data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAddAcc_4"
                    name="Accompagnatori[4].DatiAddizionaliAccompagnatore[4]._TipoDatoAddizionale.IDTipoControllo"
                    type="hidden" value="2"><input id="hiddenRegExAcc_4"
                    name="Accompagnatori[4].DatiAddizionaliAccompagnatore[4]._TipoDatoAddizionale.RegEx"
                    type="hidden" value="">
                <div id="divCompanionAdd_4_5">
                    <label>
                        Titular de pasaporte italiano vencido/próximo a vencer (S/N) &nbsp;<b>*</b> </label>
                    <input id="Accompagnatori_4__DatiAddizionaliAccompagnatore_5___Descrizione"
                        name="Accompagnatori[4].DatiAddizionaliAccompagnatore[5]._Descrizione" type="hidden"
                        value="Titular de pasaporte italiano vencido/próximo a vencer (S/N)">
                </div>
                <input data-val="true" data-val-number="The field _Id must be a number."
                    data-val-required="The _Id field is required." id="hiddenIdAcc4"
                    name="Accompagnatori[4].DatiAddizionaliAccompagnatore[5]._Id" type="hidden" value="36995"><input
                    data-val="true" data-val-number="The field IDTipoDatoAddizionale must be a number."
                    data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADDAcc_5"
                    name="Accompagnatori[4].DatiAddizionaliAccompagnatore[5]._TipoDatoAddizionale.IDTipoDatoAddizionale"
                    type="hidden" value="1"><input data-val="true"
                    data-val-number="The field IDTipoControllo must be a number."
                    data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAddAcc_5"
                    name="Accompagnatori[4].DatiAddizionaliAccompagnatore[5]._TipoDatoAddizionale.IDTipoControllo"
                    type="hidden" value="3"><input id="hiddenRegExAcc_5"
                    name="Accompagnatori[4].DatiAddizionaliAccompagnatore[5]._TipoDatoAddizionale.RegEx"
                    type="hidden" value="">
                <div id="divCompanionAdd_4_6">
                    <label>
                        Número de pasaporte &nbsp;<b>*</b> </label>
                    <input id="Accompagnatori_4__DatiAddizionaliAccompagnatore_6___Descrizione"
                        name="Accompagnatori[4].DatiAddizionaliAccompagnatore[6]._Descrizione" type="hidden"
                        value="Número de pasaporte">
                </div>
                <input data-val="true" data-val-number="The field _Id must be a number."
                    data-val-required="The _Id field is required." id="hiddenIdAcc4"
                    name="Accompagnatori[4].DatiAddizionaliAccompagnatore[6]._Id" type="hidden" value="36996"><input
                    data-val="true" data-val-number="The field IDTipoDatoAddizionale must be a number."
                    data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADDAcc_6"
                    name="Accompagnatori[4].DatiAddizionaliAccompagnatore[6]._TipoDatoAddizionale.IDTipoDatoAddizionale"
                    type="hidden" value="2"><input data-val="true"
                    data-val-number="The field IDTipoControllo must be a number."
                    data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAddAcc_6"
                    name="Accompagnatori[4].DatiAddizionaliAccompagnatore[6]._TipoDatoAddizionale.IDTipoControllo"
                    type="hidden" value="2"><input id="hiddenRegExAcc_6"
                    name="Accompagnatori[4].DatiAddizionaliAccompagnatore[6]._TipoDatoAddizionale.RegEx"
                    type="hidden" value="">
                <div id="divCompanionAdd_4_7">
                    <label>
                        Estatura en centímetros &nbsp;<b>*</b> </label>
                    <input id="Accompagnatori_4__DatiAddizionaliAccompagnatore_7___Descrizione"
                        name="Accompagnatori[4].DatiAddizionaliAccompagnatore[7]._Descrizione" type="hidden"
                        value="Estatura en centímetros">
                </div>
                <input data-val="true" data-val-number="The field _Id must be a number."
                    data-val-required="The _Id field is required." id="hiddenIdAcc4"
                    name="Accompagnatori[4].DatiAddizionaliAccompagnatore[7]._Id" type="hidden" value="36997"><input
                    data-val="true" data-val-number="The field IDTipoDatoAddizionale must be a number."
                    data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADDAcc_7"
                    name="Accompagnatori[4].DatiAddizionaliAccompagnatore[7]._TipoDatoAddizionale.IDTipoDatoAddizionale"
                    type="hidden" value="22"><input data-val="true"
                    data-val-number="The field IDTipoControllo must be a number."
                    data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAddAcc_7"
                    name="Accompagnatori[4].DatiAddizionaliAccompagnatore[7]._TipoDatoAddizionale.IDTipoControllo"
                    type="hidden" value="2"><input id="hiddenRegExAcc_7"
                    name="Accompagnatori[4].DatiAddizionaliAccompagnatore[7]._TipoDatoAddizionale.RegEx"
                    type="hidden" value="">
                <div id="divCompanionAdd_4_8">
                    <label>
                        Color de ojos &nbsp;<b>*</b> </label>
                    <input id="Accompagnatori_4__DatiAddizionaliAccompagnatore_8___Descrizione"
                        name="Accompagnatori[4].DatiAddizionaliAccompagnatore[8]._Descrizione" type="hidden"
                        value="Color de ojos">
                </div>
                <input data-val="true" data-val-number="The field _Id must be a number."
                    data-val-required="The _Id field is required." id="hiddenIdAcc4"
                    name="Accompagnatori[4].DatiAddizionaliAccompagnatore[8]._Id" type="hidden" value="36998"><input
                    data-val="true" data-val-number="The field IDTipoDatoAddizionale must be a number."
                    data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADDAcc_8"
                    name="Accompagnatori[4].DatiAddizionaliAccompagnatore[8]._TipoDatoAddizionale.IDTipoDatoAddizionale"
                    type="hidden" value="23"><input data-val="true"
                    data-val-number="The field IDTipoControllo must be a number."
                    data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAddAcc_8"
                    name="Accompagnatori[4].DatiAddizionaliAccompagnatore[8]._TipoDatoAddizionale.IDTipoControllo"
                    type="hidden" value="3"><input id="hiddenRegExAcc_8"
                    name="Accompagnatori[4].DatiAddizionaliAccompagnatore[8]._TipoDatoAddizionale.RegEx"
                    type="hidden" value="">
                <div id="docCompanionAdd_4_0">
                    <label>
                        Documento de identidad/viaje &nbsp;<b>*</b> </label>
                    <input id="Accompagnatori_4__DocumentiAccompagnatore_0___Descrizione"
                        name="Accompagnatori[4].DocumentiAccompagnatore[0]._Descrizione" type="hidden"
                        value="Documento de identidad/viaje">
                    <input id="Accompagnatori_4__DocumentiAccompagnatore_0___File"
                        name="Accompagnatori[4].DocumentiAccompagnatore[0]._File"
                        onchange="controlloFileCaricato(this)" type="file" value="">
                    <span class="field-validation-valid" data-valmsg-for="Lenght_4_0" data-valmsg-replace="true"
                        style="color:red"></span>
                    <input data-val="true" data-val-required="The _Obbligatorio field is required."
                        id="Accompagnatori_4__DocumentiAccompagnatore_0___Obbligatorio"
                        name="Accompagnatori[4].DocumentiAccompagnatore[0]._Obbligatorio" type="hidden"
                        value="True">
                    <span class="field-validation-valid validator-required" data-valmsg-for="Required_4_0"
                        data-valmsg-replace="true" style="color:red"></span>
                    <span class="field-validation-valid validator-required" data-valmsg-for="Extension_4_0"
                        data-valmsg-replace="true" style="color:red"></span>
                    <input data-val="true" data-val-number="The field _Id must be a number."
                        data-val-required="The _Id field is required." id="hiddenIdDoc4"
                        name="Accompagnatori[4].DocumentiAccompagnatore[0]._Id" type="hidden" value="7913">
                </div>
                <input data-val="true" data-val-number="The field IDTipoDocumento must be a number."
                    data-val-required="The IDTipoDocumento field is required." id="hiddenIdDocADDAcc_0"
                    name="Accompagnatori[4].DocumentiAccompagnatore[0]._TipoDocumento.IDTipoDocumento" type="hidden"
                    value="4">
                <div id="docCompanionAdd_4_1">
                    <label>
                        Pasaporte </label>
                    <input id="Accompagnatori_4__DocumentiAccompagnatore_1___Descrizione"
                        name="Accompagnatori[4].DocumentiAccompagnatore[1]._Descrizione" type="hidden"
                        value="Pasaporte">
                    <input id="Accompagnatori_4__DocumentiAccompagnatore_1___File"
                        name="Accompagnatori[4].DocumentiAccompagnatore[1]._File"
                        onchange="controlloFileCaricato(this)" type="file" value="">
                    <span class="field-validation-valid" data-valmsg-for="Lenght_4_1" data-valmsg-replace="true"
                        style="color:red"></span>
                    <input data-val="true" data-val-required="The _Obbligatorio field is required."
                        id="Accompagnatori_4__DocumentiAccompagnatore_1___Obbligatorio"
                        name="Accompagnatori[4].DocumentiAccompagnatore[1]._Obbligatorio" type="hidden"
                        value="False">
                    <span class="field-validation-valid validator-required" data-valmsg-for="Required_4_1"
                        data-valmsg-replace="true" style="color:red"></span>
                    <span class="field-validation-valid validator-required" data-valmsg-for="Extension_4_1"
                        data-valmsg-replace="true" style="color:red"></span>
                    <input data-val="true" data-val-number="The field _Id must be a number."
                        data-val-required="The _Id field is required." id="hiddenIdDoc4"
                        name="Accompagnatori[4].DocumentiAccompagnatore[1]._Id" type="hidden" value="7914">
                </div>
                <input data-val="true" data-val-number="The field IDTipoDocumento must be a number."
                    data-val-required="The IDTipoDocumento field is required." id="hiddenIdDocADDAcc_1"
                    name="Accompagnatori[4].DocumentiAccompagnatore[1]._TipoDocumento.IDTipoDocumento" type="hidden"
                    value="1">
            </div>
            <input data-val="true" data-val-number="The field IdTipoParentela must be a number."
                id="hiddenParentela_4" name="Accompagnatori[4].IdTipoParentela" type="hidden" value="">
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
                <input data-val="true" data-val-required="The PrivacyCheck field is required." id="PrivacyCheck"
                    name="PrivacyCheck" required=""
                    style="-ms-transform: scale(2); -webkit-transform: scale(2); width:50px;" type="checkbox"
                    value="true"><input name="PrivacyCheck" type="hidden" value="false">
                <label style="font-size:large">He leído y acepto ... <a
                        href="/Content/docs/PRIVACY_LLTP.pdf#toolbar=0&amp;zoom=141" target="_blank">
                        Información por la privacidad</a></label>
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
        <button type="button" class="button primary" onclick="window.location.href='/Services/Index';">Volver a la
            lista</button>
        <button type="submit" id="btnAvanti" class="button primary g-recaptcha"
            data-sitekey="6LdSmG4cAAAAAOarRxGIhehvv4sPgVeF-vRi-Jqb" data-callback="onSubmit">Avanzar</button>
    </div>
</div>
</form>
`;

var numDivCompanionsVisibile = 0;
//Do not wait to load
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

//}); //Do not wait to load

function aggiornaDettaglioPrenotazione() {
    $('#divRiepilogoPrenotazione').hide();

    aggiornaElencoPrenotanti();

    $('#divRiepilogoPrenotazione').slideDown(1000);
}

function aggiornaElencoPrenotanti() {
    let name = '';
    $('figure.main-nav__avatar').each(function( key, value ) {
        name = $(this).find('figcaption').html();
    });
    console.log(name);
    
    $('#divRiepilogoPrenotazione > #divTitolo').text($("#typeofbookingddl option:selected").text());
    switch ($('#typeofbookingddl').val()) {
        case '1':
            $('#divRiepilogoPrenotazione > #divDettaglio').html("\n\n  You are booking for   " + 1 + " Appointment");
            

            $('#divRiepilogoPrenotazione > #divAppuntamenti ul').empty();
            $('#divRiepilogoPrenotazione > #divAppuntamenti ul').append('\n<li>' + name + '</li>')

            break;
        case '2':
            var numapp = parseInt($('#ddlnumberofcompanions').val()) + 1;
            if (numapp == 1) {
                    $('#divRiepilogoPrenotazione > #divDettaglio').html("\n\n You are booking for  " + numapp + " Appointment");
                
            } else {
                $('#divRiepilogoPrenotazione > #divDettaglio').html("\n\n You are booking for  " + numapp + " Appointments");
                
            }

            $('#divRiepilogoPrenotazione > #divAppuntamenti ul').empty();
            $('#divRiepilogoPrenotazione > #divAppuntamenti ul').append('\n<li>' + name + '</li>');
            for (var i = 0; i < parseInt($('#ddlnumberofcompanions').val()); i++) {
                $('#divRiepilogoPrenotazione > #divAppuntamenti ul').append('\n<li>' + $('#Accompagnatori_' + i + '__CognomeAccompagnatore').val() + ' ' + $('#Accompagnatori_' + i + '__NomeAccompagnatore').val() + '</li>');
            }

            break;
            //Model.PrenotazioneSenzaRichiedente &&
        case '3':
                var numapp = $('#ddlnumberofcompanions').val();
            if (numapp == 1) {
                    $('#divRiepilogoPrenotazione > #divDettaglio').html("\n\n You are booking for  " + numapp + " Appointment");
                
            } else {
                $('#divRiepilogoPrenotazione > #divDettaglio').html("\n\n You are booking for  " + numapp + " Appointments");
                
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
        } else {
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
            if (x !== 0) {
                $('#ddlnumberofcompanions').val(x);
                CreateDivCompanion(x);
            } else {
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
    let bookingTypes = [{
        "Disabled": false,
        "Group": null,
        "Selected": false,
        "Text": "Reserva unica",
        "Value": "1"
    }, {
        "Disabled": false,
        "Group": null,
        "Selected": false,
        "Text": "Reserva multiple",
        "Value": "2"
    }];

    var numMax = $('#hiddenNumMax').val();
    if (numMax !== "0") {
        for (i = 0; i < bookingTypes.length; i++) {
            $('#typeofbookingddl').append($('<option/>', {
                value: bookingTypes[i].Value,
                text: bookingTypes[i].Text
            }));
        }
    } else {
        $('#typeofbookingddl').append($('<option/>', {
            value: bookingTypes[0].Value,
            text: bookingTypes[0].Text
        }));
    }
    if (0 === 0) {
        $('#typeofbookingddl').val(1);
    } else {
        $('#typeofbookingddl').val(0);
    }
    ShowCompanions();
    aggiornaDettaglioPrenotazione();
}

function getRelationshipType(ddl, index) {
    let relationshipTypes = [{
        "Disabled": false,
        "Group": null,
        "Selected": false,
        "Text": "",
        "Value": null
    }, {
        "Disabled": false,
        "Group": null,
        "Selected": false,
        "Text": "Concubino",
        "Value": "9"
    }, {
        "Disabled": false,
        "Group": null,
        "Selected": false,
        "Text": "Conyuge",
        "Value": "2"
    }, {
        "Disabled": false,
        "Group": null,
        "Selected": false,
        "Text": "Conyuge divorciado",
        "Value": "11"
    }, {
        "Disabled": false,
        "Group": null,
        "Selected": false,
        "Text": "Conyuge separado",
        "Value": "1"
    }, {
        "Disabled": false,
        "Group": null,
        "Selected": false,
        "Text": "Hermano/Hermana",
        "Value": "7"
    }, {
        "Disabled": false,
        "Group": null,
        "Selected": false,
        "Text": "Hijo de otro conyuge",
        "Value": "8"
    }, {
        "Disabled": false,
        "Group": null,
        "Selected": false,
        "Text": "Hijo/a",
        "Value": "5"
    }, {
        "Disabled": false,
        "Group": null,
        "Selected": false,
        "Text": "Menor en tenencia",
        "Value": "12"
    }, {
        "Disabled": false,
        "Group": null,
        "Selected": false,
        "Text": "Nieto",
        "Value": "10"
    }, {
        "Disabled": false,
        "Group": null,
        "Selected": false,
        "Text": "Padre/Madre",
        "Value": "6"
    }, {
        "Disabled": false,
        "Group": null,
        "Selected": false,
        "Text": "Suegro/Suegra",
        "Value": "4"
    }, {
        "Disabled": false,
        "Group": null,
        "Selected": false,
        "Text": "Yerno/Nuera",
        "Value": "3"
    }];

    for (i = 0; i < relationshipTypes.length; i++) {
        ddl.append($('<option/>', {
            value: relationshipTypes[i].Value,
            text: relationshipTypes[i].Text
        }));
        var x = $('#hiddenParentela_' + index).val();
        ddl.val(x);
    }
}

function getDatiAddizionali() {
    let RegEx;
    let MaxLength;

    RegEx = true;
    MaxLength = false
    var tipodatoAddizionale = $('#hiddenCodDatoAdd_' + 0).val();
    if (tipodatoAddizionale == 2) {
        if (RegEx == false && MaxLength == false) {
            $('#datoaddizionale_' + 0).append('<input id="DatiAddizionaliPrenotante_0___testo" maxlength="100" name="DatiAddizionaliPrenotante[0]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />');
        } else if (RegEx == false && MaxLength != false) {
            $('#datoaddizionale_' + 0).append('<input id="DatiAddizionaliPrenotante_0___testo" name="DatiAddizionaliPrenotante[0]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />');
        } else if (RegEx != false && MaxLength == false) {
            $('#datoaddizionale_' + 0).append('<input id="DatiAddizionaliPrenotante_0___testo" maxlength="100" name="DatiAddizionaliPrenotante[0]._testo" onchange="ControlloTesto(this)" type="text" value="" />');
        } else if (RegEx != false && MaxLength != false) {
                $('#datoaddizionale_' + 0).append('<input id="DatiAddizionaliPrenotante_0___testo" name="DatiAddizionaliPrenotante[0]._testo" onchange="ControlloTesto(this)" type="text" value="" />');
        }
    }
    if (tipodatoAddizionale == 1) {
        if (RegEx != false && MaxLength != false) {
            $('#datoaddizionale_' + 0).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="DatiAddizionaliPrenotante_0___data" name="DatiAddizionaliPrenotante[0]._data" type="date" value="" />');
        } else if (RegEx != false && MaxLength == false) {
            $('#datoaddizionale_' + 0).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="DatiAddizionaliPrenotante_0___data" name="DatiAddizionaliPrenotante[0]._data" type="date" value="" />');
        } else if (RegEx == false && MaxLength != false) {
            $('#datoaddizionale_' + 0).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="DatiAddizionaliPrenotante_0___data" name="DatiAddizionaliPrenotante[0]._data" type="date" value="" />');
        } else if (RegEx == false && MaxLength == false) {
            $('#datoaddizionale_' + 0).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="DatiAddizionaliPrenotante_0___data" name="DatiAddizionaliPrenotante[0]._data" type="date" value="" />');
        }
    }
    if (tipodatoAddizionale == 3) {
        $('#datoaddizionale_' + 0).append($('<select/>', {
            id: "ddls_" + 0,
            'data-index': 0,
            onchange:"ControloSelect(this)" 
        }));
        $('#ddls_' +0).append($('<option/>', {
            value: 0,
            text: " "
        }));
        $('#infoapplicant').append('<input data-val="true" data-val-number="The field _idSelezionato must be a number." data-val-required="The _idSelezionato field is required." id="hiddenSelezionato_0" name="DatiAddizionaliPrenotante[0]._idSelezionato" type="hidden" value="0" />');
        getDropDownListsValues($('#hiddenIdDatoADD_' +0).val(), $('#ddls_0'), 0);
    }

    $('#datoaddizionale_' + 0).append('<input data-val="true" data-val-required="The _Obbligatorio field is required." id="DatiAddizionaliPrenotante_0___Obbligatorio" name="DatiAddizionaliPrenotante[0]._Obbligatorio" type="hidden" value="True" />');
    $('#datoaddizionale_' + 0).append('<div><p><span class="field-validation-valid" data-valmsg-for="addizionale_0" data-valmsg-replace="true" style="color:red"></span></p> <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_0" data-valmsg-replace="true" style="color:red"></span></p> </div >');
    
    RegEx = true;
    MaxLength = false
    var tipodatoAddizionale = $('#hiddenCodDatoAdd_' + 1).val();
    if (tipodatoAddizionale == 2) {
        if (RegEx == false && MaxLength == false) {
            $('#datoaddizionale_' + 1).append('<input id="DatiAddizionaliPrenotante_1___testo" maxlength="100" name="DatiAddizionaliPrenotante[1]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />');
        } else if (RegEx == false && MaxLength != false) {
            $('#datoaddizionale_' + 1).append('<input id="DatiAddizionaliPrenotante_1___testo" name="DatiAddizionaliPrenotante[1]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />');
        } else if (RegEx != false && MaxLength == false) {
            $('#datoaddizionale_' + 1).append('<input id="DatiAddizionaliPrenotante_1___testo" maxlength="100" name="DatiAddizionaliPrenotante[1]._testo" onchange="ControlloTesto(this)" type="text" value="" />');
        } else if (RegEx != false && MaxLength != false) {
                $('#datoaddizionale_' + 1).append('<input id="DatiAddizionaliPrenotante_1___testo" name="DatiAddizionaliPrenotante[1]._testo" onchange="ControlloTesto(this)" type="text" value="" />');
        }
    }
    if (tipodatoAddizionale == 1) {
        if (RegEx != false && MaxLength != false) {
            $('#datoaddizionale_' + 1).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="DatiAddizionaliPrenotante_1___data" name="DatiAddizionaliPrenotante[1]._data" type="date" value="" />');
        } else if (RegEx != false && MaxLength == false) {
            $('#datoaddizionale_' + 1).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="DatiAddizionaliPrenotante_1___data" name="DatiAddizionaliPrenotante[1]._data" type="date" value="" />');
        } else if (RegEx == false && MaxLength != false) {
            $('#datoaddizionale_' + 1).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="DatiAddizionaliPrenotante_1___data" name="DatiAddizionaliPrenotante[1]._data" type="date" value="" />');
        } else if (RegEx == false && MaxLength == false) {
            $('#datoaddizionale_' + 1).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="DatiAddizionaliPrenotante_1___data" name="DatiAddizionaliPrenotante[1]._data" type="date" value="" />');
        }
    }
    if (tipodatoAddizionale == 3) {
        $('#datoaddizionale_' + 1).append($('<select/>', {
            id: "ddls_" + 1,
            'data-index': 1,
            onchange:"ControloSelect(this)"
        }));
        $('#ddls_' +1).append($('<option/>', {
            value: 0,
            text: " "
        }));
        $('#infoapplicant').append('<input data-val="true" data-val-number="The field _idSelezionato must be a number." data-val-required="The _idSelezionato field is required." id="hiddenSelezionato_1" name="DatiAddizionaliPrenotante[1]._idSelezionato" type="hidden" value="0" />');
        getDropDownListsValues($('#hiddenIdDatoADD_' +1).val(), $('#ddls_1'), 0);
    }

    $('#datoaddizionale_' + 1).append('<input data-val="true" data-val-required="The _Obbligatorio field is required." id="DatiAddizionaliPrenotante_1___Obbligatorio" name="DatiAddizionaliPrenotante[1]._Obbligatorio" type="hidden" value="True" />');
    $('#datoaddizionale_' + 1).append('<div><p><span class="field-validation-valid" data-valmsg-for="addizionale_1" data-valmsg-replace="true" style="color:red"></span></p> <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_1" data-valmsg-replace="true" style="color:red"></span></p> </div >');
    
    RegEx = true;
    MaxLength = false
    var tipodatoAddizionale = $('#hiddenCodDatoAdd_' + 2).val();
    if (tipodatoAddizionale == 2) {
        if (RegEx == false && MaxLength == false) {
            $('#datoaddizionale_' + 2).append('<input id="DatiAddizionaliPrenotante_2___testo" maxlength="100" name="DatiAddizionaliPrenotante[2]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />');
        } else if (RegEx == false && MaxLength != false) {
            $('#datoaddizionale_' + 2).append('<input id="DatiAddizionaliPrenotante_2___testo" name="DatiAddizionaliPrenotante[2]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />');
        } else if (RegEx != false && MaxLength == false) {
            $('#datoaddizionale_' + 2).append('<input id="DatiAddizionaliPrenotante_2___testo" maxlength="100" name="DatiAddizionaliPrenotante[2]._testo" onchange="ControlloTesto(this)" type="text" value="" />');
        } else if (RegEx != false && MaxLength != false) {
            $('#datoaddizionale_' + 2).append('<input id="DatiAddizionaliPrenotante_2___testo" name="DatiAddizionaliPrenotante[2]._testo" onchange="ControlloTesto(this)" type="text" value="" />');
        }
    }
    if (tipodatoAddizionale == 1) {
        if (RegEx != false && MaxLength != false) {
            $('#datoaddizionale_' + 2).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="DatiAddizionaliPrenotante_2___data" name="DatiAddizionaliPrenotante[2]._data" type="date" value="" />');
        } else if (RegEx != false && MaxLength == false) {
            $('#datoaddizionale_' + 2).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="DatiAddizionaliPrenotante_2___data" name="DatiAddizionaliPrenotante[2]._data" type="date" value="" />');
        } else if (RegEx == false && MaxLength != false) {
            $('#datoaddizionale_' + 2).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="DatiAddizionaliPrenotante_2___data" name="DatiAddizionaliPrenotante[2]._data" type="date" value="" />');
        } else if (RegEx == false && MaxLength == false) {
            $('#datoaddizionale_' + 2).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="DatiAddizionaliPrenotante_2___data" name="DatiAddizionaliPrenotante[2]._data" type="date" value="" />');
        }
    }
    if (tipodatoAddizionale == 3) {
        $('#datoaddizionale_' + 2).append($('<select/>', {
            id: "ddls_" + 2,
            'data-index': 2,
            onchange:"ControloSelect(this)"
        }));
        $('#ddls_' +2).append($('<option/>', {
            value: 0,
            text: " "
        }));
        $('#infoapplicant').append('<input data-val="true" data-val-number="The field _idSelezionato must be a number." data-val-required="The _idSelezionato field is required." id="hiddenSelezionato_2" name="DatiAddizionaliPrenotante[2]._idSelezionato" type="hidden" value="0" />');
        getDropDownListsValues($('#hiddenIdDatoADD_' +2).val(), $('#ddls_2'), 0);
    }

    $('#datoaddizionale_' + 2).append('<input data-val="true" data-val-required="The _Obbligatorio field is required." id="DatiAddizionaliPrenotante_2___Obbligatorio" name="DatiAddizionaliPrenotante[2]._Obbligatorio" type="hidden" value="True" />');
    $('#datoaddizionale_' + 2).append('<div><p><span class="field-validation-valid" data-valmsg-for="addizionale_2" data-valmsg-replace="true" style="color:red"></span></p> <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_2" data-valmsg-replace="true" style="color:red"></span></p> </div >');
    
    RegEx = true;
    MaxLength = false
    var tipodatoAddizionale = $('#hiddenCodDatoAdd_' + 3).val();
    if (tipodatoAddizionale == 2) {
        if (RegEx == false && MaxLength == false) {
            $('#datoaddizionale_' + 3).append('<input id="DatiAddizionaliPrenotante_3___testo" maxlength="100" name="DatiAddizionaliPrenotante[3]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />');
        } else if (RegEx == false && MaxLength != false) {
            $('#datoaddizionale_' + 3).append('<input id="DatiAddizionaliPrenotante_3___testo" name="DatiAddizionaliPrenotante[3]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />');
        } else if (RegEx != false && MaxLength == false) {
            $('#datoaddizionale_' + 3).append('<input id="DatiAddizionaliPrenotante_3___testo" maxlength="100" name="DatiAddizionaliPrenotante[3]._testo" onchange="ControlloTesto(this)" type="text" value="" />');
        } else if (RegEx != false && MaxLength != false) {
            $('#datoaddizionale_' + 3).append('<input id="DatiAddizionaliPrenotante_3___testo" name="DatiAddizionaliPrenotante[3]._testo" onchange="ControlloTesto(this)" type="text" value="" />');
        }
    }
    if (tipodatoAddizionale == 1) {
        if (RegEx != false && MaxLength != false) {
            $('#datoaddizionale_' + 3).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="DatiAddizionaliPrenotante_3___data" name="DatiAddizionaliPrenotante[3]._data" type="date" value="" />');
        } else if (RegEx != false && MaxLength == false) {
            $('#datoaddizionale_' + 3).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="DatiAddizionaliPrenotante_3___data" name="DatiAddizionaliPrenotante[3]._data" type="date" value="" />');
        } else if (RegEx == false && MaxLength != false) {
            $('#datoaddizionale_' + 3).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="DatiAddizionaliPrenotante_3___data" name="DatiAddizionaliPrenotante[3]._data" type="date" value="" />');
        } else if (RegEx == false && MaxLength == false) {
            $('#datoaddizionale_' + 3).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="DatiAddizionaliPrenotante_3___data" name="DatiAddizionaliPrenotante[3]._data" type="date" value="" />');
        }
    }
    if (tipodatoAddizionale == 3) {
        $('#datoaddizionale_' + 3).append($('<select/>', {
            id: "ddls_" + 3,
            'data-index': 3,
            onchange:"ControloSelect(this)"
        }));
        $('#ddls_' +3).append($('<option/>', {
            value: 0,
            text: " "
        }));
        $('#infoapplicant').append('<input data-val="true" data-val-number="The field _idSelezionato must be a number." data-val-required="The _idSelezionato field is required." id="hiddenSelezionato_3" name="DatiAddizionaliPrenotante[3]._idSelezionato" type="hidden" value="0" />');
        getDropDownListsValues($('#hiddenIdDatoADD_' +3).val(), $('#ddls_3'), 0);
    }

    $('#datoaddizionale_' + 3).append('<input data-val="true" data-val-required="The _Obbligatorio field is required." id="DatiAddizionaliPrenotante_3___Obbligatorio" name="DatiAddizionaliPrenotante[3]._Obbligatorio" type="hidden" value="True" />');
    $('#datoaddizionale_' + 3).append('<div><p><span class="field-validation-valid" data-valmsg-for="addizionale_3" data-valmsg-replace="true" style="color:red"></span></p> <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_3" data-valmsg-replace="true" style="color:red"></span></p> </div >');
    
    RegEx = true;
    MaxLength = false
    var tipodatoAddizionale = $('#hiddenCodDatoAdd_' + 4).val();
    if (tipodatoAddizionale == 2) {
        if (RegEx == false && MaxLength == false) {
            $('#datoaddizionale_' + 4).append('<input id="DatiAddizionaliPrenotante_4___testo" maxlength="100" name="DatiAddizionaliPrenotante[4]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />');
        } else if (RegEx == false && MaxLength != false) {
            $('#datoaddizionale_' + 4).append('<input id="DatiAddizionaliPrenotante_4___testo" name="DatiAddizionaliPrenotante[4]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />');
        } else if (RegEx != false && MaxLength == false) {
            $('#datoaddizionale_' + 4).append('<input id="DatiAddizionaliPrenotante_4___testo" maxlength="100" name="DatiAddizionaliPrenotante[4]._testo" onchange="ControlloTesto(this)" type="text" value="" />');
        } else if (RegEx != false && MaxLength != false) {
                $('#datoaddizionale_' + 4).append('<input id="DatiAddizionaliPrenotante_4___testo" name="DatiAddizionaliPrenotante[4]._testo" onchange="ControlloTesto(this)" type="text" value="" />');
        }
    }
    if (tipodatoAddizionale == 1) {
        if (RegEx != false && MaxLength != false) {
            $('#datoaddizionale_' + 4).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="DatiAddizionaliPrenotante_4___data" name="DatiAddizionaliPrenotante[4]._data" type="date" value="" />');
        } else if (RegEx != false && MaxLength == false) {
            $('#datoaddizionale_' + 4).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="DatiAddizionaliPrenotante_4___data" name="DatiAddizionaliPrenotante[4]._data" type="date" value="" />');
        } else if (RegEx == false && MaxLength != false) {
            $('#datoaddizionale_' + 4).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="DatiAddizionaliPrenotante_4___data" name="DatiAddizionaliPrenotante[4]._data" type="date" value="" />');
        } else if (RegEx == false && MaxLength == false) {
            $('#datoaddizionale_' + 4).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="DatiAddizionaliPrenotante_4___data" name="DatiAddizionaliPrenotante[4]._data" type="date" value="" />');
        }
    }
    if (tipodatoAddizionale == 3) {
        $('#datoaddizionale_' + 4).append($('<select/>', {
            id: "ddls_" + 4,
            'data-index': 4,
            onchange:"ControloSelect(this)"
        }));
        $('#ddls_' +4).append($('<option/>', {
            value: 0,
            text: " "
        }));
        $('#infoapplicant').append('<input data-val="true" data-val-number="The field _idSelezionato must be a number." data-val-required="The _idSelezionato field is required." id="hiddenSelezionato_4" name="DatiAddizionaliPrenotante[4]._idSelezionato" type="hidden" value="0" />');
        getDropDownListsValues($('#hiddenIdDatoADD_' +4).val(), $('#ddls_4'), 0);
    }

    $('#datoaddizionale_' + 4).append('<input data-val="true" data-val-required="The _Obbligatorio field is required." id="DatiAddizionaliPrenotante_4___Obbligatorio" name="DatiAddizionaliPrenotante[4]._Obbligatorio" type="hidden" value="True" />');
    $('#datoaddizionale_' + 4).append('<div><p><span class="field-validation-valid" data-valmsg-for="addizionale_4" data-valmsg-replace="true" style="color:red"></span></p> <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_4" data-valmsg-replace="true" style="color:red"></span></p> </div >');
    
    RegEx = true;
    MaxLength = false
    var tipodatoAddizionale = $('#hiddenCodDatoAdd_' + 5).val();
    if (tipodatoAddizionale == 2) {
        if (RegEx == false && MaxLength == false) {
            $('#datoaddizionale_' + 5).append('<input id="DatiAddizionaliPrenotante_5___testo" maxlength="100" name="DatiAddizionaliPrenotante[5]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />');
        } else if (RegEx == false && MaxLength != false) {
            $('#datoaddizionale_' + 5).append('<input id="DatiAddizionaliPrenotante_5___testo" name="DatiAddizionaliPrenotante[5]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />');
        } else if (RegEx != false && MaxLength == false) {
            $('#datoaddizionale_' + 5).append('<input id="DatiAddizionaliPrenotante_5___testo" maxlength="100" name="DatiAddizionaliPrenotante[5]._testo" onchange="ControlloTesto(this)" type="text" value="" />');
        } else if (RegEx != false && MaxLength != false) {
                $('#datoaddizionale_' + 5).append('<input id="DatiAddizionaliPrenotante_5___testo" name="DatiAddizionaliPrenotante[5]._testo" onchange="ControlloTesto(this)" type="text" value="" />');
        }
    }
    if (tipodatoAddizionale == 1) {
        if (RegEx != false && MaxLength != false) {
            $('#datoaddizionale_' + 5).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="DatiAddizionaliPrenotante_5___data" name="DatiAddizionaliPrenotante[5]._data" type="date" value="" />');
        }
        else if (RegEx != false && MaxLength == false) {
            $('#datoaddizionale_' + 5).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="DatiAddizionaliPrenotante_5___data" name="DatiAddizionaliPrenotante[5]._data" type="date" value="" />');
        }
        else if (RegEx == false && MaxLength != false) {
            $('#datoaddizionale_' + 5).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="DatiAddizionaliPrenotante_5___data" name="DatiAddizionaliPrenotante[5]._data" type="date" value="" />');
        }
        else if (RegEx == false && MaxLength == false) {
            $('#datoaddizionale_' + 5).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="DatiAddizionaliPrenotante_5___data" name="DatiAddizionaliPrenotante[5]._data" type="date" value="" />');
        }
    }
    if (tipodatoAddizionale == 3)
    {
        $('#datoaddizionale_' + 5).append($('<select/>', { id: "ddls_" + 5, 'data-index': 5, onchange:"ControloSelect(this)"  }));
        $('#ddls_' +5).append($('<option/>', {
            value: 0,
            text: " "
        }));
        $('#infoapplicant').append('<input data-val="true" data-val-number="The field _idSelezionato must be a number." data-val-required="The _idSelezionato field is required." id="hiddenSelezionato_5" name="DatiAddizionaliPrenotante[5]._idSelezionato" type="hidden" value="0" />');
        getDropDownListsValues($('#hiddenIdDatoADD_' +5).val(), $('#ddls_5'), 0);
    }

    $('#datoaddizionale_' + 5).append('<input data-val="true" data-val-required="The _Obbligatorio field is required." id="DatiAddizionaliPrenotante_5___Obbligatorio" name="DatiAddizionaliPrenotante[5]._Obbligatorio" type="hidden" value="True" />');
    $('#datoaddizionale_' + 5).append('<div><p><span class="field-validation-valid" data-valmsg-for="addizionale_5" data-valmsg-replace="true" style="color:red"></span></p> <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_5" data-valmsg-replace="true" style="color:red"></span></p> </div >');
    
    RegEx = true;
    MaxLength = false
    var tipodatoAddizionale = $('#hiddenCodDatoAdd_' + 6).val();
    if (tipodatoAddizionale == 2) {
        if (RegEx == false && MaxLength == false) {
            $('#datoaddizionale_' + 6).append('<input id="DatiAddizionaliPrenotante_6___testo" maxlength="100" name="DatiAddizionaliPrenotante[6]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />');
        }
        else if (RegEx == false && MaxLength != false) {
            $('#datoaddizionale_' + 6).append('<input id="DatiAddizionaliPrenotante_6___testo" name="DatiAddizionaliPrenotante[6]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />');
        }
        else if (RegEx != false && MaxLength == false) {
            $('#datoaddizionale_' + 6).append('<input id="DatiAddizionaliPrenotante_6___testo" maxlength="100" name="DatiAddizionaliPrenotante[6]._testo" onchange="ControlloTesto(this)" type="text" value="" />');
        }
        else if (RegEx != false && MaxLength != false) {
                $('#datoaddizionale_' + 6).append('<input id="DatiAddizionaliPrenotante_6___testo" name="DatiAddizionaliPrenotante[6]._testo" onchange="ControlloTesto(this)" type="text" value="" />');
        }
    }
    if (tipodatoAddizionale == 1) {
        if (RegEx != false && MaxLength != false) {
            $('#datoaddizionale_' + 6).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="DatiAddizionaliPrenotante_6___data" name="DatiAddizionaliPrenotante[6]._data" type="date" value="" />');
        }
        else if (RegEx != false && MaxLength == false) {
            $('#datoaddizionale_' + 6).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="DatiAddizionaliPrenotante_6___data" name="DatiAddizionaliPrenotante[6]._data" type="date" value="" />');
        }
        else if (RegEx == false && MaxLength != false) {
            $('#datoaddizionale_' + 6).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="DatiAddizionaliPrenotante_6___data" name="DatiAddizionaliPrenotante[6]._data" type="date" value="" />');
        }
        else if (RegEx == false && MaxLength == false) {
            $('#datoaddizionale_' + 6).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="DatiAddizionaliPrenotante_6___data" name="DatiAddizionaliPrenotante[6]._data" type="date" value="" />');
        }
    }
    if (tipodatoAddizionale == 3) {
        $('#datoaddizionale_' + 6).append($('<select/>', {
            id: "ddls_" + 6,
            'data-index': 6,
            onchange:"ControloSelect(this)"
        }));
        $('#ddls_' +6).append($('<option/>', {
            value: 0,
            text: " "
        }));
        $('#infoapplicant').append('<input data-val="true" data-val-number="The field _idSelezionato must be a number." data-val-required="The _idSelezionato field is required." id="hiddenSelezionato_6" name="DatiAddizionaliPrenotante[6]._idSelezionato" type="hidden" value="0" />');
        getDropDownListsValues($('#hiddenIdDatoADD_' +6).val(), $('#ddls_6'), 0);
    }

    $('#datoaddizionale_' + 6).append('<input data-val="true" data-val-required="The _Obbligatorio field is required." id="DatiAddizionaliPrenotante_6___Obbligatorio" name="DatiAddizionaliPrenotante[6]._Obbligatorio" type="hidden" value="True" />');
    $('#datoaddizionale_' + 6).append('<div><p><span class="field-validation-valid" data-valmsg-for="addizionale_6" data-valmsg-replace="true" style="color:red"></span></p> <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_6" data-valmsg-replace="true" style="color:red"></span></p> </div >');
    
    RegEx = true;
    MaxLength = false
    var tipodatoAddizionale = $('#hiddenCodDatoAdd_' + 7).val();
    if (tipodatoAddizionale == 2) {
        if (RegEx == false && MaxLength == false) {
            $('#datoaddizionale_' + 7).append('<input id="DatiAddizionaliPrenotante_7___testo" maxlength="100" name="DatiAddizionaliPrenotante[7]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />');
        }
        else if (RegEx == false && MaxLength != false) {
            $('#datoaddizionale_' + 7).append('<input id="DatiAddizionaliPrenotante_7___testo" name="DatiAddizionaliPrenotante[7]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />');
        }
        else if (RegEx != false && MaxLength == false) {
            $('#datoaddizionale_' + 7).append('<input id="DatiAddizionaliPrenotante_7___testo" maxlength="100" name="DatiAddizionaliPrenotante[7]._testo" onchange="ControlloTesto(this)" type="text" value="" />');
        }
        else if (RegEx != false && MaxLength != false) {
                $('#datoaddizionale_' + 7).append('<input id="DatiAddizionaliPrenotante_7___testo" name="DatiAddizionaliPrenotante[7]._testo" onchange="ControlloTesto(this)" type="text" value="" />');
        }
    }
    if (tipodatoAddizionale == 1) {
        if (RegEx != false && MaxLength != false) {
            $('#datoaddizionale_' + 7).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="DatiAddizionaliPrenotante_7___data" name="DatiAddizionaliPrenotante[7]._data" type="date" value="" />');
        }
        else if (RegEx != false && MaxLength == false) {
            $('#datoaddizionale_' + 7).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="DatiAddizionaliPrenotante_7___data" name="DatiAddizionaliPrenotante[7]._data" type="date" value="" />');
        }
        else if (RegEx == false && MaxLength != false) {
            $('#datoaddizionale_' + 7).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="DatiAddizionaliPrenotante_7___data" name="DatiAddizionaliPrenotante[7]._data" type="date" value="" />');
        }
        else if (RegEx == false && MaxLength == false) {
            $('#datoaddizionale_' + 7).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="DatiAddizionaliPrenotante_7___data" name="DatiAddizionaliPrenotante[7]._data" type="date" value="" />');
        }
    }
    if (tipodatoAddizionale == 3)
    {
        $('#datoaddizionale_' + 7).append($('<select/>', { id: "ddls_" + 7, 'data-index': 7, onchange:"ControloSelect(this)"  }));
        $('#ddls_' +7).append($('<option/>', {
            value: 0,
            text: " "
        }));
        $('#infoapplicant').append('<input data-val="true" data-val-number="The field _idSelezionato must be a number." data-val-required="The _idSelezionato field is required." id="hiddenSelezionato_7" name="DatiAddizionaliPrenotante[7]._idSelezionato" type="hidden" value="0" />');
        getDropDownListsValues($('#hiddenIdDatoADD_' +7).val(), $('#ddls_7'), 0);
    }

    $('#datoaddizionale_' + 7).append('<input data-val="true" data-val-required="The _Obbligatorio field is required." id="DatiAddizionaliPrenotante_7___Obbligatorio" name="DatiAddizionaliPrenotante[7]._Obbligatorio" type="hidden" value="True" />');
    $('#datoaddizionale_' + 7).append('<div><p><span class="field-validation-valid" data-valmsg-for="addizionale_7" data-valmsg-replace="true" style="color:red"></span></p> <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_7" data-valmsg-replace="true" style="color:red"></span></p> </div >');
    
    RegEx = true;
    MaxLength = false
    var tipodatoAddizionale = $('#hiddenCodDatoAdd_' + 8).val();
    if (tipodatoAddizionale == 2) {
        if (RegEx == false && MaxLength == false) {
            $('#datoaddizionale_' + 8).append('<input id="DatiAddizionaliPrenotante_8___testo" maxlength="100" name="DatiAddizionaliPrenotante[8]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />');
        }
        else if (RegEx == false && MaxLength != false) {
            $('#datoaddizionale_' + 8).append('<input id="DatiAddizionaliPrenotante_8___testo" name="DatiAddizionaliPrenotante[8]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />');
        }
        else if (RegEx != false && MaxLength == false) {
            $('#datoaddizionale_' + 8).append('<input id="DatiAddizionaliPrenotante_8___testo" maxlength="100" name="DatiAddizionaliPrenotante[8]._testo" onchange="ControlloTesto(this)" type="text" value="" />');
        }
        else if (RegEx != false && MaxLength != false) {
                $('#datoaddizionale_' + 8).append('<input id="DatiAddizionaliPrenotante_8___testo" name="DatiAddizionaliPrenotante[8]._testo" onchange="ControlloTesto(this)" type="text" value="" />');
        }
    }
    if (tipodatoAddizionale == 1) {
        if (RegEx != false && MaxLength != false) {
            $('#datoaddizionale_' + 8).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="DatiAddizionaliPrenotante_8___data" name="DatiAddizionaliPrenotante[8]._data" type="date" value="" />');
        }
        else if (RegEx != false && MaxLength == false) {
            $('#datoaddizionale_' + 8).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="DatiAddizionaliPrenotante_8___data" name="DatiAddizionaliPrenotante[8]._data" type="date" value="" />');
        }
        else if (RegEx == false && MaxLength != false) {
            $('#datoaddizionale_' + 8).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="DatiAddizionaliPrenotante_8___data" name="DatiAddizionaliPrenotante[8]._data" type="date" value="" />');
        }
        else if (RegEx == false && MaxLength == false) {
            $('#datoaddizionale_' + 8).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="DatiAddizionaliPrenotante_8___data" name="DatiAddizionaliPrenotante[8]._data" type="date" value="" />');
        }
    }
    if (tipodatoAddizionale == 3)
    {
        $('#datoaddizionale_' + 8).append($('<select/>', { id: "ddls_" + 8, 'data-index': 8, onchange:"ControloSelect(this)"  }));
        $('#ddls_' +8).append($('<option/>', {
            value: 0,
            text: " "
        }));
        $('#infoapplicant').append('<input data-val="true" data-val-number="The field _idSelezionato must be a number." data-val-required="The _idSelezionato field is required." id="hiddenSelezionato_8" name="DatiAddizionaliPrenotante[8]._idSelezionato" type="hidden" value="0" />');
        getDropDownListsValues($('#hiddenIdDatoADD_' +8).val(), $('#ddls_8'), 0);
    }

    $('#datoaddizionale_' + 8).append('<input data-val="true" data-val-required="The _Obbligatorio field is required." id="DatiAddizionaliPrenotante_8___Obbligatorio" name="DatiAddizionaliPrenotante[8]._Obbligatorio" type="hidden" value="True" />');
    $('#datoaddizionale_' + 8).append('<div><p><span class="field-validation-valid" data-valmsg-for="addizionale_8" data-valmsg-replace="true" style="color:red"></span></p> <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_8" data-valmsg-replace="true" style="color:red"></span></p> </div >');
                }
function GetDatiAddizionaliAccompagnatori() {
        let RegEx;
        let MaxLength;

        var tipodatoAddizionale = $('#hiddenCodDatoAddAcc_' + 0).val();
        RegEx = true;
        MaxLength = false;
        if (tipodatoAddizionale == 2) {
            if (RegEx == false && MaxLength == false) {
                $('#divCompanionAdd_' + 0 + '_' + 0).append('<input id="Accompagnatori_0__DatiAddizionaliAccompagnatore_0___testo" maxlength="100" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[0]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />');
            }
            else if (RegEx == false && MaxLength != false) {
                $('#divCompanionAdd_' + 0 + '_' + 0).append('<input id="Accompagnatori_0__DatiAddizionaliAccompagnatore_0___testo" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[0]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />');
            }
            else if (RegEx != false && MaxLength == false) {
                $('#divCompanionAdd_' + 0 + '_' + 0).append('<input id="Accompagnatori_0__DatiAddizionaliAccompagnatore_0___testo" maxlength="100" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[0]._testo" onchange="ControlloTesto(this)" type="text" value="" />');
            }
            else if (RegEx != false && MaxLength != false) {
                $('#divCompanionAdd_' + 0 + '_' + 0).append('<input id="Accompagnatori_0__DatiAddizionaliAccompagnatore_0___testo" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[0]._testo" onchange="ControlloTesto(this)" type="text" value="" />');
            }
        }
        if (tipodatoAddizionale == 1) {
            if (RegEx != false && MaxLength != false) {
                $('#divCompanionAdd_' + 0 + '_' + 0).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_0__DatiAddizionaliAccompagnatore_0___data" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[0]._data" type="date" value="" />');
            }
            else if (RegEx != false && MaxLength == false) {
                $('#divCompanionAdd_' + 0 + '_' + 0).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_0__DatiAddizionaliAccompagnatore_0___data" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[0]._data" type="date" value="" />');
            }
            else if (RegEx == false && MaxLength != false) {
                $('#divCompanionAdd_' + 0 + '_' + 0).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_0__DatiAddizionaliAccompagnatore_0___data" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[0]._data" type="date" value="" />');
            }
            else if (RegEx == false && MaxLength == false) {
                $('#divCompanionAdd_' + 0 + '_' + 0).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_0__DatiAddizionaliAccompagnatore_0___data" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[0]._data" type="date" value="" />');
            }
        }
        if (tipodatoAddizionale == 3)
        {
            $('#divCompanionAdd_' + 0 + '_' + 0).append($('<select/>', { id: "ddlsAcc_0" + '_0', 'data-index': 0, onchange:"ControloSelect(this)"  }));
            $('#ddlsAcc_0' +'_0').append($('<option/>', {
            value: 0,
            text: " " }));
            $('#ifMultiple').append('<input data-val="true" data-val-number="The field _idSelezionato must be a number." data-val-required="The _idSelezionato field is required." id="hiddenSelezionatoAcc_0_0" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[0]._idSelezionato" type="hidden" value="0" />');
            getDropDownListsValues($('#hiddenIdDatoADDAcc_' +0).val(), $('#ddlsAcc_0' + '_0'), 0);
        }

    $('#divCompanionAdd_' + 0 + '_' + 0).append('<input data-val="true" data-val-required="The _Obbligatorio field is required." id="Accompagnatori_0__DatiAddizionaliAccompagnatore_0___Obbligatorio" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[0]._Obbligatorio" type="hidden" value="True" />');

    $('#divCompanionAdd_' + 0 + '_' + 0).append('<div><p><span class="field-validation-valid" data-valmsg-for="addizionale_0_0" data-valmsg-replace="true" style="color:red"></span></p> <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_0_0" data-valmsg-replace="true" style="color:red"></span> </p></div>');

    
        var tipodatoAddizionale = $('#hiddenCodDatoAddAcc_' + 1).val();
        RegEx = true;
        MaxLength = false;
        if (tipodatoAddizionale == 2) {
            if (RegEx == false && MaxLength == false) {
                $('#divCompanionAdd_' + 0 + '_' + 1).append('<input id="Accompagnatori_0__DatiAddizionaliAccompagnatore_1___testo" maxlength="100" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[1]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />');
            }
            else if (RegEx == false && MaxLength != false) {
                $('#divCompanionAdd_' + 0 + '_' + 1).append('<input id="Accompagnatori_0__DatiAddizionaliAccompagnatore_1___testo" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[1]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />');
            }
            else if (RegEx != false && MaxLength == false) {
                $('#divCompanionAdd_' + 0 + '_' + 1).append('<input id="Accompagnatori_0__DatiAddizionaliAccompagnatore_1___testo" maxlength="100" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[1]._testo" onchange="ControlloTesto(this)" type="text" value="" />');
            }
            else if (RegEx != false && MaxLength != false) {
                $('#divCompanionAdd_' + 0 + '_' + 1).append('<input id="Accompagnatori_0__DatiAddizionaliAccompagnatore_1___testo" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[1]._testo" onchange="ControlloTesto(this)" type="text" value="" />');
            }
        }
        if (tipodatoAddizionale == 1) {
            if (RegEx != false && MaxLength != false) {
                $('#divCompanionAdd_' + 0 + '_' + 1).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_0__DatiAddizionaliAccompagnatore_1___data" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[1]._data" type="date" value="" />');
            }
            else if (RegEx != false && MaxLength == false) {
                $('#divCompanionAdd_' + 0 + '_' + 1).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_0__DatiAddizionaliAccompagnatore_1___data" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[1]._data" type="date" value="" />');
            }
            else if (RegEx == false && MaxLength != false) {
                $('#divCompanionAdd_' + 0 + '_' + 1).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_0__DatiAddizionaliAccompagnatore_1___data" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[1]._data" type="date" value="" />');
            }
            else if (RegEx == false && MaxLength == false) {
                $('#divCompanionAdd_' + 0 + '_' + 1).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_0__DatiAddizionaliAccompagnatore_1___data" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[1]._data" type="date" value="" />');
            }
        }
        if (tipodatoAddizionale == 3)
        {
            $('#divCompanionAdd_' + 0 + '_' + 1).append($('<select/>', { id: "ddlsAcc_0" + '_1', 'data-index': 1, onchange:"ControloSelect(this)"  }));
            $('#ddlsAcc_0' +'_1').append($('<option/>', {
            value: 0,
            text: " " }));
            $('#ifMultiple').append('<input data-val="true" data-val-number="The field _idSelezionato must be a number." data-val-required="The _idSelezionato field is required." id="hiddenSelezionatoAcc_0_1" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[1]._idSelezionato" type="hidden" value="0" />');
            getDropDownListsValues($('#hiddenIdDatoADDAcc_' +1).val(), $('#ddlsAcc_0' + '_1'), 0);
        }

    $('#divCompanionAdd_' + 0 + '_' + 1).append('<input data-val="true" data-val-required="The _Obbligatorio field is required." id="Accompagnatori_0__DatiAddizionaliAccompagnatore_1___Obbligatorio" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[1]._Obbligatorio" type="hidden" value="True" />');

    $('#divCompanionAdd_' + 0 + '_' + 1).append('<div><p><span class="field-validation-valid" data-valmsg-for="addizionale_0_1" data-valmsg-replace="true" style="color:red"></span></p> <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_0_1" data-valmsg-replace="true" style="color:red"></span> </p></div>');

    
        var tipodatoAddizionale = $('#hiddenCodDatoAddAcc_' + 2).val();
        RegEx = true;
        MaxLength = false;
        if (tipodatoAddizionale == 2) {
            if (RegEx == false && MaxLength == false) {
                $('#divCompanionAdd_' + 0 + '_' + 2).append('<input id="Accompagnatori_0__DatiAddizionaliAccompagnatore_2___testo" maxlength="100" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[2]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />');
            }
            else if (RegEx == false && MaxLength != false) {
                $('#divCompanionAdd_' + 0 + '_' + 2).append('<input id="Accompagnatori_0__DatiAddizionaliAccompagnatore_2___testo" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[2]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />');
            }
            else if (RegEx != false && MaxLength == false) {
                $('#divCompanionAdd_' + 0 + '_' + 2).append('<input id="Accompagnatori_0__DatiAddizionaliAccompagnatore_2___testo" maxlength="100" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[2]._testo" onchange="ControlloTesto(this)" type="text" value="" />');
            }
            else if (RegEx != false && MaxLength != false) {
                $('#divCompanionAdd_' + 0 + '_' + 2).append('<input id="Accompagnatori_0__DatiAddizionaliAccompagnatore_2___testo" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[2]._testo" onchange="ControlloTesto(this)" type="text" value="" />');
            }
        }
        if (tipodatoAddizionale == 1) {
            if (RegEx != false && MaxLength != false) {
                $('#divCompanionAdd_' + 0 + '_' + 2).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_0__DatiAddizionaliAccompagnatore_2___data" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[2]._data" type="date" value="" />');
            }
            else if (RegEx != false && MaxLength == false) {
                $('#divCompanionAdd_' + 0 + '_' + 2).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_0__DatiAddizionaliAccompagnatore_2___data" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[2]._data" type="date" value="" />');
            }
            else if (RegEx == false && MaxLength != false) {
                $('#divCompanionAdd_' + 0 + '_' + 2).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_0__DatiAddizionaliAccompagnatore_2___data" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[2]._data" type="date" value="" />');
            }
            else if (RegEx == false && MaxLength == false) {
                $('#divCompanionAdd_' + 0 + '_' + 2).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_0__DatiAddizionaliAccompagnatore_2___data" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[2]._data" type="date" value="" />');
            }
        }
        if (tipodatoAddizionale == 3)
        {
            $('#divCompanionAdd_' + 0 + '_' + 2).append($('<select/>', { id: "ddlsAcc_0" + '_2', 'data-index': 2, onchange:"ControloSelect(this)"  }));
            $('#ddlsAcc_0' +'_2').append($('<option/>', {
            value: 0,
            text: " " }));
            $('#ifMultiple').append('<input data-val="true" data-val-number="The field _idSelezionato must be a number." data-val-required="The _idSelezionato field is required." id="hiddenSelezionatoAcc_0_2" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[2]._idSelezionato" type="hidden" value="0" />');
            getDropDownListsValues($('#hiddenIdDatoADDAcc_' +2).val(), $('#ddlsAcc_0' + '_2'), 0);
        }

    $('#divCompanionAdd_' + 0 + '_' + 2).append('<input data-val="true" data-val-required="The _Obbligatorio field is required." id="Accompagnatori_0__DatiAddizionaliAccompagnatore_2___Obbligatorio" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[2]._Obbligatorio" type="hidden" value="True" />');

    $('#divCompanionAdd_' + 0 + '_' + 2).append('<div><p><span class="field-validation-valid" data-valmsg-for="addizionale_0_2" data-valmsg-replace="true" style="color:red"></span></p> <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_0_2" data-valmsg-replace="true" style="color:red"></span> </p></div>');

    
        var tipodatoAddizionale = $('#hiddenCodDatoAddAcc_' + 3).val();
        RegEx = true;
        MaxLength = false;
        if (tipodatoAddizionale == 2) {
            if (RegEx == false && MaxLength == false) {
                $('#divCompanionAdd_' + 0 + '_' + 3).append('<input id="Accompagnatori_0__DatiAddizionaliAccompagnatore_3___testo" maxlength="100" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[3]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />');
            }
            else if (RegEx == false && MaxLength != false) {
                $('#divCompanionAdd_' + 0 + '_' + 3).append('<input id="Accompagnatori_0__DatiAddizionaliAccompagnatore_3___testo" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[3]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />');
            }
            else if (RegEx != false && MaxLength == false) {
                $('#divCompanionAdd_' + 0 + '_' + 3).append('<input id="Accompagnatori_0__DatiAddizionaliAccompagnatore_3___testo" maxlength="100" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[3]._testo" onchange="ControlloTesto(this)" type="text" value="" />');
            }
            else if (RegEx != false && MaxLength != false) {
                $('#divCompanionAdd_' + 0 + '_' + 3).append('<input id="Accompagnatori_0__DatiAddizionaliAccompagnatore_3___testo" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[3]._testo" onchange="ControlloTesto(this)" type="text" value="" />');
            }
        }
        if (tipodatoAddizionale == 1) {
            if (RegEx != false && MaxLength != false) {
                $('#divCompanionAdd_' + 0 + '_' + 3).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_0__DatiAddizionaliAccompagnatore_3___data" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[3]._data" type="date" value="" />');
            }
            else if (RegEx != false && MaxLength == false) {
                $('#divCompanionAdd_' + 0 + '_' + 3).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_0__DatiAddizionaliAccompagnatore_3___data" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[3]._data" type="date" value="" />');
            }
            else if (RegEx == false && MaxLength != false) {
                $('#divCompanionAdd_' + 0 + '_' + 3).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_0__DatiAddizionaliAccompagnatore_3___data" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[3]._data" type="date" value="" />');
            }
            else if (RegEx == false && MaxLength == false) {
                $('#divCompanionAdd_' + 0 + '_' + 3).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_0__DatiAddizionaliAccompagnatore_3___data" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[3]._data" type="date" value="" />');
            }
        }
        if (tipodatoAddizionale == 3)
        {
            $('#divCompanionAdd_' + 0 + '_' + 3).append($('<select/>', { id: "ddlsAcc_0" + '_3', 'data-index': 3, onchange:"ControloSelect(this)"  }));
            $('#ddlsAcc_0' +'_3').append($('<option/>', {
            value: 0,
            text: " " }));
            $('#ifMultiple').append('<input data-val="true" data-val-number="The field _idSelezionato must be a number." data-val-required="The _idSelezionato field is required." id="hiddenSelezionatoAcc_0_3" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[3]._idSelezionato" type="hidden" value="0" />');
            getDropDownListsValues($('#hiddenIdDatoADDAcc_' +3).val(), $('#ddlsAcc_0' + '_3'), 0);
        }

    $('#divCompanionAdd_' + 0 + '_' + 3).append('<input data-val="true" data-val-required="The _Obbligatorio field is required." id="Accompagnatori_0__DatiAddizionaliAccompagnatore_3___Obbligatorio" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[3]._Obbligatorio" type="hidden" value="True" />');

    $('#divCompanionAdd_' + 0 + '_' + 3).append('<div><p><span class="field-validation-valid" data-valmsg-for="addizionale_0_3" data-valmsg-replace="true" style="color:red"></span></p> <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_0_3" data-valmsg-replace="true" style="color:red"></span> </p></div>');

    
        var tipodatoAddizionale = $('#hiddenCodDatoAddAcc_' + 4).val();
        RegEx = true;
        MaxLength = false;
        if (tipodatoAddizionale == 2) {
            if (RegEx == false && MaxLength == false) {
                $('#divCompanionAdd_' + 0 + '_' + 4).append('<input id="Accompagnatori_0__DatiAddizionaliAccompagnatore_4___testo" maxlength="100" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[4]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />');
            }
            else if (RegEx == false && MaxLength != false) {
                $('#divCompanionAdd_' + 0 + '_' + 4).append('<input id="Accompagnatori_0__DatiAddizionaliAccompagnatore_4___testo" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[4]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />');
            }
            else if (RegEx != false && MaxLength == false) {
                $('#divCompanionAdd_' + 0 + '_' + 4).append('<input id="Accompagnatori_0__DatiAddizionaliAccompagnatore_4___testo" maxlength="100" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[4]._testo" onchange="ControlloTesto(this)" type="text" value="" />');
            }
            else if (RegEx != false && MaxLength != false) {
                $('#divCompanionAdd_' + 0 + '_' + 4).append('<input id="Accompagnatori_0__DatiAddizionaliAccompagnatore_4___testo" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[4]._testo" onchange="ControlloTesto(this)" type="text" value="" />');
            }
        }
        if (tipodatoAddizionale == 1) {
            if (RegEx != false && MaxLength != false) {
                $('#divCompanionAdd_' + 0 + '_' + 4).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_0__DatiAddizionaliAccompagnatore_4___data" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[4]._data" type="date" value="" />');
            }
            else if (RegEx != false && MaxLength == false) {
                $('#divCompanionAdd_' + 0 + '_' + 4).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_0__DatiAddizionaliAccompagnatore_4___data" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[4]._data" type="date" value="" />');
            }
            else if (RegEx == false && MaxLength != false) {
                $('#divCompanionAdd_' + 0 + '_' + 4).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_0__DatiAddizionaliAccompagnatore_4___data" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[4]._data" type="date" value="" />');
            }
            else if (RegEx == false && MaxLength == false) {
                $('#divCompanionAdd_' + 0 + '_' + 4).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_0__DatiAddizionaliAccompagnatore_4___data" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[4]._data" type="date" value="" />');
            }
        }
        if (tipodatoAddizionale == 3)
        {
            $('#divCompanionAdd_' + 0 + '_' + 4).append($('<select/>', { id: "ddlsAcc_0" + '_4', 'data-index': 4, onchange:"ControloSelect(this)"  }));
            $('#ddlsAcc_0' +'_4').append($('<option/>', {
            value: 0,
            text: " " }));
            $('#ifMultiple').append('<input data-val="true" data-val-number="The field _idSelezionato must be a number." data-val-required="The _idSelezionato field is required." id="hiddenSelezionatoAcc_0_4" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[4]._idSelezionato" type="hidden" value="0" />');
            getDropDownListsValues($('#hiddenIdDatoADDAcc_' +4).val(), $('#ddlsAcc_0' + '_4'), 0);
        }

    $('#divCompanionAdd_' + 0 + '_' + 4).append('<input data-val="true" data-val-required="The _Obbligatorio field is required." id="Accompagnatori_0__DatiAddizionaliAccompagnatore_4___Obbligatorio" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[4]._Obbligatorio" type="hidden" value="True" />');

    $('#divCompanionAdd_' + 0 + '_' + 4).append('<div><p><span class="field-validation-valid" data-valmsg-for="addizionale_0_4" data-valmsg-replace="true" style="color:red"></span></p> <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_0_4" data-valmsg-replace="true" style="color:red"></span> </p></div>');

    
        var tipodatoAddizionale = $('#hiddenCodDatoAddAcc_' + 5).val();
        RegEx = true;
        MaxLength = false;
        if (tipodatoAddizionale == 2) {
            if (RegEx == false && MaxLength == false) {
                $('#divCompanionAdd_' + 0 + '_' + 5).append('<input id="Accompagnatori_0__DatiAddizionaliAccompagnatore_5___testo" maxlength="100" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[5]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />');
            }
            else if (RegEx == false && MaxLength != false) {
                $('#divCompanionAdd_' + 0 + '_' + 5).append('<input id="Accompagnatori_0__DatiAddizionaliAccompagnatore_5___testo" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[5]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />');
            }
            else if (RegEx != false && MaxLength == false) {
                $('#divCompanionAdd_' + 0 + '_' + 5).append('<input id="Accompagnatori_0__DatiAddizionaliAccompagnatore_5___testo" maxlength="100" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[5]._testo" onchange="ControlloTesto(this)" type="text" value="" />');
            }
            else if (RegEx != false && MaxLength != false) {
                $('#divCompanionAdd_' + 0 + '_' + 5).append('<input id="Accompagnatori_0__DatiAddizionaliAccompagnatore_5___testo" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[5]._testo" onchange="ControlloTesto(this)" type="text" value="" />');
            }
        }
        if (tipodatoAddizionale == 1) {
            if (RegEx != false && MaxLength != false) {
                $('#divCompanionAdd_' + 0 + '_' + 5).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_0__DatiAddizionaliAccompagnatore_5___data" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[5]._data" type="date" value="" />');
            }
            else if (RegEx != false && MaxLength == false) {
                $('#divCompanionAdd_' + 0 + '_' + 5).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_0__DatiAddizionaliAccompagnatore_5___data" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[5]._data" type="date" value="" />');
            }
            else if (RegEx == false && MaxLength != false) {
                $('#divCompanionAdd_' + 0 + '_' + 5).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_0__DatiAddizionaliAccompagnatore_5___data" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[5]._data" type="date" value="" />');
            }
            else if (RegEx == false && MaxLength == false) {
                $('#divCompanionAdd_' + 0 + '_' + 5).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_0__DatiAddizionaliAccompagnatore_5___data" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[5]._data" type="date" value="" />');
            }
        }
        if (tipodatoAddizionale == 3)
        {
            $('#divCompanionAdd_' + 0 + '_' + 5).append($('<select/>', { id: "ddlsAcc_0" + '_5', 'data-index': 5, onchange:"ControloSelect(this)"  }));
            $('#ddlsAcc_0' +'_5').append($('<option/>', {
            value: 0,
            text: " " }));
            $('#ifMultiple').append('<input data-val="true" data-val-number="The field _idSelezionato must be a number." data-val-required="The _idSelezionato field is required." id="hiddenSelezionatoAcc_0_5" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[5]._idSelezionato" type="hidden" value="0" />');
            getDropDownListsValues($('#hiddenIdDatoADDAcc_' +5).val(), $('#ddlsAcc_0' + '_5'), 0);
        }

    $('#divCompanionAdd_' + 0 + '_' + 5).append('<input data-val="true" data-val-required="The _Obbligatorio field is required." id="Accompagnatori_0__DatiAddizionaliAccompagnatore_5___Obbligatorio" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[5]._Obbligatorio" type="hidden" value="True" />');

    $('#divCompanionAdd_' + 0 + '_' + 5).append('<div><p><span class="field-validation-valid" data-valmsg-for="addizionale_0_5" data-valmsg-replace="true" style="color:red"></span></p> <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_0_5" data-valmsg-replace="true" style="color:red"></span> </p></div>');

    
        var tipodatoAddizionale = $('#hiddenCodDatoAddAcc_' + 6).val();
        RegEx = true;
        MaxLength = false;
        if (tipodatoAddizionale == 2) {
            if (RegEx == false && MaxLength == false) {
                $('#divCompanionAdd_' + 0 + '_' + 6).append('<input id="Accompagnatori_0__DatiAddizionaliAccompagnatore_6___testo" maxlength="100" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[6]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />');
            }
            else if (RegEx == false && MaxLength != false) {
                $('#divCompanionAdd_' + 0 + '_' + 6).append('<input id="Accompagnatori_0__DatiAddizionaliAccompagnatore_6___testo" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[6]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />');
            }
            else if (RegEx != false && MaxLength == false) {
                $('#divCompanionAdd_' + 0 + '_' + 6).append('<input id="Accompagnatori_0__DatiAddizionaliAccompagnatore_6___testo" maxlength="100" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[6]._testo" onchange="ControlloTesto(this)" type="text" value="" />');
            }
            else if (RegEx != false && MaxLength != false) {
                $('#divCompanionAdd_' + 0 + '_' + 6).append('<input id="Accompagnatori_0__DatiAddizionaliAccompagnatore_6___testo" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[6]._testo" onchange="ControlloTesto(this)" type="text" value="" />');
            }
        }
        if (tipodatoAddizionale == 1) {
            if (RegEx != false && MaxLength != false) {
                $('#divCompanionAdd_' + 0 + '_' + 6).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_0__DatiAddizionaliAccompagnatore_6___data" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[6]._data" type="date" value="" />');
            }
            else if (RegEx != false && MaxLength == false) {
                $('#divCompanionAdd_' + 0 + '_' + 6).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_0__DatiAddizionaliAccompagnatore_6___data" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[6]._data" type="date" value="" />');
            }
            else if (RegEx == false && MaxLength != false) {
                $('#divCompanionAdd_' + 0 + '_' + 6).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_0__DatiAddizionaliAccompagnatore_6___data" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[6]._data" type="date" value="" />');
            }
            else if (RegEx == false && MaxLength == false) {
                $('#divCompanionAdd_' + 0 + '_' + 6).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_0__DatiAddizionaliAccompagnatore_6___data" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[6]._data" type="date" value="" />');
            }
        }
        if (tipodatoAddizionale == 3)
        {
            $('#divCompanionAdd_' + 0 + '_' + 6).append($('<select/>', { id: "ddlsAcc_0" + '_6', 'data-index': 6, onchange:"ControloSelect(this)"  }));
            $('#ddlsAcc_0' +'_6').append($('<option/>', {
            value: 0,
            text: " " }));
            $('#ifMultiple').append('<input data-val="true" data-val-number="The field _idSelezionato must be a number." data-val-required="The _idSelezionato field is required." id="hiddenSelezionatoAcc_0_6" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[6]._idSelezionato" type="hidden" value="0" />');
            getDropDownListsValues($('#hiddenIdDatoADDAcc_' +6).val(), $('#ddlsAcc_0' + '_6'), 0);
        }

    $('#divCompanionAdd_' + 0 + '_' + 6).append('<input data-val="true" data-val-required="The _Obbligatorio field is required." id="Accompagnatori_0__DatiAddizionaliAccompagnatore_6___Obbligatorio" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[6]._Obbligatorio" type="hidden" value="True" />');

    $('#divCompanionAdd_' + 0 + '_' + 6).append('<div><p><span class="field-validation-valid" data-valmsg-for="addizionale_0_6" data-valmsg-replace="true" style="color:red"></span></p> <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_0_6" data-valmsg-replace="true" style="color:red"></span> </p></div>');

    
        var tipodatoAddizionale = $('#hiddenCodDatoAddAcc_' + 7).val();
        RegEx = true;
        MaxLength = false;
        if (tipodatoAddizionale == 2) {
            if (RegEx == false && MaxLength == false) {
                $('#divCompanionAdd_' + 0 + '_' + 7).append('<input id="Accompagnatori_0__DatiAddizionaliAccompagnatore_7___testo" maxlength="100" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[7]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />');
            }
            else if (RegEx == false && MaxLength != false) {
                $('#divCompanionAdd_' + 0 + '_' + 7).append('<input id="Accompagnatori_0__DatiAddizionaliAccompagnatore_7___testo" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[7]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />');
            }
            else if (RegEx != false && MaxLength == false) {
                $('#divCompanionAdd_' + 0 + '_' + 7).append('<input id="Accompagnatori_0__DatiAddizionaliAccompagnatore_7___testo" maxlength="100" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[7]._testo" onchange="ControlloTesto(this)" type="text" value="" />');
            }
            else if (RegEx != false && MaxLength != false) {
                $('#divCompanionAdd_' + 0 + '_' + 7).append('<input id="Accompagnatori_0__DatiAddizionaliAccompagnatore_7___testo" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[7]._testo" onchange="ControlloTesto(this)" type="text" value="" />');
            }
        }
        if (tipodatoAddizionale == 1) {
            if (RegEx != false && MaxLength != false) {
                $('#divCompanionAdd_' + 0 + '_' + 7).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_0__DatiAddizionaliAccompagnatore_7___data" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[7]._data" type="date" value="" />');
            }
            else if (RegEx != false && MaxLength == false) {
                $('#divCompanionAdd_' + 0 + '_' + 7).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_0__DatiAddizionaliAccompagnatore_7___data" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[7]._data" type="date" value="" />');
            }
            else if (RegEx == false && MaxLength != false) {
                $('#divCompanionAdd_' + 0 + '_' + 7).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_0__DatiAddizionaliAccompagnatore_7___data" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[7]._data" type="date" value="" />');
            }
            else if (RegEx == false && MaxLength == false) {
                $('#divCompanionAdd_' + 0 + '_' + 7).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_0__DatiAddizionaliAccompagnatore_7___data" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[7]._data" type="date" value="" />');
            }
        }
        if (tipodatoAddizionale == 3)
        {
            $('#divCompanionAdd_' + 0 + '_' + 7).append($('<select/>', { id: "ddlsAcc_0" + '_7', 'data-index': 7, onchange:"ControloSelect(this)"  }));
            $('#ddlsAcc_0' +'_7').append($('<option/>', {
            value: 0,
            text: " " }));
            $('#ifMultiple').append('<input data-val="true" data-val-number="The field _idSelezionato must be a number." data-val-required="The _idSelezionato field is required." id="hiddenSelezionatoAcc_0_7" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[7]._idSelezionato" type="hidden" value="0" />');
            getDropDownListsValues($('#hiddenIdDatoADDAcc_' +7).val(), $('#ddlsAcc_0' + '_7'), 0);
        }

    $('#divCompanionAdd_' + 0 + '_' + 7).append('<input data-val="true" data-val-required="The _Obbligatorio field is required." id="Accompagnatori_0__DatiAddizionaliAccompagnatore_7___Obbligatorio" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[7]._Obbligatorio" type="hidden" value="True" />');

    $('#divCompanionAdd_' + 0 + '_' + 7).append('<div><p><span class="field-validation-valid" data-valmsg-for="addizionale_0_7" data-valmsg-replace="true" style="color:red"></span></p> <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_0_7" data-valmsg-replace="true" style="color:red"></span> </p></div>');

    
        var tipodatoAddizionale = $('#hiddenCodDatoAddAcc_' + 8).val();
        RegEx = true;
        MaxLength = false;
        if (tipodatoAddizionale == 2) {
            if (RegEx == false && MaxLength == false) {
                $('#divCompanionAdd_' + 0 + '_' + 8).append('<input id="Accompagnatori_0__DatiAddizionaliAccompagnatore_8___testo" maxlength="100" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[8]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />');
            }
            else if (RegEx == false && MaxLength != false) {
                $('#divCompanionAdd_' + 0 + '_' + 8).append('<input id="Accompagnatori_0__DatiAddizionaliAccompagnatore_8___testo" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[8]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />');
            }
            else if (RegEx != false && MaxLength == false) {
                $('#divCompanionAdd_' + 0 + '_' + 8).append('<input id="Accompagnatori_0__DatiAddizionaliAccompagnatore_8___testo" maxlength="100" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[8]._testo" onchange="ControlloTesto(this)" type="text" value="" />');
            }
            else if (RegEx != false && MaxLength != false) {
                $('#divCompanionAdd_' + 0 + '_' + 8).append('<input id="Accompagnatori_0__DatiAddizionaliAccompagnatore_8___testo" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[8]._testo" onchange="ControlloTesto(this)" type="text" value="" />');
            }
        }
        if (tipodatoAddizionale == 1) {
            if (RegEx != false && MaxLength != false) {
                $('#divCompanionAdd_' + 0 + '_' + 8).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_0__DatiAddizionaliAccompagnatore_8___data" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[8]._data" type="date" value="" />');
            }
            else if (RegEx != false && MaxLength == false) {
                $('#divCompanionAdd_' + 0 + '_' + 8).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_0__DatiAddizionaliAccompagnatore_8___data" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[8]._data" type="date" value="" />');
            }
            else if (RegEx == false && MaxLength != false) {
                $('#divCompanionAdd_' + 0 + '_' + 8).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_0__DatiAddizionaliAccompagnatore_8___data" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[8]._data" type="date" value="" />');
            }
            else if (RegEx == false && MaxLength == false) {
                $('#divCompanionAdd_' + 0 + '_' + 8).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_0__DatiAddizionaliAccompagnatore_8___data" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[8]._data" type="date" value="" />');
            }
        }
        if (tipodatoAddizionale == 3)
        {
            $('#divCompanionAdd_' + 0 + '_' + 8).append($('<select/>', { id: "ddlsAcc_0" + '_8', 'data-index': 8, onchange:"ControloSelect(this)"  }));
            $('#ddlsAcc_0' +'_8').append($('<option/>', {
            value: 0,
            text: " " }));
            $('#ifMultiple').append('<input data-val="true" data-val-number="The field _idSelezionato must be a number." data-val-required="The _idSelezionato field is required." id="hiddenSelezionatoAcc_0_8" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[8]._idSelezionato" type="hidden" value="0" />');
            getDropDownListsValues($('#hiddenIdDatoADDAcc_' +8).val(), $('#ddlsAcc_0' + '_8'), 0);
        }

    $('#divCompanionAdd_' + 0 + '_' + 8).append('<input data-val="true" data-val-required="The _Obbligatorio field is required." id="Accompagnatori_0__DatiAddizionaliAccompagnatore_8___Obbligatorio" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[8]._Obbligatorio" type="hidden" value="True" />');

    $('#divCompanionAdd_' + 0 + '_' + 8).append('<div><p><span class="field-validation-valid" data-valmsg-for="addizionale_0_8" data-valmsg-replace="true" style="color:red"></span></p> <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_0_8" data-valmsg-replace="true" style="color:red"></span> </p></div>');

    
        var tipodatoAddizionale = $('#hiddenCodDatoAddAcc_' + 0).val();
        RegEx = true;
        MaxLength = false;
        if (tipodatoAddizionale == 2) {
            if (RegEx == false && MaxLength == false) {
                $('#divCompanionAdd_' + 1 + '_' + 0).append('<input id="Accompagnatori_1__DatiAddizionaliAccompagnatore_0___testo" maxlength="100" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[0]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />');
            }
            else if (RegEx == false && MaxLength != false) {
                $('#divCompanionAdd_' + 1 + '_' + 0).append('<input id="Accompagnatori_1__DatiAddizionaliAccompagnatore_0___testo" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[0]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />');
            }
            else if (RegEx != false && MaxLength == false) {
                $('#divCompanionAdd_' + 1 + '_' + 0).append('<input id="Accompagnatori_1__DatiAddizionaliAccompagnatore_0___testo" maxlength="100" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[0]._testo" onchange="ControlloTesto(this)" type="text" value="" />');
            }
            else if (RegEx != false && MaxLength != false) {
                $('#divCompanionAdd_' + 1 + '_' + 0).append('<input id="Accompagnatori_1__DatiAddizionaliAccompagnatore_0___testo" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[0]._testo" onchange="ControlloTesto(this)" type="text" value="" />');
            }
        }
        if (tipodatoAddizionale == 1) {
            if (RegEx != false && MaxLength != false) {
                $('#divCompanionAdd_' + 1 + '_' + 0).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_1__DatiAddizionaliAccompagnatore_0___data" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[0]._data" type="date" value="" />');
            }
            else if (RegEx != false && MaxLength == false) {
                $('#divCompanionAdd_' + 1 + '_' + 0).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_1__DatiAddizionaliAccompagnatore_0___data" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[0]._data" type="date" value="" />');
            }
            else if (RegEx == false && MaxLength != false) {
                $('#divCompanionAdd_' + 1 + '_' + 0).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_1__DatiAddizionaliAccompagnatore_0___data" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[0]._data" type="date" value="" />');
            }
            else if (RegEx == false && MaxLength == false) {
                $('#divCompanionAdd_' + 1 + '_' + 0).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_1__DatiAddizionaliAccompagnatore_0___data" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[0]._data" type="date" value="" />');
            }
        }
        if (tipodatoAddizionale == 3)
        {
            $('#divCompanionAdd_' + 1 + '_' + 0).append($('<select/>', { id: "ddlsAcc_1" + '_0', 'data-index': 0, onchange:"ControloSelect(this)"  }));
            $('#ddlsAcc_1' +'_0').append($('<option/>', {
            value: 0,
            text: " " }));
            $('#ifMultiple').append('<input data-val="true" data-val-number="The field _idSelezionato must be a number." data-val-required="The _idSelezionato field is required." id="hiddenSelezionatoAcc_1_0" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[0]._idSelezionato" type="hidden" value="0" />');
            getDropDownListsValues($('#hiddenIdDatoADDAcc_' +0).val(), $('#ddlsAcc_1' + '_0'), 0);
        }

    $('#divCompanionAdd_' + 1 + '_' + 0).append('<input data-val="true" data-val-required="The _Obbligatorio field is required." id="Accompagnatori_1__DatiAddizionaliAccompagnatore_0___Obbligatorio" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[0]._Obbligatorio" type="hidden" value="True" />');

    $('#divCompanionAdd_' + 1 + '_' + 0).append('<div><p><span class="field-validation-valid" data-valmsg-for="addizionale_1_0" data-valmsg-replace="true" style="color:red"></span></p> <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_1_0" data-valmsg-replace="true" style="color:red"></span> </p></div>');

    
        var tipodatoAddizionale = $('#hiddenCodDatoAddAcc_' + 1).val();
        RegEx = true;
        MaxLength = false;
        if (tipodatoAddizionale == 2) {
            if (RegEx == false && MaxLength == false) {
                $('#divCompanionAdd_' + 1 + '_' + 1).append('<input id="Accompagnatori_1__DatiAddizionaliAccompagnatore_1___testo" maxlength="100" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[1]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />');
            }
            else if (RegEx == false && MaxLength != false) {
                $('#divCompanionAdd_' + 1 + '_' + 1).append('<input id="Accompagnatori_1__DatiAddizionaliAccompagnatore_1___testo" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[1]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />');
            }
            else if (RegEx != false && MaxLength == false) {
                $('#divCompanionAdd_' + 1 + '_' + 1).append('<input id="Accompagnatori_1__DatiAddizionaliAccompagnatore_1___testo" maxlength="100" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[1]._testo" onchange="ControlloTesto(this)" type="text" value="" />');
            }
            else if (RegEx != false && MaxLength != false) {
                $('#divCompanionAdd_' + 1 + '_' + 1).append('<input id="Accompagnatori_1__DatiAddizionaliAccompagnatore_1___testo" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[1]._testo" onchange="ControlloTesto(this)" type="text" value="" />');
            }
        }
        if (tipodatoAddizionale == 1) {
            if (RegEx != false && MaxLength != false) {
                $('#divCompanionAdd_' + 1 + '_' + 1).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_1__DatiAddizionaliAccompagnatore_1___data" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[1]._data" type="date" value="" />');
            }
            else if (RegEx != false && MaxLength == false) {
                $('#divCompanionAdd_' + 1 + '_' + 1).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_1__DatiAddizionaliAccompagnatore_1___data" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[1]._data" type="date" value="" />');
            }
            else if (RegEx == false && MaxLength != false) {
                $('#divCompanionAdd_' + 1 + '_' + 1).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_1__DatiAddizionaliAccompagnatore_1___data" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[1]._data" type="date" value="" />');
            }
            else if (RegEx == false && MaxLength == false) {
                $('#divCompanionAdd_' + 1 + '_' + 1).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_1__DatiAddizionaliAccompagnatore_1___data" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[1]._data" type="date" value="" />');
            }
        }
        if (tipodatoAddizionale == 3)
        {
            $('#divCompanionAdd_' + 1 + '_' + 1).append($('<select/>', { id: "ddlsAcc_1" + '_1', 'data-index': 1, onchange:"ControloSelect(this)"  }));
            $('#ddlsAcc_1' +'_1').append($('<option/>', {
            value: 0,
            text: " " }));
            $('#ifMultiple').append('<input data-val="true" data-val-number="The field _idSelezionato must be a number." data-val-required="The _idSelezionato field is required." id="hiddenSelezionatoAcc_1_1" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[1]._idSelezionato" type="hidden" value="0" />');
            getDropDownListsValues($('#hiddenIdDatoADDAcc_' +1).val(), $('#ddlsAcc_1' + '_1'), 0);
        }

    $('#divCompanionAdd_' + 1 + '_' + 1).append('<input data-val="true" data-val-required="The _Obbligatorio field is required." id="Accompagnatori_1__DatiAddizionaliAccompagnatore_1___Obbligatorio" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[1]._Obbligatorio" type="hidden" value="True" />');

    $('#divCompanionAdd_' + 1 + '_' + 1).append('<div><p><span class="field-validation-valid" data-valmsg-for="addizionale_1_1" data-valmsg-replace="true" style="color:red"></span></p> <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_1_1" data-valmsg-replace="true" style="color:red"></span> </p></div>');

    
        var tipodatoAddizionale = $('#hiddenCodDatoAddAcc_' + 2).val();
        RegEx = true;
        MaxLength = false;
        if (tipodatoAddizionale == 2) {
            if (RegEx == false && MaxLength == false) {
                $('#divCompanionAdd_' + 1 + '_' + 2).append('<input id="Accompagnatori_1__DatiAddizionaliAccompagnatore_2___testo" maxlength="100" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[2]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />');
            }
            else if (RegEx == false && MaxLength != false) {
                $('#divCompanionAdd_' + 1 + '_' + 2).append('<input id="Accompagnatori_1__DatiAddizionaliAccompagnatore_2___testo" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[2]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />');
            }
            else if (RegEx != false && MaxLength == false) {
                $('#divCompanionAdd_' + 1 + '_' + 2).append('<input id="Accompagnatori_1__DatiAddizionaliAccompagnatore_2___testo" maxlength="100" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[2]._testo" onchange="ControlloTesto(this)" type="text" value="" />');
            }
            else if (RegEx != false && MaxLength != false) {
                $('#divCompanionAdd_' + 1 + '_' + 2).append('<input id="Accompagnatori_1__DatiAddizionaliAccompagnatore_2___testo" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[2]._testo" onchange="ControlloTesto(this)" type="text" value="" />');
            }
        }
        if (tipodatoAddizionale == 1) {
            if (RegEx != false && MaxLength != false) {
                $('#divCompanionAdd_' + 1 + '_' + 2).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_1__DatiAddizionaliAccompagnatore_2___data" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[2]._data" type="date" value="" />');
            }
            else if (RegEx != false && MaxLength == false) {
                $('#divCompanionAdd_' + 1 + '_' + 2).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_1__DatiAddizionaliAccompagnatore_2___data" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[2]._data" type="date" value="" />');
            }
            else if (RegEx == false && MaxLength != false) {
                $('#divCompanionAdd_' + 1 + '_' + 2).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_1__DatiAddizionaliAccompagnatore_2___data" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[2]._data" type="date" value="" />');
            }
            else if (RegEx == false && MaxLength == false) {
                $('#divCompanionAdd_' + 1 + '_' + 2).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_1__DatiAddizionaliAccompagnatore_2___data" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[2]._data" type="date" value="" />');
            }
        }
        if (tipodatoAddizionale == 3)
        {
            $('#divCompanionAdd_' + 1 + '_' + 2).append($('<select/>', { id: "ddlsAcc_1" + '_2', 'data-index': 2, onchange:"ControloSelect(this)"  }));
            $('#ddlsAcc_1' +'_2').append($('<option/>', {
            value: 0,
            text: " " }));
            $('#ifMultiple').append('<input data-val="true" data-val-number="The field _idSelezionato must be a number." data-val-required="The _idSelezionato field is required." id="hiddenSelezionatoAcc_1_2" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[2]._idSelezionato" type="hidden" value="0" />');
            getDropDownListsValues($('#hiddenIdDatoADDAcc_' +2).val(), $('#ddlsAcc_1' + '_2'), 0);
        }

    $('#divCompanionAdd_' + 1 + '_' + 2).append('<input data-val="true" data-val-required="The _Obbligatorio field is required." id="Accompagnatori_1__DatiAddizionaliAccompagnatore_2___Obbligatorio" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[2]._Obbligatorio" type="hidden" value="True" />');

    $('#divCompanionAdd_' + 1 + '_' + 2).append('<div><p><span class="field-validation-valid" data-valmsg-for="addizionale_1_2" data-valmsg-replace="true" style="color:red"></span></p> <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_1_2" data-valmsg-replace="true" style="color:red"></span> </p></div>');

    
        var tipodatoAddizionale = $('#hiddenCodDatoAddAcc_' + 3).val();
        RegEx = true;
        MaxLength = false;
        if (tipodatoAddizionale == 2) {
            if (RegEx == false && MaxLength == false) {
                $('#divCompanionAdd_' + 1 + '_' + 3).append('<input id="Accompagnatori_1__DatiAddizionaliAccompagnatore_3___testo" maxlength="100" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[3]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />');
            }
            else if (RegEx == false && MaxLength != false) {
                $('#divCompanionAdd_' + 1 + '_' + 3).append('<input id="Accompagnatori_1__DatiAddizionaliAccompagnatore_3___testo" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[3]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />');
            }
            else if (RegEx != false && MaxLength == false) {
                $('#divCompanionAdd_' + 1 + '_' + 3).append('<input id="Accompagnatori_1__DatiAddizionaliAccompagnatore_3___testo" maxlength="100" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[3]._testo" onchange="ControlloTesto(this)" type="text" value="" />');
            }
            else if (RegEx != false && MaxLength != false) {
                $('#divCompanionAdd_' + 1 + '_' + 3).append('<input id="Accompagnatori_1__DatiAddizionaliAccompagnatore_3___testo" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[3]._testo" onchange="ControlloTesto(this)" type="text" value="" />');
            }
        }
        if (tipodatoAddizionale == 1) {
            if (RegEx != false && MaxLength != false) {
                $('#divCompanionAdd_' + 1 + '_' + 3).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_1__DatiAddizionaliAccompagnatore_3___data" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[3]._data" type="date" value="" />');
            }
            else if (RegEx != false && MaxLength == false) {
                $('#divCompanionAdd_' + 1 + '_' + 3).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_1__DatiAddizionaliAccompagnatore_3___data" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[3]._data" type="date" value="" />');
            }
            else if (RegEx == false && MaxLength != false) {
                $('#divCompanionAdd_' + 1 + '_' + 3).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_1__DatiAddizionaliAccompagnatore_3___data" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[3]._data" type="date" value="" />');
            }
            else if (RegEx == false && MaxLength == false) {
                $('#divCompanionAdd_' + 1 + '_' + 3).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_1__DatiAddizionaliAccompagnatore_3___data" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[3]._data" type="date" value="" />');
            }
        }
        if (tipodatoAddizionale == 3)
        {
            $('#divCompanionAdd_' + 1 + '_' + 3).append($('<select/>', { id: "ddlsAcc_1" + '_3', 'data-index': 3, onchange:"ControloSelect(this)"  }));
            $('#ddlsAcc_1' +'_3').append($('<option/>', {
            value: 0,
            text: " " }));
            $('#ifMultiple').append('<input data-val="true" data-val-number="The field _idSelezionato must be a number." data-val-required="The _idSelezionato field is required." id="hiddenSelezionatoAcc_1_3" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[3]._idSelezionato" type="hidden" value="0" />');
            getDropDownListsValues($('#hiddenIdDatoADDAcc_' +3).val(), $('#ddlsAcc_1' + '_3'), 0);
        }

    $('#divCompanionAdd_' + 1 + '_' + 3).append('<input data-val="true" data-val-required="The _Obbligatorio field is required." id="Accompagnatori_1__DatiAddizionaliAccompagnatore_3___Obbligatorio" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[3]._Obbligatorio" type="hidden" value="True" />');

    $('#divCompanionAdd_' + 1 + '_' + 3).append('<div><p><span class="field-validation-valid" data-valmsg-for="addizionale_1_3" data-valmsg-replace="true" style="color:red"></span></p> <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_1_3" data-valmsg-replace="true" style="color:red"></span> </p></div>');

    
        var tipodatoAddizionale = $('#hiddenCodDatoAddAcc_' + 4).val();
        RegEx = true;
        MaxLength = false;
        if (tipodatoAddizionale == 2) {
            if (RegEx == false && MaxLength == false) {
                $('#divCompanionAdd_' + 1 + '_' + 4).append('<input id="Accompagnatori_1__DatiAddizionaliAccompagnatore_4___testo" maxlength="100" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[4]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />');
            }
            else if (RegEx == false && MaxLength != false) {
                $('#divCompanionAdd_' + 1 + '_' + 4).append('<input id="Accompagnatori_1__DatiAddizionaliAccompagnatore_4___testo" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[4]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />');
            }
            else if (RegEx != false && MaxLength == false) {
                $('#divCompanionAdd_' + 1 + '_' + 4).append('<input id="Accompagnatori_1__DatiAddizionaliAccompagnatore_4___testo" maxlength="100" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[4]._testo" onchange="ControlloTesto(this)" type="text" value="" />');
            }
            else if (RegEx != false && MaxLength != false) {
                $('#divCompanionAdd_' + 1 + '_' + 4).append('<input id="Accompagnatori_1__DatiAddizionaliAccompagnatore_4___testo" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[4]._testo" onchange="ControlloTesto(this)" type="text" value="" />');
            }
        }
        if (tipodatoAddizionale == 1) {
            if (RegEx != false && MaxLength != false) {
                $('#divCompanionAdd_' + 1 + '_' + 4).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_1__DatiAddizionaliAccompagnatore_4___data" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[4]._data" type="date" value="" />');
            }
            else if (RegEx != false && MaxLength == false) {
                $('#divCompanionAdd_' + 1 + '_' + 4).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_1__DatiAddizionaliAccompagnatore_4___data" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[4]._data" type="date" value="" />');
            }
            else if (RegEx == false && MaxLength != false) {
                $('#divCompanionAdd_' + 1 + '_' + 4).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_1__DatiAddizionaliAccompagnatore_4___data" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[4]._data" type="date" value="" />');
            }
            else if (RegEx == false && MaxLength == false) {
                $('#divCompanionAdd_' + 1 + '_' + 4).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_1__DatiAddizionaliAccompagnatore_4___data" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[4]._data" type="date" value="" />');
            }
        }
        if (tipodatoAddizionale == 3)
        {
            $('#divCompanionAdd_' + 1 + '_' + 4).append($('<select/>', { id: "ddlsAcc_1" + '_4', 'data-index': 4, onchange:"ControloSelect(this)"  }));
            $('#ddlsAcc_1' +'_4').append($('<option/>', {
            value: 0,
            text: " " }));
            $('#ifMultiple').append('<input data-val="true" data-val-number="The field _idSelezionato must be a number." data-val-required="The _idSelezionato field is required." id="hiddenSelezionatoAcc_1_4" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[4]._idSelezionato" type="hidden" value="0" />');
            getDropDownListsValues($('#hiddenIdDatoADDAcc_' +4).val(), $('#ddlsAcc_1' + '_4'), 0);
        }

    $('#divCompanionAdd_' + 1 + '_' + 4).append('<input data-val="true" data-val-required="The _Obbligatorio field is required." id="Accompagnatori_1__DatiAddizionaliAccompagnatore_4___Obbligatorio" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[4]._Obbligatorio" type="hidden" value="True" />');

    $('#divCompanionAdd_' + 1 + '_' + 4).append('<div><p><span class="field-validation-valid" data-valmsg-for="addizionale_1_4" data-valmsg-replace="true" style="color:red"></span></p> <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_1_4" data-valmsg-replace="true" style="color:red"></span> </p></div>');

    
        var tipodatoAddizionale = $('#hiddenCodDatoAddAcc_' + 5).val();
        RegEx = true;
        MaxLength = false;
        if (tipodatoAddizionale == 2) {
            if (RegEx == false && MaxLength == false) {
                $('#divCompanionAdd_' + 1 + '_' + 5).append('<input id="Accompagnatori_1__DatiAddizionaliAccompagnatore_5___testo" maxlength="100" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[5]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />');
            }
            else if (RegEx == false && MaxLength != false) {
                $('#divCompanionAdd_' + 1 + '_' + 5).append('<input id="Accompagnatori_1__DatiAddizionaliAccompagnatore_5___testo" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[5]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />');
            }
            else if (RegEx != false && MaxLength == false) {
                $('#divCompanionAdd_' + 1 + '_' + 5).append('<input id="Accompagnatori_1__DatiAddizionaliAccompagnatore_5___testo" maxlength="100" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[5]._testo" onchange="ControlloTesto(this)" type="text" value="" />');
            }
            else if (RegEx != false && MaxLength != false) {
                $('#divCompanionAdd_' + 1 + '_' + 5).append('<input id="Accompagnatori_1__DatiAddizionaliAccompagnatore_5___testo" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[5]._testo" onchange="ControlloTesto(this)" type="text" value="" />');
            }
        }
        if (tipodatoAddizionale == 1) {
            if (RegEx != false && MaxLength != false) {
                $('#divCompanionAdd_' + 1 + '_' + 5).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_1__DatiAddizionaliAccompagnatore_5___data" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[5]._data" type="date" value="" />');
            }
            else if (RegEx != false && MaxLength == false) {
                $('#divCompanionAdd_' + 1 + '_' + 5).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_1__DatiAddizionaliAccompagnatore_5___data" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[5]._data" type="date" value="" />');
            }
            else if (RegEx == false && MaxLength != false) {
                $('#divCompanionAdd_' + 1 + '_' + 5).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_1__DatiAddizionaliAccompagnatore_5___data" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[5]._data" type="date" value="" />');
            }
            else if (RegEx == false && MaxLength == false) {
                $('#divCompanionAdd_' + 1 + '_' + 5).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_1__DatiAddizionaliAccompagnatore_5___data" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[5]._data" type="date" value="" />');
            }
        }
        if (tipodatoAddizionale == 3)
        {
            $('#divCompanionAdd_' + 1 + '_' + 5).append($('<select/>', { id: "ddlsAcc_1" + '_5', 'data-index': 5, onchange:"ControloSelect(this)"  }));
            $('#ddlsAcc_1' +'_5').append($('<option/>', {
            value: 0,
            text: " " }));
            $('#ifMultiple').append('<input data-val="true" data-val-number="The field _idSelezionato must be a number." data-val-required="The _idSelezionato field is required." id="hiddenSelezionatoAcc_1_5" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[5]._idSelezionato" type="hidden" value="0" />');
            getDropDownListsValues($('#hiddenIdDatoADDAcc_' +5).val(), $('#ddlsAcc_1' + '_5'), 0);
        }

    $('#divCompanionAdd_' + 1 + '_' + 5).append('<input data-val="true" data-val-required="The _Obbligatorio field is required." id="Accompagnatori_1__DatiAddizionaliAccompagnatore_5___Obbligatorio" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[5]._Obbligatorio" type="hidden" value="True" />');

    $('#divCompanionAdd_' + 1 + '_' + 5).append('<div><p><span class="field-validation-valid" data-valmsg-for="addizionale_1_5" data-valmsg-replace="true" style="color:red"></span></p> <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_1_5" data-valmsg-replace="true" style="color:red"></span> </p></div>');

    
        var tipodatoAddizionale = $('#hiddenCodDatoAddAcc_' + 6).val();
        RegEx = true;
        MaxLength = false;
        if (tipodatoAddizionale == 2) {
            if (RegEx == false && MaxLength == false) {
                $('#divCompanionAdd_' + 1 + '_' + 6).append('<input id="Accompagnatori_1__DatiAddizionaliAccompagnatore_6___testo" maxlength="100" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[6]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />');
            }
            else if (RegEx == false && MaxLength != false) {
                $('#divCompanionAdd_' + 1 + '_' + 6).append('<input id="Accompagnatori_1__DatiAddizionaliAccompagnatore_6___testo" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[6]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />');
            }
            else if (RegEx != false && MaxLength == false) {
                $('#divCompanionAdd_' + 1 + '_' + 6).append('<input id="Accompagnatori_1__DatiAddizionaliAccompagnatore_6___testo" maxlength="100" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[6]._testo" onchange="ControlloTesto(this)" type="text" value="" />');
            }
            else if (RegEx != false && MaxLength != false) {
                $('#divCompanionAdd_' + 1 + '_' + 6).append('<input id="Accompagnatori_1__DatiAddizionaliAccompagnatore_6___testo" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[6]._testo" onchange="ControlloTesto(this)" type="text" value="" />');
            }
        }
        if (tipodatoAddizionale == 1) {
            if (RegEx != false && MaxLength != false) {
                $('#divCompanionAdd_' + 1 + '_' + 6).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_1__DatiAddizionaliAccompagnatore_6___data" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[6]._data" type="date" value="" />');
            }
            else if (RegEx != false && MaxLength == false) {
                $('#divCompanionAdd_' + 1 + '_' + 6).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_1__DatiAddizionaliAccompagnatore_6___data" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[6]._data" type="date" value="" />');
            }
            else if (RegEx == false && MaxLength != false) {
                $('#divCompanionAdd_' + 1 + '_' + 6).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_1__DatiAddizionaliAccompagnatore_6___data" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[6]._data" type="date" value="" />');
            }
            else if (RegEx == false && MaxLength == false) {
                $('#divCompanionAdd_' + 1 + '_' + 6).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_1__DatiAddizionaliAccompagnatore_6___data" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[6]._data" type="date" value="" />');
            }
        }
        if (tipodatoAddizionale == 3)
        {
            $('#divCompanionAdd_' + 1 + '_' + 6).append($('<select/>', { id: "ddlsAcc_1" + '_6', 'data-index': 6, onchange:"ControloSelect(this)"  }));
            $('#ddlsAcc_1' +'_6').append($('<option/>', {
            value: 0,
            text: " " }));
            $('#ifMultiple').append('<input data-val="true" data-val-number="The field _idSelezionato must be a number." data-val-required="The _idSelezionato field is required." id="hiddenSelezionatoAcc_1_6" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[6]._idSelezionato" type="hidden" value="0" />');
            getDropDownListsValues($('#hiddenIdDatoADDAcc_' +6).val(), $('#ddlsAcc_1' + '_6'), 0);
        }

    $('#divCompanionAdd_' + 1 + '_' + 6).append('<input data-val="true" data-val-required="The _Obbligatorio field is required." id="Accompagnatori_1__DatiAddizionaliAccompagnatore_6___Obbligatorio" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[6]._Obbligatorio" type="hidden" value="True" />');

    $('#divCompanionAdd_' + 1 + '_' + 6).append('<div><p><span class="field-validation-valid" data-valmsg-for="addizionale_1_6" data-valmsg-replace="true" style="color:red"></span></p> <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_1_6" data-valmsg-replace="true" style="color:red"></span> </p></div>');

    
        var tipodatoAddizionale = $('#hiddenCodDatoAddAcc_' + 7).val();
        RegEx = true;
        MaxLength = false;
        if (tipodatoAddizionale == 2) {
            if (RegEx == false && MaxLength == false) {
                $('#divCompanionAdd_' + 1 + '_' + 7).append('<input id="Accompagnatori_1__DatiAddizionaliAccompagnatore_7___testo" maxlength="100" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[7]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />');
            }
            else if (RegEx == false && MaxLength != false) {
                $('#divCompanionAdd_' + 1 + '_' + 7).append('<input id="Accompagnatori_1__DatiAddizionaliAccompagnatore_7___testo" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[7]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />');
            }
            else if (RegEx != false && MaxLength == false) {
                $('#divCompanionAdd_' + 1 + '_' + 7).append('<input id="Accompagnatori_1__DatiAddizionaliAccompagnatore_7___testo" maxlength="100" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[7]._testo" onchange="ControlloTesto(this)" type="text" value="" />');
            }
            else if (RegEx != false && MaxLength != false) {
                $('#divCompanionAdd_' + 1 + '_' + 7).append('<input id="Accompagnatori_1__DatiAddizionaliAccompagnatore_7___testo" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[7]._testo" onchange="ControlloTesto(this)" type="text" value="" />');
            }
        }
        if (tipodatoAddizionale == 1) {
            if (RegEx != false && MaxLength != false) {
                $('#divCompanionAdd_' + 1 + '_' + 7).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_1__DatiAddizionaliAccompagnatore_7___data" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[7]._data" type="date" value="" />');
            }
            else if (RegEx != false && MaxLength == false) {
                $('#divCompanionAdd_' + 1 + '_' + 7).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_1__DatiAddizionaliAccompagnatore_7___data" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[7]._data" type="date" value="" />');
            }
            else if (RegEx == false && MaxLength != false) {
                $('#divCompanionAdd_' + 1 + '_' + 7).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_1__DatiAddizionaliAccompagnatore_7___data" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[7]._data" type="date" value="" />');
            }
            else if (RegEx == false && MaxLength == false) {
                $('#divCompanionAdd_' + 1 + '_' + 7).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_1__DatiAddizionaliAccompagnatore_7___data" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[7]._data" type="date" value="" />');
            }
        }
        if (tipodatoAddizionale == 3)
        {
            $('#divCompanionAdd_' + 1 + '_' + 7).append($('<select/>', { id: "ddlsAcc_1" + '_7', 'data-index': 7, onchange:"ControloSelect(this)"  }));
            $('#ddlsAcc_1' +'_7').append($('<option/>', {
            value: 0,
            text: " " }));
            $('#ifMultiple').append('<input data-val="true" data-val-number="The field _idSelezionato must be a number." data-val-required="The _idSelezionato field is required." id="hiddenSelezionatoAcc_1_7" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[7]._idSelezionato" type="hidden" value="0" />');
            getDropDownListsValues($('#hiddenIdDatoADDAcc_' +7).val(), $('#ddlsAcc_1' + '_7'), 0);
        }

    $('#divCompanionAdd_' + 1 + '_' + 7).append('<input data-val="true" data-val-required="The _Obbligatorio field is required." id="Accompagnatori_1__DatiAddizionaliAccompagnatore_7___Obbligatorio" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[7]._Obbligatorio" type="hidden" value="True" />');

    $('#divCompanionAdd_' + 1 + '_' + 7).append('<div><p><span class="field-validation-valid" data-valmsg-for="addizionale_1_7" data-valmsg-replace="true" style="color:red"></span></p> <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_1_7" data-valmsg-replace="true" style="color:red"></span> </p></div>');

    
        var tipodatoAddizionale = $('#hiddenCodDatoAddAcc_' + 8).val();
        RegEx = true;
        MaxLength = false;
        if (tipodatoAddizionale == 2) {
            if (RegEx == false && MaxLength == false) {
                $('#divCompanionAdd_' + 1 + '_' + 8).append('<input id="Accompagnatori_1__DatiAddizionaliAccompagnatore_8___testo" maxlength="100" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[8]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />');
            }
            else if (RegEx == false && MaxLength != false) {
                $('#divCompanionAdd_' + 1 + '_' + 8).append('<input id="Accompagnatori_1__DatiAddizionaliAccompagnatore_8___testo" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[8]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />');
            }
            else if (RegEx != false && MaxLength == false) {
                $('#divCompanionAdd_' + 1 + '_' + 8).append('<input id="Accompagnatori_1__DatiAddizionaliAccompagnatore_8___testo" maxlength="100" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[8]._testo" onchange="ControlloTesto(this)" type="text" value="" />');
            }
            else if (RegEx != false && MaxLength != false) {
                $('#divCompanionAdd_' + 1 + '_' + 8).append('<input id="Accompagnatori_1__DatiAddizionaliAccompagnatore_8___testo" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[8]._testo" onchange="ControlloTesto(this)" type="text" value="" />');
            }
        }
        if (tipodatoAddizionale == 1) {
            if (RegEx != false && MaxLength != false) {
                $('#divCompanionAdd_' + 1 + '_' + 8).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_1__DatiAddizionaliAccompagnatore_8___data" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[8]._data" type="date" value="" />');
            }
            else if (RegEx != false && MaxLength == false) {
                $('#divCompanionAdd_' + 1 + '_' + 8).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_1__DatiAddizionaliAccompagnatore_8___data" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[8]._data" type="date" value="" />');
            }
            else if (RegEx == false && MaxLength != false) {
                $('#divCompanionAdd_' + 1 + '_' + 8).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_1__DatiAddizionaliAccompagnatore_8___data" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[8]._data" type="date" value="" />');
            }
            else if (RegEx == false && MaxLength == false) {
                $('#divCompanionAdd_' + 1 + '_' + 8).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_1__DatiAddizionaliAccompagnatore_8___data" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[8]._data" type="date" value="" />');
            }
        }
        if (tipodatoAddizionale == 3)
        {
            $('#divCompanionAdd_' + 1 + '_' + 8).append($('<select/>', { id: "ddlsAcc_1" + '_8', 'data-index': 8, onchange:"ControloSelect(this)"  }));
            $('#ddlsAcc_1' +'_8').append($('<option/>', {
            value: 0,
            text: " " }));
            $('#ifMultiple').append('<input data-val="true" data-val-number="The field _idSelezionato must be a number." data-val-required="The _idSelezionato field is required." id="hiddenSelezionatoAcc_1_8" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[8]._idSelezionato" type="hidden" value="0" />');
            getDropDownListsValues($('#hiddenIdDatoADDAcc_' +8).val(), $('#ddlsAcc_1' + '_8'), 0);
        }

    $('#divCompanionAdd_' + 1 + '_' + 8).append('<input data-val="true" data-val-required="The _Obbligatorio field is required." id="Accompagnatori_1__DatiAddizionaliAccompagnatore_8___Obbligatorio" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[8]._Obbligatorio" type="hidden" value="True" />');

    $('#divCompanionAdd_' + 1 + '_' + 8).append('<div><p><span class="field-validation-valid" data-valmsg-for="addizionale_1_8" data-valmsg-replace="true" style="color:red"></span></p> <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_1_8" data-valmsg-replace="true" style="color:red"></span> </p></div>');

    
        var tipodatoAddizionale = $('#hiddenCodDatoAddAcc_' + 0).val();
        RegEx = true;
        MaxLength = false;
        if (tipodatoAddizionale == 2) {
            if (RegEx == false && MaxLength == false) {
                $('#divCompanionAdd_' + 2 + '_' + 0).append('<input id="Accompagnatori_2__DatiAddizionaliAccompagnatore_0___testo" maxlength="100" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[0]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />');
            }
            else if (RegEx == false && MaxLength != false) {
                $('#divCompanionAdd_' + 2 + '_' + 0).append('<input id="Accompagnatori_2__DatiAddizionaliAccompagnatore_0___testo" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[0]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />');
            }
            else if (RegEx != false && MaxLength == false) {
                $('#divCompanionAdd_' + 2 + '_' + 0).append('<input id="Accompagnatori_2__DatiAddizionaliAccompagnatore_0___testo" maxlength="100" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[0]._testo" onchange="ControlloTesto(this)" type="text" value="" />');
            }
            else if (RegEx != false && MaxLength != false) {
                $('#divCompanionAdd_' + 2 + '_' + 0).append('<input id="Accompagnatori_2__DatiAddizionaliAccompagnatore_0___testo" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[0]._testo" onchange="ControlloTesto(this)" type="text" value="" />');
            }
        }
        if (tipodatoAddizionale == 1) {
            if (RegEx != false && MaxLength != false) {
                $('#divCompanionAdd_' + 2 + '_' + 0).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_2__DatiAddizionaliAccompagnatore_0___data" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[0]._data" type="date" value="" />');
            }
            else if (RegEx != false && MaxLength == false) {
                $('#divCompanionAdd_' + 2 + '_' + 0).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_2__DatiAddizionaliAccompagnatore_0___data" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[0]._data" type="date" value="" />');
            }
            else if (RegEx == false && MaxLength != false) {
                $('#divCompanionAdd_' + 2 + '_' + 0).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_2__DatiAddizionaliAccompagnatore_0___data" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[0]._data" type="date" value="" />');
            }
            else if (RegEx == false && MaxLength == false) {
                $('#divCompanionAdd_' + 2 + '_' + 0).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_2__DatiAddizionaliAccompagnatore_0___data" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[0]._data" type="date" value="" />');
            }
        }
        if (tipodatoAddizionale == 3)
        {
            $('#divCompanionAdd_' + 2 + '_' + 0).append($('<select/>', { id: "ddlsAcc_2" + '_0', 'data-index': 0, onchange:"ControloSelect(this)"  }));
            $('#ddlsAcc_2' +'_0').append($('<option/>', {
            value: 0,
            text: " " }));
            $('#ifMultiple').append('<input data-val="true" data-val-number="The field _idSelezionato must be a number." data-val-required="The _idSelezionato field is required." id="hiddenSelezionatoAcc_2_0" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[0]._idSelezionato" type="hidden" value="0" />');
            getDropDownListsValues($('#hiddenIdDatoADDAcc_' +0).val(), $('#ddlsAcc_2' + '_0'), 0);
        }

    $('#divCompanionAdd_' + 2 + '_' + 0).append('<input data-val="true" data-val-required="The _Obbligatorio field is required." id="Accompagnatori_2__DatiAddizionaliAccompagnatore_0___Obbligatorio" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[0]._Obbligatorio" type="hidden" value="True" />');

    $('#divCompanionAdd_' + 2 + '_' + 0).append('<div><p><span class="field-validation-valid" data-valmsg-for="addizionale_2_0" data-valmsg-replace="true" style="color:red"></span></p> <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_2_0" data-valmsg-replace="true" style="color:red"></span> </p></div>');

    
        var tipodatoAddizionale = $('#hiddenCodDatoAddAcc_' + 1).val();
        RegEx = true;
        MaxLength = false;
        if (tipodatoAddizionale == 2) {
            if (RegEx == false && MaxLength == false) {
                $('#divCompanionAdd_' + 2 + '_' + 1).append('<input id="Accompagnatori_2__DatiAddizionaliAccompagnatore_1___testo" maxlength="100" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[1]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />');
            }
            else if (RegEx == false && MaxLength != false) {
                $('#divCompanionAdd_' + 2 + '_' + 1).append('<input id="Accompagnatori_2__DatiAddizionaliAccompagnatore_1___testo" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[1]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />');
            }
            else if (RegEx != false && MaxLength == false) {
                $('#divCompanionAdd_' + 2 + '_' + 1).append('<input id="Accompagnatori_2__DatiAddizionaliAccompagnatore_1___testo" maxlength="100" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[1]._testo" onchange="ControlloTesto(this)" type="text" value="" />');
            }
            else if (RegEx != false && MaxLength != false) {
                $('#divCompanionAdd_' + 2 + '_' + 1).append('<input id="Accompagnatori_2__DatiAddizionaliAccompagnatore_1___testo" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[1]._testo" onchange="ControlloTesto(this)" type="text" value="" />');
            }
        }
        if (tipodatoAddizionale == 1) {
            if (RegEx != false && MaxLength != false) {
                $('#divCompanionAdd_' + 2 + '_' + 1).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_2__DatiAddizionaliAccompagnatore_1___data" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[1]._data" type="date" value="" />');
            }
            else if (RegEx != false && MaxLength == false) {
                $('#divCompanionAdd_' + 2 + '_' + 1).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_2__DatiAddizionaliAccompagnatore_1___data" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[1]._data" type="date" value="" />');
            }
            else if (RegEx == false && MaxLength != false) {
                $('#divCompanionAdd_' + 2 + '_' + 1).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_2__DatiAddizionaliAccompagnatore_1___data" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[1]._data" type="date" value="" />');
            }
            else if (RegEx == false && MaxLength == false) {
                $('#divCompanionAdd_' + 2 + '_' + 1).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_2__DatiAddizionaliAccompagnatore_1___data" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[1]._data" type="date" value="" />');
            }
        }
        if (tipodatoAddizionale == 3)
        {
            $('#divCompanionAdd_' + 2 + '_' + 1).append($('<select/>', { id: "ddlsAcc_2" + '_1', 'data-index': 1, onchange:"ControloSelect(this)"  }));
            $('#ddlsAcc_2' +'_1').append($('<option/>', {
            value: 0,
            text: " " }));
            $('#ifMultiple').append('<input data-val="true" data-val-number="The field _idSelezionato must be a number." data-val-required="The _idSelezionato field is required." id="hiddenSelezionatoAcc_2_1" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[1]._idSelezionato" type="hidden" value="0" />');
            getDropDownListsValues($('#hiddenIdDatoADDAcc_' +1).val(), $('#ddlsAcc_2' + '_1'), 0);
        }

    $('#divCompanionAdd_' + 2 + '_' + 1).append('<input data-val="true" data-val-required="The _Obbligatorio field is required." id="Accompagnatori_2__DatiAddizionaliAccompagnatore_1___Obbligatorio" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[1]._Obbligatorio" type="hidden" value="True" />');

    $('#divCompanionAdd_' + 2 + '_' + 1).append('<div><p><span class="field-validation-valid" data-valmsg-for="addizionale_2_1" data-valmsg-replace="true" style="color:red"></span></p> <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_2_1" data-valmsg-replace="true" style="color:red"></span> </p></div>');

    
        var tipodatoAddizionale = $('#hiddenCodDatoAddAcc_' + 2).val();
        RegEx = true;
        MaxLength = false;
        if (tipodatoAddizionale == 2) {
            if (RegEx == false && MaxLength == false) {
                $('#divCompanionAdd_' + 2 + '_' + 2).append('<input id="Accompagnatori_2__DatiAddizionaliAccompagnatore_2___testo" maxlength="100" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[2]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />');
            }
            else if (RegEx == false && MaxLength != false) {
                $('#divCompanionAdd_' + 2 + '_' + 2).append('<input id="Accompagnatori_2__DatiAddizionaliAccompagnatore_2___testo" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[2]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />');
            }
            else if (RegEx != false && MaxLength == false) {
                $('#divCompanionAdd_' + 2 + '_' + 2).append('<input id="Accompagnatori_2__DatiAddizionaliAccompagnatore_2___testo" maxlength="100" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[2]._testo" onchange="ControlloTesto(this)" type="text" value="" />');
            }
            else if (RegEx != false && MaxLength != false) {
                $('#divCompanionAdd_' + 2 + '_' + 2).append('<input id="Accompagnatori_2__DatiAddizionaliAccompagnatore_2___testo" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[2]._testo" onchange="ControlloTesto(this)" type="text" value="" />');
            }
        }
        if (tipodatoAddizionale == 1) {
            if (RegEx != false && MaxLength != false) {
                $('#divCompanionAdd_' + 2 + '_' + 2).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_2__DatiAddizionaliAccompagnatore_2___data" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[2]._data" type="date" value="" />');
            }
            else if (RegEx != false && MaxLength == false) {
                $('#divCompanionAdd_' + 2 + '_' + 2).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_2__DatiAddizionaliAccompagnatore_2___data" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[2]._data" type="date" value="" />');
            }
            else if (RegEx == false && MaxLength != false) {
                $('#divCompanionAdd_' + 2 + '_' + 2).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_2__DatiAddizionaliAccompagnatore_2___data" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[2]._data" type="date" value="" />');
            }
            else if (RegEx == false && MaxLength == false) {
                $('#divCompanionAdd_' + 2 + '_' + 2).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_2__DatiAddizionaliAccompagnatore_2___data" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[2]._data" type="date" value="" />');
            }
        }
        if (tipodatoAddizionale == 3)
        {
            $('#divCompanionAdd_' + 2 + '_' + 2).append($('<select/>', { id: "ddlsAcc_2" + '_2', 'data-index': 2, onchange:"ControloSelect(this)"  }));
            $('#ddlsAcc_2' +'_2').append($('<option/>', {
            value: 0,
            text: " " }));
            $('#ifMultiple').append('<input data-val="true" data-val-number="The field _idSelezionato must be a number." data-val-required="The _idSelezionato field is required." id="hiddenSelezionatoAcc_2_2" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[2]._idSelezionato" type="hidden" value="0" />');
            getDropDownListsValues($('#hiddenIdDatoADDAcc_' +2).val(), $('#ddlsAcc_2' + '_2'), 0);
        }

    $('#divCompanionAdd_' + 2 + '_' + 2).append('<input data-val="true" data-val-required="The _Obbligatorio field is required." id="Accompagnatori_2__DatiAddizionaliAccompagnatore_2___Obbligatorio" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[2]._Obbligatorio" type="hidden" value="True" />');

    $('#divCompanionAdd_' + 2 + '_' + 2).append('<div><p><span class="field-validation-valid" data-valmsg-for="addizionale_2_2" data-valmsg-replace="true" style="color:red"></span></p> <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_2_2" data-valmsg-replace="true" style="color:red"></span> </p></div>');

    
        var tipodatoAddizionale = $('#hiddenCodDatoAddAcc_' + 3).val();
        RegEx = true;
        MaxLength = false;
        if (tipodatoAddizionale == 2) {
            if (RegEx == false && MaxLength == false) {
                $('#divCompanionAdd_' + 2 + '_' + 3).append('<input id="Accompagnatori_2__DatiAddizionaliAccompagnatore_3___testo" maxlength="100" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[3]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />');
            }
            else if (RegEx == false && MaxLength != false) {
                $('#divCompanionAdd_' + 2 + '_' + 3).append('<input id="Accompagnatori_2__DatiAddizionaliAccompagnatore_3___testo" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[3]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />');
            }
            else if (RegEx != false && MaxLength == false) {
                $('#divCompanionAdd_' + 2 + '_' + 3).append('<input id="Accompagnatori_2__DatiAddizionaliAccompagnatore_3___testo" maxlength="100" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[3]._testo" onchange="ControlloTesto(this)" type="text" value="" />');
            }
            else if (RegEx != false && MaxLength != false) {
                $('#divCompanionAdd_' + 2 + '_' + 3).append('<input id="Accompagnatori_2__DatiAddizionaliAccompagnatore_3___testo" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[3]._testo" onchange="ControlloTesto(this)" type="text" value="" />');
            }
        }
        if (tipodatoAddizionale == 1) {
            if (RegEx != false && MaxLength != false) {
                $('#divCompanionAdd_' + 2 + '_' + 3).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_2__DatiAddizionaliAccompagnatore_3___data" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[3]._data" type="date" value="" />');
            }
            else if (RegEx != false && MaxLength == false) {
                $('#divCompanionAdd_' + 2 + '_' + 3).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_2__DatiAddizionaliAccompagnatore_3___data" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[3]._data" type="date" value="" />');
            }
            else if (RegEx == false && MaxLength != false) {
                $('#divCompanionAdd_' + 2 + '_' + 3).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_2__DatiAddizionaliAccompagnatore_3___data" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[3]._data" type="date" value="" />');
            }
            else if (RegEx == false && MaxLength == false) {
                $('#divCompanionAdd_' + 2 + '_' + 3).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_2__DatiAddizionaliAccompagnatore_3___data" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[3]._data" type="date" value="" />');
            }
        }
        if (tipodatoAddizionale == 3)
        {
            $('#divCompanionAdd_' + 2 + '_' + 3).append($('<select/>', { id: "ddlsAcc_2" + '_3', 'data-index': 3, onchange:"ControloSelect(this)"  }));
            $('#ddlsAcc_2' +'_3').append($('<option/>', {
            value: 0,
            text: " " }));
            $('#ifMultiple').append('<input data-val="true" data-val-number="The field _idSelezionato must be a number." data-val-required="The _idSelezionato field is required." id="hiddenSelezionatoAcc_2_3" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[3]._idSelezionato" type="hidden" value="0" />');
            getDropDownListsValues($('#hiddenIdDatoADDAcc_' +3).val(), $('#ddlsAcc_2' + '_3'), 0);
        }

    $('#divCompanionAdd_' + 2 + '_' + 3).append('<input data-val="true" data-val-required="The _Obbligatorio field is required." id="Accompagnatori_2__DatiAddizionaliAccompagnatore_3___Obbligatorio" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[3]._Obbligatorio" type="hidden" value="True" />');

    $('#divCompanionAdd_' + 2 + '_' + 3).append('<div><p><span class="field-validation-valid" data-valmsg-for="addizionale_2_3" data-valmsg-replace="true" style="color:red"></span></p> <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_2_3" data-valmsg-replace="true" style="color:red"></span> </p></div>');

    
        var tipodatoAddizionale = $('#hiddenCodDatoAddAcc_' + 4).val();
        RegEx = true;
        MaxLength = false;
        if (tipodatoAddizionale == 2) {
            if (RegEx == false && MaxLength == false) {
                $('#divCompanionAdd_' + 2 + '_' + 4).append('<input id="Accompagnatori_2__DatiAddizionaliAccompagnatore_4___testo" maxlength="100" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[4]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />');
            }
            else if (RegEx == false && MaxLength != false) {
                $('#divCompanionAdd_' + 2 + '_' + 4).append('<input id="Accompagnatori_2__DatiAddizionaliAccompagnatore_4___testo" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[4]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />');
            }
            else if (RegEx != false && MaxLength == false) {
                $('#divCompanionAdd_' + 2 + '_' + 4).append('<input id="Accompagnatori_2__DatiAddizionaliAccompagnatore_4___testo" maxlength="100" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[4]._testo" onchange="ControlloTesto(this)" type="text" value="" />');
            }
            else if (RegEx != false && MaxLength != false) {
                $('#divCompanionAdd_' + 2 + '_' + 4).append('<input id="Accompagnatori_2__DatiAddizionaliAccompagnatore_4___testo" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[4]._testo" onchange="ControlloTesto(this)" type="text" value="" />');
            }
        }
        if (tipodatoAddizionale == 1) {
            if (RegEx != false && MaxLength != false) {
                $('#divCompanionAdd_' + 2 + '_' + 4).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_2__DatiAddizionaliAccompagnatore_4___data" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[4]._data" type="date" value="" />');
            }
            else if (RegEx != false && MaxLength == false) {
                $('#divCompanionAdd_' + 2 + '_' + 4).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_2__DatiAddizionaliAccompagnatore_4___data" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[4]._data" type="date" value="" />');
            }
            else if (RegEx == false && MaxLength != false) {
                $('#divCompanionAdd_' + 2 + '_' + 4).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_2__DatiAddizionaliAccompagnatore_4___data" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[4]._data" type="date" value="" />');
            }
            else if (RegEx == false && MaxLength == false) {
                $('#divCompanionAdd_' + 2 + '_' + 4).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_2__DatiAddizionaliAccompagnatore_4___data" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[4]._data" type="date" value="" />');
            }
        }
        if (tipodatoAddizionale == 3)
        {
            $('#divCompanionAdd_' + 2 + '_' + 4).append($('<select/>', { id: "ddlsAcc_2" + '_4', 'data-index': 4, onchange:"ControloSelect(this)"  }));
            $('#ddlsAcc_2' +'_4').append($('<option/>', {
            value: 0,
            text: " " }));
            $('#ifMultiple').append('<input data-val="true" data-val-number="The field _idSelezionato must be a number." data-val-required="The _idSelezionato field is required." id="hiddenSelezionatoAcc_2_4" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[4]._idSelezionato" type="hidden" value="0" />');
            getDropDownListsValues($('#hiddenIdDatoADDAcc_' +4).val(), $('#ddlsAcc_2' + '_4'), 0);
        }

    $('#divCompanionAdd_' + 2 + '_' + 4).append('<input data-val="true" data-val-required="The _Obbligatorio field is required." id="Accompagnatori_2__DatiAddizionaliAccompagnatore_4___Obbligatorio" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[4]._Obbligatorio" type="hidden" value="True" />');

    $('#divCompanionAdd_' + 2 + '_' + 4).append('<div><p><span class="field-validation-valid" data-valmsg-for="addizionale_2_4" data-valmsg-replace="true" style="color:red"></span></p> <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_2_4" data-valmsg-replace="true" style="color:red"></span> </p></div>');

    
        var tipodatoAddizionale = $('#hiddenCodDatoAddAcc_' + 5).val();
        RegEx = true;
        MaxLength = false;
        if (tipodatoAddizionale == 2) {
            if (RegEx == false && MaxLength == false) {
                $('#divCompanionAdd_' + 2 + '_' + 5).append('<input id="Accompagnatori_2__DatiAddizionaliAccompagnatore_5___testo" maxlength="100" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[5]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />');
            }
            else if (RegEx == false && MaxLength != false) {
                $('#divCompanionAdd_' + 2 + '_' + 5).append('<input id="Accompagnatori_2__DatiAddizionaliAccompagnatore_5___testo" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[5]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />');
            }
            else if (RegEx != false && MaxLength == false) {
                $('#divCompanionAdd_' + 2 + '_' + 5).append('<input id="Accompagnatori_2__DatiAddizionaliAccompagnatore_5___testo" maxlength="100" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[5]._testo" onchange="ControlloTesto(this)" type="text" value="" />');
            }
            else if (RegEx != false && MaxLength != false) {
                $('#divCompanionAdd_' + 2 + '_' + 5).append('<input id="Accompagnatori_2__DatiAddizionaliAccompagnatore_5___testo" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[5]._testo" onchange="ControlloTesto(this)" type="text" value="" />');
            }
        }
        if (tipodatoAddizionale == 1) {
            if (RegEx != false && MaxLength != false) {
                $('#divCompanionAdd_' + 2 + '_' + 5).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_2__DatiAddizionaliAccompagnatore_5___data" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[5]._data" type="date" value="" />');
            }
            else if (RegEx != false && MaxLength == false) {
                $('#divCompanionAdd_' + 2 + '_' + 5).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_2__DatiAddizionaliAccompagnatore_5___data" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[5]._data" type="date" value="" />');
            }
            else if (RegEx == false && MaxLength != false) {
                $('#divCompanionAdd_' + 2 + '_' + 5).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_2__DatiAddizionaliAccompagnatore_5___data" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[5]._data" type="date" value="" />');
            }
            else if (RegEx == false && MaxLength == false) {
                $('#divCompanionAdd_' + 2 + '_' + 5).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_2__DatiAddizionaliAccompagnatore_5___data" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[5]._data" type="date" value="" />');
            }
        }
        if (tipodatoAddizionale == 3)
        {
            $('#divCompanionAdd_' + 2 + '_' + 5).append($('<select/>', { id: "ddlsAcc_2" + '_5', 'data-index': 5, onchange:"ControloSelect(this)"  }));
            $('#ddlsAcc_2' +'_5').append($('<option/>', {
            value: 0,
            text: " " }));
            $('#ifMultiple').append('<input data-val="true" data-val-number="The field _idSelezionato must be a number." data-val-required="The _idSelezionato field is required." id="hiddenSelezionatoAcc_2_5" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[5]._idSelezionato" type="hidden" value="0" />');
            getDropDownListsValues($('#hiddenIdDatoADDAcc_' +5).val(), $('#ddlsAcc_2' + '_5'), 0);
        }

    $('#divCompanionAdd_' + 2 + '_' + 5).append('<input data-val="true" data-val-required="The _Obbligatorio field is required." id="Accompagnatori_2__DatiAddizionaliAccompagnatore_5___Obbligatorio" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[5]._Obbligatorio" type="hidden" value="True" />');

    $('#divCompanionAdd_' + 2 + '_' + 5).append('<div><p><span class="field-validation-valid" data-valmsg-for="addizionale_2_5" data-valmsg-replace="true" style="color:red"></span></p> <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_2_5" data-valmsg-replace="true" style="color:red"></span> </p></div>');

    
        var tipodatoAddizionale = $('#hiddenCodDatoAddAcc_' + 6).val();
        RegEx = true;
        MaxLength = false;
        if (tipodatoAddizionale == 2) {
            if (RegEx == false && MaxLength == false) {
                $('#divCompanionAdd_' + 2 + '_' + 6).append('<input id="Accompagnatori_2__DatiAddizionaliAccompagnatore_6___testo" maxlength="100" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[6]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />');
            }
            else if (RegEx == false && MaxLength != false) {
                $('#divCompanionAdd_' + 2 + '_' + 6).append('<input id="Accompagnatori_2__DatiAddizionaliAccompagnatore_6___testo" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[6]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />');
            }
            else if (RegEx != false && MaxLength == false) {
                $('#divCompanionAdd_' + 2 + '_' + 6).append('<input id="Accompagnatori_2__DatiAddizionaliAccompagnatore_6___testo" maxlength="100" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[6]._testo" onchange="ControlloTesto(this)" type="text" value="" />');
            }
            else if (RegEx != false && MaxLength != false) {
                $('#divCompanionAdd_' + 2 + '_' + 6).append('<input id="Accompagnatori_2__DatiAddizionaliAccompagnatore_6___testo" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[6]._testo" onchange="ControlloTesto(this)" type="text" value="" />');
            }
        }
        if (tipodatoAddizionale == 1) {
            if (RegEx != false && MaxLength != false) {
                $('#divCompanionAdd_' + 2 + '_' + 6).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_2__DatiAddizionaliAccompagnatore_6___data" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[6]._data" type="date" value="" />');
            }
            else if (RegEx != false && MaxLength == false) {
                $('#divCompanionAdd_' + 2 + '_' + 6).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_2__DatiAddizionaliAccompagnatore_6___data" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[6]._data" type="date" value="" />');
            }
            else if (RegEx == false && MaxLength != false) {
                $('#divCompanionAdd_' + 2 + '_' + 6).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_2__DatiAddizionaliAccompagnatore_6___data" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[6]._data" type="date" value="" />');
            }
            else if (RegEx == false && MaxLength == false) {
                $('#divCompanionAdd_' + 2 + '_' + 6).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_2__DatiAddizionaliAccompagnatore_6___data" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[6]._data" type="date" value="" />');
            }
        }
        if (tipodatoAddizionale == 3)
        {
            $('#divCompanionAdd_' + 2 + '_' + 6).append($('<select/>', { id: "ddlsAcc_2" + '_6', 'data-index': 6, onchange:"ControloSelect(this)"  }));
            $('#ddlsAcc_2' +'_6').append($('<option/>', {
            value: 0,
            text: " " }));
            $('#ifMultiple').append('<input data-val="true" data-val-number="The field _idSelezionato must be a number." data-val-required="The _idSelezionato field is required." id="hiddenSelezionatoAcc_2_6" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[6]._idSelezionato" type="hidden" value="0" />');
            getDropDownListsValues($('#hiddenIdDatoADDAcc_' +6).val(), $('#ddlsAcc_2' + '_6'), 0);
        }

    $('#divCompanionAdd_' + 2 + '_' + 6).append('<input data-val="true" data-val-required="The _Obbligatorio field is required." id="Accompagnatori_2__DatiAddizionaliAccompagnatore_6___Obbligatorio" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[6]._Obbligatorio" type="hidden" value="True" />');

    $('#divCompanionAdd_' + 2 + '_' + 6).append('<div><p><span class="field-validation-valid" data-valmsg-for="addizionale_2_6" data-valmsg-replace="true" style="color:red"></span></p> <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_2_6" data-valmsg-replace="true" style="color:red"></span> </p></div>');

    
        var tipodatoAddizionale = $('#hiddenCodDatoAddAcc_' + 7).val();
        RegEx = true;
        MaxLength = false;
        if (tipodatoAddizionale == 2) {
            if (RegEx == false && MaxLength == false) {
                $('#divCompanionAdd_' + 2 + '_' + 7).append('<input id="Accompagnatori_2__DatiAddizionaliAccompagnatore_7___testo" maxlength="100" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[7]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />');
            }
            else if (RegEx == false && MaxLength != false) {
                $('#divCompanionAdd_' + 2 + '_' + 7).append('<input id="Accompagnatori_2__DatiAddizionaliAccompagnatore_7___testo" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[7]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />');
            }
            else if (RegEx != false && MaxLength == false) {
                $('#divCompanionAdd_' + 2 + '_' + 7).append('<input id="Accompagnatori_2__DatiAddizionaliAccompagnatore_7___testo" maxlength="100" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[7]._testo" onchange="ControlloTesto(this)" type="text" value="" />');
            }
            else if (RegEx != false && MaxLength != false) {
                $('#divCompanionAdd_' + 2 + '_' + 7).append('<input id="Accompagnatori_2__DatiAddizionaliAccompagnatore_7___testo" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[7]._testo" onchange="ControlloTesto(this)" type="text" value="" />');
            }
        }
        if (tipodatoAddizionale == 1) {
            if (RegEx != false && MaxLength != false) {
                $('#divCompanionAdd_' + 2 + '_' + 7).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_2__DatiAddizionaliAccompagnatore_7___data" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[7]._data" type="date" value="" />');
            }
            else if (RegEx != false && MaxLength == false) {
                $('#divCompanionAdd_' + 2 + '_' + 7).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_2__DatiAddizionaliAccompagnatore_7___data" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[7]._data" type="date" value="" />');
            }
            else if (RegEx == false && MaxLength != false) {
                $('#divCompanionAdd_' + 2 + '_' + 7).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_2__DatiAddizionaliAccompagnatore_7___data" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[7]._data" type="date" value="" />');
            }
            else if (RegEx == false && MaxLength == false) {
                $('#divCompanionAdd_' + 2 + '_' + 7).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_2__DatiAddizionaliAccompagnatore_7___data" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[7]._data" type="date" value="" />');
            }
        }
        if (tipodatoAddizionale == 3)
        {
            $('#divCompanionAdd_' + 2 + '_' + 7).append($('<select/>', { id: "ddlsAcc_2" + '_7', 'data-index': 7, onchange:"ControloSelect(this)"  }));
            $('#ddlsAcc_2' +'_7').append($('<option/>', {
            value: 0,
            text: " " }));
            $('#ifMultiple').append('<input data-val="true" data-val-number="The field _idSelezionato must be a number." data-val-required="The _idSelezionato field is required." id="hiddenSelezionatoAcc_2_7" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[7]._idSelezionato" type="hidden" value="0" />');
            getDropDownListsValues($('#hiddenIdDatoADDAcc_' +7).val(), $('#ddlsAcc_2' + '_7'), 0);
        }

    $('#divCompanionAdd_' + 2 + '_' + 7).append('<input data-val="true" data-val-required="The _Obbligatorio field is required." id="Accompagnatori_2__DatiAddizionaliAccompagnatore_7___Obbligatorio" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[7]._Obbligatorio" type="hidden" value="True" />');

    $('#divCompanionAdd_' + 2 + '_' + 7).append('<div><p><span class="field-validation-valid" data-valmsg-for="addizionale_2_7" data-valmsg-replace="true" style="color:red"></span></p> <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_2_7" data-valmsg-replace="true" style="color:red"></span> </p></div>');

    
        var tipodatoAddizionale = $('#hiddenCodDatoAddAcc_' + 8).val();
        RegEx = true;
        MaxLength = false;
        if (tipodatoAddizionale == 2) {
            if (RegEx == false && MaxLength == false) {
                $('#divCompanionAdd_' + 2 + '_' + 8).append('<input id="Accompagnatori_2__DatiAddizionaliAccompagnatore_8___testo" maxlength="100" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[8]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />');
            }
            else if (RegEx == false && MaxLength != false) {
                $('#divCompanionAdd_' + 2 + '_' + 8).append('<input id="Accompagnatori_2__DatiAddizionaliAccompagnatore_8___testo" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[8]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />');
            }
            else if (RegEx != false && MaxLength == false) {
                $('#divCompanionAdd_' + 2 + '_' + 8).append('<input id="Accompagnatori_2__DatiAddizionaliAccompagnatore_8___testo" maxlength="100" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[8]._testo" onchange="ControlloTesto(this)" type="text" value="" />');
            }
            else if (RegEx != false && MaxLength != false) {
                $('#divCompanionAdd_' + 2 + '_' + 8).append('<input id="Accompagnatori_2__DatiAddizionaliAccompagnatore_8___testo" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[8]._testo" onchange="ControlloTesto(this)" type="text" value="" />');
            }
        }
        if (tipodatoAddizionale == 1) {
            if (RegEx != false && MaxLength != false) {
                $('#divCompanionAdd_' + 2 + '_' + 8).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_2__DatiAddizionaliAccompagnatore_8___data" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[8]._data" type="date" value="" />');
            }
            else if (RegEx != false && MaxLength == false) {
                $('#divCompanionAdd_' + 2 + '_' + 8).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_2__DatiAddizionaliAccompagnatore_8___data" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[8]._data" type="date" value="" />');
            }
            else if (RegEx == false && MaxLength != false) {
                $('#divCompanionAdd_' + 2 + '_' + 8).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_2__DatiAddizionaliAccompagnatore_8___data" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[8]._data" type="date" value="" />');
            }
            else if (RegEx == false && MaxLength == false) {
                $('#divCompanionAdd_' + 2 + '_' + 8).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_2__DatiAddizionaliAccompagnatore_8___data" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[8]._data" type="date" value="" />');
            }
        }
        if (tipodatoAddizionale == 3)
        {
            $('#divCompanionAdd_' + 2 + '_' + 8).append($('<select/>', { id: "ddlsAcc_2" + '_8', 'data-index': 8, onchange:"ControloSelect(this)"  }));
            $('#ddlsAcc_2' +'_8').append($('<option/>', {
            value: 0,
            text: " " }));
            $('#ifMultiple').append('<input data-val="true" data-val-number="The field _idSelezionato must be a number." data-val-required="The _idSelezionato field is required." id="hiddenSelezionatoAcc_2_8" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[8]._idSelezionato" type="hidden" value="0" />');
            getDropDownListsValues($('#hiddenIdDatoADDAcc_' +8).val(), $('#ddlsAcc_2' + '_8'), 0);
        }

    $('#divCompanionAdd_' + 2 + '_' + 8).append('<input data-val="true" data-val-required="The _Obbligatorio field is required." id="Accompagnatori_2__DatiAddizionaliAccompagnatore_8___Obbligatorio" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[8]._Obbligatorio" type="hidden" value="True" />');

    $('#divCompanionAdd_' + 2 + '_' + 8).append('<div><p><span class="field-validation-valid" data-valmsg-for="addizionale_2_8" data-valmsg-replace="true" style="color:red"></span></p> <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_2_8" data-valmsg-replace="true" style="color:red"></span> </p></div>');

    
        var tipodatoAddizionale = $('#hiddenCodDatoAddAcc_' + 0).val();
        RegEx = true;
        MaxLength = false;
        if (tipodatoAddizionale == 2) {
            if (RegEx == false && MaxLength == false) {
                $('#divCompanionAdd_' + 3 + '_' + 0).append('<input id="Accompagnatori_3__DatiAddizionaliAccompagnatore_0___testo" maxlength="100" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[0]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />');
            }
            else if (RegEx == false && MaxLength != false) {
                $('#divCompanionAdd_' + 3 + '_' + 0).append('<input id="Accompagnatori_3__DatiAddizionaliAccompagnatore_0___testo" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[0]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />');
            }
            else if (RegEx != false && MaxLength == false) {
                $('#divCompanionAdd_' + 3 + '_' + 0).append('<input id="Accompagnatori_3__DatiAddizionaliAccompagnatore_0___testo" maxlength="100" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[0]._testo" onchange="ControlloTesto(this)" type="text" value="" />');
            }
            else if (RegEx != false && MaxLength != false) {
                $('#divCompanionAdd_' + 3 + '_' + 0).append('<input id="Accompagnatori_3__DatiAddizionaliAccompagnatore_0___testo" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[0]._testo" onchange="ControlloTesto(this)" type="text" value="" />');
            }
        }
        if (tipodatoAddizionale == 1) {
            if (RegEx != false && MaxLength != false) {
                $('#divCompanionAdd_' + 3 + '_' + 0).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_3__DatiAddizionaliAccompagnatore_0___data" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[0]._data" type="date" value="" />');
            }
            else if (RegEx != false && MaxLength == false) {
                $('#divCompanionAdd_' + 3 + '_' + 0).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_3__DatiAddizionaliAccompagnatore_0___data" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[0]._data" type="date" value="" />');
            }
            else if (RegEx == false && MaxLength != false) {
                $('#divCompanionAdd_' + 3 + '_' + 0).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_3__DatiAddizionaliAccompagnatore_0___data" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[0]._data" type="date" value="" />');
            }
            else if (RegEx == false && MaxLength == false) {
                $('#divCompanionAdd_' + 3 + '_' + 0).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_3__DatiAddizionaliAccompagnatore_0___data" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[0]._data" type="date" value="" />');
            }
        }
        if (tipodatoAddizionale == 3)
        {
            $('#divCompanionAdd_' + 3 + '_' + 0).append($('<select/>', { id: "ddlsAcc_3" + '_0', 'data-index': 0, onchange:"ControloSelect(this)"  }));
            $('#ddlsAcc_3' +'_0').append($('<option/>', {
            value: 0,
            text: " " }));
            $('#ifMultiple').append('<input data-val="true" data-val-number="The field _idSelezionato must be a number." data-val-required="The _idSelezionato field is required." id="hiddenSelezionatoAcc_3_0" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[0]._idSelezionato" type="hidden" value="0" />');
            getDropDownListsValues($('#hiddenIdDatoADDAcc_' +0).val(), $('#ddlsAcc_3' + '_0'), 0);
        }

    $('#divCompanionAdd_' + 3 + '_' + 0).append('<input data-val="true" data-val-required="The _Obbligatorio field is required." id="Accompagnatori_3__DatiAddizionaliAccompagnatore_0___Obbligatorio" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[0]._Obbligatorio" type="hidden" value="True" />');

    $('#divCompanionAdd_' + 3 + '_' + 0).append('<div><p><span class="field-validation-valid" data-valmsg-for="addizionale_3_0" data-valmsg-replace="true" style="color:red"></span></p> <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_3_0" data-valmsg-replace="true" style="color:red"></span> </p></div>');

    
        var tipodatoAddizionale = $('#hiddenCodDatoAddAcc_' + 1).val();
        RegEx = true;
        MaxLength = false;
        if (tipodatoAddizionale == 2) {
            if (RegEx == false && MaxLength == false) {
                $('#divCompanionAdd_' + 3 + '_' + 1).append('<input id="Accompagnatori_3__DatiAddizionaliAccompagnatore_1___testo" maxlength="100" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[1]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />');
            }
            else if (RegEx == false && MaxLength != false) {
                $('#divCompanionAdd_' + 3 + '_' + 1).append('<input id="Accompagnatori_3__DatiAddizionaliAccompagnatore_1___testo" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[1]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />');
            }
            else if (RegEx != false && MaxLength == false) {
                $('#divCompanionAdd_' + 3 + '_' + 1).append('<input id="Accompagnatori_3__DatiAddizionaliAccompagnatore_1___testo" maxlength="100" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[1]._testo" onchange="ControlloTesto(this)" type="text" value="" />');
            }
            else if (RegEx != false && MaxLength != false) {
                $('#divCompanionAdd_' + 3 + '_' + 1).append('<input id="Accompagnatori_3__DatiAddizionaliAccompagnatore_1___testo" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[1]._testo" onchange="ControlloTesto(this)" type="text" value="" />');
            }
        }
        if (tipodatoAddizionale == 1) {
            if (RegEx != false && MaxLength != false) {
                $('#divCompanionAdd_' + 3 + '_' + 1).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_3__DatiAddizionaliAccompagnatore_1___data" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[1]._data" type="date" value="" />');
            }
            else if (RegEx != false && MaxLength == false) {
                $('#divCompanionAdd_' + 3 + '_' + 1).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_3__DatiAddizionaliAccompagnatore_1___data" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[1]._data" type="date" value="" />');
            }
            else if (RegEx == false && MaxLength != false) {
                $('#divCompanionAdd_' + 3 + '_' + 1).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_3__DatiAddizionaliAccompagnatore_1___data" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[1]._data" type="date" value="" />');
            }
            else if (RegEx == false && MaxLength == false) {
                $('#divCompanionAdd_' + 3 + '_' + 1).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_3__DatiAddizionaliAccompagnatore_1___data" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[1]._data" type="date" value="" />');
            }
        }
        if (tipodatoAddizionale == 3)
        {
            $('#divCompanionAdd_' + 3 + '_' + 1).append($('<select/>', { id: "ddlsAcc_3" + '_1', 'data-index': 1, onchange:"ControloSelect(this)"  }));
            $('#ddlsAcc_3' +'_1').append($('<option/>', {
            value: 0,
            text: " " }));
            $('#ifMultiple').append('<input data-val="true" data-val-number="The field _idSelezionato must be a number." data-val-required="The _idSelezionato field is required." id="hiddenSelezionatoAcc_3_1" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[1]._idSelezionato" type="hidden" value="0" />');
            getDropDownListsValues($('#hiddenIdDatoADDAcc_' +1).val(), $('#ddlsAcc_3' + '_1'), 0);
        }

    $('#divCompanionAdd_' + 3 + '_' + 1).append('<input data-val="true" data-val-required="The _Obbligatorio field is required." id="Accompagnatori_3__DatiAddizionaliAccompagnatore_1___Obbligatorio" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[1]._Obbligatorio" type="hidden" value="True" />');

    $('#divCompanionAdd_' + 3 + '_' + 1).append('<div><p><span class="field-validation-valid" data-valmsg-for="addizionale_3_1" data-valmsg-replace="true" style="color:red"></span></p> <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_3_1" data-valmsg-replace="true" style="color:red"></span> </p></div>');

    
        var tipodatoAddizionale = $('#hiddenCodDatoAddAcc_' + 2).val();
        RegEx = true;
        MaxLength = false;
        if (tipodatoAddizionale == 2) {
            if (RegEx == false && MaxLength == false) {
                $('#divCompanionAdd_' + 3 + '_' + 2).append('<input id="Accompagnatori_3__DatiAddizionaliAccompagnatore_2___testo" maxlength="100" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[2]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />');
            }
            else if (RegEx == false && MaxLength != false) {
                $('#divCompanionAdd_' + 3 + '_' + 2).append('<input id="Accompagnatori_3__DatiAddizionaliAccompagnatore_2___testo" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[2]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />');
            }
            else if (RegEx != false && MaxLength == false) {
                $('#divCompanionAdd_' + 3 + '_' + 2).append('<input id="Accompagnatori_3__DatiAddizionaliAccompagnatore_2___testo" maxlength="100" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[2]._testo" onchange="ControlloTesto(this)" type="text" value="" />');
            }
            else if (RegEx != false && MaxLength != false) {
                $('#divCompanionAdd_' + 3 + '_' + 2).append('<input id="Accompagnatori_3__DatiAddizionaliAccompagnatore_2___testo" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[2]._testo" onchange="ControlloTesto(this)" type="text" value="" />');
            }
        }
        if (tipodatoAddizionale == 1) {
            if (RegEx != false && MaxLength != false) {
                $('#divCompanionAdd_' + 3 + '_' + 2).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_3__DatiAddizionaliAccompagnatore_2___data" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[2]._data" type="date" value="" />');
            }
            else if (RegEx != false && MaxLength == false) {
                $('#divCompanionAdd_' + 3 + '_' + 2).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_3__DatiAddizionaliAccompagnatore_2___data" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[2]._data" type="date" value="" />');
            }
            else if (RegEx == false && MaxLength != false) {
                $('#divCompanionAdd_' + 3 + '_' + 2).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_3__DatiAddizionaliAccompagnatore_2___data" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[2]._data" type="date" value="" />');
            }
            else if (RegEx == false && MaxLength == false) {
                $('#divCompanionAdd_' + 3 + '_' + 2).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_3__DatiAddizionaliAccompagnatore_2___data" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[2]._data" type="date" value="" />');
            }
        }
        if (tipodatoAddizionale == 3)
        {
            $('#divCompanionAdd_' + 3 + '_' + 2).append($('<select/>', { id: "ddlsAcc_3" + '_2', 'data-index': 2, onchange:"ControloSelect(this)"  }));
            $('#ddlsAcc_3' +'_2').append($('<option/>', {
            value: 0,
            text: " " }));
            $('#ifMultiple').append('<input data-val="true" data-val-number="The field _idSelezionato must be a number." data-val-required="The _idSelezionato field is required." id="hiddenSelezionatoAcc_3_2" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[2]._idSelezionato" type="hidden" value="0" />');
            getDropDownListsValues($('#hiddenIdDatoADDAcc_' +2).val(), $('#ddlsAcc_3' + '_2'), 0);
        }

    $('#divCompanionAdd_' + 3 + '_' + 2).append('<input data-val="true" data-val-required="The _Obbligatorio field is required." id="Accompagnatori_3__DatiAddizionaliAccompagnatore_2___Obbligatorio" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[2]._Obbligatorio" type="hidden" value="True" />');

    $('#divCompanionAdd_' + 3 + '_' + 2).append('<div><p><span class="field-validation-valid" data-valmsg-for="addizionale_3_2" data-valmsg-replace="true" style="color:red"></span></p> <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_3_2" data-valmsg-replace="true" style="color:red"></span> </p></div>');

    
        var tipodatoAddizionale = $('#hiddenCodDatoAddAcc_' + 3).val();
        RegEx = true;
        MaxLength = false;
        if (tipodatoAddizionale == 2) {
            if (RegEx == false && MaxLength == false) {
                $('#divCompanionAdd_' + 3 + '_' + 3).append('<input id="Accompagnatori_3__DatiAddizionaliAccompagnatore_3___testo" maxlength="100" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[3]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />');
            }
            else if (RegEx == false && MaxLength != false) {
                $('#divCompanionAdd_' + 3 + '_' + 3).append('<input id="Accompagnatori_3__DatiAddizionaliAccompagnatore_3___testo" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[3]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />');
            }
            else if (RegEx != false && MaxLength == false) {
                $('#divCompanionAdd_' + 3 + '_' + 3).append('<input id="Accompagnatori_3__DatiAddizionaliAccompagnatore_3___testo" maxlength="100" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[3]._testo" onchange="ControlloTesto(this)" type="text" value="" />');
            }
            else if (RegEx != false && MaxLength != false) {
                $('#divCompanionAdd_' + 3 + '_' + 3).append('<input id="Accompagnatori_3__DatiAddizionaliAccompagnatore_3___testo" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[3]._testo" onchange="ControlloTesto(this)" type="text" value="" />');
            }
        }
        if (tipodatoAddizionale == 1) {
            if (RegEx != false && MaxLength != false) {
                $('#divCompanionAdd_' + 3 + '_' + 3).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_3__DatiAddizionaliAccompagnatore_3___data" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[3]._data" type="date" value="" />');
            }
            else if (RegEx != false && MaxLength == false) {
                $('#divCompanionAdd_' + 3 + '_' + 3).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_3__DatiAddizionaliAccompagnatore_3___data" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[3]._data" type="date" value="" />');
            }
            else if (RegEx == false && MaxLength != false) {
                $('#divCompanionAdd_' + 3 + '_' + 3).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_3__DatiAddizionaliAccompagnatore_3___data" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[3]._data" type="date" value="" />');
            }
            else if (RegEx == false && MaxLength == false) {
                $('#divCompanionAdd_' + 3 + '_' + 3).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_3__DatiAddizionaliAccompagnatore_3___data" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[3]._data" type="date" value="" />');
            }
        }
        if (tipodatoAddizionale == 3)
        {
            $('#divCompanionAdd_' + 3 + '_' + 3).append($('<select/>', { id: "ddlsAcc_3" + '_3', 'data-index': 3, onchange:"ControloSelect(this)"  }));
            $('#ddlsAcc_3' +'_3').append($('<option/>', {
            value: 0,
            text: " " }));
            $('#ifMultiple').append('<input data-val="true" data-val-number="The field _idSelezionato must be a number." data-val-required="The _idSelezionato field is required." id="hiddenSelezionatoAcc_3_3" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[3]._idSelezionato" type="hidden" value="0" />');
            getDropDownListsValues($('#hiddenIdDatoADDAcc_' +3).val(), $('#ddlsAcc_3' + '_3'), 0);
        }

    $('#divCompanionAdd_' + 3 + '_' + 3).append('<input data-val="true" data-val-required="The _Obbligatorio field is required." id="Accompagnatori_3__DatiAddizionaliAccompagnatore_3___Obbligatorio" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[3]._Obbligatorio" type="hidden" value="True" />');

    $('#divCompanionAdd_' + 3 + '_' + 3).append('<div><p><span class="field-validation-valid" data-valmsg-for="addizionale_3_3" data-valmsg-replace="true" style="color:red"></span></p> <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_3_3" data-valmsg-replace="true" style="color:red"></span> </p></div>');

    
        var tipodatoAddizionale = $('#hiddenCodDatoAddAcc_' + 4).val();
        RegEx = true;
        MaxLength = false;
        if (tipodatoAddizionale == 2) {
            if (RegEx == false && MaxLength == false) {
                $('#divCompanionAdd_' + 3 + '_' + 4).append('<input id="Accompagnatori_3__DatiAddizionaliAccompagnatore_4___testo" maxlength="100" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[4]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />');
            }
            else if (RegEx == false && MaxLength != false) {
                $('#divCompanionAdd_' + 3 + '_' + 4).append('<input id="Accompagnatori_3__DatiAddizionaliAccompagnatore_4___testo" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[4]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />');
            }
            else if (RegEx != false && MaxLength == false) {
                $('#divCompanionAdd_' + 3 + '_' + 4).append('<input id="Accompagnatori_3__DatiAddizionaliAccompagnatore_4___testo" maxlength="100" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[4]._testo" onchange="ControlloTesto(this)" type="text" value="" />');
            }
            else if (RegEx != false && MaxLength != false) {
                $('#divCompanionAdd_' + 3 + '_' + 4).append('<input id="Accompagnatori_3__DatiAddizionaliAccompagnatore_4___testo" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[4]._testo" onchange="ControlloTesto(this)" type="text" value="" />');
            }
        }
        if (tipodatoAddizionale == 1) {
            if (RegEx != false && MaxLength != false) {
                $('#divCompanionAdd_' + 3 + '_' + 4).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_3__DatiAddizionaliAccompagnatore_4___data" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[4]._data" type="date" value="" />');
            }
            else if (RegEx != false && MaxLength == false) {
                $('#divCompanionAdd_' + 3 + '_' + 4).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_3__DatiAddizionaliAccompagnatore_4___data" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[4]._data" type="date" value="" />');
            }
            else if (RegEx == false && MaxLength != false) {
                $('#divCompanionAdd_' + 3 + '_' + 4).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_3__DatiAddizionaliAccompagnatore_4___data" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[4]._data" type="date" value="" />');
            }
            else if (RegEx == false && MaxLength == false) {
                $('#divCompanionAdd_' + 3 + '_' + 4).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_3__DatiAddizionaliAccompagnatore_4___data" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[4]._data" type="date" value="" />');
            }
        }
        if (tipodatoAddizionale == 3)
        {
            $('#divCompanionAdd_' + 3 + '_' + 4).append($('<select/>', { id: "ddlsAcc_3" + '_4', 'data-index': 4, onchange:"ControloSelect(this)"  }));
            $('#ddlsAcc_3' +'_4').append($('<option/>', {
            value: 0,
            text: " " }));
            $('#ifMultiple').append('<input data-val="true" data-val-number="The field _idSelezionato must be a number." data-val-required="The _idSelezionato field is required." id="hiddenSelezionatoAcc_3_4" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[4]._idSelezionato" type="hidden" value="0" />');
            getDropDownListsValues($('#hiddenIdDatoADDAcc_' +4).val(), $('#ddlsAcc_3' + '_4'), 0);
        }

    $('#divCompanionAdd_' + 3 + '_' + 4).append('<input data-val="true" data-val-required="The _Obbligatorio field is required." id="Accompagnatori_3__DatiAddizionaliAccompagnatore_4___Obbligatorio" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[4]._Obbligatorio" type="hidden" value="True" />');

    $('#divCompanionAdd_' + 3 + '_' + 4).append('<div><p><span class="field-validation-valid" data-valmsg-for="addizionale_3_4" data-valmsg-replace="true" style="color:red"></span></p> <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_3_4" data-valmsg-replace="true" style="color:red"></span> </p></div>');

    
        var tipodatoAddizionale = $('#hiddenCodDatoAddAcc_' + 5).val();
        RegEx = true;
        MaxLength = false;
        if (tipodatoAddizionale == 2) {
            if (RegEx == false && MaxLength == false) {
                $('#divCompanionAdd_' + 3 + '_' + 5).append('<input id="Accompagnatori_3__DatiAddizionaliAccompagnatore_5___testo" maxlength="100" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[5]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />');
            }
            else if (RegEx == false && MaxLength != false) {
                $('#divCompanionAdd_' + 3 + '_' + 5).append('<input id="Accompagnatori_3__DatiAddizionaliAccompagnatore_5___testo" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[5]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />');
            }
            else if (RegEx != false && MaxLength == false) {
                $('#divCompanionAdd_' + 3 + '_' + 5).append('<input id="Accompagnatori_3__DatiAddizionaliAccompagnatore_5___testo" maxlength="100" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[5]._testo" onchange="ControlloTesto(this)" type="text" value="" />');
            }
            else if (RegEx != false && MaxLength != false) {
                $('#divCompanionAdd_' + 3 + '_' + 5).append('<input id="Accompagnatori_3__DatiAddizionaliAccompagnatore_5___testo" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[5]._testo" onchange="ControlloTesto(this)" type="text" value="" />');
            }
        }
        if (tipodatoAddizionale == 1) {
            if (RegEx != false && MaxLength != false) {
                $('#divCompanionAdd_' + 3 + '_' + 5).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_3__DatiAddizionaliAccompagnatore_5___data" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[5]._data" type="date" value="" />');
            }
            else if (RegEx != false && MaxLength == false) {
                $('#divCompanionAdd_' + 3 + '_' + 5).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_3__DatiAddizionaliAccompagnatore_5___data" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[5]._data" type="date" value="" />');
            }
            else if (RegEx == false && MaxLength != false) {
                $('#divCompanionAdd_' + 3 + '_' + 5).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_3__DatiAddizionaliAccompagnatore_5___data" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[5]._data" type="date" value="" />');
            }
            else if (RegEx == false && MaxLength == false) {
                $('#divCompanionAdd_' + 3 + '_' + 5).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_3__DatiAddizionaliAccompagnatore_5___data" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[5]._data" type="date" value="" />');
            }
        }
        if (tipodatoAddizionale == 3)
        {
            $('#divCompanionAdd_' + 3 + '_' + 5).append($('<select/>', { id: "ddlsAcc_3" + '_5', 'data-index': 5, onchange:"ControloSelect(this)"  }));
            $('#ddlsAcc_3' +'_5').append($('<option/>', {
            value: 0,
            text: " " }));
            $('#ifMultiple').append('<input data-val="true" data-val-number="The field _idSelezionato must be a number." data-val-required="The _idSelezionato field is required." id="hiddenSelezionatoAcc_3_5" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[5]._idSelezionato" type="hidden" value="0" />');
            getDropDownListsValues($('#hiddenIdDatoADDAcc_' +5).val(), $('#ddlsAcc_3' + '_5'), 0);
        }

    $('#divCompanionAdd_' + 3 + '_' + 5).append('<input data-val="true" data-val-required="The _Obbligatorio field is required." id="Accompagnatori_3__DatiAddizionaliAccompagnatore_5___Obbligatorio" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[5]._Obbligatorio" type="hidden" value="True" />');

    $('#divCompanionAdd_' + 3 + '_' + 5).append('<div><p><span class="field-validation-valid" data-valmsg-for="addizionale_3_5" data-valmsg-replace="true" style="color:red"></span></p> <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_3_5" data-valmsg-replace="true" style="color:red"></span> </p></div>');

    
        var tipodatoAddizionale = $('#hiddenCodDatoAddAcc_' + 6).val();
        RegEx = true;
        MaxLength = false;
        if (tipodatoAddizionale == 2) {
            if (RegEx == false && MaxLength == false) {
                $('#divCompanionAdd_' + 3 + '_' + 6).append('<input id="Accompagnatori_3__DatiAddizionaliAccompagnatore_6___testo" maxlength="100" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[6]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />');
            }
            else if (RegEx == false && MaxLength != false) {
                $('#divCompanionAdd_' + 3 + '_' + 6).append('<input id="Accompagnatori_3__DatiAddizionaliAccompagnatore_6___testo" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[6]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />');
            }
            else if (RegEx != false && MaxLength == false) {
                $('#divCompanionAdd_' + 3 + '_' + 6).append('<input id="Accompagnatori_3__DatiAddizionaliAccompagnatore_6___testo" maxlength="100" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[6]._testo" onchange="ControlloTesto(this)" type="text" value="" />');
            }
            else if (RegEx != false && MaxLength != false) {
                $('#divCompanionAdd_' + 3 + '_' + 6).append('<input id="Accompagnatori_3__DatiAddizionaliAccompagnatore_6___testo" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[6]._testo" onchange="ControlloTesto(this)" type="text" value="" />');
            }
        }
        if (tipodatoAddizionale == 1) {
            if (RegEx != false && MaxLength != false) {
                $('#divCompanionAdd_' + 3 + '_' + 6).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_3__DatiAddizionaliAccompagnatore_6___data" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[6]._data" type="date" value="" />');
            }
            else if (RegEx != false && MaxLength == false) {
                $('#divCompanionAdd_' + 3 + '_' + 6).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_3__DatiAddizionaliAccompagnatore_6___data" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[6]._data" type="date" value="" />');
            }
            else if (RegEx == false && MaxLength != false) {
                $('#divCompanionAdd_' + 3 + '_' + 6).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_3__DatiAddizionaliAccompagnatore_6___data" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[6]._data" type="date" value="" />');
            }
            else if (RegEx == false && MaxLength == false) {
                $('#divCompanionAdd_' + 3 + '_' + 6).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_3__DatiAddizionaliAccompagnatore_6___data" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[6]._data" type="date" value="" />');
            }
        }
        if (tipodatoAddizionale == 3)
        {
            $('#divCompanionAdd_' + 3 + '_' + 6).append($('<select/>', { id: "ddlsAcc_3" + '_6', 'data-index': 6, onchange:"ControloSelect(this)"  }));
            $('#ddlsAcc_3' +'_6').append($('<option/>', {
            value: 0,
            text: " " }));
            $('#ifMultiple').append('<input data-val="true" data-val-number="The field _idSelezionato must be a number." data-val-required="The _idSelezionato field is required." id="hiddenSelezionatoAcc_3_6" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[6]._idSelezionato" type="hidden" value="0" />');
            getDropDownListsValues($('#hiddenIdDatoADDAcc_' +6).val(), $('#ddlsAcc_3' + '_6'), 0);
        }

    $('#divCompanionAdd_' + 3 + '_' + 6).append('<input data-val="true" data-val-required="The _Obbligatorio field is required." id="Accompagnatori_3__DatiAddizionaliAccompagnatore_6___Obbligatorio" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[6]._Obbligatorio" type="hidden" value="True" />');

    $('#divCompanionAdd_' + 3 + '_' + 6).append('<div><p><span class="field-validation-valid" data-valmsg-for="addizionale_3_6" data-valmsg-replace="true" style="color:red"></span></p> <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_3_6" data-valmsg-replace="true" style="color:red"></span> </p></div>');

    
        var tipodatoAddizionale = $('#hiddenCodDatoAddAcc_' + 7).val();
        RegEx = true;
        MaxLength = false;
        if (tipodatoAddizionale == 2) {
            if (RegEx == false && MaxLength == false) {
                $('#divCompanionAdd_' + 3 + '_' + 7).append('<input id="Accompagnatori_3__DatiAddizionaliAccompagnatore_7___testo" maxlength="100" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[7]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />');
            }
            else if (RegEx == false && MaxLength != false) {
                $('#divCompanionAdd_' + 3 + '_' + 7).append('<input id="Accompagnatori_3__DatiAddizionaliAccompagnatore_7___testo" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[7]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />');
            }
            else if (RegEx != false && MaxLength == false) {
                $('#divCompanionAdd_' + 3 + '_' + 7).append('<input id="Accompagnatori_3__DatiAddizionaliAccompagnatore_7___testo" maxlength="100" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[7]._testo" onchange="ControlloTesto(this)" type="text" value="" />');
            }
            else if (RegEx != false && MaxLength != false) {
                $('#divCompanionAdd_' + 3 + '_' + 7).append('<input id="Accompagnatori_3__DatiAddizionaliAccompagnatore_7___testo" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[7]._testo" onchange="ControlloTesto(this)" type="text" value="" />');
            }
        }
        if (tipodatoAddizionale == 1) {
            if (RegEx != false && MaxLength != false) {
                $('#divCompanionAdd_' + 3 + '_' + 7).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_3__DatiAddizionaliAccompagnatore_7___data" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[7]._data" type="date" value="" />');
            }
            else if (RegEx != false && MaxLength == false) {
                $('#divCompanionAdd_' + 3 + '_' + 7).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_3__DatiAddizionaliAccompagnatore_7___data" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[7]._data" type="date" value="" />');
            }
            else if (RegEx == false && MaxLength != false) {
                $('#divCompanionAdd_' + 3 + '_' + 7).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_3__DatiAddizionaliAccompagnatore_7___data" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[7]._data" type="date" value="" />');
            }
            else if (RegEx == false && MaxLength == false) {
                $('#divCompanionAdd_' + 3 + '_' + 7).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_3__DatiAddizionaliAccompagnatore_7___data" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[7]._data" type="date" value="" />');
            }
        }
        if (tipodatoAddizionale == 3)
        {
            $('#divCompanionAdd_' + 3 + '_' + 7).append($('<select/>', { id: "ddlsAcc_3" + '_7', 'data-index': 7, onchange:"ControloSelect(this)"  }));
            $('#ddlsAcc_3' +'_7').append($('<option/>', {
            value: 0,
            text: " " }));
            $('#ifMultiple').append('<input data-val="true" data-val-number="The field _idSelezionato must be a number." data-val-required="The _idSelezionato field is required." id="hiddenSelezionatoAcc_3_7" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[7]._idSelezionato" type="hidden" value="0" />');
            getDropDownListsValues($('#hiddenIdDatoADDAcc_' +7).val(), $('#ddlsAcc_3' + '_7'), 0);
        }

    $('#divCompanionAdd_' + 3 + '_' + 7).append('<input data-val="true" data-val-required="The _Obbligatorio field is required." id="Accompagnatori_3__DatiAddizionaliAccompagnatore_7___Obbligatorio" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[7]._Obbligatorio" type="hidden" value="True" />');

    $('#divCompanionAdd_' + 3 + '_' + 7).append('<div><p><span class="field-validation-valid" data-valmsg-for="addizionale_3_7" data-valmsg-replace="true" style="color:red"></span></p> <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_3_7" data-valmsg-replace="true" style="color:red"></span> </p></div>');

    
        var tipodatoAddizionale = $('#hiddenCodDatoAddAcc_' + 8).val();
        RegEx = true;
        MaxLength = false;
        if (tipodatoAddizionale == 2) {
            if (RegEx == false && MaxLength == false) {
                $('#divCompanionAdd_' + 3 + '_' + 8).append('<input id="Accompagnatori_3__DatiAddizionaliAccompagnatore_8___testo" maxlength="100" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[8]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />');
            }
            else if (RegEx == false && MaxLength != false) {
                $('#divCompanionAdd_' + 3 + '_' + 8).append('<input id="Accompagnatori_3__DatiAddizionaliAccompagnatore_8___testo" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[8]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />');
            }
            else if (RegEx != false && MaxLength == false) {
                $('#divCompanionAdd_' + 3 + '_' + 8).append('<input id="Accompagnatori_3__DatiAddizionaliAccompagnatore_8___testo" maxlength="100" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[8]._testo" onchange="ControlloTesto(this)" type="text" value="" />');
            }
            else if (RegEx != false && MaxLength != false) {
                $('#divCompanionAdd_' + 3 + '_' + 8).append('<input id="Accompagnatori_3__DatiAddizionaliAccompagnatore_8___testo" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[8]._testo" onchange="ControlloTesto(this)" type="text" value="" />');
            }
        }
        if (tipodatoAddizionale == 1) {
            if (RegEx != false && MaxLength != false) {
                $('#divCompanionAdd_' + 3 + '_' + 8).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_3__DatiAddizionaliAccompagnatore_8___data" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[8]._data" type="date" value="" />');
            }
            else if (RegEx != false && MaxLength == false) {
                $('#divCompanionAdd_' + 3 + '_' + 8).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_3__DatiAddizionaliAccompagnatore_8___data" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[8]._data" type="date" value="" />');
            }
            else if (RegEx == false && MaxLength != false) {
                $('#divCompanionAdd_' + 3 + '_' + 8).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_3__DatiAddizionaliAccompagnatore_8___data" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[8]._data" type="date" value="" />');
            }
            else if (RegEx == false && MaxLength == false) {
                $('#divCompanionAdd_' + 3 + '_' + 8).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_3__DatiAddizionaliAccompagnatore_8___data" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[8]._data" type="date" value="" />');
            }
        }
        if (tipodatoAddizionale == 3)
        {
            $('#divCompanionAdd_' + 3 + '_' + 8).append($('<select/>', { id: "ddlsAcc_3" + '_8', 'data-index': 8, onchange:"ControloSelect(this)"  }));
            $('#ddlsAcc_3' +'_8').append($('<option/>', {
            value: 0,
            text: " " }));
            $('#ifMultiple').append('<input data-val="true" data-val-number="The field _idSelezionato must be a number." data-val-required="The _idSelezionato field is required." id="hiddenSelezionatoAcc_3_8" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[8]._idSelezionato" type="hidden" value="0" />');
            getDropDownListsValues($('#hiddenIdDatoADDAcc_' +8).val(), $('#ddlsAcc_3' + '_8'), 0);
        }

    $('#divCompanionAdd_' + 3 + '_' + 8).append('<input data-val="true" data-val-required="The _Obbligatorio field is required." id="Accompagnatori_3__DatiAddizionaliAccompagnatore_8___Obbligatorio" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[8]._Obbligatorio" type="hidden" value="True" />');

    $('#divCompanionAdd_' + 3 + '_' + 8).append('<div><p><span class="field-validation-valid" data-valmsg-for="addizionale_3_8" data-valmsg-replace="true" style="color:red"></span></p> <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_3_8" data-valmsg-replace="true" style="color:red"></span> </p></div>');

    
        var tipodatoAddizionale = $('#hiddenCodDatoAddAcc_' + 0).val();
        RegEx = true;
        MaxLength = false;
        if (tipodatoAddizionale == 2) {
            if (RegEx == false && MaxLength == false) {
                $('#divCompanionAdd_' + 4 + '_' + 0).append('<input id="Accompagnatori_4__DatiAddizionaliAccompagnatore_0___testo" maxlength="100" name="Accompagnatori[4].DatiAddizionaliAccompagnatore[0]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />');
            }
            else if (RegEx == false && MaxLength != false) {
                $('#divCompanionAdd_' + 4 + '_' + 0).append('<input id="Accompagnatori_4__DatiAddizionaliAccompagnatore_0___testo" name="Accompagnatori[4].DatiAddizionaliAccompagnatore[0]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />');
            }
            else if (RegEx != false && MaxLength == false) {
                $('#divCompanionAdd_' + 4 + '_' + 0).append('<input id="Accompagnatori_4__DatiAddizionaliAccompagnatore_0___testo" maxlength="100" name="Accompagnatori[4].DatiAddizionaliAccompagnatore[0]._testo" onchange="ControlloTesto(this)" type="text" value="" />');
            }
            else if (RegEx != false && MaxLength != false) {
                $('#divCompanionAdd_' + 4 + '_' + 0).append('<input id="Accompagnatori_4__DatiAddizionaliAccompagnatore_0___testo" name="Accompagnatori[4].DatiAddizionaliAccompagnatore[0]._testo" onchange="ControlloTesto(this)" type="text" value="" />');
            }
        }
        if (tipodatoAddizionale == 1) {
            if (RegEx != false && MaxLength != false) {
                $('#divCompanionAdd_' + 4 + '_' + 0).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_4__DatiAddizionaliAccompagnatore_0___data" name="Accompagnatori[4].DatiAddizionaliAccompagnatore[0]._data" type="date" value="" />');
            }
            else if (RegEx != false && MaxLength == false) {
                $('#divCompanionAdd_' + 4 + '_' + 0).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_4__DatiAddizionaliAccompagnatore_0___data" name="Accompagnatori[4].DatiAddizionaliAccompagnatore[0]._data" type="date" value="" />');
            }
            else if (RegEx == false && MaxLength != false) {
                $('#divCompanionAdd_' + 4 + '_' + 0).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_4__DatiAddizionaliAccompagnatore_0___data" name="Accompagnatori[4].DatiAddizionaliAccompagnatore[0]._data" type="date" value="" />');
            }
            else if (RegEx == false && MaxLength == false) {
                $('#divCompanionAdd_' + 4 + '_' + 0).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_4__DatiAddizionaliAccompagnatore_0___data" name="Accompagnatori[4].DatiAddizionaliAccompagnatore[0]._data" type="date" value="" />');
            }
        }
        if (tipodatoAddizionale == 3)
        {
            $('#divCompanionAdd_' + 4 + '_' + 0).append($('<select/>', { id: "ddlsAcc_4" + '_0', 'data-index': 0, onchange:"ControloSelect(this)"  }));
            $('#ddlsAcc_4' +'_0').append($('<option/>', {
            value: 0,
            text: " " }));
            $('#ifMultiple').append('<input data-val="true" data-val-number="The field _idSelezionato must be a number." data-val-required="The _idSelezionato field is required." id="hiddenSelezionatoAcc_4_0" name="Accompagnatori[4].DatiAddizionaliAccompagnatore[0]._idSelezionato" type="hidden" value="0" />');
            getDropDownListsValues($('#hiddenIdDatoADDAcc_' +0).val(), $('#ddlsAcc_4' + '_0'), 0);
        }

    $('#divCompanionAdd_' + 4 + '_' + 0).append('<input data-val="true" data-val-required="The _Obbligatorio field is required." id="Accompagnatori_4__DatiAddizionaliAccompagnatore_0___Obbligatorio" name="Accompagnatori[4].DatiAddizionaliAccompagnatore[0]._Obbligatorio" type="hidden" value="True" />');

    $('#divCompanionAdd_' + 4 + '_' + 0).append('<div><p><span class="field-validation-valid" data-valmsg-for="addizionale_4_0" data-valmsg-replace="true" style="color:red"></span></p> <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_4_0" data-valmsg-replace="true" style="color:red"></span> </p></div>');

    
        var tipodatoAddizionale = $('#hiddenCodDatoAddAcc_' + 1).val();
        RegEx = true;
        MaxLength = false;
        if (tipodatoAddizionale == 2) {
            if (RegEx == false && MaxLength == false) {
                $('#divCompanionAdd_' + 4 + '_' + 1).append('<input id="Accompagnatori_4__DatiAddizionaliAccompagnatore_1___testo" maxlength="100" name="Accompagnatori[4].DatiAddizionaliAccompagnatore[1]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />');
            }
            else if (RegEx == false && MaxLength != false) {
                $('#divCompanionAdd_' + 4 + '_' + 1).append('<input id="Accompagnatori_4__DatiAddizionaliAccompagnatore_1___testo" name="Accompagnatori[4].DatiAddizionaliAccompagnatore[1]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />');
            }
            else if (RegEx != false && MaxLength == false) {
                $('#divCompanionAdd_' + 4 + '_' + 1).append('<input id="Accompagnatori_4__DatiAddizionaliAccompagnatore_1___testo" maxlength="100" name="Accompagnatori[4].DatiAddizionaliAccompagnatore[1]._testo" onchange="ControlloTesto(this)" type="text" value="" />');
            }
            else if (RegEx != false && MaxLength != false) {
                $('#divCompanionAdd_' + 4 + '_' + 1).append('<input id="Accompagnatori_4__DatiAddizionaliAccompagnatore_1___testo" name="Accompagnatori[4].DatiAddizionaliAccompagnatore[1]._testo" onchange="ControlloTesto(this)" type="text" value="" />');
            }
        }
        if (tipodatoAddizionale == 1) {
            if (RegEx != false && MaxLength != false) {
                $('#divCompanionAdd_' + 4 + '_' + 1).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_4__DatiAddizionaliAccompagnatore_1___data" name="Accompagnatori[4].DatiAddizionaliAccompagnatore[1]._data" type="date" value="" />');
            }
            else if (RegEx != false && MaxLength == false) {
                $('#divCompanionAdd_' + 4 + '_' + 1).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_4__DatiAddizionaliAccompagnatore_1___data" name="Accompagnatori[4].DatiAddizionaliAccompagnatore[1]._data" type="date" value="" />');
            }
            else if (RegEx == false && MaxLength != false) {
                $('#divCompanionAdd_' + 4 + '_' + 1).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_4__DatiAddizionaliAccompagnatore_1___data" name="Accompagnatori[4].DatiAddizionaliAccompagnatore[1]._data" type="date" value="" />');
            }
            else if (RegEx == false && MaxLength == false) {
                $('#divCompanionAdd_' + 4 + '_' + 1).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_4__DatiAddizionaliAccompagnatore_1___data" name="Accompagnatori[4].DatiAddizionaliAccompagnatore[1]._data" type="date" value="" />');
            }
        }
        if (tipodatoAddizionale == 3)
        {
            $('#divCompanionAdd_' + 4 + '_' + 1).append($('<select/>', { id: "ddlsAcc_4" + '_1', 'data-index': 1, onchange:"ControloSelect(this)"  }));
            $('#ddlsAcc_4' +'_1').append($('<option/>', {
            value: 0,
            text: " " }));
            $('#ifMultiple').append('<input data-val="true" data-val-number="The field _idSelezionato must be a number." data-val-required="The _idSelezionato field is required." id="hiddenSelezionatoAcc_4_1" name="Accompagnatori[4].DatiAddizionaliAccompagnatore[1]._idSelezionato" type="hidden" value="0" />');
            getDropDownListsValues($('#hiddenIdDatoADDAcc_' +1).val(), $('#ddlsAcc_4' + '_1'), 0);
        }

    $('#divCompanionAdd_' + 4 + '_' + 1).append('<input data-val="true" data-val-required="The _Obbligatorio field is required." id="Accompagnatori_4__DatiAddizionaliAccompagnatore_1___Obbligatorio" name="Accompagnatori[4].DatiAddizionaliAccompagnatore[1]._Obbligatorio" type="hidden" value="True" />');

    $('#divCompanionAdd_' + 4 + '_' + 1).append('<div><p><span class="field-validation-valid" data-valmsg-for="addizionale_4_1" data-valmsg-replace="true" style="color:red"></span></p> <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_4_1" data-valmsg-replace="true" style="color:red"></span> </p></div>');

    
        var tipodatoAddizionale = $('#hiddenCodDatoAddAcc_' + 2).val();
        RegEx = true;
        MaxLength = false;
        if (tipodatoAddizionale == 2) {
            if (RegEx == false && MaxLength == false) {
                $('#divCompanionAdd_' + 4 + '_' + 2).append('<input id="Accompagnatori_4__DatiAddizionaliAccompagnatore_2___testo" maxlength="100" name="Accompagnatori[4].DatiAddizionaliAccompagnatore[2]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />');
            }
            else if (RegEx == false && MaxLength != false) {
                $('#divCompanionAdd_' + 4 + '_' + 2).append('<input id="Accompagnatori_4__DatiAddizionaliAccompagnatore_2___testo" name="Accompagnatori[4].DatiAddizionaliAccompagnatore[2]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />');
            }
            else if (RegEx != false && MaxLength == false) {
                $('#divCompanionAdd_' + 4 + '_' + 2).append('<input id="Accompagnatori_4__DatiAddizionaliAccompagnatore_2___testo" maxlength="100" name="Accompagnatori[4].DatiAddizionaliAccompagnatore[2]._testo" onchange="ControlloTesto(this)" type="text" value="" />');
            }
            else if (RegEx != false && MaxLength != false) {
                $('#divCompanionAdd_' + 4 + '_' + 2).append('<input id="Accompagnatori_4__DatiAddizionaliAccompagnatore_2___testo" name="Accompagnatori[4].DatiAddizionaliAccompagnatore[2]._testo" onchange="ControlloTesto(this)" type="text" value="" />');
            }
        }
        if (tipodatoAddizionale == 1) {
            if (RegEx != false && MaxLength != false) {
                $('#divCompanionAdd_' + 4 + '_' + 2).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_4__DatiAddizionaliAccompagnatore_2___data" name="Accompagnatori[4].DatiAddizionaliAccompagnatore[2]._data" type="date" value="" />');
            }
            else if (RegEx != false && MaxLength == false) {
                $('#divCompanionAdd_' + 4 + '_' + 2).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_4__DatiAddizionaliAccompagnatore_2___data" name="Accompagnatori[4].DatiAddizionaliAccompagnatore[2]._data" type="date" value="" />');
            }
            else if (RegEx == false && MaxLength != false) {
                $('#divCompanionAdd_' + 4 + '_' + 2).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_4__DatiAddizionaliAccompagnatore_2___data" name="Accompagnatori[4].DatiAddizionaliAccompagnatore[2]._data" type="date" value="" />');
            }
            else if (RegEx == false && MaxLength == false) {
                $('#divCompanionAdd_' + 4 + '_' + 2).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_4__DatiAddizionaliAccompagnatore_2___data" name="Accompagnatori[4].DatiAddizionaliAccompagnatore[2]._data" type="date" value="" />');
            }
        }
        if (tipodatoAddizionale == 3)
        {
            $('#divCompanionAdd_' + 4 + '_' + 2).append($('<select/>', { id: "ddlsAcc_4" + '_2', 'data-index': 2, onchange:"ControloSelect(this)"  }));
            $('#ddlsAcc_4' +'_2').append($('<option/>', {
            value: 0,
            text: " " }));
            $('#ifMultiple').append('<input data-val="true" data-val-number="The field _idSelezionato must be a number." data-val-required="The _idSelezionato field is required." id="hiddenSelezionatoAcc_4_2" name="Accompagnatori[4].DatiAddizionaliAccompagnatore[2]._idSelezionato" type="hidden" value="0" />');
            getDropDownListsValues($('#hiddenIdDatoADDAcc_' +2).val(), $('#ddlsAcc_4' + '_2'), 0);
        }

    $('#divCompanionAdd_' + 4 + '_' + 2).append('<input data-val="true" data-val-required="The _Obbligatorio field is required." id="Accompagnatori_4__DatiAddizionaliAccompagnatore_2___Obbligatorio" name="Accompagnatori[4].DatiAddizionaliAccompagnatore[2]._Obbligatorio" type="hidden" value="True" />');

    $('#divCompanionAdd_' + 4 + '_' + 2).append('<div><p><span class="field-validation-valid" data-valmsg-for="addizionale_4_2" data-valmsg-replace="true" style="color:red"></span></p> <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_4_2" data-valmsg-replace="true" style="color:red"></span> </p></div>');

    
        var tipodatoAddizionale = $('#hiddenCodDatoAddAcc_' + 3).val();
        RegEx = true;
        MaxLength = false;
        if (tipodatoAddizionale == 2) {
            if (RegEx == false && MaxLength == false) {
                $('#divCompanionAdd_' + 4 + '_' + 3).append('<input id="Accompagnatori_4__DatiAddizionaliAccompagnatore_3___testo" maxlength="100" name="Accompagnatori[4].DatiAddizionaliAccompagnatore[3]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />');
            }
            else if (RegEx == false && MaxLength != false) {
                $('#divCompanionAdd_' + 4 + '_' + 3).append('<input id="Accompagnatori_4__DatiAddizionaliAccompagnatore_3___testo" name="Accompagnatori[4].DatiAddizionaliAccompagnatore[3]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />');
            }
            else if (RegEx != false && MaxLength == false) {
                $('#divCompanionAdd_' + 4 + '_' + 3).append('<input id="Accompagnatori_4__DatiAddizionaliAccompagnatore_3___testo" maxlength="100" name="Accompagnatori[4].DatiAddizionaliAccompagnatore[3]._testo" onchange="ControlloTesto(this)" type="text" value="" />');
            }
            else if (RegEx != false && MaxLength != false) {
                $('#divCompanionAdd_' + 4 + '_' + 3).append('<input id="Accompagnatori_4__DatiAddizionaliAccompagnatore_3___testo" name="Accompagnatori[4].DatiAddizionaliAccompagnatore[3]._testo" onchange="ControlloTesto(this)" type="text" value="" />');
            }
        }
        if (tipodatoAddizionale == 1) {
            if (RegEx != false && MaxLength != false) {
                $('#divCompanionAdd_' + 4 + '_' + 3).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_4__DatiAddizionaliAccompagnatore_3___data" name="Accompagnatori[4].DatiAddizionaliAccompagnatore[3]._data" type="date" value="" />');
            }
            else if (RegEx != false && MaxLength == false) {
                $('#divCompanionAdd_' + 4 + '_' + 3).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_4__DatiAddizionaliAccompagnatore_3___data" name="Accompagnatori[4].DatiAddizionaliAccompagnatore[3]._data" type="date" value="" />');
            }
            else if (RegEx == false && MaxLength != false) {
                $('#divCompanionAdd_' + 4 + '_' + 3).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_4__DatiAddizionaliAccompagnatore_3___data" name="Accompagnatori[4].DatiAddizionaliAccompagnatore[3]._data" type="date" value="" />');
            }
            else if (RegEx == false && MaxLength == false) {
                $('#divCompanionAdd_' + 4 + '_' + 3).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_4__DatiAddizionaliAccompagnatore_3___data" name="Accompagnatori[4].DatiAddizionaliAccompagnatore[3]._data" type="date" value="" />');
            }
        }
        if (tipodatoAddizionale == 3)
        {
            $('#divCompanionAdd_' + 4 + '_' + 3).append($('<select/>', { id: "ddlsAcc_4" + '_3', 'data-index': 3, onchange:"ControloSelect(this)"  }));
            $('#ddlsAcc_4' +'_3').append($('<option/>', {
            value: 0,
            text: " " }));
            $('#ifMultiple').append('<input data-val="true" data-val-number="The field _idSelezionato must be a number." data-val-required="The _idSelezionato field is required." id="hiddenSelezionatoAcc_4_3" name="Accompagnatori[4].DatiAddizionaliAccompagnatore[3]._idSelezionato" type="hidden" value="0" />');
            getDropDownListsValues($('#hiddenIdDatoADDAcc_' +3).val(), $('#ddlsAcc_4' + '_3'), 0);
        }

    $('#divCompanionAdd_' + 4 + '_' + 3).append('<input data-val="true" data-val-required="The _Obbligatorio field is required." id="Accompagnatori_4__DatiAddizionaliAccompagnatore_3___Obbligatorio" name="Accompagnatori[4].DatiAddizionaliAccompagnatore[3]._Obbligatorio" type="hidden" value="True" />');

    $('#divCompanionAdd_' + 4 + '_' + 3).append('<div><p><span class="field-validation-valid" data-valmsg-for="addizionale_4_3" data-valmsg-replace="true" style="color:red"></span></p> <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_4_3" data-valmsg-replace="true" style="color:red"></span> </p></div>');

    
        var tipodatoAddizionale = $('#hiddenCodDatoAddAcc_' + 4).val();
        RegEx = true;
        MaxLength = false;
        if (tipodatoAddizionale == 2) {
            if (RegEx == false && MaxLength == false) {
                $('#divCompanionAdd_' + 4 + '_' + 4).append('<input id="Accompagnatori_4__DatiAddizionaliAccompagnatore_4___testo" maxlength="100" name="Accompagnatori[4].DatiAddizionaliAccompagnatore[4]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />');
            }
            else if (RegEx == false && MaxLength != false) {
                $('#divCompanionAdd_' + 4 + '_' + 4).append('<input id="Accompagnatori_4__DatiAddizionaliAccompagnatore_4___testo" name="Accompagnatori[4].DatiAddizionaliAccompagnatore[4]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />');
            }
            else if (RegEx != false && MaxLength == false) {
                $('#divCompanionAdd_' + 4 + '_' + 4).append('<input id="Accompagnatori_4__DatiAddizionaliAccompagnatore_4___testo" maxlength="100" name="Accompagnatori[4].DatiAddizionaliAccompagnatore[4]._testo" onchange="ControlloTesto(this)" type="text" value="" />');
            }
            else if (RegEx != false && MaxLength != false) {
                $('#divCompanionAdd_' + 4 + '_' + 4).append('<input id="Accompagnatori_4__DatiAddizionaliAccompagnatore_4___testo" name="Accompagnatori[4].DatiAddizionaliAccompagnatore[4]._testo" onchange="ControlloTesto(this)" type="text" value="" />');
            }
        }
        if (tipodatoAddizionale == 1) {
            if (RegEx != false && MaxLength != false) {
                $('#divCompanionAdd_' + 4 + '_' + 4).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_4__DatiAddizionaliAccompagnatore_4___data" name="Accompagnatori[4].DatiAddizionaliAccompagnatore[4]._data" type="date" value="" />');
            }
            else if (RegEx != false && MaxLength == false) {
                $('#divCompanionAdd_' + 4 + '_' + 4).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_4__DatiAddizionaliAccompagnatore_4___data" name="Accompagnatori[4].DatiAddizionaliAccompagnatore[4]._data" type="date" value="" />');
            }
            else if (RegEx == false && MaxLength != false) {
                $('#divCompanionAdd_' + 4 + '_' + 4).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_4__DatiAddizionaliAccompagnatore_4___data" name="Accompagnatori[4].DatiAddizionaliAccompagnatore[4]._data" type="date" value="" />');
            }
            else if (RegEx == false && MaxLength == false) {
                $('#divCompanionAdd_' + 4 + '_' + 4).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_4__DatiAddizionaliAccompagnatore_4___data" name="Accompagnatori[4].DatiAddizionaliAccompagnatore[4]._data" type="date" value="" />');
            }
        }
        if (tipodatoAddizionale == 3)
        {
            $('#divCompanionAdd_' + 4 + '_' + 4).append($('<select/>', { id: "ddlsAcc_4" + '_4', 'data-index': 4, onchange:"ControloSelect(this)"  }));
            $('#ddlsAcc_4' +'_4').append($('<option/>', {
            value: 0,
            text: " " }));
            $('#ifMultiple').append('<input data-val="true" data-val-number="The field _idSelezionato must be a number." data-val-required="The _idSelezionato field is required." id="hiddenSelezionatoAcc_4_4" name="Accompagnatori[4].DatiAddizionaliAccompagnatore[4]._idSelezionato" type="hidden" value="0" />');
            getDropDownListsValues($('#hiddenIdDatoADDAcc_' +4).val(), $('#ddlsAcc_4' + '_4'), 0);
        }

    $('#divCompanionAdd_' + 4 + '_' + 4).append('<input data-val="true" data-val-required="The _Obbligatorio field is required." id="Accompagnatori_4__DatiAddizionaliAccompagnatore_4___Obbligatorio" name="Accompagnatori[4].DatiAddizionaliAccompagnatore[4]._Obbligatorio" type="hidden" value="True" />');

    $('#divCompanionAdd_' + 4 + '_' + 4).append('<div><p><span class="field-validation-valid" data-valmsg-for="addizionale_4_4" data-valmsg-replace="true" style="color:red"></span></p> <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_4_4" data-valmsg-replace="true" style="color:red"></span> </p></div>');

    
        var tipodatoAddizionale = $('#hiddenCodDatoAddAcc_' + 5).val();
        RegEx = true;
        MaxLength = false;
        if (tipodatoAddizionale == 2) {
            if (RegEx == false && MaxLength == false) {
                $('#divCompanionAdd_' + 4 + '_' + 5).append('<input id="Accompagnatori_4__DatiAddizionaliAccompagnatore_5___testo" maxlength="100" name="Accompagnatori[4].DatiAddizionaliAccompagnatore[5]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />');
            }
            else if (RegEx == false && MaxLength != false) {
                $('#divCompanionAdd_' + 4 + '_' + 5).append('<input id="Accompagnatori_4__DatiAddizionaliAccompagnatore_5___testo" name="Accompagnatori[4].DatiAddizionaliAccompagnatore[5]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />');
            }
            else if (RegEx != false && MaxLength == false) {
                $('#divCompanionAdd_' + 4 + '_' + 5).append('<input id="Accompagnatori_4__DatiAddizionaliAccompagnatore_5___testo" maxlength="100" name="Accompagnatori[4].DatiAddizionaliAccompagnatore[5]._testo" onchange="ControlloTesto(this)" type="text" value="" />');
            }
            else if (RegEx != false && MaxLength != false) {
                $('#divCompanionAdd_' + 4 + '_' + 5).append('<input id="Accompagnatori_4__DatiAddizionaliAccompagnatore_5___testo" name="Accompagnatori[4].DatiAddizionaliAccompagnatore[5]._testo" onchange="ControlloTesto(this)" type="text" value="" />');
            }
        }
        if (tipodatoAddizionale == 1) {
            if (RegEx != false && MaxLength != false) {
                $('#divCompanionAdd_' + 4 + '_' + 5).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_4__DatiAddizionaliAccompagnatore_5___data" name="Accompagnatori[4].DatiAddizionaliAccompagnatore[5]._data" type="date" value="" />');
            }
            else if (RegEx != false && MaxLength == false) {
                $('#divCompanionAdd_' + 4 + '_' + 5).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_4__DatiAddizionaliAccompagnatore_5___data" name="Accompagnatori[4].DatiAddizionaliAccompagnatore[5]._data" type="date" value="" />');
            }
            else if (RegEx == false && MaxLength != false) {
                $('#divCompanionAdd_' + 4 + '_' + 5).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_4__DatiAddizionaliAccompagnatore_5___data" name="Accompagnatori[4].DatiAddizionaliAccompagnatore[5]._data" type="date" value="" />');
            }
            else if (RegEx == false && MaxLength == false) {
                $('#divCompanionAdd_' + 4 + '_' + 5).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_4__DatiAddizionaliAccompagnatore_5___data" name="Accompagnatori[4].DatiAddizionaliAccompagnatore[5]._data" type="date" value="" />');
            }
        }
        if (tipodatoAddizionale == 3)
        {
            $('#divCompanionAdd_' + 4 + '_' + 5).append($('<select/>', { id: "ddlsAcc_4" + '_5', 'data-index': 5, onchange:"ControloSelect(this)"  }));
            $('#ddlsAcc_4' +'_5').append($('<option/>', {
            value: 0,
            text: " " }));
            $('#ifMultiple').append('<input data-val="true" data-val-number="The field _idSelezionato must be a number." data-val-required="The _idSelezionato field is required." id="hiddenSelezionatoAcc_4_5" name="Accompagnatori[4].DatiAddizionaliAccompagnatore[5]._idSelezionato" type="hidden" value="0" />');
            getDropDownListsValues($('#hiddenIdDatoADDAcc_' +5).val(), $('#ddlsAcc_4' + '_5'), 0);
        }

    $('#divCompanionAdd_' + 4 + '_' + 5).append('<input data-val="true" data-val-required="The _Obbligatorio field is required." id="Accompagnatori_4__DatiAddizionaliAccompagnatore_5___Obbligatorio" name="Accompagnatori[4].DatiAddizionaliAccompagnatore[5]._Obbligatorio" type="hidden" value="True" />');

    $('#divCompanionAdd_' + 4 + '_' + 5).append('<div><p><span class="field-validation-valid" data-valmsg-for="addizionale_4_5" data-valmsg-replace="true" style="color:red"></span></p> <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_4_5" data-valmsg-replace="true" style="color:red"></span> </p></div>');

    
        var tipodatoAddizionale = $('#hiddenCodDatoAddAcc_' + 6).val();
        RegEx = true;
        MaxLength = false;
        if (tipodatoAddizionale == 2) {
            if (RegEx == false && MaxLength == false) {
                $('#divCompanionAdd_' + 4 + '_' + 6).append('<input id="Accompagnatori_4__DatiAddizionaliAccompagnatore_6___testo" maxlength="100" name="Accompagnatori[4].DatiAddizionaliAccompagnatore[6]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />');
            }
            else if (RegEx == false && MaxLength != false) {
                $('#divCompanionAdd_' + 4 + '_' + 6).append('<input id="Accompagnatori_4__DatiAddizionaliAccompagnatore_6___testo" name="Accompagnatori[4].DatiAddizionaliAccompagnatore[6]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />');
            }
            else if (RegEx != false && MaxLength == false) {
                $('#divCompanionAdd_' + 4 + '_' + 6).append('<input id="Accompagnatori_4__DatiAddizionaliAccompagnatore_6___testo" maxlength="100" name="Accompagnatori[4].DatiAddizionaliAccompagnatore[6]._testo" onchange="ControlloTesto(this)" type="text" value="" />');
            }
            else if (RegEx != false && MaxLength != false) {
                $('#divCompanionAdd_' + 4 + '_' + 6).append('<input id="Accompagnatori_4__DatiAddizionaliAccompagnatore_6___testo" name="Accompagnatori[4].DatiAddizionaliAccompagnatore[6]._testo" onchange="ControlloTesto(this)" type="text" value="" />');
            }
        }
        if (tipodatoAddizionale == 1) {
            if (RegEx != false && MaxLength != false) {
                $('#divCompanionAdd_' + 4 + '_' + 6).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_4__DatiAddizionaliAccompagnatore_6___data" name="Accompagnatori[4].DatiAddizionaliAccompagnatore[6]._data" type="date" value="" />');
            }
            else if (RegEx != false && MaxLength == false) {
                $('#divCompanionAdd_' + 4 + '_' + 6).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_4__DatiAddizionaliAccompagnatore_6___data" name="Accompagnatori[4].DatiAddizionaliAccompagnatore[6]._data" type="date" value="" />');
            }
            else if (RegEx == false && MaxLength != false) {
                $('#divCompanionAdd_' + 4 + '_' + 6).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_4__DatiAddizionaliAccompagnatore_6___data" name="Accompagnatori[4].DatiAddizionaliAccompagnatore[6]._data" type="date" value="" />');
            }
            else if (RegEx == false && MaxLength == false) {
                $('#divCompanionAdd_' + 4 + '_' + 6).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_4__DatiAddizionaliAccompagnatore_6___data" name="Accompagnatori[4].DatiAddizionaliAccompagnatore[6]._data" type="date" value="" />');
            }
        }
        if (tipodatoAddizionale == 3)
        {
            $('#divCompanionAdd_' + 4 + '_' + 6).append($('<select/>', { id: "ddlsAcc_4" + '_6', 'data-index': 6, onchange:"ControloSelect(this)"  }));
            $('#ddlsAcc_4' +'_6').append($('<option/>', {
            value: 0,
            text: " " }));
            $('#ifMultiple').append('<input data-val="true" data-val-number="The field _idSelezionato must be a number." data-val-required="The _idSelezionato field is required." id="hiddenSelezionatoAcc_4_6" name="Accompagnatori[4].DatiAddizionaliAccompagnatore[6]._idSelezionato" type="hidden" value="0" />');
            getDropDownListsValues($('#hiddenIdDatoADDAcc_' +6).val(), $('#ddlsAcc_4' + '_6'), 0);
        }

    $('#divCompanionAdd_' + 4 + '_' + 6).append('<input data-val="true" data-val-required="The _Obbligatorio field is required." id="Accompagnatori_4__DatiAddizionaliAccompagnatore_6___Obbligatorio" name="Accompagnatori[4].DatiAddizionaliAccompagnatore[6]._Obbligatorio" type="hidden" value="True" />');

    $('#divCompanionAdd_' + 4 + '_' + 6).append('<div><p><span class="field-validation-valid" data-valmsg-for="addizionale_4_6" data-valmsg-replace="true" style="color:red"></span></p> <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_4_6" data-valmsg-replace="true" style="color:red"></span> </p></div>');

    
        var tipodatoAddizionale = $('#hiddenCodDatoAddAcc_' + 7).val();
        RegEx = true;
        MaxLength = false;
        if (tipodatoAddizionale == 2) {
            if (RegEx == false && MaxLength == false) {
                $('#divCompanionAdd_' + 4 + '_' + 7).append('<input id="Accompagnatori_4__DatiAddizionaliAccompagnatore_7___testo" maxlength="100" name="Accompagnatori[4].DatiAddizionaliAccompagnatore[7]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />');
            }
            else if (RegEx == false && MaxLength != false) {
                $('#divCompanionAdd_' + 4 + '_' + 7).append('<input id="Accompagnatori_4__DatiAddizionaliAccompagnatore_7___testo" name="Accompagnatori[4].DatiAddizionaliAccompagnatore[7]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />');
            }
            else if (RegEx != false && MaxLength == false) {
                $('#divCompanionAdd_' + 4 + '_' + 7).append('<input id="Accompagnatori_4__DatiAddizionaliAccompagnatore_7___testo" maxlength="100" name="Accompagnatori[4].DatiAddizionaliAccompagnatore[7]._testo" onchange="ControlloTesto(this)" type="text" value="" />');
            }
            else if (RegEx != false && MaxLength != false) {
                $('#divCompanionAdd_' + 4 + '_' + 7).append('<input id="Accompagnatori_4__DatiAddizionaliAccompagnatore_7___testo" name="Accompagnatori[4].DatiAddizionaliAccompagnatore[7]._testo" onchange="ControlloTesto(this)" type="text" value="" />');
            }
        }
        if (tipodatoAddizionale == 1) {
            if (RegEx != false && MaxLength != false) {
                $('#divCompanionAdd_' + 4 + '_' + 7).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_4__DatiAddizionaliAccompagnatore_7___data" name="Accompagnatori[4].DatiAddizionaliAccompagnatore[7]._data" type="date" value="" />');
            }
            else if (RegEx != false && MaxLength == false) {
                $('#divCompanionAdd_' + 4 + '_' + 7).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_4__DatiAddizionaliAccompagnatore_7___data" name="Accompagnatori[4].DatiAddizionaliAccompagnatore[7]._data" type="date" value="" />');
            }
            else if (RegEx == false && MaxLength != false) {
                $('#divCompanionAdd_' + 4 + '_' + 7).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_4__DatiAddizionaliAccompagnatore_7___data" name="Accompagnatori[4].DatiAddizionaliAccompagnatore[7]._data" type="date" value="" />');
            }
            else if (RegEx == false && MaxLength == false) {
                $('#divCompanionAdd_' + 4 + '_' + 7).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_4__DatiAddizionaliAccompagnatore_7___data" name="Accompagnatori[4].DatiAddizionaliAccompagnatore[7]._data" type="date" value="" />');
            }
        }
        if (tipodatoAddizionale == 3)
        {
            $('#divCompanionAdd_' + 4 + '_' + 7).append($('<select/>', { id: "ddlsAcc_4" + '_7', 'data-index': 7, onchange:"ControloSelect(this)"  }));
            $('#ddlsAcc_4' +'_7').append($('<option/>', {
            value: 0,
            text: " " }));
            $('#ifMultiple').append('<input data-val="true" data-val-number="The field _idSelezionato must be a number." data-val-required="The _idSelezionato field is required." id="hiddenSelezionatoAcc_4_7" name="Accompagnatori[4].DatiAddizionaliAccompagnatore[7]._idSelezionato" type="hidden" value="0" />');
            getDropDownListsValues($('#hiddenIdDatoADDAcc_' +7).val(), $('#ddlsAcc_4' + '_7'), 0);
        }

    $('#divCompanionAdd_' + 4 + '_' + 7).append('<input data-val="true" data-val-required="The _Obbligatorio field is required." id="Accompagnatori_4__DatiAddizionaliAccompagnatore_7___Obbligatorio" name="Accompagnatori[4].DatiAddizionaliAccompagnatore[7]._Obbligatorio" type="hidden" value="True" />');

    $('#divCompanionAdd_' + 4 + '_' + 7).append('<div><p><span class="field-validation-valid" data-valmsg-for="addizionale_4_7" data-valmsg-replace="true" style="color:red"></span></p> <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_4_7" data-valmsg-replace="true" style="color:red"></span> </p></div>');

    
        var tipodatoAddizionale = $('#hiddenCodDatoAddAcc_' + 8).val();
        RegEx = true;
        MaxLength = false;
        if (tipodatoAddizionale == 2) {
            if (RegEx == false && MaxLength == false) {
                $('#divCompanionAdd_' + 4 + '_' + 8).append('<input id="Accompagnatori_4__DatiAddizionaliAccompagnatore_8___testo" maxlength="100" name="Accompagnatori[4].DatiAddizionaliAccompagnatore[8]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />');
            }
            else if (RegEx == false && MaxLength != false) {
                $('#divCompanionAdd_' + 4 + '_' + 8).append('<input id="Accompagnatori_4__DatiAddizionaliAccompagnatore_8___testo" name="Accompagnatori[4].DatiAddizionaliAccompagnatore[8]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />');
            }
            else if (RegEx != false && MaxLength == false) {
                $('#divCompanionAdd_' + 4 + '_' + 8).append('<input id="Accompagnatori_4__DatiAddizionaliAccompagnatore_8___testo" maxlength="100" name="Accompagnatori[4].DatiAddizionaliAccompagnatore[8]._testo" onchange="ControlloTesto(this)" type="text" value="" />');
            }
            else if (RegEx != false && MaxLength != false) {
                $('#divCompanionAdd_' + 4 + '_' + 8).append('<input id="Accompagnatori_4__DatiAddizionaliAccompagnatore_8___testo" name="Accompagnatori[4].DatiAddizionaliAccompagnatore[8]._testo" onchange="ControlloTesto(this)" type="text" value="" />');
            }
        }
        if (tipodatoAddizionale == 1) {
            if (RegEx != false && MaxLength != false) {
                $('#divCompanionAdd_' + 4 + '_' + 8).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_4__DatiAddizionaliAccompagnatore_8___data" name="Accompagnatori[4].DatiAddizionaliAccompagnatore[8]._data" type="date" value="" />');
            }
            else if (RegEx != false && MaxLength == false) {
                $('#divCompanionAdd_' + 4 + '_' + 8).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_4__DatiAddizionaliAccompagnatore_8___data" name="Accompagnatori[4].DatiAddizionaliAccompagnatore[8]._data" type="date" value="" />');
            }
            else if (RegEx == false && MaxLength != false) {
                $('#divCompanionAdd_' + 4 + '_' + 8).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_4__DatiAddizionaliAccompagnatore_8___data" name="Accompagnatori[4].DatiAddizionaliAccompagnatore[8]._data" type="date" value="" />');
            }
            else if (RegEx == false && MaxLength == false) {
                $('#divCompanionAdd_' + 4 + '_' + 8).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_4__DatiAddizionaliAccompagnatore_8___data" name="Accompagnatori[4].DatiAddizionaliAccompagnatore[8]._data" type="date" value="" />');
            }
        }
        if (tipodatoAddizionale == 3)
        {
            $('#divCompanionAdd_' + 4 + '_' + 8).append($('<select/>', { id: "ddlsAcc_4" + '_8', 'data-index': 8, onchange:"ControloSelect(this)"  }));
            $('#ddlsAcc_4' +'_8').append($('<option/>', {
            value: 0,
            text: " " }));
            $('#ifMultiple').append('<input data-val="true" data-val-number="The field _idSelezionato must be a number." data-val-required="The _idSelezionato field is required." id="hiddenSelezionatoAcc_4_8" name="Accompagnatori[4].DatiAddizionaliAccompagnatore[8]._idSelezionato" type="hidden" value="0" />');
            getDropDownListsValues($('#hiddenIdDatoADDAcc_' +8).val(), $('#ddlsAcc_4' + '_8'), 0);
        }

    $('#divCompanionAdd_' + 4 + '_' + 8).append('<input data-val="true" data-val-required="The _Obbligatorio field is required." id="Accompagnatori_4__DatiAddizionaliAccompagnatore_8___Obbligatorio" name="Accompagnatori[4].DatiAddizionaliAccompagnatore[8]._Obbligatorio" type="hidden" value="True" />');

    $('#divCompanionAdd_' + 4 + '_' + 8).append('<div><p><span class="field-validation-valid" data-valmsg-for="addizionale_4_8" data-valmsg-replace="true" style="color:red"></span></p> <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_4_8" data-valmsg-replace="true" style="color:red"></span> </p></div>');

                }

function getDropDownListsValues(_id, ddl, selectedValue) {
    //https://prenotami.esteri.it/Services/GetDdlValuesByID/ _id
    console.log("getDropDownListsValues" + "-" + _id + "-" + ddl + "-" + selectedValue);
    let ddlValuesById = [
        0, //0
        [{"Disabled":false,"Group":null,"Selected":false,"Text":"Si","Value":"1"},{"Disabled":false,"Group":null,"Selected":false,"Text":"No","Value":"2"}], //1
        0, //2
        0, //3
        0, //4
        0, //5
        0, //6
        0, //7
        0, //8
        0, //9
        0, //10
        [{"Disabled":false,"Group":null,"Selected":false,"Text":"Si","Value":"11"},{"Disabled":false,"Group":null,"Selected":false,"Text":"No","Value":"12"}], //11
        0, //12
        0, //13
        0, //14
        0, //15
        0, //16
        [{"Disabled":false,"Group":null,"Selected":false,"Text":"Casado/a","Value":"13"},{"Disabled":false,"Group":null,"Selected":false,"Text":"Divorciado/a","Value":"14"},{"Disabled":false,"Group":null,"Selected":false,"Text":"Viudo/a","Value":"15"},{"Disabled":false,"Group":null,"Selected":false,"Text":"Soltero/a","Value":"16"},{"Disabled":false,"Group":null,"Selected":false,"Text":"Separado/a","Value":"17"},{"Disabled":false,"Group":null,"Selected":false,"Text":"Unido/a civilmente","Value":"18"},{"Disabled":false,"Group":null,"Selected":false,"Text":"Separado/a de Un. Civ.","Value":"19"},{"Disabled":false,"Group":null,"Selected":false,"Text":"Divorciado/a de Un. Civ.","Value":"20"},{"Disabled":false,"Group":null,"Selected":false,"Text":"Viudo/a de Un. Civ.","Value":"21"}], //17
        0, //18
        0, //19
        0, //20
        0, //21
        0, //22
        [{"Disabled":false,"Group":null,"Selected":false,"Text":"Azul","Value":"22"},{"Disabled":false,"Group":null,"Selected":false,"Text":"Marrón","Value":"23"},{"Disabled":false,"Group":null,"Selected":false,"Text":"Gris","Value":"24"},{"Disabled":false,"Group":null,"Selected":false,"Text":"Negro","Value":"25"},{"Disabled":false,"Group":null,"Selected":false,"Text":"Verde","Value":"26"}], //23
        0, //24
        0, //25
        0, //26
        0, //27
        0, //28
        0, //29
    ];

    console.log( ddlValuesById[_id]);

    for (i = 0; i < ddlValuesById[_id].length; i++) {
        ddl.append($('<option/>', {
            value: ddlValuesById[_id][i].Value,
            text: ddlValuesById[_id][i].Text
        }));
    }
    ddl.val(selectedValue);
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
            
            
            if ($('#ddls_' + 3).val() !== undefined && $('#ddls_' + 3).val() !== '' && $('#ddls_' + 3).val() != 0) {
                let selected = $('#ddls_' + 3).val();
                $('#hiddenSelezionato_' + 3).val(selected);
            }
            
            
            if ($('#ddls_' + 4).val() !== undefined && $('#ddls_' + 4).val() !== '' && $('#ddls_' + 4).val() != 0) {
                let selected = $('#ddls_' + 4).val();
                $('#hiddenSelezionato_' + 4).val(selected);
            }
            
            
            if ($('#ddls_' + 5).val() !== undefined && $('#ddls_' + 5).val() !== '' && $('#ddls_' + 5).val() != 0) {
                let selected = $('#ddls_' + 5).val();
                $('#hiddenSelezionato_' + 5).val(selected);
            }
            
            
            if ($('#ddls_' + 6).val() !== undefined && $('#ddls_' + 6).val() !== '' && $('#ddls_' + 6).val() != 0) {
                let selected = $('#ddls_' + 6).val();
                $('#hiddenSelezionato_' + 6).val(selected);
            }
            
            
            if ($('#ddls_' + 7).val() !== undefined && $('#ddls_' + 7).val() !== '' && $('#ddls_' + 7).val() != 0) {
                let selected = $('#ddls_' + 7).val();
                $('#hiddenSelezionato_' + 7).val(selected);
            }
            
            
            if ($('#ddls_' + 8).val() !== undefined && $('#ddls_' + 8).val() !== '' && $('#ddls_' + 8).val() != 0) {
                let selected = $('#ddls_' + 8).val();
                $('#hiddenSelezionato_' + 8).val(selected);
            }
            
                                
                    if ($('#ddlsAcc_0' + '_0').val() !== undefined && $('#ddlsAcc_0' + '_0').val() !== '' && $('#ddlsAcc_0' + '_0').val() != 0) {
                        let selected = $('#ddlsAcc_0' + '_0').val();
                        $('#hiddenSelezionatoAcc_' + 0 + '_0').val(selected);
                    }
                    
                    
                    if ($('#ddlsAcc_0' + '_1').val() !== undefined && $('#ddlsAcc_0' + '_1').val() !== '' && $('#ddlsAcc_0' + '_1').val() != 0) {
                        let selected = $('#ddlsAcc_0' + '_1').val();
                        $('#hiddenSelezionatoAcc_' + 0 + '_1').val(selected);
                    }
                    
                    
                    if ($('#ddlsAcc_0' + '_2').val() !== undefined && $('#ddlsAcc_0' + '_2').val() !== '' && $('#ddlsAcc_0' + '_2').val() != 0) {
                        let selected = $('#ddlsAcc_0' + '_2').val();
                        $('#hiddenSelezionatoAcc_' + 0 + '_2').val(selected);
                    }
                    
                    
                    if ($('#ddlsAcc_0' + '_3').val() !== undefined && $('#ddlsAcc_0' + '_3').val() !== '' && $('#ddlsAcc_0' + '_3').val() != 0) {
                        let selected = $('#ddlsAcc_0' + '_3').val();
                        $('#hiddenSelezionatoAcc_' + 0 + '_3').val(selected);
                    }
                    
                    
                    if ($('#ddlsAcc_0' + '_4').val() !== undefined && $('#ddlsAcc_0' + '_4').val() !== '' && $('#ddlsAcc_0' + '_4').val() != 0) {
                        let selected = $('#ddlsAcc_0' + '_4').val();
                        $('#hiddenSelezionatoAcc_' + 0 + '_4').val(selected);
                    }
                    
                    
                    if ($('#ddlsAcc_0' + '_5').val() !== undefined && $('#ddlsAcc_0' + '_5').val() !== '' && $('#ddlsAcc_0' + '_5').val() != 0) {
                        let selected = $('#ddlsAcc_0' + '_5').val();
                        $('#hiddenSelezionatoAcc_' + 0 + '_5').val(selected);
                    }
                    
                    
                    if ($('#ddlsAcc_0' + '_6').val() !== undefined && $('#ddlsAcc_0' + '_6').val() !== '' && $('#ddlsAcc_0' + '_6').val() != 0) {
                        let selected = $('#ddlsAcc_0' + '_6').val();
                        $('#hiddenSelezionatoAcc_' + 0 + '_6').val(selected);
                    }
                    
                    
                    if ($('#ddlsAcc_0' + '_7').val() !== undefined && $('#ddlsAcc_0' + '_7').val() !== '' && $('#ddlsAcc_0' + '_7').val() != 0) {
                        let selected = $('#ddlsAcc_0' + '_7').val();
                        $('#hiddenSelezionatoAcc_' + 0 + '_7').val(selected);
                    }
                    
                    
                    if ($('#ddlsAcc_0' + '_8').val() !== undefined && $('#ddlsAcc_0' + '_8').val() !== '' && $('#ddlsAcc_0' + '_8').val() != 0) {
                        let selected = $('#ddlsAcc_0' + '_8').val();
                        $('#hiddenSelezionatoAcc_' + 0 + '_8').val(selected);
                    }
                    
                    
                    if ($('#ddlsAcc_1' + '_0').val() !== undefined && $('#ddlsAcc_1' + '_0').val() !== '' && $('#ddlsAcc_1' + '_0').val() != 0) {
                        let selected = $('#ddlsAcc_1' + '_0').val();
                        $('#hiddenSelezionatoAcc_' + 1 + '_0').val(selected);
                    }
                    
                    
                    if ($('#ddlsAcc_1' + '_1').val() !== undefined && $('#ddlsAcc_1' + '_1').val() !== '' && $('#ddlsAcc_1' + '_1').val() != 0) {
                        let selected = $('#ddlsAcc_1' + '_1').val();
                        $('#hiddenSelezionatoAcc_' + 1 + '_1').val(selected);
                    }
                    
                    
                    if ($('#ddlsAcc_1' + '_2').val() !== undefined && $('#ddlsAcc_1' + '_2').val() !== '' && $('#ddlsAcc_1' + '_2').val() != 0) {
                        let selected = $('#ddlsAcc_1' + '_2').val();
                        $('#hiddenSelezionatoAcc_' + 1 + '_2').val(selected);
                    }
                    
                    
                    if ($('#ddlsAcc_1' + '_3').val() !== undefined && $('#ddlsAcc_1' + '_3').val() !== '' && $('#ddlsAcc_1' + '_3').val() != 0) {
                        let selected = $('#ddlsAcc_1' + '_3').val();
                        $('#hiddenSelezionatoAcc_' + 1 + '_3').val(selected);
                    }
                    
                    
                    if ($('#ddlsAcc_1' + '_4').val() !== undefined && $('#ddlsAcc_1' + '_4').val() !== '' && $('#ddlsAcc_1' + '_4').val() != 0) {
                        let selected = $('#ddlsAcc_1' + '_4').val();
                        $('#hiddenSelezionatoAcc_' + 1 + '_4').val(selected);
                    }
                    
                    
                    if ($('#ddlsAcc_1' + '_5').val() !== undefined && $('#ddlsAcc_1' + '_5').val() !== '' && $('#ddlsAcc_1' + '_5').val() != 0) {
                        let selected = $('#ddlsAcc_1' + '_5').val();
                        $('#hiddenSelezionatoAcc_' + 1 + '_5').val(selected);
                    }
                    
                    
                    if ($('#ddlsAcc_1' + '_6').val() !== undefined && $('#ddlsAcc_1' + '_6').val() !== '' && $('#ddlsAcc_1' + '_6').val() != 0) {
                        let selected = $('#ddlsAcc_1' + '_6').val();
                        $('#hiddenSelezionatoAcc_' + 1 + '_6').val(selected);
                    }
                    
                    
                    if ($('#ddlsAcc_1' + '_7').val() !== undefined && $('#ddlsAcc_1' + '_7').val() !== '' && $('#ddlsAcc_1' + '_7').val() != 0) {
                        let selected = $('#ddlsAcc_1' + '_7').val();
                        $('#hiddenSelezionatoAcc_' + 1 + '_7').val(selected);
                    }
                    
                    
                    if ($('#ddlsAcc_1' + '_8').val() !== undefined && $('#ddlsAcc_1' + '_8').val() !== '' && $('#ddlsAcc_1' + '_8').val() != 0) {
                        let selected = $('#ddlsAcc_1' + '_8').val();
                        $('#hiddenSelezionatoAcc_' + 1 + '_8').val(selected);
                    }
                    
                    
                    if ($('#ddlsAcc_2' + '_0').val() !== undefined && $('#ddlsAcc_2' + '_0').val() !== '' && $('#ddlsAcc_2' + '_0').val() != 0) {
                        let selected = $('#ddlsAcc_2' + '_0').val();
                        $('#hiddenSelezionatoAcc_' + 2 + '_0').val(selected);
                    }
                    
                    
                    if ($('#ddlsAcc_2' + '_1').val() !== undefined && $('#ddlsAcc_2' + '_1').val() !== '' && $('#ddlsAcc_2' + '_1').val() != 0) {
                        let selected = $('#ddlsAcc_2' + '_1').val();
                        $('#hiddenSelezionatoAcc_' + 2 + '_1').val(selected);
                    }
                    
                    
                    if ($('#ddlsAcc_2' + '_2').val() !== undefined && $('#ddlsAcc_2' + '_2').val() !== '' && $('#ddlsAcc_2' + '_2').val() != 0) {
                        let selected = $('#ddlsAcc_2' + '_2').val();
                        $('#hiddenSelezionatoAcc_' + 2 + '_2').val(selected);
                    }
                    
                    
                    if ($('#ddlsAcc_2' + '_3').val() !== undefined && $('#ddlsAcc_2' + '_3').val() !== '' && $('#ddlsAcc_2' + '_3').val() != 0) {
                        let selected = $('#ddlsAcc_2' + '_3').val();
                        $('#hiddenSelezionatoAcc_' + 2 + '_3').val(selected);
                    }
                    
                    
                    if ($('#ddlsAcc_2' + '_4').val() !== undefined && $('#ddlsAcc_2' + '_4').val() !== '' && $('#ddlsAcc_2' + '_4').val() != 0) {
                        let selected = $('#ddlsAcc_2' + '_4').val();
                        $('#hiddenSelezionatoAcc_' + 2 + '_4').val(selected);
                    }
                    
                    
                    if ($('#ddlsAcc_2' + '_5').val() !== undefined && $('#ddlsAcc_2' + '_5').val() !== '' && $('#ddlsAcc_2' + '_5').val() != 0) {
                        let selected = $('#ddlsAcc_2' + '_5').val();
                        $('#hiddenSelezionatoAcc_' + 2 + '_5').val(selected);
                    }
                    
                    
                    if ($('#ddlsAcc_2' + '_6').val() !== undefined && $('#ddlsAcc_2' + '_6').val() !== '' && $('#ddlsAcc_2' + '_6').val() != 0) {
                        let selected = $('#ddlsAcc_2' + '_6').val();
                        $('#hiddenSelezionatoAcc_' + 2 + '_6').val(selected);
                    }
                    
                    
                    if ($('#ddlsAcc_2' + '_7').val() !== undefined && $('#ddlsAcc_2' + '_7').val() !== '' && $('#ddlsAcc_2' + '_7').val() != 0) {
                        let selected = $('#ddlsAcc_2' + '_7').val();
                        $('#hiddenSelezionatoAcc_' + 2 + '_7').val(selected);
                    }
                    
                    
                    if ($('#ddlsAcc_2' + '_8').val() !== undefined && $('#ddlsAcc_2' + '_8').val() !== '' && $('#ddlsAcc_2' + '_8').val() != 0) {
                        let selected = $('#ddlsAcc_2' + '_8').val();
                        $('#hiddenSelezionatoAcc_' + 2 + '_8').val(selected);
                    }
                    
                    
                    if ($('#ddlsAcc_3' + '_0').val() !== undefined && $('#ddlsAcc_3' + '_0').val() !== '' && $('#ddlsAcc_3' + '_0').val() != 0) {
                        let selected = $('#ddlsAcc_3' + '_0').val();
                        $('#hiddenSelezionatoAcc_' + 3 + '_0').val(selected);
                    }
                    
                    
                    if ($('#ddlsAcc_3' + '_1').val() !== undefined && $('#ddlsAcc_3' + '_1').val() !== '' && $('#ddlsAcc_3' + '_1').val() != 0) {
                        let selected = $('#ddlsAcc_3' + '_1').val();
                        $('#hiddenSelezionatoAcc_' + 3 + '_1').val(selected);
                    }
                    
                    
                    if ($('#ddlsAcc_3' + '_2').val() !== undefined && $('#ddlsAcc_3' + '_2').val() !== '' && $('#ddlsAcc_3' + '_2').val() != 0) {
                        let selected = $('#ddlsAcc_3' + '_2').val();
                        $('#hiddenSelezionatoAcc_' + 3 + '_2').val(selected);
                    }
                    
                    
                    if ($('#ddlsAcc_3' + '_3').val() !== undefined && $('#ddlsAcc_3' + '_3').val() !== '' && $('#ddlsAcc_3' + '_3').val() != 0) {
                        let selected = $('#ddlsAcc_3' + '_3').val();
                        $('#hiddenSelezionatoAcc_' + 3 + '_3').val(selected);
                    }
                    
                    
                    if ($('#ddlsAcc_3' + '_4').val() !== undefined && $('#ddlsAcc_3' + '_4').val() !== '' && $('#ddlsAcc_3' + '_4').val() != 0) {
                        let selected = $('#ddlsAcc_3' + '_4').val();
                        $('#hiddenSelezionatoAcc_' + 3 + '_4').val(selected);
                    }
                    
                    
                    if ($('#ddlsAcc_3' + '_5').val() !== undefined && $('#ddlsAcc_3' + '_5').val() !== '' && $('#ddlsAcc_3' + '_5').val() != 0) {
                        let selected = $('#ddlsAcc_3' + '_5').val();
                        $('#hiddenSelezionatoAcc_' + 3 + '_5').val(selected);
                    }
                    
                    
                    if ($('#ddlsAcc_3' + '_6').val() !== undefined && $('#ddlsAcc_3' + '_6').val() !== '' && $('#ddlsAcc_3' + '_6').val() != 0) {
                        let selected = $('#ddlsAcc_3' + '_6').val();
                        $('#hiddenSelezionatoAcc_' + 3 + '_6').val(selected);
                    }
                    
                    
                    if ($('#ddlsAcc_3' + '_7').val() !== undefined && $('#ddlsAcc_3' + '_7').val() !== '' && $('#ddlsAcc_3' + '_7').val() != 0) {
                        let selected = $('#ddlsAcc_3' + '_7').val();
                        $('#hiddenSelezionatoAcc_' + 3 + '_7').val(selected);
                    }
                    
                    
                    if ($('#ddlsAcc_3' + '_8').val() !== undefined && $('#ddlsAcc_3' + '_8').val() !== '' && $('#ddlsAcc_3' + '_8').val() != 0) {
                        let selected = $('#ddlsAcc_3' + '_8').val();
                        $('#hiddenSelezionatoAcc_' + 3 + '_8').val(selected);
                    }
                    
                    
                    if ($('#ddlsAcc_4' + '_0').val() !== undefined && $('#ddlsAcc_4' + '_0').val() !== '' && $('#ddlsAcc_4' + '_0').val() != 0) {
                        let selected = $('#ddlsAcc_4' + '_0').val();
                        $('#hiddenSelezionatoAcc_' + 4 + '_0').val(selected);
                    }
                    
                    
                    if ($('#ddlsAcc_4' + '_1').val() !== undefined && $('#ddlsAcc_4' + '_1').val() !== '' && $('#ddlsAcc_4' + '_1').val() != 0) {
                        let selected = $('#ddlsAcc_4' + '_1').val();
                        $('#hiddenSelezionatoAcc_' + 4 + '_1').val(selected);
                    }
                    
                    
                    if ($('#ddlsAcc_4' + '_2').val() !== undefined && $('#ddlsAcc_4' + '_2').val() !== '' && $('#ddlsAcc_4' + '_2').val() != 0) {
                        let selected = $('#ddlsAcc_4' + '_2').val();
                        $('#hiddenSelezionatoAcc_' + 4 + '_2').val(selected);
                    }
                    
                    
                    if ($('#ddlsAcc_4' + '_3').val() !== undefined && $('#ddlsAcc_4' + '_3').val() !== '' && $('#ddlsAcc_4' + '_3').val() != 0) {
                        let selected = $('#ddlsAcc_4' + '_3').val();
                        $('#hiddenSelezionatoAcc_' + 4 + '_3').val(selected);
                    }
                    
                    
                    if ($('#ddlsAcc_4' + '_4').val() !== undefined && $('#ddlsAcc_4' + '_4').val() !== '' && $('#ddlsAcc_4' + '_4').val() != 0) {
                        let selected = $('#ddlsAcc_4' + '_4').val();
                        $('#hiddenSelezionatoAcc_' + 4 + '_4').val(selected);
                    }
                    
                    
                    if ($('#ddlsAcc_4' + '_5').val() !== undefined && $('#ddlsAcc_4' + '_5').val() !== '' && $('#ddlsAcc_4' + '_5').val() != 0) {
                        let selected = $('#ddlsAcc_4' + '_5').val();
                        $('#hiddenSelezionatoAcc_' + 4 + '_5').val(selected);
                    }
                    
                    
                    if ($('#ddlsAcc_4' + '_6').val() !== undefined && $('#ddlsAcc_4' + '_6').val() !== '' && $('#ddlsAcc_4' + '_6').val() != 0) {
                        let selected = $('#ddlsAcc_4' + '_6').val();
                        $('#hiddenSelezionatoAcc_' + 4 + '_6').val(selected);
                    }
                    
                    
                    if ($('#ddlsAcc_4' + '_7').val() !== undefined && $('#ddlsAcc_4' + '_7').val() !== '' && $('#ddlsAcc_4' + '_7').val() != 0) {
                        let selected = $('#ddlsAcc_4' + '_7').val();
                        $('#hiddenSelezionatoAcc_' + 4 + '_7').val(selected);
                    }
                    
                    
                    if ($('#ddlsAcc_4' + '_8').val() !== undefined && $('#ddlsAcc_4' + '_8').val() !== '' && $('#ddlsAcc_4' + '_8').val() != 0) {
                        let selected = $('#ddlsAcc_4' + '_8').val();
                        $('#hiddenSelezionatoAcc_' + 4 + '_8').val(selected);
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



        if (window.confirm("Quiere confirmar esta reserva? \n\n" + $('#divRiepilogoPrenotazione').text())) {

        }
        else {
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