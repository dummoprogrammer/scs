//thanks stack overflow wizards :-)
function exportWorldFile() {
    var txt = document.getElementById("world").innerHTML;
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(JSON.stringify({
        version: 100,
        versionType: 1,
        versionText: "1.0.0",
        name: worldName,
        date: new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString(),
        html: txt,
        javascript: getGlobalJavascriptData()
    })));
    element.setAttribute('download', worldName + ".scsw");

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}
function importWorldFile(elm) {
    new Response(elm.files[0]).json().then(json => {
        displayWorldFile(json);
    }, err => {
        
    });
}
window.addEventListener('wheel', function(e) {
    var direction = e.deltaY;
    if (direction > 0) {
        onScroll(up);
    } else {
        onScroll(down);
    }
});
document.body.onmousedown = function (e) {
    var isRightMB;
    e = e || window.event;

    if ("which" in e)  // Gecko (Firefox), WebKit (Safari/Chrome) & Opera
        isRightMB = e.which == 3; 
    else if ("button" in e)  // IE, Opera 
        isRightMB = e.button == 2; 

    if (isRightMB) {
        RightClickHeld = true;
        startRightClick();
    }
}
document.body.onmouseup = function (e) {
    var isRightMB;
    e = e || window.event;

    if ("which" in e)  // Gecko (Firefox), WebKit (Safari/Chrome) & Opera
        isRightMB = e.which == 3; 
    else if ("button" in e)  // IE, Opera 
        isRightMB = e.button == 2; 

    if (isRightMB) {
        RightClickHeld = false;
        stopRightClick();
    }
}

function getGlobalJavascriptData() {
    var global_javascript_data = "";
    var global_javascript_obj = {
        startX: startX,
        startY: startY,
        bufferX: bufferX,
        bufferY: bufferY,
        creeperLocation: creeperLocation,
        creeperCount: creeperCount,
        characterLocation: characterLocation,
        characterBox: characterBox,
        creeperBoxes: creeperBoxes,
        usedCreepers: usedCreepers,
        objectUnderCharacter: objectUnderCharacter,
        objectIDUnderCharacter: objectIDUnderCharacter,
        objectUnderCreeper: objectUnderCreeper,
        objectIDUnderCreeper: objectIDUnderCreeper,
        characterLadderID: characterLadderID,
        previousAirFrame: previousAirFrame,
        previousAirFrameBottom: previousAirFrameBottom,
        previousAirFrameTemplate: previousAirFrameTemplate,
        previousFanFrame: previousFanFrame,
        characterInFan: characterInFan,
        creeperInFan: creeperInFan,
        characterVector: characterVector,
        characterExplosionVector: characterExplosionVector,
        creeperVector: creeperVector,
        creeperExplosionVector: creeperExplosionVector,
        creeperLeafBlowerVector: creeperLeafBlowerVector,
        characterWearables: characterWearables,
        ladderFall: ladderFall,
        usedLadders: usedLadders,
        characterVert: characterVert,
        characterLadderVert: characterLadderVert,
        creeperVert: creeperVert,
        creeperLadderVert: creeperLadderVert,
        creeperRange: creeperRange,
        creeperRangeTemp: creeperRangeTemp,
        xLeftOverride: xLeftOverride,
        xRightOverride: xRightOverride,
        characterOnGround: characterOnGround,
        creeperOnGround: creeperOnGround,
        characterScreenOffset: characterScreenOffset,
        jumpKeyHeld: jumpKeyHeld,
        signCount: signCount,
        arrowCount: arrowCount,
        total: total,
        characterMoney: characterMoney,
        characterInventory: characterInventory,
        inventoryShown: inventoryShown,
        standInventoryShown: standInventoryShown,
        collectiblesPanelShown: collectiblesPanelShown,
        worldExportPanelShown: worldExportPanelShown,
        generateWorldPanelShown: generateWorldPanelShown,
        aboutScreenShown: aboutScreenShown,
        globalColor: globalColor,
        movementTimeouts: movementTimeouts,
        blockElements: blockElements,
        blockBoundingBoxes: blockBoundingBoxes,
        ladderBoxes: ladderBoxes,
        fallCTimeouts: fallCTimeouts,
        crateCount: crateCount,
        crateLocation: crateLocation,
        crateBlockRelation: crateBlockRelation,
        usedCrates: usedCrates,
        tntLocation: tntLocation,
        tntx10Location: tntx10Location,
        tntx100Location: tntx100Location,
        tntx1000Location: tntx1000Location,
        tnts: tnts,
        fanLocation: fanLocation,
        fanBoxes: fanBoxes,
        fanBlockRelation: fanBlockRelation,
        usedFans: usedFans,
        junpOrNot: junpOrNot,
        junps: junps,
        ladderCount: ladderCount,
        standCount: standCount,
        fanCount: fanCount,
        tntCount: tntCount,
        tntx10Count: tntx10Count,
        tntx100Count: tntx100Count,
        tntx1000Count: tntx1000Count,
        characterOnLadder: characterOnLadder,
        creeperOnLadder: creeperOnLadder,
        creeperSavedLadderID: creeperSavedLadderID,
        characterLadderRange: characterLadderRange,
        creeperLadderCheck: creeperLadderCheck,
        creeperLadderState: creeperLadderState,
        creeperLadderReset: creeperLadderReset,
        creeperFanStack: creeperFanStack,
        savedBlockY: savedBlockY,
        savedLadderY: savedLadderY,
        savedSignY: savedSignY,
        usedSigns: usedSigns,
        savedArrowY: savedArrowY,
        usedArrows: usedArrows,
        savedStandY: savedStandY,
        standItemIDs: standItemIDs,
        standInventory: standInventory,
        standInventoryIDs: standInventoryIDs,
        standPrices: standPrices,
        standDirection: standDirection,
        crateInventorys: crateInventorys,
        usedStands: usedStands,
        creeperManning: creeperManning,
        standManning: standManning,
        currentBuyAmount: currentBuyAmount,
        openedStandID: openedStandID,
        selectedPrice: selectedPrice,
        selectedItemID: selectedItemID,
        subtotal: subtotal,
        selectedCharacterID: selectedCharacterID,
        characterStandSquareBox: characterStandSquareBox,
        heldItemDirectionOffset: heldItemDirectionOffset,
        sufficientFunds: sufficientFunds,
        nullCheck: nullCheck,
        priorLadderCheck: priorLadderCheck,
        priorVertCheck: priorVertCheck,
        priorPriorCheck: priorPriorCheck,
        standBoxes: standBoxes,
        standSquareBoxes: standSquareBoxes,
        preStandCheck: preStandCheck,
        standCheck: standCheck,
        elementlocation: elementlocation,
        placeObject: placeObject,
        mouseX: mouseX,
        mouseY: mouseY,
        fanFrame: fanFrame,
        dotTick: dotTick,
        dotFrame: dotFrame,
        savedTNTBlocks: savedTNTBlocks,
        saved10xTNTBlocks: saved10xTNTBlocks,
        saved100xTNTBlocks: saved100xTNTBlocks,
        saved1000xTNTBlocks: saved1000xTNTBlocks,
        runServerTick: runServerTick,
        explosionFrameCount: explosionFrameCount,
        explosionCount: explosionCount,
        bombs: bombs,
        bombCount: bombCount,
        weaponOffsetX: weaponOffsetX,
        weaponOffsetY: weaponOffsetY,
        currentHeldType: currentHeldType,
        characterFaceLauncher: characterFaceLauncher,
        landmarkPos: landmarkPos,
        tennisBalls: tennisBalls,
        tennisBallCount: tennisBallCount,
        inventoryFilter: inventoryFilter,
        ammoID: ammoID,
        elementConsoleOpen: elementConsoleOpen,
        selectedElementList: selectedElementList,
        selectedElementListDupe: selectedElementListDupe,
        tracked: tracked,
        trackedLength: trackedLength,
        ShiftHeld: ShiftHeld,
        CtrlHeld: CtrlHeld,
        RightClickHeld: RightClickHeld,
        floorMoney: floorMoney,
        floorMoneyCount: floorMoneyCount,
        floorItems: floorItems,
        floorItemCount: floorItemCount,
        moneyBuffer: moneyBuffer,
        moneyBufferMid: moneyBufferMid,
        crateInventoryShown: crateInventoryShown,
        openedCrateID: openedCrateID,
        crateFullness: crateFullness,
        transferAmount: transferAmount,
        xystate: xystate,
        savedXYGuide: savedXYGuide,
        savedXYGuide2: savedXYGuide2,
        worldWidth: worldWidth,
        universalScale: universalScale,
        currentLeafDots: currentLeafDots,
        blocksCheckOnceoff: blocksCheckOnceoff,
        initialHTMLOffset: initialHTMLOffset,
        characterEffects: characterEffects,
        speedFactor: speedFactor,
        jumpAddend: jumpAddend,
        trampolineRelation: trampolineRelation,
        usedTramps: usedTramps,
        standLocation: standLocation,
        ladderDismount: ladderDismount,
        lockCharacter: lockCharacter,
        characterOpacity: characterOpacity,
        scrollLock: scrollLock,
        inTitleScreen: inTitleScreen,
        inWorld: inWorld,
        worldName: worldName,
        smallMoneyBombCount: smallMoneyBombCount,
        bigMoneyBombCount: bigMoneyBombCount,
        dictionaryOpen: dictionaryOpen,
        musicVolume: musicVolume,
        music: music,
        musicSilence: musicSilence,
        previousSong: previousSong,
        creeperVisibility: creeperVisibility,
        totalUsedCreepers: totalUsedCreepers,
        blockTopLookup: blockTopLookup,
        doSpawning: doSpawning,
        blockVisibility: blockVisibility,
        cap: cap,
    }
    var global_javascript_keys = Object.keys(global_javascript_obj);
    var global_javascript_values = Object.values(global_javascript_obj);
    for (var i = 0; i < global_javascript_keys.length; i++) {
        global_javascript_data += global_javascript_keys[i] + " = " + JSON.stringify(global_javascript_values[i]) + ";";
    }
    return global_javascript_data;
}

var d_d;
function displayWorldFile(d) {
    d_d = d;
    document.getElementById("worldNameText").innerHTML = d.name;
    document.getElementById("worldDateText").innerHTML = d.date;
    document.getElementById("worldVersionText").innerHTML = "Version " + d.versionText;
    document.getElementById("worldPreviewScreen").style.display = "block";
    document.getElementById("fullScreenOverlay").style.display = "inline";
}
function checkVersionType(d) {
    d_d = d;
    if (d.versionType !== versionType) {
        document.getElementById("versionTypeWarning").style.display = "block";
    } else {
        checkVersion(d_d);
    }
}
function checkVersion(d) {
    if (d.version < version) {
        document.getElementById("versionLessWarning").style.display = "block";
    } else if (d.version > version) {
        document.getElementById("versionMoreWarning").style.display = "block";
    } else {
        impW(d_d);
    }
}
function impW(d) {
    document.getElementById("worldImportOverlay").style.display = "block";
    document.getElementById("world").innerHTML = d.html;
    eval(d.javascript);
    document.getElementById("worldImportOverlay").style.display = "none";
    if (!runServerTick) {
        runServerTick = true;
        document.getElementById("pauseMenu").style.display = "none";
    }
    for (var i = 0; i < creeperCount; i++) {
        if (creeperManning[i] === false) {
            jumbC(i);
            setTimeout(cycle2, Math.floor(Math.random() * 1000), i);
        }
    }
    inTitleScreen = false;
    inWorld = true;
    refreshCollectibles();
}
function impTitle(d) {
    document.getElementById("worldImportOverlay").style.display = "block";
    document.getElementById("world").innerHTML = d.html;
    eval(d.javascript);
    document.getElementById("worldImportOverlay").style.display = "none";
    if (!runServerTick) {
        runServerTick = true;
        document.getElementById("pauseMenu").style.display = "none";
    }
    for (var i = 0; i < creeperCount; i++) {
        if (creeperManning[i] === false) {
            jumbC(i);
            setTimeout(cycle2, Math.floor(Math.random() * 1000), i);
        }
    }
    refreshCollectibles();
}
function generateWorld(width, iterations) {
    worldName = document.getElementById("worldNameInput").value;
    document.getElementById("fullScreenOverlay").style.display = "none";
    if (generateWorldPanelShown) {
        toggleGenerateWorldPanel();
    }
    resetBoi();
    worldWidth = width;
    var gen_left = new randomGenerator(left, 100);
    var gen_right = new randomGenerator(right, 100);
    gen_left.generate(iterations);
    gen_right.generate(iterations);
    inTitleScreen = false;
    inWorld = true;
    document.getElementById("characterHUD").style.display = "block";
    doSpawning = iterations !== 0;
    try {
        document.getElementById("block0").style.width = String(worldWidth - 10) + "px";
        blockTopLookup[0] = {y: 100, x: 0, range: worldWidth};
    } finally {

    }
}

function hasASCII(txt) {
    var txtb = String(txt).split("");
    var troob = false;
    for (var i = 0; i < txtb.length; i++) {
        if (!(txtb[i] == "0" || txtb[i] == "1" || txtb[i] == "2" || txtb[i] == "3" || txtb[i] == "4" || txtb[i] == "5" || txtb[i] == "6" || txtb[i] == "7" || txtb[i] == "8" || txtb[i] == "9")) {
            troob = true;
        }
    }
    return troob;
}

function lookAround(id) {
    var facex = Math.floor(Math.random() * 10) + 1;
    var facey = Math.floor(Math.random() * 9) + 1;
    document.getElementById("creeper" + String(id) + "face").style.left = String(facex * 5) + "px";
    document.getElementById("creeper" + String(id) + "face").style.bottom = String((facey * 5) + 160) + "px";
}
function moveToCoordinates(x, y, id, duration) {
    startX[id] = creeperLocation[id][0];
    startY[id] = creeperLocation[id][1];
    bufferX[id] = creeperLocation[id][0];
    bufferY[id] = creeperLocation[id][1];
    lookAtDestination(startX[id], startY[id], x, y, id);
    movementTimeouts[id] = setInterval(moveFrame, (1000 / 60), x, y, id, duration);
    setTimeout(clear, (duration * 1000), movementTimeouts[id], x, y, id);
}
function moveFrame(x, y, id, duration) {
    bufferX[id] += (x - startX[id]) / (duration * 60);
    bufferY[id] += (y - startY[id]) / (duration * 60);
    document.getElementById("creeper" + String(id)).style.left = String(bufferX[id]) + "px";
    document.getElementById("creeper" + String(id)).style.bottom = String(bufferY[id]) + "px";
}
function clear(enter, x, y, id) {
    clearInterval(enter);
    document.getElementById("creeper" + String(id)).style.left = String(x) + "px";
    document.getElementById("creeper" + String(id)).style.bottom = String(y) + "px";
    creeperLocation[id][0] = x;
    creeperLocation[id][1] = y;
}

function elementDisplayState(elem, state) {
    if (state) {
        document.getElementById(elem).style.display = "inline";
    } else {
        document.getElementById(elem).style.display = "none";
    }
}
function getStyleColor(array) {
    return "rgba(" + String(array[0]) + ", " + String(array[1]) + ", " + String(array[2]) + ", " + String(array[3]) + ")";
}
function standX(id) {
    var ploof = document.getElementById("stand" + String(id)).style.left.split("");
    var plwhe = ploof.splice(ploof.length - 2, 2);
    var plstr = ploof.join("");
    return (parseInt(plstr) + 110);
}
function getMoneyString(num) {
    var doll = Math.floor(num / 1000);
    var cent = num % 1000;
    var str = "$" + String(doll);
    if (cent < 10) {
        str += ".00" + String(cent);
    } else if (cent < 100) {
        str += ".0" + String(cent);
    } else {
        str += "." + String(cent);
    }
    return str;
}
function removePXfromStyle(str) {
    var eef = str.split("");
    var ees = eef.splice(eef.length - 2, 2);
    return parseFloat(eef.join(""));
}
var globalTags = [
    "food",
    "explosive",
    "placeable",
    "fun",
    "ammo"
]

function addEffect(effectID, length) {
    globalEffects[effectID].add();
    var sund = new Audio(globalEffects[effectID].sound);
    sund.volume = 0.5;
    sund.play();
    if (effectTimeouts[effectID] !== 0) {
        clearTimeout(effectTimeouts[effectID]);
    }
    effectTimeouts[effectID] = setTimeout(removeEffect, length, effectID);
}

var effectTimeouts = [];
for (var i = 0; i < globalEffects.length; i++) {
    effectTimeouts.push(0);
}

function removeEffect(effectID) {
    globalEffects[effectID].remove();
    var sund = new Audio("assets/audio/generic/degrade.wav");
    sund.volume = 0.5;
    sund.play();
    effectTimeouts[effectID] = 0;
}

function flood(file) {
    document.getElementById("creeperFloodImage").style.animation = "none";
    document.getElementById("creeperFloodImage").src = file;
    document.getElementById("creeperFloodImage").style.animation = "flood 1s 1";
    setTimeout(function() {
        document.getElementById("creeperFloodImage").style.animation = "none";
    }, 1000);
}

function smallBomb(cX, cY, frame, bombIdentifier, lastPos) {
    if (frame == 0) {
        fivb = document.createElement("img");
        fivb.id = "smallMoneyBomb" + String(smallMoneyBombCount);
        document.getElementById("misc").append(fivb);
        fivb.style.width = "64px";
        fivb.style.height = "64px";
        fivb.src = "assets/items/money_bomb.png";
        fivb.style.position = "absolute";
        fivb.style.left = String(cX + 16) + "px";
        fivb.style.bottom = String(cY + 256 + (window.innerHeight - (window.innerHeight / universalScale))) + "px";
        smallMoneyBombCount++;

        setTimeout(smallBomb, (1000 / 60), cX, cY, 1, smallMoneyBombCount - 1, cY + 256);
    } else if (frame == 22) {
        document.getElementById("smallMoneyBomb" + String(bombIdentifier)).remove();
        sob = new Audio("assets/audio/generic/explosion2.wav");
        sob.volume = 0.5;
        sob.play();
        explodeMoneyStack(setMoneyList(Math.floor(Math.random() * 99001) + 1000, true), cX + 40, cY + 500, 3);
    } else {
        document.getElementById("smallMoneyBomb" + String(bombIdentifier)).style.bottom = String(lastPos + 22 - frame + (window.innerHeight - (window.innerHeight / universalScale))) + "px";
        setTimeout(smallBomb, (1000 / 60), cX, cY, frame + 1, bombIdentifier, lastPos + 22 - frame);
    }
}

function bigBomb(cX, cY, frame, bombIdentifier, lastPos) {
    if (frame == 0) {
        fivb = document.createElement("img");
        fivb.id = "bigMoneyBomb" + String(bigMoneyBombCount);
        document.getElementById("misc").append(fivb);
        fivb.style.width = "64px";
        fivb.style.height = "64px";
        fivb.src = "assets/items/big_money_bomb.png";
        fivb.style.position = "absolute";
        fivb.style.left = String(cX + 16) + "px";
        fivb.style.bottom = String(cY + 256 + (window.innerHeight - (window.innerHeight / universalScale))) + "px";
        bigMoneyBombCount++;

        setTimeout(bigBomb, (1000 / 60), cX, cY, 1, bigMoneyBombCount - 1, cY + 256);
    } else if (frame == 22) {
        document.getElementById("bigMoneyBomb" + String(bombIdentifier)).remove();
        sob = new Audio("assets/audio/generic/explosion.wav");
        sob.volume = 0.5;
        sob.play();
        explodeMoneyStack(setMoneyList(Math.floor(Math.random() * 900001) + 100000, true), characterLocation[0] + 40, characterLocation[1] + 507, 3);
    } else {
        document.getElementById("bigMoneyBomb" + String(bombIdentifier)).style.bottom = String(lastPos + 22 - frame + (window.innerHeight - (window.innerHeight / universalScale))) + "px";
        setTimeout(bigBomb, (1000 / 60), cX, cY, frame + 1, bombIdentifier, lastPos + 22 - frame);
    }
}

function toggleCollectiblesPanel() {
    collectiblesPanelShown = !collectiblesPanelShown;
    if (collectiblesPanelShown) {
        document.getElementById("collectiblesPanel").style.display = "block";
        document.getElementById("worldImportWarning").style.display = "none";
        if (worldExportPanelShown) {
            toggleWorldExportPanel();
        }
    } else {
        document.getElementById("collectiblesPanel").style.display = "none";
    }
}
function toggleWorldExportPanel() {
    worldExportPanelShown = !worldExportPanelShown;
    if (worldExportPanelShown) {
        document.getElementById("worldExportPanel").style.display = "block";
        document.getElementById("worldImportWarning").style.display = "none";
        if (collectiblesPanelShown) {
            toggleCollectiblesPanel();
        }
    } else {
        document.getElementById("worldExportPanel").style.display = "none";
    }
}
function toggleWorldImportWarning() {
    if (document.getElementById("worldImportWarning").style.display == "none") {
        document.getElementById("worldImportWarning").style.display = "block";
        if (worldExportPanelShown) {
            toggleWorldExportPanel();
        }
        if (collectiblesPanelShown) {
            toggleCollectiblesPanel();
        }
    } else {
        document.getElementById("worldImportWarning").style.display = "none";
    }
}
function toggleGenerateWorldPanel() {
    generateWorldPanelShown = !generateWorldPanelShown;
    if (generateWorldPanelShown) {
        document.getElementById("generateWorldPanel").style.display = "block";
        document.getElementById("worldImportWarning").style.display = "none";
        document.getElementById("fullScreenOverlay").style.display = "inline";
        if (worldExportPanelShown) {
            toggleWorldExportPanel();
        }
        if (collectiblesPanelShown) {
            toggleCollectiblesPanel();
        }
    } else {
        document.getElementById("generateWorldPanel").style.display = "none";
        document.getElementById("fullScreenOverlay").style.display = "none";
    }
}
function aboutScreen() {
    aboutScreenShown = !aboutScreenShown;
    if (aboutScreenShown) {
        document.getElementById("aboutScreen").style.display = "block";
    } else {
        document.getElementById("aboutScreen").style.display = "none";
    }
}
function notifyIterations() {
    ifIterationBoxShown = !ifIterationBoxShown;
    if (ifIterationBoxShown) {
        document.getElementById("ifIterationBox").style.filter = "contrast(100%)";
        document.getElementById("ifIterationBox").style.userSelect = "auto";
        document.getElementById("iterationInput").style.userSelect = "auto";
    } else {
        document.getElementById("ifIterationBox").style.filter = "contrast(10%)";
        document.getElementById("ifIterationBox").style.userSelect = "none";
        document.getElementById("iterationInput").style.userSelect = "none";
    }
}
var ifIterationBoxShown = false;
function checkPixelWidth() {
    if (document.activeElement !== document.getElementById("worldWidthInput") && (hasASCII(document.getElementById("worldWidthInput").value) || parseInt(document.getElementById("worldWidthInput").value) < 1400)) {
        document.getElementById("worldWidthInput").value = "1440";
    }
}
var thig52 = setInterval(checkPixelWidth, 0);

var characterCollectibles = [];
var ccplc = [];
var newrow = "";

function refreshCollectibles() {
    document.getElementById("collection").innerHTML = "";
    for (var i = 0; i < Object.values(collectibles).length; i++) {
        ccplc = [];
        newrow = "<div id='collection" + String(i) + "row' class='collectionRow'>";
        for (var j = 0; j < Object.values(collectibles)[i].variants; j++) {
            ccplc.push(0);
            newrow += "<div class='collectibleModule'><img id='" + String(i) + "_" + String(j) + "c_img' class='collectibleImage' src='" + globalItems[parseInt(Object.keys(collectibles)[i].split("_")[1])].folder + String(j) + ".png'><br><div class='collectibleTitleSpan'>" + Object.values(collectibles)[i].names[j] + "</div><br><div id='" + String(i) + "_" + String(j) + "c_am' class='collectibleAmountSpan'>x0</div></div>";
        }
        newrow += "</div>";
        document.getElementById("collection").innerHTML += newrow;
        characterCollectibles.push(ccplc);
    }
}
refreshCollectibles();

function updateCharacterCollectibles() {
    for (var i = 0; i < Object.values(collectibles).length; i++) {
        for (var j = 0; j < Object.values(collectibles)[i].variants; j++) {
            if (characterCollectibles[i][j] == 0) {
                document.getElementById(String(i) + "_" + String(j) + "c_img").style.filter = "brightness(0)";
                document.getElementById(String(i) + "_" + String(j) + "c_img").style.opacity = "25%";
            } else {
                document.getElementById(String(i) + "_" + String(j) + "c_img").style.filter = "brightness(100%)";
                document.getElementById(String(i) + "_" + String(j) + "c_img").style.opacity = "100%";
            }
            document.getElementById(String(i) + "_" + String(j) + "c_am").innerHTML = "x" + String(characterCollectibles[i][j]);
        }
    }
}
var thig44 = setInterval(updateCharacterCollectibles, 0);

var displayValues = [
    false
];
var displayReferences = [
    document.getElementById("hideDecorDotsOption")
];
function flipBoolDisplayValue(id) {
    displayValues[id] = !displayValues[id];
    for (var i = 0; i < displayValues.length; i++) {
        if (typeof displayValues[i] == "boolean") {
            if (displayValues[i]) {
                displayReferences[i].style.backgroundColor = "rgba(0, 255, 0, 0.5)";
            } else {
                displayReferences[i].style.backgroundColor = "rgba(255, 0, 0, 0.5)";
            }
        }
    }
}
for (var i = 0; i < displayValues.length; i++) {
    if (typeof displayValues[i] == "boolean") {
        if (displayValues[i]) {
            displayReferences[i].style.backgroundColor = "rgba(0, 255, 0, 0.5)";
        } else {
            displayReferences[i].style.backgroundColor = "rgba(255, 0, 0, 0.5)";
        }
    }
}
var potentialStand = {
    x: 1500,
    y: 100,
    itemInfo: [],
    topText: "things",
    bottomText: "buckaroonies needed here",
    direction: "left",
};
function automaticInventoryItemSelect() {
    var ultimate = "";
    var ulp = "";
    for (var i = 0; i < globalItems.length; i++) {
        if (globalItems[i].type == "collectible") {
            ulp += "<option value='" + String(globalItems[i].collectibleID) + "' style='background-color: " + getColorFromRarity(globalItems[i].rarity) + "' class='ultimate'>" + globalItems[i].name + "</option>";
        } else {
            ultimate += "<option value='" + String(i) + "' style='background-color: " + getColorFromRarity(globalItems[i].rarity) + "' class='ultimate'>" + globalItems[i].name + "</option>";
        }
    }
    document.getElementById("inventoryItemSelect").innerHTML = ultimate;
    document.getElementById("floorItemSelect").innerHTML = ultimate;
    for (var i = 0; i < potentialStand.itemInfo.length; i++) {
        if (!potentialStand.itemInfo[i].removed) {
            document.getElementById("simulatedInventoryItem" + String(i) + "Select").innerHTML = ultimate;
        }
    }
    document.getElementById("collectionSelect").innerHTML = ulp;
}
automaticInventoryItemSelect();
function automaticPlaceableSelect() {
    var ultimato = "";
    for (var i = 0; i < globalItems.length; i++) {
        var ultip = false;
        for (var j = 0; j < globalItems[i].tags.length; j++) {
            if (globalItems[i].tags[j] == "placeable") {
                ultip = true;
            }
        }
        if (ultip) {
            ultimato += "<option value='" + globalItems[i].name + "' class='ultimato'>" + globalItems[i].name + "</option>";
        }
    }
    document.getElementById("placeableSelect").innerHTML = ultimato;
}
automaticPlaceableSelect();
function collectionSwitch() {
    boip = "";
    for (var i = 0; i < Object.values(collectibles)[parseInt(document.getElementById("collectionSelect").value)].variants; i++) {
        boip += "<option value='" + String(i) + "' style='background-color: " + getColorFromRarity("collectible") + "' class='ultimate'>" + Object.values(collectibles)[parseInt(document.getElementById("collectionSelect").value)].names[i] + "</option>";
    }
    document.getElementById("collectibleSelect").innerHTML = boip;
}
collectionSwitch();
function inventoryConsole() {
    if (document.getElementById("inventoryModeSelect").value == "Add") {
        addItemToInventory(parseInt(document.getElementById("inventoryItemSelect").value), parseInt(document.getElementById("inventoryItemAmount").value));
    } else {
        var bigoloof = false;
        for (var i = 0; i < document.getElementsByClassName("inventoryitem").length; i++) {
            var numboThing = document.getElementsByClassName("inventoryitem")[i].id.split("");
            for (j = 0; j < numboThing.length; j++) {
                while (true) {
                    if (!(numboThing[j] == "0" || numboThing[j] == "1" || numboThing[j] == "2" || numboThing[j] == "3" || numboThing[j] == "4" || numboThing[j] == "5" || numboThing[j] == "6" || numboThing[j] == "7" || numboThing[j] == "8" || numboThing[j] == "9")) {
                        numboThing.splice(j, 1);
                    } else {
                        break;
                    }
                }
            }
            numboThing = parseInt(numboThing.join(""));
            if (parseInt(document.getElementById("inventoryItemSelect").value) == characterInventory[numboThing].id) {
                bigoloof = true;
            }
        }
        if (bigoloof) {
            if (characterInventory[numboThing].amount < parseInt(document.getElementById("inventoryItemAmount").value)) {
                removeItemFromInventory(numboThing, characterInventory[numboThing].amount);
            } else {
                removeItemFromInventory(numboThing, parseInt(document.getElementById("inventoryItemAmount").value));
            }
        }
    }
}
function placeBased() {
    if (!ShiftHeld) {
        switch (document.getElementById("placeableSelect").value) {
            case "Bomb":
                createBomb(parseInt(document.getElementById("placeableMarkerX").value), parseInt(document.getElementById("placeableMarkerY").value), false);
                break;
            case "Tennis Ball":
                createTennisBall(parseInt(document.getElementById("placeableMarkerX").value), parseInt(document.getElementById("placeableMarkerY").value));
                break;
            case "Crate":
                placeCrate(parseInt(document.getElementById("placeableMarkerX").value), parseInt(document.getElementById("placeableMarkerY").value));
                break;
            case "Big Crate":
                placeBigCrate(parseInt(document.getElementById("placeableMarkerX").value), parseInt(document.getElementById("placeableMarkerY").value));
                break;
            case "Super Big Crate":
                placeDoubleBigCrate(parseInt(document.getElementById("placeableMarkerX").value), parseInt(document.getElementById("placeableMarkerY").value));
                break;
            case "TNT":
                placeTNT(parseInt(document.getElementById("placeableMarkerX").value), parseInt(document.getElementById("placeableMarkerY").value));
                break;
            case "TNT 10x":
                place10xTNT(parseInt(document.getElementById("placeableMarkerX").value), parseInt(document.getElementById("placeableMarkerY").value));
                break;
            case "TNT 100x":
                place100xTNT(parseInt(document.getElementById("placeableMarkerX").value), parseInt(document.getElementById("placeableMarkerY").value));
                break;
            case "TNT 1000x":
                place1000xTNT(parseInt(document.getElementById("placeableMarkerX").value), parseInt(document.getElementById("placeableMarkerY").value));
                break;
        }
        haloShown = false;
        haloFrozen = false;
    } else {
        haloReturn = ["placeableMarkerX", "placeableMarkerY"];
        haloShown = true;
        haloFrozen = false;
        switch (document.getElementById("placeableSelect").value) {
            case "Bomb":
                haloDimensions = [40, 40];
                break;
            case "Tennis Ball":
                haloDimensions = [22, 22];
                break;
            case "Crate":
                haloDimensions = [54, 54];
                break;
            case "Big Crate":
                haloDimensions = [118, 118];
                break;
            case "Super Big Crate":
                haloDimensions = [182, 182];
                break;
            case "TNT":
                haloDimensions = [54, 54];
                break;
            case "TNT 10x":
                haloDimensions = [70, 70];
                break;
            case "TNT 100x":
                haloDimensions = [86, 86];
                break;
            case "TNT 1000x":
                haloDimensions = [98, 98];
                break;
        }
    }
}
function showCorrectWorldSector() {
    for (var i = 0; i < document.getElementsByClassName("worldSector").length; i++) {
        document.getElementsByClassName("worldSector")[i].style.display = "none";
    }
    document.getElementById(document.getElementById("worldElementSelect").value + "Sector").style.display = "block";
}
showCorrectWorldSector();
function showCorrectFloorThingSector() {
    for (var i = 0; i < document.getElementsByClassName("floorThingSector").length; i++) {
        document.getElementsByClassName("floorThingSector")[i].style.display = "none";
    }
    document.getElementById(document.getElementById("floorThingElementSelect").value + "Sector").style.display = "block";
}
showCorrectFloorThingSector();
function placeArrow() {
    if (!ShiftHeld) {
        if (document.getElementById("arrowSelect").value == "straight") {
            createArrow(parseInt(document.getElementById("arrowXInput").value), parseInt(document.getElementById("arrowYInput").value), parseInt(document.getElementById("arrowRInput").value));
        } else if (document.getElementById("arrowSelect").value == "angled_left") {
            createAngledArrow(parseInt(document.getElementById("arrowXInput").value), parseInt(document.getElementById("arrowYInput").value), parseInt(document.getElementById("arrowRInput").value), left);
        } else if (document.getElementById("arrowSelect").value == "angled_right") {
            createAngledArrow(parseInt(document.getElementById("arrowXInput").value), parseInt(document.getElementById("arrowYInput").value), parseInt(document.getElementById("arrowRInput").value), right);
        }
        haloShown = false;
        haloFrozen = false;
    } else {
        haloDimensions = [140, 140];
        haloReturn = ['arrowXInput', 'arrowYInput'];
        haloShown = true;
        haloFrozen = false;
    }
}
function addSimulatedStandItem() {
    potentialStand.itemInfo.push({
        id: 0,
        price: 1000,
        removed: false
    });
    var potent = "";
    for (var i = 0; i < potentialStand.itemInfo.length; i++) {
        if (!potentialStand.itemInfo[i].removed) {
            potent += "<div id='simulatedInventoryItem" + String(i) + "' class='simInvItem'><select id='simulatedInventoryItem" + String(i) + "Select' class='simInvSel' onchange='potentialStand.itemInfo[" + String(i) + "].id = parseInt(this.value)'></select><input id='simulatedInventoryItem" + String(i) + "Price' class='simulatedItemInput' value='" + potentialStand.itemInfo[i].price + "' onchange='potentialStand.itemInfo[" + String(i) + "].price = parseInt(this.value);'><label for='simulatedInventoryItem" + String(i) + "Price'> milliceeps</label><img id='simulatedInventoryItem" + String(i) + "Button' class='removeSimButton' onclick='removeSimItem(" + String(i) + ")' src='assets/landmark.png'></div>";
        }
    }
    document.getElementById("simulatedInventoryList").innerHTML = potent;
    setTimeout(rebind, 1);
    automaticInventoryItemSelect();
}
function rebind() {
    for (var i = 0; i < potentialStand.itemInfo.length; i++) {
        if (!potentialStand.itemInfo[i].removed) {
            document.getElementsByClassName("simInvSel")[i].selectedIndex = potentialStand.itemInfo[i].id;
        }
    }
}
function removeSimItem(idd) {
    potentialStand.itemInfo[idd].removed = true;
    document.getElementById("simulatedInventoryItem" + String(idd)).remove();
}
function changePotentialDirection(dur) {
    potentialStand.direction = dur;
    if (dur == "left") {
        document.getElementById("simulatedCreeperDir").style.left = "38px";
    } else if (dur == "right") {
        document.getElementById("simulatedCreeperDir").style.left = "56px";
    }
}

