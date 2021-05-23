const Ajv = require("ajv");
const ajv = new Ajv({allErrors: true});

global.testSchema = function() {
    try {
        var schema = JSON.parse($("#taSchema").val())
    } catch (error) {
        console.error(error);
        $("#out").text("Błąd w składni schemy: " + error);
        return;
    }
    try {
        var data = JSON.parse($("#taData").val());
    } catch (error) {
        console.error(error);
        $("#out").text("Błąd w składni danych: " + error);
        return;
    }


    try {
        var valid = ajv.validate(schema, data);
    } catch (error) {
        console.error(error);
        $("#out").text("Błąd schemy: " + error);
        return;
    }

    if (valid) {
        $("#out").text("Dane prawidłowe");
    }
    else {
        $("#out").text("Dane nieprawidłowe: " + ajv.errorsText(valid.errors));
    }
}
