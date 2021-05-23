function init_textarea() {
    $("#taSchema").load("./json/01_schema.json");
    $("#taData").load("./json/01_data.json");
}

function load_example(example) {
    $("#taSchema").load(`./json/${example}_schema.json`);
    $("#taData").load(`./json/${example}_data.json`);
}

document.getElementById("example-select").addEventListener("change", function() {
    var example = document.getElementById("example-select").value;
    load_example(example);
    testSchema();
});


function main() {
    init_textarea();
}

window.onload = main();