function initPotentialStand() {
    if (!ShiftHeld) {
        var potItemArray = [];
        var potPriceArray = [];
        for (var i = 0; i < potentialStand.itemInfo.length; i++) {
            if (!potentialStand.itemInfo[i].removed) {
                potItemArray.push(potentialStand.itemInfo[i].id);
                potPriceArray.push(potentialStand.itemInfo[i].price);
            }
        }
        createStand(potentialStand.x, potentialStand.y, potItemArray, potPriceArray, potentialStand.topText, potentialStand.bottomText, potentialStand.direction);
        haloShown = false;
        haloFrozen = false;
    } else {
        haloDimensions = [290, 290];
        haloReturn = ['standXInput', 'standYInput'];
        haloShown = true;
        haloFrozen = false;
    }
}
function updatePotentialStandXY() {
    potentialStand.x = parseInt(document.getElementById('standXInput').value);
    potentialStand.y = parseInt(document.getElementById('standYInput').value);
}
var thig43 = setInterval(updatePotentialStandXY, 0);
function switchElementConsole() {
    elementConsoleOpen = !elementConsoleOpen;
    if (elementConsoleOpen) {
        document.getElementById("worldBuilderConsole").style.left = "0";
        document.getElementById("selectedElementConsole").style.left = "0";
        document.getElementById("devConsoleButton").style.left = "159px";
    } else {
        try {
            document.getElementById("plcGuide").remove();
            document.getElementById("plcGuide2").remove();
        } catch{
            
        } finally {
            document.getElementById("worldBuilderConsole").style.left = "-255px";
            document.getElementById("selectedElementConsole").style.left = "-255px";
            document.getElementById("devConsoleButton").style.left = "-96px";
            if (xystate == 1) {
                xystate = 0;
                for (var i = 0; i < numeralTypeList.length; i++) {
                    if (numeralTypeList[i] == "xv") {
                        document.getElementById(numeralInputList[i]).value = Math.floor((savedXYGuide[0] - mouseX) * 2) / 10;
                    } else if (numeralTypeList[i] == "yv") {
                        document.getElementById(numeralInputList[i]).value = Math.floor((savedXYGuide[1] - mouseY) * 2) / 10;
                    }
                }
            }
        }
    }
}
function elementHover() {
    if (elementConsoleOpen) {
        selectedElementList = [];

        for (var i = 0; i < tracked.length; i++) {
            switch (tracked[i].object) {
                case "character":
                    selectedElementList.push({
                        object: "player",
                        x: characterLocation[0],
                        y: characterLocation[1],
                        holding: "itemID=" + String(selectedCharacterID),
                        wearing: [
                            "itemID=" + String(characterWearables[0]),
                            "itemID=" + String(characterWearables[1]),
                            "itemID=" + String(characterWearables[2])
                        ],
                        identifier: false
                    });
                    if (selectedCharacterID !== -1) {
                        selectedElementList[selectedElementList.length - 1].holding = "itemID=" + String(characterInventory[selectedCharacterID].id);
                    }
                    break;
                case "creeper":
                    selectedElementList.push({
                        object: "creeper",
                        id: tracked[i].id,
                        manning: "standID=" + String(creeperManning[tracked[i].id]),
                        x: creeperLocation[tracked[i].id][0],
                        y: creeperLocation[tracked[i].id][1],
                        identifier: false
                    });
                    break;
                case "bomb":
                    selectedElementList.push({
                        object: "bomb",
                        id: bombs[tracked[i].id].ID,
                        bombOnGround: bombs[tracked[i].id].bombOnGround,
                        boundingBox: bombs[tracked[i].id].boundingBox,
                        explosionTime: bombs[tracked[i].id].explosionTime,
                        fallDist: bombs[tracked[i].id].fallDist,
                        inFan: bombs[tracked[i].id].inFan,
                        inUse: bombs[tracked[i].id].inUse,
                        objectUnderBomb: bombs[tracked[i].id].objectUnderBomb,
                        rotation: bombs[tracked[i].id].rotation,
                        unstable: bombs[tracked[i].id].unstable,
                        x: bombs[tracked[i].id].x,
                        xVector: bombs[tracked[i].id].xVector,
                        y: bombs[tracked[i].id].y,
                        yVector: bombs[tracked[i].id].yVector,
                        identifier: false
                    });
                    break;
                case "tennis_ball":
                    selectedElementList.push({
                        object: "tennis_ball",
                        id: tennisBalls[tracked[i].id].ID,
                        ballOnGround: tennisBalls[tracked[i].id].ballOnGround,
                        boundingBox: tennisBalls[tracked[i].id].boundingBox,
                        inFan: tennisBalls[tracked[i].id].inFan,
                        inUse: tennisBalls[tracked[i].id].inUse,
                        objectUnderBall: tennisBalls[tracked[i].id].objectUnderBall,
                        rotation: tennisBalls[tracked[i].id].rotation,
                        x: tennisBalls[tracked[i].id].x,
                        xVector: tennisBalls[tracked[i].id].xVector,
                        y: tennisBalls[tracked[i].id].y,
                        yVector: tennisBalls[tracked[i].id].yVector,
                        identifier: false
                    });
                    break;
                case "crate":
                    selectedElementList.push({
                        object: "crate",
                        id: tracked[i].id,
                        x: crateLocation[tracked[i].id][0],
                        y: crateLocation[tracked[i].id][1],
                        width: document.getElementById("crate" + String(tracked[i].id)).clientWidth,
                        height: document.getElementById("crate" + String(tracked[i].id)).clientHeight,
                        identifier: false
                    });
                    break;
                case "tnt":
                    selectedElementList.push({
                        object: "tnt",
                        id: tnts[tracked[i].id].ID,
                        blockid: tnts[tracked[i].id].blockID,
                        elementName: tnts[tracked[i].id].elementName,
                        type: tnts[tracked[i].id].type,
                        x: tnts[tracked[i].id].x,
                        y: tnts[tracked[i].id].y,
                        identifier: false
                    });
                    break;
                case "block":
                    selectedElementList.push({
                        object: "block",
                        id: tracked[i].id,
                        x: blockBoundingBoxes[tracked[i].id].left,
                        y: ((window.innerHeight * universalScale) + (window.innerHeight - document.getElementById("html").getBoundingClientRect().height)) - blockBoundingBoxes[tracked[i].id].bottom,
                        width: blockBoundingBoxes[tracked[i].id].width,
                        height: blockBoundingBoxes[tracked[i].id].height,
                        identifier: false
                    });
                    break;
                case "sign":
                    selectedElementList.push({
                        object: "sign",
                        id: tracked[i].id,
                        text: "\"" + document.getElementById("sign" + String(tracked[i].id)).innerHTML + "\"",
                        x: document.getElementById("sign" + String(tracked[i].id)).getBoundingClientRect().left / universalScale,
                        y: ((window.innerHeight * universalScale) + (window.innerHeight - document.getElementById("html").getBoundingClientRect().height)) - (document.getElementById("sign" + String(tracked[i].id)).getBoundingClientRect().bottom),
                        width: document.getElementById("sign" + String(tracked[i].id)).getBoundingClientRect().width / universalScale,
                        height: document.getElementById("sign" + String(tracked[i].id)).getBoundingClientRect().height / universalScale,
                        identifier: false
                    });
                    break;
                case "arrow":
                    selectedElementList.push({
                        object: "arrow",
                        id: tracked[i].id,
                        rotation: document.getElementById("arrow" + String(tracked[i].id)).style.transform,
                        bracketReference: selfSplit(document.getElementById("arrow" + String(tracked[i].id)).src),
                        x: document.getElementById("arrow" + String(tracked[i].id)).getBoundingClientRect().left / universalScale,
                        y: ((window.innerHeight * universalScale) + (window.innerHeight - document.getElementById("html").getBoundingClientRect().height)) - (document.getElementById("arrow" + String(tracked[i].id)).getBoundingClientRect().bottom / universalScale),
                        width: document.getElementById("arrow" + String(tracked[i].id)).getBoundingClientRect().width / universalScale,
                        height: document.getElementById("arrow" + String(tracked[i].id)).getBoundingClientRect().height / universalScale,
                        identifier: false
                    });
                    break;
                case "ladder":
                    selectedElementList.push({
                        object: "ladder",
                        id: tracked[i].id,
                        x: document.getElementById("ladder" + String(tracked[i].id)).getBoundingClientRect().left / universalScale,
                        y: ((window.innerHeight * universalScale) + (window.innerHeight - document.getElementById("html").getBoundingClientRect().height)) - (document.getElementById("ladder" + String(tracked[i].id)).getBoundingClientRect().bottom / universalScale),
                        height: document.getElementById("ladder" + String(tracked[i].id)).getBoundingClientRect().height / universalScale,
                        identifier: false
                    });
                    break;
                case "stand":
                    selectedElementList.push({
                        object: "stand",
                        id: tracked[i].id,
                        x: document.getElementById("stand" + String(tracked[i].id)).getBoundingClientRect().left / universalScale,
                        y: ((window.innerHeight * universalScale) + (window.innerHeight - document.getElementById("html").getBoundingClientRect().height)) - (document.getElementById("stand" + String(tracked[i].id)).getBoundingClientRect().bottom / universalScale),
                        items: standInventoryIDs[tracked[i].id],
                        prices: standPrices[tracked[i].id],
                        topText: "\"" + document.getElementById("stand" + String(tracked[i].id) + "topText").innerHTML + "\"",
                        bottomText: "\"" + document.getElementById("stand" + String(tracked[i].id) + "bottomtext").innerHTML + "\"",
                        direction: standDirection[tracked[i].id],
                        identifier: false
                    });
                    break;
                case "fan":
                    selectedElementList.push({
                        object: "fan",
                        id: tracked[i].id,
                        x: document.getElementById("fan" + String(tracked[i].id)).getBoundingClientRect().left / universalScale,
                        y: ((window.innerHeight * universalScale) + (window.innerHeight - document.getElementById("html").getBoundingClientRect().height)) - (document.getElementById("fan" + String(tracked[i].id)).getBoundingClientRect().bottom / universalScale),
                        identifier: false
                    });
                    break;
                case "money":
                    selectedElementList.push({
                        object: "money",
                        id: floorMoney[tracked[i].id].id,
                        img: floorMoney[tracked[i].id].img,
                        value: floorMoney[tracked[i].id].value,
                        x: floorMoney[tracked[i].id].x,
                        y: floorMoney[tracked[i].id].y,
                        xVector: floorMoney[tracked[i].id].xVector,
                        yVector: floorMoney[tracked[i].id].yVector,
                        size: floorMoney[tracked[i].id].size,
                        rotation: floorMoney[tracked[i].id].rotation,
                        rotVector: floorMoney[tracked[i].id].rotVector,
                        onGround: floorMoney[tracked[i].id].onGround,
                        inFan: floorMoney[tracked[i].id].inFan,
                        inUse: floorMoney[tracked[i].id].inUse,
                        boundingBox: floorMoney[tracked[i].id].boundingBox,
                        objectUnderneath: floorMoney[tracked[i].id].objectUnderneath,
                        identifier: false
                    });
                    break;
                case "floorItem":
                    selectedElementList.push({
                        object: "floorItem",
                        id: floorItems[tracked[i].id].id,
                        itemID: floorItems[tracked[i].id].itemID,
                        x: floorItems[tracked[i].id].x,
                        y: floorItems[tracked[i].id].y,
                        xVector: floorItems[tracked[i].id].xVector,
                        yVector: floorItems[tracked[i].id].yVector,
                        onGround: floorItems[tracked[i].id].onGround,
                        inFan: floorItems[tracked[i].id].inFan,
                        inUse: floorItems[tracked[i].id].inUse,
                        boundingBox: floorItems[tracked[i].id].boundingBox,
                        objectUnderneath: floorItems[tracked[i].id].objectUnderneath,
                        identifier: false
                    });
                    
            }
        }

        if (selectedElementList.length !== selectedElementListDupe.length) {
            var compiledString = "";
            selectedElementListDupe = selectedElementList;
            for (var i = 0; i < selectedElementList.length; i++) {
                compiledString += "<div id='compiled" + String(i) + "' class='selCons' onclick='removeTracker(" + String(i) + ")'>";
                compiledString += "<br></div>";
                selectedElementListDupe[i].identifier = true;
            }
            document.getElementById("selectedElementConsole").innerHTML = compiledString;
        }
        var elementCheck = [];
        var simStr = "";
        for (var i = 0; i < selectedElementList.length; i++) {
            var thingyy = false;
            var ele = Object.values(selectedElementList[i]);
            var eled = Object.values(selectedElementListDupe[i]);
            for (var j = 0; j < ele.length; j++) {
                if (ele[j] !== eled[j]) {
                    thingyy = true;
                }
            }
            if (thingyy) {
                elementCheck.push(i);
            }
        }
        for (var i = 0; i < elementCheck.length; i++) {
            simStr = "";
            var kee = Object.keys(selectedElementList[elementCheck[i]]);
            var val = Object.values(selectedElementList[elementCheck[i]]);
            for (var j = 0; j < kee.length - 1; j++) {
                simStr += kee[j] + ": " + val[j] + "<br>";
            }
            simStr += "<br>";
            document.getElementById("compiled" + String(elementCheck[i])).innerHTML = simStr;
        }
        selectedElementListDupe = selectedElementList;
    }
}
var thig37 = setInterval(elementHover, (1000 / 60));
function removeTracker(ig) {
    if (!ShiftHeld) {
        tracked.splice(ig, 1);
        document.getElementById("compiled" + String(ig)).remove();
    } else {
        removeElement(ig);
    }
}
function selfSplit(dir) {
    var directory = dir.split("/");
    return directory[directory.length - 1];
}
function removeElement(trackID) {
    switch (tracked[trackID].object) {
        case "creeper":
            document.getElementById("creeper" + String(tracked[trackID].id)).remove();
            usedCreepers[tracked[trackID].id] = false;
            break;
        case "bomb":
            bombs[tracked[trackID].id].inUse = false;
            document.getElementById("bomb" + String(tracked[trackID].id)).remove();
            break;
        case "tennis_ball":
            tennisBalls[tracked[trackID].id].inUse = false;
            document.getElementById("tennisBall" + String(tracked[trackID].id)).remove();
            break;
        case "crate":
            try {
                document.getElementById("block" + String(crateBlockRelation[tracked[trackID].id])).remove();
                blockBoundingBoxes[crateBlockRelation[tracked[trackID].id]] = 0;
            } finally {
                document.getElementById("crate" + String(tracked[trackID].id)).remove();
                jumb();
                for (var i = 0; i < creeperCount; i++) {
                    jumbC(i);
                }
                usedCrates[tracked[trackID].id] = false;
                break;
            }
        case "tnt":
            switch (tnts[tracked[trackID].id].type) {
                case "1x":
                    deleteTNT(tracked[trackID].id);
                    break;
                case "10x":
                    delete10xTNT(tracked[trackID].id);
                    break;
                case "100x":
                    delete100xTNT(tracked[trackID].id);
                    break;
                case "1000x":
                    delete1000xTNT(tracked[trackID].id);
            }
            jumb();
            for (var i = 0; i < creeperCount; i++) {
                jumbC(i);
            }
            break;
        case "block":
            try {
                document.getElementById("block" + String(tracked[trackID].id)).remove();
                blockBoundingBoxes[tracked[trackID].id] = 0;
            } finally {
                jumb();
                for (var i = 0; i < creeperCount; i++) {
                    jumbC(i);
                }
                break;
            }
        case "sign":
            document.getElementById("sign" + String(tracked[trackID].id)).remove();
            usedSigns[tracked[trackID].id] = false;
            break;
        case "arrow":
            document.getElementById("arrow" + String(tracked[trackID].id)).remove();
            usedArrows[tracked[trackID].id] = false;
            break;
        case "ladder":
            document.getElementById("ladder" + String(tracked[trackID].id)).remove();
            usedLadders[tracked[trackID].id] = false;
            ladderBoxes[tracked[trackID].id] = 0;
            jumb();
            for (var i = 0; i < creeperCount; i++) {
                jumbC(i);
            }
            break;
        case "stand":
            document.getElementById("stand" + String(tracked[trackID].id)).remove();
            usedStands[tracked[trackID].id] = false;
            break;
        case "fan":
            try {
                document.getElementById("block" + String(fanBlockRelation[tracked[trackID].id])).remove();
                blockBoundingBoxes[fanBlockRelation[tracked[trackID].id]] = 0;
            } finally {
                document.getElementById("fan" + String(tracked[trackID].id)).remove();
                jumb();
                for (var i = 0; i < creeperCount; i++) {
                    jumbC(i);
                }
                usedFans[tracked[trackID].id] = false;
            }
            break;
        case "money":
            floorMoney[tracked[trackID].id].inUse = false;
            document.getElementById("floorMoney" + String(tracked[trackID].id)).remove();
            break;
        case "floorItem":
            floorItems[tracked[trackID].id].inUse = false;
            document.getElementById("floorItem" + String(tracked[trackID].id)).remove();
            break;
    }
    tracked.splice(trackID, 1);
    document.getElementById("compiled" + String(trackID)).remove();
}
var moneyValuesList = [1000000, 500000, 200000, 100000, 50000, 20000, 10000, 5000, 1000, 500, 250, 100, 50, 25, 10, 5, 1, 0];
var moneyValuesWeights = [1, 2, 3, 4, 5, 7, 9, 11, 14, 17, 20, 24, 28, 32, 37, 42, 47];
var bru = 0;
var valueBuffer = 0;
var ranbb = 0;
function setMoneyList(value, weighted) {
    if (weighted) {
        valueBuffer = value;
        var compList = [];
        while (true) {
            ranbb = Math.ceil(Math.random() * 47);
            bru = 0;
            while (true) {
                if (moneyValuesWeights[bru + 1] < ranbb) {
                    bru++;
                } else {
                    break;
                }
            }
            if (moneyValuesList[bru] > valueBuffer) {
                break;
            } else {
                valueBuffer -= moneyValuesList[bru];
                compList.push(moneyValuesList[bru]);
            }
        }
        while (true) {
            if (moneyValuesList[bru] > valueBuffer) {
                bru++;
                if (moneyValuesList[bru] == 0) {
                    break;
                }
            } else {
                valueBuffer -= moneyValuesList[bru];
                compList.push(moneyValuesList[bru]);
            }
        }
        return compList;
    } else {
        bru = 0;
        valueBuffer = value;
        var compList = [];
        while (true) {
            if (moneyValuesList[bru] > valueBuffer) {
                bru++;
                if (moneyValuesList[bru] == 0) {
                    break;
                }
            } else {
                valueBuffer -= moneyValuesList[bru];
                compList.push(moneyValuesList[bru]);
            }
        }
        return compList;
    }
}
function spawnMoneyStack(liss, x, y) {
    for (var i = 0; i < liss.length; i++) {
        spawnMoney(x, y, [0, 0], 0, liss[i]);
    }
}
function explodeMoneyStack(lisp, x, y, power) {
    for (var i = 0; i < lisp.length; i++) {
        spawnMoney(x, y, [Math.floor(Math.random() * 10 * power) - (5 * power), Math.floor(Math.random() * 10 * power) - (5 * power)], Math.floor(Math.random() * 10 * power) - (5 * power), lisp[i]);
    }
}
function updatePlacerHalo() {
    if (!haloFrozen) {
        if (!ShiftHeld) {
            document.getElementById("placerHalo").style.bottom = String(mouseY + (window.innerHeight - (window.innerHeight / universalScale))) + "px";
            document.getElementById("haloHitbox").style.bottom = String(mouseY + (window.innerHeight - (window.innerHeight / universalScale))) + "px";
        } else {
            document.getElementById("placerHalo").style.bottom = String(getClosestBlockHalo(mouseX, mouseY, haloDimensions[0] + 10)) + "px";
            document.getElementById("haloHitbox").style.bottom = String(getHHX()) + "px";
        }
        document.getElementById("placerHalo").style.left = String(mouseX) + "px";
        document.getElementById("placerHalo").style.width = String(haloDimensions[0]) + "px";
        document.getElementById("placerHalo").style.height = String(haloDimensions[1]) + "px";

        document.getElementById("haloHitbox").style.left = String(mouseX) + "px";
        document.getElementById("haloHitbox").style.width = String(haloDimensions[0] + 10) + "px";
        document.getElementById("haloHitbox").style.height = String(haloDimensions[1] + 10) + "px";
    }
    if (haloShown) {
        document.getElementById("placerHalo").style.display = "inline";
    } else {
        document.getElementById("placerHalo").style.display = "none";
    }
    if (!elementConsoleOpen) {
        haloShown = false;
    }
}
var thig42 = setInterval(updatePlacerHalo, 0);
function haloClick() {
    if (!haloFrozen) {
        document.getElementById(haloReturn[0]).value = String(mouseX);
        document.getElementById(haloReturn[1]).value = String(mouseY);
        if (!ShiftHeld) {
            document.getElementById(haloReturn[1]).value = String(mouseY);
        } else {
            document.getElementById(haloReturn[1]).value = String(getClosestBlockHaloOffset());
        }
        haloFrozen = true;
    }
}
var haloDimensions = [100, 100];
var haloReturn = [];
var haloShown = false;
var haloFrozen = false;

function summonCreepersClick() {
    if (!ShiftHeld) {
        summonCreepers(parseInt(document.getElementById('scMarkerAmount').value), parseInt(document.getElementById('scMarkerX').value), parseInt(document.getElementById('scMarkerY').value), false);
        haloShown = false;
        haloFrozen = false;
    } else {
        haloDimensions = [70, 230];
        haloReturn = ['scMarkerX', 'scMarkerY'];
        haloShown = true;
        haloFrozen = false;
    }
}
function blockPlaceClick() {
    if (!ShiftHeld) {
        createBlock(parseInt(document.getElementById('blockWidthInput').value), parseInt(document.getElementById('blockHeightInput').value), parseInt(document.getElementById('blockXInput').value), parseInt(document.getElementById('blockYInput').value));
        haloShown = false;
        haloFrozen = false;
    } else {
        haloDimensions = [parseInt(document.getElementById('blockWidthInput').value) - 10, parseInt(document.getElementById('blockHeightInput').value) - 10];
        haloReturn = ['blockXInput', 'blockYInput'];
        haloShown = true;
        haloFrozen = false;
    }
}
function signPlaceClick() {
    if (!ShiftHeld) {
        createSign(parseInt(document.getElementById('signWidthInput').value), parseInt(document.getElementById('signHeightInput').value), parseInt(document.getElementById('signXInput').value), parseInt(document.getElementById('signYInput').value), document.getElementById('signTextInput').value);
        haloShown = false;
        haloFrozen = false;
    } else {
        haloDimensions = [parseInt(document.getElementById('signWidthInput').value) - 10, parseInt(document.getElementById('signHeightInput').value) - 10];
        haloReturn = ['signXInput', 'signYInput'];
        haloShown = true;
        haloFrozen = false;
    }
}
function ladderPlaceClick() {
    if (!ShiftHeld) {
        createLadder(parseInt(document.getElementById('ladderHeightInput').value), parseInt(document.getElementById('ladderXInput').value), parseInt(document.getElementById('ladderYInput').value));
        haloShown = false;
        haloFrozen = false;
    } else {
        haloDimensions = [70, parseInt(document.getElementById('ladderHeightInput').value) - 10];
        haloReturn = ['ladderXInput', 'ladderYInput'];
        haloShown = true;
        haloFrozen = false;
    }
}
function fanPlaceClick() {
    if (!ShiftHeld) {
        createFan(parseInt(document.getElementById('fanXInput').value), parseInt(document.getElementById('fanYInput').value));
        haloShown = false;
        haloFrozen = false;
    } else {
        haloDimensions = [290, 10];
        haloReturn = ['fanXInput', 'fanYInput'];
        haloShown = true;
        haloFrozen = false;
    }
}
function itemPlaceClick() {
    if (!ShiftHeld) {
        spawnFloorItem(parseInt(document.getElementById('floorItemSelect').value), parseInt(document.getElementById('floorItemXInput').value), parseInt(document.getElementById('floorItemYInput').value), [parseInt(document.getElementById('floorItemXVecInput').value), parseInt(document.getElementById('floorItemYVecInput').value)]);
        haloShown = false;
        haloFrozen = false;
    } else {
        haloDimensions = [5, 5];
        haloReturn = ['floorItemXInput', 'floorItemYInput'];
        haloShown = true;
        haloFrozen = false;
    }
}
function moneyPlaceClick() {
    if (!ShiftHeld) {
        spawnMoneyStack(setMoneyList(parseInt(document.getElementById('moneyMilliceepInput').value), document.getElementById('moneyWeightedBox').checked), parseInt(document.getElementById('moneyXInput').value), parseInt(document.getElementById('moneyYInput').value));
        haloShown = false;
        haloFrozen = false;
    } else {
        haloDimensions = [5, 5];
        haloReturn = ['moneyXInput', 'moneyYInput'];
        haloShown = true;
        haloFrozen = false;
    }
}
function moneyExPlaceClick() {
    if (!ShiftHeld) {
        explodeMoneyStack(setMoneyList(parseInt(document.getElementById('moneyExMilliceepInput').value), document.getElementById('moneyExWeightedBox').checked), parseInt(document.getElementById('moneyExXInput').value), parseInt(document.getElementById('moneyExYInput').value), parseInt(document.getElementById('moneyExStrengthInput').value));
        haloShown = false;
        haloFrozen = false;
    } else {
        haloDimensions = [5, 5];
        haloReturn = ['moneyExXInput', 'moneyExYInput'];
        haloShown = true;
        haloFrozen = false;
    }
}
function collectibleClick() {
    characterCollectibles[parseInt(document.getElementById("collectionSelect").value)][parseInt(document.getElementById("collectibleSelect").value)]++;
}
function trampPlaceClick() {
    if (!ShiftHeld) {
        createTrampoline(parseInt(document.getElementById('trampWidthInput').value), parseInt(document.getElementById('trampHeightInput').value), parseInt(document.getElementById('trampXInput').value), parseInt(document.getElementById('trampYInput').value));
        haloShown = false;
        haloFrozen = false;
    } else {
        haloDimensions = [parseInt(document.getElementById('trampWidthInput').value) - 10, parseInt(document.getElementById('trampHeightInput').value) - 10];
        haloReturn = ['trampXInput', 'trampYInput'];
        haloShown = true;
        haloFrozen = false;
    }
}
function updateUniversalScale() {
    universalScale = window.innerWidth / worldWidth;
    //document.getElementById("html").style.transform = "scale(" + String(universalScale) + ")";
    //document.getElementById("html").style.scale = String(universalScale);
    document.getElementById("html").style.transform = "translate(" + String(initialHTMLOffset) + "px, 0px) scale(" + String(universalScale) + ")";
    document.getElementById("titleScreen").style.transform = "scale(" + String((window.innerHeight * worldWidth) / (1080 * window.innerWidth)) + ")";
    document.getElementById("titleScreen").style.translate = "0px " + String((window.innerHeight / 2) - 222 - ((window.innerWidth - worldWidth) / (universalScale * 4))) + "px";
    document.getElementById("logg").style.transform = "scale(" + String((window.innerHeight * worldWidth) / (1080 * window.innerWidth)) + ")";
    document.getElementById("logg").style.translate = String((worldWidth / 2) - 480) + "px " + String((window.innerHeight / 2) - 250 - ((window.innerWidth - worldWidth) / (universalScale * 4))) + "px";
    document.getElementById("trig").style.transform = "scale(" + String((window.innerHeight * worldWidth) / (1080 * window.innerWidth)) + ")";
    document.getElementById("trig").style.translate = String((worldWidth / 2) - 75) + "px " + String((window.innerHeight / 2) + 50 - ((window.innerWidth - worldWidth) / (universalScale * 4))) + "px";
    document.getElementById("fullScreenOverlay").style.transform = "scale(" + String(2 / universalScale) + ")";
    document.getElementById("pauseOverlay").style.transform = "scale(" + String(2 / universalScale) + ")";
    document.getElementById("spanContainer").style.left = String(((window.innerWidth / 2) - (document.getElementById("spanContainer").getBoundingClientRect().width / 2)) / universalScale) + "px";
    document.getElementById("spanContainer").style.top = String(((window.innerHeight / 2) - (document.getElementById("spanContainer").getBoundingClientRect().height / 2)) / universalScale) + "px";
    document.getElementById("worldBuilderConsole").style.height = String((window.innerHeight / universalScale) * 0.75) + "px";
    document.getElementById("selectedElementConsole").style.height = String(25 / universalScale) + "%";
    document.getElementById("selectedElementConsole").style.bottom = String(window.innerHeight - (window.innerHeight / universalScale)) + "px";
    document.getElementById("characterMoneySpan").style.right = String(10 - (worldWidth - window.innerWidth)) + "px";
    document.getElementById("characterMoneyBuffer").style.right = String(10 - (worldWidth - window.innerWidth)) + "px";
    document.getElementById("HUDHeldItem").style.right = String(10 - (worldWidth - window.innerWidth)) + "px";
    //document.body.style.bottom = String(window.innerHeight - (window.innerHeight / universalScale)) + "px";
}
var thig45 = setInterval(updateUniversalScale, 0);
function manageLeafDots() {
    for (var i = 0; i < currentLeafDots.length; i++) {
        if (currentLeafDots[currentLeafDots.length - 1 - i].expired) {
            currentLeafDots.splice(currentLeafDots.length - 1 - i, 1);
        }
    }
}
var thig47 = setInterval(manageLeafDots, (1000 / 60));

var startX = [];
var startY = [];
var bufferX = [];
var bufferY = [];
var creeperLocation = [];
var creeperCount = 0;
var characterLocation = [0, 0];
var characterBox = document.getElementById("characterCreeper").getBoundingClientRect();
var creeperBoxes = [];
var usedCreepers = [];
var objectUnderCharacter;
var objectIDUnderCharacter = 0;
var objectUnderCreeper = [];
var objectIDUnderCreeper = [];
var characterLadderID = 0;
var previousAirFrame = [];
var previousAirFrameBottom = [];
var previousAirFrameTemplate = [];
var previousFanFrame = [];
var characterInFan = false;
var creeperInFan = [];
var characterVector = 0;
var characterExplosionVector = 0;
var creeperVector = [];
var creeperExplosionVector = [];
var creeperLeafBlowerVector = [];
var characterWearables = [-1, -1, -1];
var ladderFall = false;
var usedLadders = [];
var characterVert = 0;
var characterLadderVert = 0;
var creeperVert = [];
var creeperLadderVert = [];
var creeperRange = [];
var creeperRangeTemp = [];
var xLeftOverride = false;
var xRightOverride = false;
var characterOnGround = true;
var creeperOnGround = [];
var characterScreenOffset = 0;
var jumpKeyHeld = false;
var signCount = 0;
var arrowCount = 0;
var total = "";
var characterMoney = 137750;
var characterInventory = [];
var inventoryShown = false;
var standInventoryShown = false;
var collectiblesPanelShown = false;
var worldExportPanelShown = false;
var generateWorldPanelShown = false;
var aboutScreenShown = false;
var globalColor = [63, 127, 255];
var movementTimeouts = [];
var blockElements = [];
var blockBoundingBoxes = [];
var ladderBoxes = [];
var fallCTimeouts = [];
var crateCount = 0;
var crateLocation = [];
var crateBlockRelation = [];
var usedCrates = [];
var tntLocation = [];
var tntx10Location = [];
var tntx100Location = [];
var tntx1000Location = [];
var tnts = [];
var fanLocation = [];
var fanBoxes = [];
var fanBlockRelation = [];
var usedFans = [];
var junpOrNot = [];
var junps = [];
var ladderCount = 0;
var standCount = 0;
var fanCount = 0;
var tntCount = 0;
var tntx10Count = 0;
var tntx100Count = 0;
var tntx1000Count = 0;
var characterOnLadder = false;
var creeperOnLadder = [];
var creeperSavedLadderID = [];
var characterLadderRange = [];
var creeperLadderCheck = [];
var creeperLadderState = [];
var creeperLadderReset = [];
var creeperFanStack = [];
var savedBlockY = [];
var savedLadderY = [];
var savedSignY = [];
var usedSigns = [];
var savedArrowY = [];
var usedArrows = [];
var savedStandY = [];
var standItemIDs = [];
var standInventory = [];
var standInventoryIDs = [];
var standPrices = [];
var standDirection = [];
var crateInventorys = [];
var usedStands = [];
var creeperManning = [];
var standManning = [];
var currentBuyAmount = 0;
var openedStandID = 0;
var selectedPrice = 0;
var selectedItemID = 0;
var subtotal = 0;
var selectedCharacterID = -1;
var characterStandSquareBox;
var heldItemDirectionOffset = 0;
var sufficientFunds = true;
var nullCheck = true;
var priorLadderCheck = false;
var priorVertCheck = false;
var priorPriorCheck = false;
var standBoxes = [];
var standSquareBoxes = [];
var preStandCheck = [];
var standCheck = [];
var elementlocation = [];
var placeObject = false;
var mouseX = 0;
var mouseY = 0;
var fanFrame = 0;
var dotTick = 0;
var dotFrame = [];
var savedTNTBlocks = [];
var saved10xTNTBlocks = [];
var saved100xTNTBlocks = [];
var saved1000xTNTBlocks = [];
var runServerTick = true;
var explosionFrameCount = [];
var explosionCount = 0;
var bombs = [];
var bombCount = 0;
var weaponOffsetX = 0;
var weaponOffsetY = 0;
var currentHeldType = 0;
var characterFaceLauncher = 0;
var landmarkPos = [0, 0];
var tennisBalls = [];
var tennisBallCount = 0;
var inventoryFilter = "everything";
var ammoID = -1;
var elementConsoleOpen = false;
var selectedElementList = [];
var selectedElementListDupe = [];
var tracked = [];
var trackedLength = 0;
var ShiftHeld = false;
var CtrlHeld = false;
var RightClickHeld = false;
var floorMoney = [];
var floorMoneyCount = 0;
var floorItems = [];
var floorItemCount = 0;
var moneyBuffer = 0;
var moneyBufferMid = false;
var crateInventoryShown = false;
var openedCrateID = -1;
var crateFullness = 0;
var transferAmount = 1000;
var xystate = 0;
var savedXYGuide = [];
var savedXYGuide2 = [];
var worldWidth = 1920;
var universalScale = 1;
var currentLeafDots = [];
var blocksCheckOnceoff = false;
var initialHTMLOffset = 0;
var characterEffects = [];
var speedFactor = 1;
var jumpAddend = 0;
var trampolineRelation = [];
var usedTramps = [];
var standLocation = [];
var ladderDismount = -1;
var lockCharacter = false;
var characterOpacity = 1;
var scrollLock = false;
var inTitleScreen = true;
var inWorld = false;
var worldName = "Stupid World";
var smallMoneyBombCount = 0;
var bigMoneyBombCount = 0;
var dictionaryOpen = false;
var musicVolume = 1;
var music = document.getElementById("music");
var musicSilence = 0;
var previousSong = -1;
var creeperVisibility = [];
var totalUsedCreepers = 0;
var blockTopLookup = [];
var doSpawning = false;
var blockVisibility = [];
var cap = 25;

