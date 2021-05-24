var tsdeb = _.debounce(testSchema, 250);

function load_example(example) {
    $.get( `./json/${example}_data.json`, function( data ) {
        $("#taData").val(data);
        tsdeb();
    }, "text");
    $.get( `./json/${example}_schema.json`, function( data ) {
        $("#taSchema").val(data);
        tsdeb();
    }, "text");
}

document.getElementById("example-select").addEventListener("change", function() {
    var example = document.getElementById("example-select").value;
    load_example(example);
});


function main() {
    load_example("01");
}

window.onload = main();
