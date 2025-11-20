const container = document.getElementsByTagName('section')[0];
container.innerHTML = '';

container.innerHTML = `
<script src="https://www.google.com/recaptcha/enterprise.js?render=6LdkwrIqAAAAAC4NX-g_j7lEx9vh1rg94ZL2cFfY"></script>
  <script>
      function onSubmit(token) {
          document.getElementById("bookingForm").submit();
      }
  </script>
  
<form action="https://prenotami.esteri.it/Services/Booking/5775" enctype="multipart/form-data" id="bookingForm"
    method="post">
    <link href="./CIE BOOK_files/Site.css" rel="stylesheet">
    <div class="container" id="div-container">

        <h1 class="heading-container" id="ServizioDescrizione">Carta d’identità elettronica (CIE)</h1>
        <input id="hiddenServizioDesc" name="ServizioDescrizione" type="hidden"
            value="Carta d’identità elettronica (CIE)">
        <input data-val="true" data-val-required="The MessaggioRassicuranteWaitingList field is required."
            id="MessaggioRassicuranteWaitingList" name="MessaggioRassicuranteWaitingList" type="hidden" value="True">
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
                    name="IDServizioConsolare" type="hidden" value="3">
                <input data-val="true" data-val-number="Il campo IDServizioErogato deve essere un numero."
                    data-val-required="The IDServizioErogato field is required." id="IDServizioErogato"
                    name="IDServizioErogato" type="hidden" value="5775">
                <label>Tipo Prenotazione</label>
                <select id="typeofbookingddl">
                    <option value="1">Prenotazione Singola</option>
                    <option value="2">Prenotazione Multipla</option>
                    <option value="3">Prenotazione per altre persone</option>
                </select>
                <input data-val="true" data-val-number="Il campo IdTipoPrenotazione deve essere un numero."
                    data-val-required="The IdTipoPrenotazione field is required." id="hiddenTipoPrenotazione"
                    name="IdTipoPrenotazione" type="hidden" value="1">
                <input data-val="true" data-val-number="Il campo NumMaxAccompagnatori deve essere un numero."
                    data-val-required="The NumMaxAccompagnatori field is required." id="hiddenNumMax"
                    name="NumMaxAccompagnatori" type="hidden" value="5">



            </div>
            <div id="numberOfCompanions" style="display:none">
                <label>Numero richiedenti aggiuntivi</label>
                <select id="ddlnumberofcompanions">
                    <option value="1"> 1 </option>
                    <option value="2"> 2 </option>
                    <option value="3"> 3 </option>
                    <option value="4"> 4 </option>
                    <option value="5"> 5 </option>
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
                        Codice Fiscale </label>
                    <input id="DatiAddizionaliPrenotante_0___Descrizione"
                        name="DatiAddizionaliPrenotante[0]._Descrizione" type="hidden" value="Codice Fiscale">
                    <input id="DatiAddizionaliPrenotante_0___testo" maxlength="100"
                        name="DatiAddizionaliPrenotante[0]._testo" onchange="ControlloTesto(this)" type="text"
                        value=""><input data-val="true" data-val-required="The _Obbligatorio field is required."
                        id="DatiAddizionaliPrenotante_0___Obbligatorio"
                        name="DatiAddizionaliPrenotante[0]._Obbligatorio" type="hidden" value="False">
                    <div>
                        <p><span class="field-validation-valid" data-valmsg-for="addizionale_0"
                                data-valmsg-replace="true" style="color:red"></span></p>
                        <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_0"
                                data-valmsg-replace="true" style="color:red"></span></p>
                    </div>
                </div>
                <input data-val="true" data-val-number="Il campo _Id deve essere un numero."
                    data-val-required="The _Id field is required." id="hiddenId0"
                    name="DatiAddizionaliPrenotante[0]._Id" type="hidden" value="85253"><input data-val="true"
                    data-val-number="Il campo IDTipoDatoAddizionale deve essere un numero."
                    data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADD_0"
                    name="DatiAddizionaliPrenotante[0]._TipoDatoAddizionale.IDTipoDatoAddizionale" type="hidden"
                    value="24"><input data-val="true" data-val-number="Il campo IDTipoControllo deve essere un numero."
                    data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAdd_0"
                    name="DatiAddizionaliPrenotante[0]._TipoDatoAddizionale.IDTipoControllo" type="hidden"
                    value="2"><input id="hiddenRegEx_0" name="DatiAddizionaliPrenotante[0]._TipoDatoAddizionale.RegEx"
                    type="hidden" value="">
                <div id="datoaddizionale_1">
                    <label id="addizionale">
                        Statura in cm &nbsp;<b>*</b> </label>
                    <input id="DatiAddizionaliPrenotante_1___Descrizione"
                        name="DatiAddizionaliPrenotante[1]._Descrizione" type="hidden" value="Statura in cm">
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
                <input data-val="true" data-val-number="Il campo _Id deve essere un numero."
                    data-val-required="The _Id field is required." id="hiddenId1"
                    name="DatiAddizionaliPrenotante[1]._Id" type="hidden" value="85254"><input data-val="true"
                    data-val-number="Il campo IDTipoDatoAddizionale deve essere un numero."
                    data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADD_1"
                    name="DatiAddizionaliPrenotante[1]._TipoDatoAddizionale.IDTipoDatoAddizionale" type="hidden"
                    value="22"><input data-val="true" data-val-number="Il campo IDTipoControllo deve essere un numero."
                    data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAdd_1"
                    name="DatiAddizionaliPrenotante[1]._TipoDatoAddizionale.IDTipoControllo" type="hidden"
                    value="2"><input id="hiddenRegEx_1" name="DatiAddizionaliPrenotante[1]._TipoDatoAddizionale.RegEx"
                    type="hidden" value="">
                <div id="datoaddizionale_2">
                    <label id="addizionale">
                        Colore degli occhi &nbsp;<b>*</b> </label>
                    <input id="DatiAddizionaliPrenotante_2___Descrizione"
                        name="DatiAddizionaliPrenotante[2]._Descrizione" type="hidden" value="Colore degli occhi">
                    <select id="ddls_2" data-index="2" onchange="ControloSelect(this)">
                        <option value="0"> </option>
                        <option value="22">Azzurro</option>
                        <option value="23">Marrone</option>
                        <option value="24">Grigio</option>
                        <option value="25">Nero</option>
                        <option value="26">Verde</option>
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
                    name="DatiAddizionaliPrenotante[2]._Id" type="hidden" value="85255"><input data-val="true"
                    data-val-number="Il campo IDTipoDatoAddizionale deve essere un numero."
                    data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADD_2"
                    name="DatiAddizionaliPrenotante[2]._TipoDatoAddizionale.IDTipoDatoAddizionale" type="hidden"
                    value="23"><input data-val="true" data-val-number="Il campo IDTipoControllo deve essere un numero."
                    data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAdd_2"
                    name="DatiAddizionaliPrenotante[2]._TipoDatoAddizionale.IDTipoControllo" type="hidden"
                    value="3"><input id="hiddenRegEx_2" name="DatiAddizionaliPrenotante[2]._TipoDatoAddizionale.RegEx"
                    type="hidden" value="">
                <div id="docAddizionale_0">
                    <label id="doc">
                        Codice fiscale </label>
                    <p class="helper">E' possibile inserire file in formato PDF di massimo un 1MB<b>;</b></p>
                    <input id="DocumentiPrenotante_0___Descrizione" name="DocumentiPrenotante[0]._Descrizione"
                        type="hidden" value="Codice fiscale">
                    <input id="File_0" name="DocumentiPrenotante[0]._File" onchange="controlloFileCaricato(this)"
                        type="file" value="">
                    <span class="field-validation-valid" data-valmsg-for="Lenght_0" data-valmsg-replace="true"
                        style="color:red"></span>
                    <input data-val="true" data-val-required="The _Obbligatorio field is required."
                        id="DocumentiPrenotante_0___Obbligatorio" name="DocumentiPrenotante[0]._Obbligatorio"
                        type="hidden" value="False">
                    <span class="field-validation-valid validator-required" data-valmsg-for="Required_0"
                        data-valmsg-replace="true" style="color:red"></span>
                    <span class="field-validation-valid validator-required" data-valmsg-for="Extension_0"
                        data-valmsg-replace="true" style="color:red"></span>
                    <input data-val="true" data-val-number="Il campo _Id deve essere un numero."
                        data-val-required="The _Id field is required." id="DocumentiPrenotante_0___Id"
                        name="DocumentiPrenotante[0]._Id" type="hidden" value="21509">
                </div>
                <input data-val="true" data-val-number="Il campo IDTipoDocumento deve essere un numero."
                    data-val-required="The IDTipoDocumento field is required." id="hiddenIdDocADD_0"
                    name="DocumentiPrenotante[0]._TipoDocumento.IDTipoDocumento" type="hidden" value="9"><input
                    id="hiddenFile_0" name="DocumentiPrenotante[0]._File" type="hidden" value=""> <input data-val="true"
                    data-val-number="Il campo _idSelezionato deve essere un numero."
                    data-val-required="The _idSelezionato field is required." id="hiddenSelezionato_2"
                    name="DatiAddizionaliPrenotante[2]._idSelezionato" type="hidden" value="0">
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
                    <div id="divCompanionAdd_0_0">
                        <label>
                            Codice Fiscale </label>
                        <input id="Accompagnatori_0__DatiAddizionaliAccompagnatore_0___Descrizione"
                            name="Accompagnatori[0].DatiAddizionaliAccompagnatore[0]._Descrizione" type="hidden"
                            value="Codice Fiscale">
                    </div>
                    <input data-val="true" data-val-number="Il campo _Id deve essere un numero."
                        data-val-required="The _Id field is required." id="hiddenIdAcc0"
                        name="Accompagnatori[0].DatiAddizionaliAccompagnatore[0]._Id" type="hidden" value="85256"><input
                        data-val="true" data-val-number="Il campo IDTipoDatoAddizionale deve essere un numero."
                        data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADDAcc_0"
                        name="Accompagnatori[0].DatiAddizionaliAccompagnatore[0]._TipoDatoAddizionale.IDTipoDatoAddizionale"
                        type="hidden" value="24"><input data-val="true"
                        data-val-number="Il campo IDTipoControllo deve essere un numero."
                        data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAddAcc_0"
                        name="Accompagnatori[0].DatiAddizionaliAccompagnatore[0]._TipoDatoAddizionale.IDTipoControllo"
                        type="hidden" value="2"><input id="hiddenRegExAcc_0"
                        name="Accompagnatori[0].DatiAddizionaliAccompagnatore[0]._TipoDatoAddizionale.RegEx"
                        type="hidden" value="">
                    <div id="divCompanionAdd_0_1">
                        <label>
                            Statura in cm &nbsp;<b>*</b> </label>
                        <input id="Accompagnatori_0__DatiAddizionaliAccompagnatore_1___Descrizione"
                            name="Accompagnatori[0].DatiAddizionaliAccompagnatore[1]._Descrizione" type="hidden"
                            value="Statura in cm">
                    </div>
                    <input data-val="true" data-val-number="Il campo _Id deve essere un numero."
                        data-val-required="The _Id field is required." id="hiddenIdAcc0"
                        name="Accompagnatori[0].DatiAddizionaliAccompagnatore[1]._Id" type="hidden" value="85257"><input
                        data-val="true" data-val-number="Il campo IDTipoDatoAddizionale deve essere un numero."
                        data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADDAcc_1"
                        name="Accompagnatori[0].DatiAddizionaliAccompagnatore[1]._TipoDatoAddizionale.IDTipoDatoAddizionale"
                        type="hidden" value="22"><input data-val="true"
                        data-val-number="Il campo IDTipoControllo deve essere un numero."
                        data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAddAcc_1"
                        name="Accompagnatori[0].DatiAddizionaliAccompagnatore[1]._TipoDatoAddizionale.IDTipoControllo"
                        type="hidden" value="2"><input id="hiddenRegExAcc_1"
                        name="Accompagnatori[0].DatiAddizionaliAccompagnatore[1]._TipoDatoAddizionale.RegEx"
                        type="hidden" value="">
                    <div id="divCompanionAdd_0_2">
                        <label>
                            Colore degli occhi &nbsp;<b>*</b> </label>
                        <input id="Accompagnatori_0__DatiAddizionaliAccompagnatore_2___Descrizione"
                            name="Accompagnatori[0].DatiAddizionaliAccompagnatore[2]._Descrizione" type="hidden"
                            value="Colore degli occhi">
                    </div>
                    <input data-val="true" data-val-number="Il campo _Id deve essere un numero."
                        data-val-required="The _Id field is required." id="hiddenIdAcc0"
                        name="Accompagnatori[0].DatiAddizionaliAccompagnatore[2]._Id" type="hidden" value="85258"><input
                        data-val="true" data-val-number="Il campo IDTipoDatoAddizionale deve essere un numero."
                        data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADDAcc_2"
                        name="Accompagnatori[0].DatiAddizionaliAccompagnatore[2]._TipoDatoAddizionale.IDTipoDatoAddizionale"
                        type="hidden" value="23"><input data-val="true"
                        data-val-number="Il campo IDTipoControllo deve essere un numero."
                        data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAddAcc_2"
                        name="Accompagnatori[0].DatiAddizionaliAccompagnatore[2]._TipoDatoAddizionale.IDTipoControllo"
                        type="hidden" value="3"><input id="hiddenRegExAcc_2"
                        name="Accompagnatori[0].DatiAddizionaliAccompagnatore[2]._TipoDatoAddizionale.RegEx"
                        type="hidden" value="">
                    <div id="docCompanionAdd_0_0">
                        <label>
                            Codice fiscale </label>
                        <input id="Accompagnatori_0__DocumentiAccompagnatore_0___Descrizione"
                            name="Accompagnatori[0].DocumentiAccompagnatore[0]._Descrizione" type="hidden"
                            value="Codice fiscale">
                        <input id="Accompagnatori_0__DocumentiAccompagnatore_0___File"
                            name="Accompagnatori[0].DocumentiAccompagnatore[0]._File"
                            onchange="controlloFileCaricato(this)" type="file" value="">
                        <span class="field-validation-valid" data-valmsg-for="Lenght_0_0" data-valmsg-replace="true"
                            style="color:red"></span>
                        <input data-val="true" data-val-required="The _Obbligatorio field is required."
                            id="Accompagnatori_0__DocumentiAccompagnatore_0___Obbligatorio"
                            name="Accompagnatori[0].DocumentiAccompagnatore[0]._Obbligatorio" type="hidden"
                            value="False">
                        <span class="field-validation-valid validator-required" data-valmsg-for="Required_0_0"
                            data-valmsg-replace="true" style="color:red"></span>
                        <span class="field-validation-valid validator-required" data-valmsg-for="Extension_0_0"
                            data-valmsg-replace="true" style="color:red"></span>
                        <input data-val="true" data-val-number="Il campo _Id deve essere un numero."
                            data-val-required="The _Id field is required." id="hiddenIdDoc0"
                            name="Accompagnatori[0].DocumentiAccompagnatore[0]._Id" type="hidden" value="21510">
                    </div>
                    <input data-val="true" data-val-number="Il campo IDTipoDocumento deve essere un numero."
                        data-val-required="The IDTipoDocumento field is required." id="hiddenIdDocADDAcc_0"
                        name="Accompagnatori[0].DocumentiAccompagnatore[0]._TipoDocumento.IDTipoDocumento" type="hidden"
                        value="9">
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
                    <div id="divCompanionAdd_1_0">
                        <label>
                            Codice Fiscale </label>
                        <input id="Accompagnatori_1__DatiAddizionaliAccompagnatore_0___Descrizione"
                            name="Accompagnatori[1].DatiAddizionaliAccompagnatore[0]._Descrizione" type="hidden"
                            value="Codice Fiscale">
                    </div>
                    <input data-val="true" data-val-number="Il campo _Id deve essere un numero."
                        data-val-required="The _Id field is required." id="hiddenIdAcc1"
                        name="Accompagnatori[1].DatiAddizionaliAccompagnatore[0]._Id" type="hidden" value="85256"><input
                        data-val="true" data-val-number="Il campo IDTipoDatoAddizionale deve essere un numero."
                        data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADDAcc_0"
                        name="Accompagnatori[1].DatiAddizionaliAccompagnatore[0]._TipoDatoAddizionale.IDTipoDatoAddizionale"
                        type="hidden" value="24"><input data-val="true"
                        data-val-number="Il campo IDTipoControllo deve essere un numero."
                        data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAddAcc_0"
                        name="Accompagnatori[1].DatiAddizionaliAccompagnatore[0]._TipoDatoAddizionale.IDTipoControllo"
                        type="hidden" value="2"><input id="hiddenRegExAcc_0"
                        name="Accompagnatori[1].DatiAddizionaliAccompagnatore[0]._TipoDatoAddizionale.RegEx"
                        type="hidden" value="">
                    <div id="divCompanionAdd_1_1">
                        <label>
                            Statura in cm &nbsp;<b>*</b> </label>
                        <input id="Accompagnatori_1__DatiAddizionaliAccompagnatore_1___Descrizione"
                            name="Accompagnatori[1].DatiAddizionaliAccompagnatore[1]._Descrizione" type="hidden"
                            value="Statura in cm">
                    </div>
                    <input data-val="true" data-val-number="Il campo _Id deve essere un numero."
                        data-val-required="The _Id field is required." id="hiddenIdAcc1"
                        name="Accompagnatori[1].DatiAddizionaliAccompagnatore[1]._Id" type="hidden" value="85257"><input
                        data-val="true" data-val-number="Il campo IDTipoDatoAddizionale deve essere un numero."
                        data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADDAcc_1"
                        name="Accompagnatori[1].DatiAddizionaliAccompagnatore[1]._TipoDatoAddizionale.IDTipoDatoAddizionale"
                        type="hidden" value="22"><input data-val="true"
                        data-val-number="Il campo IDTipoControllo deve essere un numero."
                        data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAddAcc_1"
                        name="Accompagnatori[1].DatiAddizionaliAccompagnatore[1]._TipoDatoAddizionale.IDTipoControllo"
                        type="hidden" value="2"><input id="hiddenRegExAcc_1"
                        name="Accompagnatori[1].DatiAddizionaliAccompagnatore[1]._TipoDatoAddizionale.RegEx"
                        type="hidden" value="">
                    <div id="divCompanionAdd_1_2">
                        <label>
                            Colore degli occhi &nbsp;<b>*</b> </label>
                        <input id="Accompagnatori_1__DatiAddizionaliAccompagnatore_2___Descrizione"
                            name="Accompagnatori[1].DatiAddizionaliAccompagnatore[2]._Descrizione" type="hidden"
                            value="Colore degli occhi">
                    </div>
                    <input data-val="true" data-val-number="Il campo _Id deve essere un numero."
                        data-val-required="The _Id field is required." id="hiddenIdAcc1"
                        name="Accompagnatori[1].DatiAddizionaliAccompagnatore[2]._Id" type="hidden" value="85258"><input
                        data-val="true" data-val-number="Il campo IDTipoDatoAddizionale deve essere un numero."
                        data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADDAcc_2"
                        name="Accompagnatori[1].DatiAddizionaliAccompagnatore[2]._TipoDatoAddizionale.IDTipoDatoAddizionale"
                        type="hidden" value="23"><input data-val="true"
                        data-val-number="Il campo IDTipoControllo deve essere un numero."
                        data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAddAcc_2"
                        name="Accompagnatori[1].DatiAddizionaliAccompagnatore[2]._TipoDatoAddizionale.IDTipoControllo"
                        type="hidden" value="3"><input id="hiddenRegExAcc_2"
                        name="Accompagnatori[1].DatiAddizionaliAccompagnatore[2]._TipoDatoAddizionale.RegEx"
                        type="hidden" value="">
                    <div id="docCompanionAdd_1_0">
                        <label>
                            Codice fiscale </label>
                        <input id="Accompagnatori_1__DocumentiAccompagnatore_0___Descrizione"
                            name="Accompagnatori[1].DocumentiAccompagnatore[0]._Descrizione" type="hidden"
                            value="Codice fiscale">
                        <input id="Accompagnatori_1__DocumentiAccompagnatore_0___File"
                            name="Accompagnatori[1].DocumentiAccompagnatore[0]._File"
                            onchange="controlloFileCaricato(this)" type="file" value="">
                        <span class="field-validation-valid" data-valmsg-for="Lenght_1_0" data-valmsg-replace="true"
                            style="color:red"></span>
                        <input data-val="true" data-val-required="The _Obbligatorio field is required."
                            id="Accompagnatori_1__DocumentiAccompagnatore_0___Obbligatorio"
                            name="Accompagnatori[1].DocumentiAccompagnatore[0]._Obbligatorio" type="hidden"
                            value="False">
                        <span class="field-validation-valid validator-required" data-valmsg-for="Required_1_0"
                            data-valmsg-replace="true" style="color:red"></span>
                        <span class="field-validation-valid validator-required" data-valmsg-for="Extension_1_0"
                            data-valmsg-replace="true" style="color:red"></span>
                        <input data-val="true" data-val-number="Il campo _Id deve essere un numero."
                            data-val-required="The _Id field is required." id="hiddenIdDoc1"
                            name="Accompagnatori[1].DocumentiAccompagnatore[0]._Id" type="hidden" value="21510">
                    </div>
                    <input data-val="true" data-val-number="Il campo IDTipoDocumento deve essere un numero."
                        data-val-required="The IDTipoDocumento field is required." id="hiddenIdDocADDAcc_0"
                        name="Accompagnatori[1].DocumentiAccompagnatore[0]._TipoDocumento.IDTipoDocumento" type="hidden"
                        value="9">
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
                    <div id="divCompanionAdd_2_0">
                        <label>
                            Codice Fiscale </label>
                        <input id="Accompagnatori_2__DatiAddizionaliAccompagnatore_0___Descrizione"
                            name="Accompagnatori[2].DatiAddizionaliAccompagnatore[0]._Descrizione" type="hidden"
                            value="Codice Fiscale">
                    </div>
                    <input data-val="true" data-val-number="Il campo _Id deve essere un numero."
                        data-val-required="The _Id field is required." id="hiddenIdAcc2"
                        name="Accompagnatori[2].DatiAddizionaliAccompagnatore[0]._Id" type="hidden" value="85256"><input
                        data-val="true" data-val-number="Il campo IDTipoDatoAddizionale deve essere un numero."
                        data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADDAcc_0"
                        name="Accompagnatori[2].DatiAddizionaliAccompagnatore[0]._TipoDatoAddizionale.IDTipoDatoAddizionale"
                        type="hidden" value="24"><input data-val="true"
                        data-val-number="Il campo IDTipoControllo deve essere un numero."
                        data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAddAcc_0"
                        name="Accompagnatori[2].DatiAddizionaliAccompagnatore[0]._TipoDatoAddizionale.IDTipoControllo"
                        type="hidden" value="2"><input id="hiddenRegExAcc_0"
                        name="Accompagnatori[2].DatiAddizionaliAccompagnatore[0]._TipoDatoAddizionale.RegEx"
                        type="hidden" value="">
                    <div id="divCompanionAdd_2_1">
                        <label>
                            Statura in cm &nbsp;<b>*</b> </label>
                        <input id="Accompagnatori_2__DatiAddizionaliAccompagnatore_1___Descrizione"
                            name="Accompagnatori[2].DatiAddizionaliAccompagnatore[1]._Descrizione" type="hidden"
                            value="Statura in cm">
                    </div>
                    <input data-val="true" data-val-number="Il campo _Id deve essere un numero."
                        data-val-required="The _Id field is required." id="hiddenIdAcc2"
                        name="Accompagnatori[2].DatiAddizionaliAccompagnatore[1]._Id" type="hidden" value="85257"><input
                        data-val="true" data-val-number="Il campo IDTipoDatoAddizionale deve essere un numero."
                        data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADDAcc_1"
                        name="Accompagnatori[2].DatiAddizionaliAccompagnatore[1]._TipoDatoAddizionale.IDTipoDatoAddizionale"
                        type="hidden" value="22"><input data-val="true"
                        data-val-number="Il campo IDTipoControllo deve essere un numero."
                        data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAddAcc_1"
                        name="Accompagnatori[2].DatiAddizionaliAccompagnatore[1]._TipoDatoAddizionale.IDTipoControllo"
                        type="hidden" value="2"><input id="hiddenRegExAcc_1"
                        name="Accompagnatori[2].DatiAddizionaliAccompagnatore[1]._TipoDatoAddizionale.RegEx"
                        type="hidden" value="">
                    <div id="divCompanionAdd_2_2">
                        <label>
                            Colore degli occhi &nbsp;<b>*</b> </label>
                        <input id="Accompagnatori_2__DatiAddizionaliAccompagnatore_2___Descrizione"
                            name="Accompagnatori[2].DatiAddizionaliAccompagnatore[2]._Descrizione" type="hidden"
                            value="Colore degli occhi">
                    </div>
                    <input data-val="true" data-val-number="Il campo _Id deve essere un numero."
                        data-val-required="The _Id field is required." id="hiddenIdAcc2"
                        name="Accompagnatori[2].DatiAddizionaliAccompagnatore[2]._Id" type="hidden" value="85258"><input
                        data-val="true" data-val-number="Il campo IDTipoDatoAddizionale deve essere un numero."
                        data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADDAcc_2"
                        name="Accompagnatori[2].DatiAddizionaliAccompagnatore[2]._TipoDatoAddizionale.IDTipoDatoAddizionale"
                        type="hidden" value="23"><input data-val="true"
                        data-val-number="Il campo IDTipoControllo deve essere un numero."
                        data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAddAcc_2"
                        name="Accompagnatori[2].DatiAddizionaliAccompagnatore[2]._TipoDatoAddizionale.IDTipoControllo"
                        type="hidden" value="3"><input id="hiddenRegExAcc_2"
                        name="Accompagnatori[2].DatiAddizionaliAccompagnatore[2]._TipoDatoAddizionale.RegEx"
                        type="hidden" value="">
                    <div id="docCompanionAdd_2_0">
                        <label>
                            Codice fiscale </label>
                        <input id="Accompagnatori_2__DocumentiAccompagnatore_0___Descrizione"
                            name="Accompagnatori[2].DocumentiAccompagnatore[0]._Descrizione" type="hidden"
                            value="Codice fiscale">
                        <input id="Accompagnatori_2__DocumentiAccompagnatore_0___File"
                            name="Accompagnatori[2].DocumentiAccompagnatore[0]._File"
                            onchange="controlloFileCaricato(this)" type="file" value="">
                        <span class="field-validation-valid" data-valmsg-for="Lenght_2_0" data-valmsg-replace="true"
                            style="color:red"></span>
                        <input data-val="true" data-val-required="The _Obbligatorio field is required."
                            id="Accompagnatori_2__DocumentiAccompagnatore_0___Obbligatorio"
                            name="Accompagnatori[2].DocumentiAccompagnatore[0]._Obbligatorio" type="hidden"
                            value="False">
                        <span class="field-validation-valid validator-required" data-valmsg-for="Required_2_0"
                            data-valmsg-replace="true" style="color:red"></span>
                        <span class="field-validation-valid validator-required" data-valmsg-for="Extension_2_0"
                            data-valmsg-replace="true" style="color:red"></span>
                        <input data-val="true" data-val-number="Il campo _Id deve essere un numero."
                            data-val-required="The _Id field is required." id="hiddenIdDoc2"
                            name="Accompagnatori[2].DocumentiAccompagnatore[0]._Id" type="hidden" value="21510">
                    </div>
                    <input data-val="true" data-val-number="Il campo IDTipoDocumento deve essere un numero."
                        data-val-required="The IDTipoDocumento field is required." id="hiddenIdDocADDAcc_0"
                        name="Accompagnatori[2].DocumentiAccompagnatore[0]._TipoDocumento.IDTipoDocumento" type="hidden"
                        value="9">
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
                    <div id="divCompanionAdd_3_0">
                        <label>
                            Codice Fiscale </label>
                        <input id="Accompagnatori_3__DatiAddizionaliAccompagnatore_0___Descrizione"
                            name="Accompagnatori[3].DatiAddizionaliAccompagnatore[0]._Descrizione" type="hidden"
                            value="Codice Fiscale">
                    </div>
                    <input data-val="true" data-val-number="Il campo _Id deve essere un numero."
                        data-val-required="The _Id field is required." id="hiddenIdAcc3"
                        name="Accompagnatori[3].DatiAddizionaliAccompagnatore[0]._Id" type="hidden" value="85256"><input
                        data-val="true" data-val-number="Il campo IDTipoDatoAddizionale deve essere un numero."
                        data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADDAcc_0"
                        name="Accompagnatori[3].DatiAddizionaliAccompagnatore[0]._TipoDatoAddizionale.IDTipoDatoAddizionale"
                        type="hidden" value="24"><input data-val="true"
                        data-val-number="Il campo IDTipoControllo deve essere un numero."
                        data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAddAcc_0"
                        name="Accompagnatori[3].DatiAddizionaliAccompagnatore[0]._TipoDatoAddizionale.IDTipoControllo"
                        type="hidden" value="2"><input id="hiddenRegExAcc_0"
                        name="Accompagnatori[3].DatiAddizionaliAccompagnatore[0]._TipoDatoAddizionale.RegEx"
                        type="hidden" value="">
                    <div id="divCompanionAdd_3_1">
                        <label>
                            Statura in cm &nbsp;<b>*</b> </label>
                        <input id="Accompagnatori_3__DatiAddizionaliAccompagnatore_1___Descrizione"
                            name="Accompagnatori[3].DatiAddizionaliAccompagnatore[1]._Descrizione" type="hidden"
                            value="Statura in cm">
                    </div>
                    <input data-val="true" data-val-number="Il campo _Id deve essere un numero."
                        data-val-required="The _Id field is required." id="hiddenIdAcc3"
                        name="Accompagnatori[3].DatiAddizionaliAccompagnatore[1]._Id" type="hidden" value="85257"><input
                        data-val="true" data-val-number="Il campo IDTipoDatoAddizionale deve essere un numero."
                        data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADDAcc_1"
                        name="Accompagnatori[3].DatiAddizionaliAccompagnatore[1]._TipoDatoAddizionale.IDTipoDatoAddizionale"
                        type="hidden" value="22"><input data-val="true"
                        data-val-number="Il campo IDTipoControllo deve essere un numero."
                        data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAddAcc_1"
                        name="Accompagnatori[3].DatiAddizionaliAccompagnatore[1]._TipoDatoAddizionale.IDTipoControllo"
                        type="hidden" value="2"><input id="hiddenRegExAcc_1"
                        name="Accompagnatori[3].DatiAddizionaliAccompagnatore[1]._TipoDatoAddizionale.RegEx"
                        type="hidden" value="">
                    <div id="divCompanionAdd_3_2">
                        <label>
                            Colore degli occhi &nbsp;<b>*</b> </label>
                        <input id="Accompagnatori_3__DatiAddizionaliAccompagnatore_2___Descrizione"
                            name="Accompagnatori[3].DatiAddizionaliAccompagnatore[2]._Descrizione" type="hidden"
                            value="Colore degli occhi">
                    </div>
                    <input data-val="true" data-val-number="Il campo _Id deve essere un numero."
                        data-val-required="The _Id field is required." id="hiddenIdAcc3"
                        name="Accompagnatori[3].DatiAddizionaliAccompagnatore[2]._Id" type="hidden" value="85258"><input
                        data-val="true" data-val-number="Il campo IDTipoDatoAddizionale deve essere un numero."
                        data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADDAcc_2"
                        name="Accompagnatori[3].DatiAddizionaliAccompagnatore[2]._TipoDatoAddizionale.IDTipoDatoAddizionale"
                        type="hidden" value="23"><input data-val="true"
                        data-val-number="Il campo IDTipoControllo deve essere un numero."
                        data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAddAcc_2"
                        name="Accompagnatori[3].DatiAddizionaliAccompagnatore[2]._TipoDatoAddizionale.IDTipoControllo"
                        type="hidden" value="3"><input id="hiddenRegExAcc_2"
                        name="Accompagnatori[3].DatiAddizionaliAccompagnatore[2]._TipoDatoAddizionale.RegEx"
                        type="hidden" value="">
                    <div id="docCompanionAdd_3_0">
                        <label>
                            Codice fiscale </label>
                        <input id="Accompagnatori_3__DocumentiAccompagnatore_0___Descrizione"
                            name="Accompagnatori[3].DocumentiAccompagnatore[0]._Descrizione" type="hidden"
                            value="Codice fiscale">
                        <input id="Accompagnatori_3__DocumentiAccompagnatore_0___File"
                            name="Accompagnatori[3].DocumentiAccompagnatore[0]._File"
                            onchange="controlloFileCaricato(this)" type="file" value="">
                        <span class="field-validation-valid" data-valmsg-for="Lenght_3_0" data-valmsg-replace="true"
                            style="color:red"></span>
                        <input data-val="true" data-val-required="The _Obbligatorio field is required."
                            id="Accompagnatori_3__DocumentiAccompagnatore_0___Obbligatorio"
                            name="Accompagnatori[3].DocumentiAccompagnatore[0]._Obbligatorio" type="hidden"
                            value="False">
                        <span class="field-validation-valid validator-required" data-valmsg-for="Required_3_0"
                            data-valmsg-replace="true" style="color:red"></span>
                        <span class="field-validation-valid validator-required" data-valmsg-for="Extension_3_0"
                            data-valmsg-replace="true" style="color:red"></span>
                        <input data-val="true" data-val-number="Il campo _Id deve essere un numero."
                            data-val-required="The _Id field is required." id="hiddenIdDoc3"
                            name="Accompagnatori[3].DocumentiAccompagnatore[0]._Id" type="hidden" value="21510">
                    </div>
                    <input data-val="true" data-val-number="Il campo IDTipoDocumento deve essere un numero."
                        data-val-required="The IDTipoDocumento field is required." id="hiddenIdDocADDAcc_0"
                        name="Accompagnatori[3].DocumentiAccompagnatore[0]._TipoDocumento.IDTipoDocumento" type="hidden"
                        value="9">
                </div>
                <input data-val="true" data-val-number="Il campo IdTipoParentela deve essere un numero."
                    id="hiddenParentela_3" name="Accompagnatori[3].IdTipoParentela" type="hidden" value="">
                <div id="divCompanion_4" style="display: none;">
                    <h2>Dati richiedente aggiuntivo 5</h2>
                    <div>
                        Cognome *
                        <input class="text-box single-line" id="Accompagnatori_4__CognomeAccompagnatore"
                            name="Accompagnatori[4].CognomeAccompagnatore" onkeyup="aggiornaElencoPrenotanti()"
                            type="text" value="">
                        <span class="field-validation-valid" data-valmsg-for="Surname4" data-valmsg-replace="true"
                            style="color:red"></span>
                    </div>
                    <div>
                        Nome *
                        <input class="text-box single-line" id="Accompagnatori_4__NomeAccompagnatore"
                            name="Accompagnatori[4].NomeAccompagnatore" onkeyup="aggiornaElencoPrenotanti()" type="text"
                            value="">
                        <span class="field-validation-valid" data-valmsg-for="Name4" data-valmsg-replace="true"
                            style="color:red"></span>
                    </div>
                    <div>
                        Data di nascita *
                        <input class="text-box single-line" data-val="true"
                            data-val-date="Il campo DataNascitaAccompagnatore deve essere una data."
                            id="Accompagnatori_4__DataNascitaAccompagnatore"
                            name="Accompagnatori[4].DataNascitaAccompagnatore" type="date" value="">
                    </div>
                    <div>
                        <span class="field-validation-valid" data-valmsg-for="Date4" data-valmsg-replace="true"
                            style="color:red"></span>
                        <span class="field-validation-valid" data-valmsg-for="dateRange4" data-valmsg-replace="true"
                            style="color:red"></span>
                    </div>
                    Relazione di parentela
                    <div id="ddlRelation_4">
                    </div>
                    <div id="divCompanionAdd_4_0">
                        <label>
                            Codice Fiscale </label>
                        <input id="Accompagnatori_4__DatiAddizionaliAccompagnatore_0___Descrizione"
                            name="Accompagnatori[4].DatiAddizionaliAccompagnatore[0]._Descrizione" type="hidden"
                            value="Codice Fiscale">
                    </div>
                    <input data-val="true" data-val-number="Il campo _Id deve essere un numero."
                        data-val-required="The _Id field is required." id="hiddenIdAcc4"
                        name="Accompagnatori[4].DatiAddizionaliAccompagnatore[0]._Id" type="hidden" value="85256"><input
                        data-val="true" data-val-number="Il campo IDTipoDatoAddizionale deve essere un numero."
                        data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADDAcc_0"
                        name="Accompagnatori[4].DatiAddizionaliAccompagnatore[0]._TipoDatoAddizionale.IDTipoDatoAddizionale"
                        type="hidden" value="24"><input data-val="true"
                        data-val-number="Il campo IDTipoControllo deve essere un numero."
                        data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAddAcc_0"
                        name="Accompagnatori[4].DatiAddizionaliAccompagnatore[0]._TipoDatoAddizionale.IDTipoControllo"
                        type="hidden" value="2"><input id="hiddenRegExAcc_0"
                        name="Accompagnatori[4].DatiAddizionaliAccompagnatore[0]._TipoDatoAddizionale.RegEx"
                        type="hidden" value="">
                    <div id="divCompanionAdd_4_1">
                        <label>
                            Statura in cm &nbsp;<b>*</b> </label>
                        <input id="Accompagnatori_4__DatiAddizionaliAccompagnatore_1___Descrizione"
                            name="Accompagnatori[4].DatiAddizionaliAccompagnatore[1]._Descrizione" type="hidden"
                            value="Statura in cm">
                    </div>
                    <input data-val="true" data-val-number="Il campo _Id deve essere un numero."
                        data-val-required="The _Id field is required." id="hiddenIdAcc4"
                        name="Accompagnatori[4].DatiAddizionaliAccompagnatore[1]._Id" type="hidden" value="85257"><input
                        data-val="true" data-val-number="Il campo IDTipoDatoAddizionale deve essere un numero."
                        data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADDAcc_1"
                        name="Accompagnatori[4].DatiAddizionaliAccompagnatore[1]._TipoDatoAddizionale.IDTipoDatoAddizionale"
                        type="hidden" value="22"><input data-val="true"
                        data-val-number="Il campo IDTipoControllo deve essere un numero."
                        data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAddAcc_1"
                        name="Accompagnatori[4].DatiAddizionaliAccompagnatore[1]._TipoDatoAddizionale.IDTipoControllo"
                        type="hidden" value="2"><input id="hiddenRegExAcc_1"
                        name="Accompagnatori[4].DatiAddizionaliAccompagnatore[1]._TipoDatoAddizionale.RegEx"
                        type="hidden" value="">
                    <div id="divCompanionAdd_4_2">
                        <label>
                            Colore degli occhi &nbsp;<b>*</b> </label>
                        <input id="Accompagnatori_4__DatiAddizionaliAccompagnatore_2___Descrizione"
                            name="Accompagnatori[4].DatiAddizionaliAccompagnatore[2]._Descrizione" type="hidden"
                            value="Colore degli occhi">
                    </div>
                    <input data-val="true" data-val-number="Il campo _Id deve essere un numero."
                        data-val-required="The _Id field is required." id="hiddenIdAcc4"
                        name="Accompagnatori[4].DatiAddizionaliAccompagnatore[2]._Id" type="hidden" value="85258"><input
                        data-val="true" data-val-number="Il campo IDTipoDatoAddizionale deve essere un numero."
                        data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADDAcc_2"
                        name="Accompagnatori[4].DatiAddizionaliAccompagnatore[2]._TipoDatoAddizionale.IDTipoDatoAddizionale"
                        type="hidden" value="23"><input data-val="true"
                        data-val-number="Il campo IDTipoControllo deve essere un numero."
                        data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAddAcc_2"
                        name="Accompagnatori[4].DatiAddizionaliAccompagnatore[2]._TipoDatoAddizionale.IDTipoControllo"
                        type="hidden" value="3"><input id="hiddenRegExAcc_2"
                        name="Accompagnatori[4].DatiAddizionaliAccompagnatore[2]._TipoDatoAddizionale.RegEx"
                        type="hidden" value="">
                    <div id="docCompanionAdd_4_0">
                        <label>
                            Codice fiscale </label>
                        <input id="Accompagnatori_4__DocumentiAccompagnatore_0___Descrizione"
                            name="Accompagnatori[4].DocumentiAccompagnatore[0]._Descrizione" type="hidden"
                            value="Codice fiscale">
                        <input id="Accompagnatori_4__DocumentiAccompagnatore_0___File"
                            name="Accompagnatori[4].DocumentiAccompagnatore[0]._File"
                            onchange="controlloFileCaricato(this)" type="file" value="">
                        <span class="field-validation-valid" data-valmsg-for="Lenght_4_0" data-valmsg-replace="true"
                            style="color:red"></span>
                        <input data-val="true" data-val-required="The _Obbligatorio field is required."
                            id="Accompagnatori_4__DocumentiAccompagnatore_0___Obbligatorio"
                            name="Accompagnatori[4].DocumentiAccompagnatore[0]._Obbligatorio" type="hidden"
                            value="False">
                        <span class="field-validation-valid validator-required" data-valmsg-for="Required_4_0"
                            data-valmsg-replace="true" style="color:red"></span>
                        <span class="field-validation-valid validator-required" data-valmsg-for="Extension_4_0"
                            data-valmsg-replace="true" style="color:red"></span>
                        <input data-val="true" data-val-number="Il campo _Id deve essere un numero."
                            data-val-required="The _Id field is required." id="hiddenIdDoc4"
                            name="Accompagnatori[4].DocumentiAccompagnatore[0]._Id" type="hidden" value="21510">
                    </div>
                    <input data-val="true" data-val-number="Il campo IDTipoDocumento deve essere un numero."
                        data-val-required="The IDTipoDocumento field is required." id="hiddenIdDocADDAcc_0"
                        name="Accompagnatori[4].DocumentiAccompagnatore[0]._TipoDocumento.IDTipoDocumento" type="hidden"
                        value="9">
                </div>
                <input data-val="true" data-val-number="Il campo IdTipoParentela deve essere un numero."
                    id="hiddenParentela_4" name="Accompagnatori[4].IdTipoParentela" type="hidden" value="">
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
            <!--<button type="submit" id="btnAvanti" class="button primary g-recaptcha" data-sitekey="6LdkwrIqAAAAAC4NX-g_j7lEx9vh1rg94ZL2cFfY" data-callback="onSubmit">Avanti</button>-->
            <button type="button" id="btnAvanti" class="button primary">Avanti</button>
        </div>
    </div>
</form>
`;