function updateModeVisual() {
    if (inTitleScreen) {
        lockCharacter = true;
        characterOpacity = 0;
        scrollLock = true;
        document.getElementById("devConsoleButton").style.display = "none";
        document.getElementById("characterHUD").style.display = "none";
        document.getElementById("titleScreen").style.display = "block";
        cap = 5;
    }
    if (inWorld) {
        lockCharacter = false;
        characterOpacity = 1;
        scrollLock = false;
        document.getElementById("devConsoleButton").style.display = runServerTick ? "block" : "none";
        document.getElementById("titleScreen").style.display = "none";
        cap = 25;
    }
}
var thig51 = setInterval(updateModeVisual, 0);
function setIHTMLO() {
    initialHTMLOffset = document.getElementById("html").getBoundingClientRect().left * -1;
}
for (var i = 0; i < 10000; i++) {
    dotFrame.push(0);
}
document.addEventListener("mousemove", (e) => {
    mouseX = Math.floor(e.clientX / universalScale);
    mouseY = Math.floor(((((window.innerHeight * universalScale)) - e.clientY) / universalScale) - (window.innerHeight - (window.innerHeight / universalScale)));
});
function cycle(id) {
    if (!creeperOnLadder[id]) {
        creeperVector[id] = (2 * (Math.floor(Math.random() * 2))) - 1;
        setTimeout(cycle2, (Math.floor(Math.random() * 4000) + 1000), id);
        var random = Math.floor(Math.random() * 2);
        if (random == 0) {
            junpOrNot[id] = true;
        } else {
            junpOrNot[id] = false;
        }
    }
}
function cycle2(id) {
    if (usedCreepers[id]) {
        if (!runServerTick) {
            setTimeout(cycle2, (Math.floor(Math.random() * 4000) + 1000), id);
        } else {
            if (!preStandCheck[id]) {
                creeperVector[id] = 0;
                lookAround(id);
                var random = Math.floor(Math.random() * 2);
                if (!creeperOnLadder[id]) {
                    if (random == 0) {
                        setTimeout(cycle3, (Math.floor(Math.random() * 4000) + 1000), id);
                    } else {
                        setTimeout(cycle, (Math.floor(Math.random() * 4000) + 1000), id);
                    }
                }
            }
        }
    }
}
function cycle3(id) {
    if (!creeperOnLadder[id] && creeperOnGround[id]) {
        if (!creeperInFan[id]) {
            jumpC(id);
        }
        cycle2(id);
    }
}
function updateBlockPlacement(wid, hei, type) {
    if (type == "crate" || type == "big_crate" || type == "double_big_crate" || type == "tnt" || type == "10xtnt" || type == "100xtnt" || type == "1000xtnt") {
        if (mouseX > worldWidth - (wid / 2)) {
            document.getElementById("blockPlacementGuide").style.left = String(worldWidth - wid) + "px";
        } else if (mouseX < wid / 2) {
            document.getElementById("blockPlacementGuide").style.left = "0px";
        } else {
            document.getElementById("blockPlacementGuide").style.left = String(mouseX - (wid / 2)) + "px";
        }
        if (type == "crate" || type == "tnt") {
            var offset = 32;
        } else if (type == "big_crate") {
            var offset = 64;
        } else if (type == "double_big_crate") {
            var offset = 96;
        } else if (type == "10xtnt") {
            var offset = 40;
        } else if (type == "100xtnt") {
            var offset = 48;
        } else if (type == "1000xtnt") {
            var offset = 56;
        }
        document.getElementById("blockPlacementGuide").style.borderRadius = "0px";
        document.getElementById("blockPlacementGuide").style.bottom = String(getClosestBlock(mouseX, mouseY + (window.innerHeight - (window.innerHeight / universalScale)), offset)) + "px";
        document.getElementById("blockPlacementGuide").style.width = String(wid - 10) + "px";
        document.getElementById("blockPlacementGuide").style.height = String(hei - 10) + "px";
        document.getElementById("bpgHitbox").style.width = String(wid) + "px";
        document.getElementById("bpgHitbox").style.height = String(hei) + "px";
        document.getElementById("bpgHitbox").style.left = String(getBPGX()) + "px";
        
        document.getElementById("launcherGuide").style.display = "none";
    } else if (type == "bomb") {
        if (mouseX > worldWidth - (wid / 2)) {
            document.getElementById("blockPlacementGuide").style.left = String(worldWidth - wid) + "px";
        } else if (mouseX < wid / 2) {
            document.getElementById("blockPlacementGuide").style.left = "0px";
        } else {
            document.getElementById("blockPlacementGuide").style.left = String(mouseX - (wid / 2)) + "px";
        }
        document.getElementById("blockPlacementGuide").style.bottom = String(mouseY - 25 + (window.innerHeight - (window.innerHeight / universalScale))) + "px";
        document.getElementById("blockPlacementGuide").style.borderRadius = "50px";
        document.getElementById("blockPlacementGuide").style.width = String(wid - 10) + "px";
        document.getElementById("blockPlacementGuide").style.height = String(hei - 10) + "px";
        document.getElementById("bpgHitbox").style.width = String(wid) + "px";
        document.getElementById("bpgHitbox").style.height = String(hei) + "px";
        document.getElementById("bpgHitbox").style.left = String(getBPGX()) + "px";
        document.getElementById("bpgHitbox").style.left = String(mouseY - 25 + (window.innerHeight - (window.innerHeight / universalScale))) + "px";
        
        document.getElementById("launcherGuide").style.display = "none";
    } else if (type == "tennis_ball") {
        if (mouseX > worldWidth - (wid / 2)) {
            document.getElementById("blockPlacementGuide").style.left = String(worldWidth - wid) + "px";
        } else if (mouseX < wid / 2) {
            document.getElementById("blockPlacementGuide").style.left = "0px";
        } else {
            document.getElementById("blockPlacementGuide").style.left = String(mouseX - (wid / 2)) + "px";
        }
        document.getElementById("blockPlacementGuide").style.bottom = String(mouseY - 16 + (window.innerHeight - (window.innerHeight / universalScale))) + "px";
        document.getElementById("blockPlacementGuide").style.borderRadius = "50px";
        document.getElementById("blockPlacementGuide").style.width = String(wid - 10) + "px";
        document.getElementById("blockPlacementGuide").style.height = String(hei - 10) + "px";
        document.getElementById("bpgHitbox").style.width = String(wid) + "px";
        document.getElementById("bpgHitbox").style.height = String(hei) + "px";
        document.getElementById("bpgHitbox").style.left = String(getBPGX()) + "px";
        document.getElementById("bpgHitbox").style.left = String(mouseY - 16 + (window.innerHeight - (window.innerHeight / universalScale))) + "px";

        document.getElementById("launcherGuide").style.display = "none";
    } else if (type == "launcher") {
        document.getElementById("blockPlacementGuide").style.display = "none";
        document.getElementById("launcherGuide").style.display = "inline";
        document.getElementById("bpgHitbox").style.width = String(wid) + "px";
        document.getElementById("bpgHitbox").style.height = String(hei) + "px";
        document.getElementById("bpgHitbox").style.left = String(getBPGX()) + "px";
        document.getElementById("bpgHitbox").style.left = String(mouseY - 24 + (window.innerHeight - (window.innerHeight / universalScale))) + "px";
    }
}
function getClosestBlock(x, y, offset) {
    var maximumHeight = -10000;
    for (var i = 0; i < blockBoundingBoxes.length; i++) {
        if (blockBoundingBoxes[i].left < x + offset && blockBoundingBoxes[i].right > x - offset) {
            if (((window.innerHeight * universalScale) + (window.innerHeight - document.getElementById("html").getBoundingClientRect().height) - blockBoundingBoxes[i].top) < y && ((window.innerHeight * universalScale) + (window.innerHeight - document.getElementById("html").getBoundingClientRect().height) - blockBoundingBoxes[i].top) > maximumHeight) {
                maximumHeight = (window.innerHeight * universalScale) + (window.innerHeight - document.getElementById("html").getBoundingClientRect().height) - blockBoundingBoxes[i].top;
            }
        }
    }
    return implyHigherY(maximumHeight);
}
function scaleBoundingBox(box) {
    var plcbox = box;
    plcbox.bottom = Math.round((box.bottom / universalScale) + (window.innerHeight - (window.innerHeight / universalScale)));
    plcbox.height = Math.round(box.height / universalScale);
    plcbox.left = Math.round(box.left / universalScale);
    plcbox.right = Math.round(box.right / universalScale);
    plcbox.top = Math.round((box.top / universalScale) + (window.innerHeight - (window.innerHeight / universalScale)));
    plcbox.width = Math.round(box.width / universalScale);
    plcbox.x = Math.round(box.x / universalScale);
    plcbox.y = Math.round((box.y / universalScale) + (window.innerHeight - (window.innerHeight / universalScale)));
    return plcbox;
    // - (window.innerHeight - (window.innerHeight / universalScale))
}
function implyHigherY(y) {
    var prevoof = false;
    document.getElementById("bpgHitbox").style.bottom = String(y + (window.innerHeight - (window.innerHeight / universalScale))) + "px";
    for (var i = 0; i < blockBoundingBoxes.length; i++) {
        if (boundingBoxCheck(scaleBoundingBox(document.getElementById("bpgHitbox").getBoundingClientRect()), blockBoundingBoxes[i])) {
            prevoof = i;
        }
    }
    if (prevoof === false) {
        document.getElementById("blockPlacementGuide").style.bottom = String(y + (window.innerHeight - (window.innerHeight / universalScale))) + "px";
    } else {
        implyHigherY((window.innerHeight * universalScale) + (window.innerHeight - document.getElementById("html").getBoundingClientRect().height) - blockBoundingBoxes[prevoof].top);
    }
}
function getClosestBlockHalo(x, y, offset) {
    var maximumHeight = -10000;
    for (var i = 0; i < blockBoundingBoxes.length; i++) {
        if (blockBoundingBoxes[i].left < x + offset && blockBoundingBoxes[i].right > x) {
            if (((window.innerHeight * universalScale) + (window.innerHeight - document.getElementById("html").getBoundingClientRect().height) - blockBoundingBoxes[i].top) < y && ((window.innerHeight * universalScale) + (window.innerHeight - document.getElementById("html").getBoundingClientRect().height) - blockBoundingBoxes[i].top) > maximumHeight) {
                maximumHeight = (window.innerHeight * universalScale) + (window.innerHeight - document.getElementById("html").getBoundingClientRect().height) - blockBoundingBoxes[i].top;
            }
        }
    }
    return implyHigherYHalo(maximumHeight);
}
function implyHigherYHalo(y) {
    var prevoof = false;
    document.getElementById("haloHitbox").style.bottom = String(y + (window.innerHeight - (window.innerHeight / universalScale))) + "px";
    for (var i = 0; i < blockBoundingBoxes.length; i++) {
        if (boundingBoxCheck(scaleBoundingBox(document.getElementById("haloHitbox").getBoundingClientRect()), blockBoundingBoxes[i])) {
            prevoof = i;
        }
    }
    if (prevoof === false) {
        document.getElementById("placerHalo").style.bottom = String(y + (window.innerHeight - (window.innerHeight / universalScale))) + "px";
    } else {
        implyHigherYHalo((window.innerHeight * universalScale) + (window.innerHeight - document.getElementById("html").getBoundingClientRect().height) - blockBoundingBoxes[prevoof].top);
    }
}
function getClosestBlockOffset() {
    var splitwhe = document.getElementById("blockPlacementGuide").style.bottom.split("");
    var removal = splitwhe.splice(splitwhe.length - 2, 2);
    return parseInt(splitwhe.join("")) + characterScreenOffset - Math.ceil(window.innerHeight - (window.innerHeight / universalScale));
}
function getClosestBlockHaloOffset() {
    var splitwhe = document.getElementById("placerHalo").style.bottom.split("");
    var removal = splitwhe.splice(splitwhe.length - 2, 2);
    return parseInt(splitwhe.join("")) + characterScreenOffset - Math.ceil(window.innerHeight - (window.innerHeight / universalScale));
}
function getBPGX() {
    var splitwhe = document.getElementById("blockPlacementGuide").style.left.split("");
    var removal = splitwhe.splice(splitwhe.length - 2, 2);
    return parseInt(splitwhe.join(""));
}
function getHHX() {
    var splitwhe = document.getElementById("placerHalo").style.left.split("");
    var removal = splitwhe.splice(splitwhe.length - 2, 2);
    return parseInt(splitwhe.join(""));
}
var thig19 = setInterval(detectSelected, 0);
function detectSelected() {
    if (selectedCharacterID >= 0) {
        if (characterInventory[selectedCharacterID].id == 6) {
            //crate
            document.getElementById("blockPlacementGuide").style.display = "inline";
            updateBlockPlacement(64, 64, "crate");
            placeObject = "crate";
        } else if (characterInventory[selectedCharacterID].id == 7) {
            //big_crate
            document.getElementById("blockPlacementGuide").style.display = "inline";
            updateBlockPlacement(128, 128, "big_crate");
            placeObject = "big_crate";
        } else if (characterInventory[selectedCharacterID].id == 8) {
            //double_big_crate
            document.getElementById("blockPlacementGuide").style.display = "inline";
            updateBlockPlacement(192, 192, "double_big_crate");
            placeObject = "double_big_crate";
        } else if (characterInventory[selectedCharacterID].id == 9) {
            //tnt
            document.getElementById("blockPlacementGuide").style.display = "inline";
            updateBlockPlacement(64, 64, "tnt");
            placeObject = "tnt";
        } else if (characterInventory[selectedCharacterID].id == 10) {
            //10xtnt
            document.getElementById("blockPlacementGuide").style.display = "inline";
            updateBlockPlacement(80, 80, "10xtnt");
            placeObject = "10xtnt";
        } else if (characterInventory[selectedCharacterID].id == 11) {
            //100xtnt
            document.getElementById("blockPlacementGuide").style.display = "inline";
            updateBlockPlacement(96, 96, "100xtnt");
            placeObject = "100xtnt";
        } else if (characterInventory[selectedCharacterID].id == 12) {
            //1000xtnt
            document.getElementById("blockPlacementGuide").style.display = "inline";
            updateBlockPlacement(112, 112, "1000xtnt");
            placeObject = "1000xtnt";
        } else if (characterInventory[selectedCharacterID].id == 1) {
            document.getElementById("blockPlacementGuide").style.display = "inline";
            updateBlockPlacement(50, 50, "bomb");
            placeObject = "bomb";
        } else if (characterInventory[selectedCharacterID].id == 2) {
            document.getElementById("blockPlacementGuide").style.display = "inline";
            updateBlockPlacement(32, 32, "tennis_ball");
            placeObject = "tennis_ball";
        } else if (characterInventory[selectedCharacterID].id == 16) {
            updateBlockPlacement(48, 48, "launcher");
            placeObject = "launcher";
        } else {
            document.getElementById("blockPlacementGuide").style.display = "none";
            placeObject = false;
        }
        try {
            var dumbo = characterInventory[selectedCharacterID].amount;
        } catch {
            changeHeldItem(-1);
        }
    } else {
        document.getElementById("blockPlacementGuide").style.display = "none";
        placeObject = false;
    }
}
function limitStringToNumbers(str) {
    var plith = str.split("");
    var wheeb;
    for (var i = 0; i < plith.length; i++) {
        if (plith[i] !== "0" && plith[i] !== "1" && plith[i] !== "2" && plith[i] !== "3" && plith[i] !== "4" && plith[i] !== "5" && plith[i] !== "6" && plith[i] !== "7" && plith[i] !== "8" && plith[i] !== "9") {
            wheeb = plith.splice(i, 1);
        }
    }
    return plith.join("");
}
function fixAmountInput() {
    document.getElementById("buyAmountInput").value = limitStringToNumbers(document.getElementById("buyAmountInput").value);
}
function changeAmountInput(ch) {
    var thoosh = parseInt(document.getElementById("buyAmountInput").value);
    thoosh += ch;
    if (thoosh < 0) {
        thoosh = 0;
    }
    document.getElementById("buyAmountInput").value = String(thoosh);
    currentBuyAmount = thoosh;
}
var thig16 = setInterval(fixAmountInput, 0);
function junpCheck(id) {
    if (junpOrNot[id] == true) {
        if (creeperBoxes[id].left < objectUnderCreeper[id].left) {
            junpOrNot[id] = 0;
            setTimeout(jumpC, (700 / 3), id);
        }
    }
}
function ladderFrameC(id) {
    creeperLocation[id][1] += creeperLadderVert[id];
    creeperLadderCheck[id] = false;
    if (creeperLadderVert[id] == 5) {
        creeperLadderCheck[id] = false;
        for (var i = 0; i < ladderCount; i++) {
            if (boundingBoxCheck(creeperBoxes[id], ladderBoxes[i]) && usedLadders[i]) {
                creeperLadderCheck[id] = true;
                creeperSavedLadderID[id] = i;
            }
        }
        if (creeperLadderCheck[id]) {
            setTimeout(ladderFrameC, (1000 / 60), id);
        } else {
            creeperLadderVert[id] = 0;
            creeperOnLadder[id] = false;
            creeperOnGround[id] = true;
            objectUnderCreeper[id] = ladderBoxes[creeperSavedLadderID[id]];
            objectIDUnderCreeper[id] = "l" + String(creeperSavedLadderID[id]);
            creeperLocation[id][1] -= 5;
            creeperLadderReset[id] = true;
            cycle2(id);
            setTimeout(forceResetLadderC, 5000, id);
        }
    } else if (creeperLadderVert[id] == -5) {
        creeperLadderCheck[id] = true;
        for (var i = 0; i < blockBoundingBoxes.length; i++) {
            if (boundingBoxCheck(creeperBoxes[id], blockBoundingBoxes[i])) {
                creeperLadderCheck[id] = false;
            }
        }
        if (creeperLadderCheck[id]) {
            setTimeout(ladderFrameC, (1000 / 60), id);
        } else {
            creeperLadderVert[id] = 0;
            creeperOnLadder[id] = false;
            creeperLadderReset[id] = true;
            creeperLocation[id][1] += 5;
            jumbC(id);
            cycle2(id);
            setTimeout(forceResetLadderC, 5000, id);
        }
    }
}
function lookAtDestination(sx, sy, x, y, id) {
    var dx = x - sx;
    var dy = y - sy;
    var radius = Math.sqrt((dx ** 2) + (dy ** 2));
    var factor = radius / 17.5;
    document.getElementById("creeper" + String(id) + "face").style.left = String(Math.floor(dx / factor) + 27.5) + "px";
    document.getElementById("creeper" + String(id) + "face").style.bottom = String(Math.floor(dy / factor) + 187.5) + "px";
}
function updateSimulatedFace() {
    var dx = mouseX - ((document.getElementById("simulatedCreeper").getBoundingClientRect().left / universalScale) + 40);
    var dy = (mouseY - (((window.innerHeight * universalScale) + (window.innerHeight - document.getElementById("html").getBoundingClientRect().height) - (document.getElementById("simulatedCreeper").getBoundingClientRect().top / universalScale)) - 40) + (window.innerHeight - (window.innerHeight / universalScale))) * -1;
    var radius = Math.sqrt((dx ** 2) + (dy ** 2));
    var factor = radius / 17.5;
    document.getElementById("simulatedFace").style.left = String(Math.floor(dx / factor) + 47.5) + "px";
    document.getElementById("simulatedFace").style.top = String(Math.floor(dy / factor) + 325) + "px";
    if (characterWearables[0] == 13) {
        document.getElementById("simWear1").style.left = String(Math.floor(dx / factor) + 30) + "px";
        document.getElementById("simWear1").style.top = String(Math.floor(dy / factor) + 295) + "px";
    }
}
var thig30 = setInterval(updateSimulatedFace, 0);
function summonCreepers(numbo, x, y, s) {
    for (var i = 0; i < numbo; i++) {
        total += "<div id='creeper" + String(i + creeperCount) + "' class='creeper'><img src='assets/creeper_base.png' id='creeper" + String(i + creeperCount) + "base' class='creeperBase'><img src='assets/creeper_face.png' id='creeper" + String(i + creeperCount) + "face' class='creeperFace'></div>";
    }
    document.getElementById("creepers").innerHTML = total;
    for (var i = 0; i < numbo; i++) {
        creeperLocation.push([x, y]);
        document.getElementById("creeper" + String(i + creeperCount)).style.left = String(creeperLocation[i][0]) + "px";
        document.getElementById("creeper" + String(i + creeperCount)).style.bottom = String(creeperLocation[i][1]) + "px";
        creeperBoxes.push(scaleBoundingBox(document.getElementById("creeper" + String(i + creeperCount)).getBoundingClientRect()));
        creeperOnGround.push(false);
        creeperVector.push(0);
        usedCreepers.push(true);
        creeperExplosionVector.push(0);
        creeperLeafBlowerVector.push(0);
        creeperVert.push(0);
        junpOrNot.push(0);
        creeperVisibility.push(true);
        creeperOnLadder.push(false);
        creeperInFan.push(false);
        creeperLadderCheck.push(false);
        creeperLadderReset.push(false);
        preStandCheck.push(false);
        standCheck.push(-1);
        creeperLadderState.push(0);
        creeperSavedLadderID.push(0);
        creeperManning.push(s);
        creeperFanStack.push({fanElligibility: []});
        standManning.push(i + creeperCount);
        objectUnderCreeper.push("");
        objectIDUnderCreeper.push("");
        var whe = document.createElement("div");
        whe.id = "standsq" + String(i + creeperCount);
        document.getElementById("standSquares").appendChild(whe);
        whe.style.position = "absolute";
        whe.style.width = "300px";
        whe.style.height = "300px";
        whe.style.border = "0px solid rgba(0, 0, 0, 0)";
        standSquareBoxes.push(scaleBoundingBox(whe.getBoundingClientRect()));
        for (var j = 0; j < blockBoundingBoxes.length; j++) {
            creeperRange.push(false);
        }
        fallCTimeouts.push(setInterval(fallC, 0, (i + creeperCount)));
        jumbC(i + creeperCount);
        if (s === false) {
            cycle2(i + creeperCount);
        } else {

        }
        junps.push(setInterval(junpCheck, 0, (i + creeperCount)));
    }
    creeperCount += numbo;
}
function moveCharacterX() {
    if (characterOnGround || characterOnLadder) {
        characterVert = 0;
        characterExplosionVector = 0;
    }
    if (runServerTick) {
        characterLocation[0] += (5 * characterVector * speedFactor) + characterExplosionVector;
    }
    if (characterLocation[0] < 0) {
        characterLocation[0] = 0;
    } else if (characterLocation[0] > (worldWidth - 80)) {
        characterLocation[0] = (worldWidth - 80);
    }
    if (!boundingBoxCheck(characterBox, ladderBoxes[characterLadderID]) && !characterOnLadder && characterVector !== 0 && ladderFall) {
        characterOnLadder = false;
        ladderFall = false;
        characterVert = 0;
        gravityFrame();
    }
    blocksCheck();
}
function updateCharacterPos() {
    if (!scrollLock && characterLocation[1] > (((window.innerHeight / 2) / universalScale) - 120)) {
        characterScreenOffset = Math.floor(characterLocation[1] - (((window.innerHeight / 2) / universalScale) - 120));
    } else {
        characterScreenOffset = 0;
    }
    document.getElementById("characterCreeper").style.left = String(characterLocation[0]) + "px";
    document.getElementById("characterCreeper").style.bottom = String(characterLocation[1] - characterScreenOffset + (window.innerHeight - (window.innerHeight / universalScale))) + "px";
    document.getElementById("characterCreeper").style.opacity = String(characterOpacity * 100) + "%";
    if (currentHeldType == 1) {
        document.getElementById("characterHeldItem").style.width = "100px";
        document.getElementById("characterHeldItem").style.height = "100px";
        document.getElementById("characterHeldItem").style.left = String(characterLocation[0] + heldItemDirectionOffset + weaponOffsetX) + "px";
        document.getElementById("characterHeldItem").style.bottom = String(characterLocation[1] + 90 - characterScreenOffset + weaponOffsetY + (window.innerHeight - (window.innerHeight / universalScale))) + "px";
    } else if (currentHeldType == 2) {
        document.getElementById("characterHeldItem").style.width = "128px";
        document.getElementById("characterHeldItem").style.height = "128px";
        if (selectedCharacterID !== -1 && RightClickHeld && characterInventory[selectedCharacterID].id == 27) {
            document.getElementById("characterHeldItem").style.left = String(characterLocation[0] + heldItemDirectionOffset + weaponOffsetX + (Math.floor(Math.random() * 15) - 7)) + "px";
            document.getElementById("characterHeldItem").style.bottom = String(characterLocation[1] + 90 - characterScreenOffset + weaponOffsetY + (Math.floor(Math.random() * 15) - 7) + (window.innerHeight - (window.innerHeight / universalScale))) + "px";
        } else {
            document.getElementById("characterHeldItem").style.left = String(characterLocation[0] + heldItemDirectionOffset + weaponOffsetX) + "px";
            document.getElementById("characterHeldItem").style.bottom = String(characterLocation[1] + 90 - characterScreenOffset + weaponOffsetY + (window.innerHeight - (window.innerHeight / universalScale))) + "px";
        }
    } else {
        document.getElementById("characterHeldItem").style.width = "64px";
        document.getElementById("characterHeldItem").style.height = "64px";
        if (selectedCharacterID !== -1 && RightClickHeld && characterInventory[selectedCharacterID].id == 26) {
            document.getElementById("characterHeldItem").style.left = String(characterLocation[0] + heldItemDirectionOffset + (Math.floor(Math.random() * 15) - 7)) + "px";
            document.getElementById("characterHeldItem").style.bottom = String(characterLocation[1] + 90 - characterScreenOffset + (Math.floor(Math.random() * 15) - 7) + (window.innerHeight - (window.innerHeight / universalScale))) + "px";
        } else {
            document.getElementById("characterHeldItem").style.left = String(characterLocation[0] + heldItemDirectionOffset) + "px";
            document.getElementById("characterHeldItem").style.bottom = String(characterLocation[1] + 90 - characterScreenOffset + (window.innerHeight - (window.innerHeight / universalScale))) + "px";
        }
        document.getElementById("characterHeldItem").style.rotate = "0deg";
    }
    if (selectedCharacterID !== -1 && (characterInventory[selectedCharacterID].id == 16 || characterInventory[selectedCharacterID].id == 17 || characterInventory[selectedCharacterID].id == 26 || characterInventory[selectedCharacterID].id == 27)) {
        if (characterFaceLauncher == left) {
            document.getElementById("characterHeldItem").style.transform = "scaleX(-1)";
        } else {
            document.getElementById("characterHeldItem").style.transform = "scaleX(1)";
        }
    }
}

