function load_example(example) {
    $.get( `./json/${example}_data.json`, function( data ) {
        $("#taData").val(data);
    }, "text");
    $.get( `./json/${example}_schema.json`, function( data ) {
        $("#taSchema").val(data);
    }, "text");
}

document.getElementById("example-select").addEventListener("change", function() {
    var example = document.getElementById("example-select").value;
    load_example(example);
    testSchema();
});


function main() {
    load_example("01");
}

window.onload = main();