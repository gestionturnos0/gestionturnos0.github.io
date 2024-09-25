const container = document.getElementsByTagName('section')[0];
container.innerHTML = '';

container.innerHTML = `
<form action="https://prenotami.esteri.it/Services/Booking/4685" enctype="multipart/form-data" id="bookingForm"
    method="post">
    <div class="container" id="div-container">

        <h1 class="heading-container" id="ServizioDescrizione">Servizio rilascio passaporti</h1>
        <input id="hiddenServizioDesc" name="ServizioDescrizione" type="hidden" value="Servizio rilascio passaporti">
        <input data-val="true" data-val-required="The MessaggioRassicuranteWaitingList field is required."
            id="MessaggioRassicuranteWaitingList" name="MessaggioRassicuranteWaitingList" type="hidden" value="True">
        <input data-val="true" data-val-required="The isWaitingListEnabled field is required." id="isWaitingListEnabled"
            name="isWaitingListEnabled" type="hidden" value="False">


        <div id="divRiepilogoPrenotazione" class="riepilogoPrenotazione" style="">
            <div id="divTitolo">Prenotazione Singola</div>
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
                    name="IDServizioErogato" type="hidden" value="4685">
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
                    name="DatiAddizionaliPrenotante[0]._Id" type="hidden" value="67468"><input data-val="true"
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
                                data-valmsg-replace="true" style="color:red"></span></p>
                        <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_1"
                                data-valmsg-replace="true" style="color:red"></span></p>
                    </div>
                </div>
                <input data-val="true" data-val-number="Il campo _Id deve essere un numero."
                    data-val-required="The _Id field is required." id="hiddenId1"
                    name="DatiAddizionaliPrenotante[1]._Id" type="hidden" value="67469"><input data-val="true"
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
                        Numero figli minorenni &nbsp;<b>*</b> </label>
                    <input id="DatiAddizionaliPrenotante_2___Descrizione"
                        name="DatiAddizionaliPrenotante[2]._Descrizione" type="hidden" value="Numero figli minorenni">
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
                <input data-val="true" data-val-number="Il campo _Id deve essere un numero."
                    data-val-required="The _Id field is required." id="hiddenId2"
                    name="DatiAddizionaliPrenotante[2]._Id" type="hidden" value="67470"><input data-val="true"
                    data-val-number="Il campo IDTipoDatoAddizionale deve essere un numero."
                    data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADD_2"
                    name="DatiAddizionaliPrenotante[2]._TipoDatoAddizionale.IDTipoDatoAddizionale" type="hidden"
                    value="12"><input data-val="true" data-val-number="Il campo IDTipoControllo deve essere un numero."
                    data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAdd_2"
                    name="DatiAddizionaliPrenotante[2]._TipoDatoAddizionale.IDTipoControllo" type="hidden"
                    value="2"><input id="hiddenRegEx_2" name="DatiAddizionaliPrenotante[2]._TipoDatoAddizionale.RegEx"
                    type="hidden" value="">
                <div id="datoaddizionale_3">
                    <label id="addizionale">
                        Stato civile &nbsp;<b>*</b> </label>
                    <input id="DatiAddizionaliPrenotante_3___Descrizione"
                        name="DatiAddizionaliPrenotante[3]._Descrizione" type="hidden" value="Stato civile">
                    <select id="ddls_3" data-index="3" onchange="ControloSelect(this)">
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
                    name="DatiAddizionaliPrenotante[3]._Id" type="hidden" value="67471"><input data-val="true"
                    data-val-number="Il campo IDTipoDatoAddizionale deve essere un numero."
                    data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADD_3"
                    name="DatiAddizionaliPrenotante[3]._TipoDatoAddizionale.IDTipoDatoAddizionale" type="hidden"
                    value="17"><input data-val="true" data-val-number="Il campo IDTipoControllo deve essere un numero."
                    data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAdd_3"
                    name="DatiAddizionaliPrenotante[3]._TipoDatoAddizionale.IDTipoControllo" type="hidden"
                    value="3"><input id="hiddenRegEx_3" name="DatiAddizionaliPrenotante[3]._TipoDatoAddizionale.RegEx"
                    type="hidden" value="">
                <div id="datoaddizionale_4">
                    <label id="addizionale">
                        Nome e cognome coniuge / unito-a civilmente &nbsp;<b>*</b> </label>
                    <input id="DatiAddizionaliPrenotante_4___Descrizione"
                        name="DatiAddizionaliPrenotante[4]._Descrizione" type="hidden"
                        value="Nome e cognome coniuge / unito-a civilmente">
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
                    name="DatiAddizionaliPrenotante[4]._Id" type="hidden" value="67472"><input data-val="true"
                    data-val-number="Il campo IDTipoDatoAddizionale deve essere un numero."
                    data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADD_4"
                    name="DatiAddizionaliPrenotante[4]._TipoDatoAddizionale.IDTipoDatoAddizionale" type="hidden"
                    value="18"><input data-val="true" data-val-number="Il campo IDTipoControllo deve essere un numero."
                    data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAdd_4"
                    name="DatiAddizionaliPrenotante[4]._TipoDatoAddizionale.IDTipoControllo" type="hidden"
                    value="2"><input id="hiddenRegEx_4" name="DatiAddizionaliPrenotante[4]._TipoDatoAddizionale.RegEx"
                    type="hidden" value="">
                <div id="datoaddizionale_5">
                    <label id="addizionale">
                        In possesso di passaporto italiano scaduto/in scadenza &nbsp;<b>*</b> </label>
                    <input id="DatiAddizionaliPrenotante_5___Descrizione"
                        name="DatiAddizionaliPrenotante[5]._Descrizione" type="hidden"
                        value="In possesso di passaporto italiano scaduto/in scadenza">
                    <select id="ddls_5" data-index="5" onchange="ControloSelect(this)">
                        <option value="0"> </option>
                        <option value="1">Si</option>
                        <option value="2">No</option>
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
                <input data-val="true" data-val-number="Il campo _Id deve essere un numero."
                    data-val-required="The _Id field is required." id="hiddenId5"
                    name="DatiAddizionaliPrenotante[5]._Id" type="hidden" value="67473"><input data-val="true"
                    data-val-number="Il campo IDTipoDatoAddizionale deve essere un numero."
                    data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADD_5"
                    name="DatiAddizionaliPrenotante[5]._TipoDatoAddizionale.IDTipoDatoAddizionale" type="hidden"
                    value="1"><input data-val="true" data-val-number="Il campo IDTipoControllo deve essere un numero."
                    data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAdd_5"
                    name="DatiAddizionaliPrenotante[5]._TipoDatoAddizionale.IDTipoControllo" type="hidden"
                    value="3"><input id="hiddenRegEx_5" name="DatiAddizionaliPrenotante[5]._TipoDatoAddizionale.RegEx"
                    type="hidden" value="">
                <div id="datoaddizionale_6">
                    <label id="addizionale">
                        Numero di passaporto &nbsp;<b>*</b> </label>
                    <input id="DatiAddizionaliPrenotante_6___Descrizione"
                        name="DatiAddizionaliPrenotante[6]._Descrizione" type="hidden" value="Numero di passaporto">
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
                <input data-val="true" data-val-number="Il campo _Id deve essere un numero."
                    data-val-required="The _Id field is required." id="hiddenId6"
                    name="DatiAddizionaliPrenotante[6]._Id" type="hidden" value="67474"><input data-val="true"
                    data-val-number="Il campo IDTipoDatoAddizionale deve essere un numero."
                    data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADD_6"
                    name="DatiAddizionaliPrenotante[6]._TipoDatoAddizionale.IDTipoDatoAddizionale" type="hidden"
                    value="2"><input data-val="true" data-val-number="Il campo IDTipoControllo deve essere un numero."
                    data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAdd_6"
                    name="DatiAddizionaliPrenotante[6]._TipoDatoAddizionale.IDTipoControllo" type="hidden"
                    value="2"><input id="hiddenRegEx_6" name="DatiAddizionaliPrenotante[6]._TipoDatoAddizionale.RegEx"
                    type="hidden" value="">
                <div id="datoaddizionale_7">
                    <label id="addizionale">
                        Statura in cm &nbsp;<b>*</b> </label>
                    <input id="DatiAddizionaliPrenotante_7___Descrizione"
                        name="DatiAddizionaliPrenotante[7]._Descrizione" type="hidden" value="Statura in cm">
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
                <input data-val="true" data-val-number="Il campo _Id deve essere un numero."
                    data-val-required="The _Id field is required." id="hiddenId7"
                    name="DatiAddizionaliPrenotante[7]._Id" type="hidden" value="67475"><input data-val="true"
                    data-val-number="Il campo IDTipoDatoAddizionale deve essere un numero."
                    data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADD_7"
                    name="DatiAddizionaliPrenotante[7]._TipoDatoAddizionale.IDTipoDatoAddizionale" type="hidden"
                    value="22"><input data-val="true" data-val-number="Il campo IDTipoControllo deve essere un numero."
                    data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAdd_7"
                    name="DatiAddizionaliPrenotante[7]._TipoDatoAddizionale.IDTipoControllo" type="hidden"
                    value="2"><input id="hiddenRegEx_7" name="DatiAddizionaliPrenotante[7]._TipoDatoAddizionale.RegEx"
                    type="hidden" value="">
                <div id="datoaddizionale_8">
                    <label id="addizionale">
                        Colore degli occhi &nbsp;<b>*</b> </label>
                    <input id="DatiAddizionaliPrenotante_8___Descrizione"
                        name="DatiAddizionaliPrenotante[8]._Descrizione" type="hidden" value="Colore degli occhi">
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
                <input data-val="true" data-val-number="Il campo _Id deve essere un numero."
                    data-val-required="The _Id field is required." id="hiddenId8"
                    name="DatiAddizionaliPrenotante[8]._Id" type="hidden" value="67476"><input data-val="true"
                    data-val-number="Il campo IDTipoDatoAddizionale deve essere un numero."
                    data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADD_8"
                    name="DatiAddizionaliPrenotante[8]._TipoDatoAddizionale.IDTipoDatoAddizionale" type="hidden"
                    value="23"><input data-val="true" data-val-number="Il campo IDTipoControllo deve essere un numero."
                    data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAdd_8"
                    name="DatiAddizionaliPrenotante[8]._TipoDatoAddizionale.IDTipoControllo" type="hidden"
                    value="3"><input id="hiddenRegEx_8" name="DatiAddizionaliPrenotante[8]._TipoDatoAddizionale.RegEx"
                    type="hidden" value="">
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
                        name="DocumentiPrenotante[0]._Id" type="hidden" value="15713">
                </div>
                <input data-val="true" data-val-number="Il campo IDTipoDocumento deve essere un numero."
                    data-val-required="The IDTipoDocumento field is required." id="hiddenIdDocADD_0"
                    name="DocumentiPrenotante[0]._TipoDocumento.IDTipoDocumento" type="hidden" value="4"><input
                    id="hiddenFile_0" name="DocumentiPrenotante[0]._File" type="hidden" value="">
                <div id="docAddizionale_1">
                    <label id="doc">
                        Passaporto </label>
                    <p class="helper">E' possibile inserire file in formato PDF di massimo un 1MB<b>;</b></p>
                    <input id="DocumentiPrenotante_1___Descrizione" name="DocumentiPrenotante[1]._Descrizione"
                        type="hidden" value="Passaporto">
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
                    <input data-val="true" data-val-number="Il campo _Id deve essere un numero."
                        data-val-required="The _Id field is required." id="DocumentiPrenotante_1___Id"
                        name="DocumentiPrenotante[1]._Id" type="hidden" value="15714">
                </div>
                <input data-val="true" data-val-number="Il campo IDTipoDocumento deve essere un numero."
                    data-val-required="The IDTipoDocumento field is required." id="hiddenIdDocADD_1"
                    name="DocumentiPrenotante[1]._TipoDocumento.IDTipoDocumento" type="hidden" value="1"><input
                    id="hiddenFile_1" name="DocumentiPrenotante[1]._File" type="hidden" value=""> <input data-val="true"
                    data-val-number="Il campo _idSelezionato deve essere un numero."
                    data-val-required="The _idSelezionato field is required." id="hiddenSelezionato_1"
                    name="DatiAddizionaliPrenotante[1]._idSelezionato" type="hidden" value="0"><input data-val="true"
                    data-val-number="Il campo _idSelezionato deve essere un numero."
                    data-val-required="The _idSelezionato field is required." id="hiddenSelezionato_3"
                    name="DatiAddizionaliPrenotante[3]._idSelezionato" type="hidden" value="0"><input data-val="true"
                    data-val-number="Il campo _idSelezionato deve essere un numero."
                    data-val-required="The _idSelezionato field is required." id="hiddenSelezionato_5"
                    name="DatiAddizionaliPrenotante[5]._idSelezionato" type="hidden" value="0"><input data-val="true"
                    data-val-number="Il campo _idSelezionato deve essere un numero."
                    data-val-required="The _idSelezionato field is required." id="hiddenSelezionato_8"
                    name="DatiAddizionaliPrenotante[8]._idSelezionato" type="hidden" value="0">
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
                            Indirizzo completo di residenza &nbsp;<b>*</b> </label>
                        <input id="Accompagnatori_0__DatiAddizionaliAccompagnatore_0___Descrizione"
                            name="Accompagnatori[0].DatiAddizionaliAccompagnatore[0]._Descrizione" type="hidden"
                            value="Indirizzo completo di residenza">
                    </div>
                    <input data-val="true" data-val-number="Il campo _Id deve essere un numero."
                        data-val-required="The _Id field is required." id="hiddenIdAcc0"
                        name="Accompagnatori[0].DatiAddizionaliAccompagnatore[0]._Id" type="hidden" value="67477"><input
                        data-val="true" data-val-number="Il campo IDTipoDatoAddizionale deve essere un numero."
                        data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADDAcc_0"
                        name="Accompagnatori[0].DatiAddizionaliAccompagnatore[0]._TipoDatoAddizionale.IDTipoDatoAddizionale"
                        type="hidden" value="25"><input data-val="true"
                        data-val-number="Il campo IDTipoControllo deve essere un numero."
                        data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAddAcc_0"
                        name="Accompagnatori[0].DatiAddizionaliAccompagnatore[0]._TipoDatoAddizionale.IDTipoControllo"
                        type="hidden" value="2"><input id="hiddenRegExAcc_0"
                        name="Accompagnatori[0].DatiAddizionaliAccompagnatore[0]._TipoDatoAddizionale.RegEx"
                        type="hidden" value="">
                    <div id="divCompanionAdd_0_1">
                        <label>
                            Figli minorenni &nbsp;<b>*</b> </label>
                        <input id="Accompagnatori_0__DatiAddizionaliAccompagnatore_1___Descrizione"
                            name="Accompagnatori[0].DatiAddizionaliAccompagnatore[1]._Descrizione" type="hidden"
                            value="Figli minorenni">
                    </div>
                    <input data-val="true" data-val-number="Il campo _Id deve essere un numero."
                        data-val-required="The _Id field is required." id="hiddenIdAcc0"
                        name="Accompagnatori[0].DatiAddizionaliAccompagnatore[1]._Id" type="hidden" value="67478"><input
                        data-val="true" data-val-number="Il campo IDTipoDatoAddizionale deve essere un numero."
                        data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADDAcc_1"
                        name="Accompagnatori[0].DatiAddizionaliAccompagnatore[1]._TipoDatoAddizionale.IDTipoDatoAddizionale"
                        type="hidden" value="11"><input data-val="true"
                        data-val-number="Il campo IDTipoControllo deve essere un numero."
                        data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAddAcc_1"
                        name="Accompagnatori[0].DatiAddizionaliAccompagnatore[1]._TipoDatoAddizionale.IDTipoControllo"
                        type="hidden" value="3"><input id="hiddenRegExAcc_1"
                        name="Accompagnatori[0].DatiAddizionaliAccompagnatore[1]._TipoDatoAddizionale.RegEx"
                        type="hidden" value="">
                    <div id="divCompanionAdd_0_2">
                        <label>
                            Numero figli minorenni &nbsp;<b>*</b> </label>
                        <input id="Accompagnatori_0__DatiAddizionaliAccompagnatore_2___Descrizione"
                            name="Accompagnatori[0].DatiAddizionaliAccompagnatore[2]._Descrizione" type="hidden"
                            value="Numero figli minorenni">
                    </div>
                    <input data-val="true" data-val-number="Il campo _Id deve essere un numero."
                        data-val-required="The _Id field is required." id="hiddenIdAcc0"
                        name="Accompagnatori[0].DatiAddizionaliAccompagnatore[2]._Id" type="hidden" value="67479"><input
                        data-val="true" data-val-number="Il campo IDTipoDatoAddizionale deve essere un numero."
                        data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADDAcc_2"
                        name="Accompagnatori[0].DatiAddizionaliAccompagnatore[2]._TipoDatoAddizionale.IDTipoDatoAddizionale"
                        type="hidden" value="12"><input data-val="true"
                        data-val-number="Il campo IDTipoControllo deve essere un numero."
                        data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAddAcc_2"
                        name="Accompagnatori[0].DatiAddizionaliAccompagnatore[2]._TipoDatoAddizionale.IDTipoControllo"
                        type="hidden" value="2"><input id="hiddenRegExAcc_2"
                        name="Accompagnatori[0].DatiAddizionaliAccompagnatore[2]._TipoDatoAddizionale.RegEx"
                        type="hidden" value="">
                    <div id="divCompanionAdd_0_3">
                        <label>
                            Stato civile &nbsp;<b>*</b> </label>
                        <input id="Accompagnatori_0__DatiAddizionaliAccompagnatore_3___Descrizione"
                            name="Accompagnatori[0].DatiAddizionaliAccompagnatore[3]._Descrizione" type="hidden"
                            value="Stato civile">
                    </div>
                    <input data-val="true" data-val-number="Il campo _Id deve essere un numero."
                        data-val-required="The _Id field is required." id="hiddenIdAcc0"
                        name="Accompagnatori[0].DatiAddizionaliAccompagnatore[3]._Id" type="hidden" value="67480"><input
                        data-val="true" data-val-number="Il campo IDTipoDatoAddizionale deve essere un numero."
                        data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADDAcc_3"
                        name="Accompagnatori[0].DatiAddizionaliAccompagnatore[3]._TipoDatoAddizionale.IDTipoDatoAddizionale"
                        type="hidden" value="17"><input data-val="true"
                        data-val-number="Il campo IDTipoControllo deve essere un numero."
                        data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAddAcc_3"
                        name="Accompagnatori[0].DatiAddizionaliAccompagnatore[3]._TipoDatoAddizionale.IDTipoControllo"
                        type="hidden" value="3"><input id="hiddenRegExAcc_3"
                        name="Accompagnatori[0].DatiAddizionaliAccompagnatore[3]._TipoDatoAddizionale.RegEx"
                        type="hidden" value="">
                    <div id="divCompanionAdd_0_4">
                        <label>
                            Nome e cognome coniuge / unito-a civilmente &nbsp;<b>*</b> </label>
                        <input id="Accompagnatori_0__DatiAddizionaliAccompagnatore_4___Descrizione"
                            name="Accompagnatori[0].DatiAddizionaliAccompagnatore[4]._Descrizione" type="hidden"
                            value="Nome e cognome coniuge / unito-a civilmente">
                    </div>
                    <input data-val="true" data-val-number="Il campo _Id deve essere un numero."
                        data-val-required="The _Id field is required." id="hiddenIdAcc0"
                        name="Accompagnatori[0].DatiAddizionaliAccompagnatore[4]._Id" type="hidden" value="67481"><input
                        data-val="true" data-val-number="Il campo IDTipoDatoAddizionale deve essere un numero."
                        data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADDAcc_4"
                        name="Accompagnatori[0].DatiAddizionaliAccompagnatore[4]._TipoDatoAddizionale.IDTipoDatoAddizionale"
                        type="hidden" value="18"><input data-val="true"
                        data-val-number="Il campo IDTipoControllo deve essere un numero."
                        data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAddAcc_4"
                        name="Accompagnatori[0].DatiAddizionaliAccompagnatore[4]._TipoDatoAddizionale.IDTipoControllo"
                        type="hidden" value="2"><input id="hiddenRegExAcc_4"
                        name="Accompagnatori[0].DatiAddizionaliAccompagnatore[4]._TipoDatoAddizionale.RegEx"
                        type="hidden" value="">
                    <div id="divCompanionAdd_0_5">
                        <label>
                            In possesso di passaporto italiano scaduto/in scadenza &nbsp;<b>*</b> </label>
                        <input id="Accompagnatori_0__DatiAddizionaliAccompagnatore_5___Descrizione"
                            name="Accompagnatori[0].DatiAddizionaliAccompagnatore[5]._Descrizione" type="hidden"
                            value="In possesso di passaporto italiano scaduto/in scadenza">
                    </div>
                    <input data-val="true" data-val-number="Il campo _Id deve essere un numero."
                        data-val-required="The _Id field is required." id="hiddenIdAcc0"
                        name="Accompagnatori[0].DatiAddizionaliAccompagnatore[5]._Id" type="hidden" value="67482"><input
                        data-val="true" data-val-number="Il campo IDTipoDatoAddizionale deve essere un numero."
                        data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADDAcc_5"
                        name="Accompagnatori[0].DatiAddizionaliAccompagnatore[5]._TipoDatoAddizionale.IDTipoDatoAddizionale"
                        type="hidden" value="1"><input data-val="true"
                        data-val-number="Il campo IDTipoControllo deve essere un numero."
                        data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAddAcc_5"
                        name="Accompagnatori[0].DatiAddizionaliAccompagnatore[5]._TipoDatoAddizionale.IDTipoControllo"
                        type="hidden" value="3"><input id="hiddenRegExAcc_5"
                        name="Accompagnatori[0].DatiAddizionaliAccompagnatore[5]._TipoDatoAddizionale.RegEx"
                        type="hidden" value="">
                    <div id="divCompanionAdd_0_6">
                        <label>
                            Numero di passaporto &nbsp;<b>*</b> </label>
                        <input id="Accompagnatori_0__DatiAddizionaliAccompagnatore_6___Descrizione"
                            name="Accompagnatori[0].DatiAddizionaliAccompagnatore[6]._Descrizione" type="hidden"
                            value="Numero di passaporto">
                    </div>
                    <input data-val="true" data-val-number="Il campo _Id deve essere un numero."
                        data-val-required="The _Id field is required." id="hiddenIdAcc0"
                        name="Accompagnatori[0].DatiAddizionaliAccompagnatore[6]._Id" type="hidden" value="67483"><input
                        data-val="true" data-val-number="Il campo IDTipoDatoAddizionale deve essere un numero."
                        data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADDAcc_6"
                        name="Accompagnatori[0].DatiAddizionaliAccompagnatore[6]._TipoDatoAddizionale.IDTipoDatoAddizionale"
                        type="hidden" value="2"><input data-val="true"
                        data-val-number="Il campo IDTipoControllo deve essere un numero."
                        data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAddAcc_6"
                        name="Accompagnatori[0].DatiAddizionaliAccompagnatore[6]._TipoDatoAddizionale.IDTipoControllo"
                        type="hidden" value="2"><input id="hiddenRegExAcc_6"
                        name="Accompagnatori[0].DatiAddizionaliAccompagnatore[6]._TipoDatoAddizionale.RegEx"
                        type="hidden" value="">
                    <div id="divCompanionAdd_0_7">
                        <label>
                            Statura in cm &nbsp;<b>*</b> </label>
                        <input id="Accompagnatori_0__DatiAddizionaliAccompagnatore_7___Descrizione"
                            name="Accompagnatori[0].DatiAddizionaliAccompagnatore[7]._Descrizione" type="hidden"
                            value="Statura in cm">
                    </div>
                    <input data-val="true" data-val-number="Il campo _Id deve essere un numero."
                        data-val-required="The _Id field is required." id="hiddenIdAcc0"
                        name="Accompagnatori[0].DatiAddizionaliAccompagnatore[7]._Id" type="hidden" value="67484"><input
                        data-val="true" data-val-number="Il campo IDTipoDatoAddizionale deve essere un numero."
                        data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADDAcc_7"
                        name="Accompagnatori[0].DatiAddizionaliAccompagnatore[7]._TipoDatoAddizionale.IDTipoDatoAddizionale"
                        type="hidden" value="22"><input data-val="true"
                        data-val-number="Il campo IDTipoControllo deve essere un numero."
                        data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAddAcc_7"
                        name="Accompagnatori[0].DatiAddizionaliAccompagnatore[7]._TipoDatoAddizionale.IDTipoControllo"
                        type="hidden" value="2"><input id="hiddenRegExAcc_7"
                        name="Accompagnatori[0].DatiAddizionaliAccompagnatore[7]._TipoDatoAddizionale.RegEx"
                        type="hidden" value="">
                    <div id="divCompanionAdd_0_8">
                        <label>
                            Colore degli occhi &nbsp;<b>*</b> </label>
                        <input id="Accompagnatori_0__DatiAddizionaliAccompagnatore_8___Descrizione"
                            name="Accompagnatori[0].DatiAddizionaliAccompagnatore[8]._Descrizione" type="hidden"
                            value="Colore degli occhi">
                    </div>
                    <input data-val="true" data-val-number="Il campo _Id deve essere un numero."
                        data-val-required="The _Id field is required." id="hiddenIdAcc0"
                        name="Accompagnatori[0].DatiAddizionaliAccompagnatore[8]._Id" type="hidden" value="67485"><input
                        data-val="true" data-val-number="Il campo IDTipoDatoAddizionale deve essere un numero."
                        data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADDAcc_8"
                        name="Accompagnatori[0].DatiAddizionaliAccompagnatore[8]._TipoDatoAddizionale.IDTipoDatoAddizionale"
                        type="hidden" value="23"><input data-val="true"
                        data-val-number="Il campo IDTipoControllo deve essere un numero."
                        data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAddAcc_8"
                        name="Accompagnatori[0].DatiAddizionaliAccompagnatore[8]._TipoDatoAddizionale.IDTipoControllo"
                        type="hidden" value="3"><input id="hiddenRegExAcc_8"
                        name="Accompagnatori[0].DatiAddizionaliAccompagnatore[8]._TipoDatoAddizionale.RegEx"
                        type="hidden" value="">
                    <div id="docCompanionAdd_0_0">
                        <label>
                            Documento di identità/viaggio &nbsp;<b>*</b> </label>
                        <input id="Accompagnatori_0__DocumentiAccompagnatore_0___Descrizione"
                            name="Accompagnatori[0].DocumentiAccompagnatore[0]._Descrizione" type="hidden"
                            value="Documento di identità/viaggio">
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
                        <input data-val="true" data-val-number="Il campo _Id deve essere un numero."
                            data-val-required="The _Id field is required." id="hiddenIdDoc0"
                            name="Accompagnatori[0].DocumentiAccompagnatore[0]._Id" type="hidden" value="15715">
                    </div>
                    <input data-val="true" data-val-number="Il campo IDTipoDocumento deve essere un numero."
                        data-val-required="The IDTipoDocumento field is required." id="hiddenIdDocADDAcc_0"
                        name="Accompagnatori[0].DocumentiAccompagnatore[0]._TipoDocumento.IDTipoDocumento" type="hidden"
                        value="4">
                    <div id="docCompanionAdd_0_1">
                        <label>
                            Passaporto </label>
                        <input id="Accompagnatori_0__DocumentiAccompagnatore_1___Descrizione"
                            name="Accompagnatori[0].DocumentiAccompagnatore[1]._Descrizione" type="hidden"
                            value="Passaporto">
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
                        <input data-val="true" data-val-number="Il campo _Id deve essere un numero."
                            data-val-required="The _Id field is required." id="hiddenIdDoc0"
                            name="Accompagnatori[0].DocumentiAccompagnatore[1]._Id" type="hidden" value="15716">
                    </div>
                    <input data-val="true" data-val-number="Il campo IDTipoDocumento deve essere un numero."
                        data-val-required="The IDTipoDocumento field is required." id="hiddenIdDocADDAcc_1"
                        name="Accompagnatori[0].DocumentiAccompagnatore[1]._TipoDocumento.IDTipoDocumento" type="hidden"
                        value="1">
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
                            Indirizzo completo di residenza &nbsp;<b>*</b> </label>
                        <input id="Accompagnatori_1__DatiAddizionaliAccompagnatore_0___Descrizione"
                            name="Accompagnatori[1].DatiAddizionaliAccompagnatore[0]._Descrizione" type="hidden"
                            value="Indirizzo completo di residenza">
                    </div>
                    <input data-val="true" data-val-number="Il campo _Id deve essere un numero."
                        data-val-required="The _Id field is required." id="hiddenIdAcc1"
                        name="Accompagnatori[1].DatiAddizionaliAccompagnatore[0]._Id" type="hidden" value="67477"><input
                        data-val="true" data-val-number="Il campo IDTipoDatoAddizionale deve essere un numero."
                        data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADDAcc_0"
                        name="Accompagnatori[1].DatiAddizionaliAccompagnatore[0]._TipoDatoAddizionale.IDTipoDatoAddizionale"
                        type="hidden" value="25"><input data-val="true"
                        data-val-number="Il campo IDTipoControllo deve essere un numero."
                        data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAddAcc_0"
                        name="Accompagnatori[1].DatiAddizionaliAccompagnatore[0]._TipoDatoAddizionale.IDTipoControllo"
                        type="hidden" value="2"><input id="hiddenRegExAcc_0"
                        name="Accompagnatori[1].DatiAddizionaliAccompagnatore[0]._TipoDatoAddizionale.RegEx"
                        type="hidden" value="">
                    <div id="divCompanionAdd_1_1">
                        <label>
                            Figli minorenni &nbsp;<b>*</b> </label>
                        <input id="Accompagnatori_1__DatiAddizionaliAccompagnatore_1___Descrizione"
                            name="Accompagnatori[1].DatiAddizionaliAccompagnatore[1]._Descrizione" type="hidden"
                            value="Figli minorenni">
                    </div>
                    <input data-val="true" data-val-number="Il campo _Id deve essere un numero."
                        data-val-required="The _Id field is required." id="hiddenIdAcc1"
                        name="Accompagnatori[1].DatiAddizionaliAccompagnatore[1]._Id" type="hidden" value="67478"><input
                        data-val="true" data-val-number="Il campo IDTipoDatoAddizionale deve essere un numero."
                        data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADDAcc_1"
                        name="Accompagnatori[1].DatiAddizionaliAccompagnatore[1]._TipoDatoAddizionale.IDTipoDatoAddizionale"
                        type="hidden" value="11"><input data-val="true"
                        data-val-number="Il campo IDTipoControllo deve essere un numero."
                        data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAddAcc_1"
                        name="Accompagnatori[1].DatiAddizionaliAccompagnatore[1]._TipoDatoAddizionale.IDTipoControllo"
                        type="hidden" value="3"><input id="hiddenRegExAcc_1"
                        name="Accompagnatori[1].DatiAddizionaliAccompagnatore[1]._TipoDatoAddizionale.RegEx"
                        type="hidden" value="">
                    <div id="divCompanionAdd_1_2">
                        <label>
                            Numero figli minorenni &nbsp;<b>*</b> </label>
                        <input id="Accompagnatori_1__DatiAddizionaliAccompagnatore_2___Descrizione"
                            name="Accompagnatori[1].DatiAddizionaliAccompagnatore[2]._Descrizione" type="hidden"
                            value="Numero figli minorenni">
                    </div>
                    <input data-val="true" data-val-number="Il campo _Id deve essere un numero."
                        data-val-required="The _Id field is required." id="hiddenIdAcc1"
                        name="Accompagnatori[1].DatiAddizionaliAccompagnatore[2]._Id" type="hidden" value="67479"><input
                        data-val="true" data-val-number="Il campo IDTipoDatoAddizionale deve essere un numero."
                        data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADDAcc_2"
                        name="Accompagnatori[1].DatiAddizionaliAccompagnatore[2]._TipoDatoAddizionale.IDTipoDatoAddizionale"
                        type="hidden" value="12"><input data-val="true"
                        data-val-number="Il campo IDTipoControllo deve essere un numero."
                        data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAddAcc_2"
                        name="Accompagnatori[1].DatiAddizionaliAccompagnatore[2]._TipoDatoAddizionale.IDTipoControllo"
                        type="hidden" value="2"><input id="hiddenRegExAcc_2"
                        name="Accompagnatori[1].DatiAddizionaliAccompagnatore[2]._TipoDatoAddizionale.RegEx"
                        type="hidden" value="">
                    <div id="divCompanionAdd_1_3">
                        <label>
                            Stato civile &nbsp;<b>*</b> </label>
                        <input id="Accompagnatori_1__DatiAddizionaliAccompagnatore_3___Descrizione"
                            name="Accompagnatori[1].DatiAddizionaliAccompagnatore[3]._Descrizione" type="hidden"
                            value="Stato civile">
                    </div>
                    <input data-val="true" data-val-number="Il campo _Id deve essere un numero."
                        data-val-required="The _Id field is required." id="hiddenIdAcc1"
                        name="Accompagnatori[1].DatiAddizionaliAccompagnatore[3]._Id" type="hidden" value="67480"><input
                        data-val="true" data-val-number="Il campo IDTipoDatoAddizionale deve essere un numero."
                        data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADDAcc_3"
                        name="Accompagnatori[1].DatiAddizionaliAccompagnatore[3]._TipoDatoAddizionale.IDTipoDatoAddizionale"
                        type="hidden" value="17"><input data-val="true"
                        data-val-number="Il campo IDTipoControllo deve essere un numero."
                        data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAddAcc_3"
                        name="Accompagnatori[1].DatiAddizionaliAccompagnatore[3]._TipoDatoAddizionale.IDTipoControllo"
                        type="hidden" value="3"><input id="hiddenRegExAcc_3"
                        name="Accompagnatori[1].DatiAddizionaliAccompagnatore[3]._TipoDatoAddizionale.RegEx"
                        type="hidden" value="">
                    <div id="divCompanionAdd_1_4">
                        <label>
                            Nome e cognome coniuge / unito-a civilmente &nbsp;<b>*</b> </label>
                        <input id="Accompagnatori_1__DatiAddizionaliAccompagnatore_4___Descrizione"
                            name="Accompagnatori[1].DatiAddizionaliAccompagnatore[4]._Descrizione" type="hidden"
                            value="Nome e cognome coniuge / unito-a civilmente">
                    </div>
                    <input data-val="true" data-val-number="Il campo _Id deve essere un numero."
                        data-val-required="The _Id field is required." id="hiddenIdAcc1"
                        name="Accompagnatori[1].DatiAddizionaliAccompagnatore[4]._Id" type="hidden" value="67481"><input
                        data-val="true" data-val-number="Il campo IDTipoDatoAddizionale deve essere un numero."
                        data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADDAcc_4"
                        name="Accompagnatori[1].DatiAddizionaliAccompagnatore[4]._TipoDatoAddizionale.IDTipoDatoAddizionale"
                        type="hidden" value="18"><input data-val="true"
                        data-val-number="Il campo IDTipoControllo deve essere un numero."
                        data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAddAcc_4"
                        name="Accompagnatori[1].DatiAddizionaliAccompagnatore[4]._TipoDatoAddizionale.IDTipoControllo"
                        type="hidden" value="2"><input id="hiddenRegExAcc_4"
                        name="Accompagnatori[1].DatiAddizionaliAccompagnatore[4]._TipoDatoAddizionale.RegEx"
                        type="hidden" value="">
                    <div id="divCompanionAdd_1_5">
                        <label>
                            In possesso di passaporto italiano scaduto/in scadenza &nbsp;<b>*</b> </label>
                        <input id="Accompagnatori_1__DatiAddizionaliAccompagnatore_5___Descrizione"
                            name="Accompagnatori[1].DatiAddizionaliAccompagnatore[5]._Descrizione" type="hidden"
                            value="In possesso di passaporto italiano scaduto/in scadenza">
                    </div>
                    <input data-val="true" data-val-number="Il campo _Id deve essere un numero."
                        data-val-required="The _Id field is required." id="hiddenIdAcc1"
                        name="Accompagnatori[1].DatiAddizionaliAccompagnatore[5]._Id" type="hidden" value="67482"><input
                        data-val="true" data-val-number="Il campo IDTipoDatoAddizionale deve essere un numero."
                        data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADDAcc_5"
                        name="Accompagnatori[1].DatiAddizionaliAccompagnatore[5]._TipoDatoAddizionale.IDTipoDatoAddizionale"
                        type="hidden" value="1"><input data-val="true"
                        data-val-number="Il campo IDTipoControllo deve essere un numero."
                        data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAddAcc_5"
                        name="Accompagnatori[1].DatiAddizionaliAccompagnatore[5]._TipoDatoAddizionale.IDTipoControllo"
                        type="hidden" value="3"><input id="hiddenRegExAcc_5"
                        name="Accompagnatori[1].DatiAddizionaliAccompagnatore[5]._TipoDatoAddizionale.RegEx"
                        type="hidden" value="">
                    <div id="divCompanionAdd_1_6">
                        <label>
                            Numero di passaporto &nbsp;<b>*</b> </label>
                        <input id="Accompagnatori_1__DatiAddizionaliAccompagnatore_6___Descrizione"
                            name="Accompagnatori[1].DatiAddizionaliAccompagnatore[6]._Descrizione" type="hidden"
                            value="Numero di passaporto">
                    </div>
                    <input data-val="true" data-val-number="Il campo _Id deve essere un numero."
                        data-val-required="The _Id field is required." id="hiddenIdAcc1"
                        name="Accompagnatori[1].DatiAddizionaliAccompagnatore[6]._Id" type="hidden" value="67483"><input
                        data-val="true" data-val-number="Il campo IDTipoDatoAddizionale deve essere un numero."
                        data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADDAcc_6"
                        name="Accompagnatori[1].DatiAddizionaliAccompagnatore[6]._TipoDatoAddizionale.IDTipoDatoAddizionale"
                        type="hidden" value="2"><input data-val="true"
                        data-val-number="Il campo IDTipoControllo deve essere un numero."
                        data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAddAcc_6"
                        name="Accompagnatori[1].DatiAddizionaliAccompagnatore[6]._TipoDatoAddizionale.IDTipoControllo"
                        type="hidden" value="2"><input id="hiddenRegExAcc_6"
                        name="Accompagnatori[1].DatiAddizionaliAccompagnatore[6]._TipoDatoAddizionale.RegEx"
                        type="hidden" value="">
                    <div id="divCompanionAdd_1_7">
                        <label>
                            Statura in cm &nbsp;<b>*</b> </label>
                        <input id="Accompagnatori_1__DatiAddizionaliAccompagnatore_7___Descrizione"
                            name="Accompagnatori[1].DatiAddizionaliAccompagnatore[7]._Descrizione" type="hidden"
                            value="Statura in cm">
                    </div>
                    <input data-val="true" data-val-number="Il campo _Id deve essere un numero."
                        data-val-required="The _Id field is required." id="hiddenIdAcc1"
                        name="Accompagnatori[1].DatiAddizionaliAccompagnatore[7]._Id" type="hidden" value="67484"><input
                        data-val="true" data-val-number="Il campo IDTipoDatoAddizionale deve essere un numero."
                        data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADDAcc_7"
                        name="Accompagnatori[1].DatiAddizionaliAccompagnatore[7]._TipoDatoAddizionale.IDTipoDatoAddizionale"
                        type="hidden" value="22"><input data-val="true"
                        data-val-number="Il campo IDTipoControllo deve essere un numero."
                        data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAddAcc_7"
                        name="Accompagnatori[1].DatiAddizionaliAccompagnatore[7]._TipoDatoAddizionale.IDTipoControllo"
                        type="hidden" value="2"><input id="hiddenRegExAcc_7"
                        name="Accompagnatori[1].DatiAddizionaliAccompagnatore[7]._TipoDatoAddizionale.RegEx"
                        type="hidden" value="">
                    <div id="divCompanionAdd_1_8">
                        <label>
                            Colore degli occhi &nbsp;<b>*</b> </label>
                        <input id="Accompagnatori_1__DatiAddizionaliAccompagnatore_8___Descrizione"
                            name="Accompagnatori[1].DatiAddizionaliAccompagnatore[8]._Descrizione" type="hidden"
                            value="Colore degli occhi">
                    </div>
                    <input data-val="true" data-val-number="Il campo _Id deve essere un numero."
                        data-val-required="The _Id field is required." id="hiddenIdAcc1"
                        name="Accompagnatori[1].DatiAddizionaliAccompagnatore[8]._Id" type="hidden" value="67485"><input
                        data-val="true" data-val-number="Il campo IDTipoDatoAddizionale deve essere un numero."
                        data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADDAcc_8"
                        name="Accompagnatori[1].DatiAddizionaliAccompagnatore[8]._TipoDatoAddizionale.IDTipoDatoAddizionale"
                        type="hidden" value="23"><input data-val="true"
                        data-val-number="Il campo IDTipoControllo deve essere un numero."
                        data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAddAcc_8"
                        name="Accompagnatori[1].DatiAddizionaliAccompagnatore[8]._TipoDatoAddizionale.IDTipoControllo"
                        type="hidden" value="3"><input id="hiddenRegExAcc_8"
                        name="Accompagnatori[1].DatiAddizionaliAccompagnatore[8]._TipoDatoAddizionale.RegEx"
                        type="hidden" value="">
                    <div id="docCompanionAdd_1_0">
                        <label>
                            Documento di identità/viaggio &nbsp;<b>*</b> </label>
                        <input id="Accompagnatori_1__DocumentiAccompagnatore_0___Descrizione"
                            name="Accompagnatori[1].DocumentiAccompagnatore[0]._Descrizione" type="hidden"
                            value="Documento di identità/viaggio">
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
                        <input data-val="true" data-val-number="Il campo _Id deve essere un numero."
                            data-val-required="The _Id field is required." id="hiddenIdDoc1"
                            name="Accompagnatori[1].DocumentiAccompagnatore[0]._Id" type="hidden" value="15715">
                    </div>
                    <input data-val="true" data-val-number="Il campo IDTipoDocumento deve essere un numero."
                        data-val-required="The IDTipoDocumento field is required." id="hiddenIdDocADDAcc_0"
                        name="Accompagnatori[1].DocumentiAccompagnatore[0]._TipoDocumento.IDTipoDocumento" type="hidden"
                        value="4">
                    <div id="docCompanionAdd_1_1">
                        <label>
                            Passaporto </label>
                        <input id="Accompagnatori_1__DocumentiAccompagnatore_1___Descrizione"
                            name="Accompagnatori[1].DocumentiAccompagnatore[1]._Descrizione" type="hidden"
                            value="Passaporto">
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
                        <input data-val="true" data-val-number="Il campo _Id deve essere un numero."
                            data-val-required="The _Id field is required." id="hiddenIdDoc1"
                            name="Accompagnatori[1].DocumentiAccompagnatore[1]._Id" type="hidden" value="15716">
                    </div>
                    <input data-val="true" data-val-number="Il campo IDTipoDocumento deve essere un numero."
                        data-val-required="The IDTipoDocumento field is required." id="hiddenIdDocADDAcc_1"
                        name="Accompagnatori[1].DocumentiAccompagnatore[1]._TipoDocumento.IDTipoDocumento" type="hidden"
                        value="1">
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
                            Indirizzo completo di residenza &nbsp;<b>*</b> </label>
                        <input id="Accompagnatori_2__DatiAddizionaliAccompagnatore_0___Descrizione"
                            name="Accompagnatori[2].DatiAddizionaliAccompagnatore[0]._Descrizione" type="hidden"
                            value="Indirizzo completo di residenza">
                    </div>
                    <input data-val="true" data-val-number="Il campo _Id deve essere un numero."
                        data-val-required="The _Id field is required." id="hiddenIdAcc2"
                        name="Accompagnatori[2].DatiAddizionaliAccompagnatore[0]._Id" type="hidden" value="67477"><input
                        data-val="true" data-val-number="Il campo IDTipoDatoAddizionale deve essere un numero."
                        data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADDAcc_0"
                        name="Accompagnatori[2].DatiAddizionaliAccompagnatore[0]._TipoDatoAddizionale.IDTipoDatoAddizionale"
                        type="hidden" value="25"><input data-val="true"
                        data-val-number="Il campo IDTipoControllo deve essere un numero."
                        data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAddAcc_0"
                        name="Accompagnatori[2].DatiAddizionaliAccompagnatore[0]._TipoDatoAddizionale.IDTipoControllo"
                        type="hidden" value="2"><input id="hiddenRegExAcc_0"
                        name="Accompagnatori[2].DatiAddizionaliAccompagnatore[0]._TipoDatoAddizionale.RegEx"
                        type="hidden" value="">
                    <div id="divCompanionAdd_2_1">
                        <label>
                            Figli minorenni &nbsp;<b>*</b> </label>
                        <input id="Accompagnatori_2__DatiAddizionaliAccompagnatore_1___Descrizione"
                            name="Accompagnatori[2].DatiAddizionaliAccompagnatore[1]._Descrizione" type="hidden"
                            value="Figli minorenni">
                    </div>
                    <input data-val="true" data-val-number="Il campo _Id deve essere un numero."
                        data-val-required="The _Id field is required." id="hiddenIdAcc2"
                        name="Accompagnatori[2].DatiAddizionaliAccompagnatore[1]._Id" type="hidden" value="67478"><input
                        data-val="true" data-val-number="Il campo IDTipoDatoAddizionale deve essere un numero."
                        data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADDAcc_1"
                        name="Accompagnatori[2].DatiAddizionaliAccompagnatore[1]._TipoDatoAddizionale.IDTipoDatoAddizionale"
                        type="hidden" value="11"><input data-val="true"
                        data-val-number="Il campo IDTipoControllo deve essere un numero."
                        data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAddAcc_1"
                        name="Accompagnatori[2].DatiAddizionaliAccompagnatore[1]._TipoDatoAddizionale.IDTipoControllo"
                        type="hidden" value="3"><input id="hiddenRegExAcc_1"
                        name="Accompagnatori[2].DatiAddizionaliAccompagnatore[1]._TipoDatoAddizionale.RegEx"
                        type="hidden" value="">
                    <div id="divCompanionAdd_2_2">
                        <label>
                            Numero figli minorenni &nbsp;<b>*</b> </label>
                        <input id="Accompagnatori_2__DatiAddizionaliAccompagnatore_2___Descrizione"
                            name="Accompagnatori[2].DatiAddizionaliAccompagnatore[2]._Descrizione" type="hidden"
                            value="Numero figli minorenni">
                    </div>
                    <input data-val="true" data-val-number="Il campo _Id deve essere un numero."
                        data-val-required="The _Id field is required." id="hiddenIdAcc2"
                        name="Accompagnatori[2].DatiAddizionaliAccompagnatore[2]._Id" type="hidden" value="67479"><input
                        data-val="true" data-val-number="Il campo IDTipoDatoAddizionale deve essere un numero."
                        data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADDAcc_2"
                        name="Accompagnatori[2].DatiAddizionaliAccompagnatore[2]._TipoDatoAddizionale.IDTipoDatoAddizionale"
                        type="hidden" value="12"><input data-val="true"
                        data-val-number="Il campo IDTipoControllo deve essere un numero."
                        data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAddAcc_2"
                        name="Accompagnatori[2].DatiAddizionaliAccompagnatore[2]._TipoDatoAddizionale.IDTipoControllo"
                        type="hidden" value="2"><input id="hiddenRegExAcc_2"
                        name="Accompagnatori[2].DatiAddizionaliAccompagnatore[2]._TipoDatoAddizionale.RegEx"
                        type="hidden" value="">
                    <div id="divCompanionAdd_2_3">
                        <label>
                            Stato civile &nbsp;<b>*</b> </label>
                        <input id="Accompagnatori_2__DatiAddizionaliAccompagnatore_3___Descrizione"
                            name="Accompagnatori[2].DatiAddizionaliAccompagnatore[3]._Descrizione" type="hidden"
                            value="Stato civile">
                    </div>
                    <input data-val="true" data-val-number="Il campo _Id deve essere un numero."
                        data-val-required="The _Id field is required." id="hiddenIdAcc2"
                        name="Accompagnatori[2].DatiAddizionaliAccompagnatore[3]._Id" type="hidden" value="67480"><input
                        data-val="true" data-val-number="Il campo IDTipoDatoAddizionale deve essere un numero."
                        data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADDAcc_3"
                        name="Accompagnatori[2].DatiAddizionaliAccompagnatore[3]._TipoDatoAddizionale.IDTipoDatoAddizionale"
                        type="hidden" value="17"><input data-val="true"
                        data-val-number="Il campo IDTipoControllo deve essere un numero."
                        data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAddAcc_3"
                        name="Accompagnatori[2].DatiAddizionaliAccompagnatore[3]._TipoDatoAddizionale.IDTipoControllo"
                        type="hidden" value="3"><input id="hiddenRegExAcc_3"
                        name="Accompagnatori[2].DatiAddizionaliAccompagnatore[3]._TipoDatoAddizionale.RegEx"
                        type="hidden" value="">
                    <div id="divCompanionAdd_2_4">
                        <label>
                            Nome e cognome coniuge / unito-a civilmente &nbsp;<b>*</b> </label>
                        <input id="Accompagnatori_2__DatiAddizionaliAccompagnatore_4___Descrizione"
                            name="Accompagnatori[2].DatiAddizionaliAccompagnatore[4]._Descrizione" type="hidden"
                            value="Nome e cognome coniuge / unito-a civilmente">
                    </div>
                    <input data-val="true" data-val-number="Il campo _Id deve essere un numero."
                        data-val-required="The _Id field is required." id="hiddenIdAcc2"
                        name="Accompagnatori[2].DatiAddizionaliAccompagnatore[4]._Id" type="hidden" value="67481"><input
                        data-val="true" data-val-number="Il campo IDTipoDatoAddizionale deve essere un numero."
                        data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADDAcc_4"
                        name="Accompagnatori[2].DatiAddizionaliAccompagnatore[4]._TipoDatoAddizionale.IDTipoDatoAddizionale"
                        type="hidden" value="18"><input data-val="true"
                        data-val-number="Il campo IDTipoControllo deve essere un numero."
                        data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAddAcc_4"
                        name="Accompagnatori[2].DatiAddizionaliAccompagnatore[4]._TipoDatoAddizionale.IDTipoControllo"
                        type="hidden" value="2"><input id="hiddenRegExAcc_4"
                        name="Accompagnatori[2].DatiAddizionaliAccompagnatore[4]._TipoDatoAddizionale.RegEx"
                        type="hidden" value="">
                    <div id="divCompanionAdd_2_5">
                        <label>
                            In possesso di passaporto italiano scaduto/in scadenza &nbsp;<b>*</b> </label>
                        <input id="Accompagnatori_2__DatiAddizionaliAccompagnatore_5___Descrizione"
                            name="Accompagnatori[2].DatiAddizionaliAccompagnatore[5]._Descrizione" type="hidden"
                            value="In possesso di passaporto italiano scaduto/in scadenza">
                    </div>
                    <input data-val="true" data-val-number="Il campo _Id deve essere un numero."
                        data-val-required="The _Id field is required." id="hiddenIdAcc2"
                        name="Accompagnatori[2].DatiAddizionaliAccompagnatore[5]._Id" type="hidden" value="67482"><input
                        data-val="true" data-val-number="Il campo IDTipoDatoAddizionale deve essere un numero."
                        data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADDAcc_5"
                        name="Accompagnatori[2].DatiAddizionaliAccompagnatore[5]._TipoDatoAddizionale.IDTipoDatoAddizionale"
                        type="hidden" value="1"><input data-val="true"
                        data-val-number="Il campo IDTipoControllo deve essere un numero."
                        data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAddAcc_5"
                        name="Accompagnatori[2].DatiAddizionaliAccompagnatore[5]._TipoDatoAddizionale.IDTipoControllo"
                        type="hidden" value="3"><input id="hiddenRegExAcc_5"
                        name="Accompagnatori[2].DatiAddizionaliAccompagnatore[5]._TipoDatoAddizionale.RegEx"
                        type="hidden" value="">
                    <div id="divCompanionAdd_2_6">
                        <label>
                            Numero di passaporto &nbsp;<b>*</b> </label>
                        <input id="Accompagnatori_2__DatiAddizionaliAccompagnatore_6___Descrizione"
                            name="Accompagnatori[2].DatiAddizionaliAccompagnatore[6]._Descrizione" type="hidden"
                            value="Numero di passaporto">
                    </div>
                    <input data-val="true" data-val-number="Il campo _Id deve essere un numero."
                        data-val-required="The _Id field is required." id="hiddenIdAcc2"
                        name="Accompagnatori[2].DatiAddizionaliAccompagnatore[6]._Id" type="hidden" value="67483"><input
                        data-val="true" data-val-number="Il campo IDTipoDatoAddizionale deve essere un numero."
                        data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADDAcc_6"
                        name="Accompagnatori[2].DatiAddizionaliAccompagnatore[6]._TipoDatoAddizionale.IDTipoDatoAddizionale"
                        type="hidden" value="2"><input data-val="true"
                        data-val-number="Il campo IDTipoControllo deve essere un numero."
                        data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAddAcc_6"
                        name="Accompagnatori[2].DatiAddizionaliAccompagnatore[6]._TipoDatoAddizionale.IDTipoControllo"
                        type="hidden" value="2"><input id="hiddenRegExAcc_6"
                        name="Accompagnatori[2].DatiAddizionaliAccompagnatore[6]._TipoDatoAddizionale.RegEx"
                        type="hidden" value="">
                    <div id="divCompanionAdd_2_7">
                        <label>
                            Statura in cm &nbsp;<b>*</b> </label>
                        <input id="Accompagnatori_2__DatiAddizionaliAccompagnatore_7___Descrizione"
                            name="Accompagnatori[2].DatiAddizionaliAccompagnatore[7]._Descrizione" type="hidden"
                            value="Statura in cm">
                    </div>
                    <input data-val="true" data-val-number="Il campo _Id deve essere un numero."
                        data-val-required="The _Id field is required." id="hiddenIdAcc2"
                        name="Accompagnatori[2].DatiAddizionaliAccompagnatore[7]._Id" type="hidden" value="67484"><input
                        data-val="true" data-val-number="Il campo IDTipoDatoAddizionale deve essere un numero."
                        data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADDAcc_7"
                        name="Accompagnatori[2].DatiAddizionaliAccompagnatore[7]._TipoDatoAddizionale.IDTipoDatoAddizionale"
                        type="hidden" value="22"><input data-val="true"
                        data-val-number="Il campo IDTipoControllo deve essere un numero."
                        data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAddAcc_7"
                        name="Accompagnatori[2].DatiAddizionaliAccompagnatore[7]._TipoDatoAddizionale.IDTipoControllo"
                        type="hidden" value="2"><input id="hiddenRegExAcc_7"
                        name="Accompagnatori[2].DatiAddizionaliAccompagnatore[7]._TipoDatoAddizionale.RegEx"
                        type="hidden" value="">
                    <div id="divCompanionAdd_2_8">
                        <label>
                            Colore degli occhi &nbsp;<b>*</b> </label>
                        <input id="Accompagnatori_2__DatiAddizionaliAccompagnatore_8___Descrizione"
                            name="Accompagnatori[2].DatiAddizionaliAccompagnatore[8]._Descrizione" type="hidden"
                            value="Colore degli occhi">
                    </div>
                    <input data-val="true" data-val-number="Il campo _Id deve essere un numero."
                        data-val-required="The _Id field is required." id="hiddenIdAcc2"
                        name="Accompagnatori[2].DatiAddizionaliAccompagnatore[8]._Id" type="hidden" value="67485"><input
                        data-val="true" data-val-number="Il campo IDTipoDatoAddizionale deve essere un numero."
                        data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADDAcc_8"
                        name="Accompagnatori[2].DatiAddizionaliAccompagnatore[8]._TipoDatoAddizionale.IDTipoDatoAddizionale"
                        type="hidden" value="23"><input data-val="true"
                        data-val-number="Il campo IDTipoControllo deve essere un numero."
                        data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAddAcc_8"
                        name="Accompagnatori[2].DatiAddizionaliAccompagnatore[8]._TipoDatoAddizionale.IDTipoControllo"
                        type="hidden" value="3"><input id="hiddenRegExAcc_8"
                        name="Accompagnatori[2].DatiAddizionaliAccompagnatore[8]._TipoDatoAddizionale.RegEx"
                        type="hidden" value="">
                    <div id="docCompanionAdd_2_0">
                        <label>
                            Documento di identità/viaggio &nbsp;<b>*</b> </label>
                        <input id="Accompagnatori_2__DocumentiAccompagnatore_0___Descrizione"
                            name="Accompagnatori[2].DocumentiAccompagnatore[0]._Descrizione" type="hidden"
                            value="Documento di identità/viaggio">
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
                        <input data-val="true" data-val-number="Il campo _Id deve essere un numero."
                            data-val-required="The _Id field is required." id="hiddenIdDoc2"
                            name="Accompagnatori[2].DocumentiAccompagnatore[0]._Id" type="hidden" value="15715">
                    </div>
                    <input data-val="true" data-val-number="Il campo IDTipoDocumento deve essere un numero."
                        data-val-required="The IDTipoDocumento field is required." id="hiddenIdDocADDAcc_0"
                        name="Accompagnatori[2].DocumentiAccompagnatore[0]._TipoDocumento.IDTipoDocumento" type="hidden"
                        value="4">
                    <div id="docCompanionAdd_2_1">
                        <label>
                            Passaporto </label>
                        <input id="Accompagnatori_2__DocumentiAccompagnatore_1___Descrizione"
                            name="Accompagnatori[2].DocumentiAccompagnatore[1]._Descrizione" type="hidden"
                            value="Passaporto">
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
                        <input data-val="true" data-val-number="Il campo _Id deve essere un numero."
                            data-val-required="The _Id field is required." id="hiddenIdDoc2"
                            name="Accompagnatori[2].DocumentiAccompagnatore[1]._Id" type="hidden" value="15716">
                    </div>
                    <input data-val="true" data-val-number="Il campo IDTipoDocumento deve essere un numero."
                        data-val-required="The IDTipoDocumento field is required." id="hiddenIdDocADDAcc_1"
                        name="Accompagnatori[2].DocumentiAccompagnatore[1]._TipoDocumento.IDTipoDocumento" type="hidden"
                        value="1">
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
                            Indirizzo completo di residenza &nbsp;<b>*</b> </label>
                        <input id="Accompagnatori_3__DatiAddizionaliAccompagnatore_0___Descrizione"
                            name="Accompagnatori[3].DatiAddizionaliAccompagnatore[0]._Descrizione" type="hidden"
                            value="Indirizzo completo di residenza">
                    </div>
                    <input data-val="true" data-val-number="Il campo _Id deve essere un numero."
                        data-val-required="The _Id field is required." id="hiddenIdAcc3"
                        name="Accompagnatori[3].DatiAddizionaliAccompagnatore[0]._Id" type="hidden" value="67477"><input
                        data-val="true" data-val-number="Il campo IDTipoDatoAddizionale deve essere un numero."
                        data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADDAcc_0"
                        name="Accompagnatori[3].DatiAddizionaliAccompagnatore[0]._TipoDatoAddizionale.IDTipoDatoAddizionale"
                        type="hidden" value="25"><input data-val="true"
                        data-val-number="Il campo IDTipoControllo deve essere un numero."
                        data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAddAcc_0"
                        name="Accompagnatori[3].DatiAddizionaliAccompagnatore[0]._TipoDatoAddizionale.IDTipoControllo"
                        type="hidden" value="2"><input id="hiddenRegExAcc_0"
                        name="Accompagnatori[3].DatiAddizionaliAccompagnatore[0]._TipoDatoAddizionale.RegEx"
                        type="hidden" value="">
                    <div id="divCompanionAdd_3_1">
                        <label>
                            Figli minorenni &nbsp;<b>*</b> </label>
                        <input id="Accompagnatori_3__DatiAddizionaliAccompagnatore_1___Descrizione"
                            name="Accompagnatori[3].DatiAddizionaliAccompagnatore[1]._Descrizione" type="hidden"
                            value="Figli minorenni">
                    </div>
                    <input data-val="true" data-val-number="Il campo _Id deve essere un numero."
                        data-val-required="The _Id field is required." id="hiddenIdAcc3"
                        name="Accompagnatori[3].DatiAddizionaliAccompagnatore[1]._Id" type="hidden" value="67478"><input
                        data-val="true" data-val-number="Il campo IDTipoDatoAddizionale deve essere un numero."
                        data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADDAcc_1"
                        name="Accompagnatori[3].DatiAddizionaliAccompagnatore[1]._TipoDatoAddizionale.IDTipoDatoAddizionale"
                        type="hidden" value="11"><input data-val="true"
                        data-val-number="Il campo IDTipoControllo deve essere un numero."
                        data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAddAcc_1"
                        name="Accompagnatori[3].DatiAddizionaliAccompagnatore[1]._TipoDatoAddizionale.IDTipoControllo"
                        type="hidden" value="3"><input id="hiddenRegExAcc_1"
                        name="Accompagnatori[3].DatiAddizionaliAccompagnatore[1]._TipoDatoAddizionale.RegEx"
                        type="hidden" value="">
                    <div id="divCompanionAdd_3_2">
                        <label>
                            Numero figli minorenni &nbsp;<b>*</b> </label>
                        <input id="Accompagnatori_3__DatiAddizionaliAccompagnatore_2___Descrizione"
                            name="Accompagnatori[3].DatiAddizionaliAccompagnatore[2]._Descrizione" type="hidden"
                            value="Numero figli minorenni">
                    </div>
                    <input data-val="true" data-val-number="Il campo _Id deve essere un numero."
                        data-val-required="The _Id field is required." id="hiddenIdAcc3"
                        name="Accompagnatori[3].DatiAddizionaliAccompagnatore[2]._Id" type="hidden" value="67479"><input
                        data-val="true" data-val-number="Il campo IDTipoDatoAddizionale deve essere un numero."
                        data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADDAcc_2"
                        name="Accompagnatori[3].DatiAddizionaliAccompagnatore[2]._TipoDatoAddizionale.IDTipoDatoAddizionale"
                        type="hidden" value="12"><input data-val="true"
                        data-val-number="Il campo IDTipoControllo deve essere un numero."
                        data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAddAcc_2"
                        name="Accompagnatori[3].DatiAddizionaliAccompagnatore[2]._TipoDatoAddizionale.IDTipoControllo"
                        type="hidden" value="2"><input id="hiddenRegExAcc_2"
                        name="Accompagnatori[3].DatiAddizionaliAccompagnatore[2]._TipoDatoAddizionale.RegEx"
                        type="hidden" value="">
                    <div id="divCompanionAdd_3_3">
                        <label>
                            Stato civile &nbsp;<b>*</b> </label>
                        <input id="Accompagnatori_3__DatiAddizionaliAccompagnatore_3___Descrizione"
                            name="Accompagnatori[3].DatiAddizionaliAccompagnatore[3]._Descrizione" type="hidden"
                            value="Stato civile">
                    </div>
                    <input data-val="true" data-val-number="Il campo _Id deve essere un numero."
                        data-val-required="The _Id field is required." id="hiddenIdAcc3"
                        name="Accompagnatori[3].DatiAddizionaliAccompagnatore[3]._Id" type="hidden" value="67480"><input
                        data-val="true" data-val-number="Il campo IDTipoDatoAddizionale deve essere un numero."
                        data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADDAcc_3"
                        name="Accompagnatori[3].DatiAddizionaliAccompagnatore[3]._TipoDatoAddizionale.IDTipoDatoAddizionale"
                        type="hidden" value="17"><input data-val="true"
                        data-val-number="Il campo IDTipoControllo deve essere un numero."
                        data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAddAcc_3"
                        name="Accompagnatori[3].DatiAddizionaliAccompagnatore[3]._TipoDatoAddizionale.IDTipoControllo"
                        type="hidden" value="3"><input id="hiddenRegExAcc_3"
                        name="Accompagnatori[3].DatiAddizionaliAccompagnatore[3]._TipoDatoAddizionale.RegEx"
                        type="hidden" value="">
                    <div id="divCompanionAdd_3_4">
                        <label>
                            Nome e cognome coniuge / unito-a civilmente &nbsp;<b>*</b> </label>
                        <input id="Accompagnatori_3__DatiAddizionaliAccompagnatore_4___Descrizione"
                            name="Accompagnatori[3].DatiAddizionaliAccompagnatore[4]._Descrizione" type="hidden"
                            value="Nome e cognome coniuge / unito-a civilmente">
                    </div>
                    <input data-val="true" data-val-number="Il campo _Id deve essere un numero."
                        data-val-required="The _Id field is required." id="hiddenIdAcc3"
                        name="Accompagnatori[3].DatiAddizionaliAccompagnatore[4]._Id" type="hidden" value="67481"><input
                        data-val="true" data-val-number="Il campo IDTipoDatoAddizionale deve essere un numero."
                        data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADDAcc_4"
                        name="Accompagnatori[3].DatiAddizionaliAccompagnatore[4]._TipoDatoAddizionale.IDTipoDatoAddizionale"
                        type="hidden" value="18"><input data-val="true"
                        data-val-number="Il campo IDTipoControllo deve essere un numero."
                        data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAddAcc_4"
                        name="Accompagnatori[3].DatiAddizionaliAccompagnatore[4]._TipoDatoAddizionale.IDTipoControllo"
                        type="hidden" value="2"><input id="hiddenRegExAcc_4"
                        name="Accompagnatori[3].DatiAddizionaliAccompagnatore[4]._TipoDatoAddizionale.RegEx"
                        type="hidden" value="">
                    <div id="divCompanionAdd_3_5">
                        <label>
                            In possesso di passaporto italiano scaduto/in scadenza &nbsp;<b>*</b> </label>
                        <input id="Accompagnatori_3__DatiAddizionaliAccompagnatore_5___Descrizione"
                            name="Accompagnatori[3].DatiAddizionaliAccompagnatore[5]._Descrizione" type="hidden"
                            value="In possesso di passaporto italiano scaduto/in scadenza">
                    </div>
                    <input data-val="true" data-val-number="Il campo _Id deve essere un numero."
                        data-val-required="The _Id field is required." id="hiddenIdAcc3"
                        name="Accompagnatori[3].DatiAddizionaliAccompagnatore[5]._Id" type="hidden" value="67482"><input
                        data-val="true" data-val-number="Il campo IDTipoDatoAddizionale deve essere un numero."
                        data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADDAcc_5"
                        name="Accompagnatori[3].DatiAddizionaliAccompagnatore[5]._TipoDatoAddizionale.IDTipoDatoAddizionale"
                        type="hidden" value="1"><input data-val="true"
                        data-val-number="Il campo IDTipoControllo deve essere un numero."
                        data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAddAcc_5"
                        name="Accompagnatori[3].DatiAddizionaliAccompagnatore[5]._TipoDatoAddizionale.IDTipoControllo"
                        type="hidden" value="3"><input id="hiddenRegExAcc_5"
                        name="Accompagnatori[3].DatiAddizionaliAccompagnatore[5]._TipoDatoAddizionale.RegEx"
                        type="hidden" value="">
                    <div id="divCompanionAdd_3_6">
                        <label>
                            Numero di passaporto &nbsp;<b>*</b> </label>
                        <input id="Accompagnatori_3__DatiAddizionaliAccompagnatore_6___Descrizione"
                            name="Accompagnatori[3].DatiAddizionaliAccompagnatore[6]._Descrizione" type="hidden"
                            value="Numero di passaporto">
                    </div>
                    <input data-val="true" data-val-number="Il campo _Id deve essere un numero."
                        data-val-required="The _Id field is required." id="hiddenIdAcc3"
                        name="Accompagnatori[3].DatiAddizionaliAccompagnatore[6]._Id" type="hidden" value="67483"><input
                        data-val="true" data-val-number="Il campo IDTipoDatoAddizionale deve essere un numero."
                        data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADDAcc_6"
                        name="Accompagnatori[3].DatiAddizionaliAccompagnatore[6]._TipoDatoAddizionale.IDTipoDatoAddizionale"
                        type="hidden" value="2"><input data-val="true"
                        data-val-number="Il campo IDTipoControllo deve essere un numero."
                        data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAddAcc_6"
                        name="Accompagnatori[3].DatiAddizionaliAccompagnatore[6]._TipoDatoAddizionale.IDTipoControllo"
                        type="hidden" value="2"><input id="hiddenRegExAcc_6"
                        name="Accompagnatori[3].DatiAddizionaliAccompagnatore[6]._TipoDatoAddizionale.RegEx"
                        type="hidden" value="">
                    <div id="divCompanionAdd_3_7">
                        <label>
                            Statura in cm &nbsp;<b>*</b> </label>
                        <input id="Accompagnatori_3__DatiAddizionaliAccompagnatore_7___Descrizione"
                            name="Accompagnatori[3].DatiAddizionaliAccompagnatore[7]._Descrizione" type="hidden"
                            value="Statura in cm">
                    </div>
                    <input data-val="true" data-val-number="Il campo _Id deve essere un numero."
                        data-val-required="The _Id field is required." id="hiddenIdAcc3"
                        name="Accompagnatori[3].DatiAddizionaliAccompagnatore[7]._Id" type="hidden" value="67484"><input
                        data-val="true" data-val-number="Il campo IDTipoDatoAddizionale deve essere un numero."
                        data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADDAcc_7"
                        name="Accompagnatori[3].DatiAddizionaliAccompagnatore[7]._TipoDatoAddizionale.IDTipoDatoAddizionale"
                        type="hidden" value="22"><input data-val="true"
                        data-val-number="Il campo IDTipoControllo deve essere un numero."
                        data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAddAcc_7"
                        name="Accompagnatori[3].DatiAddizionaliAccompagnatore[7]._TipoDatoAddizionale.IDTipoControllo"
                        type="hidden" value="2"><input id="hiddenRegExAcc_7"
                        name="Accompagnatori[3].DatiAddizionaliAccompagnatore[7]._TipoDatoAddizionale.RegEx"
                        type="hidden" value="">
                    <div id="divCompanionAdd_3_8">
                        <label>
                            Colore degli occhi &nbsp;<b>*</b> </label>
                        <input id="Accompagnatori_3__DatiAddizionaliAccompagnatore_8___Descrizione"
                            name="Accompagnatori[3].DatiAddizionaliAccompagnatore[8]._Descrizione" type="hidden"
                            value="Colore degli occhi">
                    </div>
                    <input data-val="true" data-val-number="Il campo _Id deve essere un numero."
                        data-val-required="The _Id field is required." id="hiddenIdAcc3"
                        name="Accompagnatori[3].DatiAddizionaliAccompagnatore[8]._Id" type="hidden" value="67485"><input
                        data-val="true" data-val-number="Il campo IDTipoDatoAddizionale deve essere un numero."
                        data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADDAcc_8"
                        name="Accompagnatori[3].DatiAddizionaliAccompagnatore[8]._TipoDatoAddizionale.IDTipoDatoAddizionale"
                        type="hidden" value="23"><input data-val="true"
                        data-val-number="Il campo IDTipoControllo deve essere un numero."
                        data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAddAcc_8"
                        name="Accompagnatori[3].DatiAddizionaliAccompagnatore[8]._TipoDatoAddizionale.IDTipoControllo"
                        type="hidden" value="3"><input id="hiddenRegExAcc_8"
                        name="Accompagnatori[3].DatiAddizionaliAccompagnatore[8]._TipoDatoAddizionale.RegEx"
                        type="hidden" value="">
                    <div id="docCompanionAdd_3_0">
                        <label>
                            Documento di identità/viaggio &nbsp;<b>*</b> </label>
                        <input id="Accompagnatori_3__DocumentiAccompagnatore_0___Descrizione"
                            name="Accompagnatori[3].DocumentiAccompagnatore[0]._Descrizione" type="hidden"
                            value="Documento di identità/viaggio">
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
                        <input data-val="true" data-val-number="Il campo _Id deve essere un numero."
                            data-val-required="The _Id field is required." id="hiddenIdDoc3"
                            name="Accompagnatori[3].DocumentiAccompagnatore[0]._Id" type="hidden" value="15715">
                    </div>
                    <input data-val="true" data-val-number="Il campo IDTipoDocumento deve essere un numero."
                        data-val-required="The IDTipoDocumento field is required." id="hiddenIdDocADDAcc_0"
                        name="Accompagnatori[3].DocumentiAccompagnatore[0]._TipoDocumento.IDTipoDocumento" type="hidden"
                        value="4">
                    <div id="docCompanionAdd_3_1">
                        <label>
                            Passaporto </label>
                        <input id="Accompagnatori_3__DocumentiAccompagnatore_1___Descrizione"
                            name="Accompagnatori[3].DocumentiAccompagnatore[1]._Descrizione" type="hidden"
                            value="Passaporto">
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
                        <input data-val="true" data-val-number="Il campo _Id deve essere un numero."
                            data-val-required="The _Id field is required." id="hiddenIdDoc3"
                            name="Accompagnatori[3].DocumentiAccompagnatore[1]._Id" type="hidden" value="15716">
                    </div>
                    <input data-val="true" data-val-number="Il campo IDTipoDocumento deve essere un numero."
                        data-val-required="The IDTipoDocumento field is required." id="hiddenIdDocADDAcc_1"
                        name="Accompagnatori[3].DocumentiAccompagnatore[1]._TipoDocumento.IDTipoDocumento" type="hidden"
                        value="1">
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
                            Indirizzo completo di residenza &nbsp;<b>*</b> </label>
                        <input id="Accompagnatori_4__DatiAddizionaliAccompagnatore_0___Descrizione"
                            name="Accompagnatori[4].DatiAddizionaliAccompagnatore[0]._Descrizione" type="hidden"
                            value="Indirizzo completo di residenza">
                    </div>
                    <input data-val="true" data-val-number="Il campo _Id deve essere un numero."
                        data-val-required="The _Id field is required." id="hiddenIdAcc4"
                        name="Accompagnatori[4].DatiAddizionaliAccompagnatore[0]._Id" type="hidden" value="67477"><input
                        data-val="true" data-val-number="Il campo IDTipoDatoAddizionale deve essere un numero."
                        data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADDAcc_0"
                        name="Accompagnatori[4].DatiAddizionaliAccompagnatore[0]._TipoDatoAddizionale.IDTipoDatoAddizionale"
                        type="hidden" value="25"><input data-val="true"
                        data-val-number="Il campo IDTipoControllo deve essere un numero."
                        data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAddAcc_0"
                        name="Accompagnatori[4].DatiAddizionaliAccompagnatore[0]._TipoDatoAddizionale.IDTipoControllo"
                        type="hidden" value="2"><input id="hiddenRegExAcc_0"
                        name="Accompagnatori[4].DatiAddizionaliAccompagnatore[0]._TipoDatoAddizionale.RegEx"
                        type="hidden" value="">
                    <div id="divCompanionAdd_4_1">
                        <label>
                            Figli minorenni &nbsp;<b>*</b> </label>
                        <input id="Accompagnatori_4__DatiAddizionaliAccompagnatore_1___Descrizione"
                            name="Accompagnatori[4].DatiAddizionaliAccompagnatore[1]._Descrizione" type="hidden"
                            value="Figli minorenni">
                    </div>
                    <input data-val="true" data-val-number="Il campo _Id deve essere un numero."
                        data-val-required="The _Id field is required." id="hiddenIdAcc4"
                        name="Accompagnatori[4].DatiAddizionaliAccompagnatore[1]._Id" type="hidden" value="67478"><input
                        data-val="true" data-val-number="Il campo IDTipoDatoAddizionale deve essere un numero."
                        data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADDAcc_1"
                        name="Accompagnatori[4].DatiAddizionaliAccompagnatore[1]._TipoDatoAddizionale.IDTipoDatoAddizionale"
                        type="hidden" value="11"><input data-val="true"
                        data-val-number="Il campo IDTipoControllo deve essere un numero."
                        data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAddAcc_1"
                        name="Accompagnatori[4].DatiAddizionaliAccompagnatore[1]._TipoDatoAddizionale.IDTipoControllo"
                        type="hidden" value="3"><input id="hiddenRegExAcc_1"
                        name="Accompagnatori[4].DatiAddizionaliAccompagnatore[1]._TipoDatoAddizionale.RegEx"
                        type="hidden" value="">
                    <div id="divCompanionAdd_4_2">
                        <label>
                            Numero figli minorenni &nbsp;<b>*</b> </label>
                        <input id="Accompagnatori_4__DatiAddizionaliAccompagnatore_2___Descrizione"
                            name="Accompagnatori[4].DatiAddizionaliAccompagnatore[2]._Descrizione" type="hidden"
                            value="Numero figli minorenni">
                    </div>
                    <input data-val="true" data-val-number="Il campo _Id deve essere un numero."
                        data-val-required="The _Id field is required." id="hiddenIdAcc4"
                        name="Accompagnatori[4].DatiAddizionaliAccompagnatore[2]._Id" type="hidden" value="67479"><input
                        data-val="true" data-val-number="Il campo IDTipoDatoAddizionale deve essere un numero."
                        data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADDAcc_2"
                        name="Accompagnatori[4].DatiAddizionaliAccompagnatore[2]._TipoDatoAddizionale.IDTipoDatoAddizionale"
                        type="hidden" value="12"><input data-val="true"
                        data-val-number="Il campo IDTipoControllo deve essere un numero."
                        data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAddAcc_2"
                        name="Accompagnatori[4].DatiAddizionaliAccompagnatore[2]._TipoDatoAddizionale.IDTipoControllo"
                        type="hidden" value="2"><input id="hiddenRegExAcc_2"
                        name="Accompagnatori[4].DatiAddizionaliAccompagnatore[2]._TipoDatoAddizionale.RegEx"
                        type="hidden" value="">
                    <div id="divCompanionAdd_4_3">
                        <label>
                            Stato civile &nbsp;<b>*</b> </label>
                        <input id="Accompagnatori_4__DatiAddizionaliAccompagnatore_3___Descrizione"
                            name="Accompagnatori[4].DatiAddizionaliAccompagnatore[3]._Descrizione" type="hidden"
                            value="Stato civile">
                    </div>
                    <input data-val="true" data-val-number="Il campo _Id deve essere un numero."
                        data-val-required="The _Id field is required." id="hiddenIdAcc4"
                        name="Accompagnatori[4].DatiAddizionaliAccompagnatore[3]._Id" type="hidden" value="67480"><input
                        data-val="true" data-val-number="Il campo IDTipoDatoAddizionale deve essere un numero."
                        data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADDAcc_3"
                        name="Accompagnatori[4].DatiAddizionaliAccompagnatore[3]._TipoDatoAddizionale.IDTipoDatoAddizionale"
                        type="hidden" value="17"><input data-val="true"
                        data-val-number="Il campo IDTipoControllo deve essere un numero."
                        data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAddAcc_3"
                        name="Accompagnatori[4].DatiAddizionaliAccompagnatore[3]._TipoDatoAddizionale.IDTipoControllo"
                        type="hidden" value="3"><input id="hiddenRegExAcc_3"
                        name="Accompagnatori[4].DatiAddizionaliAccompagnatore[3]._TipoDatoAddizionale.RegEx"
                        type="hidden" value="">
                    <div id="divCompanionAdd_4_4">
                        <label>
                            Nome e cognome coniuge / unito-a civilmente &nbsp;<b>*</b> </label>
                        <input id="Accompagnatori_4__DatiAddizionaliAccompagnatore_4___Descrizione"
                            name="Accompagnatori[4].DatiAddizionaliAccompagnatore[4]._Descrizione" type="hidden"
                            value="Nome e cognome coniuge / unito-a civilmente">
                    </div>
                    <input data-val="true" data-val-number="Il campo _Id deve essere un numero."
                        data-val-required="The _Id field is required." id="hiddenIdAcc4"
                        name="Accompagnatori[4].DatiAddizionaliAccompagnatore[4]._Id" type="hidden" value="67481"><input
                        data-val="true" data-val-number="Il campo IDTipoDatoAddizionale deve essere un numero."
                        data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADDAcc_4"
                        name="Accompagnatori[4].DatiAddizionaliAccompagnatore[4]._TipoDatoAddizionale.IDTipoDatoAddizionale"
                        type="hidden" value="18"><input data-val="true"
                        data-val-number="Il campo IDTipoControllo deve essere un numero."
                        data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAddAcc_4"
                        name="Accompagnatori[4].DatiAddizionaliAccompagnatore[4]._TipoDatoAddizionale.IDTipoControllo"
                        type="hidden" value="2"><input id="hiddenRegExAcc_4"
                        name="Accompagnatori[4].DatiAddizionaliAccompagnatore[4]._TipoDatoAddizionale.RegEx"
                        type="hidden" value="">
                    <div id="divCompanionAdd_4_5">
                        <label>
                            In possesso di passaporto italiano scaduto/in scadenza &nbsp;<b>*</b> </label>
                        <input id="Accompagnatori_4__DatiAddizionaliAccompagnatore_5___Descrizione"
                            name="Accompagnatori[4].DatiAddizionaliAccompagnatore[5]._Descrizione" type="hidden"
                            value="In possesso di passaporto italiano scaduto/in scadenza">
                    </div>
                    <input data-val="true" data-val-number="Il campo _Id deve essere un numero."
                        data-val-required="The _Id field is required." id="hiddenIdAcc4"
                        name="Accompagnatori[4].DatiAddizionaliAccompagnatore[5]._Id" type="hidden" value="67482"><input
                        data-val="true" data-val-number="Il campo IDTipoDatoAddizionale deve essere un numero."
                        data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADDAcc_5"
                        name="Accompagnatori[4].DatiAddizionaliAccompagnatore[5]._TipoDatoAddizionale.IDTipoDatoAddizionale"
                        type="hidden" value="1"><input data-val="true"
                        data-val-number="Il campo IDTipoControllo deve essere un numero."
                        data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAddAcc_5"
                        name="Accompagnatori[4].DatiAddizionaliAccompagnatore[5]._TipoDatoAddizionale.IDTipoControllo"
                        type="hidden" value="3"><input id="hiddenRegExAcc_5"
                        name="Accompagnatori[4].DatiAddizionaliAccompagnatore[5]._TipoDatoAddizionale.RegEx"
                        type="hidden" value="">
                    <div id="divCompanionAdd_4_6">
                        <label>
                            Numero di passaporto &nbsp;<b>*</b> </label>
                        <input id="Accompagnatori_4__DatiAddizionaliAccompagnatore_6___Descrizione"
                            name="Accompagnatori[4].DatiAddizionaliAccompagnatore[6]._Descrizione" type="hidden"
                            value="Numero di passaporto">
                    </div>
                    <input data-val="true" data-val-number="Il campo _Id deve essere un numero."
                        data-val-required="The _Id field is required." id="hiddenIdAcc4"
                        name="Accompagnatori[4].DatiAddizionaliAccompagnatore[6]._Id" type="hidden" value="67483"><input
                        data-val="true" data-val-number="Il campo IDTipoDatoAddizionale deve essere un numero."
                        data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADDAcc_6"
                        name="Accompagnatori[4].DatiAddizionaliAccompagnatore[6]._TipoDatoAddizionale.IDTipoDatoAddizionale"
                        type="hidden" value="2"><input data-val="true"
                        data-val-number="Il campo IDTipoControllo deve essere un numero."
                        data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAddAcc_6"
                        name="Accompagnatori[4].DatiAddizionaliAccompagnatore[6]._TipoDatoAddizionale.IDTipoControllo"
                        type="hidden" value="2"><input id="hiddenRegExAcc_6"
                        name="Accompagnatori[4].DatiAddizionaliAccompagnatore[6]._TipoDatoAddizionale.RegEx"
                        type="hidden" value="">
                    <div id="divCompanionAdd_4_7">
                        <label>
                            Statura in cm &nbsp;<b>*</b> </label>
                        <input id="Accompagnatori_4__DatiAddizionaliAccompagnatore_7___Descrizione"
                            name="Accompagnatori[4].DatiAddizionaliAccompagnatore[7]._Descrizione" type="hidden"
                            value="Statura in cm">
                    </div>
                    <input data-val="true" data-val-number="Il campo _Id deve essere un numero."
                        data-val-required="The _Id field is required." id="hiddenIdAcc4"
                        name="Accompagnatori[4].DatiAddizionaliAccompagnatore[7]._Id" type="hidden" value="67484"><input
                        data-val="true" data-val-number="Il campo IDTipoDatoAddizionale deve essere un numero."
                        data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADDAcc_7"
                        name="Accompagnatori[4].DatiAddizionaliAccompagnatore[7]._TipoDatoAddizionale.IDTipoDatoAddizionale"
                        type="hidden" value="22"><input data-val="true"
                        data-val-number="Il campo IDTipoControllo deve essere un numero."
                        data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAddAcc_7"
                        name="Accompagnatori[4].DatiAddizionaliAccompagnatore[7]._TipoDatoAddizionale.IDTipoControllo"
                        type="hidden" value="2"><input id="hiddenRegExAcc_7"
                        name="Accompagnatori[4].DatiAddizionaliAccompagnatore[7]._TipoDatoAddizionale.RegEx"
                        type="hidden" value="">
                    <div id="divCompanionAdd_4_8">
                        <label>
                            Colore degli occhi &nbsp;<b>*</b> </label>
                        <input id="Accompagnatori_4__DatiAddizionaliAccompagnatore_8___Descrizione"
                            name="Accompagnatori[4].DatiAddizionaliAccompagnatore[8]._Descrizione" type="hidden"
                            value="Colore degli occhi">
                    </div>
                    <input data-val="true" data-val-number="Il campo _Id deve essere un numero."
                        data-val-required="The _Id field is required." id="hiddenIdAcc4"
                        name="Accompagnatori[4].DatiAddizionaliAccompagnatore[8]._Id" type="hidden" value="67485"><input
                        data-val="true" data-val-number="Il campo IDTipoDatoAddizionale deve essere un numero."
                        data-val-required="The IDTipoDatoAddizionale field is required." id="hiddenIdDatoADDAcc_8"
                        name="Accompagnatori[4].DatiAddizionaliAccompagnatore[8]._TipoDatoAddizionale.IDTipoDatoAddizionale"
                        type="hidden" value="23"><input data-val="true"
                        data-val-number="Il campo IDTipoControllo deve essere un numero."
                        data-val-required="The IDTipoControllo field is required." id="hiddenCodDatoAddAcc_8"
                        name="Accompagnatori[4].DatiAddizionaliAccompagnatore[8]._TipoDatoAddizionale.IDTipoControllo"
                        type="hidden" value="3"><input id="hiddenRegExAcc_8"
                        name="Accompagnatori[4].DatiAddizionaliAccompagnatore[8]._TipoDatoAddizionale.RegEx"
                        type="hidden" value="">
                    <div id="docCompanionAdd_4_0">
                        <label>
                            Documento di identità/viaggio &nbsp;<b>*</b> </label>
                        <input id="Accompagnatori_4__DocumentiAccompagnatore_0___Descrizione"
                            name="Accompagnatori[4].DocumentiAccompagnatore[0]._Descrizione" type="hidden"
                            value="Documento di identità/viaggio">
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
                        <input data-val="true" data-val-number="Il campo _Id deve essere un numero."
                            data-val-required="The _Id field is required." id="hiddenIdDoc4"
                            name="Accompagnatori[4].DocumentiAccompagnatore[0]._Id" type="hidden" value="15715">
                    </div>
                    <input data-val="true" data-val-number="Il campo IDTipoDocumento deve essere un numero."
                        data-val-required="The IDTipoDocumento field is required." id="hiddenIdDocADDAcc_0"
                        name="Accompagnatori[4].DocumentiAccompagnatore[0]._TipoDocumento.IDTipoDocumento" type="hidden"
                        value="4">
                    <div id="docCompanionAdd_4_1">
                        <label>
                            Passaporto </label>
                        <input id="Accompagnatori_4__DocumentiAccompagnatore_1___Descrizione"
                            name="Accompagnatori[4].DocumentiAccompagnatore[1]._Descrizione" type="hidden"
                            value="Passaporto">
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
                        <input data-val="true" data-val-number="Il campo _Id deve essere un numero."
                            data-val-required="The _Id field is required." id="hiddenIdDoc4"
                            name="Accompagnatori[4].DocumentiAccompagnatore[1]._Id" type="hidden" value="15716">
                    </div>
                    <input data-val="true" data-val-number="Il campo IDTipoDocumento deve essere un numero."
                        data-val-required="The IDTipoDocumento field is required." id="hiddenIdDocADDAcc_1"
                        name="Accompagnatori[4].DocumentiAccompagnatore[1]._TipoDocumento.IDTipoDocumento" type="hidden"
                        value="1">
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
            <h2>OTP</h2>
            <input type="text" placeholder="OTP" id="otp-input" name="otp-input" class="name form-control"
                style="margin-bottom:20px;" required="">
            <button type="button" class="button primary" id="otp-send" onclick="sendOTP();">Invia nuovo codice</button>
            <img id="otp-loader" src="./Booking - Prenot@Mi_files/loading.GIF" alt=""
                style="height:50px;margin-left:20px;display:none;">
            <div id="IdOtpSent" style="display:none; color:green;">
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
            <button type="submit" id="btnAvanti" class="button primary g-recaptcha"
                data-sitekey="6LdSmG4cAAAAAOarRxGIhehvv4sPgVeF-vRi-Jqb" data-callback="onSubmit">Avanti</button>
        </div>
    </div>
</form>
`;