var thig2 = setInterval(updateCharacterPos, (1000 / 60));
var thig3 = setInterval(moveCharacterX, (1000 / 60));
function moveCreeperX() {
    for (var i = 0; i < creeperCount; i++) {
        if (creeperOnGround[i] || creeperOnLadder[i]) {
            creeperExplosionVector[i] = 0;
        }
        if (Math.abs(creeperLeafBlowerVector[i]) < 1) {
            creeperLeafBlowerVector[i] = 0;
        }
        if (creeperLeafBlowerVector[i] > 0) {
            creeperLeafBlowerVector[i]--;
        } else if (creeperLeafBlowerVector[i] < 0) {
            creeperLeafBlowerVector[i]++;
        }
        if (!preStandCheck[i] && runServerTick) {
            creeperLocation[i][0] += (5 * creeperVector[i]) + creeperExplosionVector[i] + creeperLeafBlowerVector[i];
        }
        if (creeperLocation[i][0] < 0) {
            creeperLocation[i][0] = 0;
        } else if (creeperLocation[i][0] > (worldWidth - 80)) {
            creeperLocation[i][0] = (worldWidth - 80);
        }
        creeperLadderState[i] = 0;
        for (var j = 0; j < ladderCount; j++) {
            var plc = objectIDUnderCreeper[i].split("");
            if (plc[0] == "l") {
                if (!creeperOnLadder[i] && creeperOnGround[i] && creeperLocation[i][0] > (ladderBoxes[j].left - 5) && creeperLocation[i][0] < (ladderBoxes[j].left + 5)) {
                    var random = Math.floor(Math.random() * 3);
                    if (random == 0 && !creeperLadderReset[i]) {
                        creeperLadderState[i] = 2;
                        creeperSavedLadderID[i] = j;
                    }
                }
            } else if (boundingBoxCheck(creeperBoxes[i], ladderBoxes[j])) {
                if (!creeperOnLadder[i] && creeperOnGround[i] && creeperLocation[i][0] > (ladderBoxes[j].left - 5) && creeperLocation[i][0] < (ladderBoxes[j].left + 5)) {
                    var random = Math.floor(Math.random() * 3);
                    if (random == 0 && !creeperLadderReset[i]) {
                        creeperLadderState[i] = 1;
                        creeperSavedLadderID[i] = j;
                    }
                }
            }
        }
        if (creeperLadderState[i] == 1) {
            creeperVector[i] = 0;
            creeperLocation[i][0] = ladderBoxes[creeperSavedLadderID[i]].left;
            creeperOnGround[i] = false;
            creeperOnLadder[i] = true;
            creeperLadderVert[i] = 5;
            ladderFrameC(i);
        } else if (creeperLadderState[i] == 2) {
            creeperVector[i] = 0;
            creeperLocation[i][0] = ladderBoxes[creeperSavedLadderID[i]].left;
            creeperOnGround[i] = false;
            creeperOnLadder[i] = true;
            creeperLadderVert[i] = -5;
            ladderFrameC(i);
        }
        creeperLadderState[i] = 0;
        if (!preStandCheck[i]) {
            standCheck[i] = -1;
        }
        for (var j = 0; j < standBoxes.length; j++) {
            if (!creeperOnLadder[i] && creeperOnGround[i] && creeperManning[i] === false && !preStandCheck[i] && boundingBoxCheck(standSquareBoxes[i], standBoxes[j])) {
                standCheck[i] = j;
                preStandCheck[i] = true;
            }
        }
        if (preStandCheck[i] && creeperVector[i] !== 0) {
            creeperVector[i] = 0;
            if (standDirection[standCheck[i]] === "right") {
                document.getElementById("creeper" + String(i) + "face").style.left = "10px";
                document.getElementById("creeper" + String(i) + "face").style.bottom = "187.5px";
                creeperLocation[i][0] = standBoxes[standCheck[i]].right + 105;
                var randomItemIndex = Math.floor(Math.random() * standPrices[standCheck[i]].length);
                var whe3 = document.createElement("img");
                whe3.id = "tradableItem" + String(i) + ":" + String(standCheck[i]);
                document.getElementById("tradeItems").appendChild(whe3);
                whe3.style.width = "64px";
                whe3.style.height = "64px";
                whe3.style.position = "absolute";
                whe3.style.left = String(creeperLocation[i][0] - 60) + "px";
                whe3.style.bottom = String(creeperLocation[i][1] + 90 - characterScreenOffset + (window.innerHeight - (window.innerHeight / universalScale))) + "px";
                if (standPrices[standCheck[i]][randomItemIndex] >= 2000) {
                    whe3.src = "assets/items/dollar_bill3.png";
                } else if (standPrices[standCheck[i]][randomItemIndex] >= 500) {
                    whe3.src = "assets/items/dollar_bill2.png";
                } else {
                    whe3.src = "assets/items/dollar_bill.png";
                }
                var whe4 = document.createElement("img");
                whe4.id = "tradableItem" + String(standCheck[i]) + ":" + String(i);
                document.getElementById("tradeItems").appendChild(whe4);
                whe4.style.width = "64px";
                whe4.style.height = "64px";
                whe4.style.position = "absolute";
                whe4.style.left = String(standX(standCheck[i]) + 75) + "px";
                whe4.style.bottom = String(creeperLocation[i][1] + 90 - characterScreenOffset + (window.innerHeight - (window.innerHeight / universalScale))) + "px";
                whe4.src = standInventory[standCheck[i]][randomItemIndex].img;
                elementlocation.push(creeperLocation[i][0] - 60);
                elementlocation.push(standX(standCheck[i]) + 75);
                elementlocation.push(creeperLocation[i][1]);
                setTimeout(swapFrame, 1000, whe3, whe4, 1, elementlocation.length - 3, 1, i);
                setTimeout(changePreStandCheck, 3500, i, 1, standCheck[i]);
                updateVerticalOffset(whe3, whe4, elementlocation.length - 3, i);
            } else if (standDirection[standCheck[i]] === "left") {
                document.getElementById("creeper" + String(i) + "face").style.left = "45px";
                document.getElementById("creeper" + String(i) + "face").style.bottom = "187.5px";
                creeperLocation[i][0] = standBoxes[standCheck[i]].left - 180;
                var randomItemIndex = Math.floor(Math.random() * standPrices[standCheck[i]].length);
                var whe1 = document.createElement("img");
                whe1.id = "tradableItem" + String(i) + ":" + String(standCheck[i]);
                document.getElementById("tradeItems").appendChild(whe1);
                whe1.style.width = "64px";
                whe1.style.height = "64px";
                whe1.style.position = "absolute";
                whe1.style.left = String(creeperLocation[i][0] + 75) + "px";
                whe1.style.bottom = String(creeperLocation[i][1] + 90 - characterScreenOffset + (window.innerHeight - (window.innerHeight / universalScale))) + "px";
                if (standPrices[standCheck[i]][randomItemIndex] >= 2000) {
                    whe1.src = "assets/items/dollar_bill3.png";
                } else if (standPrices[standCheck[i]][randomItemIndex] >= 500) {
                    whe1.src = "assets/items/dollar_bill2.png";
                } else {
                    whe1.src = "assets/items/dollar_bill.png";
                }
                var whe2 = document.createElement("img");
                whe2.id = "tradableItem" + String(standCheck[i]) + ":" + String(i);
                document.getElementById("tradeItems").appendChild(whe2);
                whe2.style.width = "64px";
                whe2.style.height = "64px";
                whe2.style.position = "absolute";
                whe2.style.left = String(standX(standCheck[i]) - 60) + "px";
                whe2.style.bottom = String(creeperLocation[i][1] + 90 - characterScreenOffset + (window.innerHeight - (window.innerHeight / universalScale))) + "px";
                whe2.src = standInventory[standCheck[i]][randomItemIndex].img;
                elementlocation.push(creeperLocation[i][0] + 75);
                elementlocation.push(standX(standCheck[i]) - 60);
                elementlocation.push(creeperLocation[i][1]);
                setTimeout(swapFrame, 1000, whe1, whe2, 0, elementlocation.length - 3, 0, i);
                setTimeout(changePreStandCheck, 3500, i, 0, standCheck[i]);
                updateVerticalOffset(whe1, whe2, elementlocation.length - 3, i);
            }
        }
        setTimeout(blocksCheckC, 1, i);
        if (creeperManning[i] === false) {} else {
            creeperLocation[i][0] = standX(creeperManning[i]);
            creeperLocation[i][1] = standLocation[creeperManning[i]].y;
        }
    }
}
function swapFrame(elem1, elem2, direction, savedElementLocationIndex, swapFrameCount) {
    if (direction == 0) {
        elem1.style.left = String(removePXfromStyle(elem1.style.left) + ((elementlocation[savedElementLocationIndex + 1] - elementlocation[savedElementLocationIndex]) / 60)) + "px";
        elem2.style.left = String(removePXfromStyle(elem2.style.left) - ((elementlocation[savedElementLocationIndex + 1] - elementlocation[savedElementLocationIndex]) / 60)) + "px";
        swapFrameCount++;
        if (swapFrameCount > 59) {
            setTimeout(removeTradeElement, 1000, elem1, elem2);
        } else {
            setTimeout(swapFrame, 500 / 60, elem1, elem2, 0, savedElementLocationIndex, swapFrameCount);
        }
    } else if (direction == 1) {
        elem1.style.left = String(removePXfromStyle(elem1.style.left) - ((elementlocation[savedElementLocationIndex] - elementlocation[savedElementLocationIndex + 1]) / 60)) + "px";
        elem2.style.left = String(removePXfromStyle(elem2.style.left) + ((elementlocation[savedElementLocationIndex] - elementlocation[savedElementLocationIndex + 1]) / 60)) + "px";
        swapFrameCount++;
        if (swapFrameCount > 59) {
            setTimeout(removeTradeElement, 1000, elem1, elem2);
        } else {
            setTimeout(swapFrame, 500 / 60, elem1, elem2, 1, savedElementLocationIndex, swapFrameCount);
        }
    }
}
function removeTradeElement(elem1, elem2) {
    elem1.remove();
    elem2.remove();
}
function changePreStandCheck(id, direction, stand) {
    if (direction == 0) {
        creeperLocation[id][0] = standBoxes[stand].left - 190;
    } else if (direction == 1) {
        creeperLocation[id][0] = standBoxes[stand].right + 115;
    }
    creeperVector[id] = (2 * direction) - 1;
    setTimeout(cycle2, (Math.floor(Math.random() * 4000) + 1000), id);
    lookAround(id);
    var random = Math.floor(Math.random() * 2);
    if (random == 0) {
        junpOrNot[id] = true;
    } else {
        junpOrNot[id] = false;
    }
    preStandCheck[id] = false;
}
function updateVerticalOffset(elem1, elem2, savedElementLocationIndex, creepID) {
    if (preStandCheck[creepID]) {
        elem1.style.bottom = String(elementlocation[savedElementLocationIndex + 2] + 90 - characterScreenOffset + (window.innerHeight - (window.innerHeight / universalScale))) + "px";
        elem2.style.bottom = String(elementlocation[savedElementLocationIndex + 2] + 90 - characterScreenOffset + (window.innerHeight - (window.innerHeight / universalScale))) + "px";
        setTimeout(updateVerticalOffset, 1, elem1, elem2, savedElementLocationIndex, creepID);
    }
}
function forceResetLadderC(id) {
    creeperLadderReset[id] = false;
}
function updateCreeperPos() {
    for (var i = 0; i < creeperCount; i++) {
        if (usedCreepers[i]) {
            document.getElementById("creeper" + String(i)).style.left = String(creeperLocation[i][0]) + "px";
            document.getElementById("creeper" + String(i)).style.bottom = String(creeperLocation[i][1] - characterScreenOffset + (window.innerHeight - (window.innerHeight / universalScale))) + "px";
            document.getElementById("standsq" + String(i)).style.left = String(creeperLocation[i][0] - 110) + "px";
            document.getElementById("standsq" + String(i)).style.bottom = String(creeperLocation[i][1] - characterScreenOffset + (window.innerHeight - (window.innerHeight / universalScale))) + "px";
        }
    }
}
var thig7 = setInterval(updateCreeperPos, 0);
var thig8 = setInterval(moveCreeperX, (1000 / 60));
function airHornTrigger() {
    if (characterFaceLauncher == left) {
        leafBlower([characterLocation[0], characterLocation[1] + 60], 60, 5, characterFaceLauncher, 250);
    } else if (characterFaceLauncher == right) {
        leafBlower([characterLocation[0] + 80, characterLocation[1] + 60], 60, 5, characterFaceLauncher, 250);
    }
}
function leafBlowerTrigger() {
    if (characterFaceLauncher == left) {
        leafBlower([characterLocation[0], characterLocation[1] + 60], 60, 15, characterFaceLauncher, 500);
        currentLeafDots.push(new LeafDot([characterLocation[0] - 100, characterLocation[1] + 105 + Math.floor(Math.random() * 10)], characterFaceLauncher, 10, 20));
    } else if (characterFaceLauncher == right) {
        leafBlower([characterLocation[0] + 80, characterLocation[1] + 60], 60, 15, characterFaceLauncher, 500);
        currentLeafDots.push(new LeafDot([characterLocation[0] + 180, characterLocation[1] + 105 + Math.floor(Math.random() * 10)], characterFaceLauncher, 10, 20));
    }
}
class LeafDot {
    constructor(originPoint, direction, speed, expirationTime) {
        this.originPoint = originPoint;
        this.direction = direction;
        this.speed = speed;
        this.expirationTime = expirationTime;
        this.expired = false;
        this.tick = 0;
        this.x = 0;
        if (direction == left) {
            this.x = -20;
        }
        this.y = 0;
        this.element = document.createElement("div");
        this.element.classList.add("leafDot");
        document.getElementById("leafDots").append(this.element);
        setTimeout(this.frame, (1000 / 60), this);
    }
    frame(obj) {
        obj.tick++;
        if (obj.tick == obj.expirationTime) {
            obj.element.remove();
            obj.expired = true;
        } else {
            if (obj.direction == left) {
                obj.x -= obj.speed;
            } else if (obj.direction == right) {
                obj.x += obj.speed;
            }
            obj.element.style.left = String(obj.originPoint[0] + obj.x) + "px";
            obj.element.style.bottom = String(obj.originPoint[1] + obj.y + (window.innerHeight - (window.innerHeight / universalScale))) + "px";
            obj.element.style.opacity = String(1 - (obj.tick / obj.expirationTime));
            setTimeout(obj.frame, (1000 / 60), obj);
        }
    }
}
var air_horn_audio = new Audio("assets/audio/item/air_horn.wav");
var leaf_blower_audio = new Audio("assets/audio/item/leaf_blower.wav");
var thig46;
air_horn_audio.volume = 0.5;
leaf_blower_audio.volume = 0.5;
function startRightClick() {
    if (selectedCharacterID !== -1) {
        if (characterInventory[selectedCharacterID].id == 26) {
            air_horn_audio.src = "assets/audio/item/air_horn.wav";
            air_horn_audio.load();
            try {
                air_horn_audio.preservesPitch = false;
                air_horn_audio.mozPreservesPitch = false;
                air_horn_audio.webkitPreservesPitch = false;
            } finally {
                if (Math.random() < 0.8) {
                    air_horn_audio.playbackRate = (Math.random() * 0.4) + 0.8;
                } else {
                    if (Math.random() < 0.5) {
                        air_horn_audio.playbackRate = (Math.random() * 0.75) + 0.75;
                    } else {
                        air_horn_audio.playbackRate = 0.5;
                    }
                }
            }
            try {
                air_horn_audio.play();
            } finally {
                thig46 = setInterval(airHornTrigger, 1000 / 60);
            }
        } else if (characterInventory[selectedCharacterID].id == 27) {
            leaf_blower_audio.src = "assets/audio/item/leaf_blower.wav";
            leaf_blower_audio.load();
            try {
                leaf_blower_audio.play();
            } finally {
                thig46 = setInterval(leafBlowerTrigger, 1000 / 60);
            }
        } else {
            if (characterInventory[selectedCharacterID].type == "usable") {
                characterInventory[selectedCharacterID].action();
                removeItemFromInventory(selectedCharacterID, 1);
            } else if (characterInventory[selectedCharacterID].type == "infinitive_usable") {
                characterInventory[selectedCharacterID].action();
            }
        }
    }
}
function stopRightClick() {
    air_horn_audio.pause();
    leaf_blower_audio.pause();
    clearInterval(thig46);
}
function onScroll(dir) {
    if (dir == up) {
        if (!elementConsoleOpen && !inventoryShown && !standInventoryShown && !crateInventoryShown && runServerTick && characterInventory.length !== 0) {
            if (selectedCharacterID >= characterInventory.length - 1) {
                changeHeldItem(0);
            } else {
                changeHeldItem(selectedCharacterID + 1);
            }
        }
    } else if (dir == down) {
        if (!elementConsoleOpen && !inventoryShown && !standInventoryShown && !crateInventoryShown && runServerTick && characterInventory.length !== 0) {
            if (selectedCharacterID <= 0) {
                changeHeldItem(characterInventory.length - 1);
            } else {
                changeHeldItem(selectedCharacterID - 1);
            }
        }
    }
    stopRightClick();
}
document.onkeydown = function(e) {
    if (!elementConsoleOpen && !lockCharacter) {
        if (e.code == "ArrowLeft" && !inventoryShown && !standInventoryShown && !crateInventoryShown && runServerTick) {
            if (!xLeftOverride) {
                characterVector = -1;
            } else {
                characterVector = 0;
            }
            for (var i = 0; i < blockBoundingBoxes.length; i++) {
                if (!previousAirFrame[i] && characterBox.top < blockBoundingBoxes[i].bottom) {
                    if (characterVector == 1 && boundingBoxCheck(characterBox, blockBoundingBoxes[i])) {
                        characterLocation[0] = (blockBoundingBoxes[i].left - 80);
                        xRightOverride = true;
                        characterVector = 0;
                    } else if (characterVector == -1 && boundingBoxCheck(characterBox, blockBoundingBoxes[i])) {
                        characterLocation[0] = blockBoundingBoxes[i].right;
                        xLeftOverride = true;
                        characterVector = 0;
                    }
                }
            }
        } else if (e.code == "ArrowRight" && !inventoryShown && !standInventoryShown && !crateInventoryShown && runServerTick) {
            if (!xRightOverride) {
                characterVector = 1;
            } else {
                characterVector = 0;
            }
            for (var i = 0; i < blockBoundingBoxes.length; i++) {
                if (!previousAirFrame[i] && characterBox.top < blockBoundingBoxes[i].bottom) {
                    if (characterVector == 1 && boundingBoxCheck(characterBox, blockBoundingBoxes[i])) {
                        characterLocation[0] = (blockBoundingBoxes[i].left - 80);
                        xRightOverride = true;
                        characterVector = 0;
                    } else if (characterVector == -1 && boundingBoxCheck(characterBox, blockBoundingBoxes[i])) {
                        characterLocation[0] = blockBoundingBoxes[i].right;
                        xLeftOverride = true;
                        characterVector = 0;
                    }
                }
            }
        } else if (e.code == "ArrowUp" && !inventoryShown && !standInventoryShown && !crateInventoryShown && runServerTick) {
            priorLadderCheck = false;
            for (var i = 0; i < ladderCount; i++) {
                if (boundingBoxCheck(characterBox, ladderBoxes[i]) && usedLadders[i]) {
                    characterOnLadder = true;
                    characterOnGround = false;
                    characterLadderVert = 5;
                    priorLadderCheck = true;
                }
            }
            if (characterOnGround && !priorLadderCheck) {
                if (!jumpKeyHeld) {
                    jump();
                }
            }
            jumpKeyHeld = true;
            priorVertCheck = true;
        } else if (e.code == "ArrowDown" && !inventoryShown && !standInventoryShown && !crateInventoryShown && runServerTick) {
            var idsplit = objectIDUnderCharacter.split("");
            if (idsplit[0] == "l" && !characterOnLadder && usedLadders[characterLadderID]) {
                characterOnLadder = true;
                characterLocation[1] -= 5;
                characterLadderVert = -5;
            }
            for (var i = 0; i < ladderCount; i++) {
                if (boundingBoxCheck(characterBox, ladderBoxes[i]) && usedLadders[i]) {
                    characterOnLadder = true;
                    characterLadderVert = -5;
                }
            }
        } else if (e.code == "KeyE") {
            if (!inventoryShown && !standInventoryShown && !crateInventoryShown && runServerTick) {
                elementDisplayState("fullScreenOverlay", true);
                elementDisplayState("characterInventory", true);
                inventoryShown = true;
            } else {
                if (!standInventoryShown && !crateInventoryShown && runServerTick) {
                    elementDisplayState("fullScreenOverlay", false);
                    elementDisplayState("characterInventory", false);
                    inventoryShown = false;
                }
            }
        } else if (e.code == "Escape") {
            if (inventoryShown || standInventoryShown || crateInventoryShown) {
                elementDisplayState("fullScreenOverlay", false);
                elementDisplayState("characterInventory", false);
                elementDisplayState("standInventory", false);
                elementDisplayState("crateInventory", false);
                inventoryShown = false;
                standInventoryShown = false;
                crateInventoryShown = false;
                openedCrateID = -1;
            } else if (dictionaryOpen) {
                document.getElementById("fullScreenOverlay").style.display = "none";
                document.getElementById("dictionaryImage").style.display = "none";
                dictionaryOpen = false;
            } else if (runServerTick) {
                runServerTick = false;
                document.getElementById("pauseMenu").style.display = "inline";
            } else if (!runServerTick) {
                runServerTick = true;
                document.getElementById("pauseMenu").style.display = "none";
            }
        } else if (e.code == "KeyA") {
            if (inventoryShown) {
                ammoSwitch();
            }
        } else if (e.code == "KeyQ") {
            changeHeldItem(-1);
            document.getElementById("launcherGuide").style.display = "none";
        } else if (e.code == "ShiftLeft") {
            ShiftHeld = true;
        } else if (e.code == "ControlLeft") {
            CtrlHeld = true;
        }
    }
    if (e.code == "ShiftLeft") {
        ShiftHeld = true;
    } else if (e.code == "ControlLeft") {
        CtrlHeld = true;
    } else if (e.code == "Semicolon" && e.ctrlKey && e.shiftKey) {
        forceManualDefaultScreen();
    }
}
function ammoSwitch() {
    var chjeck = false;
    if (selectedCharacterID !== -1) {
        for (var i = 0; i < characterInventory[selectedCharacterID].tags.length; i++) {
            if (characterInventory[selectedCharacterID].tags[i] == "ammo") {
                chjeck = true;
            }
        }
    }
    if (chjeck) {
        if (ammoID == -1 && selectedCharacterID >= 0) {
            ammoID = selectedCharacterID;
            document.getElementById("selectedAmmoItem").src = characterInventory[ammoID].img;
            changeHeldItem(-1);
            attributeAmmo();
        } else if (ammoID >= 0 && selectedCharacterID >= 0) {
            var cjeck = false;
            for (var i = 0; i < characterInventory[selectedCharacterID].tags.length; i++) {
                if (characterInventory[selectedCharacterID].tags[i] == "ammo") {
                    cjeck = true;
                }
            }
            if (cjeck) {
                var plcdude = ammoID;
                ammoID = selectedCharacterID;
                document.getElementById("selectedAmmoItem").src = characterInventory[ammoID].img;
                changeHeldItem(plcdude);
                attributeAmmo();
            }
        }
    } else {
        if (selectedCharacterID == -1) {
            var plcdude = ammoID;
            ammoID = -1;
            document.getElementById("selectedAmmoItem").src = "assets/null.png";
            changeHeldItem(plcdude);
        } else {
            var cjeck = false;
            for (var i = 0; i < characterInventory[selectedCharacterID].tags.length; i++) {
                if (characterInventory[selectedCharacterID].tags[i] == "ammo") {
                    cjeck = true;
                }
            }
            if (cjeck) {
                var plcdude = ammoID;
                ammoID = selectedCharacterID;
                document.getElementById("selectedAmmoItem").src = characterInventory[ammoID].img;
                changeHeldItem(plcdude);
                attributeAmmo();
            }
        }
    }
}
function attributeAmmo() {
    for (var i = 0; i < document.getElementsByClassName("inventoryitem").length; i++) {
        document.getElementsByClassName("inventoryimg")[i].style.filter = "none";
    }
    if (inventoryFilter == "everything" || (inventoryFilter == "items" && characterInventory[ammoID].type == "item") || (inventoryFilter == "weapons" && characterInventory[ammoID].type == "weapon") || (inventoryFilter == "wearables" && characterInventory[ammoID].type == "wearable")) {
        document.getElementById("inventoryitem" + String(ammoID) + "img").style.filter = "grayscale(100%)";
    }
}
function attributeAmmoCrate() {
    for (var i = 0; i < document.getElementsByClassName("inventoryitem").length; i++) {
        document.getElementsByClassName("inventoryimg")[i].style.filter = "none";
    }
    document.getElementById("inventoryitem" + String(ammoID) + "img").style.filter = "grayscale(100%)";
}
function getStandDist(id) {
    return Math.sqrt(((standLocation[id].x - characterLocation[0] + 150) ** 2) + ((standLocation[id].y - characterLocation[1]) ** 2));
}
function openStandInventory(id) {
    if (!inTitleScreen) {
        if (!ShiftHeld) {
            if (!standInventoryShown && getStandDist(id) < 500) {
                elementDisplayState("fullScreenOverlay", true);
                elementDisplayState("standInventory", true);
                updateStandItems(id);
                openedStandID = id;
                standInventoryShown = true;
            }
        } else {
            updateTracked();
        }
    }
}
function updateInventory() {
    document.getElementById("characterInventory").style.top = String(((window.innerHeight / 2) / universalScale) - 375) + "px";
    document.getElementById("characterInventory").style.left = String(((window.innerWidth / 2) / universalScale) - 375) + "px";
    document.getElementById("standInventory").style.top = String(((window.innerHeight / 2) / universalScale) - 375) + "px";
    document.getElementById("standInventory").style.left = String(((window.innerWidth / 2) / universalScale) - 250) + "px";
    document.getElementById("crateInventory").style.top = String(((window.innerHeight / 2) / universalScale) - 375) + "px";
    document.getElementById("crateInventory").style.left = String(((window.innerWidth / 2) / universalScale) - 500) + "px";
    document.getElementById("moneySpan").innerHTML = getMoneyString(characterMoney);
}
function updateItems() {
    if (inventoryFilter == "everything") {
        var plpl = "";
        for (var i = 0; i < characterInventory.length; i++) {
            plpl += "<div id='inventoryitem" + String(i) + "' class='inventoryitem' onclick='changeHeldItem(" + String(i) + ")' style='background-color: " + getColorFromRarity(characterInventory[i].rarity) + "'><img id='inventoryitem" + String(i) + "img' src='" + characterInventory[i].img + "' width='64' height='64' class='inventoryimg'><span id='inventoryitem" + String(i) + "name' class='inventoryname'>" + characterInventory[i].name + "</span><span id='inventoryitem" + String(i) + "amount' class='inventoryamount'>" + "x" + characterInventory[i].amount + "</span></div>";
        }
        document.getElementById("inventoryList").innerHTML = plpl;
        for (var i = 0; i < Math.ceil(characterInventory.length / 5); i++) {
            var rowley = document.createElement("div");
            rowley.id = "inventoryRow" + String(i);
            document.getElementById("inventoryList").append(rowley);
            rowley.classList.add("inventoryRow");
            for (var j = 0; j < 5; j++) {
                try {
                    rowley.append(document.getElementById("inventoryitem" + String((i * 5) + j)));
                    document.getElementById("inventoryitem" + String((i * 5) + j) + "name").remove();
                    document.getElementById("inventoryitem" + String((i * 5) + j)).style.width = "80px";
                    document.getElementById("inventoryitem" + String((i * 5) + j)).style.height = "85px";
                    document.getElementById("inventoryitem" + String((i * 5) + j)).style.borderRight = "5px solid black";
                    document.getElementById("inventoryitem" + String((i * 5) + j)).style.left = String(85 * j) + "px";

                    document.getElementById("inventoryitem" + String((i * 5) + j) + "img").style.translate = "-8px -8px";
                } catch {
                    j = 5;
                    var rplace = document.getElementById("inventoryRow" + String(i)).innerHTML.split("");
                    rplace.splice(rplace.length - 6, 6);
                    document.getElementById("inventoryRow" + String(i)).innerHTML = rplace.join("");
                }
            }
        }
        for (var i = 0; i < characterInventory.length; i++) {
            if (characterInventory[i].type == "wearable") {
                var eq = document.createElement("div");
                eq.id = "equipButton" + String(i);
                document.getElementById("inventoryitem" + String(i)).appendChild(eq);
                eq.classList.add("equipButtonAlt");
                eq.onclick = equip.bind(this, String(i));

                if (characterInventory[i].id == 15) {
                    document.getElementById("inventoryitem" + String(i) + "img").style.animation = "jumppad 2s infinite";
                } else {
                    document.getElementById("inventoryitem" + String(i) + "img").style.animation = "none";
                    document.getElementById("inventoryitem" + String(i) + "img").style.filter = "none";
                }
            }
        }
    } else if (inventoryFilter == "items") {
        var plpl = "";
        for (var i = 0; i < characterInventory.length; i++) {
            if (characterInventory[i].type == "item") {
                plpl += "<div id='inventoryitem" + String(i) + "' class='inventoryitem' onclick='changeHeldItem(" + String(i) + ")' style='background-color: " + getColorFromRarity(characterInventory[i].rarity) + "'><img id='inventoryitem" + String(i) + "img' src='" + characterInventory[i].img + "' width='64' height='64' class='inventoryimg'><span id='inventoryitem" + String(i) + "name' class='inventoryname'>" + characterInventory[i].name + "</span><span id='inventoryitem" + String(i) + "amount' class='inventoryamount'>" + "x" + characterInventory[i].amount + "</span></div>";
            }
        }
        document.getElementById("inventoryList").innerHTML = plpl;
        for (var i = 0; i < document.getElementsByClassName("inventoryitem").length; i++) {
            document.getElementsByClassName("inventoryimg")[i].style.translate = "0px 0px";
        }
    } else if (inventoryFilter == "weapons") {
        var plpl = "";
        for (var i = 0; i < characterInventory.length; i++) {
            if (characterInventory[i].type == "weapon") {
                plpl += "<div id='inventoryitem" + String(i) + "' class='inventoryitem' onclick='changeHeldItem(" + String(i) + ")' style='background-color: " + getColorFromRarity(characterInventory[i].rarity) + "'><img id='inventoryitem" + String(i) + "img' src='" + characterInventory[i].img + "' width='64' height='64' class='inventoryimg'><span id='inventoryitem" + String(i) + "name' class='inventoryname'>" + characterInventory[i].name + "</span><span id='inventoryitem" + String(i) + "amount' class='inventoryamount'>" + "x" + characterInventory[i].amount + "</span></div>";
            }
        }
        document.getElementById("inventoryList").innerHTML = plpl;
        for (var i = 0; i < document.getElementsByClassName("inventoryitem").length; i++) {
            document.getElementsByClassName("inventoryimg")[i].style.translate = "0px 0px";
        }
    } else if (inventoryFilter == "wearables") {
        var plpl = "";
        for (var i = 0; i < characterInventory.length; i++) {
            if (characterInventory[i].type == "wearable") {
                plpl += "<div id='inventoryitem" + String(i) + "' class='inventoryitem' onclick='changeHeldItem(" + String(i) + ")' style='background-color: " + getColorFromRarity(characterInventory[i].rarity) + "'><img id='inventoryitem" + String(i) + "img' src='" + characterInventory[i].img + "' width='64' height='64' class='inventoryimg'><span id='inventoryitem" + String(i) + "name' class='inventoryname'>" + characterInventory[i].name + "</span><span id='inventoryitem" + String(i) + "amount' class='inventoryamount'>" + "x" + characterInventory[i].amount + "</span></div>";
            }
        }
        document.getElementById("inventoryList").innerHTML = plpl;
        for (var i = 0; i < characterInventory.length; i++) {
            if (characterInventory[i].type == "wearable") {
                var eq = document.createElement("div");
                eq.id = "equipButton" + String(i);
                document.getElementById("inventoryitem" + String(i)).appendChild(eq);
                eq.classList.add("equipButton");
                eq.onclick = equip.bind(this, String(i));
                eq.innerHTML = "Equip";

                if (characterInventory[i].id == 15) {
                    document.getElementById("inventoryitem" + String(i) + "img").style.animation = "jumppad 2s infinite";
                } else {
                    document.getElementById("inventoryitem" + String(i) + "img").style.animation = "none";
                    document.getElementById("inventoryitem" + String(i) + "img").style.filter = "none";
                }
            }
        }
        for (var i = 0; i < document.getElementsByClassName("inventoryitem").length; i++) {
            document.getElementsByClassName("inventoryimg")[i].style.translate = "0px 0px";
        }
    }
    if (ammoID !== -1) {
        attributeAmmo();
    }
    for (var i = 0; i < document.getElementsByClassName("inventoryitem").length; i++) {
        if (inventoryFilter == "everything" && !document.getElementsByClassName("inventoryitem")[i].classList.contains("standItem")) {
            document.getElementsByClassName("inventoryitem")[i].style.position = "absolute";
        } else {
            document.getElementsByClassName("inventoryitem")[i].style.position = "initial";
        }
    }
}
function updateCrateItems(id) {
    var plpl = "";
    for (var i = 0; i < characterInventory.length; i++) {
        plpl += "<div id='inventorycharacteritem" + String(i) + "' class='inventoryitem' onclick='swapInventory(\"character\", " + String(i) + ")' style='background-color: " + getColorFromRarity(characterInventory[i].rarity) + "'><img id='inventorycharacteritem" + String(i) + "img' src='" + characterInventory[i].img + "' width='64' height='64' class='inventoryimg'><span id='inventorycharacteritem" + String(i) + "name' class='inventoryname'>" + characterInventory[i].name + "</span><span id='inventorycharacteritem" + String(i) + "amount' class='inventoryamount'>" + "x" + characterInventory[i].amount + "</span></div>";
    }
    document.getElementById("characterInventoryCrateList").innerHTML = plpl;
    for (var i = 0; i < Math.ceil(characterInventory.length / 5); i++) {
        var rowley = document.createElement("div");
        rowley.id = "inventoryCharacterRow" + String(i);
        document.getElementById("characterInventoryCrateList").append(rowley);
        rowley.classList.add("inventoryRow");
        for (var j = 0; j < 5; j++) {
            try {
                rowley.append(document.getElementById("inventorycharacteritem" + String((i * 5) + j)));
                document.getElementById("inventorycharacteritem" + String((i * 5) + j) + "name").remove();
                document.getElementById("inventorycharacteritem" + String((i * 5) + j)).style.width = "80px";
                document.getElementById("inventorycharacteritem" + String((i * 5) + j)).style.height = "85px";
                document.getElementById("inventorycharacteritem" + String((i * 5) + j)).style.borderRight = "5px solid black";
                document.getElementById("inventorycharacteritem" + String((i * 5) + j)).style.left = String(85 * j) + "px";
                document.getElementById("inventorycharacteritem" + String((i * 5) + j) + "img").style.translate = "-8px -8px";
            } catch {
                j = 5;
                var rplace = document.getElementById("inventoryRow" + String(i)).innerHTML.split("");
                rplace.splice(rplace.length - 6, 6);
                document.getElementById("inventoryRow" + String(i)).innerHTML = rplace.join("");
            }
        }
    }
    plpl = "";
    for (var i = 0; i < crateInventorys[id].inventory.length; i++) {
        if (crateInventorys[id].inventory[i].id !== -1) {
            plpl += "<div id='inventorycrateitem" + String(i) + "' class='inventoryitem' onclick='swapInventory(\"crate\", " + String(i) + ")' style='background-color: " + getColorFromRarity(globalItems[crateInventorys[id].inventory[i].id].rarity) + "'><img id='inventorycrateitem" + String(i) + "img' src='" + globalItems[crateInventorys[id].inventory[i].id].img + "' width='64' height='64' class='inventoryimg'><span id='inventorycrateitem" + String(i) + "name' class='inventoryname'>" + globalItems[crateInventorys[id].inventory[i].id].name + "</span><span id='inventorycrateitem" + String(i) + "amount' class='inventoryamount'>" + "x" + crateInventorys[id].inventory[i].amount + "</span></div>";
        }
    }
    document.getElementById("crateInventoryList").innerHTML = plpl;
    for (var i = 0; i < Math.ceil(crateInventorys[id].inventory.length / 5); i++) {
        rowley = document.createElement("div");
        rowley.id = "inventoryCrateRow" + String(i);
        document.getElementById("crateInventoryList").append(rowley);
        rowley.classList.add("inventoryRow");
        for (var j = 0; j < 5; j++) {
            try {
                if (crateInventorys[id].inventory[(i * 5) + j].id !== -1) {
                    rowley.append(document.getElementById("inventorycrateitem" + String((i * 5) + j)));
                    document.getElementById("inventorycrateitem" + String((i * 5) + j) + "name").remove();
                    document.getElementById("inventorycrateitem" + String((i * 5) + j)).style.width = "80px";
                    document.getElementById("inventorycrateitem" + String((i * 5) + j)).style.height = "85px";
                    document.getElementById("inventorycrateitem" + String((i * 5) + j)).style.borderRight = "5px solid black";
                    document.getElementById("inventorycrateitem" + String((i * 5) + j)).style.left = String(85 * j) + "px";
                    document.getElementById("inventorycrateitem" + String((i * 5) + j) + "img").style.translate = "-8px -8px";
                }
            } catch {
                j = 5;
                var rplace = document.getElementById("inventoryCrateRow" + String(i)).innerHTML.split("");
                rplace.splice(rplace.length - 6, 6);
                document.getElementById("inventoryCrateRow" + String(i)).innerHTML = rplace.join("");
            }
        }
    }
    if (ammoID !== -1) {
        attributeAmmoCrate();
    }

    for (var i = 0; i < document.getElementsByClassName("inventoryitem").length; i++) {
        document.getElementsByClassName("inventoryitem")[i].style.position = "absolute";
    }
    
    crateFullness = 0;
    for (var i = 0; i < crateInventorys[id].inventory.length; i++) {
        if (crateInventorys[id].inventory[i].id !== -1) {
            crateFullness++;
        }
    }
    document.getElementById("crateFullnessSpan").innerHTML = String(crateFullness) + "/" + String(crateInventorys[id].len);
}
function swapInventory(mode, itemID) {
    if (ShiftHeld) {
        if (mode == "crate") {
            addItemToInventory(crateInventorys[openedCrateID].inventory[itemID].id, crateInventorys[openedCrateID].inventory[itemID].amount);
            crateInventorys[openedCrateID].inventory[itemID].id = -1;
            crateInventorys[openedCrateID].inventory[itemID].amount = 0;
            updateCrateItems(openedCrateID);
        } else if (mode == "character") {
            var trigger = 1E10;
            for (var i = 0; i < crateInventorys[openedCrateID].inventory.length; i++) {
                if (crateInventorys[openedCrateID].inventory[i].id == characterInventory[itemID].id && i < trigger) {
                    trigger = i;
                }
            }
            if (trigger !== 1E10) {
                crateInventorys[openedCrateID].inventory[trigger].amount += characterInventory[itemID].amount;
                removeItemFromInventory(itemID, characterInventory[itemID].amount);
            } else {
                for (var i = 0; i < crateInventorys[openedCrateID].inventory.length; i++) {
                    if (crateInventorys[openedCrateID].inventory[i].id == -1 && i < trigger) {
                        trigger = i;
                    }
                }
                if (trigger !== 1E10) {
                    crateInventorys[openedCrateID].inventory[trigger].id = characterInventory[itemID].id;
                    crateInventorys[openedCrateID].inventory[trigger].amount = characterInventory[itemID].amount;
                    removeItemFromInventory(itemID, characterInventory[itemID].amount);
                }
            }
            updateCrateItems(openedCrateID);
        }
    } else {
        if (mode == "crate") {
            if (crateInventorys[openedCrateID].inventory[itemID].amount == 1) {
                addItemToInventory(crateInventorys[openedCrateID].inventory[itemID].id, 1);
                crateInventorys[openedCrateID].inventory[itemID].id = -1;
                crateInventorys[openedCrateID].inventory[itemID].amount = 0;
            } else {
                addItemToInventory(crateInventorys[openedCrateID].inventory[itemID].id, 1);
                crateInventorys[openedCrateID].inventory[itemID].amount--;
            }
            updateCrateItems(openedCrateID);
        } else if (mode == "character") {
            var trigger = 1E10;
            for (var i = 0; i < crateInventorys[openedCrateID].inventory.length; i++) {
                if (crateInventorys[openedCrateID].inventory[i].id == characterInventory[itemID].id && i < trigger) {
                    trigger = i;
                }
            }
            if (trigger !== 1E10) {
                removeItemFromInventory(itemID, 1);
                crateInventorys[openedCrateID].inventory[trigger].amount++;
            } else {
                for (var i = 0; i < crateInventorys[openedCrateID].inventory.length; i++) {
                    if (crateInventorys[openedCrateID].inventory[i].id == -1 && i < trigger) {
                        trigger = i;
                    }
                }
                if (trigger !== 1E10) {
                    removeItemFromInventory(itemID, 1);
                    crateInventorys[openedCrateID].inventory[trigger].id = characterInventory[itemID].id;
                    crateInventorys[openedCrateID].inventory[trigger].amount = 1;
                }
            }
            updateCrateItems(openedCrateID);
        }
    }
}
function equip(inventoryID) {
    if (!characterInventory[inventoryID].equipped) {
        if (characterWearables[characterInventory[inventoryID].slot - 1] !== -1) {
            var we = -1;
            for (var i = 0; i < characterInventory.length; i++) {
                if (characterInventory[i].id == characterWearables[characterInventory[inventoryID].slot - 1]) {
                    we = i;
                }
            }
            equip(we);
        }
        characterInventory[inventoryID].equipped = true;
        document.getElementById("creeperSlot" + String(characterInventory[inventoryID].slot)).src = characterInventory[inventoryID].img;
        document.getElementById("simWear" + String(characterInventory[inventoryID].slot)).src = characterInventory[inventoryID].img;
        document.getElementById("chWear" + String(characterInventory[inventoryID].slot)).src = characterInventory[inventoryID].img;
        if (inventoryFilter == "everything") {
            document.getElementById("equipButton" + String(inventoryID)).style.backgroundColor = "#bf3f3f";
        } else {
            document.getElementById("equipButton" + String(inventoryID)).innerHTML = "Unequip";
        }
        characterWearables[characterInventory[inventoryID].slot - 1] = characterInventory[inventoryID].id;
        if (characterWearables[2] == 15) {
            document.getElementById("simWear3").style.animation = "jumppad 2s infinite";
            document.getElementById("chWear3").style.animation = "jumppad 2s infinite";
            document.getElementById("creeperSlot3").style.animation = "jumppad 2s infinite";

            document.getElementById("selectedHoldingItem").style.animation = "none";
            document.getElementById("selectedHoldingItem").style.filter = "none";
            document.getElementById("characterHeldItem").style.animation = "none";
            document.getElementById("characterHeldItem").style.filter = "none";
        }
    } else {
        if (characterWearables[2] == 15) {
            document.getElementById("characterHeldItem").style.animation = "jumppad 2s infinite";
            document.getElementById("selectedHoldingItem").style.animation = "jumppad 2s infinite";

            document.getElementById("simWear3").style.animation = "none";
            document.getElementById("chWear3").style.animation = "none";
            document.getElementById("creeperSlot3").style.animation = "none";
            document.getElementById("simWear3").style.filter = "none";
            document.getElementById("chWear3").style.filter = "none";
            document.getElementById("creeperSlot3").style.filter = "none";
        }
        characterInventory[inventoryID].equipped = false;
        document.getElementById("creeperSlot" + String(characterInventory[inventoryID].slot)).src = "assets/null.png";
        document.getElementById("simWear" + String(characterInventory[inventoryID].slot)).src = "assets/null.png";
        document.getElementById("chWear" + String(characterInventory[inventoryID].slot)).src = "assets/null.png";
        if (inventoryFilter == "everything") {
            document.getElementById("equipButton" + String(inventoryID)).style.backgroundColor = "#bfbf3f";
        } else {
            document.getElementById("equipButton" + String(inventoryID)).innerHTML = "Equip";
        }
        characterWearables[characterInventory[inventoryID].slot - 1] = -1;
    }
}
function updateStandItems(id) {
    selectedPrice = 0;
    selectedItemID = -1;
    var plpl = "";
    for (var i = 0; i < standInventory[id].length; i++) {
        plpl += "<div id='standinventoryitem" + String(i) + "' class='inventoryitem standItem' onclick='selectedPrice = standPrices[" + String(id) + "][" + String(i) + "]; selectedItemID = standInventoryIDs[" + String(id) + "][" + String(i) + "];' style='background-color: " + getColorFromRarity(standInventory[id][i].rarity) + "'><img id='standinventoryitem" + String(i) + "img' src='" + standInventory[id][i].img + "' width='64' height='64' class='inventoryimg'><span id='standinventoryitem" + String(i) + "name' class='inventoryname'>" + standInventory[id][i].name + "</span><span id='standinventoryitem" + String(i) + "price' class='inventoryamount'>" + getMoneyString(standPrices[id][i]) + "</span></div>"
    }
    document.getElementById("standInventoryList").innerHTML = plpl;
}
function getColorFromRarity(rar) {
    if (rar == "common") {
        return "rgba(0, 0, 255, 0.3)";
    } else if (rar == "uncommon") {
        return "rgba(0, 255, 0, 0.3)";
    } else if (rar == "rare") {
        return "rgba(255, 255, 0, 0.3)";
    } else if (rar == "super_rare") {
        return "rgba(255, 127, 0, 0.3)";
    } else if (rar == "collectible") {
        return "rgba(127, 0, 127, 0.3)";
    }
}
function changeHeldItem(id) {
    if (id == -1) {
        selectedCharacterID = id;
        document.getElementById("characterHeldItem").src = "assets/null.png";
        document.getElementById("selectedHoldingItem").src = "assets/null.png";
        document.getElementById("HUDHeldItem").src = "assets/null.png";
        for (var i = 0; i < document.getElementsByClassName("inventoryitem").length; i++) {
            if (inventoryFilter !== "everything") {
                document.getElementsByClassName("inventoryname")[i].style.color = "#000";
            }
            document.getElementsByClassName("inventoryamount")[i].style.color = "#000";
        }
    } else if (id !== ammoID) {
        selectedCharacterID = id;
        document.getElementById("characterHeldItem").src = characterInventory[id].img;
        document.getElementById("selectedHoldingItem").src = characterInventory[id].img;
        document.getElementById("HUDHeldItem").src = characterInventory[id].img;
        for (var i = 0; i < document.getElementsByClassName("inventoryitem").length; i++) {
            if (inventoryFilter !== "everything") {
                document.getElementsByClassName("inventoryname")[i].style.color = "#000";
            }
            document.getElementsByClassName("inventoryamount")[i].style.color = "#000";
        }
        if (inventoryFilter !== "everything") {
            document.getElementById("inventoryitem" + String(id) + "name").style.color = "white";
        }
        document.getElementById("inventoryitem" + String(id) + "amount").style.color = "white";
        if (characterInventory[selectedCharacterID].type == "wearable") {
            if (characterInventory[selectedCharacterID].equipped) {
                document.getElementById("characterHeldItem").src = "assets/null.png";
                document.getElementById("selectedHoldingItem").src = "assets/null.png";
                document.getElementById("HUDHeldItem").src = "assets/null.png";
                selectedCharacterID = -1;
            } else {
                if (characterInventory[selectedCharacterID].id == 15) {
                    document.getElementById("characterHeldItem").style.animation = "jumppad 2s infinite";
                    document.getElementById("selectedHoldingItem").style.animation = "jumppad 2s infinite";
                    document.getElementById("HUDHeldItem").style.animation = "jumppad 2s infinite";
                } else {
                    document.getElementById("characterHeldItem").style.animation = "none";
                    document.getElementById("selectedHoldingItem").style.animation = "none";
                    document.getElementById("HUDHeldItem").style.animation = "none";
                    document.getElementById("characterHeldItem").style.filter = "none";
                    document.getElementById("selectedHoldingItem").style.filter = "none";
                    document.getElementById("HUDHeldItem").style.filter = "none";
                }
            }
        } else {
            document.getElementById("characterHeldItem").style.animation = "none";
            document.getElementById("selectedHoldingItem").style.animation = "none";
            document.getElementById("HUDHeldItem").style.animation = "none";
            document.getElementById("characterHeldItem").style.filter = "none";
            document.getElementById("selectedHoldingItem").style.filter = "none";
            document.getElementById("HUDHeldItem").style.filter = "none";
        }
        if (selectedCharacterID !== -1 && characterInventory[selectedCharacterID].type == "weapon") {
            if (characterInventory[selectedCharacterID].id == 16) {
                currentHeldType = 1;
            } else if (characterInventory[selectedCharacterID].id == 27) {
                currentHeldType = 2;
            } else {
                currentHeldType = 0;
            }
        } else {
            currentHeldType = 0;
        }
    }
    
}
function updateMoneySpan() {
    if (document.getElementById("buyAmountInput").value !== "") {
        document.getElementById("purchaseInformation").innerHTML = getMoneyString(selectedPrice * parseInt(document.getElementById("buyAmountInput").value));
        if (selectedPrice * parseInt(document.getElementById("buyAmountInput").value) > characterMoney) {
            sufficientFunds = false;
            document.getElementById("currentMoneyDiv").style.background = "linear-gradient(0deg, rgba(255, 63, 63, 0.5) 0%, rgba(255, 63, 63, 0) 100%)";
        } else {
            sufficientFunds = true;
            document.getElementById("currentMoneyDiv").style.background = "linear-gradient(0deg, rgba(63, 255, 63, 0.5) 0%, rgba(63, 255, 63, 0) 100%)";
        }
        nullCheck = true;
    } else {
        document.getElementById("purchaseInformation").innerHTML = getMoneyString(0);
        nullCheck = false;
    }
    if (parseInt(document.getElementById("buyAmountInput").value) == 0) {
        nullCheck = false;
    }
    if (sufficientFunds && nullCheck && selectedItemID !== -1) {
        document.getElementById("buyButton").style.backgroundColor = "#3fff3f";
        document.getElementById("buyButton").style.border = "2px solid #2fbf2f";
    } else {
        document.getElementById("buyButton").style.backgroundColor = "#7f7f7f";
        document.getElementById("buyButton").style.border = "2px solid #5f5f5f";
    }
    document.getElementById("currentMoneySpan").innerHTML = getMoneyString(characterMoney);
    document.getElementById("characterMoneySpan").innerHTML = getMoneyString(characterMoney);
    document.getElementById("characterMoneyCrateSpan").innerHTML = getMoneyString(characterMoney);
}
var thig17 = setInterval(updateMoneySpan, 0);
function moneyCrateTransfer(mode) {
    var inputtedValue = Math.floor(parseInt(document.getElementById("milliceepTransferInput").value));
    if (mode == "crate") {
        if (inputtedValue > crateInventorys[openedCrateID].moneyContent) {
            characterMoney += crateInventorys[openedCrateID].moneyContent;
            crateInventorys[openedCrateID].moneyContent = 0;
        } else {
            characterMoney += inputtedValue;
            crateInventorys[openedCrateID].moneyContent -= inputtedValue;
        }
    } else if (mode == "character") {
        if (inputtedValue > characterMoney) {
            crateInventorys[openedCrateID].moneyContent += characterMoney;
            characterMoney = 0;
        } else {
            crateInventorys[openedCrateID].moneyContent += inputtedValue;
            characterMoney -= inputtedValue;
        }
    }
    document.getElementById("crateMoneyContentSpan").innerHTML = getMoneyString(crateInventorys[openedCrateID].moneyContent);
}
function updateSelectedItemImg() {
    if (selectedItemID == -1) {
        document.getElementById("itemImg").src = "assets/null.png";
    } else {
        document.getElementById("itemImg").src = globalItems[selectedItemID].img;
    }
}
var thig18 = setInterval(updateSelectedItemImg, 0);
function addItemToInventory(id, am) {
    var prevItemCheck = -1;
    for (var i = 0; i < characterInventory.length; i++) {
        if (id == characterInventory[i].id) {
            prevItemCheck = i;
        }
    }
    if (prevItemCheck == -1) {
        characterInventory.push(globalItems[id]);
        characterInventory[characterInventory.length - 1].amount = am;
    } else {
        characterInventory[prevItemCheck].amount += am;
    }
    updateItems();
}
function removeItemFromInventory(characterid, amount) {
    characterInventory[characterid].amount -= amount;
    if (characterInventory[characterid].amount < 1) {
        var whe = characterInventory.splice(characterid, 1);
        if (characterid == selectedCharacterID) {
            document.getElementById("characterHeldItem").src = "assets/null.png";
            document.getElementById("selectedHoldingItem").src = "assets/null.png";
            document.getElementById("HUDHeldItem").src = "assets/null.png";
            selectedCharacterID = -1;
        } else if (characterid == ammoID) {
            document.getElementById("selectedAmmoItem").src = "assets/null.png";
            ammoID = -1;
        }
        if (characterid < selectedCharacterID) {
            selectedCharacterID--;
        }
    }
    updateItems();
}
var thig14 = setInterval(updateInventory, 0);
function buyItem() {
    if (sufficientFunds && nullCheck && selectedItemID !== -1) {
        characterMoney -= selectedPrice * parseInt(document.getElementById("buyAmountInput").value);
        addItemToInventory(selectedItemID, parseInt(document.getElementById("buyAmountInput").value));
    }
}
function giveAllItems() {
    for (var i = 0; i < globalItems.length; i++) {
        addItemToInventory(i, 100);
    }
}
function ladderFrame() {
    if (characterOnLadder) {
        characterLocation[1] += characterLadderVert;
        ladderFall = true;
        for (var i = 0; i < blockBoundingBoxes.length; i++) {
            if (characterLadderVert > 0 && boundingBoxCheck(characterBox, blockBoundingBoxes[i]) && !previousAirFrameBottom[i]) {
                characterLocation[1] = Math.floor((window.innerHeight * universalScale) + (window.innerHeight - document.getElementById("html").getBoundingClientRect().height) - blockBoundingBoxes[i].bottom - 240 + characterScreenOffset);
                characterLadderVert = 0;
            }
        }
        priorPriorCheck = false;
        for (var i = 0; i < ladderCount; i++) {
            if (characterBox.bottom > ladderBoxes[i].bottom && usedLadders[i] && boundingBoxCheck(characterBox, ladderBoxes[i]) && characterLadderID == i) {
                for (var j = 0; j < blockBoundingBoxes.length; j++) {
                    if (boundingBoxCheck(characterBox, blockBoundingBoxes[j]) && characterLadderVert < 0 && characterBox.bottom < blockBoundingBoxes[j].top) {
                        characterLocation[1] = ((window.innerHeight * universalScale) + (window.innerHeight - document.getElementById("html").getBoundingClientRect().height) - blockBoundingBoxes[j].top) + characterScreenOffset;
                        characterLadderVert = 0;
                        characterOnLadder = false;
                        ladderDismount = j;
                    }
                }
            }
            if (boundingBoxCheck(characterBox, ladderBoxes[i]) && usedLadders[i]) {
                priorPriorCheck = true;
                characterLadderID = i;
            }
        }
        characterOnLadder = priorPriorCheck;
        for (var i = 0; i < blockBoundingBoxes.length; i++) {
            if (characterBox.bottom > blockBoundingBoxes[i].top) {
                previousAirFrame[i] = false;
            } else {
                previousAirFrame[i] = true;
            }
            if (characterBox.top < blockBoundingBoxes[i].bottom) {
                previousAirFrameBottom[i] = false;
            } else {
                previousAirFrameBottom[i] = true;
            }
        }
        for (var j = 0; j < blockBoundingBoxes.length; j++) {
            if (boundingBoxCheck(characterBox, blockBoundingBoxes[j]) && characterLadderVert <= 0 && characterBox.bottom < blockBoundingBoxes[j].top) {
                characterLocation[1] = ((window.innerHeight * universalScale) + (window.innerHeight - document.getElementById("html").getBoundingClientRect().height) - blockBoundingBoxes[j].top) + characterScreenOffset;
                characterLadderVert = 0;
                characterOnLadder = false;
                ladderDismount = j;
            }
        }
        for (var j = 0; j < blockBoundingBoxes.length; j++) {
            if (boundingBoxCheck(characterBox, blockBoundingBoxes[j]) && characterLadderVert <= 0 && characterBox.bottom < blockBoundingBoxes[j].bottom) {
                characterLocation[1] = ((window.innerHeight * universalScale) + (window.innerHeight - document.getElementById("html").getBoundingClientRect().height) - blockBoundingBoxes[j].top) + characterScreenOffset;
                characterLadderVert = 0;
                characterOnLadder = false;
                ladderDismount = j;
            }
        }
        if (ladderDismount >= 0) {
            ladderDismountTrigger(ladderDismount, 0);
            ladderDismount = -1;
        }
    }
}
var thig9 = setInterval(ladderFrame, (1000 / 60));
function faceJumb() {
    if (characterOnGround) {
        if (characterVector == 1) {
            document.getElementById("creeperCface").style.left = "45px";
            document.getElementById("creeperCface").style.bottom = "185px";
            heldItemDirectionOffset = 75;
            weaponOffsetX = 0;
            if (characterWearables[0] == 13) {
                document.getElementById("chWear1").style.left = "27px";
                document.getElementById("chWear1").style.top = "-6px";
            } else if (characterWearables[0] !== -1) {
                if (globalItems[characterWearables[0]].mask_type == 1) {
                    //There is no 'true' type 1 mask yet (without exceptions)
                    document.getElementById("chWear1").style.left = "0px";
                    document.getElementById("chWear1").style.top = "0px";
                } else if (globalItems[characterWearables[0]].mask_type == 2) {
                    document.getElementById("chWear1").src = giveMaskImgAppendix(globalItems[characterWearables[0]].img, "left");
                    document.getElementById("chWear1").style.transform = "scaleX(-1)";
                    document.getElementById("chWear1").style.left = String((globalItems[characterWearables[0]].xOffset + globalItems[characterWearables[0]].xVariance) * 5) + "px";
                    document.getElementById("chWear1").style.top = String(globalItems[characterWearables[0]].yOffset * 5) + "px";
                } else if (globalItems[characterWearables[0]].mask_type == 3) {
                    document.getElementById("chWear1").src = giveMaskImgAppendix(globalItems[characterWearables[0]].img, "right");
                    document.getElementById("chWear1").style.transform = "scaleX(1)";
                    document.getElementById("chWear1").style.left = "0px";
                    document.getElementById("chWear1").style.top = "0px";
                }
            }
            characterFaceLauncher = right;
        } else if (characterVector == -1) {
            document.getElementById("creeperCface").style.left = "10px";
            document.getElementById("creeperCface").style.bottom = "185px";
            heldItemDirectionOffset = -60;
            if (currentHeldType == 2) {
                weaponOffsetX = -64;
            } else {
                weaponOffsetX = -36;
            }
            if (characterWearables[0] == 13) {
                document.getElementById("chWear1").style.left = "-7px";
                document.getElementById("chWear1").style.top = "-6px";
            } else if (characterWearables[0] !== -1) {
                if (globalItems[characterWearables[0]].mask_type == 1) {
                    //There is no 'true' type 1 mask yet (without exceptions)
                    document.getElementById("chWear1").style.left = "0px";
                    document.getElementById("chWear1").style.top = "0px";
                } else if (globalItems[characterWearables[0]].mask_type == 2) {
                    document.getElementById("chWear1").src = giveMaskImgAppendix(globalItems[characterWearables[0]].img, "left");
                    document.getElementById("chWear1").style.transform = "scaleX(1)";
                    document.getElementById("chWear1").style.left = String((globalItems[characterWearables[0]].xOffset - globalItems[characterWearables[0]].xVariance) * 5) + "px";
                    document.getElementById("chWear1").style.top = String(globalItems[characterWearables[0]].yOffset * 5) + "px";
                } else if (globalItems[characterWearables[0]].mask_type == 3) {
                    document.getElementById("chWear1").src = giveMaskImgAppendix(globalItems[characterWearables[0]].img, "left");
                    document.getElementById("chWear1").style.transform = "scaleX(1)";
                    document.getElementById("chWear1").style.left = "0px";
                    document.getElementById("chWear1").style.top = "0px";
                }
            }
            characterFaceLauncher = left;
        }
        if (currentHeldType == 2) {
            weaponOffsetY = -36;
        } else {
            weaponOffsetY = -36;
        }
    } else {
        if (characterVert > 0) {
            document.getElementById("creeperCface").style.left = "27.5px";
            document.getElementById("creeperCface").style.bottom = "200px";
            if (characterWearables[0] == 13) {
                document.getElementById("chWear1").style.left = "10.5px";
                document.getElementById("chWear1").style.top = "-16px";
            } else if (characterWearables[0] !== -1) {
                if (globalItems[characterWearables[0]].mask_type == 1) {
                    //There is no 'true' type 1 mask yet (without exceptions)
                    document.getElementById("chWear1").style.left = "0px";
                    document.getElementById("chWear1").style.top = "0px";
                } else if (globalItems[characterWearables[0]].mask_type == 2) {
                    document.getElementById("chWear1").src = giveMaskImgAppendix(globalItems[characterWearables[0]].img, "center");
                    document.getElementById("chWear1").style.transform = "scaleX(1)";
                    document.getElementById("chWear1").style.left = String(globalItems[characterWearables[0]].xOffset * 5) + "px";
                    document.getElementById("chWear1").style.top = String((globalItems[characterWearables[0]].yOffset - globalItems[characterWearables[0]].yVariance) * 5) + "px";
                } else if (globalItems[characterWearables[0]].mask_type == 3) {
                    document.getElementById("chWear1").src = giveMaskImgAppendix(globalItems[characterWearables[0]].img, "up");
                    document.getElementById("chWear1").style.transform = "scaleX(1)";
                    document.getElementById("chWear1").style.left = "0px";
                    document.getElementById("chWear1").style.top = "0px";
                }
            }
        } else {
            document.getElementById("creeperCface").style.left = "27.5px";
            document.getElementById("creeperCface").style.bottom = "170px";
            if (characterWearables[0] == 13) {
                document.getElementById("chWear1").style.left = "10.5px";
                document.getElementById("chWear1").style.top = "9px";
            } else if (characterWearables[0] !== -1) {
                if (globalItems[characterWearables[0]].mask_type == 1) {
                    //There is no 'true' type 1 mask yet (without exceptions)
                    document.getElementById("chWear1").style.left = "0px";
                    document.getElementById("chWear1").style.top = "0px";
                } else if (globalItems[characterWearables[0]].mask_type == 2) {
                    document.getElementById("chWear1").src = giveMaskImgAppendix(globalItems[characterWearables[0]].img, "center");
                    document.getElementById("chWear1").style.transform = "scaleX(1)";
                    document.getElementById("chWear1").style.left = String(globalItems[characterWearables[0]].xOffset * 5) + "px";
                    document.getElementById("chWear1").style.top = String((globalItems[characterWearables[0]].yOffset + globalItems[characterWearables[0]].yVariance) * 5) + "px";
                } else if (globalItems[characterWearables[0]].mask_type == 3) {
                    document.getElementById("chWear1").src = giveMaskImgAppendix(globalItems[characterWearables[0]].img, "down");
                    document.getElementById("chWear1").style.transform = "scaleX(1)";
                    document.getElementById("chWear1").style.left = "0px";
                    document.getElementById("chWear1").style.top = "0px";
                }
            }
        }
    }
}
function giveMaskImgAppendix(img, appendix) {
    var eebb = img.split(".");
    var bou = eebb[0].split("_");
    bou[bou.length - 1] = appendix;
    eebb[0] = bou.join("_");
    return eebb.join(".");
}
var thig6 = setInterval(faceJumb, 0);
document.onkeyup = function(e) {
    if (e.code == "ArrowLeft" || e.code == "ArrowRight") {
        characterVector = 0;
        xLeftOverride = false;
        xRightOverride = false;
        for (var i = 0; i < blockBoundingBoxes.length; i++) {
            if (!previousAirFrame[i] && characterBox.top < blockBoundingBoxes[i].bottom) {
                if (characterVector == 1 && boundingBoxCheck(characterBox, blockBoundingBoxes[i])) {
                    characterLocation[0] = (blockBoundingBoxes[i].left - 80);
                    xRightOverride = true;
                    characterVector = 0;
                } else if (characterVector == -1 && boundingBoxCheck(characterBox, blockBoundingBoxes[i])) {
                    characterLocation[0] = blockBoundingBoxes[i].right;
                    xLeftOverride = true;
                    characterVector = 0;
                }
            }
        }
    } else if (e.code == "ArrowUp") {
        jumpKeyHeld = false;
        characterLadderVert = 0;
        priorVertCheck = false;
    } else if (e.code == "ArrowDown") {
        characterLadderVert = 0;
    } else if (e.code == "ShiftLeft") {
        ShiftHeld = false;
    } else if (e.code == "ControlLeft") {
        CtrlHeld = false;
    }
}
function createBlock(wid, hei, x, y) {
    var whe = document.createElement("div");
    document.getElementById("blocks").appendChild(whe);
    blockElements.push(whe);
    whe.id = "block" + String(blockElements.length - 1);
    whe.style.position = "absolute";
    whe.style.width = String(wid - 10) + "px";
    whe.style.height = String(hei - 10) + "px";
    whe.style.backgroundColor = "white";
    whe.style.border = "5px solid black";
    whe.style.left = String(x) + "px";
    whe.style.bottom = String(y) + "px";
    blockBoundingBoxes.push(scaleBoundingBox(whe.getBoundingClientRect()));
    previousAirFrame.push(false);
    previousAirFrameBottom.push(false);
    previousAirFrameTemplate.push(1);
    previousFanFrame.push(false);
    creeperRangeTemp.push(false);
    savedBlockY.push(y);
    blockTopLookup.push({y: y + hei, x: x, range: wid});
    blockVisibility.push(true);
}
function updateBallLauncher() {
    if (selectedCharacterID !== -1) {
        if (characterInventory[selectedCharacterID].id == 16) {
            if (characterFaceLauncher == right) {
                if (mouseX - (characterLocation[0] + heldItemDirectionOffset + weaponOffsetX + 50) <= 0) {
                    if (mouseY - (characterLocation[1] + 140 - characterScreenOffset + weaponOffsetY) >= 0) {
                        document.getElementById("characterHeldItem").style.rotate = "270deg";
                    } else {
                        document.getElementById("characterHeldItem").style.rotate = "90deg";
                    }
                } else {
                    document.getElementById("characterHeldItem").style.rotate = String(-1 * Math.asin((mouseY - (characterLocation[1] + 140 - characterScreenOffset + weaponOffsetY)) / Math.sqrt(((mouseX - (characterLocation[0] + heldItemDirectionOffset + weaponOffsetX + 50)) ** 2) + ((mouseY - (characterLocation[1] + 140 - characterScreenOffset + weaponOffsetY)) ** 2)))) + "rad";
                }
            } else {
                if (mouseX - (characterLocation[0] + heldItemDirectionOffset + weaponOffsetX + 50) >= 0) {
                    if (mouseY - (characterLocation[1] + 140 - characterScreenOffset + weaponOffsetY) >= 0) {
                        document.getElementById("characterHeldItem").style.rotate = "90deg";
                    } else {
                        document.getElementById("characterHeldItem").style.rotate = "270deg";
                    }
                } else {
                    document.getElementById("characterHeldItem").style.rotate = String(Math.asin((mouseY - (characterLocation[1] + 140 - characterScreenOffset + weaponOffsetY)) / Math.sqrt(((mouseX - (characterLocation[0] + heldItemDirectionOffset + weaponOffsetX + 50)) ** 2) + ((mouseY - (characterLocation[1] + 140 - characterScreenOffset + weaponOffsetY)) ** 2)))) + "rad";
                }
            }
        }
    }
}
var thig31 = setInterval(updateBallLauncher, 0);
function landmarkMath() {
    if (selectedCharacterID !== -1) {
        if (characterInventory[selectedCharacterID].id == 16) {
            if (characterFaceLauncher == right) {
                if (mouseX - (characterLocation[0] + heldItemDirectionOffset + weaponOffsetX + 50) <= 0) {
                    landmarkPos[0] = (characterLocation[0] + heldItemDirectionOffset + weaponOffsetX + 26);
                } else {
                    landmarkPos[0] = mouseX - 24;
                }
            } else {
                if (mouseX - (characterLocation[0] + heldItemDirectionOffset + weaponOffsetX + 50) >= 0) {
                    landmarkPos[0] = (characterLocation[0] + heldItemDirectionOffset + weaponOffsetX + 26);
                } else {
                    landmarkPos[0] = mouseX - 24;
                }
            }
            landmarkPos[1] = mouseY - 24;
        }
    }
}
var thig33 = setInterval(landmarkMath, 0);
function updateLandmarkPos() {
    document.getElementById("launcherGuide").style.left = String(landmarkPos[0]) + "px";
    document.getElementById("launcherGuide").style.bottom = String(landmarkPos[1]) + "px";
    if (ammoID == -1) {
        document.getElementById("launcherGuide").style.opacity = "50%";
    } else {
        document.getElementById("launcherGuide").style.opacity = "100%";
    }
}
var thig32 = setInterval(updateLandmarkPos, 0);
function updateBlockPos() {
    for (var i = 0; i < blockBoundingBoxes.length; i++) {
        if (blockBoundingBoxes[i] !== 0) {
            document.getElementById("block" + String(i)).style.bottom = String(savedBlockY[i] - characterScreenOffset + window.innerHeight - (window.innerHeight / universalScale)) + "px";
        }
    }
}
var thig10 = setInterval(updateBlockPos, 0);
function updateLadderPos() {
    for (var i = 0; i < ladderCount; i++) {
        if (usedLadders[i]) {
            document.getElementById("ladder" + String(i)).style.bottom = String(savedLadderY[i] - characterScreenOffset + (window.innerHeight - (window.innerHeight / universalScale))) + "px";
        }
    }
}
var thig11 = setInterval(updateLadderPos, 0);
function updateSignPos() {
    for (var i = 0; i < signCount; i++) {
        if (usedSigns[i]) {
            document.getElementById("sign" + String(i)).style.bottom = String(savedSignY[i] - characterScreenOffset + (window.innerHeight - (window.innerHeight / universalScale))) + "px";
        }
    }
}
var thig12 = setInterval(updateSignPos, 0);
function updateArrowPos() {
    for (var i = 0; i < arrowCount; i++) {
        if (usedArrows[i]) {
            document.getElementById("arrow" + String(i)).style.bottom = String(savedArrowY[i] - characterScreenOffset + (window.innerHeight - (window.innerHeight / universalScale))) + "px";
        }
    }
}
var thig13 = setInterval(updateArrowPos, 0);
function updateStandPos() {
    for (var i = 0; i < standCount; i++) {
        if (usedStands[i]) {
            document.getElementById("stand" + String(i)).style.bottom = String(savedStandY[i] - characterScreenOffset + (window.innerHeight - (window.innerHeight / universalScale))) + "px";
            if (standDirection[i] == "left") {
                document.getElementById("creeper" + String(standManning[i]) + "face").style.left = "10px";
                document.getElementById("creeper" + String(standManning[i]) + "face").style.bottom = "187.5px";
            } else if (standDirection[i] == "right") {
                document.getElementById("creeper" + String(standManning[i]) + "face").style.left = "45px";
                document.getElementById("creeper" + String(standManning[i]) + "face").style.bottom = "187.5px";
            }
        }
    }
}
var thig15 = setInterval(updateStandPos, 0);
function updateFanPos() {
    for (var i = 0; i < fanCount; i++) {
        if (usedFans[i]) {
            document.getElementById("fan" + String(i)).style.left = String(fanLocation[i][0]) + "px";
            document.getElementById("fan" + String(i)).style.bottom = String(fanLocation[i][1] - characterScreenOffset + (window.innerHeight - (window.innerHeight / universalScale))) + "px";
        }
    }
}
var thig23 = setInterval(updateFanPos, 0);
function updateTNTY() {
    for (var i = 0; i < tnts.length; i++) {
        document.getElementById(tnts[i].elementName).style.bottom = String(tnts[i].y - characterScreenOffset + (window.innerHeight - (window.innerHeight / universalScale))) + "px";
    }
}
var thig26 = setInterval(updateTNTY, 0);
function updateBombPos() {
    for (var i = 0; i < bombs.length; i++) {
        if (bombs[i].inUse) {
            if (bombs[i].x < 0) {
                bombs[i].x = 0;
                bombs[i].xVector *= -1;
            } else if (bombs[i].x > worldWidth - 64) {
                bombs[i].x = worldWidth - 64;
                bombs[i].xVector *= -1;
            }

            if (bombs[i].unstable) {
                document.getElementById("bomb" + String(i)).src = "assets/items/unstable_bomb.png";
            }

            document.getElementById("bomb" + String(i)).style.left = String(bombs[i].x) + "px";
            document.getElementById("bomb" + String(i)).style.bottom = String(bombs[i].y - characterScreenOffset + (window.innerHeight - (window.innerHeight / universalScale))) + "px";
            document.getElementById("bomb" + String(i)).style.rotate = String(bombs[i].rotation) + "rad";
        }
    }
}
var thig28 = setInterval(updateBombPos, 0);
function updateTennisBallPos() {
    for (var i = 0; i < tennisBalls.length; i++) {
        if (tennisBalls[i].inUse) {
            if (tennisBalls[i].x < 0) {
                tennisBalls[i].x = 0;
                tennisBalls[i].xVector *= -1;
            } else if (tennisBalls[i].x > worldWidth - 32) {
                tennisBalls[i].x = worldWidth - 32;
                tennisBalls[i].xVector *= -1;
            }

            document.getElementById("tennisBall" + String(i)).style.left = String(tennisBalls[i].x) + "px";
            document.getElementById("tennisBall" + String(i)).style.bottom = String(tennisBalls[i].y - characterScreenOffset + (window.innerHeight - (window.innerHeight / universalScale))) + "px";
            document.getElementById("tennisBall" + String(i)).style.rotate = String(tennisBalls[i].rotation) + "rad";
        }
    }
}
var thig35 = setInterval(updateTennisBallPos, 0);
function updateMoneyPos() {
    for (var i = 0; i < floorMoney.length; i++) {
        if (floorMoney[i].inUse) {
            if (floorMoney[i].x < 0) {
                floorMoney[i].x = 0;
                floorMoney[i].xVector *= 0;
            } else if (floorMoney[i].x > worldWidth - floorMoney[i].size) {
                floorMoney[i].x = worldWidth - floorMoney[i].size;
                floorMoney[i].xVector *= 0;
            }

            document.getElementById("floorMoney" + String(i)).style.left = String(floorMoney[i].x) + "px";
            document.getElementById("floorMoney" + String(i)).style.bottom = String(floorMoney[i].y - characterScreenOffset + (window.innerHeight - (window.innerHeight / universalScale))) + "px";
            document.getElementById("floorMoney" + String(i)).style.rotate = String(floorMoney[i].rotation) + "deg";
        }
    }
}
var thig39 = setInterval(updateMoneyPos, 0);
function updateFloorItemPos() {
    for (var i = 0; i < floorItems.length; i++) {
        if (floorItems[i].inUse) {
            if (floorItems[i].x < 0) {
                floorItems[i].x = 0;
                floorItems[i].xVector *= 0;
            } else if (floorItems[i].x > worldWidth - floorItems[i].size) {
                floorItems[i].x = worldWidth - floorItems[i].size;
                floorItems[i].xVector *= 0;
            }

            document.getElementById("floorItem" + String(i)).style.left = String(floorItems[i].x) + "px";
            document.getElementById("floorItem" + String(i)).style.bottom = String(floorItems[i].y - characterScreenOffset + (window.innerHeight - (window.innerHeight / universalScale))) + "px";
        }
    }
}
var thig41 = setInterval(updateFloorItemPos, 0);

