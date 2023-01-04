//Variable Check
//v1.1.1
function generateVCWindow() {
    var debugo = document.createElement("div");
    document.body.appendChild(debugo);
    debugo.style.position = "absolute";
    debugo.style.left = "5px";
    debugo.style.top = "5px";
    debugo.style.border = "2px solid white";
    debugo.style.backgroundColor = "rgba(127, 0, 127, 0.5)";
    debugo.style.width = "200px";
    debugo.style.height = "200px";
    debugo.style.fontFamily = "monospace";
    debugo.style.color = "white";
    debugo.style.fontSize = "15px";
    debugo.id = "debugWindow";
}
var Variables = [];
function initializeVariableCount(count) {
    generateVCWindow();
    for (var i = 0; i < count; i++) {
        var whe = document.createElement("div");
        document.getElementById("debugWindow").appendChild(whe);
        whe.id = "variable" + String(i);
        Variables.push("");
    }
}
function updateVariables() {
    for (var i = 0; i < Variables.length; i++) {
        document.getElementById("variable" + String(i)).innerHTML = Variables[i];
    }
}
var qzx = setInterval(updateVariables, 0);
function setWindowSize(wid, hei) {
    debugo.style.width = String(wid) + "px";
    debugo.style.height = String(hei) + "px";
}