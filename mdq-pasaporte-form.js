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
    $('figure.main-nav__avatar').each(function (key, value) {
        name = $(this).find('figcaption').html();
    });
    console.log(name);

    $('#divRiepilogoPrenotazione > #divTitolo').text($("#typeofbookingddl option:selected").text());
    switch ($('#typeofbookingddl').val()) {
        case '1':
            $('#divRiepilogoPrenotazione > #divDettaglio').html("\n\n  Stai prenotando per   " + 1 +
                " Appuntamento");


            $('#divRiepilogoPrenotazione > #divAppuntamenti ul').empty();
            $('#divRiepilogoPrenotazione > #divAppuntamenti ul').append('\n<li>' + name + '</li>')

            break;
        case '2':
            var numapp = parseInt($('#ddlnumberofcompanions').val()) + 1;
            if (numapp == 1) {
                $('#divRiepilogoPrenotazione > #divDettaglio').html("\n\n Stai prenotando per  " + numapp +
                    " Appuntamento");

            } else {
                $('#divRiepilogoPrenotazione > #divDettaglio').html("\n\n Stai prenotando per  " + numapp +
                    " Appuntamenti");

            }

            $('#divRiepilogoPrenotazione > #divAppuntamenti ul').empty();
            $('#divRiepilogoPrenotazione > #divAppuntamenti ul').append('\n<li>' + name + '</li>');
            for (var i = 0; i < parseInt($('#ddlnumberofcompanions').val()); i++) {
                $('#divRiepilogoPrenotazione > #divAppuntamenti ul').append('\n<li>' + $('#Accompagnatori_' +
                    i + '__CognomeAccompagnatore').val() + ' ' + $('#Accompagnatori_' + i +
                    '__NomeAccompagnatore').val() + '</li>');
            }

            break;
            //Model.PrenotazioneSenzaRichiedente &&
        case '3':
            var numapp = $('#ddlnumberofcompanions').val();
            if (numapp == 1) {
                $('#divRiepilogoPrenotazione > #divDettaglio').html("\n\n Stai prenotando per  " + numapp +
                    " Appuntamento");

            } else {
                $('#divRiepilogoPrenotazione > #divDettaglio').html("\n\n Stai prenotando per  " + numapp +
                    " Appuntamenti");

            }

            $('#divRiepilogoPrenotazione > #divAppuntamenti ul').empty();

            for (var i = 0; i < parseInt($('#ddlnumberofcompanions').val()); i++) {
                $('#divRiepilogoPrenotazione > #divAppuntamenti ul').append('\n<li>' + $('#Accompagnatori_' +
                    i + '__CognomeAccompagnatore').val() + ' ' + $('#Accompagnatori_' + i +
                    '__NomeAccompagnatore').val() + '</li>')
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
            $('#datoaddizionale_' + 0).append(
                '<input id="DatiAddizionaliPrenotante_0___testo" maxlength="100" name="DatiAddizionaliPrenotante[0]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />'
            );
        } else if (RegEx == false && MaxLength != false) {
            $('#datoaddizionale_' + 0).append(
                '<input id="DatiAddizionaliPrenotante_0___testo" name="DatiAddizionaliPrenotante[0]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />'
            );
        } else if (RegEx != false && MaxLength == false) {
            $('#datoaddizionale_' + 0).append(
                '<input id="DatiAddizionaliPrenotante_0___testo" maxlength="100" name="DatiAddizionaliPrenotante[0]._testo" onchange="ControlloTesto(this)" type="text" value="" />'
            );
        } else if (RegEx != false && MaxLength != false) {
            $('#datoaddizionale_' + 0).append(
                '<input id="DatiAddizionaliPrenotante_0___testo" name="DatiAddizionaliPrenotante[0]._testo" onchange="ControlloTesto(this)" type="text" value="" />'
            );
        }
    }
    if (tipodatoAddizionale == 1) {
        if (RegEx != false && MaxLength != false) {
            $('#datoaddizionale_' + 0).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="DatiAddizionaliPrenotante_0___data" name="DatiAddizionaliPrenotante[0]._data" type="date" value="" />'
            );
        } else if (RegEx != false && MaxLength == false) {
            $('#datoaddizionale_' + 0).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="DatiAddizionaliPrenotante_0___data" name="DatiAddizionaliPrenotante[0]._data" type="date" value="" />'
            );
        } else if (RegEx == false && MaxLength != false) {
            $('#datoaddizionale_' + 0).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="DatiAddizionaliPrenotante_0___data" name="DatiAddizionaliPrenotante[0]._data" type="date" value="" />'
            );
        } else if (RegEx == false && MaxLength == false) {
            $('#datoaddizionale_' + 0).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="DatiAddizionaliPrenotante_0___data" name="DatiAddizionaliPrenotante[0]._data" type="date" value="" />'
            );
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
        $('#infoapplicant').append(
            '<input data-val="true" data-val-number="Il campo _idSelezionato deve essere un numero." data-val-required="The _idSelezionato field is required." id="hiddenSelezionato_0" name="DatiAddizionaliPrenotante[0]._idSelezionato" type="hidden" value="0" />'
        );
        getDropDownListsValues($('#hiddenIdDatoADD_' + 0).val(), $('#ddls_0'), 0);
    }

    $('#datoaddizionale_' + 0).append(
        '<input data-val="true" data-val-required="The _Obbligatorio field is required." id="DatiAddizionaliPrenotante_0___Obbligatorio" name="DatiAddizionaliPrenotante[0]._Obbligatorio" type="hidden" value="True" />'
    );
    $('#datoaddizionale_' + 0).append(
        '<div><p><span class="field-validation-valid" data-valmsg-for="addizionale_0" data-valmsg-replace="true" style="color:red"></span></p> <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_0" data-valmsg-replace="true" style="color:red"></span></p> </div >'
    );

    RegEx = true;
    MaxLength = false
    var tipodatoAddizionale = $('#hiddenCodDatoAdd_' + 1).val();
    if (tipodatoAddizionale == 2) {
        if (RegEx == false && MaxLength == false) {
            $('#datoaddizionale_' + 1).append(
                '<input id="DatiAddizionaliPrenotante_1___testo" maxlength="100" name="DatiAddizionaliPrenotante[1]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />'
            );
        } else if (RegEx == false && MaxLength != false) {
            $('#datoaddizionale_' + 1).append(
                '<input id="DatiAddizionaliPrenotante_1___testo" name="DatiAddizionaliPrenotante[1]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />'
            );
        } else if (RegEx != false && MaxLength == false) {
            $('#datoaddizionale_' + 1).append(
                '<input id="DatiAddizionaliPrenotante_1___testo" maxlength="100" name="DatiAddizionaliPrenotante[1]._testo" onchange="ControlloTesto(this)" type="text" value="" />'
            );
        } else if (RegEx != false && MaxLength != false) {
            $('#datoaddizionale_' + 1).append(
                '<input id="DatiAddizionaliPrenotante_1___testo" name="DatiAddizionaliPrenotante[1]._testo" onchange="ControlloTesto(this)" type="text" value="" />'
            );
        }
    }
    if (tipodatoAddizionale == 1) {
        if (RegEx != false && MaxLength != false) {
            $('#datoaddizionale_' + 1).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="DatiAddizionaliPrenotante_1___data" name="DatiAddizionaliPrenotante[1]._data" type="date" value="" />'
            );
        } else if (RegEx != false && MaxLength == false) {
            $('#datoaddizionale_' + 1).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="DatiAddizionaliPrenotante_1___data" name="DatiAddizionaliPrenotante[1]._data" type="date" value="" />'
            );
        } else if (RegEx == false && MaxLength != false) {
            $('#datoaddizionale_' + 1).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="DatiAddizionaliPrenotante_1___data" name="DatiAddizionaliPrenotante[1]._data" type="date" value="" />'
            );
        } else if (RegEx == false && MaxLength == false) {
            $('#datoaddizionale_' + 1).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="DatiAddizionaliPrenotante_1___data" name="DatiAddizionaliPrenotante[1]._data" type="date" value="" />'
            );
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
        $('#infoapplicant').append(
            '<input data-val="true" data-val-number="Il campo _idSelezionato deve essere un numero." data-val-required="The _idSelezionato field is required." id="hiddenSelezionato_1" name="DatiAddizionaliPrenotante[1]._idSelezionato" type="hidden" value="0" />'
        );
        getDropDownListsValues($('#hiddenIdDatoADD_' + 1).val(), $('#ddls_1'), 0);
    }

    $('#datoaddizionale_' + 1).append(
        '<input data-val="true" data-val-required="The _Obbligatorio field is required." id="DatiAddizionaliPrenotante_1___Obbligatorio" name="DatiAddizionaliPrenotante[1]._Obbligatorio" type="hidden" value="True" />'
    );
    $('#datoaddizionale_' + 1).append(
        '<div><p><span class="field-validation-valid" data-valmsg-for="addizionale_1" data-valmsg-replace="true" style="color:red"></span></p> <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_1" data-valmsg-replace="true" style="color:red"></span></p> </div >'
    );

    RegEx = true;
    MaxLength = false
    var tipodatoAddizionale = $('#hiddenCodDatoAdd_' + 2).val();
    if (tipodatoAddizionale == 2) {
        if (RegEx == false && MaxLength == false) {
            $('#datoaddizionale_' + 2).append(
                '<input id="DatiAddizionaliPrenotante_2___testo" maxlength="100" name="DatiAddizionaliPrenotante[2]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />'
            );
        } else if (RegEx == false && MaxLength != false) {
            $('#datoaddizionale_' + 2).append(
                '<input id="DatiAddizionaliPrenotante_2___testo" name="DatiAddizionaliPrenotante[2]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />'
            );
        } else if (RegEx != false && MaxLength == false) {
            $('#datoaddizionale_' + 2).append(
                '<input id="DatiAddizionaliPrenotante_2___testo" maxlength="100" name="DatiAddizionaliPrenotante[2]._testo" onchange="ControlloTesto(this)" type="text" value="" />'
            );
        } else if (RegEx != false && MaxLength != false) {
            $('#datoaddizionale_' + 2).append(
                '<input id="DatiAddizionaliPrenotante_2___testo" name="DatiAddizionaliPrenotante[2]._testo" onchange="ControlloTesto(this)" type="text" value="" />'
            );
        }
    }
    if (tipodatoAddizionale == 1) {
        if (RegEx != false && MaxLength != false) {
            $('#datoaddizionale_' + 2).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="DatiAddizionaliPrenotante_2___data" name="DatiAddizionaliPrenotante[2]._data" type="date" value="" />'
            );
        } else if (RegEx != false && MaxLength == false) {
            $('#datoaddizionale_' + 2).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="DatiAddizionaliPrenotante_2___data" name="DatiAddizionaliPrenotante[2]._data" type="date" value="" />'
            );
        } else if (RegEx == false && MaxLength != false) {
            $('#datoaddizionale_' + 2).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="DatiAddizionaliPrenotante_2___data" name="DatiAddizionaliPrenotante[2]._data" type="date" value="" />'
            );
        } else if (RegEx == false && MaxLength == false) {
            $('#datoaddizionale_' + 2).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="DatiAddizionaliPrenotante_2___data" name="DatiAddizionaliPrenotante[2]._data" type="date" value="" />'
            );
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
        $('#infoapplicant').append(
            '<input data-val="true" data-val-number="Il campo _idSelezionato deve essere un numero." data-val-required="The _idSelezionato field is required." id="hiddenSelezionato_2" name="DatiAddizionaliPrenotante[2]._idSelezionato" type="hidden" value="0" />'
        );
        getDropDownListsValues($('#hiddenIdDatoADD_' + 2).val(), $('#ddls_2'), 0);
    }

    $('#datoaddizionale_' + 2).append(
        '<input data-val="true" data-val-required="The _Obbligatorio field is required." id="DatiAddizionaliPrenotante_2___Obbligatorio" name="DatiAddizionaliPrenotante[2]._Obbligatorio" type="hidden" value="True" />'
    );
    $('#datoaddizionale_' + 2).append(
        '<div><p><span class="field-validation-valid" data-valmsg-for="addizionale_2" data-valmsg-replace="true" style="color:red"></span></p> <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_2" data-valmsg-replace="true" style="color:red"></span></p> </div >'
    );

    RegEx = true;
    MaxLength = false
    var tipodatoAddizionale = $('#hiddenCodDatoAdd_' + 3).val();
    if (tipodatoAddizionale == 2) {
        if (RegEx == false && MaxLength == false) {
            $('#datoaddizionale_' + 3).append(
                '<input id="DatiAddizionaliPrenotante_3___testo" maxlength="100" name="DatiAddizionaliPrenotante[3]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />'
            );
        } else if (RegEx == false && MaxLength != false) {
            $('#datoaddizionale_' + 3).append(
                '<input id="DatiAddizionaliPrenotante_3___testo" name="DatiAddizionaliPrenotante[3]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />'
            );
        } else if (RegEx != false && MaxLength == false) {
            $('#datoaddizionale_' + 3).append(
                '<input id="DatiAddizionaliPrenotante_3___testo" maxlength="100" name="DatiAddizionaliPrenotante[3]._testo" onchange="ControlloTesto(this)" type="text" value="" />'
            );
        } else if (RegEx != false && MaxLength != false) {
            $('#datoaddizionale_' + 3).append(
                '<input id="DatiAddizionaliPrenotante_3___testo" name="DatiAddizionaliPrenotante[3]._testo" onchange="ControlloTesto(this)" type="text" value="" />'
            );
        }
    }
    if (tipodatoAddizionale == 1) {
        if (RegEx != false && MaxLength != false) {
            $('#datoaddizionale_' + 3).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="DatiAddizionaliPrenotante_3___data" name="DatiAddizionaliPrenotante[3]._data" type="date" value="" />'
            );
        } else if (RegEx != false && MaxLength == false) {
            $('#datoaddizionale_' + 3).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="DatiAddizionaliPrenotante_3___data" name="DatiAddizionaliPrenotante[3]._data" type="date" value="" />'
            );
        } else if (RegEx == false && MaxLength != false) {
            $('#datoaddizionale_' + 3).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="DatiAddizionaliPrenotante_3___data" name="DatiAddizionaliPrenotante[3]._data" type="date" value="" />'
            );
        } else if (RegEx == false && MaxLength == false) {
            $('#datoaddizionale_' + 3).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="DatiAddizionaliPrenotante_3___data" name="DatiAddizionaliPrenotante[3]._data" type="date" value="" />'
            );
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
        $('#infoapplicant').append(
            '<input data-val="true" data-val-number="Il campo _idSelezionato deve essere un numero." data-val-required="The _idSelezionato field is required." id="hiddenSelezionato_3" name="DatiAddizionaliPrenotante[3]._idSelezionato" type="hidden" value="0" />'
        );
        getDropDownListsValues($('#hiddenIdDatoADD_' + 3).val(), $('#ddls_3'), 0);
    }

    $('#datoaddizionale_' + 3).append(
        '<input data-val="true" data-val-required="The _Obbligatorio field is required." id="DatiAddizionaliPrenotante_3___Obbligatorio" name="DatiAddizionaliPrenotante[3]._Obbligatorio" type="hidden" value="False" />'
    );
    $('#datoaddizionale_' + 3).append(
        '<div><p><span class="field-validation-valid" data-valmsg-for="addizionale_3" data-valmsg-replace="true" style="color:red"></span></p> <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_3" data-valmsg-replace="true" style="color:red"></span></p> </div >'
    );

    RegEx = true;
    MaxLength = false
    var tipodatoAddizionale = $('#hiddenCodDatoAdd_' + 4).val();
    if (tipodatoAddizionale == 2) {
        if (RegEx == false && MaxLength == false) {
            $('#datoaddizionale_' + 4).append(
                '<input id="DatiAddizionaliPrenotante_4___testo" maxlength="100" name="DatiAddizionaliPrenotante[4]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />'
            );
        } else if (RegEx == false && MaxLength != false) {
            $('#datoaddizionale_' + 4).append(
                '<input id="DatiAddizionaliPrenotante_4___testo" name="DatiAddizionaliPrenotante[4]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />'
            );
        } else if (RegEx != false && MaxLength == false) {
            $('#datoaddizionale_' + 4).append(
                '<input id="DatiAddizionaliPrenotante_4___testo" maxlength="100" name="DatiAddizionaliPrenotante[4]._testo" onchange="ControlloTesto(this)" type="text" value="" />'
            );
        } else if (RegEx != false && MaxLength != false) {
            $('#datoaddizionale_' + 4).append(
                '<input id="DatiAddizionaliPrenotante_4___testo" name="DatiAddizionaliPrenotante[4]._testo" onchange="ControlloTesto(this)" type="text" value="" />'
            );
        }
    }
    if (tipodatoAddizionale == 1) {
        if (RegEx != false && MaxLength != false) {
            $('#datoaddizionale_' + 4).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="DatiAddizionaliPrenotante_4___data" name="DatiAddizionaliPrenotante[4]._data" type="date" value="" />'
            );
        } else if (RegEx != false && MaxLength == false) {
            $('#datoaddizionale_' + 4).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="DatiAddizionaliPrenotante_4___data" name="DatiAddizionaliPrenotante[4]._data" type="date" value="" />'
            );
        } else if (RegEx == false && MaxLength != false) {
            $('#datoaddizionale_' + 4).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="DatiAddizionaliPrenotante_4___data" name="DatiAddizionaliPrenotante[4]._data" type="date" value="" />'
            );
        } else if (RegEx == false && MaxLength == false) {
            $('#datoaddizionale_' + 4).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="DatiAddizionaliPrenotante_4___data" name="DatiAddizionaliPrenotante[4]._data" type="date" value="" />'
            );
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
        $('#infoapplicant').append(
            '<input data-val="true" data-val-number="Il campo _idSelezionato deve essere un numero." data-val-required="The _idSelezionato field is required." id="hiddenSelezionato_4" name="DatiAddizionaliPrenotante[4]._idSelezionato" type="hidden" value="0" />'
        );
        getDropDownListsValues($('#hiddenIdDatoADD_' + 4).val(), $('#ddls_4'), 0);
    }

    $('#datoaddizionale_' + 4).append(
        '<input data-val="true" data-val-required="The _Obbligatorio field is required." id="DatiAddizionaliPrenotante_4___Obbligatorio" name="DatiAddizionaliPrenotante[4]._Obbligatorio" type="hidden" value="False" />'
    );
    $('#datoaddizionale_' + 4).append(
        '<div><p><span class="field-validation-valid" data-valmsg-for="addizionale_4" data-valmsg-replace="true" style="color:red"></span></p> <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_4" data-valmsg-replace="true" style="color:red"></span></p> </div >'
    );

    RegEx = true;
    MaxLength = false
    var tipodatoAddizionale = $('#hiddenCodDatoAdd_' + 5).val();
    if (tipodatoAddizionale == 2) {
        if (RegEx == false && MaxLength == false) {
            $('#datoaddizionale_' + 5).append(
                '<input id="DatiAddizionaliPrenotante_5___testo" maxlength="100" name="DatiAddizionaliPrenotante[5]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />'
            );
        } else if (RegEx == false && MaxLength != false) {
            $('#datoaddizionale_' + 5).append(
                '<input id="DatiAddizionaliPrenotante_5___testo" name="DatiAddizionaliPrenotante[5]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />'
            );
        } else if (RegEx != false && MaxLength == false) {
            $('#datoaddizionale_' + 5).append(
                '<input id="DatiAddizionaliPrenotante_5___testo" maxlength="100" name="DatiAddizionaliPrenotante[5]._testo" onchange="ControlloTesto(this)" type="text" value="" />'
            );
        } else if (RegEx != false && MaxLength != false) {
            $('#datoaddizionale_' + 5).append(
                '<input id="DatiAddizionaliPrenotante_5___testo" name="DatiAddizionaliPrenotante[5]._testo" onchange="ControlloTesto(this)" type="text" value="" />'
            );
        }
    }
    if (tipodatoAddizionale == 1) {
        if (RegEx != false && MaxLength != false) {
            $('#datoaddizionale_' + 5).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="DatiAddizionaliPrenotante_5___data" name="DatiAddizionaliPrenotante[5]._data" type="date" value="" />'
            );
        } else if (RegEx != false && MaxLength == false) {
            $('#datoaddizionale_' + 5).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="DatiAddizionaliPrenotante_5___data" name="DatiAddizionaliPrenotante[5]._data" type="date" value="" />'
            );
        } else if (RegEx == false && MaxLength != false) {
            $('#datoaddizionale_' + 5).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="DatiAddizionaliPrenotante_5___data" name="DatiAddizionaliPrenotante[5]._data" type="date" value="" />'
            );
        } else if (RegEx == false && MaxLength == false) {
            $('#datoaddizionale_' + 5).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="DatiAddizionaliPrenotante_5___data" name="DatiAddizionaliPrenotante[5]._data" type="date" value="" />'
            );
        }
    }
    if (tipodatoAddizionale == 3) {
        $('#datoaddizionale_' + 5).append($('<select/>', {
            id: "ddls_" + 5,
            'data-index': 5,
            onchange: "ControloSelect(this)"
        }));
        $('#ddls_' + 5).append($('<option/>', {
            value: 0,
            text: " "
        }));
        $('#infoapplicant').append(
            '<input data-val="true" data-val-number="Il campo _idSelezionato deve essere un numero." data-val-required="The _idSelezionato field is required." id="hiddenSelezionato_5" name="DatiAddizionaliPrenotante[5]._idSelezionato" type="hidden" value="0" />'
        );
        getDropDownListsValues($('#hiddenIdDatoADD_' + 5).val(), $('#ddls_5'), 0);
    }

    $('#datoaddizionale_' + 5).append(
        '<input data-val="true" data-val-required="The _Obbligatorio field is required." id="DatiAddizionaliPrenotante_5___Obbligatorio" name="DatiAddizionaliPrenotante[5]._Obbligatorio" type="hidden" value="False" />'
    );
    $('#datoaddizionale_' + 5).append(
        '<div><p><span class="field-validation-valid" data-valmsg-for="addizionale_5" data-valmsg-replace="true" style="color:red"></span></p> <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_5" data-valmsg-replace="true" style="color:red"></span></p> </div >'
    );

    RegEx = true;
    MaxLength = false
    var tipodatoAddizionale = $('#hiddenCodDatoAdd_' + 6).val();
    if (tipodatoAddizionale == 2) {
        if (RegEx == false && MaxLength == false) {
            $('#datoaddizionale_' + 6).append(
                '<input id="DatiAddizionaliPrenotante_6___testo" maxlength="100" name="DatiAddizionaliPrenotante[6]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />'
            );
        } else if (RegEx == false && MaxLength != false) {
            $('#datoaddizionale_' + 6).append(
                '<input id="DatiAddizionaliPrenotante_6___testo" name="DatiAddizionaliPrenotante[6]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />'
            );
        } else if (RegEx != false && MaxLength == false) {
            $('#datoaddizionale_' + 6).append(
                '<input id="DatiAddizionaliPrenotante_6___testo" maxlength="100" name="DatiAddizionaliPrenotante[6]._testo" onchange="ControlloTesto(this)" type="text" value="" />'
            );
        } else if (RegEx != false && MaxLength != false) {
            $('#datoaddizionale_' + 6).append(
                '<input id="DatiAddizionaliPrenotante_6___testo" name="DatiAddizionaliPrenotante[6]._testo" onchange="ControlloTesto(this)" type="text" value="" />'
            );
        }
    }
    if (tipodatoAddizionale == 1) {
        if (RegEx != false && MaxLength != false) {
            $('#datoaddizionale_' + 6).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="DatiAddizionaliPrenotante_6___data" name="DatiAddizionaliPrenotante[6]._data" type="date" value="" />'
            );
        } else if (RegEx != false && MaxLength == false) {
            $('#datoaddizionale_' + 6).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="DatiAddizionaliPrenotante_6___data" name="DatiAddizionaliPrenotante[6]._data" type="date" value="" />'
            );
        } else if (RegEx == false && MaxLength != false) {
            $('#datoaddizionale_' + 6).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="DatiAddizionaliPrenotante_6___data" name="DatiAddizionaliPrenotante[6]._data" type="date" value="" />'
            );
        } else if (RegEx == false && MaxLength == false) {
            $('#datoaddizionale_' + 6).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="DatiAddizionaliPrenotante_6___data" name="DatiAddizionaliPrenotante[6]._data" type="date" value="" />'
            );
        }
    }
    if (tipodatoAddizionale == 3) {
        $('#datoaddizionale_' + 6).append($('<select/>', {
            id: "ddls_" + 6,
            'data-index': 6,
            onchange: "ControloSelect(this)"
        }));
        $('#ddls_' + 6).append($('<option/>', {
            value: 0,
            text: " "
        }));
        $('#infoapplicant').append(
            '<input data-val="true" data-val-number="Il campo _idSelezionato deve essere un numero." data-val-required="The _idSelezionato field is required." id="hiddenSelezionato_6" name="DatiAddizionaliPrenotante[6]._idSelezionato" type="hidden" value="0" />'
        );
        getDropDownListsValues($('#hiddenIdDatoADD_' + 6).val(), $('#ddls_6'), 0);
    }

    $('#datoaddizionale_' + 6).append(
        '<input data-val="true" data-val-required="The _Obbligatorio field is required." id="DatiAddizionaliPrenotante_6___Obbligatorio" name="DatiAddizionaliPrenotante[6]._Obbligatorio" type="hidden" value="True" />'
    );
    $('#datoaddizionale_' + 6).append(
        '<div><p><span class="field-validation-valid" data-valmsg-for="addizionale_6" data-valmsg-replace="true" style="color:red"></span></p> <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_6" data-valmsg-replace="true" style="color:red"></span></p> </div >'
    );

    RegEx = true;
    MaxLength = false
    var tipodatoAddizionale = $('#hiddenCodDatoAdd_' + 7).val();
    if (tipodatoAddizionale == 2) {
        if (RegEx == false && MaxLength == false) {
            $('#datoaddizionale_' + 7).append(
                '<input id="DatiAddizionaliPrenotante_7___testo" maxlength="100" name="DatiAddizionaliPrenotante[7]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />'
            );
        } else if (RegEx == false && MaxLength != false) {
            $('#datoaddizionale_' + 7).append(
                '<input id="DatiAddizionaliPrenotante_7___testo" name="DatiAddizionaliPrenotante[7]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />'
            );
        } else if (RegEx != false && MaxLength == false) {
            $('#datoaddizionale_' + 7).append(
                '<input id="DatiAddizionaliPrenotante_7___testo" maxlength="100" name="DatiAddizionaliPrenotante[7]._testo" onchange="ControlloTesto(this)" type="text" value="" />'
            );
        } else if (RegEx != false && MaxLength != false) {
            $('#datoaddizionale_' + 7).append(
                '<input id="DatiAddizionaliPrenotante_7___testo" name="DatiAddizionaliPrenotante[7]._testo" onchange="ControlloTesto(this)" type="text" value="" />'
            );
        }
    }
    if (tipodatoAddizionale == 1) {
        if (RegEx != false && MaxLength != false) {
            $('#datoaddizionale_' + 7).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="DatiAddizionaliPrenotante_7___data" name="DatiAddizionaliPrenotante[7]._data" type="date" value="" />'
            );
        } else if (RegEx != false && MaxLength == false) {
            $('#datoaddizionale_' + 7).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="DatiAddizionaliPrenotante_7___data" name="DatiAddizionaliPrenotante[7]._data" type="date" value="" />'
            );
        } else if (RegEx == false && MaxLength != false) {
            $('#datoaddizionale_' + 7).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="DatiAddizionaliPrenotante_7___data" name="DatiAddizionaliPrenotante[7]._data" type="date" value="" />'
            );
        } else if (RegEx == false && MaxLength == false) {
            $('#datoaddizionale_' + 7).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="DatiAddizionaliPrenotante_7___data" name="DatiAddizionaliPrenotante[7]._data" type="date" value="" />'
            );
        }
    }
    if (tipodatoAddizionale == 3) {
        $('#datoaddizionale_' + 7).append($('<select/>', {
            id: "ddls_" + 7,
            'data-index': 7,
            onchange: "ControloSelect(this)"
        }));
        $('#ddls_' + 7).append($('<option/>', {
            value: 0,
            text: " "
        }));
        $('#infoapplicant').append(
            '<input data-val="true" data-val-number="Il campo _idSelezionato deve essere un numero." data-val-required="The _idSelezionato field is required." id="hiddenSelezionato_7" name="DatiAddizionaliPrenotante[7]._idSelezionato" type="hidden" value="0" />'
        );
        getDropDownListsValues($('#hiddenIdDatoADD_' + 7).val(), $('#ddls_7'), 0);
    }

    $('#datoaddizionale_' + 7).append(
        '<input data-val="true" data-val-required="The _Obbligatorio field is required." id="DatiAddizionaliPrenotante_7___Obbligatorio" name="DatiAddizionaliPrenotante[7]._Obbligatorio" type="hidden" value="False" />'
    );
    $('#datoaddizionale_' + 7).append(
        '<div><p><span class="field-validation-valid" data-valmsg-for="addizionale_7" data-valmsg-replace="true" style="color:red"></span></p> <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_7" data-valmsg-replace="true" style="color:red"></span></p> </div >'
    );

    RegEx = true;
    MaxLength = false
    var tipodatoAddizionale = $('#hiddenCodDatoAdd_' + 8).val();
    if (tipodatoAddizionale == 2) {
        if (RegEx == false && MaxLength == false) {
            $('#datoaddizionale_' + 8).append(
                '<input id="DatiAddizionaliPrenotante_8___testo" maxlength="100" name="DatiAddizionaliPrenotante[8]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />'
            );
        } else if (RegEx == false && MaxLength != false) {
            $('#datoaddizionale_' + 8).append(
                '<input id="DatiAddizionaliPrenotante_8___testo" name="DatiAddizionaliPrenotante[8]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />'
            );
        } else if (RegEx != false && MaxLength == false) {
            $('#datoaddizionale_' + 8).append(
                '<input id="DatiAddizionaliPrenotante_8___testo" maxlength="100" name="DatiAddizionaliPrenotante[8]._testo" onchange="ControlloTesto(this)" type="text" value="" />'
            );
        } else if (RegEx != false && MaxLength != false) {
            $('#datoaddizionale_' + 8).append(
                '<input id="DatiAddizionaliPrenotante_8___testo" name="DatiAddizionaliPrenotante[8]._testo" onchange="ControlloTesto(this)" type="text" value="" />'
            );
        }
    }
    if (tipodatoAddizionale == 1) {
        if (RegEx != false && MaxLength != false) {
            $('#datoaddizionale_' + 8).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="DatiAddizionaliPrenotante_8___data" name="DatiAddizionaliPrenotante[8]._data" type="date" value="" />'
            );
        } else if (RegEx != false && MaxLength == false) {
            $('#datoaddizionale_' + 8).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="DatiAddizionaliPrenotante_8___data" name="DatiAddizionaliPrenotante[8]._data" type="date" value="" />'
            );
        } else if (RegEx == false && MaxLength != false) {
            $('#datoaddizionale_' + 8).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="DatiAddizionaliPrenotante_8___data" name="DatiAddizionaliPrenotante[8]._data" type="date" value="" />'
            );
        } else if (RegEx == false && MaxLength == false) {
            $('#datoaddizionale_' + 8).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="DatiAddizionaliPrenotante_8___data" name="DatiAddizionaliPrenotante[8]._data" type="date" value="" />'
            );
        }
    }
    if (tipodatoAddizionale == 3) {
        $('#datoaddizionale_' + 8).append($('<select/>', {
            id: "ddls_" + 8,
            'data-index': 8,
            onchange: "ControloSelect(this)"
        }));
        $('#ddls_' + 8).append($('<option/>', {
            value: 0,
            text: " "
        }));
        $('#infoapplicant').append(
            '<input data-val="true" data-val-number="Il campo _idSelezionato deve essere un numero." data-val-required="The _idSelezionato field is required." id="hiddenSelezionato_8" name="DatiAddizionaliPrenotante[8]._idSelezionato" type="hidden" value="0" />'
        );
        getDropDownListsValues($('#hiddenIdDatoADD_' + 8).val(), $('#ddls_8'), 0);
    }

    $('#datoaddizionale_' + 8).append(
        '<input data-val="true" data-val-required="The _Obbligatorio field is required." id="DatiAddizionaliPrenotante_8___Obbligatorio" name="DatiAddizionaliPrenotante[8]._Obbligatorio" type="hidden" value="False" />'
    );
    $('#datoaddizionale_' + 8).append(
        '<div><p><span class="field-validation-valid" data-valmsg-for="addizionale_8" data-valmsg-replace="true" style="color:red"></span></p> <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_8" data-valmsg-replace="true" style="color:red"></span></p> </div >'
    );

    RegEx = true;
    MaxLength = false
    var tipodatoAddizionale = $('#hiddenCodDatoAdd_' + 9).val();
    if (tipodatoAddizionale == 2) {
        if (RegEx == false && MaxLength == false) {
            $('#datoaddizionale_' + 9).append(
                '<input id="DatiAddizionaliPrenotante_9___testo" maxlength="100" name="DatiAddizionaliPrenotante[9]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />'
            );
        } else if (RegEx == false && MaxLength != false) {
            $('#datoaddizionale_' + 9).append(
                '<input id="DatiAddizionaliPrenotante_9___testo" name="DatiAddizionaliPrenotante[9]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />'
            );
        } else if (RegEx != false && MaxLength == false) {
            $('#datoaddizionale_' + 9).append(
                '<input id="DatiAddizionaliPrenotante_9___testo" maxlength="100" name="DatiAddizionaliPrenotante[9]._testo" onchange="ControlloTesto(this)" type="text" value="" />'
            );
        } else if (RegEx != false && MaxLength != false) {
            $('#datoaddizionale_' + 9).append(
                '<input id="DatiAddizionaliPrenotante_9___testo" name="DatiAddizionaliPrenotante[9]._testo" onchange="ControlloTesto(this)" type="text" value="" />'
            );
        }
    }
    if (tipodatoAddizionale == 1) {
        if (RegEx != false && MaxLength != false) {
            $('#datoaddizionale_' + 9).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="DatiAddizionaliPrenotante_9___data" name="DatiAddizionaliPrenotante[9]._data" type="date" value="" />'
            );
        } else if (RegEx != false && MaxLength == false) {
            $('#datoaddizionale_' + 9).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="DatiAddizionaliPrenotante_9___data" name="DatiAddizionaliPrenotante[9]._data" type="date" value="" />'
            );
        } else if (RegEx == false && MaxLength != false) {
            $('#datoaddizionale_' + 9).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="DatiAddizionaliPrenotante_9___data" name="DatiAddizionaliPrenotante[9]._data" type="date" value="" />'
            );
        } else if (RegEx == false && MaxLength == false) {
            $('#datoaddizionale_' + 9).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="DatiAddizionaliPrenotante_9___data" name="DatiAddizionaliPrenotante[9]._data" type="date" value="" />'
            );
        }
    }
    if (tipodatoAddizionale == 3) {
        $('#datoaddizionale_' + 9).append($('<select/>', {
            id: "ddls_" + 9,
            'data-index': 9,
            onchange: "ControloSelect(this)"
        }));
        $('#ddls_' + 9).append($('<option/>', {
            value: 0,
            text: " "
        }));
        $('#infoapplicant').append(
            '<input data-val="true" data-val-number="Il campo _idSelezionato deve essere un numero." data-val-required="The _idSelezionato field is required." id="hiddenSelezionato_9" name="DatiAddizionaliPrenotante[9]._idSelezionato" type="hidden" value="0" />'
        );
        getDropDownListsValues($('#hiddenIdDatoADD_' + 9).val(), $('#ddls_9'), 0);
    }

    $('#datoaddizionale_' + 9).append(
        '<input data-val="true" data-val-required="The _Obbligatorio field is required." id="DatiAddizionaliPrenotante_9___Obbligatorio" name="DatiAddizionaliPrenotante[9]._Obbligatorio" type="hidden" value="False" />'
    );
    $('#datoaddizionale_' + 9).append(
        '<div><p><span class="field-validation-valid" data-valmsg-for="addizionale_9" data-valmsg-replace="true" style="color:red"></span></p> <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_9" data-valmsg-replace="true" style="color:red"></span></p> </div >'
    );

    RegEx = true;
    MaxLength = false
    var tipodatoAddizionale = $('#hiddenCodDatoAdd_' + 10).val();
    if (tipodatoAddizionale == 2) {
        if (RegEx == false && MaxLength == false) {
            $('#datoaddizionale_' + 10).append(
                '<input id="DatiAddizionaliPrenotante_10___testo" maxlength="100" name="DatiAddizionaliPrenotante[10]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />'
            );
        } else if (RegEx == false && MaxLength != false) {
            $('#datoaddizionale_' + 10).append(
                '<input id="DatiAddizionaliPrenotante_10___testo" name="DatiAddizionaliPrenotante[10]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />'
            );
        } else if (RegEx != false && MaxLength == false) {
            $('#datoaddizionale_' + 10).append(
                '<input id="DatiAddizionaliPrenotante_10___testo" maxlength="100" name="DatiAddizionaliPrenotante[10]._testo" onchange="ControlloTesto(this)" type="text" value="" />'
            );
        } else if (RegEx != false && MaxLength != false) {
            $('#datoaddizionale_' + 10).append(
                '<input id="DatiAddizionaliPrenotante_10___testo" name="DatiAddizionaliPrenotante[10]._testo" onchange="ControlloTesto(this)" type="text" value="" />'
            );
        }
    }
    if (tipodatoAddizionale == 1) {
        if (RegEx != false && MaxLength != false) {
            $('#datoaddizionale_' + 10).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="DatiAddizionaliPrenotante_10___data" name="DatiAddizionaliPrenotante[10]._data" type="date" value="" />'
            );
        } else if (RegEx != false && MaxLength == false) {
            $('#datoaddizionale_' + 10).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="DatiAddizionaliPrenotante_10___data" name="DatiAddizionaliPrenotante[10]._data" type="date" value="" />'
            );
        } else if (RegEx == false && MaxLength != false) {
            $('#datoaddizionale_' + 10).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="DatiAddizionaliPrenotante_10___data" name="DatiAddizionaliPrenotante[10]._data" type="date" value="" />'
            );
        } else if (RegEx == false && MaxLength == false) {
            $('#datoaddizionale_' + 10).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="DatiAddizionaliPrenotante_10___data" name="DatiAddizionaliPrenotante[10]._data" type="date" value="" />'
            );
        }
    }
    if (tipodatoAddizionale == 3) {
        $('#datoaddizionale_' + 10).append($('<select/>', {
            id: "ddls_" + 10,
            'data-index': 10,
            onchange: "ControloSelect(this)"
        }));
        $('#ddls_' + 10).append($('<option/>', {
            value: 0,
            text: " "
        }));
        $('#infoapplicant').append(
            '<input data-val="true" data-val-number="Il campo _idSelezionato deve essere un numero." data-val-required="The _idSelezionato field is required." id="hiddenSelezionato_10" name="DatiAddizionaliPrenotante[10]._idSelezionato" type="hidden" value="0" />'
        );
        getDropDownListsValues($('#hiddenIdDatoADD_' + 10).val(), $('#ddls_10'), 0);
    }

    $('#datoaddizionale_' + 10).append(
        '<input data-val="true" data-val-required="The _Obbligatorio field is required." id="DatiAddizionaliPrenotante_10___Obbligatorio" name="DatiAddizionaliPrenotante[10]._Obbligatorio" type="hidden" value="False" />'
    );
    $('#datoaddizionale_' + 10).append(
        '<div><p><span class="field-validation-valid" data-valmsg-for="addizionale_10" data-valmsg-replace="true" style="color:red"></span></p> <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_10" data-valmsg-replace="true" style="color:red"></span></p> </div >'
    );
}

