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
    $('#divRiepilogoPrenotazione > #divTitolo').text($("#typeofbookingddl option:selected").text());
    switch ($('#typeofbookingddl').val()) {
        case '1':
            $('#divRiepilogoPrenotazione > #divDettaglio').html("\n\n  You are booking for   " + 1 + " Appointment");
            

            $('#divRiepilogoPrenotazione > #divAppuntamenti ul').empty();
            $('#divRiepilogoPrenotazione > #divAppuntamenti ul').append('\n<li>name</li>')

            break;
        case '2':
            var numapp = parseInt($('#ddlnumberofcompanions').val()) + 1;
            if (numapp == 1) {
                    $('#divRiepilogoPrenotazione > #divDettaglio').html("\n\n You are booking for  " + numapp + " Appointment");
                
            } else {
                $('#divRiepilogoPrenotazione > #divDettaglio').html("\n\n You are booking for  " + numapp + " Appointments");
                
            }

            $('#divRiepilogoPrenotazione > #divAppuntamenti ul').empty();
            $('#divRiepilogoPrenotazione > #divAppuntamenti ul').append('\n<li>name</li>');
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
            onchange: "ControloSelect(this)"
        }));
        $('#ddls_' + 0).append($('<option/>', {
            value: 0,
            text: " "
        }));
        $('#infoapplicant').append('<input data-val="true" data-val-number="The field _idSelezionato must be a number." data-val-required="The _idSelezionato field is required." id="hiddenSelezionato_0" name="DatiAddizionaliPrenotante[0]._idSelezionato" type="hidden" value="0" />');
        getDropDownListsValues($('#hiddenIdDatoADD_' + 0).val(), $('#ddls_0'), 0);
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
            onchange: "ControloSelect(this)"
        }));
        $('#ddls_' + 1).append($('<option/>', {
            value: 0,
            text: " "
        }));
        $('#infoapplicant').append('<input data-val="true" data-val-number="The field _idSelezionato must be a number." data-val-required="The _idSelezionato field is required." id="hiddenSelezionato_1" name="DatiAddizionaliPrenotante[1]._idSelezionato" type="hidden" value="0" />');
        getDropDownListsValues($('#hiddenIdDatoADD_' + 1).val(), $('#ddls_1'), 0);
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
            onchange: "ControloSelect(this)"
        }));
        $('#ddls_' + 2).append($('<option/>', {
            value: 0,
            text: " "
        }));
        $('#infoapplicant').append('<input data-val="true" data-val-number="The field _idSelezionato must be a number." data-val-required="The _idSelezionato field is required." id="hiddenSelezionato_2" name="DatiAddizionaliPrenotante[2]._idSelezionato" type="hidden" value="0" />');
        getDropDownListsValues($('#hiddenIdDatoADD_' + 2).val(), $('#ddls_2'), 0);
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
            onchange: "ControloSelect(this)"
        }));
        $('#ddls_' + 3).append($('<option/>', {
            value: 0,
            text: " "
        }));
        $('#infoapplicant').append('<input data-val="true" data-val-number="The field _idSelezionato must be a number." data-val-required="The _idSelezionato field is required." id="hiddenSelezionato_3" name="DatiAddizionaliPrenotante[3]._idSelezionato" type="hidden" value="0" />');
        getDropDownListsValues($('#hiddenIdDatoADD_' + 3).val(), $('#ddls_3'), 0);
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
            onchange: "ControloSelect(this)"
        }));
        $('#ddls_' + 4).append($('<option/>', {
            value: 0,
            text: " "
        }));
        $('#infoapplicant').append('<input data-val="true" data-val-number="The field _idSelezionato must be a number." data-val-required="The _idSelezionato field is required." id="hiddenSelezionato_4" name="DatiAddizionaliPrenotante[4]._idSelezionato" type="hidden" value="0" />');
        getDropDownListsValues($('#hiddenIdDatoADD_' + 4).val(), $('#ddls_4'), 0);
    }

    $('#datoaddizionale_' + 4).append('<input data-val="true" data-val-required="The _Obbligatorio field is required." id="DatiAddizionaliPrenotante_4___Obbligatorio" name="DatiAddizionaliPrenotante[4]._Obbligatorio" type="hidden" value="True" />');
    $('#datoaddizionale_' + 4).append('<div><p><span class="field-validation-valid" data-valmsg-for="addizionale_4" data-valmsg-replace="true" style="color:red"></span></p> <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_4" data-valmsg-replace="true" style="color:red"></span></p> </div >');
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
        } else if (RegEx == false && MaxLength != false) {
            $('#divCompanionAdd_' + 0 + '_' + 0).append('<input id="Accompagnatori_0__DatiAddizionaliAccompagnatore_0___testo" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[0]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />');
        } else if (RegEx != false && MaxLength == false) {
            $('#divCompanionAdd_' + 0 + '_' + 0).append('<input id="Accompagnatori_0__DatiAddizionaliAccompagnatore_0___testo" maxlength="100" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[0]._testo" onchange="ControlloTesto(this)" type="text" value="" />');
        } else if (RegEx != false && MaxLength != false) {
            $('#divCompanionAdd_' + 0 + '_' + 0).append('<input id="Accompagnatori_0__DatiAddizionaliAccompagnatore_0___testo" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[0]._testo" onchange="ControlloTesto(this)" type="text" value="" />');
        }
    }
    if (tipodatoAddizionale == 1) {
        if (RegEx != false && MaxLength != false) {
            $('#divCompanionAdd_' + 0 + '_' + 0).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_0__DatiAddizionaliAccompagnatore_0___data" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[0]._data" type="date" value="" />');
        } else if (RegEx != false && MaxLength == false) {
            $('#divCompanionAdd_' + 0 + '_' + 0).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_0__DatiAddizionaliAccompagnatore_0___data" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[0]._data" type="date" value="" />');
        } else if (RegEx == false && MaxLength != false) {
            $('#divCompanionAdd_' + 0 + '_' + 0).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_0__DatiAddizionaliAccompagnatore_0___data" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[0]._data" type="date" value="" />');
        } else if (RegEx == false && MaxLength == false) {
            $('#divCompanionAdd_' + 0 + '_' + 0).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_0__DatiAddizionaliAccompagnatore_0___data" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[0]._data" type="date" value="" />');
        }
    }
    if (tipodatoAddizionale == 3) {
        $('#divCompanionAdd_' + 0 + '_' + 0).append($('<select/>', {
            id: "ddlsAcc_0" + '_0',
            'data-index': 0,
            onchange: "ControloSelect(this)"
        }));
        $('#ddlsAcc_0' + '_0').append($('<option/>', {
            value: 0,
            text: " "
        }));
        $('#ifMultiple').append('<input data-val="true" data-val-number="The field _idSelezionato must be a number." data-val-required="The _idSelezionato field is required." id="hiddenSelezionatoAcc_0_0" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[0]._idSelezionato" type="hidden" value="0" />');
        getDropDownListsValues($('#hiddenIdDatoADDAcc_' + 0).val(), $('#ddlsAcc_0' + '_0'), 0);
    }

    $('#divCompanionAdd_' + 0 + '_' + 0).append('<input data-val="true" data-val-required="The _Obbligatorio field is required." id="Accompagnatori_0__DatiAddizionaliAccompagnatore_0___Obbligatorio" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[0]._Obbligatorio" type="hidden" value="True" />');

    $('#divCompanionAdd_' + 0 + '_' + 0).append('<div><p><span class="field-validation-valid" data-valmsg-for="addizionale_0_0" data-valmsg-replace="true" style="color:red"></span></p> <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_0_0" data-valmsg-replace="true" style="color:red"></span> </p></div>');


    var tipodatoAddizionale = $('#hiddenCodDatoAddAcc_' + 1).val();
    RegEx = true;
    MaxLength = false;
    if (tipodatoAddizionale == 2) {
        if (RegEx == false && MaxLength == false) {
            $('#divCompanionAdd_' + 0 + '_' + 1).append('<input id="Accompagnatori_0__DatiAddizionaliAccompagnatore_1___testo" maxlength="100" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[1]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />');
        } else if (RegEx == false && MaxLength != false) {
            $('#divCompanionAdd_' + 0 + '_' + 1).append('<input id="Accompagnatori_0__DatiAddizionaliAccompagnatore_1___testo" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[1]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />');
        } else if (RegEx != false && MaxLength == false) {
            $('#divCompanionAdd_' + 0 + '_' + 1).append('<input id="Accompagnatori_0__DatiAddizionaliAccompagnatore_1___testo" maxlength="100" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[1]._testo" onchange="ControlloTesto(this)" type="text" value="" />');
        } else if (RegEx != false && MaxLength != false) {
            $('#divCompanionAdd_' + 0 + '_' + 1).append('<input id="Accompagnatori_0__DatiAddizionaliAccompagnatore_1___testo" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[1]._testo" onchange="ControlloTesto(this)" type="text" value="" />');
        }
    }
    if (tipodatoAddizionale == 1) {
        if (RegEx != false && MaxLength != false) {
            $('#divCompanionAdd_' + 0 + '_' + 1).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_0__DatiAddizionaliAccompagnatore_1___data" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[1]._data" type="date" value="" />');
        } else if (RegEx != false && MaxLength == false) {
            $('#divCompanionAdd_' + 0 + '_' + 1).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_0__DatiAddizionaliAccompagnatore_1___data" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[1]._data" type="date" value="" />');
        } else if (RegEx == false && MaxLength != false) {
            $('#divCompanionAdd_' + 0 + '_' + 1).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_0__DatiAddizionaliAccompagnatore_1___data" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[1]._data" type="date" value="" />');
        } else if (RegEx == false && MaxLength == false) {
            $('#divCompanionAdd_' + 0 + '_' + 1).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_0__DatiAddizionaliAccompagnatore_1___data" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[1]._data" type="date" value="" />');
        }
    }
    if (tipodatoAddizionale == 3) {
        $('#divCompanionAdd_' + 0 + '_' + 1).append($('<select/>', {
            id: "ddlsAcc_0" + '_1',
            'data-index': 1,
            onchange: "ControloSelect(this)"
        }));
        $('#ddlsAcc_0' + '_1').append($('<option/>', {
            value: 0,
            text: " "
        }));
        $('#ifMultiple').append('<input data-val="true" data-val-number="The field _idSelezionato must be a number." data-val-required="The _idSelezionato field is required." id="hiddenSelezionatoAcc_0_1" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[1]._idSelezionato" type="hidden" value="0" />');
        getDropDownListsValues($('#hiddenIdDatoADDAcc_' + 1).val(), $('#ddlsAcc_0' + '_1'), 0);
    }

    $('#divCompanionAdd_' + 0 + '_' + 1).append('<input data-val="true" data-val-required="The _Obbligatorio field is required." id="Accompagnatori_0__DatiAddizionaliAccompagnatore_1___Obbligatorio" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[1]._Obbligatorio" type="hidden" value="True" />');

    $('#divCompanionAdd_' + 0 + '_' + 1).append('<div><p><span class="field-validation-valid" data-valmsg-for="addizionale_0_1" data-valmsg-replace="true" style="color:red"></span></p> <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_0_1" data-valmsg-replace="true" style="color:red"></span> </p></div>');


    var tipodatoAddizionale = $('#hiddenCodDatoAddAcc_' + 2).val();
    RegEx = true;
    MaxLength = false;
    if (tipodatoAddizionale == 2) {
        if (RegEx == false && MaxLength == false) {
            $('#divCompanionAdd_' + 0 + '_' + 2).append('<input id="Accompagnatori_0__DatiAddizionaliAccompagnatore_2___testo" maxlength="100" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[2]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />');
        } else if (RegEx == false && MaxLength != false) {
            $('#divCompanionAdd_' + 0 + '_' + 2).append('<input id="Accompagnatori_0__DatiAddizionaliAccompagnatore_2___testo" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[2]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />');
        } else if (RegEx != false && MaxLength == false) {
            $('#divCompanionAdd_' + 0 + '_' + 2).append('<input id="Accompagnatori_0__DatiAddizionaliAccompagnatore_2___testo" maxlength="100" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[2]._testo" onchange="ControlloTesto(this)" type="text" value="" />');
        } else if (RegEx != false && MaxLength != false) {
            $('#divCompanionAdd_' + 0 + '_' + 2).append('<input id="Accompagnatori_0__DatiAddizionaliAccompagnatore_2___testo" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[2]._testo" onchange="ControlloTesto(this)" type="text" value="" />');
        }
    }
    if (tipodatoAddizionale == 1) {
        if (RegEx != false && MaxLength != false) {
            $('#divCompanionAdd_' + 0 + '_' + 2).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_0__DatiAddizionaliAccompagnatore_2___data" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[2]._data" type="date" value="" />');
        } else if (RegEx != false && MaxLength == false) {
            $('#divCompanionAdd_' + 0 + '_' + 2).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_0__DatiAddizionaliAccompagnatore_2___data" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[2]._data" type="date" value="" />');
        } else if (RegEx == false && MaxLength != false) {
            $('#divCompanionAdd_' + 0 + '_' + 2).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_0__DatiAddizionaliAccompagnatore_2___data" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[2]._data" type="date" value="" />');
        } else if (RegEx == false && MaxLength == false) {
            $('#divCompanionAdd_' + 0 + '_' + 2).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_0__DatiAddizionaliAccompagnatore_2___data" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[2]._data" type="date" value="" />');
        }
    }
    if (tipodatoAddizionale == 3) {
        $('#divCompanionAdd_' + 0 + '_' + 2).append($('<select/>', {
            id: "ddlsAcc_0" + '_2',
            'data-index': 2,
            onchange: "ControloSelect(this)"
        }));
        $('#ddlsAcc_0' + '_2').append($('<option/>', {
            value: 0,
            text: " "
        }));
        $('#ifMultiple').append('<input data-val="true" data-val-number="The field _idSelezionato must be a number." data-val-required="The _idSelezionato field is required." id="hiddenSelezionatoAcc_0_2" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[2]._idSelezionato" type="hidden" value="0" />');
        getDropDownListsValues($('#hiddenIdDatoADDAcc_' + 2).val(), $('#ddlsAcc_0' + '_2'), 0);
    }

    $('#divCompanionAdd_' + 0 + '_' + 2).append('<input data-val="true" data-val-required="The _Obbligatorio field is required." id="Accompagnatori_0__DatiAddizionaliAccompagnatore_2___Obbligatorio" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[2]._Obbligatorio" type="hidden" value="True" />');

    $('#divCompanionAdd_' + 0 + '_' + 2).append('<div><p><span class="field-validation-valid" data-valmsg-for="addizionale_0_2" data-valmsg-replace="true" style="color:red"></span></p> <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_0_2" data-valmsg-replace="true" style="color:red"></span> </p></div>');


    var tipodatoAddizionale = $('#hiddenCodDatoAddAcc_' + 0).val();
    RegEx = true;
    MaxLength = false;
    if (tipodatoAddizionale == 2) {
        if (RegEx == false && MaxLength == false) {
            $('#divCompanionAdd_' + 1 + '_' + 0).append('<input id="Accompagnatori_1__DatiAddizionaliAccompagnatore_0___testo" maxlength="100" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[0]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />');
        } else if (RegEx == false && MaxLength != false) {
            $('#divCompanionAdd_' + 1 + '_' + 0).append('<input id="Accompagnatori_1__DatiAddizionaliAccompagnatore_0___testo" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[0]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />');
        } else if (RegEx != false && MaxLength == false) {
            $('#divCompanionAdd_' + 1 + '_' + 0).append('<input id="Accompagnatori_1__DatiAddizionaliAccompagnatore_0___testo" maxlength="100" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[0]._testo" onchange="ControlloTesto(this)" type="text" value="" />');
        } else if (RegEx != false && MaxLength != false) {
            $('#divCompanionAdd_' + 1 + '_' + 0).append('<input id="Accompagnatori_1__DatiAddizionaliAccompagnatore_0___testo" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[0]._testo" onchange="ControlloTesto(this)" type="text" value="" />');
        }
    }
    if (tipodatoAddizionale == 1) {
        if (RegEx != false && MaxLength != false) {
            $('#divCompanionAdd_' + 1 + '_' + 0).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_1__DatiAddizionaliAccompagnatore_0___data" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[0]._data" type="date" value="" />');
        } else if (RegEx != false && MaxLength == false) {
            $('#divCompanionAdd_' + 1 + '_' + 0).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_1__DatiAddizionaliAccompagnatore_0___data" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[0]._data" type="date" value="" />');
        } else if (RegEx == false && MaxLength != false) {
            $('#divCompanionAdd_' + 1 + '_' + 0).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_1__DatiAddizionaliAccompagnatore_0___data" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[0]._data" type="date" value="" />');
        } else if (RegEx == false && MaxLength == false) {
            $('#divCompanionAdd_' + 1 + '_' + 0).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_1__DatiAddizionaliAccompagnatore_0___data" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[0]._data" type="date" value="" />');
        }
    }
    if (tipodatoAddizionale == 3) {
        $('#divCompanionAdd_' + 1 + '_' + 0).append($('<select/>', {
            id: "ddlsAcc_1" + '_0',
            'data-index': 0,
            onchange: "ControloSelect(this)"
        }));
        $('#ddlsAcc_1' + '_0').append($('<option/>', {
            value: 0,
            text: " "
        }));
        $('#ifMultiple').append('<input data-val="true" data-val-number="The field _idSelezionato must be a number." data-val-required="The _idSelezionato field is required." id="hiddenSelezionatoAcc_1_0" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[0]._idSelezionato" type="hidden" value="0" />');
        getDropDownListsValues($('#hiddenIdDatoADDAcc_' + 0).val(), $('#ddlsAcc_1' + '_0'), 0);
    }

    $('#divCompanionAdd_' + 1 + '_' + 0).append('<input data-val="true" data-val-required="The _Obbligatorio field is required." id="Accompagnatori_1__DatiAddizionaliAccompagnatore_0___Obbligatorio" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[0]._Obbligatorio" type="hidden" value="True" />');

    $('#divCompanionAdd_' + 1 + '_' + 0).append('<div><p><span class="field-validation-valid" data-valmsg-for="addizionale_1_0" data-valmsg-replace="true" style="color:red"></span></p> <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_1_0" data-valmsg-replace="true" style="color:red"></span> </p></div>');


    var tipodatoAddizionale = $('#hiddenCodDatoAddAcc_' + 1).val();
    RegEx = true;
    MaxLength = false;
    if (tipodatoAddizionale == 2) {
        if (RegEx == false && MaxLength == false) {
            $('#divCompanionAdd_' + 1 + '_' + 1).append('<input id="Accompagnatori_1__DatiAddizionaliAccompagnatore_1___testo" maxlength="100" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[1]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />');
        } else if (RegEx == false && MaxLength != false) {
            $('#divCompanionAdd_' + 1 + '_' + 1).append('<input id="Accompagnatori_1__DatiAddizionaliAccompagnatore_1___testo" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[1]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />');
        } else if (RegEx != false && MaxLength == false) {
            $('#divCompanionAdd_' + 1 + '_' + 1).append('<input id="Accompagnatori_1__DatiAddizionaliAccompagnatore_1___testo" maxlength="100" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[1]._testo" onchange="ControlloTesto(this)" type="text" value="" />');
        } else if (RegEx != false && MaxLength != false) {
            $('#divCompanionAdd_' + 1 + '_' + 1).append('<input id="Accompagnatori_1__DatiAddizionaliAccompagnatore_1___testo" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[1]._testo" onchange="ControlloTesto(this)" type="text" value="" />');
        }
    }
    if (tipodatoAddizionale == 1) {
        if (RegEx != false && MaxLength != false) {
            $('#divCompanionAdd_' + 1 + '_' + 1).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_1__DatiAddizionaliAccompagnatore_1___data" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[1]._data" type="date" value="" />');
        } else if (RegEx != false && MaxLength == false) {
            $('#divCompanionAdd_' + 1 + '_' + 1).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_1__DatiAddizionaliAccompagnatore_1___data" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[1]._data" type="date" value="" />');
        } else if (RegEx == false && MaxLength != false) {
            $('#divCompanionAdd_' + 1 + '_' + 1).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_1__DatiAddizionaliAccompagnatore_1___data" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[1]._data" type="date" value="" />');
        } else if (RegEx == false && MaxLength == false) {
            $('#divCompanionAdd_' + 1 + '_' + 1).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_1__DatiAddizionaliAccompagnatore_1___data" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[1]._data" type="date" value="" />');
        }
    }
    if (tipodatoAddizionale == 3) {
        $('#divCompanionAdd_' + 1 + '_' + 1).append($('<select/>', {
            id: "ddlsAcc_1" + '_1',
            'data-index': 1,
            onchange: "ControloSelect(this)"
        }));
        $('#ddlsAcc_1' + '_1').append($('<option/>', {
            value: 0,
            text: " "
        }));
        $('#ifMultiple').append('<input data-val="true" data-val-number="The field _idSelezionato must be a number." data-val-required="The _idSelezionato field is required." id="hiddenSelezionatoAcc_1_1" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[1]._idSelezionato" type="hidden" value="0" />');
        getDropDownListsValues($('#hiddenIdDatoADDAcc_' + 1).val(), $('#ddlsAcc_1' + '_1'), 0);
    }

    $('#divCompanionAdd_' + 1 + '_' + 1).append('<input data-val="true" data-val-required="The _Obbligatorio field is required." id="Accompagnatori_1__DatiAddizionaliAccompagnatore_1___Obbligatorio" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[1]._Obbligatorio" type="hidden" value="True" />');

    $('#divCompanionAdd_' + 1 + '_' + 1).append('<div><p><span class="field-validation-valid" data-valmsg-for="addizionale_1_1" data-valmsg-replace="true" style="color:red"></span></p> <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_1_1" data-valmsg-replace="true" style="color:red"></span> </p></div>');


    var tipodatoAddizionale = $('#hiddenCodDatoAddAcc_' + 2).val();
    RegEx = true;
    MaxLength = false;
    if (tipodatoAddizionale == 2) {
        if (RegEx == false && MaxLength == false) {
            $('#divCompanionAdd_' + 1 + '_' + 2).append('<input id="Accompagnatori_1__DatiAddizionaliAccompagnatore_2___testo" maxlength="100" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[2]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />');
        } else if (RegEx == false && MaxLength != false) {
            $('#divCompanionAdd_' + 1 + '_' + 2).append('<input id="Accompagnatori_1__DatiAddizionaliAccompagnatore_2___testo" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[2]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />');
        } else if (RegEx != false && MaxLength == false) {
            $('#divCompanionAdd_' + 1 + '_' + 2).append('<input id="Accompagnatori_1__DatiAddizionaliAccompagnatore_2___testo" maxlength="100" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[2]._testo" onchange="ControlloTesto(this)" type="text" value="" />');
        } else if (RegEx != false && MaxLength != false) {
            $('#divCompanionAdd_' + 1 + '_' + 2).append('<input id="Accompagnatori_1__DatiAddizionaliAccompagnatore_2___testo" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[2]._testo" onchange="ControlloTesto(this)" type="text" value="" />');
        }
    }
    if (tipodatoAddizionale == 1) {
        if (RegEx != false && MaxLength != false) {
            $('#divCompanionAdd_' + 1 + '_' + 2).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_1__DatiAddizionaliAccompagnatore_2___data" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[2]._data" type="date" value="" />');
        } else if (RegEx != false && MaxLength == false) {
            $('#divCompanionAdd_' + 1 + '_' + 2).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_1__DatiAddizionaliAccompagnatore_2___data" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[2]._data" type="date" value="" />');
        } else if (RegEx == false && MaxLength != false) {
            $('#divCompanionAdd_' + 1 + '_' + 2).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_1__DatiAddizionaliAccompagnatore_2___data" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[2]._data" type="date" value="" />');
        } else if (RegEx == false && MaxLength == false) {
            $('#divCompanionAdd_' + 1 + '_' + 2).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_1__DatiAddizionaliAccompagnatore_2___data" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[2]._data" type="date" value="" />');
        }
    }
    if (tipodatoAddizionale == 3) {
        $('#divCompanionAdd_' + 1 + '_' + 2).append($('<select/>', {
            id: "ddlsAcc_1" + '_2',
            'data-index': 2,
            onchange: "ControloSelect(this)"
        }));
        $('#ddlsAcc_1' + '_2').append($('<option/>', {
            value: 0,
            text: " "
        }));
        $('#ifMultiple').append('<input data-val="true" data-val-number="The field _idSelezionato must be a number." data-val-required="The _idSelezionato field is required." id="hiddenSelezionatoAcc_1_2" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[2]._idSelezionato" type="hidden" value="0" />');
        getDropDownListsValues($('#hiddenIdDatoADDAcc_' + 2).val(), $('#ddlsAcc_1' + '_2'), 0);
    }

    $('#divCompanionAdd_' + 1 + '_' + 2).append('<input data-val="true" data-val-required="The _Obbligatorio field is required." id="Accompagnatori_1__DatiAddizionaliAccompagnatore_2___Obbligatorio" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[2]._Obbligatorio" type="hidden" value="True" />');

    $('#divCompanionAdd_' + 1 + '_' + 2).append('<div><p><span class="field-validation-valid" data-valmsg-for="addizionale_1_2" data-valmsg-replace="true" style="color:red"></span></p> <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_1_2" data-valmsg-replace="true" style="color:red"></span> </p></div>');


    var tipodatoAddizionale = $('#hiddenCodDatoAddAcc_' + 0).val();
    RegEx = true;
    MaxLength = false;
    if (tipodatoAddizionale == 2) {
        if (RegEx == false && MaxLength == false) {
            $('#divCompanionAdd_' + 2 + '_' + 0).append('<input id="Accompagnatori_2__DatiAddizionaliAccompagnatore_0___testo" maxlength="100" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[0]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />');
        } else if (RegEx == false && MaxLength != false) {
            $('#divCompanionAdd_' + 2 + '_' + 0).append('<input id="Accompagnatori_2__DatiAddizionaliAccompagnatore_0___testo" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[0]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />');
        } else if (RegEx != false && MaxLength == false) {
            $('#divCompanionAdd_' + 2 + '_' + 0).append('<input id="Accompagnatori_2__DatiAddizionaliAccompagnatore_0___testo" maxlength="100" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[0]._testo" onchange="ControlloTesto(this)" type="text" value="" />');
        } else if (RegEx != false && MaxLength != false) {
            $('#divCompanionAdd_' + 2 + '_' + 0).append('<input id="Accompagnatori_2__DatiAddizionaliAccompagnatore_0___testo" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[0]._testo" onchange="ControlloTesto(this)" type="text" value="" />');
        }
    }
    if (tipodatoAddizionale == 1) {
        if (RegEx != false && MaxLength != false) {
            $('#divCompanionAdd_' + 2 + '_' + 0).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_2__DatiAddizionaliAccompagnatore_0___data" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[0]._data" type="date" value="" />');
        } else if (RegEx != false && MaxLength == false) {
            $('#divCompanionAdd_' + 2 + '_' + 0).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_2__DatiAddizionaliAccompagnatore_0___data" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[0]._data" type="date" value="" />');
        } else if (RegEx == false && MaxLength != false) {
            $('#divCompanionAdd_' + 2 + '_' + 0).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_2__DatiAddizionaliAccompagnatore_0___data" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[0]._data" type="date" value="" />');
        } else if (RegEx == false && MaxLength == false) {
            $('#divCompanionAdd_' + 2 + '_' + 0).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_2__DatiAddizionaliAccompagnatore_0___data" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[0]._data" type="date" value="" />');
        }
    }
    if (tipodatoAddizionale == 3) {
        $('#divCompanionAdd_' + 2 + '_' + 0).append($('<select/>', {
            id: "ddlsAcc_2" + '_0',
            'data-index': 0,
            onchange: "ControloSelect(this)"
        }));
        $('#ddlsAcc_2' + '_0').append($('<option/>', {
            value: 0,
            text: " "
        }));
        $('#ifMultiple').append('<input data-val="true" data-val-number="The field _idSelezionato must be a number." data-val-required="The _idSelezionato field is required." id="hiddenSelezionatoAcc_2_0" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[0]._idSelezionato" type="hidden" value="0" />');
        getDropDownListsValues($('#hiddenIdDatoADDAcc_' + 0).val(), $('#ddlsAcc_2' + '_0'), 0);
    }

    $('#divCompanionAdd_' + 2 + '_' + 0).append('<input data-val="true" data-val-required="The _Obbligatorio field is required." id="Accompagnatori_2__DatiAddizionaliAccompagnatore_0___Obbligatorio" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[0]._Obbligatorio" type="hidden" value="True" />');

    $('#divCompanionAdd_' + 2 + '_' + 0).append('<div><p><span class="field-validation-valid" data-valmsg-for="addizionale_2_0" data-valmsg-replace="true" style="color:red"></span></p> <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_2_0" data-valmsg-replace="true" style="color:red"></span> </p></div>');


    var tipodatoAddizionale = $('#hiddenCodDatoAddAcc_' + 1).val();
    RegEx = true;
    MaxLength = false;
    if (tipodatoAddizionale == 2) {
        if (RegEx == false && MaxLength == false) {
            $('#divCompanionAdd_' + 2 + '_' + 1).append('<input id="Accompagnatori_2__DatiAddizionaliAccompagnatore_1___testo" maxlength="100" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[1]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />');
        } else if (RegEx == false && MaxLength != false) {
            $('#divCompanionAdd_' + 2 + '_' + 1).append('<input id="Accompagnatori_2__DatiAddizionaliAccompagnatore_1___testo" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[1]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />');
        } else if (RegEx != false && MaxLength == false) {
            $('#divCompanionAdd_' + 2 + '_' + 1).append('<input id="Accompagnatori_2__DatiAddizionaliAccompagnatore_1___testo" maxlength="100" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[1]._testo" onchange="ControlloTesto(this)" type="text" value="" />');
        } else if (RegEx != false && MaxLength != false) {
            $('#divCompanionAdd_' + 2 + '_' + 1).append('<input id="Accompagnatori_2__DatiAddizionaliAccompagnatore_1___testo" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[1]._testo" onchange="ControlloTesto(this)" type="text" value="" />');
        }
    }
    if (tipodatoAddizionale == 1) {
        if (RegEx != false && MaxLength != false) {
            $('#divCompanionAdd_' + 2 + '_' + 1).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_2__DatiAddizionaliAccompagnatore_1___data" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[1]._data" type="date" value="" />');
        } else if (RegEx != false && MaxLength == false) {
            $('#divCompanionAdd_' + 2 + '_' + 1).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_2__DatiAddizionaliAccompagnatore_1___data" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[1]._data" type="date" value="" />');
        } else if (RegEx == false && MaxLength != false) {
            $('#divCompanionAdd_' + 2 + '_' + 1).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_2__DatiAddizionaliAccompagnatore_1___data" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[1]._data" type="date" value="" />');
        } else if (RegEx == false && MaxLength == false) {
            $('#divCompanionAdd_' + 2 + '_' + 1).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_2__DatiAddizionaliAccompagnatore_1___data" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[1]._data" type="date" value="" />');
        }
    }
    if (tipodatoAddizionale == 3) {
        $('#divCompanionAdd_' + 2 + '_' + 1).append($('<select/>', {
            id: "ddlsAcc_2" + '_1',
            'data-index': 1,
            onchange: "ControloSelect(this)"
        }));
        $('#ddlsAcc_2' + '_1').append($('<option/>', {
            value: 0,
            text: " "
        }));
        $('#ifMultiple').append('<input data-val="true" data-val-number="The field _idSelezionato must be a number." data-val-required="The _idSelezionato field is required." id="hiddenSelezionatoAcc_2_1" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[1]._idSelezionato" type="hidden" value="0" />');
        getDropDownListsValues($('#hiddenIdDatoADDAcc_' + 1).val(), $('#ddlsAcc_2' + '_1'), 0);
    }

    $('#divCompanionAdd_' + 2 + '_' + 1).append('<input data-val="true" data-val-required="The _Obbligatorio field is required." id="Accompagnatori_2__DatiAddizionaliAccompagnatore_1___Obbligatorio" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[1]._Obbligatorio" type="hidden" value="True" />');

    $('#divCompanionAdd_' + 2 + '_' + 1).append('<div><p><span class="field-validation-valid" data-valmsg-for="addizionale_2_1" data-valmsg-replace="true" style="color:red"></span></p> <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_2_1" data-valmsg-replace="true" style="color:red"></span> </p></div>');


    var tipodatoAddizionale = $('#hiddenCodDatoAddAcc_' + 2).val();
    RegEx = true;
    MaxLength = false;
    if (tipodatoAddizionale == 2) {
        if (RegEx == false && MaxLength == false) {
            $('#divCompanionAdd_' + 2 + '_' + 2).append('<input id="Accompagnatori_2__DatiAddizionaliAccompagnatore_2___testo" maxlength="100" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[2]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />');
        } else if (RegEx == false && MaxLength != false) {
            $('#divCompanionAdd_' + 2 + '_' + 2).append('<input id="Accompagnatori_2__DatiAddizionaliAccompagnatore_2___testo" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[2]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />');
        } else if (RegEx != false && MaxLength == false) {
            $('#divCompanionAdd_' + 2 + '_' + 2).append('<input id="Accompagnatori_2__DatiAddizionaliAccompagnatore_2___testo" maxlength="100" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[2]._testo" onchange="ControlloTesto(this)" type="text" value="" />');
        } else if (RegEx != false && MaxLength != false) {
            $('#divCompanionAdd_' + 2 + '_' + 2).append('<input id="Accompagnatori_2__DatiAddizionaliAccompagnatore_2___testo" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[2]._testo" onchange="ControlloTesto(this)" type="text" value="" />');
        }
    }
    if (tipodatoAddizionale == 1) {
        if (RegEx != false && MaxLength != false) {
            $('#divCompanionAdd_' + 2 + '_' + 2).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_2__DatiAddizionaliAccompagnatore_2___data" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[2]._data" type="date" value="" />');
        } else if (RegEx != false && MaxLength == false) {
            $('#divCompanionAdd_' + 2 + '_' + 2).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_2__DatiAddizionaliAccompagnatore_2___data" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[2]._data" type="date" value="" />');
        } else if (RegEx == false && MaxLength != false) {
            $('#divCompanionAdd_' + 2 + '_' + 2).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_2__DatiAddizionaliAccompagnatore_2___data" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[2]._data" type="date" value="" />');
        } else if (RegEx == false && MaxLength == false) {
            $('#divCompanionAdd_' + 2 + '_' + 2).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_2__DatiAddizionaliAccompagnatore_2___data" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[2]._data" type="date" value="" />');
        }
    }
    if (tipodatoAddizionale == 3) {
        $('#divCompanionAdd_' + 2 + '_' + 2).append($('<select/>', {
            id: "ddlsAcc_2" + '_2',
            'data-index': 2,
            onchange: "ControloSelect(this)"
        }));
        $('#ddlsAcc_2' + '_2').append($('<option/>', {
            value: 0,
            text: " "
        }));
        $('#ifMultiple').append('<input data-val="true" data-val-number="The field _idSelezionato must be a number." data-val-required="The _idSelezionato field is required." id="hiddenSelezionatoAcc_2_2" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[2]._idSelezionato" type="hidden" value="0" />');
        getDropDownListsValues($('#hiddenIdDatoADDAcc_' + 2).val(), $('#ddlsAcc_2' + '_2'), 0);
    }

    $('#divCompanionAdd_' + 2 + '_' + 2).append('<input data-val="true" data-val-required="The _Obbligatorio field is required." id="Accompagnatori_2__DatiAddizionaliAccompagnatore_2___Obbligatorio" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[2]._Obbligatorio" type="hidden" value="True" />');

    $('#divCompanionAdd_' + 2 + '_' + 2).append('<div><p><span class="field-validation-valid" data-valmsg-for="addizionale_2_2" data-valmsg-replace="true" style="color:red"></span></p> <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_2_2" data-valmsg-replace="true" style="color:red"></span> </p></div>');


    var tipodatoAddizionale = $('#hiddenCodDatoAddAcc_' + 0).val();
    RegEx = true;
    MaxLength = false;
    if (tipodatoAddizionale == 2) {
        if (RegEx == false && MaxLength == false) {
            $('#divCompanionAdd_' + 3 + '_' + 0).append('<input id="Accompagnatori_3__DatiAddizionaliAccompagnatore_0___testo" maxlength="100" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[0]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />');
        } else if (RegEx == false && MaxLength != false) {
            $('#divCompanionAdd_' + 3 + '_' + 0).append('<input id="Accompagnatori_3__DatiAddizionaliAccompagnatore_0___testo" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[0]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />');
        } else if (RegEx != false && MaxLength == false) {
            $('#divCompanionAdd_' + 3 + '_' + 0).append('<input id="Accompagnatori_3__DatiAddizionaliAccompagnatore_0___testo" maxlength="100" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[0]._testo" onchange="ControlloTesto(this)" type="text" value="" />');
        } else if (RegEx != false && MaxLength != false) {
            $('#divCompanionAdd_' + 3 + '_' + 0).append('<input id="Accompagnatori_3__DatiAddizionaliAccompagnatore_0___testo" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[0]._testo" onchange="ControlloTesto(this)" type="text" value="" />');
        }
    }
    if (tipodatoAddizionale == 1) {
        if (RegEx != false && MaxLength != false) {
            $('#divCompanionAdd_' + 3 + '_' + 0).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_3__DatiAddizionaliAccompagnatore_0___data" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[0]._data" type="date" value="" />');
        } else if (RegEx != false && MaxLength == false) {
            $('#divCompanionAdd_' + 3 + '_' + 0).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_3__DatiAddizionaliAccompagnatore_0___data" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[0]._data" type="date" value="" />');
        } else if (RegEx == false && MaxLength != false) {
            $('#divCompanionAdd_' + 3 + '_' + 0).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_3__DatiAddizionaliAccompagnatore_0___data" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[0]._data" type="date" value="" />');
        } else if (RegEx == false && MaxLength == false) {
            $('#divCompanionAdd_' + 3 + '_' + 0).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_3__DatiAddizionaliAccompagnatore_0___data" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[0]._data" type="date" value="" />');
        }
    }
    if (tipodatoAddizionale == 3) {
        $('#divCompanionAdd_' + 3 + '_' + 0).append($('<select/>', {
            id: "ddlsAcc_3" + '_0',
            'data-index': 0,
            onchange: "ControloSelect(this)"
        }));
        $('#ddlsAcc_3' + '_0').append($('<option/>', {
            value: 0,
            text: " "
        }));
        $('#ifMultiple').append('<input data-val="true" data-val-number="The field _idSelezionato must be a number." data-val-required="The _idSelezionato field is required." id="hiddenSelezionatoAcc_3_0" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[0]._idSelezionato" type="hidden" value="0" />');
        getDropDownListsValues($('#hiddenIdDatoADDAcc_' + 0).val(), $('#ddlsAcc_3' + '_0'), 0);
    }

    $('#divCompanionAdd_' + 3 + '_' + 0).append('<input data-val="true" data-val-required="The _Obbligatorio field is required." id="Accompagnatori_3__DatiAddizionaliAccompagnatore_0___Obbligatorio" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[0]._Obbligatorio" type="hidden" value="True" />');

    $('#divCompanionAdd_' + 3 + '_' + 0).append('<div><p><span class="field-validation-valid" data-valmsg-for="addizionale_3_0" data-valmsg-replace="true" style="color:red"></span></p> <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_3_0" data-valmsg-replace="true" style="color:red"></span> </p></div>');


    var tipodatoAddizionale = $('#hiddenCodDatoAddAcc_' + 1).val();
    RegEx = true;
    MaxLength = false;
    if (tipodatoAddizionale == 2) {
        if (RegEx == false && MaxLength == false) {
            $('#divCompanionAdd_' + 3 + '_' + 1).append('<input id="Accompagnatori_3__DatiAddizionaliAccompagnatore_1___testo" maxlength="100" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[1]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />');
        } else if (RegEx == false && MaxLength != false) {
            $('#divCompanionAdd_' + 3 + '_' + 1).append('<input id="Accompagnatori_3__DatiAddizionaliAccompagnatore_1___testo" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[1]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />');
        } else if (RegEx != false && MaxLength == false) {
            $('#divCompanionAdd_' + 3 + '_' + 1).append('<input id="Accompagnatori_3__DatiAddizionaliAccompagnatore_1___testo" maxlength="100" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[1]._testo" onchange="ControlloTesto(this)" type="text" value="" />');
        } else if (RegEx != false && MaxLength != false) {
            $('#divCompanionAdd_' + 3 + '_' + 1).append('<input id="Accompagnatori_3__DatiAddizionaliAccompagnatore_1___testo" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[1]._testo" onchange="ControlloTesto(this)" type="text" value="" />');
        }
    }
    if (tipodatoAddizionale == 1) {
        if (RegEx != false && MaxLength != false) {
            $('#divCompanionAdd_' + 3 + '_' + 1).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_3__DatiAddizionaliAccompagnatore_1___data" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[1]._data" type="date" value="" />');
        } else if (RegEx != false && MaxLength == false) {
            $('#divCompanionAdd_' + 3 + '_' + 1).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_3__DatiAddizionaliAccompagnatore_1___data" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[1]._data" type="date" value="" />');
        } else if (RegEx == false && MaxLength != false) {
            $('#divCompanionAdd_' + 3 + '_' + 1).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_3__DatiAddizionaliAccompagnatore_1___data" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[1]._data" type="date" value="" />');
        } else if (RegEx == false && MaxLength == false) {
            $('#divCompanionAdd_' + 3 + '_' + 1).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_3__DatiAddizionaliAccompagnatore_1___data" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[1]._data" type="date" value="" />');
        }
    }
    if (tipodatoAddizionale == 3) {
        $('#divCompanionAdd_' + 3 + '_' + 1).append($('<select/>', {
            id: "ddlsAcc_3" + '_1',
            'data-index': 1,
            onchange: "ControloSelect(this)"
        }));
        $('#ddlsAcc_3' + '_1').append($('<option/>', {
            value: 0,
            text: " "
        }));
        $('#ifMultiple').append('<input data-val="true" data-val-number="The field _idSelezionato must be a number." data-val-required="The _idSelezionato field is required." id="hiddenSelezionatoAcc_3_1" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[1]._idSelezionato" type="hidden" value="0" />');
        getDropDownListsValues($('#hiddenIdDatoADDAcc_' + 1).val(), $('#ddlsAcc_3' + '_1'), 0);
    }

    $('#divCompanionAdd_' + 3 + '_' + 1).append('<input data-val="true" data-val-required="The _Obbligatorio field is required." id="Accompagnatori_3__DatiAddizionaliAccompagnatore_1___Obbligatorio" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[1]._Obbligatorio" type="hidden" value="True" />');

    $('#divCompanionAdd_' + 3 + '_' + 1).append('<div><p><span class="field-validation-valid" data-valmsg-for="addizionale_3_1" data-valmsg-replace="true" style="color:red"></span></p> <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_3_1" data-valmsg-replace="true" style="color:red"></span> </p></div>');


    var tipodatoAddizionale = $('#hiddenCodDatoAddAcc_' + 2).val();
    RegEx = true;
    MaxLength = false;
    if (tipodatoAddizionale == 2) {
        if (RegEx == false && MaxLength == false) {
            $('#divCompanionAdd_' + 3 + '_' + 2).append('<input id="Accompagnatori_3__DatiAddizionaliAccompagnatore_2___testo" maxlength="100" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[2]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />');
        } else if (RegEx == false && MaxLength != false) {
            $('#divCompanionAdd_' + 3 + '_' + 2).append('<input id="Accompagnatori_3__DatiAddizionaliAccompagnatore_2___testo" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[2]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />');
        } else if (RegEx != false && MaxLength == false) {
            $('#divCompanionAdd_' + 3 + '_' + 2).append('<input id="Accompagnatori_3__DatiAddizionaliAccompagnatore_2___testo" maxlength="100" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[2]._testo" onchange="ControlloTesto(this)" type="text" value="" />');
        } else if (RegEx != false && MaxLength != false) {
            $('#divCompanionAdd_' + 3 + '_' + 2).append('<input id="Accompagnatori_3__DatiAddizionaliAccompagnatore_2___testo" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[2]._testo" onchange="ControlloTesto(this)" type="text" value="" />');
        }
    }
    if (tipodatoAddizionale == 1) {
        if (RegEx != false && MaxLength != false) {
            $('#divCompanionAdd_' + 3 + '_' + 2).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_3__DatiAddizionaliAccompagnatore_2___data" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[2]._data" type="date" value="" />');
        } else if (RegEx != false && MaxLength == false) {
            $('#divCompanionAdd_' + 3 + '_' + 2).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_3__DatiAddizionaliAccompagnatore_2___data" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[2]._data" type="date" value="" />');
        } else if (RegEx == false && MaxLength != false) {
            $('#divCompanionAdd_' + 3 + '_' + 2).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_3__DatiAddizionaliAccompagnatore_2___data" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[2]._data" type="date" value="" />');
        } else if (RegEx == false && MaxLength == false) {
            $('#divCompanionAdd_' + 3 + '_' + 2).append('<input class="text-box single-line" data-val="true" data-val-date="The field _data must be a date." id="Accompagnatori_3__DatiAddizionaliAccompagnatore_2___data" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[2]._data" type="date" value="" />');
        }
    }
    if (tipodatoAddizionale == 3) {
        $('#divCompanionAdd_' + 3 + '_' + 2).append($('<select/>', {
            id: "ddlsAcc_3" + '_2',
            'data-index': 2,
            onchange: "ControloSelect(this)"
        }));
        $('#ddlsAcc_3' + '_2').append($('<option/>', {
            value: 0,
            text: " "
        }));
        $('#ifMultiple').append('<input data-val="true" data-val-number="The field _idSelezionato must be a number." data-val-required="The _idSelezionato field is required." id="hiddenSelezionatoAcc_3_2" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[2]._idSelezionato" type="hidden" value="0" />');
        getDropDownListsValues($('#hiddenIdDatoADDAcc_' + 2).val(), $('#ddlsAcc_3' + '_2'), 0);
    }

    $('#divCompanionAdd_' + 3 + '_' + 2).append('<input data-val="true" data-val-required="The _Obbligatorio field is required." id="Accompagnatori_3__DatiAddizionaliAccompagnatore_2___Obbligatorio" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[2]._Obbligatorio" type="hidden" value="True" />');

    $('#divCompanionAdd_' + 3 + '_' + 2).append('<div><p><span class="field-validation-valid" data-valmsg-for="addizionale_3_2" data-valmsg-replace="true" style="color:red"></span></p> <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_3_2" data-valmsg-replace="true" style="color:red"></span> </p></div>');

}

function getDropDownListsValues(_id, ddl, selectedValue) {
    $.getJSON("/Services/GetDdlValuesByID/", {
        id: _id
    }, function (data) {
        for (i = 0; i < data.length; i++) {
            ddl.append($('<option/>', {
                value: data[i].Value,
                text: data[i].Text
            }));
        }
        ddl.val(selectedValue);
    })
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

        } else {
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
    } else {
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
    } else {
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
    } else {
        validator = $('span[data-valmsg-for="addizionale_' + id1 + '"]');
    }
    if (select.selectedIndex != 0) {
        validator.hide();
    }

}