function updateBoxes() {
    characterBox = scaleBoundingBox(document.getElementById("characterCreeper").getBoundingClientRect());
    for (var i = 0; i < blockBoundingBoxes.length; i++) {
        if (blockBoundingBoxes[i] !== 0) {
            blockBoundingBoxes[i] = scaleBoundingBox(document.getElementById("block" + String(i)).getBoundingClientRect());
        }
    }
    for (var i = 0; i < creeperBoxes.length; i++) {
        if (usedCreepers[i]) {
            creeperBoxes[i] = scaleBoundingBox(document.getElementById("creeper" + String(i)).getBoundingClientRect());
        }
    }
    for (var i = 0; i < ladderBoxes.length; i++) {
        if (usedLadders[i]) {
            ladderBoxes[i] = scaleBoundingBox(document.getElementById("ladder" + String(i)).getBoundingClientRect());
        }
    }
    for (var i = 0; i < standBoxes.length; i++) {
        if (usedStands[i]) {
            standBoxes[i] = scaleBoundingBox(document.getElementById("stand" + String(i)).getBoundingClientRect());
        }
    }
    for (var i = 0; i < standSquareBoxes.length; i++) {
        standSquareBoxes[i] = scaleBoundingBox(document.getElementById("standsq" + String(i)).getBoundingClientRect());
    }
    for (var i = 0; i < fanBoxes.length; i++) {
        if (usedFans[i]) {
            fanBoxes[i] = scaleBoundingBox(document.getElementById("fan" + String(i)).getBoundingClientRect());
        }
    }
    for (var i = 0; i < bombs.length; i++) {
        if (bombs[i].inUse) {
            bombs[i].boundingBox.left = bombs[i].x;
            bombs[i].boundingBox.right = bombs[i].x + 64;
            bombs[i].boundingBox.top = (window.innerHeight * universalScale) + (window.innerHeight - document.getElementById("html").getBoundingClientRect().height) - bombs[i].y - 64 + characterScreenOffset;
            bombs[i].boundingBox.bottom = (window.innerHeight * universalScale) + (window.innerHeight - document.getElementById("html").getBoundingClientRect().height) - bombs[i].y + characterScreenOffset;
        }
    }
    for (var i = 0; i < tennisBalls.length; i++) {
        if (tennisBalls[i].inUse) {
            tennisBalls[i].boundingBox.left = tennisBalls[i].x;
            tennisBalls[i].boundingBox.right = tennisBalls[i].x + 32;
            tennisBalls[i].boundingBox.top = (window.innerHeight * universalScale) + (window.innerHeight - document.getElementById("html").getBoundingClientRect().height) - tennisBalls[i].y - 32 + characterScreenOffset;
            tennisBalls[i].boundingBox.bottom = (window.innerHeight * universalScale) + (window.innerHeight - document.getElementById("html").getBoundingClientRect().height) - tennisBalls[i].y + characterScreenOffset;
        }
    }
    for (var i = 0; i < floorMoney.length; i++) {
        if (floorMoney[i].inUse) {
            floorMoney[i].boundingBox.left = floorMoney[i].x + getOffsetFromSize(floorMoney[i].size);
            floorMoney[i].boundingBox.right = floorMoney[i].x + floorMoney[i].size - getOffsetFromSize(floorMoney[i].size);
            floorMoney[i].boundingBox.top = (window.innerHeight * universalScale) + (window.innerHeight - document.getElementById("html").getBoundingClientRect().height) - floorMoney[i].y - floorMoney[i].size + characterScreenOffset;
            floorMoney[i].boundingBox.bottom = (window.innerHeight * universalScale) + (window.innerHeight - document.getElementById("html").getBoundingClientRect().height) - floorMoney[i].y + characterScreenOffset;
        }
    }
    for (var i = 0; i < floorItems.length; i++) {
        if (floorItems[i].inUse) {
            floorItems[i].boundingBox.left = floorItems[i].x
            floorItems[i].boundingBox.right = floorItems[i].x + 32
            floorItems[i].boundingBox.top = (window.innerHeight * universalScale) + (window.innerHeight - document.getElementById("html").getBoundingClientRect().height) - floorItems[i].y - 32 + characterScreenOffset;
            floorItems[i].boundingBox.bottom = (window.innerHeight * universalScale) + (window.innerHeight - document.getElementById("html").getBoundingClientRect().height) - floorItems[i].y + characterScreenOffset;
        }
    }
}
function explode(x, y, power) {
    var dist = Math.sqrt((((characterLocation[0] + 40) - x) ** 2) + (((characterLocation[1] + 120) - y) ** 2));
    var xratio = ((characterLocation[0] + 40) - x) / dist;
    var yratio = ((characterLocation[1] + 120) - y) / dist;
    if (dist < 500 * power) {
        var mult = Math.floor(((500 * power) - dist) / 10);
        characterExplosionVector += Math.floor(xratio * mult);
        characterVert += Math.floor(yratio * mult);
    }
    if (characterOnGround) {
        gravityFrame();
        characterOnGround = false;
    }

    summonExplosionParticle(x, y);
    sob = new Audio("assets/audio/generic/explosion2.wav");
    sob.volume = 0.5;
    sob.play();
    
    for (var i = 0; i < creeperCount; i++) {
        dist = Math.sqrt((((creeperLocation[i][0] + 40) - x) ** 2) + (((creeperLocation[i][1] + 120) - y) ** 2));
        xratio = ((creeperLocation[i][0] + 40) - x) / dist;
        yratio = ((creeperLocation[i][1] + 120) - y) / dist;
        if (dist < 500 * power) {
            var mult = Math.floor(((500 * power) - dist) / 10);
            creeperExplosionVector[i] += Math.floor(xratio * mult);
            creeperVert[i] += Math.floor(yratio * mult);
        }
        if (creeperOnGround[i]) {
            gravityFrameC(i);
            creeperOnGround[i] = false;
        }
    }

    for (var i = 0; i < bombs.length; i++) {
        dist = Math.sqrt((((bombs[i].x + 32) - x) ** 2) + (((bombs[i].y + 32) - y) ** 2));
        xratio = ((bombs[i].x + 32) - x) / dist;
        yratio = ((bombs[i].y + 32) - y) / dist;
        if (dist < 500 * power) {
            var mult = Math.floor(((500 * power) - dist) / 10);
            bombs[i].xVector += Math.floor(xratio * mult);
            bombs[i].yVector += Math.floor(yratio * mult);
        }
        if (bombs[i].bombOnGround) {
            bombs[i].bombOnGround = false;
        }
    }

    for (var i = 0; i < tennisBalls.length; i++) {
        dist = Math.sqrt((((tennisBalls[i].x + 16) - x) ** 2) + (((tennisBalls[i].y + 16) - y) ** 2));
        xratio = ((tennisBalls[i].x + 16) - x) / dist;
        yratio = ((tennisBalls[i].y + 16) - y) / dist;
        if (dist < 500 * power) {
            var mult = Math.floor(((500 * power) - dist) / 10);
            tennisBalls[i].xVector += Math.floor(xratio * mult);
            tennisBalls[i].yVector += Math.floor(yratio * mult);
        }
        if (tennisBalls[i].ballOnGround) {
            tennisBalls[i].ballOnGround = false;
        }
    }
}
function summonExplosionParticle(x, y) {
    var ex = document.createElement("img");
    ex.id = "explosion" + String(explosionCount);
    document.getElementById("explosions").appendChild(ex);
    ex.src = "assets/explosion.png";
    ex.style.position = "absolute";
    ex.style.left = String(x) + "px";
    ex.style.bottom = String(y - characterScreenOffset) + "px";
    ex.style.width = "0px";
    ex.style.height = "0px";
    explosionFrameCount.push([explosionCount, 0, x, y]);
    explosionCount++;
}
function explosionFrame() {
    for (var i = 0; i < explosionFrameCount.length; i++) {
        if (explosionFrameCount[i][1] == 59) {
            document.getElementById("explosion" + String(explosionFrameCount[i][0])).remove();
            explosionFrameCount.splice(i, 1);
        } else {
            document.getElementById("explosion" + String(explosionFrameCount[i][0])).style.width = String(explosionFrameCount[i][1] * 4) + "px";
            document.getElementById("explosion" + String(explosionFrameCount[i][0])).style.height = String(explosionFrameCount[i][1] * 4) + "px";
            document.getElementById("explosion" + String(explosionFrameCount[i][0])).style.left = String(explosionFrameCount[i][2] - (explosionFrameCount[i][1] * 2)) + "px";
            document.getElementById("explosion" + String(explosionFrameCount[i][0])).style.bottom = String(explosionFrameCount[i][3] - (explosionFrameCount[i][1] * 2) - characterScreenOffset) + "px";
            if (explosionFrameCount[i][1] > 29) {
                document.getElementById("explosion" + String(explosionFrameCount[i][0])).style.opacity = String(100 + ((30 - explosionFrameCount[i][1]) * 10 / 3)) + "%";
            }
            explosionFrameCount[i][1] += 1;
        }
    }
}
var thig27 = setInterval(explosionFrame, (1000 / 60));
var thig4 = setInterval(updateBoxes, 0);
function boundingBoxCheck(box1, box2) {
    if (box1.right > box2.left && box1.left < box2.right && box1.bottom > box2.top && box1.top < box2.bottom) {
        return true;
    } else {
        return false;
    }
}
function updateCharacterStandSquare() {
    document.getElementById("characterStandSquare").style.left = characterLocation[0] - 110;
    document.getElementById("characterStandSquare").style.bottom = characterLocation[1] - characterScreenOffset;
    characterStandSquareBox = scaleBoundingBox(document.getElementById("characterStandSquare").getBoundingClientRect());
}
var thig22 = setInterval(updateCharacterStandSquare, 0);
function jump() {
    characterVert = 20 + jumpAddend;
    if (characterWearables[2] == 15) {
        characterVert = 30 + jumpAddend;
    }
    gravityFrame();
    characterOnGround = false;
}
function jumb() {
    characterVert = 0;
    gravityFrame();
    characterOnGround = false;
}
function gravityFrame() {
    if (runServerTick) {
        characterLocation[1] += characterVert;
        characterVert--;
    }
    var prevCK = false;
    for (var i = 0; i < fanCount; i++) {
        if (characterBox.left < fanBoxes[i].right && characterBox.right > fanBoxes[i].left && runServerTick && usedFans[i]) {
            if (characterLocation[1] > fanLocation[i][1] + 20 && characterLocation[1] < fanLocation[i][1] + 1020) {
                characterVert += Math.floor(500 / (characterLocation[1] - fanLocation[i][1]));
                prevCK = true;
            }
        }
    }
    characterInFan = prevCK;
    vertFrame();
    setTimeout(gframe2, (50 / 3));
}
function gframe2() {
    if (!characterOnGround && !characterOnLadder) {
        gravityFrame();
    }// else if (!characterOnLadder) {
    //    lastVertFrame();
    //}
}
function blocksCheck() {
    if (characterVector !== 0) {
        blocksCheckOnceoff = true;
        for (var i = 0; i < blockBoundingBoxes.length; i++) {
            if (!previousAirFrame[i] && !previousAirFrameBottom[i] && characterBox.top < blockBoundingBoxes[i].bottom) {
                if (characterVector == 1 && boundingBoxCheck(characterBox, blockBoundingBoxes[i])) {
                    characterLocation[0] = (blockBoundingBoxes[i].left - 80);
                    xRightOverride = true;
                    characterVector = 0;
                } else if (characterVector == -1 && boundingBoxCheck(characterBox, blockBoundingBoxes[i])) {
                    characterLocation[0] = blockBoundingBoxes[i].right;
                    xLeftOverride = true;
                    characterVector = 0;
                }
            }
        }
    } else if (blocksCheckOnceoff) {
        blocksCheckOnceoff = false;
        for (var i = 0; i < blockBoundingBoxes.length; i++) {
            if (!previousAirFrame[i] && !previousAirFrameBottom[i] && characterBox.top < blockBoundingBoxes[i].bottom) {
                if (boundingBoxCheck(characterBox, blockBoundingBoxes[i])) {
                    if (characterLocation[0] + 40 < blockBoundingBoxes[i].x + (blockBoundingBoxes[i].width / 2)) {
                        characterLocation[0] = (blockBoundingBoxes[i].left - 80);
                    } else {
                        characterLocation[0] = blockBoundingBoxes[i].right;
                    }
                    xRightOverride = true;
                    characterVector = 0;
                }
            }
        }
    }
}
function vertFrame() {
    for (var i = 0; i < blockBoundingBoxes.length; i++) {
        if (characterOnGround == false && boundingBoxCheck(characterBox, blockBoundingBoxes[i]) && characterVert >= 0 && previousFanFrame[i] && !characterOnLadder && characterInFan) {
            characterLocation[1] = ((window.innerHeight * universalScale) + (window.innerHeight - document.getElementById("html").getBoundingClientRect().height) - blockBoundingBoxes[i].bottom - 245 + characterScreenOffset);
            characterVert = 0;
        } else if (characterOnGround == false && boundingBoxCheck(characterBox, blockBoundingBoxes[i]) && characterVert < 0 && characterOnLadder == false) {
            if (previousAirFrame[i]) {
                characterLocation[1] = ((window.innerHeight * universalScale) + (window.innerHeight - document.getElementById("html").getBoundingClientRect().height) - blockBoundingBoxes[i].top + characterScreenOffset);
                if (searchForTrampoline(i)) {
                    characterVert = (characterVert * -1) - 5;
                    if (characterVert < 0) {
                        characterVert = 0;
                        characterOnGround = true;
                        ladderFall = false;
                    }
                } else {
                    characterOnGround = true;
                    ladderFall = false;
                }
                objectIDUnderCharacter = String(i);
                objectUnderCharacter = blockBoundingBoxes[i];
            }
        } else if (characterOnGround == false && boundingBoxCheck(characterBox, blockBoundingBoxes[i]) && characterVert >= 0) {
            if (previousAirFrameBottom[i] && !characterOnLadder) {
                characterLocation[1] = ((window.innerHeight * universalScale) + (window.innerHeight - document.getElementById("html").getBoundingClientRect().height) - blockBoundingBoxes[i].bottom - 240 + characterScreenOffset);
                characterVert = -1;
            }
        } else {
            if (characterBox.left < blockBoundingBoxes[i].right && characterBox.right > blockBoundingBoxes[i].left) {
                previousFanFrame[i] = true;
            } else {
                previousFanFrame[i] = false;
            }
            if (characterBox.bottom > blockBoundingBoxes[i].top) {
                previousAirFrame[i] = false;
            } else {
                previousAirFrame[i] = true;
            }
            if (characterBox.top < blockBoundingBoxes[i].bottom) {
                previousAirFrameBottom[i] = false;
            } else {
                previousAirFrameBottom[i] = true;
            }
        }
    }
    for (var i = 0; i < ladderCount; i++) {
        for (var j = 0; j < blockBoundingBoxes.length; j++) {
            if (characterOnGround == false && boundingBoxCheck(characterBox, ladderBoxes[i]) && characterVert < 0 && !characterLadderRange[i] && previousAirFrame[j]) {
                characterLocation[1] = ((window.innerHeight * universalScale) + (window.innerHeight - document.getElementById("html").getBoundingClientRect().height) - ladderBoxes[i].top + characterScreenOffset);
                characterOnGround = true;
                objectIDUnderCharacter = "l" + String(i);
                objectUnderCharacter = ladderBoxes[i];
            }
        }
        if (characterBox.bottom > ladderBoxes[i].top && characterBox.top < ladderBoxes[i].bottom) {
            characterLadderRange[i] = true;
        } else {
            characterLadderRange[i] = false;
        }
    }
}
function ladderDismountTrigger(i, time) {
    if (time < 5) {
        if (previousAirFrame[i] || boundingBoxCheck(characterBox, blockBoundingBoxes[i])) {
            characterLocation[1] = savedBlockY[i] + blockBoundingBoxes[i].height;
            if (searchForTrampoline(i)) {
                characterVert = (characterVert * -1) - 5;
                if (characterVert < 0) {
                    characterVert = 0;
                    characterOnGround = true;
                    ladderFall = false;
                }
            } else {
                characterOnGround = true;
                ladderFall = false;
            }
            objectIDUnderCharacter = String(i);
            objectUnderCharacter = blockBoundingBoxes[i];
        }
        setTimeout(ladderDismountTrigger, (1000 / 60), i, time + 1);
    }
}
function lastVertFrame() {
    for (var i = 0; i < blockBoundingBoxes.length; i++) {
        if (boundingBoxCheck(characterBox, blockBoundingBoxes[i]) && characterVert >= 0 && previousFanFrame[i] && !characterOnLadder && characterInFan) {
            characterLocation[1] = ((window.innerHeight * universalScale) + (window.innerHeight - document.getElementById("html").getBoundingClientRect().height) - blockBoundingBoxes[i].bottom - 245 + characterScreenOffset);
            characterVert = 0;
        } else if (boundingBoxCheck(characterBox, blockBoundingBoxes[i]) && characterVert < 0 && characterOnLadder == false) {
            if (previousAirFrame[i]) {
                characterLocation[1] = ((window.innerHeight * universalScale) + (window.innerHeight - document.getElementById("html").getBoundingClientRect().height) - blockBoundingBoxes[i].top + characterScreenOffset);
                characterOnGround = true;
                ladderFall = false;
                objectIDUnderCharacter = String(i);
                objectUnderCharacter = blockBoundingBoxes[i];
            }
        } else if (boundingBoxCheck(characterBox, blockBoundingBoxes[i]) && characterVert >= 0) {
            if (previousAirFrameBottom[i] && !characterOnLadder) {
                characterLocation[1] = ((window.innerHeight * universalScale) + (window.innerHeight - document.getElementById("html").getBoundingClientRect().height) - blockBoundingBoxes[i].bottom - 240 + characterScreenOffset);
                characterVert = -1;
            }
        } else {
            if (characterBox.left < blockBoundingBoxes[i].right && characterBox.right > blockBoundingBoxes[i].left) {
                previousFanFrame[i] = true;
            } else {
                previousFanFrame[i] = false;
            }
            if (characterBox.bottom > blockBoundingBoxes[i].top) {
                previousAirFrame[i] = false;
            } else {
                previousAirFrame[i] = true;
            }
            if (characterBox.top < blockBoundingBoxes[i].bottom) {
                previousAirFrameBottom[i] = false;
            } else {
                previousAirFrameBottom[i] = true;
            }
        }
        for (var i = 0; i < ladderCount; i++) {
            for (var j = 0; j < blockBoundingBoxes.length; j++) {
                if (boundingBoxCheck(characterBox, ladderBoxes[i]) && characterVert < 0 && !characterLadderRange[i] && previousAirFrame[j]) {
                    characterLocation[1] = ((window.innerHeight * universalScale) + (window.innerHeight - document.getElementById("html").getBoundingClientRect().height) - ladderBoxes[i].top + characterScreenOffset);
                    characterOnGround = true;
                    objectIDUnderCharacter = "l" + String(i);
                    objectUnderCharacter = ladderBoxes[i];
                }
            }
            if (characterBox.bottom > ladderBoxes[i].top && characterBox.top < ladderBoxes[i].bottom) {
                characterLadderRange[i] = true;
            } else {
                characterLadderRange[i] = false;
            }
        }
    }
}
function fall() {
    if (characterOnGround) {
        if (characterBox.right < objectUnderCharacter.left || characterBox.left > objectUnderCharacter.right) {
            characterVert = 0;
            gravityFrame();
            characterOnGround = false;
        }
    }
}
function fallC(id) {
    if (creeperOnGround[id]) {
        if (creeperBoxes[id].right < objectUnderCreeper[id].left || creeperBoxes[id].left > objectUnderCreeper[id].right) {
            creeperVert[id] = 0;
            objectUnderCreeper[id] = "";
            gravityFrameC(id);
            creeperOnGround[id] = false;
        }
    }
}
var thig5 = setInterval(fall, 0);
function jumpC(id) {
    if (!preStandCheck[id]) {
        creeperVert[id] = 20;
        gravityFrameC(id);
        creeperOnGround[id] = false;
    }
}
function jumbC(id) {
    creeperVert[id] = 0;
    gravityFrameC(id);
    creeperOnGround[id] = false;
}
function gravityFrameC(id) {
    if (runServerTick) {
        creeperLocation[id][1] += creeperVert[id];
        creeperVert[id]--;
    }
    var prevCK = false;
    for (var i = 0; i < fanCount; i++) {
        if (creeperBoxes[id].left < fanBoxes[i].right && creeperBoxes[id].right > fanBoxes[i].left && runServerTick && usedFans[i]) {
            if (creeperLocation[id][1] > fanLocation[i][1] + 20 && creeperLocation[id][1] < fanLocation[i][1] + 1020) {
                creeperVert[id] += Math.floor(500 / (creeperLocation[id][1] - fanLocation[i][1]));
                prevCK = true;
            }
        }
    }
    creeperInFan[id] = prevCK;
    vertFrameC(id);
    setTimeout(gframe2C, (50 / 3), id);
}
function gframe2C(id) {
    if (!creeperOnGround[id]) {
        gravityFrameC(id);
    }
}
function vertFrameC(id) {
    for (var i = 0; i < blockBoundingBoxes.length; i++) {
        var fanFrameCheck = false;
        for (var j = 0; j < creeperFanStack[id].fanElligibility.length; j++) {
            fanFrameCheck = (creeperFanStack[id].fanElligibility[j] == i);
        }
        if (creeperOnGround[id] == false && boundingBoxCheck(creeperBoxes[id], blockBoundingBoxes[i]) && creeperVert[id] < 0 && !creeperOnLadder[id]) {
            if (creeperInFan[id] && fanFrameCheck) {
                creeperLocation[id][1] = ((window.innerHeight * universalScale) + (window.innerHeight - document.getElementById("html").getBoundingClientRect().height) - blockBoundingBoxes[i].bottom - 245 + characterScreenOffset);
                creeperVert[id] = 0;
            } else {
                if (!creeperRange[(blockBoundingBoxes.length * id) + i]) {
                    creeperLocation[id][1] = ((window.innerHeight * universalScale) + (window.innerHeight - document.getElementById("html").getBoundingClientRect().height) - blockBoundingBoxes[i].top + characterScreenOffset);
                    creeperOnGround[id] = true;
                    objectIDUnderCreeper[id] = String(i);
                    objectUnderCreeper[id] = blockBoundingBoxes[i];
                    var random = Math.floor(Math.random() * 2);
                    if (random == 0) {
                        junpOrNot[id] = true;
                    } else {
                        junpOrNot[id] = false;
                    }
                } else {
                    //blocksCheckC
                    if (creeperVector[id] == 1 && boundingBoxCheck(creeperBoxes[id], blockBoundingBoxes[i])) {
                        creeperLocation[id][0] = (blockBoundingBoxes[i].left - 80);
                        creeperVector[id] = 0;
                    } else if (creeperVector[id] == -1 && boundingBoxCheck(creeperBoxes[id], blockBoundingBoxes[i])) {
                        creeperLocation[id][0] = blockBoundingBoxes[i].right;
                        creeperVector[id] = 0;
                    }
                }
            }
        } else if (creeperOnGround[id] == false && boundingBoxCheck(creeperBoxes[id], blockBoundingBoxes[i]) && creeperVert[id] >= 0) {
            if (!creeperRange[(blockBoundingBoxes.length * id) + i] && !creeperOnLadder[id]) {
                creeperLocation[id][1] = ((window.innerHeight * universalScale) + (window.innerHeight - document.getElementById("html").getBoundingClientRect().height) - blockBoundingBoxes[i].bottom - 240 + characterScreenOffset);
                creeperVert[id] = -1;
            } else {
                //blocksCheckC
                if (creeperVector[id] == 1 && boundingBoxCheck(creeperBoxes[id], blockBoundingBoxes[i])) {
                    creeperLocation[id][0] = (blockBoundingBoxes[i].left - 80);
                    creeperVector[id] = 0;
                } else if (creeperVector[id] == -1 && boundingBoxCheck(creeperBoxes[id], blockBoundingBoxes[i])) {
                    creeperLocation[id][0] = blockBoundingBoxes[i].right;
                    creeperVector[id] = 0;
                }
            }
        } else {
            if (creeperBoxes[id].left < blockBoundingBoxes[i].right && creeperBoxes[id].right > blockBoundingBoxes[i].left) {
                creeperFanStack[id].fanElligibility.push(i);
            } else {
                for (var j = 0; j < creeperFanStack[id].fanElligibility.length; j++) {
                    if (creeperFanStack[id].fanElligibility[j] == i) {
                        creeperFanStack[id].fanElligibility.splice(j, 1);
                    }
                }
            }
            if (creeperBoxes[id].bottom > blockBoundingBoxes[i].top && creeperBoxes[id].bottom < (blockBoundingBoxes[i].bottom + 240)) {
                creeperRange[(blockBoundingBoxes.length * id) + i] = true;
            } else {
                creeperRange[(blockBoundingBoxes.length * id) + i] = false;
            }
        }
    }
}
function blocksCheckC(id) {
    if (creeperVector[id] !== 0) {
        for (var i = 0; i < blockBoundingBoxes.length; i++) {
            if (creeperOnGround[id]) {
                if (creeperVector[id] == 1 && boundingBoxCheck(creeperBoxes[id], blockBoundingBoxes[i])) {
                    creeperLocation[id][0] = (blockBoundingBoxes[i].left - 80);
                    creeperVector[id] = 0;
                } else if (creeperVector[id] == -1 && boundingBoxCheck(creeperBoxes[id], blockBoundingBoxes[i])) {
                    creeperLocation[id][0] = blockBoundingBoxes[i].right;
                    creeperVector[id] = 0;
                }
            } else {
                if (creeperRange[(blockBoundingBoxes.length * id) + i]) {
                    if (creeperVector[id] == 1 && boundingBoxCheck(creeperBoxes[id], blockBoundingBoxes[i])) {
                        creeperLocation[id][0] = (blockBoundingBoxes[i].left - 80);
                        creeperVector[id] = 0;
                    } else if (creeperVector[id] == -1 && boundingBoxCheck(creeperBoxes[id], blockBoundingBoxes[i])) {
                        creeperLocation[id][0] = blockBoundingBoxes[i].right;
                        creeperVector[id] = 0;
                    }
                }
            }
        }
    }
}
function updateCratePos() {
    for (var i = 0; i < crateCount; i++) {
        if (usedCrates[i]) {
            document.getElementById("crate" + String(i)).style.left = String(crateLocation[i][0]) + "px";
            document.getElementById("crate" + String(i)).style.bottom = String(crateLocation[i][1] - characterScreenOffset + (window.innerHeight - (window.innerHeight / universalScale))) + "px";
        }
    }
}
function clickedGuide() {
    if (!ShiftHeld) {
        var trev = false;
        var power = 0;
        for (var i = 0; i < tnts.length; i++) {
            if (boundingBoxCheck(scaleBoundingBox(document.getElementById("invisibleMouseDetector").getBoundingClientRect()), scaleBoundingBox(document.getElementById("block" + String(tnts[i].blockID)).getBoundingClientRect()))) {
                trev = tnts[i];
            }
        }
        if (typeof trev == "object") {
            if (trev.type == "1x") {
                power = 1;
            } else if (trev.type == "10x") {
                power = 2;
            } else if (trev.type == "100x") {
                power = 3;
            } else if (trev.type == "1000x") {
                power = 4;
            }
            explode(trev.x + 24 + (power * 8), trev.y + 24 + (power * 8), power);
            setTimeout(detectNearTNTs, 100, trev.x + 24 + (power * 8), trev.y + 24 + (power * 8), 500 * power);
            if (trev.type == "1x") {
                deleteTNT(trev.ID);
            } else if (trev.type == "10x") {
                delete10xTNT(trev.ID);
            } else if (trev.type == "100x") {
                delete100xTNT(trev.ID);
            } else if (trev.type == "1000x") {
                delete1000xTNT(trev.ID);
            }
        } else {
            for (var i = 0; i < bombs.length; i++) {
                if (boundingBoxCheck(scaleBoundingBox(document.getElementById("invisibleMouseDetector").getBoundingClientRect()), bombs[i].boundingBox) && bombs[i].inUse) {
                    trev = i;
                }
            }
            if (typeof trev == "number") {
                bombs[trev].unstable = true;
                setTimeout(explodeBomb, bombs[trev].explosionTime, trev);
            } else {
                for (var i = 0; i < crateBlockRelation.length; i++) {
                    if (boundingBoxCheck(scaleBoundingBox(document.getElementById("invisibleMouseDetector").getBoundingClientRect()), blockBoundingBoxes[crateBlockRelation[i]]) && usedCrates[i]) {
                        trev = i;
                    }
                }
                if (typeof trev == "number" && !inventoryShown && !standInventoryShown && !crateInventoryShown) {
                    if (selectedCharacterID !== -1 && characterInventory[selectedCharacterID].id == 17) {
                        explodeCrate(trev);
                    } else {
                        openedCrateID = trev;
                        updateCrateItems(trev);
                        document.getElementById("crateInventory").style.display = "inline";
                        document.getElementById("fullScreenOverlay").style.display = "inline";
                        crateInventoryShown = true;
                    }
                } else {
                    if (haloShown) {
                        haloClick();
                    } else {
                        if (placeObject === false) {

                        } else {
                            if (placeObject === "crate") {
                                placeCrate(fixMouseX(mouseX - 32, 64), getClosestBlockOffset());
                                removeItemFromInventory(selectedCharacterID, 1);
                            } else if (placeObject === "big_crate") {
                                placeBigCrate(fixMouseX(mouseX - 64, 128), getClosestBlockOffset());
                                removeItemFromInventory(selectedCharacterID, 1);
                            } else if (placeObject === "double_big_crate") {
                            placeDoubleBigCrate(fixMouseX(mouseX - 96, 192), getClosestBlockOffset());
                                removeItemFromInventory(selectedCharacterID, 1);
                            } else if (placeObject === "tnt") {
                                placeTNT(fixMouseX(mouseX - 32, 64), getClosestBlockOffset());
                                removeItemFromInventory(selectedCharacterID, 1);
                            } else if (placeObject === "10xtnt") {
                                place10xTNT(fixMouseX(mouseX - 40, 80), getClosestBlockOffset());
                                removeItemFromInventory(selectedCharacterID, 1);
                            } else if (placeObject === "100xtnt") {
                                place100xTNT(fixMouseX(mouseX - 48, 96), getClosestBlockOffset());
                                removeItemFromInventory(selectedCharacterID, 1);
                            } else if (placeObject === "1000xtnt") {
                                place1000xTNT(fixMouseX(mouseX - 56, 112), getClosestBlockOffset());
                                removeItemFromInventory(selectedCharacterID, 1);
                            } else if (placeObject === "bomb") {
                                createBomb(fixMouseX(mouseX - 25, 64), mouseY - 25 + characterScreenOffset);
                                removeItemFromInventory(selectedCharacterID, 1);
                            } else if (placeObject === "tennis_ball") {
                                createTennisBall(fixMouseX(mouseX - 16, 32), mouseY - 16 + characterScreenOffset);
                                removeItemFromInventory(selectedCharacterID, 1);
                            } else if (placeObject === "launcher") {
                                launchAmmo(characterLocation[0] + heldItemDirectionOffset + weaponOffsetX + 50, characterLocation[1] + 140 - characterScreenOffset + weaponOffsetY, landmarkPos[0], landmarkPos[1]);
                            }
                        }
                    }
                }
            }
        }
    } else {
        if (elementConsoleOpen) {
            updateTracked();
        }
        if (haloShown) {
            haloClick();
        }
    }
}
function updateTracked() {
    //creepers
    if (boundingBoxCheck(characterBox, scaleBoundingBox(document.getElementById("invisibleMouseDetector").getBoundingClientRect())) && !checkCharacterDupe()) {
        tracked.push({"object": "character"});
    }
    for (var i = 0; i < creeperCount; i++) {
        if (boundingBoxCheck(creeperBoxes[i], scaleBoundingBox(document.getElementById("invisibleMouseDetector").getBoundingClientRect())) && !checkDupes("creeper", i)) {
            tracked.push({"object": "creeper", "id": i});
        }
    }

    //bombs
    for (var i = 0; i < bombs.length; i++) {
        if (boundingBoxCheck(bombs[i].boundingBox, scaleBoundingBox(document.getElementById("invisibleMouseDetector").getBoundingClientRect())) && !checkDupes("bomb", i) && bombs[i].inUse) {
            tracked.push({"object": "bomb", "id": i});
        }
    }

    //tennis balls
    for (var i = 0; i < tennisBalls.length; i++) {
        if (boundingBoxCheck(tennisBalls[i].boundingBox, scaleBoundingBox(document.getElementById("invisibleMouseDetector").getBoundingClientRect())) && !checkDupes("tennis_ball", i) && tennisBalls[i].inUse) {
            tracked.push({"object": "tennis_ball", "id": i});
        }
    }

    //crates
    for (var i = 0; i < crateCount; i++) {
        if (usedCrates[i] && boundingBoxCheck(scaleBoundingBox(document.getElementById("crate" + String(i)).getBoundingClientRect()), scaleBoundingBox(document.getElementById("invisibleMouseDetector").getBoundingClientRect())) && !checkDupes("crate", i)) {
            tracked.push({"object": "crate", "id": i});
        }
    }

    //tnts
    for (var i = 0; i < tnts.length; i++) {
        if (boundingBoxCheck(scaleBoundingBox(document.getElementById(tnts[i].elementName).getBoundingClientRect()), scaleBoundingBox(document.getElementById("invisibleMouseDetector").getBoundingClientRect())) && !checkDupes("tnt", i)) {
            tracked.push({"object": "tnt", "id": i});
        }
    }

    //blocks
    for (var i = 0; i < blockBoundingBoxes.length; i++) {
        if (boundingBoxCheck(blockBoundingBoxes[i], scaleBoundingBox(document.getElementById("invisibleMouseDetector").getBoundingClientRect())) && !checkDupes("block", i)) {
            tracked.push({"object": "block", "id": i});
        }
    }

    //signs
    for (var i = 0; i < signCount; i++) {
        if (usedSigns[i] && boundingBoxCheck(scaleBoundingBox(document.getElementById("sign" + String(i)).getBoundingClientRect()), scaleBoundingBox(document.getElementById("invisibleMouseDetector").getBoundingClientRect())) && !checkDupes("sign", i)) {
            tracked.push({"object": "sign", "id": i});
        }
    }

    //arrows
    for (var i = 0; i < arrowCount; i++) {
        if (usedArrows[i] && boundingBoxCheck(scaleBoundingBox(document.getElementById("arrow" + String(i)).getBoundingClientRect()), scaleBoundingBox(document.getElementById("invisibleMouseDetector").getBoundingClientRect())) && !checkDupes("arrow", i)) {
            tracked.push({"object": "arrow", "id": i});
        }
    }

    //ladders
    for (var i = 0; i < ladderCount; i++) {
        if (usedLadders[i] && boundingBoxCheck(ladderBoxes[i], scaleBoundingBox(document.getElementById("invisibleMouseDetector").getBoundingClientRect())) && !checkDupes("ladder", i)) {
            tracked.push({"object": "ladder", "id": i});
        }
    }

    //stands
    for (var i = 0; i < standCount; i++) {
        if (usedStands[i] && boundingBoxCheck(scaleBoundingBox(document.getElementById("stand" + String(i)).getBoundingClientRect()), scaleBoundingBox(document.getElementById("invisibleMouseDetector").getBoundingClientRect())) && !checkDupes("stand", i)) {
            tracked.push({"object": "stand", "id": i});
        }
    }

    //fans
    for (var i = 0; i < fanCount; i++) {
        if (usedFans[i] && boundingBoxCheck(scaleBoundingBox(document.getElementById("fan" + String(i)).getBoundingClientRect()), scaleBoundingBox(document.getElementById("invisibleMouseDetector").getBoundingClientRect())) && !checkDupes("fan", i)) {
            tracked.push({"object": "fan", "id": i});
        }
    }

    //money
    for (var i = 0; i < floorMoneyCount; i++) {
        if (floorMoney[i].inUse && boundingBoxCheck(floorMoney[i].boundingBox, scaleBoundingBox(document.getElementById("invisibleMouseDetector").getBoundingClientRect())) && !checkDupes("money", i)) {
            tracked.push({"object": "money", "id": i});
        }
    }

    //floorItems
    for (var i = 0; i < floorItemCount; i++) {
        if (floorItems[i].inUse && boundingBoxCheck(floorItems[i].boundingBox, scaleBoundingBox(document.getElementById("invisibleMouseDetector").getBoundingClientRect())) && !checkDupes("floorItem", i)) {
            tracked.push({"object": "floorItem", "id": i});
        }
    }

    //blockChecc
    var ohBoi = false;
    while (true) {
        ohBoi = false;
        for (var i = 0; i < tracked.length; i++) {
            if (tracked[i].object == "block" && blockBoundingBoxes[tracked[i].id] == 0) {
                tracked.splice(i, 1);
                ohBoi = true;
            }
        }
        if (!ohBoi) {
            break;
        }
    }

    //blockCheccc
    var cratesList = [];
    var fansList = [];
    for (var i = 0; i < tracked.length; i++) {
        if (tracked[i].object == "crate") {
            cratesList.push(i);
        } else if (tracked[i].object == "fan") {
            fansList.push(i);
        }
    }
    for (var i = 0; i < cratesList.length; i++) {
        for (var j = 0; j < tracked.length; j++) {
            if (tracked[j].object == "block" && tracked[j].id == crateBlockRelation[tracked[cratesList[i]].id]) {
                tracked.splice(j, 1);
            }
        }
    }
    for (var i = 0; i < tnts.length; i++) {
        for (var j = 0; j < tracked.length; j++) {
            if (tracked[j].object == "block" && tracked[j].id == tnts[tracked[i].id].blockID) {
                tracked.splice(j, 1);
            }
        }
    }
    for (var i = 0; i < fansList.length; i++) {
        for (var j = 0; j < tracked.length; j++) {
            if (tracked[j].object == "block" && tracked[j].id == fanBlockRelation[tracked[fansList[i]].id]) {
                tracked.splice(j, 1);
            }
        }
    }
}
function checkDupes(type, id) {
    var truth = false;
    for (var i = 0; i < tracked.length; i++) {
        if (tracked[i].object == type && tracked[i].id == id) {
            truth = true;
        }
    }
    return truth;
}
function checkCharacterDupe() {
    var truth = false;
    for (var i = 0; i < tracked.length; i++) {
        if (tracked[i].object == "character") {
            truth = true;
        }
    }
    return truth;
}
function explodeBomb(delID) {
    bombs[delID].inUse = false;
    explode(bombs[delID].x, bombs[delID].y, 1);
    detectNearTNTs(bombs[delID].x, bombs[delID].y, 500);
    document.getElementById("bomb" + String(delID)).remove();
}
function detectNearTNTs(x, y, range) {
    for (var i = 0; i < tnts.length; i++) {
        if (Math.sqrt(((x - tnts[i].x) ** 2) + ((y - tnts[i].y) ** 2)) <= range) {
            power = -1;
            if (tnts[i].type == "1x") {
                power = 1;
            } else if (tnts[i].type == "10x") {
                power = 2;
            } else if (tnts[i].type == "100x") {
                power = 3;
            } else if (tnts[i].type == "1000x") {
                power = 4;
            }
            setTimeout(explode, 100, tnts[i].x + 24 + (power * 8), tnts[i].y + 24 + (power * 8), power);
            setTimeout(detectNearTNTs, 200, tnts[i].x + 24 + (power * 8), tnts[i].y + 24 + (power * 8), 500 * power);
            if (tnts[i].type == "1x") {
                setTimeout(deleteTNT, 100, tnts[i].ID);
            } else if (tnts[i].type == "10x") {
                setTimeout(delete10xTNT, 100, tnts[i].ID);
            } else if (tnts[i].type == "100x") {
                setTimeout(delete100xTNT, 100, tnts[i].ID);
            } else if (tnts[i].type == "1000x") {
                setTimeout(delete1000xTNT, 100, tnts[i].ID);
            }
        }
    }
    for (var i = 0; i < bombs.length; i++) {
        if (Math.sqrt(((x - bombs[i].x) ** 2) + ((y - bombs[i].y) ** 2)) <= range && bombs[i].inUse) {
            setTimeout(explodeBomb, 100, i);
        }
    }
}
function fixMouseX(mx, offset) {
    if (mx > worldWidth - offset) {
        return worldWidth - offset;
    } else if (mx < 0) {
        return 0;
    } else {
        return mx;
    }
}
function updateMouseClicker() {
    document.getElementById("invisibleMouseDetector").style.left = String(mouseX - 1) + "px";
    document.getElementById("invisibleMouseDetector").style.bottom = String(mouseY - 1 + (window.innerHeight - (window.innerHeight / universalScale))) + "px";
}
function decorDotsForFan(fanID) {
    var dot = document.createElement("img");
    dot.id = "dd:fan" + String(fanID) + ":" + String(dotTick);
    dot.className = "decorDot";
    document.getElementById("decorDots").appendChild(dot);
    dot.src = "assets/decoration_dot.png";
    dot.style.left = String(Math.floor(Math.random() * 300) + fanLocation[fanID][0]) + "px";
    dot.style.bottom = String(fanLocation[fanID][1] + 20 - characterScreenOffset + (window.innerHeight - (window.innerHeight / universalScale))) + "px";
    if (dotTick == 9999) {
        dotTick = 0;
    } else {
        dotTick++;
    }
    updateDot(document.getElementById(dot.id), dotTick, fanID);
    if (usedFans[fanID]) {
        setTimeout(decorDotsForFan, (1000 / 60), fanID);
    }
}
function updateDot(dotElem, tick, fanID) {
    dotElem.style.bottom = String(fanLocation[fanID][1] + 20 + dotFrame[tick] - characterScreenOffset + (window.innerHeight - (window.innerHeight / universalScale))) + "px";
    dotElem.style.opacity = String(1 - (dotFrame[tick] / 60));
    if (dotFrame[tick] == 59) {
        dotElem.remove();
        dotFrame[tick] = 0;
    } else {
        dotFrame[tick]++;
        setTimeout(updateDot, (1000 / 60), dotElem, tick, fanID);
    }
    if (displayValues[0]) {
        dotElem.style.display = "none";
    } else {
        dotElem.style.display = "block";
    }
}
var thig21 = setInterval(updateMouseClicker, 0);
var thig20 = setInterval(updateCratePos, 0);