function GetDatiAddizionaliAccompagnatori() {
    let RegEx;
    let MaxLength;

    var tipodatoAddizionale = $('#hiddenCodDatoAddAcc_' + 0).val();
    RegEx = true;
    MaxLength = false;
    if (tipodatoAddizionale == 2) {
        if (RegEx == false && MaxLength == false) {
            $('#divCompanionAdd_' + 0 + '_' + 0).append(
                '<input id="Accompagnatori_0__DatiAddizionaliAccompagnatore_0___testo" maxlength="100" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[0]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />'
            );
        } else if (RegEx == false && MaxLength != false) {
            $('#divCompanionAdd_' + 0 + '_' + 0).append(
                '<input id="Accompagnatori_0__DatiAddizionaliAccompagnatore_0___testo" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[0]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />'
            );
        } else if (RegEx != false && MaxLength == false) {
            $('#divCompanionAdd_' + 0 + '_' + 0).append(
                '<input id="Accompagnatori_0__DatiAddizionaliAccompagnatore_0___testo" maxlength="100" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[0]._testo" onchange="ControlloTesto(this)" type="text" value="" />'
            );
        } else if (RegEx != false && MaxLength != false) {
            $('#divCompanionAdd_' + 0 + '_' + 0).append(
                '<input id="Accompagnatori_0__DatiAddizionaliAccompagnatore_0___testo" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[0]._testo" onchange="ControlloTesto(this)" type="text" value="" />'
            );
        }
    }
    if (tipodatoAddizionale == 1) {
        if (RegEx != false && MaxLength != false) {
            $('#divCompanionAdd_' + 0 + '_' + 0).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="Accompagnatori_0__DatiAddizionaliAccompagnatore_0___data" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[0]._data" type="date" value="" />'
            );
        } else if (RegEx != false && MaxLength == false) {
            $('#divCompanionAdd_' + 0 + '_' + 0).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="Accompagnatori_0__DatiAddizionaliAccompagnatore_0___data" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[0]._data" type="date" value="" />'
            );
        } else if (RegEx == false && MaxLength != false) {
            $('#divCompanionAdd_' + 0 + '_' + 0).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="Accompagnatori_0__DatiAddizionaliAccompagnatore_0___data" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[0]._data" type="date" value="" />'
            );
        } else if (RegEx == false && MaxLength == false) {
            $('#divCompanionAdd_' + 0 + '_' + 0).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="Accompagnatori_0__DatiAddizionaliAccompagnatore_0___data" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[0]._data" type="date" value="" />'
            );
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
        $('#ifMultiple').append(
            '<input data-val="true" data-val-number="Il campo _idSelezionato deve essere un numero." data-val-required="The _idSelezionato field is required." id="hiddenSelezionatoAcc_0_0" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[0]._idSelezionato" type="hidden" value="0" />'
        );
        getDropDownListsValues($('#hiddenIdDatoADDAcc_' + 0).val(), $('#ddlsAcc_0' + '_0'), 0);
    }

    $('#divCompanionAdd_' + 0 + '_' + 0).append(
        '<input data-val="true" data-val-required="The _Obbligatorio field is required." id="Accompagnatori_0__DatiAddizionaliAccompagnatore_0___Obbligatorio" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[0]._Obbligatorio" type="hidden" value="True" />'
    );

    $('#divCompanionAdd_' + 0 + '_' + 0).append(
        '<div><p><span class="field-validation-valid" data-valmsg-for="addizionale_0_0" data-valmsg-replace="true" style="color:red"></span></p> <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_0_0" data-valmsg-replace="true" style="color:red"></span> </p></div>'
    );


    var tipodatoAddizionale = $('#hiddenCodDatoAddAcc_' + 1).val();
    RegEx = true;
    MaxLength = false;
    if (tipodatoAddizionale == 2) {
        if (RegEx == false && MaxLength == false) {
            $('#divCompanionAdd_' + 0 + '_' + 1).append(
                '<input id="Accompagnatori_0__DatiAddizionaliAccompagnatore_1___testo" maxlength="100" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[1]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />'
            );
        } else if (RegEx == false && MaxLength != false) {
            $('#divCompanionAdd_' + 0 + '_' + 1).append(
                '<input id="Accompagnatori_0__DatiAddizionaliAccompagnatore_1___testo" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[1]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />'
            );
        } else if (RegEx != false && MaxLength == false) {
            $('#divCompanionAdd_' + 0 + '_' + 1).append(
                '<input id="Accompagnatori_0__DatiAddizionaliAccompagnatore_1___testo" maxlength="100" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[1]._testo" onchange="ControlloTesto(this)" type="text" value="" />'
            );
        } else if (RegEx != false && MaxLength != false) {
            $('#divCompanionAdd_' + 0 + '_' + 1).append(
                '<input id="Accompagnatori_0__DatiAddizionaliAccompagnatore_1___testo" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[1]._testo" onchange="ControlloTesto(this)" type="text" value="" />'
            );
        }
    }
    if (tipodatoAddizionale == 1) {
        if (RegEx != false && MaxLength != false) {
            $('#divCompanionAdd_' + 0 + '_' + 1).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="Accompagnatori_0__DatiAddizionaliAccompagnatore_1___data" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[1]._data" type="date" value="" />'
            );
        } else if (RegEx != false && MaxLength == false) {
            $('#divCompanionAdd_' + 0 + '_' + 1).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="Accompagnatori_0__DatiAddizionaliAccompagnatore_1___data" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[1]._data" type="date" value="" />'
            );
        } else if (RegEx == false && MaxLength != false) {
            $('#divCompanionAdd_' + 0 + '_' + 1).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="Accompagnatori_0__DatiAddizionaliAccompagnatore_1___data" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[1]._data" type="date" value="" />'
            );
        } else if (RegEx == false && MaxLength == false) {
            $('#divCompanionAdd_' + 0 + '_' + 1).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="Accompagnatori_0__DatiAddizionaliAccompagnatore_1___data" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[1]._data" type="date" value="" />'
            );
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
        $('#ifMultiple').append(
            '<input data-val="true" data-val-number="Il campo _idSelezionato deve essere un numero." data-val-required="The _idSelezionato field is required." id="hiddenSelezionatoAcc_0_1" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[1]._idSelezionato" type="hidden" value="0" />'
        );
        getDropDownListsValues($('#hiddenIdDatoADDAcc_' + 1).val(), $('#ddlsAcc_0' + '_1'), 0);
    }

    $('#divCompanionAdd_' + 0 + '_' + 1).append(
        '<input data-val="true" data-val-required="The _Obbligatorio field is required." id="Accompagnatori_0__DatiAddizionaliAccompagnatore_1___Obbligatorio" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[1]._Obbligatorio" type="hidden" value="True" />'
    );

    $('#divCompanionAdd_' + 0 + '_' + 1).append(
        '<div><p><span class="field-validation-valid" data-valmsg-for="addizionale_0_1" data-valmsg-replace="true" style="color:red"></span></p> <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_0_1" data-valmsg-replace="true" style="color:red"></span> </p></div>'
    );


    var tipodatoAddizionale = $('#hiddenCodDatoAddAcc_' + 2).val();
    RegEx = true;
    MaxLength = false;
    if (tipodatoAddizionale == 2) {
        if (RegEx == false && MaxLength == false) {
            $('#divCompanionAdd_' + 0 + '_' + 2).append(
                '<input id="Accompagnatori_0__DatiAddizionaliAccompagnatore_2___testo" maxlength="100" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[2]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />'
            );
        } else if (RegEx == false && MaxLength != false) {
            $('#divCompanionAdd_' + 0 + '_' + 2).append(
                '<input id="Accompagnatori_0__DatiAddizionaliAccompagnatore_2___testo" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[2]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />'
            );
        } else if (RegEx != false && MaxLength == false) {
            $('#divCompanionAdd_' + 0 + '_' + 2).append(
                '<input id="Accompagnatori_0__DatiAddizionaliAccompagnatore_2___testo" maxlength="100" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[2]._testo" onchange="ControlloTesto(this)" type="text" value="" />'
            );
        } else if (RegEx != false && MaxLength != false) {
            $('#divCompanionAdd_' + 0 + '_' + 2).append(
                '<input id="Accompagnatori_0__DatiAddizionaliAccompagnatore_2___testo" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[2]._testo" onchange="ControlloTesto(this)" type="text" value="" />'
            );
        }
    }
    if (tipodatoAddizionale == 1) {
        if (RegEx != false && MaxLength != false) {
            $('#divCompanionAdd_' + 0 + '_' + 2).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="Accompagnatori_0__DatiAddizionaliAccompagnatore_2___data" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[2]._data" type="date" value="" />'
            );
        } else if (RegEx != false && MaxLength == false) {
            $('#divCompanionAdd_' + 0 + '_' + 2).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="Accompagnatori_0__DatiAddizionaliAccompagnatore_2___data" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[2]._data" type="date" value="" />'
            );
        } else if (RegEx == false && MaxLength != false) {
            $('#divCompanionAdd_' + 0 + '_' + 2).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="Accompagnatori_0__DatiAddizionaliAccompagnatore_2___data" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[2]._data" type="date" value="" />'
            );
        } else if (RegEx == false && MaxLength == false) {
            $('#divCompanionAdd_' + 0 + '_' + 2).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="Accompagnatori_0__DatiAddizionaliAccompagnatore_2___data" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[2]._data" type="date" value="" />'
            );
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
        $('#ifMultiple').append(
            '<input data-val="true" data-val-number="Il campo _idSelezionato deve essere un numero." data-val-required="The _idSelezionato field is required." id="hiddenSelezionatoAcc_0_2" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[2]._idSelezionato" type="hidden" value="0" />'
        );
        getDropDownListsValues($('#hiddenIdDatoADDAcc_' + 2).val(), $('#ddlsAcc_0' + '_2'), 0);
    }

    $('#divCompanionAdd_' + 0 + '_' + 2).append(
        '<input data-val="true" data-val-required="The _Obbligatorio field is required." id="Accompagnatori_0__DatiAddizionaliAccompagnatore_2___Obbligatorio" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[2]._Obbligatorio" type="hidden" value="True" />'
    );

    $('#divCompanionAdd_' + 0 + '_' + 2).append(
        '<div><p><span class="field-validation-valid" data-valmsg-for="addizionale_0_2" data-valmsg-replace="true" style="color:red"></span></p> <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_0_2" data-valmsg-replace="true" style="color:red"></span> </p></div>'
    );


    var tipodatoAddizionale = $('#hiddenCodDatoAddAcc_' + 3).val();
    RegEx = true;
    MaxLength = false;
    if (tipodatoAddizionale == 2) {
        if (RegEx == false && MaxLength == false) {
            $('#divCompanionAdd_' + 0 + '_' + 3).append(
                '<input id="Accompagnatori_0__DatiAddizionaliAccompagnatore_3___testo" maxlength="100" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[3]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />'
            );
        } else if (RegEx == false && MaxLength != false) {
            $('#divCompanionAdd_' + 0 + '_' + 3).append(
                '<input id="Accompagnatori_0__DatiAddizionaliAccompagnatore_3___testo" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[3]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />'
            );
        } else if (RegEx != false && MaxLength == false) {
            $('#divCompanionAdd_' + 0 + '_' + 3).append(
                '<input id="Accompagnatori_0__DatiAddizionaliAccompagnatore_3___testo" maxlength="100" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[3]._testo" onchange="ControlloTesto(this)" type="text" value="" />'
            );
        } else if (RegEx != false && MaxLength != false) {
            $('#divCompanionAdd_' + 0 + '_' + 3).append(
                '<input id="Accompagnatori_0__DatiAddizionaliAccompagnatore_3___testo" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[3]._testo" onchange="ControlloTesto(this)" type="text" value="" />'
            );
        }
    }
    if (tipodatoAddizionale == 1) {
        if (RegEx != false && MaxLength != false) {
            $('#divCompanionAdd_' + 0 + '_' + 3).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="Accompagnatori_0__DatiAddizionaliAccompagnatore_3___data" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[3]._data" type="date" value="" />'
            );
        } else if (RegEx != false && MaxLength == false) {
            $('#divCompanionAdd_' + 0 + '_' + 3).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="Accompagnatori_0__DatiAddizionaliAccompagnatore_3___data" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[3]._data" type="date" value="" />'
            );
        } else if (RegEx == false && MaxLength != false) {
            $('#divCompanionAdd_' + 0 + '_' + 3).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="Accompagnatori_0__DatiAddizionaliAccompagnatore_3___data" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[3]._data" type="date" value="" />'
            );
        } else if (RegEx == false && MaxLength == false) {
            $('#divCompanionAdd_' + 0 + '_' + 3).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="Accompagnatori_0__DatiAddizionaliAccompagnatore_3___data" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[3]._data" type="date" value="" />'
            );
        }
    }
    if (tipodatoAddizionale == 3) {
        $('#divCompanionAdd_' + 0 + '_' + 3).append($('<select/>', {
            id: "ddlsAcc_0" + '_3',
            'data-index': 3,
            onchange: "ControloSelect(this)"
        }));
        $('#ddlsAcc_0' + '_3').append($('<option/>', {
            value: 0,
            text: " "
        }));
        $('#ifMultiple').append(
            '<input data-val="true" data-val-number="Il campo _idSelezionato deve essere un numero." data-val-required="The _idSelezionato field is required." id="hiddenSelezionatoAcc_0_3" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[3]._idSelezionato" type="hidden" value="0" />'
        );
        getDropDownListsValues($('#hiddenIdDatoADDAcc_' + 3).val(), $('#ddlsAcc_0' + '_3'), 0);
    }

    $('#divCompanionAdd_' + 0 + '_' + 3).append(
        '<input data-val="true" data-val-required="The _Obbligatorio field is required." id="Accompagnatori_0__DatiAddizionaliAccompagnatore_3___Obbligatorio" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[3]._Obbligatorio" type="hidden" value="False" />'
    );

    $('#divCompanionAdd_' + 0 + '_' + 3).append(
        '<div><p><span class="field-validation-valid" data-valmsg-for="addizionale_0_3" data-valmsg-replace="true" style="color:red"></span></p> <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_0_3" data-valmsg-replace="true" style="color:red"></span> </p></div>'
    );


    var tipodatoAddizionale = $('#hiddenCodDatoAddAcc_' + 4).val();
    RegEx = true;
    MaxLength = false;
    if (tipodatoAddizionale == 2) {
        if (RegEx == false && MaxLength == false) {
            $('#divCompanionAdd_' + 0 + '_' + 4).append(
                '<input id="Accompagnatori_0__DatiAddizionaliAccompagnatore_4___testo" maxlength="100" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[4]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />'
            );
        } else if (RegEx == false && MaxLength != false) {
            $('#divCompanionAdd_' + 0 + '_' + 4).append(
                '<input id="Accompagnatori_0__DatiAddizionaliAccompagnatore_4___testo" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[4]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />'
            );
        } else if (RegEx != false && MaxLength == false) {
            $('#divCompanionAdd_' + 0 + '_' + 4).append(
                '<input id="Accompagnatori_0__DatiAddizionaliAccompagnatore_4___testo" maxlength="100" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[4]._testo" onchange="ControlloTesto(this)" type="text" value="" />'
            );
        } else if (RegEx != false && MaxLength != false) {
            $('#divCompanionAdd_' + 0 + '_' + 4).append(
                '<input id="Accompagnatori_0__DatiAddizionaliAccompagnatore_4___testo" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[4]._testo" onchange="ControlloTesto(this)" type="text" value="" />'
            );
        }
    }
    if (tipodatoAddizionale == 1) {
        if (RegEx != false && MaxLength != false) {
            $('#divCompanionAdd_' + 0 + '_' + 4).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="Accompagnatori_0__DatiAddizionaliAccompagnatore_4___data" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[4]._data" type="date" value="" />'
            );
        } else if (RegEx != false && MaxLength == false) {
            $('#divCompanionAdd_' + 0 + '_' + 4).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="Accompagnatori_0__DatiAddizionaliAccompagnatore_4___data" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[4]._data" type="date" value="" />'
            );
        } else if (RegEx == false && MaxLength != false) {
            $('#divCompanionAdd_' + 0 + '_' + 4).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="Accompagnatori_0__DatiAddizionaliAccompagnatore_4___data" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[4]._data" type="date" value="" />'
            );
        } else if (RegEx == false && MaxLength == false) {
            $('#divCompanionAdd_' + 0 + '_' + 4).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="Accompagnatori_0__DatiAddizionaliAccompagnatore_4___data" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[4]._data" type="date" value="" />'
            );
        }
    }
    if (tipodatoAddizionale == 3) {
        $('#divCompanionAdd_' + 0 + '_' + 4).append($('<select/>', {
            id: "ddlsAcc_0" + '_4',
            'data-index': 4,
            onchange: "ControloSelect(this)"
        }));
        $('#ddlsAcc_0' + '_4').append($('<option/>', {
            value: 0,
            text: " "
        }));
        $('#ifMultiple').append(
            '<input data-val="true" data-val-number="Il campo _idSelezionato deve essere un numero." data-val-required="The _idSelezionato field is required." id="hiddenSelezionatoAcc_0_4" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[4]._idSelezionato" type="hidden" value="0" />'
        );
        getDropDownListsValues($('#hiddenIdDatoADDAcc_' + 4).val(), $('#ddlsAcc_0' + '_4'), 0);
    }

    $('#divCompanionAdd_' + 0 + '_' + 4).append(
        '<input data-val="true" data-val-required="The _Obbligatorio field is required." id="Accompagnatori_0__DatiAddizionaliAccompagnatore_4___Obbligatorio" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[4]._Obbligatorio" type="hidden" value="False" />'
    );

    $('#divCompanionAdd_' + 0 + '_' + 4).append(
        '<div><p><span class="field-validation-valid" data-valmsg-for="addizionale_0_4" data-valmsg-replace="true" style="color:red"></span></p> <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_0_4" data-valmsg-replace="true" style="color:red"></span> </p></div>'
    );


    var tipodatoAddizionale = $('#hiddenCodDatoAddAcc_' + 5).val();
    RegEx = true;
    MaxLength = false;
    if (tipodatoAddizionale == 2) {
        if (RegEx == false && MaxLength == false) {
            $('#divCompanionAdd_' + 0 + '_' + 5).append(
                '<input id="Accompagnatori_0__DatiAddizionaliAccompagnatore_5___testo" maxlength="100" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[5]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />'
            );
        } else if (RegEx == false && MaxLength != false) {
            $('#divCompanionAdd_' + 0 + '_' + 5).append(
                '<input id="Accompagnatori_0__DatiAddizionaliAccompagnatore_5___testo" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[5]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />'
            );
        } else if (RegEx != false && MaxLength == false) {
            $('#divCompanionAdd_' + 0 + '_' + 5).append(
                '<input id="Accompagnatori_0__DatiAddizionaliAccompagnatore_5___testo" maxlength="100" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[5]._testo" onchange="ControlloTesto(this)" type="text" value="" />'
            );
        } else if (RegEx != false && MaxLength != false) {
            $('#divCompanionAdd_' + 0 + '_' + 5).append(
                '<input id="Accompagnatori_0__DatiAddizionaliAccompagnatore_5___testo" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[5]._testo" onchange="ControlloTesto(this)" type="text" value="" />'
            );
        }
    }
    if (tipodatoAddizionale == 1) {
        if (RegEx != false && MaxLength != false) {
            $('#divCompanionAdd_' + 0 + '_' + 5).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="Accompagnatori_0__DatiAddizionaliAccompagnatore_5___data" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[5]._data" type="date" value="" />'
            );
        } else if (RegEx != false && MaxLength == false) {
            $('#divCompanionAdd_' + 0 + '_' + 5).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="Accompagnatori_0__DatiAddizionaliAccompagnatore_5___data" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[5]._data" type="date" value="" />'
            );
        } else if (RegEx == false && MaxLength != false) {
            $('#divCompanionAdd_' + 0 + '_' + 5).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="Accompagnatori_0__DatiAddizionaliAccompagnatore_5___data" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[5]._data" type="date" value="" />'
            );
        } else if (RegEx == false && MaxLength == false) {
            $('#divCompanionAdd_' + 0 + '_' + 5).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="Accompagnatori_0__DatiAddizionaliAccompagnatore_5___data" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[5]._data" type="date" value="" />'
            );
        }
    }
    if (tipodatoAddizionale == 3) {
        $('#divCompanionAdd_' + 0 + '_' + 5).append($('<select/>', {
            id: "ddlsAcc_0" + '_5',
            'data-index': 5,
            onchange: "ControloSelect(this)"
        }));
        $('#ddlsAcc_0' + '_5').append($('<option/>', {
            value: 0,
            text: " "
        }));
        $('#ifMultiple').append(
            '<input data-val="true" data-val-number="Il campo _idSelezionato deve essere un numero." data-val-required="The _idSelezionato field is required." id="hiddenSelezionatoAcc_0_5" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[5]._idSelezionato" type="hidden" value="0" />'
        );
        getDropDownListsValues($('#hiddenIdDatoADDAcc_' + 5).val(), $('#ddlsAcc_0' + '_5'), 0);
    }

    $('#divCompanionAdd_' + 0 + '_' + 5).append(
        '<input data-val="true" data-val-required="The _Obbligatorio field is required." id="Accompagnatori_0__DatiAddizionaliAccompagnatore_5___Obbligatorio" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[5]._Obbligatorio" type="hidden" value="False" />'
    );

    $('#divCompanionAdd_' + 0 + '_' + 5).append(
        '<div><p><span class="field-validation-valid" data-valmsg-for="addizionale_0_5" data-valmsg-replace="true" style="color:red"></span></p> <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_0_5" data-valmsg-replace="true" style="color:red"></span> </p></div>'
    );


    var tipodatoAddizionale = $('#hiddenCodDatoAddAcc_' + 6).val();
    RegEx = true;
    MaxLength = false;
    if (tipodatoAddizionale == 2) {
        if (RegEx == false && MaxLength == false) {
            $('#divCompanionAdd_' + 0 + '_' + 6).append(
                '<input id="Accompagnatori_0__DatiAddizionaliAccompagnatore_6___testo" maxlength="100" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[6]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />'
            );
        } else if (RegEx == false && MaxLength != false) {
            $('#divCompanionAdd_' + 0 + '_' + 6).append(
                '<input id="Accompagnatori_0__DatiAddizionaliAccompagnatore_6___testo" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[6]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />'
            );
        } else if (RegEx != false && MaxLength == false) {
            $('#divCompanionAdd_' + 0 + '_' + 6).append(
                '<input id="Accompagnatori_0__DatiAddizionaliAccompagnatore_6___testo" maxlength="100" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[6]._testo" onchange="ControlloTesto(this)" type="text" value="" />'
            );
        } else if (RegEx != false && MaxLength != false) {
            $('#divCompanionAdd_' + 0 + '_' + 6).append(
                '<input id="Accompagnatori_0__DatiAddizionaliAccompagnatore_6___testo" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[6]._testo" onchange="ControlloTesto(this)" type="text" value="" />'
            );
        }
    }
    if (tipodatoAddizionale == 1) {
        if (RegEx != false && MaxLength != false) {
            $('#divCompanionAdd_' + 0 + '_' + 6).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="Accompagnatori_0__DatiAddizionaliAccompagnatore_6___data" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[6]._data" type="date" value="" />'
            );
        } else if (RegEx != false && MaxLength == false) {
            $('#divCompanionAdd_' + 0 + '_' + 6).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="Accompagnatori_0__DatiAddizionaliAccompagnatore_6___data" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[6]._data" type="date" value="" />'
            );
        } else if (RegEx == false && MaxLength != false) {
            $('#divCompanionAdd_' + 0 + '_' + 6).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="Accompagnatori_0__DatiAddizionaliAccompagnatore_6___data" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[6]._data" type="date" value="" />'
            );
        } else if (RegEx == false && MaxLength == false) {
            $('#divCompanionAdd_' + 0 + '_' + 6).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="Accompagnatori_0__DatiAddizionaliAccompagnatore_6___data" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[6]._data" type="date" value="" />'
            );
        }
    }
    if (tipodatoAddizionale == 3) {
        $('#divCompanionAdd_' + 0 + '_' + 6).append($('<select/>', {
            id: "ddlsAcc_0" + '_6',
            'data-index': 6,
            onchange: "ControloSelect(this)"
        }));
        $('#ddlsAcc_0' + '_6').append($('<option/>', {
            value: 0,
            text: " "
        }));
        $('#ifMultiple').append(
            '<input data-val="true" data-val-number="Il campo _idSelezionato deve essere un numero." data-val-required="The _idSelezionato field is required." id="hiddenSelezionatoAcc_0_6" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[6]._idSelezionato" type="hidden" value="0" />'
        );
        getDropDownListsValues($('#hiddenIdDatoADDAcc_' + 6).val(), $('#ddlsAcc_0' + '_6'), 0);
    }

    $('#divCompanionAdd_' + 0 + '_' + 6).append(
        '<input data-val="true" data-val-required="The _Obbligatorio field is required." id="Accompagnatori_0__DatiAddizionaliAccompagnatore_6___Obbligatorio" name="Accompagnatori[0].DatiAddizionaliAccompagnatore[6]._Obbligatorio" type="hidden" value="True" />'
    );

    $('#divCompanionAdd_' + 0 + '_' + 6).append(
        '<div><p><span class="field-validation-valid" data-valmsg-for="addizionale_0_6" data-valmsg-replace="true" style="color:red"></span></p> <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_0_6" data-valmsg-replace="true" style="color:red"></span> </p></div>'
    );


    var tipodatoAddizionale = $('#hiddenCodDatoAddAcc_' + 0).val();
    RegEx = true;
    MaxLength = false;
    if (tipodatoAddizionale == 2) {
        if (RegEx == false && MaxLength == false) {
            $('#divCompanionAdd_' + 1 + '_' + 0).append(
                '<input id="Accompagnatori_1__DatiAddizionaliAccompagnatore_0___testo" maxlength="100" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[0]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />'
            );
        } else if (RegEx == false && MaxLength != false) {
            $('#divCompanionAdd_' + 1 + '_' + 0).append(
                '<input id="Accompagnatori_1__DatiAddizionaliAccompagnatore_0___testo" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[0]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />'
            );
        } else if (RegEx != false && MaxLength == false) {
            $('#divCompanionAdd_' + 1 + '_' + 0).append(
                '<input id="Accompagnatori_1__DatiAddizionaliAccompagnatore_0___testo" maxlength="100" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[0]._testo" onchange="ControlloTesto(this)" type="text" value="" />'
            );
        } else if (RegEx != false && MaxLength != false) {
            $('#divCompanionAdd_' + 1 + '_' + 0).append(
                '<input id="Accompagnatori_1__DatiAddizionaliAccompagnatore_0___testo" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[0]._testo" onchange="ControlloTesto(this)" type="text" value="" />'
            );
        }
    }
    if (tipodatoAddizionale == 1) {
        if (RegEx != false && MaxLength != false) {
            $('#divCompanionAdd_' + 1 + '_' + 0).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="Accompagnatori_1__DatiAddizionaliAccompagnatore_0___data" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[0]._data" type="date" value="" />'
            );
        } else if (RegEx != false && MaxLength == false) {
            $('#divCompanionAdd_' + 1 + '_' + 0).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="Accompagnatori_1__DatiAddizionaliAccompagnatore_0___data" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[0]._data" type="date" value="" />'
            );
        } else if (RegEx == false && MaxLength != false) {
            $('#divCompanionAdd_' + 1 + '_' + 0).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="Accompagnatori_1__DatiAddizionaliAccompagnatore_0___data" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[0]._data" type="date" value="" />'
            );
        } else if (RegEx == false && MaxLength == false) {
            $('#divCompanionAdd_' + 1 + '_' + 0).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="Accompagnatori_1__DatiAddizionaliAccompagnatore_0___data" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[0]._data" type="date" value="" />'
            );
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
        $('#ifMultiple').append(
            '<input data-val="true" data-val-number="Il campo _idSelezionato deve essere un numero." data-val-required="The _idSelezionato field is required." id="hiddenSelezionatoAcc_1_0" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[0]._idSelezionato" type="hidden" value="0" />'
        );
        getDropDownListsValues($('#hiddenIdDatoADDAcc_' + 0).val(), $('#ddlsAcc_1' + '_0'), 0);
    }

    $('#divCompanionAdd_' + 1 + '_' + 0).append(
        '<input data-val="true" data-val-required="The _Obbligatorio field is required." id="Accompagnatori_1__DatiAddizionaliAccompagnatore_0___Obbligatorio" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[0]._Obbligatorio" type="hidden" value="True" />'
    );

    $('#divCompanionAdd_' + 1 + '_' + 0).append(
        '<div><p><span class="field-validation-valid" data-valmsg-for="addizionale_1_0" data-valmsg-replace="true" style="color:red"></span></p> <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_1_0" data-valmsg-replace="true" style="color:red"></span> </p></div>'
    );


    var tipodatoAddizionale = $('#hiddenCodDatoAddAcc_' + 1).val();
    RegEx = true;
    MaxLength = false;
    if (tipodatoAddizionale == 2) {
        if (RegEx == false && MaxLength == false) {
            $('#divCompanionAdd_' + 1 + '_' + 1).append(
                '<input id="Accompagnatori_1__DatiAddizionaliAccompagnatore_1___testo" maxlength="100" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[1]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />'
            );
        } else if (RegEx == false && MaxLength != false) {
            $('#divCompanionAdd_' + 1 + '_' + 1).append(
                '<input id="Accompagnatori_1__DatiAddizionaliAccompagnatore_1___testo" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[1]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />'
            );
        } else if (RegEx != false && MaxLength == false) {
            $('#divCompanionAdd_' + 1 + '_' + 1).append(
                '<input id="Accompagnatori_1__DatiAddizionaliAccompagnatore_1___testo" maxlength="100" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[1]._testo" onchange="ControlloTesto(this)" type="text" value="" />'
            );
        } else if (RegEx != false && MaxLength != false) {
            $('#divCompanionAdd_' + 1 + '_' + 1).append(
                '<input id="Accompagnatori_1__DatiAddizionaliAccompagnatore_1___testo" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[1]._testo" onchange="ControlloTesto(this)" type="text" value="" />'
            );
        }
    }
    if (tipodatoAddizionale == 1) {
        if (RegEx != false && MaxLength != false) {
            $('#divCompanionAdd_' + 1 + '_' + 1).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="Accompagnatori_1__DatiAddizionaliAccompagnatore_1___data" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[1]._data" type="date" value="" />'
            );
        } else if (RegEx != false && MaxLength == false) {
            $('#divCompanionAdd_' + 1 + '_' + 1).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="Accompagnatori_1__DatiAddizionaliAccompagnatore_1___data" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[1]._data" type="date" value="" />'
            );
        } else if (RegEx == false && MaxLength != false) {
            $('#divCompanionAdd_' + 1 + '_' + 1).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="Accompagnatori_1__DatiAddizionaliAccompagnatore_1___data" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[1]._data" type="date" value="" />'
            );
        } else if (RegEx == false && MaxLength == false) {
            $('#divCompanionAdd_' + 1 + '_' + 1).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="Accompagnatori_1__DatiAddizionaliAccompagnatore_1___data" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[1]._data" type="date" value="" />'
            );
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
        $('#ifMultiple').append(
            '<input data-val="true" data-val-number="Il campo _idSelezionato deve essere un numero." data-val-required="The _idSelezionato field is required." id="hiddenSelezionatoAcc_1_1" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[1]._idSelezionato" type="hidden" value="0" />'
        );
        getDropDownListsValues($('#hiddenIdDatoADDAcc_' + 1).val(), $('#ddlsAcc_1' + '_1'), 0);
    }

    $('#divCompanionAdd_' + 1 + '_' + 1).append(
        '<input data-val="true" data-val-required="The _Obbligatorio field is required." id="Accompagnatori_1__DatiAddizionaliAccompagnatore_1___Obbligatorio" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[1]._Obbligatorio" type="hidden" value="True" />'
    );

    $('#divCompanionAdd_' + 1 + '_' + 1).append(
        '<div><p><span class="field-validation-valid" data-valmsg-for="addizionale_1_1" data-valmsg-replace="true" style="color:red"></span></p> <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_1_1" data-valmsg-replace="true" style="color:red"></span> </p></div>'
    );


    var tipodatoAddizionale = $('#hiddenCodDatoAddAcc_' + 2).val();
    RegEx = true;
    MaxLength = false;
    if (tipodatoAddizionale == 2) {
        if (RegEx == false && MaxLength == false) {
            $('#divCompanionAdd_' + 1 + '_' + 2).append(
                '<input id="Accompagnatori_1__DatiAddizionaliAccompagnatore_2___testo" maxlength="100" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[2]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />'
            );
        } else if (RegEx == false && MaxLength != false) {
            $('#divCompanionAdd_' + 1 + '_' + 2).append(
                '<input id="Accompagnatori_1__DatiAddizionaliAccompagnatore_2___testo" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[2]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />'
            );
        } else if (RegEx != false && MaxLength == false) {
            $('#divCompanionAdd_' + 1 + '_' + 2).append(
                '<input id="Accompagnatori_1__DatiAddizionaliAccompagnatore_2___testo" maxlength="100" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[2]._testo" onchange="ControlloTesto(this)" type="text" value="" />'
            );
        } else if (RegEx != false && MaxLength != false) {
            $('#divCompanionAdd_' + 1 + '_' + 2).append(
                '<input id="Accompagnatori_1__DatiAddizionaliAccompagnatore_2___testo" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[2]._testo" onchange="ControlloTesto(this)" type="text" value="" />'
            );
        }
    }
    if (tipodatoAddizionale == 1) {
        if (RegEx != false && MaxLength != false) {
            $('#divCompanionAdd_' + 1 + '_' + 2).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="Accompagnatori_1__DatiAddizionaliAccompagnatore_2___data" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[2]._data" type="date" value="" />'
            );
        } else if (RegEx != false && MaxLength == false) {
            $('#divCompanionAdd_' + 1 + '_' + 2).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="Accompagnatori_1__DatiAddizionaliAccompagnatore_2___data" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[2]._data" type="date" value="" />'
            );
        } else if (RegEx == false && MaxLength != false) {
            $('#divCompanionAdd_' + 1 + '_' + 2).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="Accompagnatori_1__DatiAddizionaliAccompagnatore_2___data" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[2]._data" type="date" value="" />'
            );
        } else if (RegEx == false && MaxLength == false) {
            $('#divCompanionAdd_' + 1 + '_' + 2).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="Accompagnatori_1__DatiAddizionaliAccompagnatore_2___data" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[2]._data" type="date" value="" />'
            );
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
        $('#ifMultiple').append(
            '<input data-val="true" data-val-number="Il campo _idSelezionato deve essere un numero." data-val-required="The _idSelezionato field is required." id="hiddenSelezionatoAcc_1_2" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[2]._idSelezionato" type="hidden" value="0" />'
        );
        getDropDownListsValues($('#hiddenIdDatoADDAcc_' + 2).val(), $('#ddlsAcc_1' + '_2'), 0);
    }

    $('#divCompanionAdd_' + 1 + '_' + 2).append(
        '<input data-val="true" data-val-required="The _Obbligatorio field is required." id="Accompagnatori_1__DatiAddizionaliAccompagnatore_2___Obbligatorio" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[2]._Obbligatorio" type="hidden" value="True" />'
    );

    $('#divCompanionAdd_' + 1 + '_' + 2).append(
        '<div><p><span class="field-validation-valid" data-valmsg-for="addizionale_1_2" data-valmsg-replace="true" style="color:red"></span></p> <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_1_2" data-valmsg-replace="true" style="color:red"></span> </p></div>'
    );


    var tipodatoAddizionale = $('#hiddenCodDatoAddAcc_' + 3).val();
    RegEx = true;
    MaxLength = false;
    if (tipodatoAddizionale == 2) {
        if (RegEx == false && MaxLength == false) {
            $('#divCompanionAdd_' + 1 + '_' + 3).append(
                '<input id="Accompagnatori_1__DatiAddizionaliAccompagnatore_3___testo" maxlength="100" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[3]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />'
            );
        } else if (RegEx == false && MaxLength != false) {
            $('#divCompanionAdd_' + 1 + '_' + 3).append(
                '<input id="Accompagnatori_1__DatiAddizionaliAccompagnatore_3___testo" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[3]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />'
            );
        } else if (RegEx != false && MaxLength == false) {
            $('#divCompanionAdd_' + 1 + '_' + 3).append(
                '<input id="Accompagnatori_1__DatiAddizionaliAccompagnatore_3___testo" maxlength="100" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[3]._testo" onchange="ControlloTesto(this)" type="text" value="" />'
            );
        } else if (RegEx != false && MaxLength != false) {
            $('#divCompanionAdd_' + 1 + '_' + 3).append(
                '<input id="Accompagnatori_1__DatiAddizionaliAccompagnatore_3___testo" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[3]._testo" onchange="ControlloTesto(this)" type="text" value="" />'
            );
        }
    }
    if (tipodatoAddizionale == 1) {
        if (RegEx != false && MaxLength != false) {
            $('#divCompanionAdd_' + 1 + '_' + 3).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="Accompagnatori_1__DatiAddizionaliAccompagnatore_3___data" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[3]._data" type="date" value="" />'
            );
        } else if (RegEx != false && MaxLength == false) {
            $('#divCompanionAdd_' + 1 + '_' + 3).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="Accompagnatori_1__DatiAddizionaliAccompagnatore_3___data" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[3]._data" type="date" value="" />'
            );
        } else if (RegEx == false && MaxLength != false) {
            $('#divCompanionAdd_' + 1 + '_' + 3).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="Accompagnatori_1__DatiAddizionaliAccompagnatore_3___data" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[3]._data" type="date" value="" />'
            );
        } else if (RegEx == false && MaxLength == false) {
            $('#divCompanionAdd_' + 1 + '_' + 3).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="Accompagnatori_1__DatiAddizionaliAccompagnatore_3___data" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[3]._data" type="date" value="" />'
            );
        }
    }
    if (tipodatoAddizionale == 3) {
        $('#divCompanionAdd_' + 1 + '_' + 3).append($('<select/>', {
            id: "ddlsAcc_1" + '_3',
            'data-index': 3,
            onchange: "ControloSelect(this)"
        }));
        $('#ddlsAcc_1' + '_3').append($('<option/>', {
            value: 0,
            text: " "
        }));
        $('#ifMultiple').append(
            '<input data-val="true" data-val-number="Il campo _idSelezionato deve essere un numero." data-val-required="The _idSelezionato field is required." id="hiddenSelezionatoAcc_1_3" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[3]._idSelezionato" type="hidden" value="0" />'
        );
        getDropDownListsValues($('#hiddenIdDatoADDAcc_' + 3).val(), $('#ddlsAcc_1' + '_3'), 0);
    }

    $('#divCompanionAdd_' + 1 + '_' + 3).append(
        '<input data-val="true" data-val-required="The _Obbligatorio field is required." id="Accompagnatori_1__DatiAddizionaliAccompagnatore_3___Obbligatorio" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[3]._Obbligatorio" type="hidden" value="False" />'
    );

    $('#divCompanionAdd_' + 1 + '_' + 3).append(
        '<div><p><span class="field-validation-valid" data-valmsg-for="addizionale_1_3" data-valmsg-replace="true" style="color:red"></span></p> <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_1_3" data-valmsg-replace="true" style="color:red"></span> </p></div>'
    );


    var tipodatoAddizionale = $('#hiddenCodDatoAddAcc_' + 4).val();
    RegEx = true;
    MaxLength = false;
    if (tipodatoAddizionale == 2) {
        if (RegEx == false && MaxLength == false) {
            $('#divCompanionAdd_' + 1 + '_' + 4).append(
                '<input id="Accompagnatori_1__DatiAddizionaliAccompagnatore_4___testo" maxlength="100" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[4]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />'
            );
        } else if (RegEx == false && MaxLength != false) {
            $('#divCompanionAdd_' + 1 + '_' + 4).append(
                '<input id="Accompagnatori_1__DatiAddizionaliAccompagnatore_4___testo" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[4]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />'
            );
        } else if (RegEx != false && MaxLength == false) {
            $('#divCompanionAdd_' + 1 + '_' + 4).append(
                '<input id="Accompagnatori_1__DatiAddizionaliAccompagnatore_4___testo" maxlength="100" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[4]._testo" onchange="ControlloTesto(this)" type="text" value="" />'
            );
        } else if (RegEx != false && MaxLength != false) {
            $('#divCompanionAdd_' + 1 + '_' + 4).append(
                '<input id="Accompagnatori_1__DatiAddizionaliAccompagnatore_4___testo" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[4]._testo" onchange="ControlloTesto(this)" type="text" value="" />'
            );
        }
    }
    if (tipodatoAddizionale == 1) {
        if (RegEx != false && MaxLength != false) {
            $('#divCompanionAdd_' + 1 + '_' + 4).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="Accompagnatori_1__DatiAddizionaliAccompagnatore_4___data" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[4]._data" type="date" value="" />'
            );
        } else if (RegEx != false && MaxLength == false) {
            $('#divCompanionAdd_' + 1 + '_' + 4).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="Accompagnatori_1__DatiAddizionaliAccompagnatore_4___data" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[4]._data" type="date" value="" />'
            );
        } else if (RegEx == false && MaxLength != false) {
            $('#divCompanionAdd_' + 1 + '_' + 4).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="Accompagnatori_1__DatiAddizionaliAccompagnatore_4___data" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[4]._data" type="date" value="" />'
            );
        } else if (RegEx == false && MaxLength == false) {
            $('#divCompanionAdd_' + 1 + '_' + 4).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="Accompagnatori_1__DatiAddizionaliAccompagnatore_4___data" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[4]._data" type="date" value="" />'
            );
        }
    }
    if (tipodatoAddizionale == 3) {
        $('#divCompanionAdd_' + 1 + '_' + 4).append($('<select/>', {
            id: "ddlsAcc_1" + '_4',
            'data-index': 4,
            onchange: "ControloSelect(this)"
        }));
        $('#ddlsAcc_1' + '_4').append($('<option/>', {
            value: 0,
            text: " "
        }));
        $('#ifMultiple').append(
            '<input data-val="true" data-val-number="Il campo _idSelezionato deve essere un numero." data-val-required="The _idSelezionato field is required." id="hiddenSelezionatoAcc_1_4" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[4]._idSelezionato" type="hidden" value="0" />'
        );
        getDropDownListsValues($('#hiddenIdDatoADDAcc_' + 4).val(), $('#ddlsAcc_1' + '_4'), 0);
    }

    $('#divCompanionAdd_' + 1 + '_' + 4).append(
        '<input data-val="true" data-val-required="The _Obbligatorio field is required." id="Accompagnatori_1__DatiAddizionaliAccompagnatore_4___Obbligatorio" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[4]._Obbligatorio" type="hidden" value="False" />'
    );

    $('#divCompanionAdd_' + 1 + '_' + 4).append(
        '<div><p><span class="field-validation-valid" data-valmsg-for="addizionale_1_4" data-valmsg-replace="true" style="color:red"></span></p> <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_1_4" data-valmsg-replace="true" style="color:red"></span> </p></div>'
    );


    var tipodatoAddizionale = $('#hiddenCodDatoAddAcc_' + 5).val();
    RegEx = true;
    MaxLength = false;
    if (tipodatoAddizionale == 2) {
        if (RegEx == false && MaxLength == false) {
            $('#divCompanionAdd_' + 1 + '_' + 5).append(
                '<input id="Accompagnatori_1__DatiAddizionaliAccompagnatore_5___testo" maxlength="100" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[5]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />'
            );
        } else if (RegEx == false && MaxLength != false) {
            $('#divCompanionAdd_' + 1 + '_' + 5).append(
                '<input id="Accompagnatori_1__DatiAddizionaliAccompagnatore_5___testo" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[5]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />'
            );
        } else if (RegEx != false && MaxLength == false) {
            $('#divCompanionAdd_' + 1 + '_' + 5).append(
                '<input id="Accompagnatori_1__DatiAddizionaliAccompagnatore_5___testo" maxlength="100" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[5]._testo" onchange="ControlloTesto(this)" type="text" value="" />'
            );
        } else if (RegEx != false && MaxLength != false) {
            $('#divCompanionAdd_' + 1 + '_' + 5).append(
                '<input id="Accompagnatori_1__DatiAddizionaliAccompagnatore_5___testo" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[5]._testo" onchange="ControlloTesto(this)" type="text" value="" />'
            );
        }
    }
    if (tipodatoAddizionale == 1) {
        if (RegEx != false && MaxLength != false) {
            $('#divCompanionAdd_' + 1 + '_' + 5).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="Accompagnatori_1__DatiAddizionaliAccompagnatore_5___data" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[5]._data" type="date" value="" />'
            );
        } else if (RegEx != false && MaxLength == false) {
            $('#divCompanionAdd_' + 1 + '_' + 5).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="Accompagnatori_1__DatiAddizionaliAccompagnatore_5___data" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[5]._data" type="date" value="" />'
            );
        } else if (RegEx == false && MaxLength != false) {
            $('#divCompanionAdd_' + 1 + '_' + 5).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="Accompagnatori_1__DatiAddizionaliAccompagnatore_5___data" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[5]._data" type="date" value="" />'
            );
        } else if (RegEx == false && MaxLength == false) {
            $('#divCompanionAdd_' + 1 + '_' + 5).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="Accompagnatori_1__DatiAddizionaliAccompagnatore_5___data" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[5]._data" type="date" value="" />'
            );
        }
    }
    if (tipodatoAddizionale == 3) {
        $('#divCompanionAdd_' + 1 + '_' + 5).append($('<select/>', {
            id: "ddlsAcc_1" + '_5',
            'data-index': 5,
            onchange: "ControloSelect(this)"
        }));
        $('#ddlsAcc_1' + '_5').append($('<option/>', {
            value: 0,
            text: " "
        }));
        $('#ifMultiple').append(
            '<input data-val="true" data-val-number="Il campo _idSelezionato deve essere un numero." data-val-required="The _idSelezionato field is required." id="hiddenSelezionatoAcc_1_5" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[5]._idSelezionato" type="hidden" value="0" />'
        );
        getDropDownListsValues($('#hiddenIdDatoADDAcc_' + 5).val(), $('#ddlsAcc_1' + '_5'), 0);
    }

    $('#divCompanionAdd_' + 1 + '_' + 5).append(
        '<input data-val="true" data-val-required="The _Obbligatorio field is required." id="Accompagnatori_1__DatiAddizionaliAccompagnatore_5___Obbligatorio" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[5]._Obbligatorio" type="hidden" value="False" />'
    );

    $('#divCompanionAdd_' + 1 + '_' + 5).append(
        '<div><p><span class="field-validation-valid" data-valmsg-for="addizionale_1_5" data-valmsg-replace="true" style="color:red"></span></p> <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_1_5" data-valmsg-replace="true" style="color:red"></span> </p></div>'
    );


    var tipodatoAddizionale = $('#hiddenCodDatoAddAcc_' + 6).val();
    RegEx = true;
    MaxLength = false;
    if (tipodatoAddizionale == 2) {
        if (RegEx == false && MaxLength == false) {
            $('#divCompanionAdd_' + 1 + '_' + 6).append(
                '<input id="Accompagnatori_1__DatiAddizionaliAccompagnatore_6___testo" maxlength="100" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[6]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />'
            );
        } else if (RegEx == false && MaxLength != false) {
            $('#divCompanionAdd_' + 1 + '_' + 6).append(
                '<input id="Accompagnatori_1__DatiAddizionaliAccompagnatore_6___testo" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[6]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />'
            );
        } else if (RegEx != false && MaxLength == false) {
            $('#divCompanionAdd_' + 1 + '_' + 6).append(
                '<input id="Accompagnatori_1__DatiAddizionaliAccompagnatore_6___testo" maxlength="100" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[6]._testo" onchange="ControlloTesto(this)" type="text" value="" />'
            );
        } else if (RegEx != false && MaxLength != false) {
            $('#divCompanionAdd_' + 1 + '_' + 6).append(
                '<input id="Accompagnatori_1__DatiAddizionaliAccompagnatore_6___testo" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[6]._testo" onchange="ControlloTesto(this)" type="text" value="" />'
            );
        }
    }
    if (tipodatoAddizionale == 1) {
        if (RegEx != false && MaxLength != false) {
            $('#divCompanionAdd_' + 1 + '_' + 6).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="Accompagnatori_1__DatiAddizionaliAccompagnatore_6___data" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[6]._data" type="date" value="" />'
            );
        } else if (RegEx != false && MaxLength == false) {
            $('#divCompanionAdd_' + 1 + '_' + 6).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="Accompagnatori_1__DatiAddizionaliAccompagnatore_6___data" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[6]._data" type="date" value="" />'
            );
        } else if (RegEx == false && MaxLength != false) {
            $('#divCompanionAdd_' + 1 + '_' + 6).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="Accompagnatori_1__DatiAddizionaliAccompagnatore_6___data" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[6]._data" type="date" value="" />'
            );
        } else if (RegEx == false && MaxLength == false) {
            $('#divCompanionAdd_' + 1 + '_' + 6).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="Accompagnatori_1__DatiAddizionaliAccompagnatore_6___data" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[6]._data" type="date" value="" />'
            );
        }
    }
    if (tipodatoAddizionale == 3) {
        $('#divCompanionAdd_' + 1 + '_' + 6).append($('<select/>', {
            id: "ddlsAcc_1" + '_6',
            'data-index': 6,
            onchange: "ControloSelect(this)"
        }));
        $('#ddlsAcc_1' + '_6').append($('<option/>', {
            value: 0,
            text: " "
        }));
        $('#ifMultiple').append(
            '<input data-val="true" data-val-number="Il campo _idSelezionato deve essere un numero." data-val-required="The _idSelezionato field is required." id="hiddenSelezionatoAcc_1_6" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[6]._idSelezionato" type="hidden" value="0" />'
        );
        getDropDownListsValues($('#hiddenIdDatoADDAcc_' + 6).val(), $('#ddlsAcc_1' + '_6'), 0);
    }

    $('#divCompanionAdd_' + 1 + '_' + 6).append(
        '<input data-val="true" data-val-required="The _Obbligatorio field is required." id="Accompagnatori_1__DatiAddizionaliAccompagnatore_6___Obbligatorio" name="Accompagnatori[1].DatiAddizionaliAccompagnatore[6]._Obbligatorio" type="hidden" value="True" />'
    );

    $('#divCompanionAdd_' + 1 + '_' + 6).append(
        '<div><p><span class="field-validation-valid" data-valmsg-for="addizionale_1_6" data-valmsg-replace="true" style="color:red"></span></p> <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_1_6" data-valmsg-replace="true" style="color:red"></span> </p></div>'
    );


    var tipodatoAddizionale = $('#hiddenCodDatoAddAcc_' + 0).val();
    RegEx = true;
    MaxLength = false;
    if (tipodatoAddizionale == 2) {
        if (RegEx == false && MaxLength == false) {
            $('#divCompanionAdd_' + 2 + '_' + 0).append(
                '<input id="Accompagnatori_2__DatiAddizionaliAccompagnatore_0___testo" maxlength="100" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[0]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />'
            );
        } else if (RegEx == false && MaxLength != false) {
            $('#divCompanionAdd_' + 2 + '_' + 0).append(
                '<input id="Accompagnatori_2__DatiAddizionaliAccompagnatore_0___testo" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[0]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />'
            );
        } else if (RegEx != false && MaxLength == false) {
            $('#divCompanionAdd_' + 2 + '_' + 0).append(
                '<input id="Accompagnatori_2__DatiAddizionaliAccompagnatore_0___testo" maxlength="100" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[0]._testo" onchange="ControlloTesto(this)" type="text" value="" />'
            );
        } else if (RegEx != false && MaxLength != false) {
            $('#divCompanionAdd_' + 2 + '_' + 0).append(
                '<input id="Accompagnatori_2__DatiAddizionaliAccompagnatore_0___testo" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[0]._testo" onchange="ControlloTesto(this)" type="text" value="" />'
            );
        }
    }
    if (tipodatoAddizionale == 1) {
        if (RegEx != false && MaxLength != false) {
            $('#divCompanionAdd_' + 2 + '_' + 0).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="Accompagnatori_2__DatiAddizionaliAccompagnatore_0___data" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[0]._data" type="date" value="" />'
            );
        } else if (RegEx != false && MaxLength == false) {
            $('#divCompanionAdd_' + 2 + '_' + 0).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="Accompagnatori_2__DatiAddizionaliAccompagnatore_0___data" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[0]._data" type="date" value="" />'
            );
        } else if (RegEx == false && MaxLength != false) {
            $('#divCompanionAdd_' + 2 + '_' + 0).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="Accompagnatori_2__DatiAddizionaliAccompagnatore_0___data" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[0]._data" type="date" value="" />'
            );
        } else if (RegEx == false && MaxLength == false) {
            $('#divCompanionAdd_' + 2 + '_' + 0).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="Accompagnatori_2__DatiAddizionaliAccompagnatore_0___data" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[0]._data" type="date" value="" />'
            );
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
        $('#ifMultiple').append(
            '<input data-val="true" data-val-number="Il campo _idSelezionato deve essere un numero." data-val-required="The _idSelezionato field is required." id="hiddenSelezionatoAcc_2_0" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[0]._idSelezionato" type="hidden" value="0" />'
        );
        getDropDownListsValues($('#hiddenIdDatoADDAcc_' + 0).val(), $('#ddlsAcc_2' + '_0'), 0);
    }

    $('#divCompanionAdd_' + 2 + '_' + 0).append(
        '<input data-val="true" data-val-required="The _Obbligatorio field is required." id="Accompagnatori_2__DatiAddizionaliAccompagnatore_0___Obbligatorio" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[0]._Obbligatorio" type="hidden" value="True" />'
    );

    $('#divCompanionAdd_' + 2 + '_' + 0).append(
        '<div><p><span class="field-validation-valid" data-valmsg-for="addizionale_2_0" data-valmsg-replace="true" style="color:red"></span></p> <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_2_0" data-valmsg-replace="true" style="color:red"></span> </p></div>'
    );


    var tipodatoAddizionale = $('#hiddenCodDatoAddAcc_' + 1).val();
    RegEx = true;
    MaxLength = false;
    if (tipodatoAddizionale == 2) {
        if (RegEx == false && MaxLength == false) {
            $('#divCompanionAdd_' + 2 + '_' + 1).append(
                '<input id="Accompagnatori_2__DatiAddizionaliAccompagnatore_1___testo" maxlength="100" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[1]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />'
            );
        } else if (RegEx == false && MaxLength != false) {
            $('#divCompanionAdd_' + 2 + '_' + 1).append(
                '<input id="Accompagnatori_2__DatiAddizionaliAccompagnatore_1___testo" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[1]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />'
            );
        } else if (RegEx != false && MaxLength == false) {
            $('#divCompanionAdd_' + 2 + '_' + 1).append(
                '<input id="Accompagnatori_2__DatiAddizionaliAccompagnatore_1___testo" maxlength="100" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[1]._testo" onchange="ControlloTesto(this)" type="text" value="" />'
            );
        } else if (RegEx != false && MaxLength != false) {
            $('#divCompanionAdd_' + 2 + '_' + 1).append(
                '<input id="Accompagnatori_2__DatiAddizionaliAccompagnatore_1___testo" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[1]._testo" onchange="ControlloTesto(this)" type="text" value="" />'
            );
        }
    }
    if (tipodatoAddizionale == 1) {
        if (RegEx != false && MaxLength != false) {
            $('#divCompanionAdd_' + 2 + '_' + 1).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="Accompagnatori_2__DatiAddizionaliAccompagnatore_1___data" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[1]._data" type="date" value="" />'
            );
        } else if (RegEx != false && MaxLength == false) {
            $('#divCompanionAdd_' + 2 + '_' + 1).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="Accompagnatori_2__DatiAddizionaliAccompagnatore_1___data" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[1]._data" type="date" value="" />'
            );
        } else if (RegEx == false && MaxLength != false) {
            $('#divCompanionAdd_' + 2 + '_' + 1).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="Accompagnatori_2__DatiAddizionaliAccompagnatore_1___data" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[1]._data" type="date" value="" />'
            );
        } else if (RegEx == false && MaxLength == false) {
            $('#divCompanionAdd_' + 2 + '_' + 1).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="Accompagnatori_2__DatiAddizionaliAccompagnatore_1___data" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[1]._data" type="date" value="" />'
            );
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
        $('#ifMultiple').append(
            '<input data-val="true" data-val-number="Il campo _idSelezionato deve essere un numero." data-val-required="The _idSelezionato field is required." id="hiddenSelezionatoAcc_2_1" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[1]._idSelezionato" type="hidden" value="0" />'
        );
        getDropDownListsValues($('#hiddenIdDatoADDAcc_' + 1).val(), $('#ddlsAcc_2' + '_1'), 0);
    }

    $('#divCompanionAdd_' + 2 + '_' + 1).append(
        '<input data-val="true" data-val-required="The _Obbligatorio field is required." id="Accompagnatori_2__DatiAddizionaliAccompagnatore_1___Obbligatorio" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[1]._Obbligatorio" type="hidden" value="True" />'
    );

    $('#divCompanionAdd_' + 2 + '_' + 1).append(
        '<div><p><span class="field-validation-valid" data-valmsg-for="addizionale_2_1" data-valmsg-replace="true" style="color:red"></span></p> <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_2_1" data-valmsg-replace="true" style="color:red"></span> </p></div>'
    );


    var tipodatoAddizionale = $('#hiddenCodDatoAddAcc_' + 2).val();
    RegEx = true;
    MaxLength = false;
    if (tipodatoAddizionale == 2) {
        if (RegEx == false && MaxLength == false) {
            $('#divCompanionAdd_' + 2 + '_' + 2).append(
                '<input id="Accompagnatori_2__DatiAddizionaliAccompagnatore_2___testo" maxlength="100" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[2]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />'
            );
        } else if (RegEx == false && MaxLength != false) {
            $('#divCompanionAdd_' + 2 + '_' + 2).append(
                '<input id="Accompagnatori_2__DatiAddizionaliAccompagnatore_2___testo" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[2]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />'
            );
        } else if (RegEx != false && MaxLength == false) {
            $('#divCompanionAdd_' + 2 + '_' + 2).append(
                '<input id="Accompagnatori_2__DatiAddizionaliAccompagnatore_2___testo" maxlength="100" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[2]._testo" onchange="ControlloTesto(this)" type="text" value="" />'
            );
        } else if (RegEx != false && MaxLength != false) {
            $('#divCompanionAdd_' + 2 + '_' + 2).append(
                '<input id="Accompagnatori_2__DatiAddizionaliAccompagnatore_2___testo" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[2]._testo" onchange="ControlloTesto(this)" type="text" value="" />'
            );
        }
    }
    if (tipodatoAddizionale == 1) {
        if (RegEx != false && MaxLength != false) {
            $('#divCompanionAdd_' + 2 + '_' + 2).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="Accompagnatori_2__DatiAddizionaliAccompagnatore_2___data" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[2]._data" type="date" value="" />'
            );
        } else if (RegEx != false && MaxLength == false) {
            $('#divCompanionAdd_' + 2 + '_' + 2).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="Accompagnatori_2__DatiAddizionaliAccompagnatore_2___data" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[2]._data" type="date" value="" />'
            );
        } else if (RegEx == false && MaxLength != false) {
            $('#divCompanionAdd_' + 2 + '_' + 2).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="Accompagnatori_2__DatiAddizionaliAccompagnatore_2___data" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[2]._data" type="date" value="" />'
            );
        } else if (RegEx == false && MaxLength == false) {
            $('#divCompanionAdd_' + 2 + '_' + 2).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="Accompagnatori_2__DatiAddizionaliAccompagnatore_2___data" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[2]._data" type="date" value="" />'
            );
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
        $('#ifMultiple').append(
            '<input data-val="true" data-val-number="Il campo _idSelezionato deve essere un numero." data-val-required="The _idSelezionato field is required." id="hiddenSelezionatoAcc_2_2" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[2]._idSelezionato" type="hidden" value="0" />'
        );
        getDropDownListsValues($('#hiddenIdDatoADDAcc_' + 2).val(), $('#ddlsAcc_2' + '_2'), 0);
    }

    $('#divCompanionAdd_' + 2 + '_' + 2).append(
        '<input data-val="true" data-val-required="The _Obbligatorio field is required." id="Accompagnatori_2__DatiAddizionaliAccompagnatore_2___Obbligatorio" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[2]._Obbligatorio" type="hidden" value="True" />'
    );

    $('#divCompanionAdd_' + 2 + '_' + 2).append(
        '<div><p><span class="field-validation-valid" data-valmsg-for="addizionale_2_2" data-valmsg-replace="true" style="color:red"></span></p> <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_2_2" data-valmsg-replace="true" style="color:red"></span> </p></div>'
    );


    var tipodatoAddizionale = $('#hiddenCodDatoAddAcc_' + 3).val();
    RegEx = true;
    MaxLength = false;
    if (tipodatoAddizionale == 2) {
        if (RegEx == false && MaxLength == false) {
            $('#divCompanionAdd_' + 2 + '_' + 3).append(
                '<input id="Accompagnatori_2__DatiAddizionaliAccompagnatore_3___testo" maxlength="100" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[3]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />'
            );
        } else if (RegEx == false && MaxLength != false) {
            $('#divCompanionAdd_' + 2 + '_' + 3).append(
                '<input id="Accompagnatori_2__DatiAddizionaliAccompagnatore_3___testo" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[3]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />'
            );
        } else if (RegEx != false && MaxLength == false) {
            $('#divCompanionAdd_' + 2 + '_' + 3).append(
                '<input id="Accompagnatori_2__DatiAddizionaliAccompagnatore_3___testo" maxlength="100" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[3]._testo" onchange="ControlloTesto(this)" type="text" value="" />'
            );
        } else if (RegEx != false && MaxLength != false) {
            $('#divCompanionAdd_' + 2 + '_' + 3).append(
                '<input id="Accompagnatori_2__DatiAddizionaliAccompagnatore_3___testo" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[3]._testo" onchange="ControlloTesto(this)" type="text" value="" />'
            );
        }
    }
    if (tipodatoAddizionale == 1) {
        if (RegEx != false && MaxLength != false) {
            $('#divCompanionAdd_' + 2 + '_' + 3).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="Accompagnatori_2__DatiAddizionaliAccompagnatore_3___data" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[3]._data" type="date" value="" />'
            );
        } else if (RegEx != false && MaxLength == false) {
            $('#divCompanionAdd_' + 2 + '_' + 3).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="Accompagnatori_2__DatiAddizionaliAccompagnatore_3___data" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[3]._data" type="date" value="" />'
            );
        } else if (RegEx == false && MaxLength != false) {
            $('#divCompanionAdd_' + 2 + '_' + 3).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="Accompagnatori_2__DatiAddizionaliAccompagnatore_3___data" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[3]._data" type="date" value="" />'
            );
        } else if (RegEx == false && MaxLength == false) {
            $('#divCompanionAdd_' + 2 + '_' + 3).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="Accompagnatori_2__DatiAddizionaliAccompagnatore_3___data" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[3]._data" type="date" value="" />'
            );
        }
    }
    if (tipodatoAddizionale == 3) {
        $('#divCompanionAdd_' + 2 + '_' + 3).append($('<select/>', {
            id: "ddlsAcc_2" + '_3',
            'data-index': 3,
            onchange: "ControloSelect(this)"
        }));
        $('#ddlsAcc_2' + '_3').append($('<option/>', {
            value: 0,
            text: " "
        }));
        $('#ifMultiple').append(
            '<input data-val="true" data-val-number="Il campo _idSelezionato deve essere un numero." data-val-required="The _idSelezionato field is required." id="hiddenSelezionatoAcc_2_3" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[3]._idSelezionato" type="hidden" value="0" />'
        );
        getDropDownListsValues($('#hiddenIdDatoADDAcc_' + 3).val(), $('#ddlsAcc_2' + '_3'), 0);
    }

    $('#divCompanionAdd_' + 2 + '_' + 3).append(
        '<input data-val="true" data-val-required="The _Obbligatorio field is required." id="Accompagnatori_2__DatiAddizionaliAccompagnatore_3___Obbligatorio" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[3]._Obbligatorio" type="hidden" value="False" />'
    );

    $('#divCompanionAdd_' + 2 + '_' + 3).append(
        '<div><p><span class="field-validation-valid" data-valmsg-for="addizionale_2_3" data-valmsg-replace="true" style="color:red"></span></p> <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_2_3" data-valmsg-replace="true" style="color:red"></span> </p></div>'
    );


    var tipodatoAddizionale = $('#hiddenCodDatoAddAcc_' + 4).val();
    RegEx = true;
    MaxLength = false;
    if (tipodatoAddizionale == 2) {
        if (RegEx == false && MaxLength == false) {
            $('#divCompanionAdd_' + 2 + '_' + 4).append(
                '<input id="Accompagnatori_2__DatiAddizionaliAccompagnatore_4___testo" maxlength="100" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[4]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />'
            );
        } else if (RegEx == false && MaxLength != false) {
            $('#divCompanionAdd_' + 2 + '_' + 4).append(
                '<input id="Accompagnatori_2__DatiAddizionaliAccompagnatore_4___testo" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[4]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />'
            );
        } else if (RegEx != false && MaxLength == false) {
            $('#divCompanionAdd_' + 2 + '_' + 4).append(
                '<input id="Accompagnatori_2__DatiAddizionaliAccompagnatore_4___testo" maxlength="100" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[4]._testo" onchange="ControlloTesto(this)" type="text" value="" />'
            );
        } else if (RegEx != false && MaxLength != false) {
            $('#divCompanionAdd_' + 2 + '_' + 4).append(
                '<input id="Accompagnatori_2__DatiAddizionaliAccompagnatore_4___testo" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[4]._testo" onchange="ControlloTesto(this)" type="text" value="" />'
            );
        }
    }
    if (tipodatoAddizionale == 1) {
        if (RegEx != false && MaxLength != false) {
            $('#divCompanionAdd_' + 2 + '_' + 4).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="Accompagnatori_2__DatiAddizionaliAccompagnatore_4___data" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[4]._data" type="date" value="" />'
            );
        } else if (RegEx != false && MaxLength == false) {
            $('#divCompanionAdd_' + 2 + '_' + 4).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="Accompagnatori_2__DatiAddizionaliAccompagnatore_4___data" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[4]._data" type="date" value="" />'
            );
        } else if (RegEx == false && MaxLength != false) {
            $('#divCompanionAdd_' + 2 + '_' + 4).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="Accompagnatori_2__DatiAddizionaliAccompagnatore_4___data" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[4]._data" type="date" value="" />'
            );
        } else if (RegEx == false && MaxLength == false) {
            $('#divCompanionAdd_' + 2 + '_' + 4).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="Accompagnatori_2__DatiAddizionaliAccompagnatore_4___data" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[4]._data" type="date" value="" />'
            );
        }
    }
    if (tipodatoAddizionale == 3) {
        $('#divCompanionAdd_' + 2 + '_' + 4).append($('<select/>', {
            id: "ddlsAcc_2" + '_4',
            'data-index': 4,
            onchange: "ControloSelect(this)"
        }));
        $('#ddlsAcc_2' + '_4').append($('<option/>', {
            value: 0,
            text: " "
        }));
        $('#ifMultiple').append(
            '<input data-val="true" data-val-number="Il campo _idSelezionato deve essere un numero." data-val-required="The _idSelezionato field is required." id="hiddenSelezionatoAcc_2_4" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[4]._idSelezionato" type="hidden" value="0" />'
        );
        getDropDownListsValues($('#hiddenIdDatoADDAcc_' + 4).val(), $('#ddlsAcc_2' + '_4'), 0);
    }

    $('#divCompanionAdd_' + 2 + '_' + 4).append(
        '<input data-val="true" data-val-required="The _Obbligatorio field is required." id="Accompagnatori_2__DatiAddizionaliAccompagnatore_4___Obbligatorio" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[4]._Obbligatorio" type="hidden" value="False" />'
    );

    $('#divCompanionAdd_' + 2 + '_' + 4).append(
        '<div><p><span class="field-validation-valid" data-valmsg-for="addizionale_2_4" data-valmsg-replace="true" style="color:red"></span></p> <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_2_4" data-valmsg-replace="true" style="color:red"></span> </p></div>'
    );


    var tipodatoAddizionale = $('#hiddenCodDatoAddAcc_' + 5).val();
    RegEx = true;
    MaxLength = false;
    if (tipodatoAddizionale == 2) {
        if (RegEx == false && MaxLength == false) {
            $('#divCompanionAdd_' + 2 + '_' + 5).append(
                '<input id="Accompagnatori_2__DatiAddizionaliAccompagnatore_5___testo" maxlength="100" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[5]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />'
            );
        } else if (RegEx == false && MaxLength != false) {
            $('#divCompanionAdd_' + 2 + '_' + 5).append(
                '<input id="Accompagnatori_2__DatiAddizionaliAccompagnatore_5___testo" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[5]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />'
            );
        } else if (RegEx != false && MaxLength == false) {
            $('#divCompanionAdd_' + 2 + '_' + 5).append(
                '<input id="Accompagnatori_2__DatiAddizionaliAccompagnatore_5___testo" maxlength="100" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[5]._testo" onchange="ControlloTesto(this)" type="text" value="" />'
            );
        } else if (RegEx != false && MaxLength != false) {
            $('#divCompanionAdd_' + 2 + '_' + 5).append(
                '<input id="Accompagnatori_2__DatiAddizionaliAccompagnatore_5___testo" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[5]._testo" onchange="ControlloTesto(this)" type="text" value="" />'
            );
        }
    }
    if (tipodatoAddizionale == 1) {
        if (RegEx != false && MaxLength != false) {
            $('#divCompanionAdd_' + 2 + '_' + 5).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="Accompagnatori_2__DatiAddizionaliAccompagnatore_5___data" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[5]._data" type="date" value="" />'
            );
        } else if (RegEx != false && MaxLength == false) {
            $('#divCompanionAdd_' + 2 + '_' + 5).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="Accompagnatori_2__DatiAddizionaliAccompagnatore_5___data" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[5]._data" type="date" value="" />'
            );
        } else if (RegEx == false && MaxLength != false) {
            $('#divCompanionAdd_' + 2 + '_' + 5).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="Accompagnatori_2__DatiAddizionaliAccompagnatore_5___data" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[5]._data" type="date" value="" />'
            );
        } else if (RegEx == false && MaxLength == false) {
            $('#divCompanionAdd_' + 2 + '_' + 5).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="Accompagnatori_2__DatiAddizionaliAccompagnatore_5___data" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[5]._data" type="date" value="" />'
            );
        }
    }
    if (tipodatoAddizionale == 3) {
        $('#divCompanionAdd_' + 2 + '_' + 5).append($('<select/>', {
            id: "ddlsAcc_2" + '_5',
            'data-index': 5,
            onchange: "ControloSelect(this)"
        }));
        $('#ddlsAcc_2' + '_5').append($('<option/>', {
            value: 0,
            text: " "
        }));
        $('#ifMultiple').append(
            '<input data-val="true" data-val-number="Il campo _idSelezionato deve essere un numero." data-val-required="The _idSelezionato field is required." id="hiddenSelezionatoAcc_2_5" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[5]._idSelezionato" type="hidden" value="0" />'
        );
        getDropDownListsValues($('#hiddenIdDatoADDAcc_' + 5).val(), $('#ddlsAcc_2' + '_5'), 0);
    }

    $('#divCompanionAdd_' + 2 + '_' + 5).append(
        '<input data-val="true" data-val-required="The _Obbligatorio field is required." id="Accompagnatori_2__DatiAddizionaliAccompagnatore_5___Obbligatorio" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[5]._Obbligatorio" type="hidden" value="False" />'
    );

    $('#divCompanionAdd_' + 2 + '_' + 5).append(
        '<div><p><span class="field-validation-valid" data-valmsg-for="addizionale_2_5" data-valmsg-replace="true" style="color:red"></span></p> <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_2_5" data-valmsg-replace="true" style="color:red"></span> </p></div>'
    );


    var tipodatoAddizionale = $('#hiddenCodDatoAddAcc_' + 6).val();
    RegEx = true;
    MaxLength = false;
    if (tipodatoAddizionale == 2) {
        if (RegEx == false && MaxLength == false) {
            $('#divCompanionAdd_' + 2 + '_' + 6).append(
                '<input id="Accompagnatori_2__DatiAddizionaliAccompagnatore_6___testo" maxlength="100" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[6]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />'
            );
        } else if (RegEx == false && MaxLength != false) {
            $('#divCompanionAdd_' + 2 + '_' + 6).append(
                '<input id="Accompagnatori_2__DatiAddizionaliAccompagnatore_6___testo" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[6]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />'
            );
        } else if (RegEx != false && MaxLength == false) {
            $('#divCompanionAdd_' + 2 + '_' + 6).append(
                '<input id="Accompagnatori_2__DatiAddizionaliAccompagnatore_6___testo" maxlength="100" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[6]._testo" onchange="ControlloTesto(this)" type="text" value="" />'
            );
        } else if (RegEx != false && MaxLength != false) {
            $('#divCompanionAdd_' + 2 + '_' + 6).append(
                '<input id="Accompagnatori_2__DatiAddizionaliAccompagnatore_6___testo" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[6]._testo" onchange="ControlloTesto(this)" type="text" value="" />'
            );
        }
    }
    if (tipodatoAddizionale == 1) {
        if (RegEx != false && MaxLength != false) {
            $('#divCompanionAdd_' + 2 + '_' + 6).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="Accompagnatori_2__DatiAddizionaliAccompagnatore_6___data" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[6]._data" type="date" value="" />'
            );
        } else if (RegEx != false && MaxLength == false) {
            $('#divCompanionAdd_' + 2 + '_' + 6).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="Accompagnatori_2__DatiAddizionaliAccompagnatore_6___data" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[6]._data" type="date" value="" />'
            );
        } else if (RegEx == false && MaxLength != false) {
            $('#divCompanionAdd_' + 2 + '_' + 6).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="Accompagnatori_2__DatiAddizionaliAccompagnatore_6___data" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[6]._data" type="date" value="" />'
            );
        } else if (RegEx == false && MaxLength == false) {
            $('#divCompanionAdd_' + 2 + '_' + 6).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="Accompagnatori_2__DatiAddizionaliAccompagnatore_6___data" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[6]._data" type="date" value="" />'
            );
        }
    }
    if (tipodatoAddizionale == 3) {
        $('#divCompanionAdd_' + 2 + '_' + 6).append($('<select/>', {
            id: "ddlsAcc_2" + '_6',
            'data-index': 6,
            onchange: "ControloSelect(this)"
        }));
        $('#ddlsAcc_2' + '_6').append($('<option/>', {
            value: 0,
            text: " "
        }));
        $('#ifMultiple').append(
            '<input data-val="true" data-val-number="Il campo _idSelezionato deve essere un numero." data-val-required="The _idSelezionato field is required." id="hiddenSelezionatoAcc_2_6" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[6]._idSelezionato" type="hidden" value="0" />'
        );
        getDropDownListsValues($('#hiddenIdDatoADDAcc_' + 6).val(), $('#ddlsAcc_2' + '_6'), 0);
    }

    $('#divCompanionAdd_' + 2 + '_' + 6).append(
        '<input data-val="true" data-val-required="The _Obbligatorio field is required." id="Accompagnatori_2__DatiAddizionaliAccompagnatore_6___Obbligatorio" name="Accompagnatori[2].DatiAddizionaliAccompagnatore[6]._Obbligatorio" type="hidden" value="True" />'
    );

    $('#divCompanionAdd_' + 2 + '_' + 6).append(
        '<div><p><span class="field-validation-valid" data-valmsg-for="addizionale_2_6" data-valmsg-replace="true" style="color:red"></span></p> <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_2_6" data-valmsg-replace="true" style="color:red"></span> </p></div>'
    );


    var tipodatoAddizionale = $('#hiddenCodDatoAddAcc_' + 0).val();
    RegEx = true;
    MaxLength = false;
    if (tipodatoAddizionale == 2) {
        if (RegEx == false && MaxLength == false) {
            $('#divCompanionAdd_' + 3 + '_' + 0).append(
                '<input id="Accompagnatori_3__DatiAddizionaliAccompagnatore_0___testo" maxlength="100" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[0]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />'
            );
        } else if (RegEx == false && MaxLength != false) {
            $('#divCompanionAdd_' + 3 + '_' + 0).append(
                '<input id="Accompagnatori_3__DatiAddizionaliAccompagnatore_0___testo" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[0]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />'
            );
        } else if (RegEx != false && MaxLength == false) {
            $('#divCompanionAdd_' + 3 + '_' + 0).append(
                '<input id="Accompagnatori_3__DatiAddizionaliAccompagnatore_0___testo" maxlength="100" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[0]._testo" onchange="ControlloTesto(this)" type="text" value="" />'
            );
        } else if (RegEx != false && MaxLength != false) {
            $('#divCompanionAdd_' + 3 + '_' + 0).append(
                '<input id="Accompagnatori_3__DatiAddizionaliAccompagnatore_0___testo" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[0]._testo" onchange="ControlloTesto(this)" type="text" value="" />'
            );
        }
    }
    if (tipodatoAddizionale == 1) {
        if (RegEx != false && MaxLength != false) {
            $('#divCompanionAdd_' + 3 + '_' + 0).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="Accompagnatori_3__DatiAddizionaliAccompagnatore_0___data" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[0]._data" type="date" value="" />'
            );
        } else if (RegEx != false && MaxLength == false) {
            $('#divCompanionAdd_' + 3 + '_' + 0).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="Accompagnatori_3__DatiAddizionaliAccompagnatore_0___data" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[0]._data" type="date" value="" />'
            );
        } else if (RegEx == false && MaxLength != false) {
            $('#divCompanionAdd_' + 3 + '_' + 0).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="Accompagnatori_3__DatiAddizionaliAccompagnatore_0___data" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[0]._data" type="date" value="" />'
            );
        } else if (RegEx == false && MaxLength == false) {
            $('#divCompanionAdd_' + 3 + '_' + 0).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="Accompagnatori_3__DatiAddizionaliAccompagnatore_0___data" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[0]._data" type="date" value="" />'
            );
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
        $('#ifMultiple').append(
            '<input data-val="true" data-val-number="Il campo _idSelezionato deve essere un numero." data-val-required="The _idSelezionato field is required." id="hiddenSelezionatoAcc_3_0" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[0]._idSelezionato" type="hidden" value="0" />'
        );
        getDropDownListsValues($('#hiddenIdDatoADDAcc_' + 0).val(), $('#ddlsAcc_3' + '_0'), 0);
    }

    $('#divCompanionAdd_' + 3 + '_' + 0).append(
        '<input data-val="true" data-val-required="The _Obbligatorio field is required." id="Accompagnatori_3__DatiAddizionaliAccompagnatore_0___Obbligatorio" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[0]._Obbligatorio" type="hidden" value="True" />'
    );

    $('#divCompanionAdd_' + 3 + '_' + 0).append(
        '<div><p><span class="field-validation-valid" data-valmsg-for="addizionale_3_0" data-valmsg-replace="true" style="color:red"></span></p> <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_3_0" data-valmsg-replace="true" style="color:red"></span> </p></div>'
    );


    var tipodatoAddizionale = $('#hiddenCodDatoAddAcc_' + 1).val();
    RegEx = true;
    MaxLength = false;
    if (tipodatoAddizionale == 2) {
        if (RegEx == false && MaxLength == false) {
            $('#divCompanionAdd_' + 3 + '_' + 1).append(
                '<input id="Accompagnatori_3__DatiAddizionaliAccompagnatore_1___testo" maxlength="100" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[1]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />'
            );
        } else if (RegEx == false && MaxLength != false) {
            $('#divCompanionAdd_' + 3 + '_' + 1).append(
                '<input id="Accompagnatori_3__DatiAddizionaliAccompagnatore_1___testo" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[1]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />'
            );
        } else if (RegEx != false && MaxLength == false) {
            $('#divCompanionAdd_' + 3 + '_' + 1).append(
                '<input id="Accompagnatori_3__DatiAddizionaliAccompagnatore_1___testo" maxlength="100" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[1]._testo" onchange="ControlloTesto(this)" type="text" value="" />'
            );
        } else if (RegEx != false && MaxLength != false) {
            $('#divCompanionAdd_' + 3 + '_' + 1).append(
                '<input id="Accompagnatori_3__DatiAddizionaliAccompagnatore_1___testo" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[1]._testo" onchange="ControlloTesto(this)" type="text" value="" />'
            );
        }
    }
    if (tipodatoAddizionale == 1) {
        if (RegEx != false && MaxLength != false) {
            $('#divCompanionAdd_' + 3 + '_' + 1).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="Accompagnatori_3__DatiAddizionaliAccompagnatore_1___data" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[1]._data" type="date" value="" />'
            );
        } else if (RegEx != false && MaxLength == false) {
            $('#divCompanionAdd_' + 3 + '_' + 1).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="Accompagnatori_3__DatiAddizionaliAccompagnatore_1___data" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[1]._data" type="date" value="" />'
            );
        } else if (RegEx == false && MaxLength != false) {
            $('#divCompanionAdd_' + 3 + '_' + 1).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="Accompagnatori_3__DatiAddizionaliAccompagnatore_1___data" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[1]._data" type="date" value="" />'
            );
        } else if (RegEx == false && MaxLength == false) {
            $('#divCompanionAdd_' + 3 + '_' + 1).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="Accompagnatori_3__DatiAddizionaliAccompagnatore_1___data" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[1]._data" type="date" value="" />'
            );
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
        $('#ifMultiple').append(
            '<input data-val="true" data-val-number="Il campo _idSelezionato deve essere un numero." data-val-required="The _idSelezionato field is required." id="hiddenSelezionatoAcc_3_1" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[1]._idSelezionato" type="hidden" value="0" />'
        );
        getDropDownListsValues($('#hiddenIdDatoADDAcc_' + 1).val(), $('#ddlsAcc_3' + '_1'), 0);
    }

    $('#divCompanionAdd_' + 3 + '_' + 1).append(
        '<input data-val="true" data-val-required="The _Obbligatorio field is required." id="Accompagnatori_3__DatiAddizionaliAccompagnatore_1___Obbligatorio" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[1]._Obbligatorio" type="hidden" value="True" />'
    );

    $('#divCompanionAdd_' + 3 + '_' + 1).append(
        '<div><p><span class="field-validation-valid" data-valmsg-for="addizionale_3_1" data-valmsg-replace="true" style="color:red"></span></p> <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_3_1" data-valmsg-replace="true" style="color:red"></span> </p></div>'
    );


    var tipodatoAddizionale = $('#hiddenCodDatoAddAcc_' + 2).val();
    RegEx = true;
    MaxLength = false;
    if (tipodatoAddizionale == 2) {
        if (RegEx == false && MaxLength == false) {
            $('#divCompanionAdd_' + 3 + '_' + 2).append(
                '<input id="Accompagnatori_3__DatiAddizionaliAccompagnatore_2___testo" maxlength="100" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[2]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />'
            );
        } else if (RegEx == false && MaxLength != false) {
            $('#divCompanionAdd_' + 3 + '_' + 2).append(
                '<input id="Accompagnatori_3__DatiAddizionaliAccompagnatore_2___testo" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[2]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />'
            );
        } else if (RegEx != false && MaxLength == false) {
            $('#divCompanionAdd_' + 3 + '_' + 2).append(
                '<input id="Accompagnatori_3__DatiAddizionaliAccompagnatore_2___testo" maxlength="100" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[2]._testo" onchange="ControlloTesto(this)" type="text" value="" />'
            );
        } else if (RegEx != false && MaxLength != false) {
            $('#divCompanionAdd_' + 3 + '_' + 2).append(
                '<input id="Accompagnatori_3__DatiAddizionaliAccompagnatore_2___testo" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[2]._testo" onchange="ControlloTesto(this)" type="text" value="" />'
            );
        }
    }
    if (tipodatoAddizionale == 1) {
        if (RegEx != false && MaxLength != false) {
            $('#divCompanionAdd_' + 3 + '_' + 2).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="Accompagnatori_3__DatiAddizionaliAccompagnatore_2___data" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[2]._data" type="date" value="" />'
            );
        } else if (RegEx != false && MaxLength == false) {
            $('#divCompanionAdd_' + 3 + '_' + 2).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="Accompagnatori_3__DatiAddizionaliAccompagnatore_2___data" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[2]._data" type="date" value="" />'
            );
        } else if (RegEx == false && MaxLength != false) {
            $('#divCompanionAdd_' + 3 + '_' + 2).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="Accompagnatori_3__DatiAddizionaliAccompagnatore_2___data" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[2]._data" type="date" value="" />'
            );
        } else if (RegEx == false && MaxLength == false) {
            $('#divCompanionAdd_' + 3 + '_' + 2).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="Accompagnatori_3__DatiAddizionaliAccompagnatore_2___data" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[2]._data" type="date" value="" />'
            );
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
        $('#ifMultiple').append(
            '<input data-val="true" data-val-number="Il campo _idSelezionato deve essere un numero." data-val-required="The _idSelezionato field is required." id="hiddenSelezionatoAcc_3_2" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[2]._idSelezionato" type="hidden" value="0" />'
        );
        getDropDownListsValues($('#hiddenIdDatoADDAcc_' + 2).val(), $('#ddlsAcc_3' + '_2'), 0);
    }

    $('#divCompanionAdd_' + 3 + '_' + 2).append(
        '<input data-val="true" data-val-required="The _Obbligatorio field is required." id="Accompagnatori_3__DatiAddizionaliAccompagnatore_2___Obbligatorio" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[2]._Obbligatorio" type="hidden" value="True" />'
    );

    $('#divCompanionAdd_' + 3 + '_' + 2).append(
        '<div><p><span class="field-validation-valid" data-valmsg-for="addizionale_3_2" data-valmsg-replace="true" style="color:red"></span></p> <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_3_2" data-valmsg-replace="true" style="color:red"></span> </p></div>'
    );


    var tipodatoAddizionale = $('#hiddenCodDatoAddAcc_' + 3).val();
    RegEx = true;
    MaxLength = false;
    if (tipodatoAddizionale == 2) {
        if (RegEx == false && MaxLength == false) {
            $('#divCompanionAdd_' + 3 + '_' + 3).append(
                '<input id="Accompagnatori_3__DatiAddizionaliAccompagnatore_3___testo" maxlength="100" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[3]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />'
            );
        } else if (RegEx == false && MaxLength != false) {
            $('#divCompanionAdd_' + 3 + '_' + 3).append(
                '<input id="Accompagnatori_3__DatiAddizionaliAccompagnatore_3___testo" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[3]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />'
            );
        } else if (RegEx != false && MaxLength == false) {
            $('#divCompanionAdd_' + 3 + '_' + 3).append(
                '<input id="Accompagnatori_3__DatiAddizionaliAccompagnatore_3___testo" maxlength="100" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[3]._testo" onchange="ControlloTesto(this)" type="text" value="" />'
            );
        } else if (RegEx != false && MaxLength != false) {
            $('#divCompanionAdd_' + 3 + '_' + 3).append(
                '<input id="Accompagnatori_3__DatiAddizionaliAccompagnatore_3___testo" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[3]._testo" onchange="ControlloTesto(this)" type="text" value="" />'
            );
        }
    }
    if (tipodatoAddizionale == 1) {
        if (RegEx != false && MaxLength != false) {
            $('#divCompanionAdd_' + 3 + '_' + 3).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="Accompagnatori_3__DatiAddizionaliAccompagnatore_3___data" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[3]._data" type="date" value="" />'
            );
        } else if (RegEx != false && MaxLength == false) {
            $('#divCompanionAdd_' + 3 + '_' + 3).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="Accompagnatori_3__DatiAddizionaliAccompagnatore_3___data" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[3]._data" type="date" value="" />'
            );
        } else if (RegEx == false && MaxLength != false) {
            $('#divCompanionAdd_' + 3 + '_' + 3).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="Accompagnatori_3__DatiAddizionaliAccompagnatore_3___data" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[3]._data" type="date" value="" />'
            );
        } else if (RegEx == false && MaxLength == false) {
            $('#divCompanionAdd_' + 3 + '_' + 3).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="Accompagnatori_3__DatiAddizionaliAccompagnatore_3___data" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[3]._data" type="date" value="" />'
            );
        }
    }
    if (tipodatoAddizionale == 3) {
        $('#divCompanionAdd_' + 3 + '_' + 3).append($('<select/>', {
            id: "ddlsAcc_3" + '_3',
            'data-index': 3,
            onchange: "ControloSelect(this)"
        }));
        $('#ddlsAcc_3' + '_3').append($('<option/>', {
            value: 0,
            text: " "
        }));
        $('#ifMultiple').append(
            '<input data-val="true" data-val-number="Il campo _idSelezionato deve essere un numero." data-val-required="The _idSelezionato field is required." id="hiddenSelezionatoAcc_3_3" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[3]._idSelezionato" type="hidden" value="0" />'
        );
        getDropDownListsValues($('#hiddenIdDatoADDAcc_' + 3).val(), $('#ddlsAcc_3' + '_3'), 0);
    }

    $('#divCompanionAdd_' + 3 + '_' + 3).append(
        '<input data-val="true" data-val-required="The _Obbligatorio field is required." id="Accompagnatori_3__DatiAddizionaliAccompagnatore_3___Obbligatorio" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[3]._Obbligatorio" type="hidden" value="False" />'
    );

    $('#divCompanionAdd_' + 3 + '_' + 3).append(
        '<div><p><span class="field-validation-valid" data-valmsg-for="addizionale_3_3" data-valmsg-replace="true" style="color:red"></span></p> <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_3_3" data-valmsg-replace="true" style="color:red"></span> </p></div>'
    );


    var tipodatoAddizionale = $('#hiddenCodDatoAddAcc_' + 4).val();
    RegEx = true;
    MaxLength = false;
    if (tipodatoAddizionale == 2) {
        if (RegEx == false && MaxLength == false) {
            $('#divCompanionAdd_' + 3 + '_' + 4).append(
                '<input id="Accompagnatori_3__DatiAddizionaliAccompagnatore_4___testo" maxlength="100" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[4]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />'
            );
        } else if (RegEx == false && MaxLength != false) {
            $('#divCompanionAdd_' + 3 + '_' + 4).append(
                '<input id="Accompagnatori_3__DatiAddizionaliAccompagnatore_4___testo" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[4]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />'
            );
        } else if (RegEx != false && MaxLength == false) {
            $('#divCompanionAdd_' + 3 + '_' + 4).append(
                '<input id="Accompagnatori_3__DatiAddizionaliAccompagnatore_4___testo" maxlength="100" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[4]._testo" onchange="ControlloTesto(this)" type="text" value="" />'
            );
        } else if (RegEx != false && MaxLength != false) {
            $('#divCompanionAdd_' + 3 + '_' + 4).append(
                '<input id="Accompagnatori_3__DatiAddizionaliAccompagnatore_4___testo" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[4]._testo" onchange="ControlloTesto(this)" type="text" value="" />'
            );
        }
    }
    if (tipodatoAddizionale == 1) {
        if (RegEx != false && MaxLength != false) {
            $('#divCompanionAdd_' + 3 + '_' + 4).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="Accompagnatori_3__DatiAddizionaliAccompagnatore_4___data" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[4]._data" type="date" value="" />'
            );
        } else if (RegEx != false && MaxLength == false) {
            $('#divCompanionAdd_' + 3 + '_' + 4).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="Accompagnatori_3__DatiAddizionaliAccompagnatore_4___data" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[4]._data" type="date" value="" />'
            );
        } else if (RegEx == false && MaxLength != false) {
            $('#divCompanionAdd_' + 3 + '_' + 4).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="Accompagnatori_3__DatiAddizionaliAccompagnatore_4___data" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[4]._data" type="date" value="" />'
            );
        } else if (RegEx == false && MaxLength == false) {
            $('#divCompanionAdd_' + 3 + '_' + 4).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="Accompagnatori_3__DatiAddizionaliAccompagnatore_4___data" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[4]._data" type="date" value="" />'
            );
        }
    }
    if (tipodatoAddizionale == 3) {
        $('#divCompanionAdd_' + 3 + '_' + 4).append($('<select/>', {
            id: "ddlsAcc_3" + '_4',
            'data-index': 4,
            onchange: "ControloSelect(this)"
        }));
        $('#ddlsAcc_3' + '_4').append($('<option/>', {
            value: 0,
            text: " "
        }));
        $('#ifMultiple').append(
            '<input data-val="true" data-val-number="Il campo _idSelezionato deve essere un numero." data-val-required="The _idSelezionato field is required." id="hiddenSelezionatoAcc_3_4" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[4]._idSelezionato" type="hidden" value="0" />'
        );
        getDropDownListsValues($('#hiddenIdDatoADDAcc_' + 4).val(), $('#ddlsAcc_3' + '_4'), 0);
    }

    $('#divCompanionAdd_' + 3 + '_' + 4).append(
        '<input data-val="true" data-val-required="The _Obbligatorio field is required." id="Accompagnatori_3__DatiAddizionaliAccompagnatore_4___Obbligatorio" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[4]._Obbligatorio" type="hidden" value="False" />'
    );

    $('#divCompanionAdd_' + 3 + '_' + 4).append(
        '<div><p><span class="field-validation-valid" data-valmsg-for="addizionale_3_4" data-valmsg-replace="true" style="color:red"></span></p> <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_3_4" data-valmsg-replace="true" style="color:red"></span> </p></div>'
    );


    var tipodatoAddizionale = $('#hiddenCodDatoAddAcc_' + 5).val();
    RegEx = true;
    MaxLength = false;
    if (tipodatoAddizionale == 2) {
        if (RegEx == false && MaxLength == false) {
            $('#divCompanionAdd_' + 3 + '_' + 5).append(
                '<input id="Accompagnatori_3__DatiAddizionaliAccompagnatore_5___testo" maxlength="100" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[5]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />'
            );
        } else if (RegEx == false && MaxLength != false) {
            $('#divCompanionAdd_' + 3 + '_' + 5).append(
                '<input id="Accompagnatori_3__DatiAddizionaliAccompagnatore_5___testo" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[5]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />'
            );
        } else if (RegEx != false && MaxLength == false) {
            $('#divCompanionAdd_' + 3 + '_' + 5).append(
                '<input id="Accompagnatori_3__DatiAddizionaliAccompagnatore_5___testo" maxlength="100" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[5]._testo" onchange="ControlloTesto(this)" type="text" value="" />'
            );
        } else if (RegEx != false && MaxLength != false) {
            $('#divCompanionAdd_' + 3 + '_' + 5).append(
                '<input id="Accompagnatori_3__DatiAddizionaliAccompagnatore_5___testo" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[5]._testo" onchange="ControlloTesto(this)" type="text" value="" />'
            );
        }
    }
    if (tipodatoAddizionale == 1) {
        if (RegEx != false && MaxLength != false) {
            $('#divCompanionAdd_' + 3 + '_' + 5).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="Accompagnatori_3__DatiAddizionaliAccompagnatore_5___data" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[5]._data" type="date" value="" />'
            );
        } else if (RegEx != false && MaxLength == false) {
            $('#divCompanionAdd_' + 3 + '_' + 5).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="Accompagnatori_3__DatiAddizionaliAccompagnatore_5___data" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[5]._data" type="date" value="" />'
            );
        } else if (RegEx == false && MaxLength != false) {
            $('#divCompanionAdd_' + 3 + '_' + 5).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="Accompagnatori_3__DatiAddizionaliAccompagnatore_5___data" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[5]._data" type="date" value="" />'
            );
        } else if (RegEx == false && MaxLength == false) {
            $('#divCompanionAdd_' + 3 + '_' + 5).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="Accompagnatori_3__DatiAddizionaliAccompagnatore_5___data" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[5]._data" type="date" value="" />'
            );
        }
    }
    if (tipodatoAddizionale == 3) {
        $('#divCompanionAdd_' + 3 + '_' + 5).append($('<select/>', {
            id: "ddlsAcc_3" + '_5',
            'data-index': 5,
            onchange: "ControloSelect(this)"
        }));
        $('#ddlsAcc_3' + '_5').append($('<option/>', {
            value: 0,
            text: " "
        }));
        $('#ifMultiple').append(
            '<input data-val="true" data-val-number="Il campo _idSelezionato deve essere un numero." data-val-required="The _idSelezionato field is required." id="hiddenSelezionatoAcc_3_5" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[5]._idSelezionato" type="hidden" value="0" />'
        );
        getDropDownListsValues($('#hiddenIdDatoADDAcc_' + 5).val(), $('#ddlsAcc_3' + '_5'), 0);
    }

    $('#divCompanionAdd_' + 3 + '_' + 5).append(
        '<input data-val="true" data-val-required="The _Obbligatorio field is required." id="Accompagnatori_3__DatiAddizionaliAccompagnatore_5___Obbligatorio" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[5]._Obbligatorio" type="hidden" value="False" />'
    );

    $('#divCompanionAdd_' + 3 + '_' + 5).append(
        '<div><p><span class="field-validation-valid" data-valmsg-for="addizionale_3_5" data-valmsg-replace="true" style="color:red"></span></p> <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_3_5" data-valmsg-replace="true" style="color:red"></span> </p></div>'
    );


    var tipodatoAddizionale = $('#hiddenCodDatoAddAcc_' + 6).val();
    RegEx = true;
    MaxLength = false;
    if (tipodatoAddizionale == 2) {
        if (RegEx == false && MaxLength == false) {
            $('#divCompanionAdd_' + 3 + '_' + 6).append(
                '<input id="Accompagnatori_3__DatiAddizionaliAccompagnatore_6___testo" maxlength="100" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[6]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />'
            );
        } else if (RegEx == false && MaxLength != false) {
            $('#divCompanionAdd_' + 3 + '_' + 6).append(
                '<input id="Accompagnatori_3__DatiAddizionaliAccompagnatore_6___testo" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[6]._testo" onchange="ControlloTesto(this)" pattern="" type="text" value="" />'
            );
        } else if (RegEx != false && MaxLength == false) {
            $('#divCompanionAdd_' + 3 + '_' + 6).append(
                '<input id="Accompagnatori_3__DatiAddizionaliAccompagnatore_6___testo" maxlength="100" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[6]._testo" onchange="ControlloTesto(this)" type="text" value="" />'
            );
        } else if (RegEx != false && MaxLength != false) {
            $('#divCompanionAdd_' + 3 + '_' + 6).append(
                '<input id="Accompagnatori_3__DatiAddizionaliAccompagnatore_6___testo" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[6]._testo" onchange="ControlloTesto(this)" type="text" value="" />'
            );
        }
    }
    if (tipodatoAddizionale == 1) {
        if (RegEx != false && MaxLength != false) {
            $('#divCompanionAdd_' + 3 + '_' + 6).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="Accompagnatori_3__DatiAddizionaliAccompagnatore_6___data" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[6]._data" type="date" value="" />'
            );
        } else if (RegEx != false && MaxLength == false) {
            $('#divCompanionAdd_' + 3 + '_' + 6).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="Accompagnatori_3__DatiAddizionaliAccompagnatore_6___data" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[6]._data" type="date" value="" />'
            );
        } else if (RegEx == false && MaxLength != false) {
            $('#divCompanionAdd_' + 3 + '_' + 6).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="Accompagnatori_3__DatiAddizionaliAccompagnatore_6___data" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[6]._data" type="date" value="" />'
            );
        } else if (RegEx == false && MaxLength == false) {
            $('#divCompanionAdd_' + 3 + '_' + 6).append(
                '<input class="text-box single-line" data-val="true" data-val-date="Il campo _data deve essere una data." id="Accompagnatori_3__DatiAddizionaliAccompagnatore_6___data" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[6]._data" type="date" value="" />'
            );
        }
    }
    if (tipodatoAddizionale == 3) {
        $('#divCompanionAdd_' + 3 + '_' + 6).append($('<select/>', {
            id: "ddlsAcc_3" + '_6',
            'data-index': 6,
            onchange: "ControloSelect(this)"
        }));
        $('#ddlsAcc_3' + '_6').append($('<option/>', {
            value: 0,
            text: " "
        }));
        $('#ifMultiple').append(
            '<input data-val="true" data-val-number="Il campo _idSelezionato deve essere un numero." data-val-required="The _idSelezionato field is required." id="hiddenSelezionatoAcc_3_6" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[6]._idSelezionato" type="hidden" value="0" />'
        );
        getDropDownListsValues($('#hiddenIdDatoADDAcc_' + 6).val(), $('#ddlsAcc_3' + '_6'), 0);
    }

    $('#divCompanionAdd_' + 3 + '_' + 6).append(
        '<input data-val="true" data-val-required="The _Obbligatorio field is required." id="Accompagnatori_3__DatiAddizionaliAccompagnatore_6___Obbligatorio" name="Accompagnatori[3].DatiAddizionaliAccompagnatore[6]._Obbligatorio" type="hidden" value="True" />'
    );

    $('#divCompanionAdd_' + 3 + '_' + 6).append(
        '<div><p><span class="field-validation-valid" data-valmsg-for="addizionale_3_6" data-valmsg-replace="true" style="color:red"></span></p> <p><span class="field-validation-valid" data-valmsg-for="addizionaleRegEx_3_6" data-valmsg-replace="true" style="color:red"></span> </p></div>'
    );

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


    if ($('#ddls_' + 9).val() !== undefined && $('#ddls_' + 9).val() !== '' && $('#ddls_' + 9).val() != 0) {
        let selected = $('#ddls_' + 9).val();
        $('#hiddenSelezionato_' + 9).val(selected);
    }


    if ($('#ddls_' + 10).val() !== undefined && $('#ddls_' + 10).val() !== '' && $('#ddls_' + 10).val() != 0) {
        let selected = $('#ddls_' + 10).val();
        $('#hiddenSelezionato_' + 10).val(selected);
    }


    if ($('#ddlsAcc_0' + '_0').val() !== undefined && $('#ddlsAcc_0' + '_0').val() !== '' && $('#ddlsAcc_0' +
            '_0').val() != 0) {
        let selected = $('#ddlsAcc_0' + '_0').val();
        $('#hiddenSelezionatoAcc_' + 0 + '_0').val(selected);
    }


    if ($('#ddlsAcc_0' + '_1').val() !== undefined && $('#ddlsAcc_0' + '_1').val() !== '' && $('#ddlsAcc_0' +
            '_1').val() != 0) {
        let selected = $('#ddlsAcc_0' + '_1').val();
        $('#hiddenSelezionatoAcc_' + 0 + '_1').val(selected);
    }


    if ($('#ddlsAcc_0' + '_2').val() !== undefined && $('#ddlsAcc_0' + '_2').val() !== '' && $('#ddlsAcc_0' +
            '_2').val() != 0) {
        let selected = $('#ddlsAcc_0' + '_2').val();
        $('#hiddenSelezionatoAcc_' + 0 + '_2').val(selected);
    }


    if ($('#ddlsAcc_0' + '_3').val() !== undefined && $('#ddlsAcc_0' + '_3').val() !== '' && $('#ddlsAcc_0' +
            '_3').val() != 0) {
        let selected = $('#ddlsAcc_0' + '_3').val();
        $('#hiddenSelezionatoAcc_' + 0 + '_3').val(selected);
    }


    if ($('#ddlsAcc_0' + '_4').val() !== undefined && $('#ddlsAcc_0' + '_4').val() !== '' && $('#ddlsAcc_0' +
            '_4').val() != 0) {
        let selected = $('#ddlsAcc_0' + '_4').val();
        $('#hiddenSelezionatoAcc_' + 0 + '_4').val(selected);
    }


    if ($('#ddlsAcc_0' + '_5').val() !== undefined && $('#ddlsAcc_0' + '_5').val() !== '' && $('#ddlsAcc_0' +
            '_5').val() != 0) {
        let selected = $('#ddlsAcc_0' + '_5').val();
        $('#hiddenSelezionatoAcc_' + 0 + '_5').val(selected);
    }


    if ($('#ddlsAcc_0' + '_6').val() !== undefined && $('#ddlsAcc_0' + '_6').val() !== '' && $('#ddlsAcc_0' +
            '_6').val() != 0) {
        let selected = $('#ddlsAcc_0' + '_6').val();
        $('#hiddenSelezionatoAcc_' + 0 + '_6').val(selected);
    }


    if ($('#ddlsAcc_1' + '_0').val() !== undefined && $('#ddlsAcc_1' + '_0').val() !== '' && $('#ddlsAcc_1' +
            '_0').val() != 0) {
        let selected = $('#ddlsAcc_1' + '_0').val();
        $('#hiddenSelezionatoAcc_' + 1 + '_0').val(selected);
    }


    if ($('#ddlsAcc_1' + '_1').val() !== undefined && $('#ddlsAcc_1' + '_1').val() !== '' && $('#ddlsAcc_1' +
            '_1').val() != 0) {
        let selected = $('#ddlsAcc_1' + '_1').val();
        $('#hiddenSelezionatoAcc_' + 1 + '_1').val(selected);
    }


    if ($('#ddlsAcc_1' + '_2').val() !== undefined && $('#ddlsAcc_1' + '_2').val() !== '' && $('#ddlsAcc_1' +
            '_2').val() != 0) {
        let selected = $('#ddlsAcc_1' + '_2').val();
        $('#hiddenSelezionatoAcc_' + 1 + '_2').val(selected);
    }


    if ($('#ddlsAcc_1' + '_3').val() !== undefined && $('#ddlsAcc_1' + '_3').val() !== '' && $('#ddlsAcc_1' +
            '_3').val() != 0) {
        let selected = $('#ddlsAcc_1' + '_3').val();
        $('#hiddenSelezionatoAcc_' + 1 + '_3').val(selected);
    }


    if ($('#ddlsAcc_1' + '_4').val() !== undefined && $('#ddlsAcc_1' + '_4').val() !== '' && $('#ddlsAcc_1' +
            '_4').val() != 0) {
        let selected = $('#ddlsAcc_1' + '_4').val();
        $('#hiddenSelezionatoAcc_' + 1 + '_4').val(selected);
    }


    if ($('#ddlsAcc_1' + '_5').val() !== undefined && $('#ddlsAcc_1' + '_5').val() !== '' && $('#ddlsAcc_1' +
            '_5').val() != 0) {
        let selected = $('#ddlsAcc_1' + '_5').val();
        $('#hiddenSelezionatoAcc_' + 1 + '_5').val(selected);
    }


    if ($('#ddlsAcc_1' + '_6').val() !== undefined && $('#ddlsAcc_1' + '_6').val() !== '' && $('#ddlsAcc_1' +
            '_6').val() != 0) {
        let selected = $('#ddlsAcc_1' + '_6').val();
        $('#hiddenSelezionatoAcc_' + 1 + '_6').val(selected);
    }


    if ($('#ddlsAcc_2' + '_0').val() !== undefined && $('#ddlsAcc_2' + '_0').val() !== '' && $('#ddlsAcc_2' +
            '_0').val() != 0) {
        let selected = $('#ddlsAcc_2' + '_0').val();
        $('#hiddenSelezionatoAcc_' + 2 + '_0').val(selected);
    }


    if ($('#ddlsAcc_2' + '_1').val() !== undefined && $('#ddlsAcc_2' + '_1').val() !== '' && $('#ddlsAcc_2' +
            '_1').val() != 0) {
        let selected = $('#ddlsAcc_2' + '_1').val();
        $('#hiddenSelezionatoAcc_' + 2 + '_1').val(selected);
    }


    if ($('#ddlsAcc_2' + '_2').val() !== undefined && $('#ddlsAcc_2' + '_2').val() !== '' && $('#ddlsAcc_2' +
            '_2').val() != 0) {
        let selected = $('#ddlsAcc_2' + '_2').val();
        $('#hiddenSelezionatoAcc_' + 2 + '_2').val(selected);
    }


    if ($('#ddlsAcc_2' + '_3').val() !== undefined && $('#ddlsAcc_2' + '_3').val() !== '' && $('#ddlsAcc_2' +
            '_3').val() != 0) {
        let selected = $('#ddlsAcc_2' + '_3').val();
        $('#hiddenSelezionatoAcc_' + 2 + '_3').val(selected);
    }


    if ($('#ddlsAcc_2' + '_4').val() !== undefined && $('#ddlsAcc_2' + '_4').val() !== '' && $('#ddlsAcc_2' +
            '_4').val() != 0) {
        let selected = $('#ddlsAcc_2' + '_4').val();
        $('#hiddenSelezionatoAcc_' + 2 + '_4').val(selected);
    }


    if ($('#ddlsAcc_2' + '_5').val() !== undefined && $('#ddlsAcc_2' + '_5').val() !== '' && $('#ddlsAcc_2' +
            '_5').val() != 0) {
        let selected = $('#ddlsAcc_2' + '_5').val();
        $('#hiddenSelezionatoAcc_' + 2 + '_5').val(selected);
    }


    if ($('#ddlsAcc_2' + '_6').val() !== undefined && $('#ddlsAcc_2' + '_6').val() !== '' && $('#ddlsAcc_2' +
            '_6').val() != 0) {
        let selected = $('#ddlsAcc_2' + '_6').val();
        $('#hiddenSelezionatoAcc_' + 2 + '_6').val(selected);
    }


    if ($('#ddlsAcc_3' + '_0').val() !== undefined && $('#ddlsAcc_3' + '_0').val() !== '' && $('#ddlsAcc_3' +
            '_0').val() != 0) {
        let selected = $('#ddlsAcc_3' + '_0').val();
        $('#hiddenSelezionatoAcc_' + 3 + '_0').val(selected);
    }


    if ($('#ddlsAcc_3' + '_1').val() !== undefined && $('#ddlsAcc_3' + '_1').val() !== '' && $('#ddlsAcc_3' +
            '_1').val() != 0) {
        let selected = $('#ddlsAcc_3' + '_1').val();
        $('#hiddenSelezionatoAcc_' + 3 + '_1').val(selected);
    }


    if ($('#ddlsAcc_3' + '_2').val() !== undefined && $('#ddlsAcc_3' + '_2').val() !== '' && $('#ddlsAcc_3' +
            '_2').val() != 0) {
        let selected = $('#ddlsAcc_3' + '_2').val();
        $('#hiddenSelezionatoAcc_' + 3 + '_2').val(selected);
    }


    if ($('#ddlsAcc_3' + '_3').val() !== undefined && $('#ddlsAcc_3' + '_3').val() !== '' && $('#ddlsAcc_3' +
            '_3').val() != 0) {
        let selected = $('#ddlsAcc_3' + '_3').val();
        $('#hiddenSelezionatoAcc_' + 3 + '_3').val(selected);
    }


    if ($('#ddlsAcc_3' + '_4').val() !== undefined && $('#ddlsAcc_3' + '_4').val() !== '' && $('#ddlsAcc_3' +
            '_4').val() != 0) {
        let selected = $('#ddlsAcc_3' + '_4').val();
        $('#hiddenSelezionatoAcc_' + 3 + '_4').val(selected);
    }


    if ($('#ddlsAcc_3' + '_5').val() !== undefined && $('#ddlsAcc_3' + '_5').val() !== '' && $('#ddlsAcc_3' +
            '_5').val() != 0) {
        let selected = $('#ddlsAcc_3' + '_5').val();
        $('#hiddenSelezionatoAcc_' + 3 + '_5').val(selected);
    }


    if ($('#ddlsAcc_3' + '_6').val() !== undefined && $('#ddlsAcc_3' + '_6').val() !== '' && $('#ddlsAcc_3' +
            '_6').val() != 0) {
        let selected = $('#ddlsAcc_3' + '_6').val();
        $('#hiddenSelezionatoAcc_' + 3 + '_6').val(selected);
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

        document.getElementById("IdOtpSent").style.display = "none";

        if (!CheckMaxFileSize()) {
            event.preventDefault();
            return;
        }

        saveDdlValue();

        if (window.confirm("Si vuole confermare questo appuntamento? \n\n" + $(
                '#divRiepilogoPrenotazione').text())) {

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

function sendOTP() {
    document.getElementById("IdOtpSent").style.display = "none";
    document.getElementById("IdOtpInvalid").style.display = "none";
    $('#otp-send').prop('disabled', true);
    $('#otp-loader').fadeIn(200, function () {
        var xmlhttp;
        if (window.XMLHttpRequest) {
            xmlhttp = new XMLHttpRequest();
        } else {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                $('#otp-loader').fadeOut(200, function () {
                    $('#otp-send').prop('disabled', false);
                    if (xmlhttp.responseText == '"SENT"') {
                        document.getElementById("IdOtpSent").style.display = "block";
                    } else {
                        document.getElementById("IdOtpInvalid").style.display = "block";
                    }
                });
            }
        }
        xmlhttp.open("GET", '/BookingCalendar/GenerateOTP', true);
        xmlhttp.send();
    });
}