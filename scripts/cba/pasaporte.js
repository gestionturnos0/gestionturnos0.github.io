const container = document.getElementsByTagName('section')[0];
container.innerHTML = '';

container.innerHTML = `
<script src="https://www.google.com/recaptcha/enterprise.js?render=6LdkwrIqAAAAAC4NX-g_j7lEx9vh1rg94ZL2cFfY"></script>
  <script>
      function onSubmit(token) {
          document.getElementById("bookingForm").submit();
      }
  </script>
  
<form action="https://prenotami.esteri.it/Services/Booking/104" enctype="multipart/form-data" id="bookingForm"
    method="post">    
    <div class="container" id="div-container">

        <h1 class="heading-container" id="ServizioDescrizione">Passaporti</h1>
        <input id="hiddenServizioDesc" name="ServizioDescrizione" type="hidden" value="Passaporti">
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
                    name="IDServizioConsolare" type="hidden" value="2">
                <input data-val="true" data-val-number="Il campo IDServizioErogato deve essere un numero."
                    data-val-required="The IDServizioErogato field is required." id="IDServizioErogato"
                    name="IDServizioErogato" type="hidden" value="104">
                <label>Tipo Prenotazione</label>
                <select id="typeofbookingddl">
                    <option value="1">Prenotazione Singola</option>
                    <option value="2">Prenotazione Multipla</option>
                </select>
                <input data-val="true" data-val-number="Il campo IdTipoPrenotazione deve essere un numero."
                    data-val-required="The IdTipoPrenotazione field is required." id="hiddenTipoPrenotazione"
                    name="IdTipoPrenotazione" type="hidden" value="2">
                <input data-val="true" data-val-number="Il campo NumMaxAccompagnatori deve essere un numero."
                    data-val-required="The NumMaxAccompagnatori field is required." id="hiddenNumMax"
                    name="NumMaxAccompagnatori" type="hidden" value="4">



            </div>
            <div id="numberOfCompanions" style="">
                <label>Numero richiedenti aggiuntivi</label>
                <select id="ddlnumberofcompanions">
                    <option value="1"> 1 </option>
                    <option value="2"> 2 </option>
                    <option value="3"> 3 </option>
                    <option value="4"> 4 </option>
                </select>
                <input data-val="true" data-val-number="Il campo NumAccompagnatoriSelected deve essere un numero."
                    data-val-required="The NumAccompagnatoriSelected field is required." id="numAccSelected"
                    name="NumAccompagnatoriSelected" type="hidden" value="3">
            </div>

            <div id="applicantBufferDiv" style="margin: 10px 0px 30px; display: block;">
                <h2>Dati Richiedente</h2>
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
                    name="DatiAddizionaliPrenotante[0]._Id" type="hidden" value="67720"><input data-val="true"
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
                        Figli minorenni &nbsp;<b>*</b> </label>
                    <input id="DatiAddizionaliPrenotante_1___Descrizione"
                        name="DatiAddizionaliPrenotante[1]._Descrizione" type="hidden" value="Figli minorenni">
                    <select id="ddls_1" data-index="1" onchange="ControloSelect(this)">
                        <option value="0"> </option>
                        <option value="11">Si</option>
                        <option value="12">No</option>
                    </select><input data-val="true" data-val-required="The _Obbligatorio field is required."
                        id="DatiAddizionaliPrenotante_1___Obbligatorio"
                        name="DatiAddizionaliPrenotante[1]._Obbligatorio" type="hidden" value="True">
                    <div>
                        <p><span class="field-validation-valid" data-valmsg-for="addizionale_1"
                                data-valmsg-replace="true" style="color: red; display: none;"></span></p>
                        <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_1"
                                data-valmsg-replace="true" style="color:red"></span></p>
                    </div>
                </div>
                <input data-val="true" data-val-number="Il campo _Id deve essere un numero."
                    data-val-required="The _Id field is required." id="hiddenId1"
                    name="DatiAddizionaliPrenotante[1]._Id" type="hidden" value="67721"><input data-val="true"
                    data-val-number="Il campo IDTipoDatoAddizionale deve essere un numero."
                    data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADD_1"
                    name="DatiAddizionaliPrenotante[1]._TipoDatoAddizionale.IDTipoDatoAddizionale" type="hidden"
                    value="11"><input data-val="true" data-val-number="Il campo IDTipoControllo deve essere un numero."
                    data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAdd_1"
                    name="DatiAddizionaliPrenotante[1]._TipoDatoAddizionale.IDTipoControllo" type="hidden"
                    value="3"><input id="hiddenRegEx_1" name="DatiAddizionaliPrenotante[1]._TipoDatoAddizionale.RegEx"
                    type="hidden" value="">
                <div id="datoaddizionale_2">
                    <label id="addizionale">
                        Stato civile &nbsp;<b>*</b> </label>
                    <input id="DatiAddizionaliPrenotante_2___Descrizione"
                        name="DatiAddizionaliPrenotante[2]._Descrizione" type="hidden" value="Stato civile">
                    <select id="ddls_2" data-index="2" onchange="ControloSelect(this)">
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
                    name="DatiAddizionaliPrenotante[2]._Id" type="hidden" value="67722"><input data-val="true"
                    data-val-number="Il campo IDTipoDatoAddizionale deve essere un numero."
                    data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADD_2"
                    name="DatiAddizionaliPrenotante[2]._TipoDatoAddizionale.IDTipoDatoAddizionale" type="hidden"
                    value="17"><input data-val="true" data-val-number="Il campo IDTipoControllo deve essere un numero."
                    data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAdd_2"
                    name="DatiAddizionaliPrenotante[2]._TipoDatoAddizionale.IDTipoControllo" type="hidden"
                    value="3"><input id="hiddenRegEx_2" name="DatiAddizionaliPrenotante[2]._TipoDatoAddizionale.RegEx"
                    type="hidden" value="">
                <div id="datoaddizionale_3">
                    <label id="addizionale">
                        In possesso di passaporto italiano scaduto/in scadenza &nbsp;<b>*</b> </label>
                    <input id="DatiAddizionaliPrenotante_3___Descrizione"
                        name="DatiAddizionaliPrenotante[3]._Descrizione" type="hidden"
                        value="In possesso di passaporto italiano scaduto/in scadenza">
                    <select id="ddls_3" data-index="3" onchange="ControloSelect(this)">
                        <option value="0"> </option>
                        <option value="1">Si</option>
                        <option value="2">No</option>
                    </select><input data-val="true" data-val-required="The _Obbligatorio field is required."
                        id="DatiAddizionaliPrenotante_3___Obbligatorio"
                        name="DatiAddizionaliPrenotante[3]._Obbligatorio" type="hidden" value="True">
                    <div>
                        <p><span class="field-validation-valid" data-valmsg-for="addizionale_3"
                                data-valmsg-replace="true" style="color: red; display: none;"></span></p>
                        <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_3"
                                data-valmsg-replace="true" style="color:red"></span></p>
                    </div>
                </div>
                <input data-val="true" data-val-number="Il campo _Id deve essere un numero."
                    data-val-required="The _Id field is required." id="hiddenId3"
                    name="DatiAddizionaliPrenotante[3]._Id" type="hidden" value="67723"><input data-val="true"
                    data-val-number="Il campo IDTipoDatoAddizionale deve essere un numero."
                    data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADD_3"
                    name="DatiAddizionaliPrenotante[3]._TipoDatoAddizionale.IDTipoDatoAddizionale" type="hidden"
                    value="1"><input data-val="true" data-val-number="Il campo IDTipoControllo deve essere un numero."
                    data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAdd_3"
                    name="DatiAddizionaliPrenotante[3]._TipoDatoAddizionale.IDTipoControllo" type="hidden"
                    value="3"><input id="hiddenRegEx_3" name="DatiAddizionaliPrenotante[3]._TipoDatoAddizionale.RegEx"
                    type="hidden" value="">
                <div id="datoaddizionale_4">
                    <label id="addizionale">
                        Numero figli minorenni &nbsp;<b>*</b> </label>
                    <input id="DatiAddizionaliPrenotante_4___Descrizione"
                        name="DatiAddizionaliPrenotante[4]._Descrizione" type="hidden" value="Numero figli minorenni">
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
                    name="DatiAddizionaliPrenotante[4]._Id" type="hidden" value="67724"><input data-val="true"
                    data-val-number="Il campo IDTipoDatoAddizionale deve essere un numero."
                    data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADD_4"
                    name="DatiAddizionaliPrenotante[4]._TipoDatoAddizionale.IDTipoDatoAddizionale" type="hidden"
                    value="12"><input data-val="true" data-val-number="Il campo IDTipoControllo deve essere un numero."
                    data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAdd_4"
                    name="DatiAddizionaliPrenotante[4]._TipoDatoAddizionale.IDTipoControllo" type="hidden"
                    value="2"><input id="hiddenRegEx_4" name="DatiAddizionaliPrenotante[4]._TipoDatoAddizionale.RegEx"
                    type="hidden" value=""> <input data-val="true"
                    data-val-number="Il campo _idSelezionato deve essere un numero."
                    data-val-required="The _idSelezionato field is required." id="hiddenSelezionato_1"
                    name="DatiAddizionaliPrenotante[1]._idSelezionato" type="hidden" value="0"><input data-val="true"
                    data-val-number="Il campo _idSelezionato deve essere un numero."
                    data-val-required="The _idSelezionato field is required." id="hiddenSelezionato_2"
                    name="DatiAddizionaliPrenotante[2]._idSelezionato" type="hidden" value="0"><input data-val="true"
                    data-val-number="Il campo _idSelezionato deve essere un numero."
                    data-val-required="The _idSelezionato field is required." id="hiddenSelezionato_3"
                    name="DatiAddizionaliPrenotante[3]._idSelezionato" type="hidden" value="0">
            </div>

            <div id="ifMultiple" style="">
                <div id="divCompanion_0" style="display: block;">
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
                    <div id="ddlRelation_0"><select id="TypeOfRelationDDL0" data-index="0">
                            <option></option>
                            <option value="2">Coniuge</option>
                            <option value="11">Coniuge divorziato</option>
                            <option value="1">Coniuge separato</option>
                            <option value="9">Convivente</option>
                            <option value="8">Figlio di altro coniuge</option>
                            <option value="5">Figlio/a</option>
                            <option value="7">Fratello/Sorella</option>
                            <option value="3">Genero/Nuora</option>
                            <option value="6">Genitore</option>
                            <option value="12">Minore in affidamento</option>
                            <option value="10">Nipote</option>
                            <option value="4">Suocero/Suocera</option>
                        </select></div>
                    <div id="divCompanionAdd_0_0">
                        <label>
                            Figli minorenni &nbsp;<b>*</b> </label>
                        <input id="Accompagnatori_0__DatiAddizionaliAccompagnatore_0___Descrizione"
                            name="Accompagnatori[0].DatiAddizionaliAccompagnatore[0]._Descrizione" type="hidden"
                            value="Figli minorenni">
                        <select id="ddlsAcc_0_0" data-index="0" onchange="ControloSelect(this)">
                            <option value="0"> </option>
                            <option value="11">Si</option>
                            <option value="12">No</option>
                        </select><input data-val="true" data-val-required="The _Obbligatorio field is required."
                            id="Accompagnatori_0__DatiAddizionaliAccompagnatore_0___Obbligatorio"
                            name="Accompagnatori[0].DatiAddizionaliAccompagnatore[0]._Obbligatorio" type="hidden"
                            value="True">
                        <div>
                            <p><span class="field-validation-valid" data-valmsg-for="addizionale_0_0"
                                    data-valmsg-replace="true" style="color:red"></span></p>
                            <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_0_0"
                                    data-valmsg-replace="true" style="color:red"></span> </p>
                        </div>
                    </div>
                    <input data-val="true" data-val-number="Il campo _Id deve essere un numero."
                        data-val-required="The _Id field is required." id="hiddenIdAcc0"
                        name="Accompagnatori[0].DatiAddizionaliAccompagnatore[0]._Id" type="hidden" value="67725"><input
                        data-val="true" data-val-number="Il campo IDTipoDatoAddizionale deve essere un numero."
                        data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADDAcc_0"
                        name="Accompagnatori[0].DatiAddizionaliAccompagnatore[0]._TipoDatoAddizionale.IDTipoDatoAddizionale"
                        type="hidden" value="11"><input data-val="true"
                        data-val-number="Il campo IDTipoControllo deve essere un numero."
                        data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAddAcc_0"
                        name="Accompagnatori[0].DatiAddizionaliAccompagnatore[0]._TipoDatoAddizionale.IDTipoControllo"
                        type="hidden" value="3"><input id="hiddenRegExAcc_0"
                        name="Accompagnatori[0].DatiAddizionaliAccompagnatore[0]._TipoDatoAddizionale.RegEx"
                        type="hidden" value="">
                    <div id="divCompanionAdd_0_1">
                        <label>
                            Stato civile &nbsp;<b>*</b> </label>
                        <input id="Accompagnatori_0__DatiAddizionaliAccompagnatore_1___Descrizione"
                            name="Accompagnatori[0].DatiAddizionaliAccompagnatore[1]._Descrizione" type="hidden"
                            value="Stato civile">
                        <select id="ddlsAcc_0_1" data-index="1" onchange="ControloSelect(this)">
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
                            id="Accompagnatori_0__DatiAddizionaliAccompagnatore_1___Obbligatorio"
                            name="Accompagnatori[0].DatiAddizionaliAccompagnatore[1]._Obbligatorio" type="hidden"
                            value="True">
                        <div>
                            <p><span class="field-validation-valid" data-valmsg-for="addizionale_0_1"
                                    data-valmsg-replace="true" style="color:red"></span></p>
                            <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_0_1"
                                    data-valmsg-replace="true" style="color:red"></span> </p>
                        </div>
                    </div>
                    <input data-val="true" data-val-number="Il campo _Id deve essere un numero."
                        data-val-required="The _Id field is required." id="hiddenIdAcc0"
                        name="Accompagnatori[0].DatiAddizionaliAccompagnatore[1]._Id" type="hidden" value="67726"><input
                        data-val="true" data-val-number="Il campo IDTipoDatoAddizionale deve essere un numero."
                        data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADDAcc_1"
                        name="Accompagnatori[0].DatiAddizionaliAccompagnatore[1]._TipoDatoAddizionale.IDTipoDatoAddizionale"
                        type="hidden" value="17"><input data-val="true"
                        data-val-number="Il campo IDTipoControllo deve essere un numero."
                        data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAddAcc_1"
                        name="Accompagnatori[0].DatiAddizionaliAccompagnatore[1]._TipoDatoAddizionale.IDTipoControllo"
                        type="hidden" value="3"><input id="hiddenRegExAcc_1"
                        name="Accompagnatori[0].DatiAddizionaliAccompagnatore[1]._TipoDatoAddizionale.RegEx"
                        type="hidden" value="">
                    <div id="divCompanionAdd_0_2">
                        <label>
                            Indirizzo completo di residenza &nbsp;<b>*</b> </label>
                        <input id="Accompagnatori_0__DatiAddizionaliAccompagnatore_2___Descrizione"
                            name="Accompagnatori[0].DatiAddizionaliAccompagnatore[2]._Descrizione" type="hidden"
                            value="Indirizzo completo di residenza">
                        <input id="Accompagnatori_0__DatiAddizionaliAccompagnatore_2___testo" maxlength="100"
                            name="Accompagnatori[0].DatiAddizionaliAccompagnatore[2]._testo"
                            onchange="ControlloTesto(this)" type="text" value=""><input data-val="true"
                            data-val-required="The _Obbligatorio field is required."
                            id="Accompagnatori_0__DatiAddizionaliAccompagnatore_2___Obbligatorio"
                            name="Accompagnatori[0].DatiAddizionaliAccompagnatore[2]._Obbligatorio" type="hidden"
                            value="True">
                        <div>
                            <p><span class="field-validation-valid" data-valmsg-for="addizionale_0_2"
                                    data-valmsg-replace="true" style="color: red; display: none;"></span></p>
                            <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_0_2"
                                    data-valmsg-replace="true" style="color:red"></span> </p>
                        </div>
                    </div>
                    <input data-val="true" data-val-number="Il campo _Id deve essere un numero."
                        data-val-required="The _Id field is required." id="hiddenIdAcc0"
                        name="Accompagnatori[0].DatiAddizionaliAccompagnatore[2]._Id" type="hidden" value="67727"><input
                        data-val="true" data-val-number="Il campo IDTipoDatoAddizionale deve essere un numero."
                        data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADDAcc_2"
                        name="Accompagnatori[0].DatiAddizionaliAccompagnatore[2]._TipoDatoAddizionale.IDTipoDatoAddizionale"
                        type="hidden" value="25"><input data-val="true"
                        data-val-number="Il campo IDTipoControllo deve essere un numero."
                        data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAddAcc_2"
                        name="Accompagnatori[0].DatiAddizionaliAccompagnatore[2]._TipoDatoAddizionale.IDTipoControllo"
                        type="hidden" value="2"><input id="hiddenRegExAcc_2"
                        name="Accompagnatori[0].DatiAddizionaliAccompagnatore[2]._TipoDatoAddizionale.RegEx"
                        type="hidden" value="">
                </div>
                <input data-val="true" data-val-number="Il campo IdTipoParentela deve essere un numero."
                    id="hiddenParentela_0" name="Accompagnatori[0].IdTipoParentela" type="hidden" value="">
                <div id="divCompanion_1" style="display: block;">
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
                    <div id="ddlRelation_1"><select id="TypeOfRelationDDL1" data-index="1">
                            <option></option>
                            <option value="2">Coniuge</option>
                            <option value="11">Coniuge divorziato</option>
                            <option value="1">Coniuge separato</option>
                            <option value="9">Convivente</option>
                            <option value="8">Figlio di altro coniuge</option>
                            <option value="5">Figlio/a</option>
                            <option value="7">Fratello/Sorella</option>
                            <option value="3">Genero/Nuora</option>
                            <option value="6">Genitore</option>
                            <option value="12">Minore in affidamento</option>
                            <option value="10">Nipote</option>
                            <option value="4">Suocero/Suocera</option>
                        </select></div>
                    <div id="divCompanionAdd_1_0">
                        <label>
                            Figli minorenni &nbsp;<b>*</b> </label>
                        <input id="Accompagnatori_1__DatiAddizionaliAccompagnatore_0___Descrizione"
                            name="Accompagnatori[1].DatiAddizionaliAccompagnatore[0]._Descrizione" type="hidden"
                            value="Figli minorenni">
                        <select id="ddlsAcc_1_0" data-index="0" onchange="ControloSelect(this)">
                            <option value="0"> </option>
                            <option value="11">Si</option>
                            <option value="12">No</option>
                        </select><input data-val="true" data-val-required="The _Obbligatorio field is required."
                            id="Accompagnatori_1__DatiAddizionaliAccompagnatore_0___Obbligatorio"
                            name="Accompagnatori[1].DatiAddizionaliAccompagnatore[0]._Obbligatorio" type="hidden"
                            value="True">
                        <div>
                            <p><span class="field-validation-valid" data-valmsg-for="addizionale_1_0"
                                    data-valmsg-replace="true" style="color:red"></span></p>
                            <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_1_0"
                                    data-valmsg-replace="true" style="color:red"></span> </p>
                        </div>
                    </div>
                    <input data-val="true" data-val-number="Il campo _Id deve essere un numero."
                        data-val-required="The _Id field is required." id="hiddenIdAcc1"
                        name="Accompagnatori[1].DatiAddizionaliAccompagnatore[0]._Id" type="hidden" value="67725"><input
                        data-val="true" data-val-number="Il campo IDTipoDatoAddizionale deve essere un numero."
                        data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADDAcc_0"
                        name="Accompagnatori[1].DatiAddizionaliAccompagnatore[0]._TipoDatoAddizionale.IDTipoDatoAddizionale"
                        type="hidden" value="11"><input data-val="true"
                        data-val-number="Il campo IDTipoControllo deve essere un numero."
                        data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAddAcc_0"
                        name="Accompagnatori[1].DatiAddizionaliAccompagnatore[0]._TipoDatoAddizionale.IDTipoControllo"
                        type="hidden" value="3"><input id="hiddenRegExAcc_0"
                        name="Accompagnatori[1].DatiAddizionaliAccompagnatore[0]._TipoDatoAddizionale.RegEx"
                        type="hidden" value="">
                    <div id="divCompanionAdd_1_1">
                        <label>
                            Stato civile &nbsp;<b>*</b> </label>
                        <input id="Accompagnatori_1__DatiAddizionaliAccompagnatore_1___Descrizione"
                            name="Accompagnatori[1].DatiAddizionaliAccompagnatore[1]._Descrizione" type="hidden"
                            value="Stato civile">
                        <select id="ddlsAcc_1_1" data-index="1" onchange="ControloSelect(this)">
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
                            id="Accompagnatori_1__DatiAddizionaliAccompagnatore_1___Obbligatorio"
                            name="Accompagnatori[1].DatiAddizionaliAccompagnatore[1]._Obbligatorio" type="hidden"
                            value="True">
                        <div>
                            <p><span class="field-validation-valid" data-valmsg-for="addizionale_1_1"
                                    data-valmsg-replace="true" style="color:red"></span></p>
                            <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_1_1"
                                    data-valmsg-replace="true" style="color:red"></span> </p>
                        </div>
                    </div>
                    <input data-val="true" data-val-number="Il campo _Id deve essere un numero."
                        data-val-required="The _Id field is required." id="hiddenIdAcc1"
                        name="Accompagnatori[1].DatiAddizionaliAccompagnatore[1]._Id" type="hidden" value="67726"><input
                        data-val="true" data-val-number="Il campo IDTipoDatoAddizionale deve essere un numero."
                        data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADDAcc_1"
                        name="Accompagnatori[1].DatiAddizionaliAccompagnatore[1]._TipoDatoAddizionale.IDTipoDatoAddizionale"
                        type="hidden" value="17"><input data-val="true"
                        data-val-number="Il campo IDTipoControllo deve essere un numero."
                        data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAddAcc_1"
                        name="Accompagnatori[1].DatiAddizionaliAccompagnatore[1]._TipoDatoAddizionale.IDTipoControllo"
                        type="hidden" value="3"><input id="hiddenRegExAcc_1"
                        name="Accompagnatori[1].DatiAddizionaliAccompagnatore[1]._TipoDatoAddizionale.RegEx"
                        type="hidden" value="">
                    <div id="divCompanionAdd_1_2">
                        <label>
                            Indirizzo completo di residenza &nbsp;<b>*</b> </label>
                        <input id="Accompagnatori_1__DatiAddizionaliAccompagnatore_2___Descrizione"
                            name="Accompagnatori[1].DatiAddizionaliAccompagnatore[2]._Descrizione" type="hidden"
                            value="Indirizzo completo di residenza">
                        <input id="Accompagnatori_1__DatiAddizionaliAccompagnatore_2___testo" maxlength="100"
                            name="Accompagnatori[1].DatiAddizionaliAccompagnatore[2]._testo"
                            onchange="ControlloTesto(this)" type="text" value=""><input data-val="true"
                            data-val-required="The _Obbligatorio field is required."
                            id="Accompagnatori_1__DatiAddizionaliAccompagnatore_2___Obbligatorio"
                            name="Accompagnatori[1].DatiAddizionaliAccompagnatore[2]._Obbligatorio" type="hidden"
                            value="True">
                        <div>
                            <p><span class="field-validation-valid" data-valmsg-for="addizionale_1_2"
                                    data-valmsg-replace="true" style="color: red; display: none;"></span></p>
                            <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_1_2"
                                    data-valmsg-replace="true" style="color:red"></span> </p>
                        </div>
                    </div>
                    <input data-val="true" data-val-number="Il campo _Id deve essere un numero."
                        data-val-required="The _Id field is required." id="hiddenIdAcc1"
                        name="Accompagnatori[1].DatiAddizionaliAccompagnatore[2]._Id" type="hidden" value="67727"><input
                        data-val="true" data-val-number="Il campo IDTipoDatoAddizionale deve essere un numero."
                        data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADDAcc_2"
                        name="Accompagnatori[1].DatiAddizionaliAccompagnatore[2]._TipoDatoAddizionale.IDTipoDatoAddizionale"
                        type="hidden" value="25"><input data-val="true"
                        data-val-number="Il campo IDTipoControllo deve essere un numero."
                        data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAddAcc_2"
                        name="Accompagnatori[1].DatiAddizionaliAccompagnatore[2]._TipoDatoAddizionale.IDTipoControllo"
                        type="hidden" value="2"><input id="hiddenRegExAcc_2"
                        name="Accompagnatori[1].DatiAddizionaliAccompagnatore[2]._TipoDatoAddizionale.RegEx"
                        type="hidden" value="">
                </div>
                <input data-val="true" data-val-number="Il campo IdTipoParentela deve essere un numero."
                    id="hiddenParentela_1" name="Accompagnatori[1].IdTipoParentela" type="hidden" value="">
                <div id="divCompanion_2" style="display: block;">
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
                    <div id="ddlRelation_2"><select id="TypeOfRelationDDL2" data-index="2">
                            <option></option>
                            <option value="2">Coniuge</option>
                            <option value="11">Coniuge divorziato</option>
                            <option value="1">Coniuge separato</option>
                            <option value="9">Convivente</option>
                            <option value="8">Figlio di altro coniuge</option>
                            <option value="5">Figlio/a</option>
                            <option value="7">Fratello/Sorella</option>
                            <option value="3">Genero/Nuora</option>
                            <option value="6">Genitore</option>
                            <option value="12">Minore in affidamento</option>
                            <option value="10">Nipote</option>
                            <option value="4">Suocero/Suocera</option>
                        </select></div>
                    <div id="divCompanionAdd_2_0">
                        <label>
                            Figli minorenni &nbsp;<b>*</b> </label>
                        <input id="Accompagnatori_2__DatiAddizionaliAccompagnatore_0___Descrizione"
                            name="Accompagnatori[2].DatiAddizionaliAccompagnatore[0]._Descrizione" type="hidden"
                            value="Figli minorenni">
                        <select id="ddlsAcc_2_0" data-index="0" onchange="ControloSelect(this)">
                            <option value="0"> </option>
                            <option value="11">Si</option>
                            <option value="12">No</option>
                        </select><input data-val="true" data-val-required="The _Obbligatorio field is required."
                            id="Accompagnatori_2__DatiAddizionaliAccompagnatore_0___Obbligatorio"
                            name="Accompagnatori[2].DatiAddizionaliAccompagnatore[0]._Obbligatorio" type="hidden"
                            value="True">
                        <div>
                            <p><span class="field-validation-valid" data-valmsg-for="addizionale_2_0"
                                    data-valmsg-replace="true" style="color:red"></span></p>
                            <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_2_0"
                                    data-valmsg-replace="true" style="color:red"></span> </p>
                        </div>
                    </div>
                    <input data-val="true" data-val-number="Il campo _Id deve essere un numero."
                        data-val-required="The _Id field is required." id="hiddenIdAcc2"
                        name="Accompagnatori[2].DatiAddizionaliAccompagnatore[0]._Id" type="hidden" value="67725"><input
                        data-val="true" data-val-number="Il campo IDTipoDatoAddizionale deve essere un numero."
                        data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADDAcc_0"
                        name="Accompagnatori[2].DatiAddizionaliAccompagnatore[0]._TipoDatoAddizionale.IDTipoDatoAddizionale"
                        type="hidden" value="11"><input data-val="true"
                        data-val-number="Il campo IDTipoControllo deve essere un numero."
                        data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAddAcc_0"
                        name="Accompagnatori[2].DatiAddizionaliAccompagnatore[0]._TipoDatoAddizionale.IDTipoControllo"
                        type="hidden" value="3"><input id="hiddenRegExAcc_0"
                        name="Accompagnatori[2].DatiAddizionaliAccompagnatore[0]._TipoDatoAddizionale.RegEx"
                        type="hidden" value="">
                    <div id="divCompanionAdd_2_1">
                        <label>
                            Stato civile &nbsp;<b>*</b> </label>
                        <input id="Accompagnatori_2__DatiAddizionaliAccompagnatore_1___Descrizione"
                            name="Accompagnatori[2].DatiAddizionaliAccompagnatore[1]._Descrizione" type="hidden"
                            value="Stato civile">
                        <select id="ddlsAcc_2_1" data-index="1" onchange="ControloSelect(this)">
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
                            id="Accompagnatori_2__DatiAddizionaliAccompagnatore_1___Obbligatorio"
                            name="Accompagnatori[2].DatiAddizionaliAccompagnatore[1]._Obbligatorio" type="hidden"
                            value="True">
                        <div>
                            <p><span class="field-validation-valid" data-valmsg-for="addizionale_2_1"
                                    data-valmsg-replace="true" style="color:red"></span></p>
                            <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_2_1"
                                    data-valmsg-replace="true" style="color:red"></span> </p>
                        </div>
                    </div>
                    <input data-val="true" data-val-number="Il campo _Id deve essere un numero."
                        data-val-required="The _Id field is required." id="hiddenIdAcc2"
                        name="Accompagnatori[2].DatiAddizionaliAccompagnatore[1]._Id" type="hidden" value="67726"><input
                        data-val="true" data-val-number="Il campo IDTipoDatoAddizionale deve essere un numero."
                        data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADDAcc_1"
                        name="Accompagnatori[2].DatiAddizionaliAccompagnatore[1]._TipoDatoAddizionale.IDTipoDatoAddizionale"
                        type="hidden" value="17"><input data-val="true"
                        data-val-number="Il campo IDTipoControllo deve essere un numero."
                        data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAddAcc_1"
                        name="Accompagnatori[2].DatiAddizionaliAccompagnatore[1]._TipoDatoAddizionale.IDTipoControllo"
                        type="hidden" value="3"><input id="hiddenRegExAcc_1"
                        name="Accompagnatori[2].DatiAddizionaliAccompagnatore[1]._TipoDatoAddizionale.RegEx"
                        type="hidden" value="">
                    <div id="divCompanionAdd_2_2">
                        <label>
                            Indirizzo completo di residenza &nbsp;<b>*</b> </label>
                        <input id="Accompagnatori_2__DatiAddizionaliAccompagnatore_2___Descrizione"
                            name="Accompagnatori[2].DatiAddizionaliAccompagnatore[2]._Descrizione" type="hidden"
                            value="Indirizzo completo di residenza">
                        <input id="Accompagnatori_2__DatiAddizionaliAccompagnatore_2___testo" maxlength="100"
                            name="Accompagnatori[2].DatiAddizionaliAccompagnatore[2]._testo"
                            onchange="ControlloTesto(this)" type="text" value=""><input data-val="true"
                            data-val-required="The _Obbligatorio field is required."
                            id="Accompagnatori_2__DatiAddizionaliAccompagnatore_2___Obbligatorio"
                            name="Accompagnatori[2].DatiAddizionaliAccompagnatore[2]._Obbligatorio" type="hidden"
                            value="True">
                        <div>
                            <p><span class="field-validation-valid" data-valmsg-for="addizionale_2_2"
                                    data-valmsg-replace="true" style="color: red; display: none;"></span></p>
                            <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_2_2"
                                    data-valmsg-replace="true" style="color:red"></span> </p>
                        </div>
                    </div>
                    <input data-val="true" data-val-number="Il campo _Id deve essere un numero."
                        data-val-required="The _Id field is required." id="hiddenIdAcc2"
                        name="Accompagnatori[2].DatiAddizionaliAccompagnatore[2]._Id" type="hidden" value="67727"><input
                        data-val="true" data-val-number="Il campo IDTipoDatoAddizionale deve essere un numero."
                        data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADDAcc_2"
                        name="Accompagnatori[2].DatiAddizionaliAccompagnatore[2]._TipoDatoAddizionale.IDTipoDatoAddizionale"
                        type="hidden" value="25"><input data-val="true"
                        data-val-number="Il campo IDTipoControllo deve essere un numero."
                        data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAddAcc_2"
                        name="Accompagnatori[2].DatiAddizionaliAccompagnatore[2]._TipoDatoAddizionale.IDTipoControllo"
                        type="hidden" value="2"><input id="hiddenRegExAcc_2"
                        name="Accompagnatori[2].DatiAddizionaliAccompagnatore[2]._TipoDatoAddizionale.RegEx"
                        type="hidden" value="">
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
                            Figli minorenni &nbsp;<b>*</b> </label>
                        <input id="Accompagnatori_3__DatiAddizionaliAccompagnatore_0___Descrizione"
                            name="Accompagnatori[3].DatiAddizionaliAccompagnatore[0]._Descrizione" type="hidden"
                            value="Figli minorenni">
                        <select id="ddlsAcc_3_0" data-index="0" onchange="ControloSelect(this)">
                            <option value="0"> </option>
                            <option value="11">Si</option>
                            <option value="12">No</option>
                        </select><input data-val="true" data-val-required="The _Obbligatorio field is required."
                            id="Accompagnatori_3__DatiAddizionaliAccompagnatore_0___Obbligatorio"
                            name="Accompagnatori[3].DatiAddizionaliAccompagnatore[0]._Obbligatorio" type="hidden"
                            value="True">
                        <div>
                            <p><span class="field-validation-valid" data-valmsg-for="addizionale_3_0"
                                    data-valmsg-replace="true" style="color:red"></span></p>
                            <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_3_0"
                                    data-valmsg-replace="true" style="color:red"></span> </p>
                        </div>
                    </div>
                    <input data-val="true" data-val-number="Il campo _Id deve essere un numero."
                        data-val-required="The _Id field is required." id="hiddenIdAcc3"
                        name="Accompagnatori[3].DatiAddizionaliAccompagnatore[0]._Id" type="hidden" value="67725"><input
                        data-val="true" data-val-number="Il campo IDTipoDatoAddizionale deve essere un numero."
                        data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADDAcc_0"
                        name="Accompagnatori[3].DatiAddizionaliAccompagnatore[0]._TipoDatoAddizionale.IDTipoDatoAddizionale"
                        type="hidden" value="11"><input data-val="true"
                        data-val-number="Il campo IDTipoControllo deve essere un numero."
                        data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAddAcc_0"
                        name="Accompagnatori[3].DatiAddizionaliAccompagnatore[0]._TipoDatoAddizionale.IDTipoControllo"
                        type="hidden" value="3"><input id="hiddenRegExAcc_0"
                        name="Accompagnatori[3].DatiAddizionaliAccompagnatore[0]._TipoDatoAddizionale.RegEx"
                        type="hidden" value="">
                    <div id="divCompanionAdd_3_1">
                        <label>
                            Stato civile &nbsp;<b>*</b> </label>
                        <input id="Accompagnatori_3__DatiAddizionaliAccompagnatore_1___Descrizione"
                            name="Accompagnatori[3].DatiAddizionaliAccompagnatore[1]._Descrizione" type="hidden"
                            value="Stato civile">
                        <select id="ddlsAcc_3_1" data-index="1" onchange="ControloSelect(this)">
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
                            id="Accompagnatori_3__DatiAddizionaliAccompagnatore_1___Obbligatorio"
                            name="Accompagnatori[3].DatiAddizionaliAccompagnatore[1]._Obbligatorio" type="hidden"
                            value="True">
                        <div>
                            <p><span class="field-validation-valid" data-valmsg-for="addizionale_3_1"
                                    data-valmsg-replace="true" style="color:red"></span></p>
                            <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_3_1"
                                    data-valmsg-replace="true" style="color:red"></span> </p>
                        </div>
                    </div>
                    <input data-val="true" data-val-number="Il campo _Id deve essere un numero."
                        data-val-required="The _Id field is required." id="hiddenIdAcc3"
                        name="Accompagnatori[3].DatiAddizionaliAccompagnatore[1]._Id" type="hidden" value="67726"><input
                        data-val="true" data-val-number="Il campo IDTipoDatoAddizionale deve essere un numero."
                        data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADDAcc_1"
                        name="Accompagnatori[3].DatiAddizionaliAccompagnatore[1]._TipoDatoAddizionale.IDTipoDatoAddizionale"
                        type="hidden" value="17"><input data-val="true"
                        data-val-number="Il campo IDTipoControllo deve essere un numero."
                        data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAddAcc_1"
                        name="Accompagnatori[3].DatiAddizionaliAccompagnatore[1]._TipoDatoAddizionale.IDTipoControllo"
                        type="hidden" value="3"><input id="hiddenRegExAcc_1"
                        name="Accompagnatori[3].DatiAddizionaliAccompagnatore[1]._TipoDatoAddizionale.RegEx"
                        type="hidden" value="">
                    <div id="divCompanionAdd_3_2">
                        <label>
                            Indirizzo completo di residenza &nbsp;<b>*</b> </label>
                        <input id="Accompagnatori_3__DatiAddizionaliAccompagnatore_2___Descrizione"
                            name="Accompagnatori[3].DatiAddizionaliAccompagnatore[2]._Descrizione" type="hidden"
                            value="Indirizzo completo di residenza">
                        <input id="Accompagnatori_3__DatiAddizionaliAccompagnatore_2___testo" maxlength="100"
                            name="Accompagnatori[3].DatiAddizionaliAccompagnatore[2]._testo"
                            onchange="ControlloTesto(this)" type="text" value=""><input data-val="true"
                            data-val-required="The _Obbligatorio field is required."
                            id="Accompagnatori_3__DatiAddizionaliAccompagnatore_2___Obbligatorio"
                            name="Accompagnatori[3].DatiAddizionaliAccompagnatore[2]._Obbligatorio" type="hidden"
                            value="True">
                        <div>
                            <p><span class="field-validation-valid" data-valmsg-for="addizionale_3_2"
                                    data-valmsg-replace="true" style="color:red"></span></p>
                            <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_3_2"
                                    data-valmsg-replace="true" style="color:red"></span> </p>
                        </div>
                    </div>
                    <input data-val="true" data-val-number="Il campo _Id deve essere un numero."
                        data-val-required="The _Id field is required." id="hiddenIdAcc3"
                        name="Accompagnatori[3].DatiAddizionaliAccompagnatore[2]._Id" type="hidden" value="67727"><input
                        data-val="true" data-val-number="Il campo IDTipoDatoAddizionale deve essere un numero."
                        data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADDAcc_2"
                        name="Accompagnatori[3].DatiAddizionaliAccompagnatore[2]._TipoDatoAddizionale.IDTipoDatoAddizionale"
                        type="hidden" value="25"><input data-val="true"
                        data-val-number="Il campo IDTipoControllo deve essere un numero."
                        data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAddAcc_2"
                        name="Accompagnatori[3].DatiAddizionaliAccompagnatore[2]._TipoDatoAddizionale.IDTipoControllo"
                        type="hidden" value="2"><input id="hiddenRegExAcc_2"
                        name="Accompagnatori[3].DatiAddizionaliAccompagnatore[2]._TipoDatoAddizionale.RegEx"
                        type="hidden" value="">
                </div>
                <input data-val="true" data-val-number="Il campo IdTipoParentela deve essere un numero."
                    id="hiddenParentela_3" name="Accompagnatori[3].IdTipoParentela" type="hidden" value=""> <input
                    data-val="true" data-val-number="Il campo _idSelezionato deve essere un numero."
                    data-val-required="The _idSelezionato field is required." id="hiddenSelezionatoAcc_0_0"
                    name="Accompagnatori[0].DatiAddizionaliAccompagnatore[0]._idSelezionato" type="hidden"
                    value="0"><input data-val="true" data-val-number="Il campo _idSelezionato deve essere un numero."
                    data-val-required="The _idSelezionato field is required." id="hiddenSelezionatoAcc_0_1"
                    name="Accompagnatori[0].DatiAddizionaliAccompagnatore[1]._idSelezionato" type="hidden"
                    value="0"><input data-val="true" data-val-number="Il campo _idSelezionato deve essere un numero."
                    data-val-required="The _idSelezionato field is required." id="hiddenSelezionatoAcc_1_0"
                    name="Accompagnatori[1].DatiAddizionaliAccompagnatore[0]._idSelezionato" type="hidden"
                    value="0"><input data-val="true" data-val-number="Il campo _idSelezionato deve essere un numero."
                    data-val-required="The _idSelezionato field is required." id="hiddenSelezionatoAcc_1_1"
                    name="Accompagnatori[1].DatiAddizionaliAccompagnatore[1]._idSelezionato" type="hidden"
                    value="0"><input data-val="true" data-val-number="Il campo _idSelezionato deve essere un numero."
                    data-val-required="The _idSelezionato field is required." id="hiddenSelezionatoAcc_2_0"
                    name="Accompagnatori[2].DatiAddizionaliAccompagnatore[0]._idSelezionato" type="hidden"
                    value="0"><input data-val="true" data-val-number="Il campo _idSelezionato deve essere un numero."
                    data-val-required="The _idSelezionato field is required." id="hiddenSelezionatoAcc_2_1"
                    name="Accompagnatori[2].DatiAddizionaliAccompagnatore[1]._idSelezionato" type="hidden"
                    value="0"><input data-val="true" data-val-number="Il campo _idSelezionato deve essere un numero."
                    data-val-required="The _idSelezionato field is required." id="hiddenSelezionatoAcc_3_0"
                    name="Accompagnatori[3].DatiAddizionaliAccompagnatore[0]._idSelezionato" type="hidden"
                    value="0"><input data-val="true" data-val-number="Il campo _idSelezionato deve essere un numero."
                    data-val-required="The _idSelezionato field is required." id="hiddenSelezionatoAcc_3_1"
                    name="Accompagnatori[3].DatiAddizionaliAccompagnatore[1]._idSelezionato" type="hidden" value="0">
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
             <div>
                <div class="grecaptcha-badge" data-style="none"
                    style="width: 256px; height: 60px; position: fixed; visibility: hidden;">
                    <div class="grecaptcha-logo"><iframe title="reCAPTCHA" width="256" height="60" role="presentation"
                            name="a-cdwbjqn9qqau" frameborder="0" scrolling="no"
                            sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation"
                            src="./anchor.html"></iframe></div>
                    <div class="grecaptcha-error"></div><textarea id="g-recaptcha-response" name="g-recaptcha-response"
                        class="g-recaptcha-response"
                        style="width: 250px; height: 40px; border: 1px solid rgb(193, 193, 193); margin: 10px 25px; padding: 0px; resize: none; display: none;"></textarea>
                </div><iframe style="display: none;" src="./.html"></iframe>
            </div><button type="submit" id="btnAvanti" class="button primary g-recaptcha"
                data-sitekey="6LdkwrIqAAAAAC4NX-g_j7lEx9vh1rg94ZL2cFfY" data-callback="onSubmit">Avanti</button>
        </div>
    </div>
</form>
`;