function updateAboutPage() {
    document.getElementById("aboutScreen").style.height = String(window.innerHeight / window.innerWidth * worldWidth - 40) + "px";
}
var thig49 = setInterval(updateAboutPage, 0);
function updateWorldPreview() {
    document.getElementById("worldPreviewScreen").style.left = String(worldWidth / 2 - 250) + "px";
    document.getElementById("generateWorldPanel").style.left = String(worldWidth / 2 - 200) + "px";
}
var thig50 = setInterval(updateWorldPreview, 0);
function updateDictionaryImage() {
    document.getElementById("dictionaryImage").style.left = String(worldWidth / 2 - 490) + "px";
    document.getElementById("dictionaryImage").style.top = String((window.innerHeight / universalScale) / 2 - 280) + "px";
}
var thig53 = setInterval(updateDictionaryImage, 0);
function openDictionaryImage(src) {
    document.getElementById("dictionaryImage").src = src;
    document.getElementById("fullScreenOverlay").style.display = "block";
    document.getElementById("dictionaryImage").style.display = "block";
    dictionaryOpen = true;
}
function updateMusicVolume() {
    musicVolume = parseInt(document.getElementById("musicVolumeSlider").value) / 100;
    document.getElementById("musicVolumeOption").innerHTML = "Music Volume " + document.getElementById("musicVolumeSlider").value + "%";
    if (inventoryShown || standInventoryShown || crateInventoryShown || !runServerTick) {
        document.getElementById("music").volume = musicVolume / 2;
    } else {
        document.getElementById("music").volume = musicVolume;
    }
}
var thig54 = setInterval(updateMusicVolume, 0);
function musicLoop() {
    if (document.getElementById("music").ended && musicSilence == -1) {
        musicSilence = 10;
    } else if (musicSilence == 0) {
        var zomb = Math.floor(Math.random() * musicTitles.length);
        document.getElementById("music").src = "assets/audio/music/" + musicTitles[zomb !== previousSong ? zomb : (zomb + 1) % musicTitles.length] + ".wav";
        document.getElementById("music").play();
        musicSilence = -1;
        previousSong = zomb;
    } else if (musicSilence > 0) {
        musicSilence--;
    }
    setTimeout(musicLoop, 1000);
}
function loadMusicTrigger() {
    document.getElementById("music").src = "assets/audio/music/" + musicTitles[Math.floor(Math.random() * musicTitles.length)] + ".wav";
    document.getElementById("music").play();
    musicSilence = -1;
    document.getElementById("interact").style.display = "none";
    openTitleScreen();
    musicLoop();
}
function placeCrate(x, y) {
    var whe2 = document.createElement("img");
    whe2.id = "crate" + String(crateCount);
    document.getElementById("crates").appendChild(whe2);
    whe2.style.position = "absolute";
    whe2.style.width = "64px";
    whe2.style.height = "64px";
    whe2.style.left = String(x) + "px";
    whe2.style.bottom = String(y) + "px";
    whe2.src = "assets/items/crate.png";
    whe2.classList.add("crateHover");
    crateLocation.push([x, y]);
    crateBlockRelation.push(blockBoundingBoxes.length);
    usedCrates.push(true);
    crateInventorys.push({
        len: 4,
        inventory: [
            {id: -1, amount: 0},
            {id: -1, amount: 0},
            {id: -1, amount: 0},
            {id: -1, amount: 0}
        ],
        moneyContent: 0
    });
    updateCrateItems(crateCount);
    crateCount++;
    createBlock(64, 64, x, y);
}
function placeBigCrate(x, y) {
    var whe2 = document.createElement("img");
    whe2.id = "crate" + String(crateCount);
    document.getElementById("crates").appendChild(whe2);
    whe2.style.position = "absolute";
    whe2.style.width = "128px";
    whe2.style.height = "128px";
    whe2.style.left = String(x) + "px";
    whe2.style.bottom = String(y) + "px";
    whe2.src = "assets/items/big_crate.png";
    whe2.classList.add("crateHover");
    crateLocation.push([x, y]);
    crateBlockRelation.push(blockBoundingBoxes.length);
    usedCrates.push(true);
    crateInventorys.push({
        len: 16,
        inventory: [
            {id: -1, amount: 0},
            {id: -1, amount: 0},
            {id: -1, amount: 0},
            {id: -1, amount: 0},
            {id: -1, amount: 0},
            {id: -1, amount: 0},
            {id: -1, amount: 0},
            {id: -1, amount: 0},
            {id: -1, amount: 0},
            {id: -1, amount: 0},
            {id: -1, amount: 0},
            {id: -1, amount: 0},
            {id: -1, amount: 0},
            {id: -1, amount: 0},
            {id: -1, amount: 0},
            {id: -1, amount: 0}
        ],
        moneyContent: 0
    });
    updateCrateItems(crateCount);
    crateCount++;
    createBlock(128, 128, x, y);
}
function placeDoubleBigCrate(x, y) {
    var whe2 = document.createElement("img");
    whe2.id = "crate" + String(crateCount);
    document.getElementById("crates").appendChild(whe2);
    whe2.style.position = "absolute";
    whe2.style.width = "192px";
    whe2.style.height = "192px";
    whe2.style.left = String(x) + "px";
    whe2.style.bottom = String(y) + "px";
    whe2.src = "assets/items/double_big_crate.png";
    whe2.classList.add("crateHover");
    crateLocation.push([x, y]);
    crateBlockRelation.push(blockBoundingBoxes.length);
    usedCrates.push(true);
    crateInventorys.push({
        len: 36,
        inventory: [
            {id: -1, amount: 0},
            {id: -1, amount: 0},
            {id: -1, amount: 0},
            {id: -1, amount: 0},
            {id: -1, amount: 0},
            {id: -1, amount: 0},
            {id: -1, amount: 0},
            {id: -1, amount: 0},
            {id: -1, amount: 0},
            {id: -1, amount: 0},
            {id: -1, amount: 0},
            {id: -1, amount: 0},
            {id: -1, amount: 0},
            {id: -1, amount: 0},
            {id: -1, amount: 0},
            {id: -1, amount: 0},
            {id: -1, amount: 0},
            {id: -1, amount: 0},
            {id: -1, amount: 0},
            {id: -1, amount: 0},
            {id: -1, amount: 0},
            {id: -1, amount: 0},
            {id: -1, amount: 0},
            {id: -1, amount: 0},
            {id: -1, amount: 0},
            {id: -1, amount: 0},
            {id: -1, amount: 0},
            {id: -1, amount: 0},
            {id: -1, amount: 0},
            {id: -1, amount: 0},
            {id: -1, amount: 0},
            {id: -1, amount: 0},
            {id: -1, amount: 0},
            {id: -1, amount: 0},
            {id: -1, amount: 0},
            {id: -1, amount: 0}
        ],
        moneyContent: 0
    });
    updateCrateItems(crateCount);
    crateCount++;
    createBlock(192, 192, x, y);
}
function explodeCrate(crateNum) {
    try {
        document.getElementById("block" + String(crateBlockRelation[crateNum])).remove();
        blockBoundingBoxes[crateBlockRelation[crateNum]] = 0;
    } finally {
        document.getElementById("crate" + String(crateNum)).remove();
        jumb();
        for (var i = 0; i < creeperCount; i++) {
            jumbC(i);
        }
        usedCrates[crateNum] = false;
    }
    for (var i = 0; i < crateInventorys[crateNum].inventory.length; i++) {
        for (var j = 0; j < crateInventorys[crateNum].inventory[i].amount; j++) {
            spawnFloorItem(crateInventorys[crateNum].inventory[i].id, crateLocation[crateNum][0] + getCrateOffset(crateNum), crateLocation[crateNum][1] + getCrateOffset(crateNum), [Math.floor(Math.random() * 30) - 15, Math.floor(Math.random() * 30) - 15]);
        }
    }
    explodeMoneyStack(setMoneyList(crateInventorys[crateNum].moneyContent, false), crateLocation[crateNum][0] + getCrateOffset(crateNum), crateLocation[crateNum][1] + getCrateOffset(crateNum), 3);
}
function getCrateOffset(borg) {
    if (crateInventorys[borg].len == 4) {
        return 32;
    } else if (crateInventorys[borg].len == 16) {
        return 64;
    } else if (crateInventorys[borg].len == 36) {
        return 96;
    }
}
function placeTNT(x, y) {
    var whe2 = document.createElement("img");
    whe2.id = "tnt" + String(tntCount);
    document.getElementById("crates").appendChild(whe2);
    whe2.style.position = "absolute";
    whe2.style.width = "64px";
    whe2.style.height = "64px";
    whe2.style.left = String(x) + "px";
    whe2.style.bottom = String(y) + "px";
    whe2.src = "assets/items/tnt.png";
    createBlock(64, 64, x, y);

    tnts.push({
        type: "1x",
        x: 0,
        y: 0,
        blockID: 0,
        ID: 0,
        elementName: "tnt" + String(tntCount)
    });
    tnts[tnts.length - 1].x = x;
    tnts[tnts.length - 1].y = y;
    tnts[tnts.length - 1].ID = tntCount;
    tnts[tnts.length - 1].blockID = (blockBoundingBoxes.length - 1);
    
    tntCount++;
}
function place10xTNT(x, y) {
    var whe2 = document.createElement("img");
    whe2.id = "10xtnt" + String(tntx10Count);
    document.getElementById("crates").appendChild(whe2);
    whe2.style.position = "absolute";
    whe2.style.width = "80px";
    whe2.style.height = "80px";
    whe2.style.left = String(x) + "px";
    whe2.style.bottom = String(y) + "px";
    whe2.src = "assets/items/10xtnt.png";
    createBlock(80, 80, x, y);

    tnts.push({
        type: "10x",
        x: 0,
        y: 0,
        blockID: 0,
        ID: 0,
        elementName: "10xtnt" + String(tntx10Count)
    });
    tnts[tnts.length - 1].x = x;
    tnts[tnts.length - 1].y = y;
    tnts[tnts.length - 1].ID = tntx10Count;
    tnts[tnts.length - 1].blockID = (blockBoundingBoxes.length - 1);

    tntx10Count++;
}
function place100xTNT(x, y) {
    var whe2 = document.createElement("img");
    whe2.id = "100xtnt" + String(tntx100Count);
    document.getElementById("crates").appendChild(whe2);
    whe2.style.position = "absolute";
    whe2.style.width = "96px";
    whe2.style.height = "96px";
    whe2.style.left = String(x) + "px";
    whe2.style.bottom = String(y) + "px";
    whe2.src = "assets/items/100xtnt.png";
    createBlock(96, 96, x, y);

    tnts.push({
        type: "100x",
        x: 0,
        y: 0,
        blockID: 0,
        ID: 0,
        elementName: "100xtnt" + String(tntx100Count)
    });
    tnts[tnts.length - 1].x = x;
    tnts[tnts.length - 1].y = y;
    tnts[tnts.length - 1].ID = tntx100Count;
    tnts[tnts.length - 1].blockID = (blockBoundingBoxes.length - 1);

    tntx100Count++;
}
function place1000xTNT(x, y) {
    var whe2 = document.createElement("img");
    whe2.id = "1000xtnt" + String(tntx1000Count);
    document.getElementById("crates").appendChild(whe2);
    whe2.style.position = "absolute";
    whe2.style.width = "112px";
    whe2.style.height = "112px";
    whe2.style.left = String(x) + "px";
    whe2.style.bottom = String(y) + "px";
    whe2.src = "assets/items/1000xtnt.png";
    createBlock(112, 112, x, y);

    tnts.push({
        type: "1000x",
        x: 0,
        y: 0,
        blockID: 0,
        ID: 0,
        elementName: "1000xtnt" + String(tntx1000Count)
    });
    tnts[tnts.length - 1].x = x;
    tnts[tnts.length - 1].y = y;
    tnts[tnts.length - 1].ID = tntx1000Count;
    tnts[tnts.length - 1].blockID = (blockBoundingBoxes.length - 1);

    tntx1000Count++;
}
function deleteTNT(id) {
    var realID = -1;
    for (var i = 0; i < tnts.length; i++) {
        if (tnts[i].type == "1x" && tnts[i].ID == id) {
            realID = i;
        }
    }
    document.getElementById(tnts[realID].elementName).remove();
    document.getElementById("block" + String(tnts[realID].blockID)).remove();
    blockBoundingBoxes[tnts[realID].blockID] = 0;
    tnts.splice(realID, 1);
}
function delete10xTNT(id) {
    var realID = -1;
    for (var i = 0; i < tnts.length; i++) {
        if (tnts[i].type == "10x" && tnts[i].ID == id) {
            realID = i;
        }
    }
    document.getElementById(tnts[realID].elementName).remove();
    document.getElementById("block" + String(tnts[realID].blockID)).remove();
    blockBoundingBoxes[tnts[realID].blockID] = 0;
    tnts.splice(realID, 1);
}
function delete100xTNT(id) {
    var realID = -1;
    for (var i = 0; i < tnts.length; i++) {
        if (tnts[i].type == "100x" && tnts[i].ID == id) {
            realID = i;
        }
    }
    document.getElementById(tnts[realID].elementName).remove();
    document.getElementById("block" + String(tnts[realID].blockID)).remove();
    blockBoundingBoxes[tnts[realID].blockID] = 0;
    tnts.splice(realID, 1);
}
function delete1000xTNT(id) {
    var realID = -1;
    for (var i = 0; i < tnts.length; i++) {
        if (tnts[i].type == "1000x" && tnts[i].ID == id) {
            realID = i;
        }
    }
    document.getElementById(tnts[realID].elementName).remove();
    document.getElementById("block" + String(tnts[realID].blockID)).remove();
    blockBoundingBoxes[tnts[realID].blockID] = 0;
    tnts.splice(realID, 1);
}
function createSign(wid, hei, x, y, text) {
    var whe = document.createElement("div");
    whe.id = "sign" + String(signCount);
    whe.classList.add("sign");
    signCount++;
    document.getElementById("signs").appendChild(whe);
    whe.style.textAlign = "center";
    whe.style.fontFamily = "Comic-Sans";
    whe.innerHTML = text;
    whe.style.width = String(wid - 10) + "px";
    whe.style.height = String(hei - 10) + "px";
    whe.style.position = "absolute";
    whe.style.left = String(x) + "px";
    whe.style.bottom = String(y) + "px";
    whe.style.border = "3px solid black";
    whe.style.backgroundColor = "#FFF";
    whe.style.fontSize = "25px";
    whe.style.padding = "5px";
    savedSignY.push(y);
    usedSigns.push(true);
}
function createArrow(x, y, dir) {
    var whe = document.createElement("img");
    whe.id = "arrow" + String(arrowCount);
    arrowCount++;
    document.getElementById("arrows").appendChild(whe);
    whe.src = "assets/arrow.png";
    whe.style.position = "absolute";
    whe.style.left = String(x) + "px";
    whe.style.bottom = String(y) + "px";
    whe.style.transform = "rotateZ(" + String(dir) + "deg)";
    savedArrowY.push(y);
    usedArrows.push(true);
}
function createAngledArrow(x, y, dir, branchdir) {
    var whe = document.createElement("img");
    whe.id = "arrow" + String(arrowCount);
    arrowCount++;
    document.getElementById("arrows").appendChild(whe);
    if (branchdir == "right") {
        whe.src = "assets/angled_arrow_right.png";
    } else if (branchdir == "left") {
        whe.src = "assets/angled_arrow_left.png";
    }
    whe.style.position = "absolute";
    whe.style.left = String(x) + "px";
    whe.style.bottom = String(y) + "px";
    whe.style.transform = "rotateZ(" + String(dir) + "deg)";
    savedArrowY.push(y);
    usedArrows.push(true);
}
function createLadder(hei, x, y) {
    var hold = document.getElementById("ladders").innerHTML;
    hold += "<div id='ladder" + String(ladderCount) + "' class='ladder'><img src='assets/ladder.png' width='80' height='2400' class='ladderImg'></div>";
    document.getElementById("ladders").innerHTML = hold;
    document.getElementById("ladder" + String(ladderCount)).style.height = String(hei) + "px";
    document.getElementById("ladder" + String(ladderCount)).style.left = String(x) + "px";
    document.getElementById("ladder" + String(ladderCount)).style.bottom = String(y) + "px";
    ladderBoxes.push(scaleBoundingBox(document.getElementById("ladder" + String(ladderCount)).getBoundingClientRect()));
    characterLadderRange.push(false);
    savedLadderY.push(y);
    usedLadders.push(true);
    ladderCount++;
}
function createStand(x, y, itemArray, priceArray, topText, bottomText, direction) {
    var hold = document.getElementById("stands").innerHTML;
    hold += "<div id='stand" + String(standCount) + "' onclick='openStandInventory(" + String(standCount) + ")' class='stand'><img src='assets/stand.png' width='300' height='300' class='standImg'><span id='stand" + String(standCount) + "topText' class='standtoptext'>" + topText + "</span><span id='stand" + String(standCount) + "bottomtext' class='standbottomtext'>" + bottomText + "</span></div>";
    document.getElementById("stands").innerHTML = hold;
    document.getElementById("stand" + String(standCount)).style.left = String(x) + "px";
    document.getElementById("stand" + String(standCount)).style.bottom = String(y) + "px";
    savedStandY.push(y);
    var standArray = [];
    for (var i = 0; i < itemArray.length; i++) {
        standArray.push(globalItems[itemArray[i]]);
    }
    standLocation.push({
        x: x,
        y: y
    });
    standInventory.push(standArray);
    standInventoryIDs.push(itemArray);
    standPrices.push(priceArray);
    standDirection.push(direction);
    standBoxes.push(scaleBoundingBox(document.getElementById("stand" + String(standCount)).getBoundingClientRect()));
    usedStands.push(true);
    summonCreepers(1, standX(standCount), y, standCount);
    standCount++;
}
function createStandWithCollectibleModifier(x, y, itemArray, priceArray, modifier, topText, bottomText, direction) {
    var hold = document.getElementById("stands").innerHTML;
    hold += "<div id='stand" + String(standCount) + "' onclick='openStandInventory(" + String(standCount) + ")' class='stand'><img src='assets/stand.png' width='300' height='300' class='standImg'><span id='stand" + String(standCount) + "topText' class='standtoptext'>" + topText + "</span><span id='stand" + String(standCount) + "bottomtext' class='standbottomtext'>" + bottomText + "</span></div>";
    document.getElementById("stands").innerHTML = hold;
    document.getElementById("stand" + String(standCount)).style.left = String(x) + "px";
    document.getElementById("stand" + String(standCount)).style.bottom = String(y) + "px";
    savedStandY.push(y);
    var standArray = [];
    for (var i = 0; i < itemArray.length; i++) {
        standArray.push(globalItems[itemArray[i]]);
        if (itemArray[i] == 35) {
            standArray[standArray.length - 1].randomCollection = modifier;
        }
    }
    standLocation.push({
        x: x,
        y: y
    });
    standInventory.push(standArray);
    standInventoryIDs.push(itemArray);
    standPrices.push(priceArray);
    standDirection.push(direction);
    standBoxes.push(scaleBoundingBox(document.getElementById("stand" + String(standCount)).getBoundingClientRect()));
    usedStands.push(true);
    summonCreepers(1, standX(standCount), y, standCount);
    standCount++;
}
function createFan(x, y) {
    var eef = document.createElement("div");
    eef.id = "fan" + String(fanCount);
    document.getElementById("fans").appendChild(eef);
    eef.className = "fan";
    fanBlockRelation.push(blockBoundingBoxes.length);
    createBlock(300, 20, x, y);
    var eefBase = document.createElement("img");
    eefBase.id = "fan" + fanCount + "base";
    eef.appendChild(eefBase);
    eefBase.className = "fanBase";
    eefBase.src = "assets/fan_base.png";
    var eefBlade = document.createElement("img");
    eefBlade.id = "fan" + fanCount + "blade";
    eef.appendChild(eefBlade);
    eefBlade.className = "fanBlade";
    eefBlade.src = "assets/fan_blade.png";
    fanLocation.push([x, y]);
    fanBoxes.push(scaleBoundingBox(eef.getBoundingClientRect()));
    usedFans.push(true);
    decorDotsForFan(fanCount);
    fanCount++;
}
function createBomb(xx, yy, state) {
    bombs.push({
        ID: bombCount,
        unstable: state,
        explosionTime: Math.floor(Math.random() * 5000),
        fallDist: 0,
        x: xx,
        y: yy,
        xVector: 0,
        yVector: 0,
        rotation: 0,
        bombOnGround: false,
        objectUnderBomb: -1,
        inUse: true,
        inFan: false,
        boundingBox: {
            left: xx,
            right: xx + 64,
            top: yy + 64,
            bottom: yy
        }
    });
    var bb = document.createElement("img");
    bb.id = "bomb" + String(bombCount);
    bb.style.position = "absolute";
    bb.style.transformOrigin = "39.0625% 60.9375%";
    document.getElementById("bombs").appendChild(bb);
    bb.src = "assets/items/bomb.png";
    bombCount++;
}
function moveBomb() {
    for (var i = 0; i < bombs.length; i++) {
        if (bombs[i].inUse && runServerTick) {
            if (bombs[i].bombOnGround || bombs[i].yVector >= 0) {
                bombs[i].fallDist = 0;
            }
            if (boundingBoxCheck(scaleBoundingBox(document.getElementById("characterCreeper").getBoundingClientRect()), bombs[i].boundingBox)) {
                if (((characterLocation[0] + 40) - (bombs[i].x + 32)) >= 0) {
                    bombs[i].xVector = -72 + ((characterLocation[0] + 40) - (bombs[i].x + 32));
                } else {
                    bombs[i].xVector = 72 - ((bombs[i].x + 32) - (characterLocation[0] + 40));
                }
            }
            for (var j = 0; j < bombs.length; j++) {
                if (j !== i && bombs[j].inUse) {
                    if (boundingBoxCheck(bombs[i].boundingBox, bombs[j].boundingBox)) {
                        if (((bombs[i].x + 32) - (bombs[j].x + 32)) >= 0) {
                            bombs[j].xVector = -64 + ((bombs[i].x + 32) - (bombs[j].x + 32));
                        } else {
                            bombs[j].xVector = 64 - ((bombs[j].x + 32) - (bombs[i].x + 32));
                        }
                    }
                }
            }
            for (var j = 0; j < tennisBalls.length; j++) {
                if (tennisBalls[j].inUse) {
                    if (boundingBoxCheck(bombs[i].boundingBox, tennisBalls[j].boundingBox)) {
                        if (((bombs[i].x + 32) - (tennisBalls[j].x + 16)) >= 0) {
                            tennisBalls[j].xVector = -48 + ((bombs[i].x + 32) - (tennisBalls[j].x + 16));
                        } else {
                            tennisBalls[j].xVector = 48 - ((tennisBalls[j].x + 16) - (bombs[i].x + 32));
                        }
                    }
                }
            }
            for (var j = 0; j < blockBoundingBoxes.length; j++) {
                if (boundingBoxCheck(blockBoundingBoxes[j], bombs[i].boundingBox)) {
                    if (bombs[i].bombOnGround) {
                        if (bombs[i].xVector > 0) {
                            bombs[i].xVector *= -1;
                            bombs[i].x = blockBoundingBoxes[j].left - 64;
                        } else if (bombs[i].xVector < 0) {
                            bombs[i].xVector *= -1;
                            bombs[i].x = blockBoundingBoxes[j].right;
                        }
                    } else {
                        if (bombs[i].boundingBox.right - 32 > blockBoundingBoxes[j].left && bombs[i].boundingBox.left + 32 < blockBoundingBoxes[j].right) {
                            if (bombs[i].yVector < 0 && !bombs[i].inFan) {
                                bombs[i].y = ((window.innerHeight * universalScale) + (window.innerHeight - document.getElementById("html").getBoundingClientRect().height) - blockBoundingBoxes[j].top + characterScreenOffset);
                                bombs[i].yVector = (bombs[i].yVector * -1) - 5;
                                if (bombs[i].yVector < 0) {
                                    bombs[i].yVector = 0;
                                    bombs[i].bombOnGround = true;
                                } else if (bombs[i].yVector == 0) {
                                    bombs[i].bombOnGround = true;
                                }
                                bombs[i].objectUnderBomb = j;
                                if (bombs[i].fallDist >= 1000 && !bombs[i].unstable) {
                                    bombs[i].unstable = true;
                                    setTimeout(explodeBomb, bombs[i].explosionTime, i);
                                }
                            } else if (bombs[i].yVector > 0) {
                                bombs[i].y = (window.innerHeight * universalScale) + (window.innerHeight - document.getElementById("html").getBoundingClientRect().height) - blockBoundingBoxes[j].bottom - 64 + characterScreenOffset;
                                bombs[i].yVector *= -1;
                            }
                        } else {
                            if (bombs[i].xVector > 0) {
                                bombs[i].x = blockBoundingBoxes[j].left - 64;
                                bombs[i].xVector *= -1;
                            } else if (bombs[i].xVector < 0) {
                                bombs[i].x = blockBoundingBoxes[j].right;
                                bombs[i].xVector *= -1;
                            }
                        }
                    }
                }
            }
            if (bombs[i].objectUnderBomb == -1 || (bombs[i].x + 64 < blockBoundingBoxes[bombs[i].objectUnderBomb].left || bombs[i].x > blockBoundingBoxes[bombs[i].objectUnderBomb].right)) {
                bombs[i].bombOnGround = false;
            }
            bombs[i].x += bombs[i].xVector;
            bombs[i].y += bombs[i].yVector;
            bombs[i].rotation += bombs[i].xVector / 32;
            if (bombs[i].xVector > 0) {
                bombs[i].xVector--;
            } else if (bombs[i].xVector < 0) {
                bombs[i].xVector++;
            }
            if (!bombs[i].bombOnGround) {
                bombs[i].yVector--;
                if (bombs[i].yVector < 0) {
                    bombs[i].fallDist -= bombs[i].yVector;
                }
            }
            bombs[i].inFan = false;
            for (var j = 0; j < fanCount; j++) {
                if (bombs[i].boundingBox.left < fanBoxes[j].right && bombs[i].boundingBox.right > fanBoxes[j].left && usedFans[j]) {
                    if (bombs[i].y > fanLocation[j][1] + 20 && bombs[i].y < fanLocation[j][1] + 1020) {
                        bombs[i].bombOnGround = false;
                        bombs[i].yVector += Math.floor(500 / (bombs[i].y - fanLocation[j][1]));
                        bombs[i].inFan = true;
                    }
                }
            }
        }
    }
}
var thig29 = setInterval(moveBomb, (1000 / 60));
function createTennisBall(xx, yy) {
    tennisBalls.push({
        ID: tennisBallCount,
        x: xx,
        y: yy,
        xVector: 0,
        yVector: 0,
        rotation: 0,
        ballOnGround: false,
        objectUnderBall: -1,
        inUse: true,
        inFan: false,
        boundingBox: {
            left: xx,
            right: xx + 32,
            top: yy + 32,
            bottom: yy
        }
    });
    var bll = document.createElement("img");
    bll.id = "tennisBall" + String(tennisBallCount);
    bll.style.position = "absolute";
    document.getElementById("balls").appendChild(bll);
    bll.src = "assets/items/tennis_ball32.png";
    tennisBallCount++;
}
function moveTennisBall() {
    for (var i = 0; i < tennisBalls.length; i++) {
        if (tennisBalls[i].inUse && runServerTick) {
            if (boundingBoxCheck(scaleBoundingBox(document.getElementById("characterCreeper").getBoundingClientRect()), tennisBalls[i].boundingBox)) {
                if (((characterLocation[0] + 40) - (tennisBalls[i].x + 16)) >= 0) {
                    tennisBalls[i].xVector = -56 + ((characterLocation[0] + 40) - (tennisBalls[i].x + 16));
                } else {
                    tennisBalls[i].xVector = 56 - ((tennisBalls[i].x + 16) - (characterLocation[0] + 40));
                }
            }
            for (var j = 0; j < tennisBalls.length; j++) {
                if (j !== i && tennisBalls[j].inUse) {
                    if (boundingBoxCheck(tennisBalls[i].boundingBox, tennisBalls[j].boundingBox)) {
                        if (((tennisBalls[i].x + 16) - (tennisBalls[j].x + 16)) >= 0) {
                            tennisBalls[j].xVector = -32 + ((tennisBalls[i].x + 16) - (tennisBalls[j].x + 16));
                        } else {
                            tennisBalls[j].xVector = 32 - ((tennisBalls[j].x + 16) - (tennisBalls[i].x + 16));
                        }
                    }
                }
            }
            for (var j = 0; j < bombs.length; j++) {
                if (bombs[j].inUse) {
                    if (boundingBoxCheck(tennisBalls[i].boundingBox, bombs[j].boundingBox)) {
                        if (((tennisBalls[i].x + 16) - (bombs[j].x + 32)) >= 0) {
                            bombs[j].xVector = -48 + ((tennisBalls[i].x + 16) - (bombs[j].x + 32));
                        } else {
                            bombs[j].xVector = 48 - ((bombs[j].x + 32) - (tennisBalls[i].x + 16));
                        }
                    }
                }
            }
            for (var j = 0; j < blockBoundingBoxes.length; j++) {
                if (boundingBoxCheck(blockBoundingBoxes[j], tennisBalls[i].boundingBox)) {
                    if (tennisBalls[i].bombOnGround) {
                        if (tennisBalls[i].xVector > 0) {
                            tennisBalls[i].xVector *= -1;
                            tennisBalls[i].x = blockBoundingBoxes[j].left - 32;
                        } else if (tennisBalls[i].xVector < 0) {
                            tennisBalls[i].xVector *= -1;
                            tennisBalls[i].x = blockBoundingBoxes[j].right;
                        }
                    } else {
                        if (tennisBalls[i].boundingBox.right - 16 > blockBoundingBoxes[j].left && tennisBalls[i].boundingBox.left + 16 < blockBoundingBoxes[j].right) {
                            if (tennisBalls[i].yVector < 0 && !tennisBalls[i].inFan) {
                                tennisBalls[i].y = ((window.innerHeight * universalScale) + (window.innerHeight - document.getElementById("html").getBoundingClientRect().height) - blockBoundingBoxes[j].top + characterScreenOffset);
                                tennisBalls[i].yVector = (tennisBalls[i].yVector * -1) - 5;
                                if (tennisBalls[i].yVector < 0) {
                                    tennisBalls[i].yVector = 0;
                                    tennisBalls[i].ballOnGround = true;
                                } else if (tennisBalls[i].yVector == 0) {
                                    tennisBalls[i].ballOnGround = true;
                                }
                                tennisBalls[i].objectUnderBall = j;
                            } else if (tennisBalls[i].yVector > 0) {
                                tennisBalls[i].y = (window.innerHeight * universalScale) + (window.innerHeight - document.getElementById("html").getBoundingClientRect().height) - blockBoundingBoxes[j].bottom - 32 + characterScreenOffset;
                                tennisBalls[i].yVector *= -1;
                            }
                        } else {
                            if (tennisBalls[i].xVector > 0) {
                                tennisBalls[i].x = blockBoundingBoxes[j].left - 32;
                                tennisBalls[i].xVector *= -1;
                            } else if (tennisBalls[i].xVector < 0) {
                                tennisBalls[i].x = blockBoundingBoxes[j].right;
                                tennisBalls[i].xVector *= -1;
                            }
                        }
                    }
                }
            }
            if (tennisBalls[i].objectUnderBall == -1 || (tennisBalls[i].x + 32 < blockBoundingBoxes[tennisBalls[i].objectUnderBall].left || tennisBalls[i].x > blockBoundingBoxes[tennisBalls[i].objectUnderBall].right)) {
                tennisBalls[i].ballOnGround = false;
            }
            tennisBalls[i].x += tennisBalls[i].xVector;
            tennisBalls[i].y += tennisBalls[i].yVector;
            tennisBalls[i].rotation += tennisBalls[i].xVector / 16;
            if (tennisBalls[i].xVector > 0) {
                tennisBalls[i].xVector--;
            } else if (tennisBalls[i].xVector < 0) {
                tennisBalls[i].xVector++;
            }
            if (!tennisBalls[i].ballOnGround) {
                tennisBalls[i].yVector--;
            }
            tennisBalls[i].inFan = false;
            for (var j = 0; j < fanCount; j++) {
                if (tennisBalls[i].boundingBox.left < fanBoxes[j].right && tennisBalls[i].boundingBox.right > fanBoxes[j].left && usedFans[j]) {
                    if (tennisBalls[i].y > fanLocation[j][1] + 20 && tennisBalls[i].y < fanLocation[j][1] + 1020) {
                        tennisBalls[i].ballOnGround = false;
                        tennisBalls[i].yVector += Math.floor(500 / (tennisBalls[i].y - fanLocation[j][1]));
                        tennisBalls[i].inFan = true;
                    }
                }
            }
        }
    }
}
var thig34 = setInterval(moveTennisBall, (1000 / 60));
function launchAmmo(fromX, fromY, toX, toY) {
    if (ammoID !== -1) {
        if (characterInventory[ammoID].id == 1) {
            createBomb(fromX, fromY);
            dist = Math.sqrt(((toX - fromX) ** 2) + ((toY - fromY) ** 2));
            bombs[bombCount - 1].xVector = Math.floor(((toX - fromX) / dist) * 50);
            bombs[bombCount - 1].yVector = Math.floor(((toY - fromY) / dist) * 50);
        } else if (characterInventory[ammoID].id == 2) {
            createTennisBall(fromX, fromY);
            dist = Math.sqrt(((toX - fromX) ** 2) + ((toY - fromY) ** 2));
            tennisBalls[tennisBallCount - 1].xVector = Math.floor(((toX - fromX) / dist) * 50);
            tennisBalls[tennisBallCount - 1].yVector = Math.floor(((toY - fromY) / dist) * 50);
        }
        removeItemFromInventory(ammoID, 1);
    }
}
function spawnMoney(x, y, motion, rotStr, value) {
    var imageSource = "";
    var size = 0;
    switch(value) {
        case 1:
            imageSource = "assets/ceeps/small/yellow_coin.png";
            size = 15;
            break;
        case 5:
            imageSource = "assets/ceeps/small/orange_coin.png";
            size = 15;
            break;
        case 10:
            imageSource = "assets/ceeps/small/blue_coin.png";
            size = 15;
            break;
        case 25:
            imageSource = "assets/ceeps/small/red_coin.png";
            size = 15;
            break;
        case 50:
            imageSource = "assets/ceeps/small/purple_coin.png";
            size = 15;
            break;
        case 100:
            imageSource = "assets/ceeps/small/bronze_coin.png";
            size = 15;
            break;
        case 250:
            imageSource = "assets/ceeps/small/silver_coin.png";
            size = 15;
            break;
        case 500:
            imageSource = "assets/ceeps/small/gold_coin.png";
            size = 15;
            break;
        case 1000:
            imageSource = "assets/ceeps/small/dollar.png";
            size = 25;
            break;
        case 5000:
            imageSource = "assets/ceeps/small/yellow_dollar.png";
            size = 25;
            break;
        case 10000:
            imageSource = "assets/ceeps/small/blue_dollar.png";
            size = 25;
            break;
        case 20000:
            imageSource = "assets/ceeps/small/red_dollar.png";
            size = 25;
            break;
        case 50000:
            imageSource = "assets/ceeps/small/bronze_dollar.png";
            size = 25;
            break;
        case 100000:
            imageSource = "assets/ceeps/small/silver_dollar.png";
            size = 25;
            break;
        case 200000:
            imageSource = "assets/ceeps/small/golden_dollar.png";
            size = 25;
            break;
        case 500000:
            imageSource = "assets/ceeps/small/platinum_dollar.png";
            size = 25;
            break;
        case 1000000:
            imageSource = "assets/ceeps/small/diamond_dollar.png";
            size = 25;
            break;
    }
    floorMoney.push({
        id: floorMoneyCount,
        img: imageSource,
        value: value,
        x: x,
        y: y,
        xVector: motion[0],
        yVector: motion[1],
        size: size,
        rotation: 0,
        rotVector: rotStr,
        onGround: false,
        inFan: false,
        inUse: true,
        boundingBox: {
            left: x + getOffsetFromSize(size),
            right: x + size - getOffsetFromSize(size),
            bottom: (window.innerHeight * universalScale) + (window.innerHeight - document.getElementById("html").getBoundingClientRect().height) - y + characterScreenOffset,
            top: (window.innerHeight * universalScale) + (window.innerHeight - document.getElementById("html").getBoundingClientRect().height) - y - size + characterScreenOffset
        },
        objectUnderneath: -1
    });
    var bruh = document.createElement("img");
    bruh.id = "floorMoney" + String(floorMoneyCount);
    document.getElementById("floorItems").append(bruh);
    bruh.style.position = "absolute";
    bruh.style.left = String(x) + "px";
    bruh.style.bottom = String(y) + "px";
    bruh.src = imageSource;
    floorMoneyCount++;
}
var dooc;
function doob(time, originalBuff, originalMoney) {
    if (time == 0) {
        originalBuff = moneyBuffer;
        originalMoney = characterMoney;
        var playb = new Audio("assets/audio/generic/money_transfer.wav");
        playb.volume = 0.5;
        playb.play();
        moneyBufferMid = true;
    }
    if (time < 20) {
        moneyBuffer = originalBuff - Math.floor((originalBuff / 20) * (time + 1));
        characterMoney = originalMoney + Math.floor((originalBuff / 20) * (time + 1));
        document.getElementById("characterMoneyBuffer").innerHTML = "+" + getMoneyString(moneyBuffer);
        setTimeout(doob, (1000 / 60), time + 1, originalBuff, originalMoney);
    } else {
        characterMoney = originalMoney + originalBuff;
        setTimeout(doob2, 1000);
    }
}
function doob2() {
    document.getElementById("characterMoneyBuffer").style.display = "none";
    moneyBuffer = 0;
    moneyBufferMid = false;
}
function floorMoneyUpdate() {
    for (var i = 0; i < floorMoneyCount; i++) {
        if (floorMoney[i].inUse && runServerTick) {
            if (boundingBoxCheck(scaleBoundingBox(document.getElementById("characterCreeper").getBoundingClientRect()), floorMoney[i].boundingBox)) {
                if (moneyBufferMid) {
                    characterMoney += floorMoney[i].value;
                    floorMoney[i].inUse = false;
                    document.getElementById("floorMoney" + String(i)).remove();
                } else {
                    if (moneyBuffer == 0) {
                        dooc = setTimeout(doob, 3000, 0, moneyBuffer, characterMoney);
                    } else if (moneyBuffer > 0) {
                        clearTimeout(dooc);
                        dooc = setTimeout(doob, 3000, 0, moneyBuffer, characterMoney);
                    }
                    moneyBuffer += floorMoney[i].value;
                    document.getElementById("characterMoneyBuffer").style.display = "inline";
                    document.getElementById("characterMoneyBuffer").style.color = "#00bf00";
                    document.getElementById("characterMoneyBuffer").innerHTML = "+" + getMoneyString(moneyBuffer);
                    floorMoney[i].inUse = false;
                    document.getElementById("floorMoney" + String(i)).remove();
                }
                var playa = new Audio("assets/audio/generic/money_pickup.wav");
                playa.volume = 0.5;
                playa.play();
            }
            for (var j = 0; j < blockBoundingBoxes.length; j++) {
                if (boundingBoxCheck(blockBoundingBoxes[j], floorMoney[i].boundingBox)) {
                    if (floorMoney[i].onGround) {
                        if (floorMoney[i].xVector > 0) {
                            floorMoney[i].xVector *= 0;
                            floorMoney[i].x = blockBoundingBoxes[j].left - floorMoney[i].size;
                        } else if (floorMoney[i].xVector < 0) {
                            floorMoney[i].xVector *= 0;
                            floorMoney[i].x = blockBoundingBoxes[j].right;
                        }
                    } else {
                        if (floorMoney[i].boundingBox.right - (floorMoney[i].size / 2) > blockBoundingBoxes[j].left && floorMoney[i].boundingBox.left + (floorMoney[i].size / 2) < blockBoundingBoxes[j].right) {
                            if (floorMoney[i].yVector < 0 && !floorMoney[i].inFan) {
                                floorMoney[i].y = ((window.innerHeight * universalScale) + (window.innerHeight - document.getElementById("html").getBoundingClientRect().height) - blockBoundingBoxes[j].top + characterScreenOffset);
                                floorMoney[i].yVector = 0;
                                if (floorMoney[i].yVector < 0) {
                                    floorMoney[i].yVector = 0;
                                    floorMoney[i].onGround = true;
                                } else if (floorMoney[i].yVector == 0) {
                                    floorMoney[i].onGround = true;
                                }
                                floorMoney[i].objectUnderneath = j;
                            } else if (floorMoney[i].yVector > 0) {
                                floorMoney[i].y = (window.innerHeight * universalScale) + (window.innerHeight - document.getElementById("html").getBoundingClientRect().height) - blockBoundingBoxes[j].bottom - floorMoney[i].size + characterScreenOffset;
                                floorMoney[i].yVector *= 0;
                            }
                        } else {
                            if (floorMoney[i].xVector > 0) {
                                floorMoney[i].x = blockBoundingBoxes[j].left - floorMoney[i].size;
                                floorMoney[i].xVector *= 0;
                            } else if (floorMoney[i].xVector < 0) {
                                floorMoney[i].x = blockBoundingBoxes[j].right;
                                floorMoney[i].xVector *= 0;
                            }
                        }
                    }
                }
            }
            if (floorMoney[i].objectUnderneath == -1 || (floorMoney[i].x + floorMoney[i].size < blockBoundingBoxes[floorMoney[i].objectUnderneath].left || floorMoney[i].x > blockBoundingBoxes[floorMoney[i].objectUnderneath].right)) {
                floorMoney[i].onGround = false;
            }
            floorMoney[i].x += floorMoney[i].xVector;
            floorMoney[i].y += floorMoney[i].yVector;
            floorMoney[i].rotation += floorMoney[i].rotVector;
            if (floorMoney[i].onGround) {
                if (floorMoney[i].xVector > 0) {
                    floorMoney[i].xVector -= 0.5;
                } else if (floorMoney[i].xVector < 0) {
                    floorMoney[i].xVector += 0.5;
                }
                if (floorMoney[i].rotVector > 0) {
                    floorMoney[i].rotVector -= 0.5;
                } else if (floorMoney[i].rotVector < 0) {
                    floorMoney[i].rotVector += 0.5;
                }
            } else {
                floorMoney[i].yVector -= 0.5;
            }
            floorMoney[i].inFan = false;
            for (var j = 0; j < fanCount; j++) {
                if (floorMoney[i].boundingBox.left < fanBoxes[j].right && floorMoney[i].boundingBox.right > fanBoxes[j].left && usedFans[j]) {
                    if (floorMoney[i].y > fanLocation[j][1] + 20 && floorMoney[i].y < fanLocation[j][1] + 1020) {
                        floorMoney[i].onGround = false;
                        floorMoney[i].yVector += Math.floor(500 / (floorMoney[i].y - fanLocation[j][1]));
                        floorMoney[i].inFan = true;
                    }
                }
            }
        }
    }
}
var thig38 = setInterval(floorMoneyUpdate, (1000 / 60));
function getOffsetFromSize(オボイ) {
    if (オボイ == 25) {
        return 8;
    } else {
        return 0;
    }
}
function spawnFloorItem(id, x, y, motion) {
    floorItems.push({
        id: floorItemCount,
        itemID: id,
        x: x,
        y: y,
        xVector: motion[0],
        yVector: motion[1],
        boundingBox: {
            left: x,
            right: x + 32,
            bottom: (window.innerHeight * universalScale) + (window.innerHeight - document.getElementById("html").getBoundingClientRect().height) - y + characterScreenOffset,
            top: (window.innerHeight * universalScale) + (window.innerHeight - document.getElementById("html").getBoundingClientRect().height) - y - 32 + characterScreenOffset
        },
        inUse: true,
        inFan: false,
        onGround: false,
        objectUnderneath: -1
    });
    var bweeb = document.createElement("img");
    bweeb.id = "floorItem" + String(floorItemCount);
    document.getElementById("floorItems").append(bweeb);
    bweeb.src = globalItems[id].img;
    bweeb.style.position = "absolute";
    bweeb.style.width = "32px";
    bweeb.style.height = "32px";
    bweeb.style.left = String(x) + "px";
    bweeb.style.bottom = String(y) + "px";
    floorItemCount++;
}
function floorItemUpdate() {
    for (var i = 0; i < floorItemCount; i++) {
        if (floorItems[i].inUse && runServerTick) {
            if (boundingBoxCheck(scaleBoundingBox(document.getElementById("characterCreeper").getBoundingClientRect()), floorItems[i].boundingBox)) {
                floorItems[i].inUse = false;
                document.getElementById("floorItem" + String(i)).remove();
                addItemToInventory(floorItems[i].itemID, 1);

                //playSound("assets/audio/generic/item_pickup.wav", (Math.floor(Math.random() * 21) + 80) / 100);
                //playSound("item_pickup", 1);
                var player = new Audio("assets/audio/generic/item_pickup.wav");
                player.volume = 0.5;
                player.play();
            }
            for (var j = 0; j < blockBoundingBoxes.length; j++) {
                if (boundingBoxCheck(blockBoundingBoxes[j], floorItems[i].boundingBox)) {
                    if (floorItems[i].onGround) {
                        if (floorItems[i].xVector > 0) {
                            floorItems[i].xVector *= 0;
                            floorItems[i].x = blockBoundingBoxes[j].left - 32;
                        } else if (floorItems[i].xVector < 0) {
                            floorItems[i].xVector *= 0;
                            floorItems[i].x = blockBoundingBoxes[j].right;
                        }
                    } else {
                        if (floorItems[i].boundingBox.right - 16 > blockBoundingBoxes[j].left && floorItems[i].boundingBox.left + 16 < blockBoundingBoxes[j].right) {
                            if (floorItems[i].yVector < 0 && !floorItems[i].inFan) {
                                floorItems[i].y = ((window.innerHeight * universalScale) + (window.innerHeight - document.getElementById("html").getBoundingClientRect().height) - blockBoundingBoxes[j].top + characterScreenOffset);
                                floorItems[i].yVector = 0;
                                if (floorItems[i].yVector < 0) {
                                    floorItems[i].yVector = 0;
                                    floorItems[i].onGround = true;
                                } else if (floorItems[i].yVector == 0) {
                                    floorItems[i].onGround = true;
                                }
                                floorItems[i].objectUnderneath = j;
                            } else if (floorItems[i].yVector > 0) {
                                floorItems[i].y = (window.innerHeight * universalScale) + (window.innerHeight - document.getElementById("html").getBoundingClientRect().height) - blockBoundingBoxes[j].bottom - 32 + characterScreenOffset;
                                floorItems[i].yVector *= 0;
                            }
                        } else {
                            if (floorItems[i].xVector > 0) {
                                floorItems[i].x = blockBoundingBoxes[j].left - 32;
                                floorItems[i].xVector *= 0;
                            } else if (floorItems[i].xVector < 0) {
                                floorItems[i].x = blockBoundingBoxes[j].right;
                                floorItems[i].xVector *= 0;
                            }
                        }
                    }
                }
            }
            if (floorItems[i].objectUnderneath == -1 || (floorItems[i].x + 32 < blockBoundingBoxes[floorItems[i].objectUnderneath].left || floorItems[i].x > blockBoundingBoxes[floorItems[i].objectUnderneath].right)) {
                floorItems[i].onGround = false;
            }
            floorItems[i].x += floorItems[i].xVector;
            floorItems[i].y += floorItems[i].yVector;
            if (floorItems[i].onGround) {
                if (floorItems[i].xVector > 0) {
                    floorItems[i].xVector -= 0.5;
                } else if (floorItems[i].xVector < 0) {
                    floorItems[i].xVector += 0.5;
                }
            } else {
                floorItems[i].yVector -= 0.5;
            }
            floorItems[i].inFan = false;
            for (var j = 0; j < fanCount; j++) {
                if (floorItems[i].boundingBox.left < fanBoxes[j].right && floorItems[i].boundingBox.right > fanBoxes[j].left && usedFans[j]) {
                    if (floorItems[i].y > fanLocation[j][1] + 20 && floorItems[i].y < fanLocation[j][1] + 1020) {
                        floorItems[i].onGround = false;
                        floorItems[i].yVector += Math.floor(500 / (floorItems[i].y - fanLocation[j][1]));
                        floorItems[i].inFan = true;
                    }
                }
            }
        }
    }
}
var thig40 = setInterval(floorItemUpdate, (1000 / 60));
function createTrampoline(wid, hei, x, y) {
    trampolineRelation.push(blockBoundingBoxes.length);
    usedTramps.push(true);
    createBlock(wid, hei, x, y);
    document.getElementById("block" + String(blockBoundingBoxes.length - 1)).style.borderColor = "#00F";
}
function searchForTrampoline(id) {
    var boibe = false;
    for (var i = 0; i < trampolineRelation.length; i++) {
        if (usedTramps[i] && trampolineRelation[i] == id) {
            boibe = true;
        }
    }
    return boibe;
}
function leafBlower(originPoint, heightRadius, power, direction, range) {
    var affectedCreepers = [];
    var affectedBombs = [];
    var affectedTennisBalls = [];
    var affectedFloorItems = [];
    var affectedFloorMoney = [];
    var leafBlowerBoundingBox = document.createElement("div");
    leafBlowerBoundingBox.style.visibility = "hidden";
    leafBlowerBoundingBox.id = "leafBlowerBoundingBox";
    document.getElementById("misc").append(leafBlowerBoundingBox);
    leafBlowerBoundingBox.style.width = String(range) + "px";
    leafBlowerBoundingBox.style.height = String(heightRadius * 2) + "px";
    leafBlowerBoundingBox.style.position = "absolute";
    if (direction == left) {
        leafBlowerBoundingBox.style.left = String(originPoint[0] - range) + "px";
    } else if (direction == right) {
        leafBlowerBoundingBox.style.left = String(originPoint[0]) + "px";
    }
    leafBlowerBoundingBox.style.bottom = String(originPoint[1] - heightRadius) + "px";
    leafBlowerClientRect = scaleBoundingBox(leafBlowerBoundingBox.getBoundingClientRect());
    for (var i = 0; i < creeperBoxes.length; i++) {
        if (boundingBoxCheck(creeperBoxes[i], leafBlowerClientRect)) {
            affectedCreepers.push(i);
        }
    }
    for (var i = 0; i < bombs.length; i++) {
        if (boundingBoxCheck(bombs[i].boundingBox, leafBlowerClientRect)) {
            affectedBombs.push(i);
        }
    }
    for (var i = 0; i < tennisBalls.length; i++) {
        if (boundingBoxCheck(tennisBalls[i].boundingBox, leafBlowerClientRect)) {
            affectedTennisBalls.push(i);
        }
    }
    for (var i = 0; i < floorItems.length; i++) {
        if (boundingBoxCheck(floorItems[i].boundingBox, leafBlowerClientRect)) {
            affectedFloorItems.push(i);
        }
    }
    for (var i = 0; i < floorMoney.length; i++) {
        if (boundingBoxCheck(floorMoney[i].boundingBox, leafBlowerClientRect)) {
            affectedFloorMoney.push(i);
        }
    }
    
    //creepers
    for (var i = 0; i < affectedCreepers.length; i++) {
        if (direction == right) {
            creeperLeafBlowerVector[affectedCreepers[i]] += (power - ((creeperLocation[affectedCreepers[i]][0] - originPoint[0]) * power / range));
        } else if (direction == left) {
            creeperLeafBlowerVector[affectedCreepers[i]] -= (power - ((originPoint[0] - creeperLocation[affectedCreepers[i]][0]) * power / range));
        }
    }
    
    //bombs
    for (var i = 0; i < affectedBombs.length; i++) {
        if (direction == right) {
            bombs[affectedBombs[i]].xVector += (power - ((bombs[affectedBombs[i]].x - originPoint[0]) * power / range));
        } else if (direction == left) {
            bombs[affectedBombs[i]].xVector -= (power - ((originPoint[0] - bombs[affectedBombs[i]].x) * power / range));
        }
    }
    
    //tennis balls
    for (var i = 0; i < affectedTennisBalls.length; i++) {
        if (direction == right) {
            tennisBalls[affectedTennisBalls[i]].xVector += (power - ((tennisBalls[affectedTennisBalls[i]].x - originPoint[0]) * power / range));
        } else if (direction == left) {
            tennisBalls[affectedTennisBalls[i]].xVector -= (power - ((originPoint[0] - tennisBalls[affectedTennisBalls[i]].x) * power / range));
        }
    }
    
    //floor items
    for (var i = 0; i < affectedFloorItems.length; i++) {
        if (direction == right) {
            floorItems[affectedFloorItems[i]].xVector += (power - ((floorItems[affectedFloorItems[i]].x - originPoint[0]) * power / range));
        } else if (direction == left) {
            floorItems[affectedFloorItems[i]].xVector -= (power - ((originPoint[0] - floorItems[affectedFloorItems[i]].x) * power / range));
        }
    }
    
    //floor money
    for (var i = 0; i < affectedFloorMoney.length; i++) {
        if (direction == right) {
            floorMoney[affectedFloorMoney[i]].xVector += (power - ((floorMoney[affectedFloorMoney[i]].x - originPoint[0]) * power / range));
        } else if (direction == left) {
            floorMoney[affectedFloorMoney[i]].xVector -= (power - ((originPoint[0] - floorMoney[affectedFloorMoney[i]].x) * power / range));
        }
    }

    leafBlowerBoundingBox.remove();
}
function rotateFanBlades() {
    if (fanFrame == 29) {
        fanFrame = 0;
    } else {
        fanFrame++;
    }
    for (var i = 0; i < fanCount; i++) {
        if (usedFans[i]) {
            document.getElementById("fan" + String(i) + "blade").style.width = String(Math.floor(Math.abs(284 * Math.sin((fanFrame / 30) * Math.PI)))) + "px";
            document.getElementById("fan" + String(i) + "blade").style.left = String((284 - removePXfromStyle(document.getElementById("fan" + String(i) + "blade").style.width)) / 2 + 8) + "px";
        }
    }
}
var validFunctionList = [
"summonCreepers",
"addItemToInventory",
"removeItemFromInventory",
"createBlock",
"placeCrate",
"placeBigCrate",
"placeDoubleBigCrate",
"placeTNT",
"place10xTNT",
"place100xTNT",
"place1000xTNT",
"createSign",
"createArrow",
"createAngledArrow",
"createLadder",
"createStand",
"createFan",
"removeFloor",
"createBomb",
"setSpawnLocation",
"createTennisBall",
"giveAllItems"
]
function runCompiler() {
    var plc = document.getElementById("creeperCodeInput").value.replace(/(\r\n|\n|\r)/gm, "")
    var lineList = plc.split(";");
    if (lineList[lineList.length - 1] == "" || lineList[lineList.length - 1] == null || lineList[lineList.length - 1] == "\n") {
        lineList.splice(lineList.length - 1, 1);
    }
    var oofoList = [];
    var checkcheck = false;
    var totalcheck = true;
    for (var i = 0; i < lineList.length; i++) {
        oofoList = lineList[i].split("(");
        checkcheck = false;
        for (var j = 0; j < validFunctionList.length; j++) {
            if (oofoList[0] == validFunctionList[j]) {
                checkcheck = true;
            }
        }
        if (!checkcheck) {
            totalcheck = false;
        }
    }
    if (totalcheck) {
        reset();
        eval(document.getElementById("creeperCodeInput").value);
    } else {
        document.getElementById("invalidCodeDetector").style.display = "inline";
        setTimeout(ohBoy, 5000);
    }
}
function ohBoy() {
    document.getElementById("invalidCodeDetector").style.display = "none";
}
var numeralInputList = [
    "scMarkerX",
    "scMarkerY",
    "scMarkerAmount",
    "inventoryItemAmount",
    "placeableMarkerX",
    "placeableMarkerY",
    "blockWidthInput",
    "blockHeightInput",
    "blockXInput",
    "blockYInput",
    "signWidthInput",
    "signHeightInput",
    "signXInput",
    "signYInput",
    "arrowRInput",
    "arrowXInput",
    "arrowYInput",
    "ladderHeightInput",
    "ladderXInput",
    "ladderYInput",
    "fanXInput",
    "fanYInput",
    "standXInput",
    "standYInput",
    "milliceepTransferInput",
    "floorItemXInput",
    "floorItemYInput",
    "floorItemXVecInput",
    "floorItemYVecInput",
    "moneyMilliceepInput",
    "moneyXInput",
    "moneyYInput",
    "moneyExMilliceepInput",
    "moneyExXInput",
    "moneyExYInput",
    "moneyExStrengthInput",
    "trampWidthInput",
    "trampHeightInput",
    "trampXInput",
    "trampYInput",
];
var numeralTypeList = [
    "xx",
    "yy",
    "amountamount",
    "amountamount",
    "x",
    "y",
    "wid",
    "hei",
    "x",
    "y",
    "wid",
    "hei",
    "x",
    "y",
    "rot",
    "x",
    "y",
    "hei",
    "x",
    "y",
    "x",
    "y",
    "x",
    "y",
    "amount",
    "x",
    "y",
    "xv",
    "yv",
    "amount",
    "x",
    "y",
    "amount",
    "x",
    "y",
    "none",
    "wid",
    "hei",
    "x",
    "y",
];
function checkNumerals() {
    for (var i = 0; i < numeralInputList.length; i++) {
        var thuq = document.getElementById(numeralInputList[i]).value.split("");
        for (var j = 0; j < thuq.length; j++) {
            if (!(thuq[j] == "0" || thuq[j] == "1" || thuq[j] == "2" || thuq[j] == "3" || thuq[j] == "4" || thuq[j] == "5" || thuq[j] == "6" || thuq[j] == "7" || thuq[j] == "8" || thuq[j] == "9" || thuq[j] == ".")) {
                thuq.splice(j, 1);
            }
        }
        document.getElementById(numeralInputList[i]).value = thuq.join("");
    }
    for (var i = 0; i < potentialStand.itemInfo.length; i++) {
        if (!potentialStand.itemInfo[i].removed) {
            var thuq = document.getElementById("simulatedInventoryItem" + String(i) + "Price").value.split("");
            for (var j = 0; j < thuq.length; j++) {
                if (!(thuq[j] == "0" || thuq[j] == "1" || thuq[j] == "2" || thuq[j] == "3" || thuq[j] == "4" || thuq[j] == "5" || thuq[j] == "6" || thuq[j] == "7" || thuq[j] == "8" || thuq[j] == "9")) {
                    thuq.splice(j, 1);
                }
            }
            document.getElementById("simulatedInventoryItem" + String(i) + "Price").value = thuq.join("");

            if (potentialStand.itemInfo[i].price !== potentialStand.itemInfo[i].price) {
                potentialStand.itemInfo[i].price = 0;
            }
        }
    }
}
var thig36 = setInterval(checkNumerals, 0);
var thig24 = setInterval(rotateFanBlades, (1000 / 60));

class randomGenerator {
    constructor(side, y) {
        this.side = side;
        this.y = y;
        this.previousWidth = 0;
    }

    elevatedStandLeft() {
        if (Math.floor(Math.random() * 5) == 4) {
            this.crateCanalLeft();
        }
        var randomHeight = (Math.floor(Math.random() * 7) * 50) + 300;
        var randomWidth = (Math.floor(Math.random() * (((worldWidth / 2) - 500) / 10)) * 10) + 400;
        //randomWidthLoop
        while (true) {
            randomWidth = (Math.floor(Math.random() * (((worldWidth / 2) - 500) / 10)) * 10) + 400;
            if (!(randomWidth < this.previousWidth + 100 && randomWidth + 100 > this.previousWidth)) {
                break;
            }
        }
        createLadder(randomHeight + 25, randomWidth - 80, this.y);
        createBlock(randomWidth - 80, 25, 0, this.y + randomHeight);
        this.generateRandomStandLeft(randomHeight);
        if (this.previousWidth !== 0 && this.previousWidth < randomWidth) {
            createBlock(randomWidth - this.previousWidth - 20, 25, this.previousWidth + 20, this.y - 25);
        }
        this.previousWidth = randomWidth;
        this.y += randomHeight + 25;
    }

    elevatedStandRight() {
        if (Math.floor(Math.random() * 5) == 4) {
            this.crateCanalRight();
        }
        var randomHeight = (Math.floor(Math.random() * 7) * 50) + 300;
        var randomWidth = (Math.floor(Math.random() * (((worldWidth / 2) - 500) / 10)) * 10) + 400;
        //randomWidthLoop
        while (true) {
            randomWidth = (Math.floor(Math.random() * (((worldWidth / 2) - 500) / 10)) * 10) + 400;
            if (!(randomWidth < this.previousWidth + 100 && randomWidth + 100 > this.previousWidth)) {
                break;
            }
        }
        createLadder(randomHeight + 25, worldWidth - randomWidth, this.y);
        createBlock(randomWidth - 80, 25, worldWidth - randomWidth + 80, this.y + randomHeight);
        this.generateRandomStandRight(randomHeight);
        if (this.previousWidth !== 0 && this.previousWidth < randomWidth) {
            createBlock(randomWidth - this.previousWidth - 20, 25, worldWidth - randomWidth, this.y - 25);
        }
        this.previousWidth = randomWidth;
        this.y += randomHeight + 25;
    }

    generateRandomStandLeft(randHeight) {
        var standSel = Math.floor(Math.random() * Object.values(randomStandInfo).length);
        var stand = Object.values(randomStandInfo)[standSel];
        var locItem = [];
        var locPrice = [];
        var locTop = "";
        var locBottom = "";

        locItem = parseWeight(stand.weights.itemArray, stand.standInfo.itemArray);
        locPrice = equalChance(locItem.length);
        for (var i = 0; i < locItem.length; i++) {
            if (typeof locItem[i] == "object") {
                locItem[i] = locItem[i].num();
            }
            if (stand.weights.priceArray == "def") {
                locPrice[i] = stand.standInfo.priceArray[stand.standInfo.itemArray.indexOf(locItem[i])].num();
            }
        }
        locTop = parseWeight(stand.weights.topText, stand.standInfo.topText);
        locBottom = parseWeight(new Weight("dependent", equalChance(stand.standInfo.bottomText.length + typicalBottomTexts.length)), stand.standInfo.bottomText.concat(typicalBottomTexts));
        
        if (stand.collectible !== -1 && Math.random() < stand.collectibleChance) {
            locItem.push(35);
            locPrice.push((Math.floor(Math.random() * 181) * 1000) + 20000);
        }

        createStandWithCollectibleModifier(10 + Math.floor(Math.random() * 5) * 5, this.y + randHeight + 25, locItem, locPrice, stand.collectible, locTop, locBottom, right);
    }

    generateRandomStandRight(randHeight) {
        var standSel = Math.floor(Math.random() * Object.values(randomStandInfo).length);
        var stand = Object.values(randomStandInfo)[standSel];
        var locItem = [];
        var locPrice = [];
        var locTop = "";
        var locBottom = "";

        locItem = parseWeight(stand.weights.itemArray, stand.standInfo.itemArray);
        locPrice = equalChance(locItem.length);
        for (var i = 0; i < locItem.length; i++) {
            if (typeof locItem[i] == "object") {
                locItem[i] = locItem[i].num();
            }
            if (stand.weights.priceArray == "def") {
                locPrice[i] = stand.standInfo.priceArray[stand.standInfo.itemArray.indexOf(locItem[i])].num();
            }
        }
        locTop = parseWeight(stand.weights.topText, stand.standInfo.topText);
        locBottom = parseWeight(new Weight("dependent", equalChance(stand.standInfo.bottomText.length + typicalBottomTexts.length)), stand.standInfo.bottomText.concat(typicalBottomTexts));
        
        if (stand.collectible !== -1 && Math.random() < stand.collectibleChance) {
            locItem.push(35);
            locPrice.push((Math.floor(Math.random() * 181) * 1000) + 20000);
        }

        createStandWithCollectibleModifier(worldWidth - 310 - Math.floor(Math.random() * 5) * 5, this.y + randHeight + 25, locItem, locPrice, stand.collectible, locTop, locBottom, left);
    }

    trampolineParkLeft() {
        var randomHeight = (Math.floor(Math.random() * 7) * 50) + 300;
        var upperHeight = (Math.floor(Math.random() * 6) * 100) + 500;
        var randomWidth = (Math.floor(Math.random() * (((worldWidth / 2) - 500) / 10)) * 10) + 400;
        //randomWidthLoop
        while (true) {
            randomWidth = (Math.floor(Math.random() * (((worldWidth / 2) - 500) / 10)) * 10) + 400;
            if (!(randomWidth < this.previousWidth + 100 && randomWidth + 100 > this.previousWidth)) {
                break;
            }
        }
        createLadder(randomHeight + 25 + upperHeight, randomWidth - 80, this.y);
        createBlock(randomWidth - 80, 25, 0, this.y + randomHeight);
        var tamp = this.generateTrampolineLevel(randomWidth - 80, true);
        var tco = 0;
        for (var i = 0; i < tamp.length; i++) {
            createTrampoline(tamp[i], (Math.floor(Math.random() * 6) * 5) + 25, tco, this.y + randomHeight + 25);
            tco += tamp[i];
        }
        var hig = randomHeight + 300;
        for (var i = 0; i < Math.floor(Math.random() * Math.floor(upperHeight / 150)); i++) {
            var wib = Math.floor(Math.random() * (randomWidth - 150)) + 50;
            createTrampoline(wib, (Math.floor(Math.random() * 6) * 5) + 25, Math.floor(Math.random() * (randomWidth - wib - 80)), this.y + hig);
            hig += 150;
        }
        for (var i = 0; i < Math.floor(Math.random() * 6); i++) {
            this.generateTrampolineSign(Math.floor(Math.random() * (randomWidth - 150)) + 50, Math.floor(Math.random() * (upperHeight - 50) + randomHeight + this.y));
        }
        createBlock(randomWidth - 80, 25, 0, this.y + randomHeight + upperHeight);
        if (this.previousWidth !== 0 && this.previousWidth < randomWidth) {
            createBlock(randomWidth - this.previousWidth - 20, 25, this.previousWidth + 20, this.y - 25);
        }
        this.previousWidth = randomWidth;
        this.y += randomHeight + 25 + upperHeight;
    }

    trampolineParkRight() {
        var randomHeight = (Math.floor(Math.random() * 7) * 50) + 300;
        var upperHeight = (Math.floor(Math.random() * 6) * 100) + 500;
        var randomWidth = (Math.floor(Math.random() * (((worldWidth / 2) - 500) / 10)) * 10) + 400;
        //randomWidthLoop
        while (true) {
            randomWidth = (Math.floor(Math.random() * (((worldWidth / 2) - 500) / 10)) * 10) + 400;
            if (!(randomWidth < this.previousWidth + 100 && randomWidth + 100 > this.previousWidth)) {
                break;
            }
        }
        createLadder(randomHeight + 25 + upperHeight, worldWidth - randomWidth, this.y);
        createBlock(randomWidth - 80, 25, worldWidth - randomWidth + 80, this.y + randomHeight);
        var tamp = this.generateTrampolineLevel(randomWidth - 80, true);
        var tco = worldWidth - randomWidth + 80;
        for (var i = 0; i < tamp.length; i++) {
            createTrampoline(tamp[i], (Math.floor(Math.random() * 6) * 5) + 25, tco, this.y + randomHeight + 25);
            tco += tamp[i];
        }
        var hig = randomHeight + 300;
        for (var i = 0; i < Math.floor(Math.random() * Math.floor(upperHeight / 150)); i++) {
            var wib = Math.floor(Math.random() * (randomWidth - 150)) + 50;
            createTrampoline(wib, (Math.floor(Math.random() * 6) * 5) + 25, worldWidth - randomWidth + 80 + Math.floor(Math.random() * (randomWidth - wib - 80)), this.y + hig);
            hig += 150;
        }
        for (var i = 0; i < Math.floor(Math.random() * 6); i++) {
            this.generateTrampolineSign(Math.floor(Math.random() * (randomWidth - 150)) + 50 + worldWidth - randomWidth, Math.floor(Math.random() * (upperHeight - 50) + randomHeight + this.y));
        }
        createBlock(randomWidth - 80, 25, worldWidth - randomWidth + 80, this.y + randomHeight + upperHeight);
        if (this.previousWidth !== 0 && this.previousWidth < randomWidth) {
            createBlock(randomWidth - this.previousWidth - 20, 25, worldWidth - randomWidth, this.y - 25);
        }
        this.previousWidth = randomWidth;
        this.y += randomHeight + 25 + upperHeight;
    }

    generateTrampolineLevel(width, bottom) {
        var uber = [];
        var nomg = 0;
        var totz = 0;
        while (true) {
            nomg = Math.floor(Math.random() * ((width / 2) - 50)) + 50;
            uber.push(nomg);
            totz = 0;
            for (var i = 0; i < uber.length; i++) {
                totz += uber[i];
            }
            if (totz > width) {
                if (bottom) {
                    uber[uber.length - 1] -= totz - width;
                } else {
                    uber.splice(uber.length - 1, 1);
                }
                break;
            }
        }
        var goff = 0;
        var ind = 0;
        for (var i = 0; i < uber.length; i++) {
            ind = Math.floor(Math.random() * uber.length);
            goff = uber[ind];
            uber[ind] = uber[i];
            uber[i] = goff;
        }
        return uber;
    }

    generateTrampolineSign(x, y) {
        createSign(150, 50, x, y, trampolineTexts[Math.floor(Math.random() * trampolineTexts.length)]);
    }

    skydivingLeft() {
        //stand
        var randomHeight = (Math.floor(Math.random() * 7) * 50) + 300;
        var randomWidth = (Math.floor(Math.random() * (((worldWidth / 2) - 500) / 10)) * 10) + 400;
        //randomWidthLoop
        while (true) {
            randomWidth = (Math.floor(Math.random() * (((worldWidth / 2) - 500) / 10)) * 10) + 400;
            if (!(randomWidth < this.previousWidth + 100 && randomWidth + 100 > this.previousWidth)) {
                break;
            }
        }
        createLadder(randomHeight + 25, randomWidth - 80, this.y);
        createBlock(randomWidth - 80, 25, 0, this.y + randomHeight);
        //this.generateRandomStandLeft(randomHeight);
        var standSel = Math.floor(Math.random() * Object.values(randomStandInfo).length);
        var stand = Object.values(randomStandInfo)[standSel];
        var locItem = [];
        var locPrice = [];
        var locTop = "";
        var locBottom = "";

        locItem = [39];
        locPrice = [10000];
        var topChoices = ["SKYDIV HEER", "BIG FREEJUMB", "FAN BASE", "COSTCO"];
        locTop = topChoices[Math.floor(Math.random() * topChoices.length)];
        locBottom = parseWeight(new Weight("dependent", equalChance(typicalBottomTexts.length)), typicalBottomTexts);

        createStand(10 + Math.floor(Math.random() * 5) * 5, this.y + randomHeight + 25, locItem, locPrice, locTop, locBottom, right);
        //stand
        if (this.previousWidth !== 0 && this.previousWidth < randomWidth) {
            createBlock(randomWidth - this.previousWidth - 20, 25, this.previousWidth + 20, this.y - 25);
        }
        this.previousWidth = randomWidth;
        this.y += randomHeight + 25;

        //div
        randomWidth = worldWidth / 2 - 100;
        var curry = 375;
        var currx = 0;
        var prevX = 0;
        createLadder(375, randomWidth - 80, this.y);
        createBlock(randomWidth - 80, 25, 0, this.y + 350);
        if (this.previousWidth !== 0 && this.previousWidth < randomWidth) {
            createBlock(randomWidth - this.previousWidth - 20, 25, this.previousWidth + 20, this.y - 25);
        }
        for (var i = 0; i < Math.floor(Math.random() * 5) + 3; i++) {
            //levels.push(Math.floor(Math.random() * 151) + 250);
            var offset = (Math.floor(Math.random() * 300) + 150);
            var sign = ((Math.floor(Math.random() * 2) * 2) - 1);
            currx = (offset * sign) + prevX < 0 ? offset + prevX : (offset * sign) + prevX;
            currx = currx > randomWidth - 380 ? Math.max((2 * prevX) - currx, 0) : currx;
            createFan(currx, this.y + curry);
            curry += Math.floor(Math.random() * 201) + 400;
            prevX = currx;
        }
        createLadder(250, 0, this.y + curry);
        createLadder(250, randomWidth - 80, this.y + curry);
        createBlock(randomWidth - 200, 25, 100, this.y + curry + 225);
        this.y += curry + 250;
    }

    skydivingRight() {
        //stand
        var randomHeight = (Math.floor(Math.random() * 7) * 50) + 300;
        var randomWidth = (Math.floor(Math.random() * (((worldWidth / 2) - 600) / 10)) * 10) + 300;
        //randomWidthLoop
        while (true) {
            randomWidth = (Math.floor(Math.random() * (((worldWidth / 2) - 600) / 10)) * 10) + 300;
            if (!(randomWidth < this.previousWidth + 100 && randomWidth + 100 > this.previousWidth)) {
                break;
            }
        }
        createLadder(randomHeight + 25, worldWidth - randomWidth, this.y);
        createBlock(randomWidth - 80, 25, worldWidth - randomWidth + 80, this.y + randomHeight);
        //this.generateRandomStandRight(randomHeight);
        var standSel = Math.floor(Math.random() * Object.values(randomStandInfo).length);
        var stand = Object.values(randomStandInfo)[standSel];
        var locItem = [];
        var locPrice = [];
        var locTop = "";
        var locBottom = "";

        locItem = [39];
        locPrice = [10000];
        var topChoices = ["SKYDIV HEER", "BIG FREEJUMB", "FAN BASE", "COSTCO"];
        locTop = topChoices[Math.floor(Math.random() * topChoices.length)];
        locBottom = parseWeight(new Weight("dependent", equalChance(typicalBottomTexts.length)), typicalBottomTexts);

        createStand(worldWidth - 310 - Math.floor(Math.random() * 5) * 5, this.y + randomHeight + 25, locItem, locPrice, locTop, locBottom, left);
        //stand
        if (this.previousWidth !== 0 && this.previousWidth < randomWidth) {
            createBlock(randomWidth - this.previousWidth - 20, 25, worldWidth - randomWidth, this.y - 25);
        }
        this.previousWidth = randomWidth;
        this.y += randomHeight + 25;

        //div
        randomWidth = worldWidth / 2 - 100;
        var curry = 375;
        var currx = 0;
        var prevX = 0;
        createLadder(375, worldWidth - randomWidth, this.y);
        createBlock(worldWidth - randomWidth - 80, 25, worldWidth - randomWidth + 80, this.y + 350);
        if (this.previousWidth !== 0 && this.previousWidth < randomWidth) {
            createBlock(randomWidth - this.previousWidth - 20, 25, worldWidth - randomWidth, this.y - 25);
        }
        for (var i = 0; i < Math.floor(Math.random() * 5) + 3; i++) {
            //levels.push(Math.floor(Math.random() * 151) + 250);
            var offset = (Math.floor(Math.random() * 300) + 150);
            var sign = ((Math.floor(Math.random() * 2) * 2) - 1);
            currx = (offset * sign) + prevX < 0 ? offset + prevX : (offset * sign) + prevX;
            currx = currx > randomWidth - 380 ? Math.max((2 * prevX) - currx, 0) : currx;
            createFan(worldWidth - currx - 300, this.y + curry);
            curry += Math.floor(Math.random() * 201) + 400;
            prevX = currx;
        }
        createLadder(250, worldWidth - 80, this.y + curry);
        createLadder(250, worldWidth - randomWidth, this.y + curry);
        createBlock(randomWidth - 200, 25, worldWidth - randomWidth + 100, this.y + curry + 225);
        this.y += curry + 250;
    }

    crateCanalLeft() {
        var randomHeight = (Math.floor(Math.random() * 4) * 50) + 300;
        var randomWidth = (Math.floor(Math.random() * (((worldWidth / 2) - 500) / 10)) * 10) + 400;
        var secondWidth = (Math.floor(Math.random() * (((worldWidth / 2) - 500) / 10)) * 10) + 400;
        //randomWidthLoop
        while (true) {
            randomWidth = (Math.floor(Math.random() * (((worldWidth / 2) - 500) / 10)) * 10) + 400;
            if (!(randomWidth < this.previousWidth + 100 && randomWidth + 100 > this.previousWidth)) {
                break;
            }
        }
        //secondWidthLoop
        while (true) {
            secondWidth = (Math.floor(Math.random() * (((worldWidth / 2) - 500) / 10)) * 10) + 400;
            if (!(secondWidth < randomWidth + 100 && secondWidth + 100 > randomWidth)) {
                break;
            }
        }
        createLadder(randomHeight + 25, randomWidth - 80, this.y);
        createBlock(randomWidth - 80, 25, 0, this.y + randomHeight);
        this.crateCluster(Math.floor(Math.random() * (randomWidth - 448)), this.y + randomHeight, randomWidth - 80);
        if (this.previousWidth !== 0 && this.previousWidth < randomWidth) {
            createBlock(randomWidth - this.previousWidth - 20, 25, this.previousWidth + 20, this.y - 25);
        }
        this.previousWidth = randomWidth;
        this.y += randomHeight + 25;
    }

    crateCanalRight() {
        var randomHeight = (Math.floor(Math.random() * 4) * 50) + 300;
        var randomWidth = (Math.floor(Math.random() * (((worldWidth / 2) - 500) / 10)) * 10) + 400;
        var secondWidth = (Math.floor(Math.random() * (((worldWidth / 2) - 500) / 10)) * 10) + 400;
        //randomWidthLoop
        while (true) {
            randomWidth = (Math.floor(Math.random() * (((worldWidth / 2) - 500) / 10)) * 10) + 400;
            if (!(randomWidth < this.previousWidth + 100 && randomWidth + 100 > this.previousWidth)) {
                break;
            }
        }
        //secondWidthLoop
        while (true) {
            secondWidth = (Math.floor(Math.random() * (((worldWidth / 2) - 500) / 10)) * 10) + 400;
            if (!(secondWidth < randomWidth + 100 && secondWidth + 100 > randomWidth)) {
                break;
            }
        }
        createLadder(randomHeight + 25, worldWidth - randomWidth, this.y);
        createBlock(randomWidth - 80, 25, worldWidth - randomWidth + 80, this.y + randomHeight);
        this.crateCluster(worldWidth - 348 - Math.floor(Math.random() * (randomWidth - 448)), this.y + randomHeight, randomWidth - 80);
        if (this.previousWidth !== 0 && this.previousWidth < randomWidth) {
            createBlock(randomWidth - this.previousWidth - 20, 25, worldWidth - randomWidth, this.y - 25);
        }
        this.previousWidth = randomWidth;
        this.y += randomHeight + 25;
    }

    crateCluster(x, randomHeight, widthAllowance) {
        var type = Math.floor(Math.random() * 5);
        if (type == 0 && widthAllowance >= 145) {
            placeCrate(x, randomHeight + 25);
            placeCrate(x + 64 + Math.floor(Math.random() * 17), randomHeight + 25);
            placeCrate(x + 32 + Math.floor(Math.random() * 17), randomHeight + 89);
            
            for (var i = 1; i < 4; i++) {
                for (var j = 0; j < Math.floor(Math.random() * 4) + 1; j++) {
                    crateInventorys[crateInventorys.length - i].inventory[j].id = getRandomItemType();
                    crateInventorys[crateInventorys.length - i].inventory[j].amount = Math.ceil(Math.random() * 100);
                }
            }
        } else if (type == 1 && widthAllowance >= 209) {
            placeBigCrate(x, randomHeight + 25);
            placeCrate(x + 128 + Math.floor(Math.random() * 17), randomHeight + 25);
            
            for (var i = 1; i < 3; i++) {
                for (var j = 0; j < Math.floor(Math.random() * crateInventorys[crateInventorys.length - i].len) + 1; j++) {
                    crateInventorys[crateInventorys.length - i].inventory[j].id = getRandomItemType();
                    crateInventorys[crateInventorys.length - i].inventory[j].amount = Math.ceil(Math.random() * 100);
                }
            }
        } else if (type == 2 && widthAllowance >= 384) {
            placeCrate(x, randomHeight + 25);
            placeDoubleBigCrate(x + 64, randomHeight + 25);
            placeBigCrate(x + 256, randomHeight + 25);
            
            for (var i = 1; i < 4; i++) {
                for (var j = 0; j < Math.floor(Math.random() * crateInventorys[crateInventorys.length - i].len) + 1; j++) {
                    crateInventorys[crateInventorys.length - i].inventory[j].id = getRandomItemType();
                    crateInventorys[crateInventorys.length - i].inventory[j].amount = Math.ceil(Math.random() * 100);
                }
            }
        } else if (type == 3 && widthAllowance >= 128) {
            placeBigCrate(x, randomHeight + 25);
            
            for (var i = 1; i < 2; i++) {
                for (var j = 0; j < Math.floor(Math.random() * crateInventorys[crateInventorys.length - i].len) + 1; j++) {
                    crateInventorys[crateInventorys.length - i].inventory[j].id = getRandomItemType();
                    crateInventorys[crateInventorys.length - i].inventory[j].amount = Math.ceil(Math.random() * 100);
                }
            }
        } else if (type == 4 && widthAllowance >= 209) {
            placeBigCrate(x, randomHeight + 25);
            placeCrate(x + 128 + Math.floor(Math.random() * 17), randomHeight + 25);
            placeCrate(x + Math.floor(Math.random() * 64), randomHeight + 153);
            
            for (var i = 1; i < 4; i++) {
                for (var j = 0; j < Math.floor(Math.random() * crateInventorys[crateInventorys.length - i].len) + 1; j++) {
                    crateInventorys[crateInventorys.length - i].inventory[j].id = getRandomItemType();
                    crateInventorys[crateInventorys.length - i].inventory[j].amount = Math.ceil(Math.random() * 100);
                }
            }
        }
    }

    randomSign(x, y) {
        var randomSignObject = randomSignTexts[Math.floor(Math.random() * randomSignTexts.length)];
        createSign(randomSignObject.width, randomSignObject.lines * 40 + 5, x, y, randomSignObject.text);
    }

    generate(iteration) {
        if (this.side == "left") {
            for (var i = 0; i < iteration; i++) {
                if (Math.floor(Math.random() * 10) == 0) {
                    this.trampolineParkLeft();
                } else if (Math.floor(Math.random() * 10) == 0) {
                    this.skydivingLeft();
                } else {
                    this.elevatedStandLeft();
                }
                if (Math.floor(Math.random() * 2) == 0) {
                    this.randomSign((Math.floor(Math.random() * (((worldWidth / 2) - 500) / 10)) * 10) + 400, Math.floor(Math.random() * 100) + this.y + 150);
                }
            }
        } else if (this.side == "right") {
            for (var i = 0; i < iteration; i++) {
                if (Math.floor(Math.random() * 10) == 0) {
                    this.trampolineParkRight();
                } else if (Math.floor(Math.random() * 10) == 0) {
                    this.skydivingRight();
                } else {
                    this.elevatedStandRight();
                }
                if (Math.floor(Math.random() * 2) == 0) {
                    this.randomSign(worldWidth - (Math.floor(Math.random() * (((worldWidth / 2) - 500) / 10)) * 10) - 400, Math.floor(Math.random() * 100) + this.y + 150);
                }
            }
        }
    }

    generateAllSigns() {
        createLadder(2000, 500, this.y);
        for (var i = 0; i < randomSignTexts.length; i++) {
            createSign(randomSignTexts[randomSignTexts.length - i - 1].width, randomSignTexts[randomSignTexts.length - i - 1].lines * 40 + 5, 600, this.y + (100 * i), randomSignTexts[randomSignTexts.length - i - 1].text);
        }
    }
}

function getRandomItemType() {
    var beef = 0;
    while (true) {
        beef = Math.floor(Math.random() * globalItems.length);
        if (globalItems[beef].type == "item") {
            break;
        }
    }
    return beef;
}

class RandomNum {
    constructor(start, length, step) {
        this.start = start;
        this.len = length;
        this.step = step;
    }

    num() {
        return (Math.floor(Math.random() * this.len) * this.step) + this.start;
    }
}

class Weight {
    constructor(type, weights) {
        this.type = type;
        this.weights = weights;
    }

    truth() {
        var send;
        if (this.type == "independent") {
            send = [];
            for (var i = 0; i < this.weights.length; i++) {
                send.push(Math.random() <= this.weights[i]);
            }
        } else if (this.type == "dependent") {
            send = -1;
            var gimme = 0;
            var linkin = Math.random();
            for (var i = 0; i < this.weights.length; i++) {
                if (linkin - gimme <= 0) {
                    send = i;
                    gimme = -1;
                }
                gimme += this.weights[i];
            }
        }
        return send == -1 ? 0 : send;
    }
}

const randomStandInfo = {
    basicTacoStand: {
        standInfo: {
            itemArray: [0, 29],
            priceArray: [new RandomNum(500, 46, 100), new RandomNum(500, 26, 100)],
            topText: ["OMEGA TACOS", "TACOS BOI", "NOMS", "CHIMIES"],
            bottomText: ["taco", "tuesday"]
        },
        weights: {
            itemArray: new Weight("independent", [1, 0.5]),
            priceArray: "def",
            topText: new Weight("dependent", equalChance(4)),
            bottomText: "def"
        },
        collectible: 0,
        collectibleChance: 0.01
    },
    boutique: {
        standInfo: {
            itemArray: [13, 14, 15, 18, 19, 20, 21, 22, 24, 33],
            priceArray: [new RandomNum(1500, 61, 100), new RandomNum(3000, 121, 100), new RandomNum(10000, 301, 100), new RandomNum(100000, 401, 1000), new RandomNum(1000, 41, 100), new RandomNum(5000, 101, 100), new RandomNum(1000, 41, 100), new RandomNum(2500, 76, 100), new RandomNum(5000, 201, 100), new RandomNum(2500, 76, 100)],
            topText: ["BOB ROSS", "BURLINGTON", "MOM'S CLOSET", "I HAVE SHORTS"],
            bottomText: ["rob boss", "better than my dad's", "i have longs too"]
        },
        weights: {
            itemArray: new Weight("independent", [0.6, 0.5, 0.3, 0.1, 0.7, 0.5, 0.6, 0.6, 0.4, 0.6]),
            priceArray: "def",
            topText: new Weight("dependent", equalChance(4)),
            bottomText: "def"
        },
        collectible: 1,
        collectibleChance: 0.01
    },
    bombShop: {
        standInfo: {
            itemArray: [1, 9, 10, 11, 12, 36, 37],
            priceArray: [new RandomNum(10000, 40001, 1), new RandomNum(25000, 75001, 1), new RandomNum(50000, 250001, 1), new RandomNum(100000, 400001, 1), new RandomNum(250000, 750001, 1), new RandomNum(1, 1000, 1), new RandomNum(1, 1000, 1)],
            topText: ["UR MOM'Z BOMBZ", "BLAMMOES", "BLACK EGGS", "TEE & TEE", "BOOM BOOM THIGS"],
            bottomText: ["my main goal is to blow up", "also green too", "pew pew", "useful for pranks"]
        },
        weights: {
            itemArray: new Weight("independent", [0.8, 0.7, 0.5, 0.3, 0.1, 0.1, 0.05]),
            priceArray: "def",
            topText: new Weight("dependent", equalChance(6)),
            bottomText: "def"
        },
        collectible: 2,
        collectibleChance: 0.008
    },
    crateSupplier: {
        standInfo: {
            itemArray: [6, 7, 8, 38],
            priceArray: [new RandomNum(1000, 41, 100), new RandomNum(2000, 81, 100), new RandomNum(3000, 121, 100), new RandomNum(10000, 401, 100)],
            topText: ["AIR SOLD HERE", "BOX FUN", "STORAGE STORE", "BIG BOX ES"],
            bottomText: ["ez store", "store yer chimies", "mail it to yer mom"]
        },
        weights: {
            itemArray: new Weight("independent", [0.8, 0.8, 0.8, 0.1]),
            priceArray: "def",
            topText: new Weight("dependent", equalChance(4)),
            bottomText: "def"
        },
        collectible: -1,
        collectibleChance: 0
    },
    coffeeShop: {
        standInfo: {
            itemArray: [30, 31, 32],
            priceArray: [new RandomNum(5000, 2001, 10), new RandomNum(1000, 901, 10), new RandomNum(1000, 901, 10)],
            topText: ["GOFFY COFFEE", "STARBUMS", "BIG BRO'S COFF", "CAFFEINE HIGH"],
            bottomText: ["disney approved", "vs the forces of evil", "little bro too", "money low"]
        },
        weights: {
            itemArray: new Weight("independent", [0.9, 0.7, 0.5]),
            priceArray: "def",
            topText: new Weight("dependent", equalChance(4)),
            bottomText: "def"
        },
        collectible: 3,
        collectibleChance: 0.01
    },
    hardwareStore: {
        standInfo: {
            itemArray: [17, 26, 27],
            priceArray: [new RandomNum(2500, 76, 100), new RandomNum(1000, 151, 10), new RandomNum(5000, 201, 100)],
            topText: ["ACE BASE", "HIGHES", "HARBOR YEET", "DAD'S GARAGE"],
            bottomText: ["lowes succs", "did u see the sign?", "yeet my ham", "100% stolen"]
        },
        weights: {
            itemArray: new Weight("independent", [0.9, 0.7, 0.5]),
            priceArray: "def",
            topText: new Weight("dependent", equalChance(4)),
            bottomText: "def"
        },
        collectible: -1,
        collectibleChance: 0
    },
    surplus: {
        standInfo: {
            itemArray: [36, 37, 38],
            priceArray: [new RandomNum(1000, 41, 100), new RandomNum(1000, 41, 100), new RandomNum(1000, 41, 100)],
            topText: ["SURMINUS", "THIRFTY", "JIMBOB'S JIMBOBS", "READ"],
            bottomText: ["c minus", "forfty", "jimmer and bobby", "more chikin"]
        },
        weights: {
            itemArray: new Weight("independent", [0.9, 0.3, 0.7]),
            priceArray: "def",
            topText: new Weight("dependent", equalChance(4)),
            bottomText: "def"
        },
        collectible: 0,
        collectibleChance: 0.025
    }
};

function equalChance(chan) {
    var oob = [];
    for (var i = 0; i < chan; i++) {
        oob.push(1 / chan);
    }
    return oob;
}

function equalChanceSub(chan, sub) {
    var oob = [];
    for (var i = 0; i < chan - sub; i++) {
        oob.push(1 / chan);
    }
    return oob;
}

function loadTruth(iter) {
    var weg = [];
    for (var i = 0; i < iter; i++) {
        weg.push(1);
    }
    return weg;
}

function parseWeight(weig, options) {
    if (weig.type == "dependent") {
        return options[weig.truth()];
    } else if (weig.type == "independent") {
        var sep = [];
        var once = weig.truth();
        for (var i = 0; i < options.length; i++) {
            if (once[i]) {
                sep.push(options[i]);
            }
        }
        return sep;
    }
}

function resetBoi() {
    checkVersionType(emptyWorld);
}

function forceManualDefaultScreen() {
    checkVersionType(emptyWorld);
    inWorld = true;
    inTitleScreen = false;
    document.getElementById("characterHUD").style.display = "block";
    console.log("Hello User! If you're wondering what just happened and started looking in the Chrome Console for answers, you're in the right place! This screen is triggered only when the user triggers the keyboard shortcut 'Ctrl + Shift + :'. It is simply used as a developer tool for my convenience so that when developing new versions in the future, syncing the data types becomes much easier. If you got here on accident, that's okay! Just hit Escape to get to the pause menu and return to the title screen. Oh, and happy birthday!");
}

function optimize() {
    //creepers
    for (var i = 0; i < creeperCount; i++) {
        if (usedCreepers[i]) {
            if (document.getElementById("creeper" + String(i)).getBoundingClientRect().bottom < 0 || document.getElementById("creeper" + String(i)).getBoundingClientRect().top > window.innerHeight) {
                document.getElementById("creeper" + String(i)).style.visibility = "hidden";
                creeperVisibility[i] = false;
            } else {
                document.getElementById("creeper" + String(i)).style.visibility = "visible";
                creeperVisibility[i] = true;
            }
        }
    }

    //bombs
    for (var i = 0; i < bombCount; i++) {
        if (bombs[i].inUse) {
            if (document.getElementById("bomb" + String(i)).getBoundingClientRect().bottom < 0 || document.getElementById("bomb" + String(i)).getBoundingClientRect().top > window.innerHeight) {
                document.getElementById("bomb" + String(i)).style.visibility = "hidden";
            } else {
                document.getElementById("bomb" + String(i)).style.visibility = "visible";
            }
        }
    }

    //tennis balls
    for (var i = 0; i < tennisBallCount; i++) {
        if (tennisBalls[i].inUse) {
            if (document.getElementById("tennisBall" + String(i)).getBoundingClientRect().bottom < 0 || document.getElementById("tennisBall" + String(i)).getBoundingClientRect().top > window.innerHeight) {
                document.getElementById("tennisBall" + String(i)).style.visibility = "hidden";
            } else {
                document.getElementById("tennisBall" + String(i)).style.visibility = "visible";
            }
        }
    }

    //crates
    for (var i = 0; i < crateCount; i++) {
        if (usedCrates[i]) {
            if (document.getElementById("crate" + String(i)).getBoundingClientRect().bottom < 0 || document.getElementById("crate" + String(i)).getBoundingClientRect().top > window.innerHeight) {
                document.getElementById("crate" + String(i)).style.visibility = "hidden";
            } else {
                document.getElementById("crate" + String(i)).style.visibility = "visible";
            }
        }
    }

    //blocks
    for (var i = 0; i < blockBoundingBoxes.length; i++) {
        if (blockBoundingBoxes[i] !== 0) {
            if (document.getElementById("block" + String(i)).getBoundingClientRect().bottom < 0 || document.getElementById("block" + String(i)).getBoundingClientRect().top > window.innerHeight) {
                document.getElementById("block" + String(i)).style.visibility = "hidden";
                blockVisibility[i] = false;
            } else {
                document.getElementById("block" + String(i)).style.visibility = "visible";
                blockVisibility[i] = true;
            }
        }
    }

    //signs
    for (var i = 0; i < signCount; i++) {
        if (usedSigns[i]) {
            if (document.getElementById("sign" + String(i)).getBoundingClientRect().bottom < 0 || document.getElementById("sign" + String(i)).getBoundingClientRect().top > window.innerHeight) {
                document.getElementById("sign" + String(i)).style.visibility = "hidden";
            } else {
                document.getElementById("sign" + String(i)).style.visibility = "visible";
            }
        }
    }

    //arrows
    for (var i = 0; i < arrowCount; i++) {
        if (usedArrows[i]) {
            if (document.getElementById("arrow" + String(i)).getBoundingClientRect().bottom < 0 || document.getElementById("arrow" + String(i)).getBoundingClientRect().top > window.innerHeight) {
                document.getElementById("arrow" + String(i)).style.visibility = "hidden";
            } else {
                document.getElementById("arrow" + String(i)).style.visibility = "visible";
            }
        }
    }

    //ladders
    for (var i = 0; i < ladderCount; i++) {
        if (usedLadders[i]) {
            if (document.getElementById("ladder" + String(i)).getBoundingClientRect().bottom < 0 || document.getElementById("ladder" + String(i)).getBoundingClientRect().top > window.innerHeight) {
                document.getElementById("ladder" + String(i)).style.visibility = "hidden";
            } else {
                document.getElementById("ladder" + String(i)).style.visibility = "visible";
            }
        }
    }

    //stands
    for (var i = 0; i < standCount; i++) {
        if (usedStands[i]) {
            if (document.getElementById("stand" + String(i)).getBoundingClientRect().bottom < 0 || document.getElementById("stand" + String(i)).getBoundingClientRect().top > window.innerHeight) {
                document.getElementById("stand" + String(i)).style.visibility = "hidden";
            } else {
                document.getElementById("stand" + String(i)).style.visibility = "visible";
            }
        }
    }

    //fans
    for (var i = 0; i < fanCount; i++) {
        if (usedFans[i]) {
            if (document.getElementById("fan" + String(i)).getBoundingClientRect().bottom < 0 || document.getElementById("fan" + String(i)).getBoundingClientRect().top > window.innerHeight) {
                document.getElementById("fan" + String(i)).style.visibility = "hidden";
            } else {
                document.getElementById("fan" + String(i)).style.visibility = "visible";
            }
        }
    }

    //money
    for (var i = 0; i < floorMoneyCount; i++) {
        if (floorMoney[i].inUse) {
            if (document.getElementById("floorMoney" + String(i)).getBoundingClientRect().bottom < 0 || document.getElementById("floorMoney" + String(i)).getBoundingClientRect().top > window.innerHeight) {
                document.getElementById("floorMoney" + String(i)).style.visibility = "hidden";
            } else {
                document.getElementById("floorMoney" + String(i)).style.visibility = "visible";
            }
        }
    }

    //floor items
    for (var i = 0; i < floorItemCount; i++) {
        if (floorItems[i].inUse) {
            if (document.getElementById("floorItem" + String(i)).getBoundingClientRect().bottom < 0 || document.getElementById("floorItem" + String(i)).getBoundingClientRect().top > window.innerHeight) {
                document.getElementById("floorItem" + String(i)).style.visibility = "hidden";
            } else {
                document.getElementById("floorItem" + String(i)).style.visibility = "visible";
            }
        }
    }
}
var optimusPrime = setInterval(optimize, 0);

function creeperSpawnRotation() {
    if (runServerTick && inWorld && !inTitleScreen && doSpawning) {
        //update totalUsedCreepers
        var elep = 0;
        var ceepArray = [];
        for (var i = 0; i < creeperCount; i++) {
            if (usedCreepers[i] && creeperManning[i] === false) {
                elep++;
                ceepArray.push(i);
            }
        }
        totalUsedCreepers = elep;

        //boi
        if (elep > cap && ceepArray.length > 0) {
            var geeb = ceepArray[Math.floor(Math.random() * ceepArray.length)];
            for (var i = 0; i < 10; i++) {
                geeb = ceepArray[Math.floor(Math.random() * ceepArray.length)];
                if (!creeperVisibility[geeb]) {
                    break;
                }
            }
            if (!creeperVisibility[geeb]) {
                document.getElementById("creeper" + String(geeb)).remove();
                usedCreepers[geeb] = false;
            }
        }

        //boiboi
        if (elep <= cap) {
            var allowedBlocks = [];
            for (var i = 0; i < blockBoundingBoxes.length; i++) {
                if (blockBoundingBoxes[i] !== 0 && !blockVisibility[i]) {
                    allowedBlocks.push(i);
                }
            }
            if (allowedBlocks.length > 0) {
                var randomBlock = allowedBlocks[Math.floor(Math.random() * allowedBlocks.length)];
                summonCreepers(1, Math.floor(Math.random() * (blockTopLookup[randomBlock].range - 80)) + blockTopLookup[randomBlock].x, blockTopLookup[randomBlock].y, false);
            }
        }
    }

    setTimeout(creeperSpawnRotation, 3000);
}
creeperSpawnRotation();

function openTitleScreen() {
    impTitle(titleScreen);
    inWorld = false;
    inTitleScreen = true;
    document.getElementById("pauseMenu").style.display = "none";
}

//spawn
characterLocation = [50, 100];
jumb();

//debugLadder
createLadder(0, -100, -10);

//mapNecessities
createBlock(worldWidth, 100, 0, 0);
const left = "left";
const right = "right";
const up = "up";
const down = "down";
const independent = "independent";
const dependent = "dependent";

//map

//items

//favicon
function faviconUpdate() {
    var random = Math.floor(Math.random() * 9);
    document.getElementById("fav").href = "assets/favicon/favicon" + String(random) + ".png";
    setTimeout(faviconUpdate, (Math.floor(Math.random() * 8000) + 2000));
}
faviconUpdate();

//Other World Information
const version = 100;
const versionType = 1;
const versionText = "1.0.0";

//VariableCheck