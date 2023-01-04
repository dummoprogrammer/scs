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
    var doll = Math.floor(num / 100);
    var cent = num % 100;
    var str = "$" + String(doll);
    if (cent < 10) {
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
var globalItems = [
    {
        "name": "Taco",
        "amount": 1,
        "rarity": "common",
        "img": "assets/items/taco.png",
        "id": 0
    },
    {
        "name": "Bomb",
        "amount": 1,
        "rarity": "uncommon",
        "img": "assets/items/bomb.png",
        "id": 1
    },
    {
        "name": "Tennis Ball",
        "amount": 1,
        "rarity": "common",
        "img": "assets/items/tennis_ball.png",
        "id": 2
    },
    {
        "name": "debug:dollar_bill",
        "amount": 1,
        "rarity": "common",
        "img": "assets/items/dollar_bill.png",
        "id": 3
    },
    {
        "name": "debug:double_dollar_bill",
        "amount": 1,
        "rarity": "common",
        "img": "assets/items/dollar_bill2.png",
        "id": 4
    },
    {
        "name": "debug:triple_dollar_bill",
        "amount": 1,
        "rarity": "common",
        "img": "assets/items/dollar_bill3.png",
        "id": 5
    },
    {
        "name": "Crate",
        "amount": 1,
        "rarity": "common",
        "img": "assets/items/crate.png",
        "id": 6
    },
    {
        "name": "Big Crate",
        "amount": 1,
        "rarity": "common",
        "img": "assets/items/big_crate.png",
        "id": 7
    },
    {
        "name": "Super Big Crate",
        "amount": 1,
        "rarity": "common",
        "img": "assets/items/double_big_crate.png",
        "id": 8
    },
    {
        "name": "TNT",
        "amount": 1,
        "rarity": "common",
        "img": "assets/items/tnt.png",
        "id": 9
    },
    {
        "name": "TNT 10x",
        "amount": 1,
        "rarity": "uncommon",
        "img": "assets/items/10xtnt.png",
        "id": 10
    },
    {
        "name": "TNT 100x",
        "amount": 1,
        "rarity": "rare",
        "img": "assets/items/100xtnt.png",
        "id": 11
    },
    {
        "name": "TNT 1000x",
        "amount": 1,
        "rarity": "super_rare",
        "img": "assets/items/1000xtnt.png",
        "id": 12
    },
    
];
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

var startX = [];
var startY = [];
var bufferX = [];
var bufferY = [];
var creeperLocation = [];
var creeperCount = 0;
var characterLocation = [0, 0];
var characterBox = document.getElementById("characterCreeper").getBoundingClientRect();
var creeperBoxes = [];
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
var ladderFall = false;
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
var characterMoney = 13775;
var characterInventory = [];
var inventoryShown = false;
var standInventoryShown = false;
var globalColor = [63, 127, 255];
var movementTimeouts = [];
var blockElements = [];
var blockBoundingBoxes = [];
var ladderBoxes = [];
var fallCTimeouts = [];
var crateCount = 0;
var crateLocation = [];
var tntLocation = [];
var tntx10Location = [];
var tntx100Location = [];
var tntx1000Location = [];
var tnts = [];
var fanLocation = [];
var fanBoxes = [];
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
var savedArrowY = [];
var savedStandY = [];
var standItemIDs = [];
var standInventory = [];
var standInventoryIDs = [];
var standPrices = [];
var standDirection = [];
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
for (var i = 0; i < 10000; i++) {
    dotFrame.push(0);
}
document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = (window.innerHeight - e.clientY);
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
        if (mouseX > window.innerWidth - (wid / 2)) {
            document.getElementById("blockPlacementGuide").style.left = String(window.innerWidth - wid) + "px";
        } else if (mouseX < wid / 2) {
            document.getElementById("blockPlacementGuide").style.left = "0px";
        } else {
            document.getElementById("blockPlacementGuide").style.left = String(mouseX - (wid / 2)) + "px";
        }
        document.getElementById("blockPlacementGuide").style.bottom = String(getClosestBlock(mouseX, mouseY, type)) + "px";
        document.getElementById("blockPlacementGuide").style.width = String(wid - 10) + "px";
        document.getElementById("blockPlacementGuide").style.height = String(hei - 10) + "px";
        document.getElementById("bpgHitbox").style.width = String(wid) + "px";
        document.getElementById("bpgHitbox").style.height = String(hei) + "px";
        document.getElementById("bpgHitbox").style.left = String(getBPGX()) + "px";
    }
}
function getClosestBlock(x, y, type) {
    var maximumHeight = -10000;
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
    for (var i = 0; i < blockBoundingBoxes.length; i++) {
        if (blockBoundingBoxes[i].left < x + offset && blockBoundingBoxes[i].right > x - offset) {
            if ((window.innerHeight - blockBoundingBoxes[i].top) < y && (window.innerHeight - blockBoundingBoxes[i].top) > maximumHeight) {
                maximumHeight = window.innerHeight - blockBoundingBoxes[i].top;
            }
        }
    }
    return implyHigherY(maximumHeight);
}
function implyHigherY(y) {
    var prevoof = false;
    document.getElementById("bpgHitbox").style.bottom = String(y) + "px";
    for (var i = 0; i < blockBoundingBoxes.length; i++) {
        if (boundingBoxCheck(document.getElementById("bpgHitbox").getBoundingClientRect(), blockBoundingBoxes[i])) {
            prevoof = i;
        }
    }
    if (prevoof === false) {
        document.getElementById("blockPlacementGuide").style.bottom = String(y) + "px";
    } else {
        implyHigherY(window.innerHeight - blockBoundingBoxes[prevoof].top);
    }
}
function getClosestBlockOffset() {
    var splitwhe = document.getElementById("blockPlacementGuide").style.bottom.split("");
    var removal = splitwhe.splice(splitwhe.length - 2, 2);
    return parseInt(splitwhe.join("")) + characterScreenOffset;
}
function getBPGX() {
    var splitwhe = document.getElementById("blockPlacementGuide").style.left.split("");
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
        } else {
            document.getElementById("blockPlacementGuide").style.display = "none";
            placeObject = false;
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
            if (boundingBoxCheck(creeperBoxes[id], ladderBoxes[i])) {
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
function summonCreepers(numbo, x, y, s) {
    for (var i = 0; i < numbo; i++) {
        total += "<div id='creeper" + String(i + creeperCount) + "' class='creeper'><img src='assets/creeper_base.png' id='creeper" + String(i + creeperCount) + "base' class='creeperBase'><img src='assets/creeper_face.png' id='creeper" + String(i + creeperCount) + "face' class='creeperFace'></div>";
    }
    document.getElementById("creepers").innerHTML = total;
    for (var i = 0; i < numbo; i++) {
        creeperLocation.push([x, y]);
        document.getElementById("creeper" + String(i + creeperCount)).style.left = String(creeperLocation[i][0]) + "px";
        document.getElementById("creeper" + String(i + creeperCount)).style.bottom = String(creeperLocation[i][1]) + "px";
        creeperBoxes.push(document.getElementById("creeper" + String(i + creeperCount)).getBoundingClientRect());
        creeperOnGround.push(false);
        creeperVector.push(0);
        creeperExplosionVector.push(0);
        creeperVert.push(0);
        junpOrNot.push(0);
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
        standSquareBoxes.push(whe.getBoundingClientRect());
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
        characterLocation[0] += (5 * characterVector) + characterExplosionVector;
    }
    if (characterLocation[0] < 0) {
        characterLocation[0] = 0;
    } else if (characterLocation[0] > (window.innerWidth - 80)) {
        characterLocation[0] = (window.innerWidth - 80);
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
    if (characterLocation[1] > ((window.innerHeight / 2) - 120)) {
        characterScreenOffset = (characterLocation[1] - Math.floor((window.innerHeight / 2) - 120));
    } else {
        characterScreenOffset = 0;
    }
    document.getElementById("characterCreeper").style.left = String(characterLocation[0]) + "px";
    document.getElementById("characterCreeper").style.bottom = String(characterLocation[1] - characterScreenOffset) + "px";
    document.getElementById("characterHeldItem").style.left = String(characterLocation[0] + heldItemDirectionOffset) + "px";
    document.getElementById("characterHeldItem").style.bottom = String(characterLocation[1] + 90 - characterScreenOffset) + "px";
}

var thig2 = setInterval(updateCharacterPos, 0);
var thig3 = setInterval(moveCharacterX, (1000 / 60));
function moveCreeperX() {
    for (var i = 0; i < creeperCount; i++) {
        if (creeperOnGround[i] || creeperOnLadder[i]) {
            creeperExplosionVector[i] = 0;
        }
        if (!preStandCheck[i] && runServerTick) {
            creeperLocation[i][0] += (5 * creeperVector[i]) + creeperExplosionVector[i];
        }
        if (creeperLocation[i][0] < 0) {
            creeperLocation[i][0] = 0;
        } else if (creeperLocation[i][0] > (window.innerWidth - 80)) {
            creeperLocation[i][0] = (window.innerWidth - 80);
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
                whe3.style.bottom = String(creeperLocation[i][1] + 90 - characterScreenOffset) + "px";
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
                whe4.style.bottom = String(creeperLocation[i][1] + 90 - characterScreenOffset) + "px";
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
                whe1.style.bottom = String(creeperLocation[i][1] + 90 - characterScreenOffset) + "px";
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
                whe2.style.bottom = String(creeperLocation[i][1] + 90 - characterScreenOffset) + "px";
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
        elem1.style.bottom = String(elementlocation[savedElementLocationIndex + 2] + 90 - characterScreenOffset) + "px";
        elem2.style.bottom = String(elementlocation[savedElementLocationIndex + 2] + 90 - characterScreenOffset) + "px";
        setTimeout(updateVerticalOffset, 1, elem1, elem2, savedElementLocationIndex, creepID);
    }
}
function forceResetLadderC(id) {
    creeperLadderReset[id] = false;
}
function updateCreeperPos() {
    for (var i = 0; i < creeperCount; i++) {
        document.getElementById("creeper" + String(i)).style.left = String(creeperLocation[i][0]) + "px";
        document.getElementById("creeper" + String(i)).style.bottom = String(creeperLocation[i][1] - characterScreenOffset) + "px";
        document.getElementById("standsq" + String(i)).style.left = String(creeperLocation[i][0] - 110) + "px";
        document.getElementById("standsq" + String(i)).style.bottom = String(creeperLocation[i][1] - characterScreenOffset) + "px";
    }
}
var thig7 = setInterval(updateCreeperPos, 0);
var thig8 = setInterval(moveCreeperX, (1000 / 60));
document.onkeydown = function(e) {
    if (document.activeElement !== document.getElementById("creeperCodeInput")) {
    if (e.code == "ArrowLeft" && !inventoryShown && !standInventoryShown && runServerTick) {
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
    } else if (e.code == "ArrowRight" && !inventoryShown && !standInventoryShown && runServerTick) {
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
    } else if (e.code == "ArrowUp" && !inventoryShown && !standInventoryShown && runServerTick) {
        priorLadderCheck = false;
        for (var i = 0; i < ladderCount; i++) {
            if (boundingBoxCheck(characterBox, ladderBoxes[i])) {
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
    } else if (e.code == "ArrowDown" && !inventoryShown && !standInventoryShown && runServerTick) {
        var idsplit = objectIDUnderCharacter.split("");
        if (idsplit[0] == "l" && !characterOnLadder) {
            characterOnLadder = true;
            characterLocation[1] -= 5;
            characterLadderVert = -5;
        }
        for (var i = 0; i < ladderCount; i++) {
            if (boundingBoxCheck(characterBox, ladderBoxes[i])) {
                characterOnLadder = true;
                characterLadderVert = -5;
            }
        }
    } else if (e.code == "KeyE") {
        if (!inventoryShown && !standInventoryShown && runServerTick) {
            elementDisplayState("fullScreenOverlay", true);
            elementDisplayState("characterInventory", true);
            inventoryShown = true;
        } else {
            if (!standInventoryShown && runServerTick) {
                elementDisplayState("fullScreenOverlay", false);
                elementDisplayState("characterInventory", false);
                inventoryShown = false;
            }
        }
    } else if (e.code == "Escape") {
        if (inventoryShown || standInventoryShown) {
            elementDisplayState("fullScreenOverlay", false);
            elementDisplayState("characterInventory", false);
            elementDisplayState("standInventory", false);
            inventoryShown = false;
            standInventoryShown = false;
        } else if (runServerTick) {
            runServerTick = false;
            document.getElementById("pauseMenu").style.display = "inline";
        } else if (!runServerTick) {
            runServerTick = true;
            document.getElementById("pauseMenu").style.display = "none";
        }
    }
    }
}
function openStandInventory(id) {
    if (!standInventoryShown) {
        elementDisplayState("fullScreenOverlay", true);
        elementDisplayState("standInventory", true);
        updateStandItems(id);
        openedStandID = id;
        standInventoryShown = true;
    }
}
function updateInventory() {
    document.getElementById("characterInventory").style.top = String((window.innerHeight / 2) - 375) + "px";
    document.getElementById("characterInventory").style.left = String((window.innerWidth / 2) - 250) + "px";
    document.getElementById("standInventory").style.top = String((window.innerHeight / 2) - 375) + "px";
    document.getElementById("standInventory").style.left = String((window.innerWidth / 2) - 250) + "px";
    document.getElementById("moneySpan").innerHTML = getMoneyString(characterMoney);
}
function updateItems() {
    var plpl = "";
    for (var i = 0; i < characterInventory.length; i++) {
        plpl += "<div id='inventoryitem" + String(i) + "' class='inventoryitem' onclick='changeHeldItem(" + String(i) + ")' style='background-color: " + getColorFromRarity(characterInventory[i].rarity) + "'><img id='inventoryitem" + String(i) + "img' src='" + characterInventory[i].img + "' width='64' height='64' class='inventoryimg'><span id='inventoryitem" + String(i) + "name' class='inventoryname'>" + characterInventory[i].name + "</span><span id='inventoryitem" + String(i) + "amount' class='inventoryamount'>" + "x" + characterInventory[i].amount + "</span></div>"
    }
    document.getElementById("inventoryList").innerHTML = plpl;
}
function updateStandItems(id) {
    selectedPrice = 0;
    selectedItemID = -1;
    var plpl = "";
    for (var i = 0; i < standInventory[id].length; i++) {
        plpl += "<div id='standinventoryitem" + String(i) + "' class='inventoryitem' onclick='selectedPrice = standPrices[" + String(id) + "][" + String(i) + "]; selectedItemID = standInventoryIDs[" + String(id) + "][" + String(i) + "];' style='background-color: " + getColorFromRarity(standInventory[id][i].rarity) + "'><img id='standinventoryitem" + String(i) + "img' src='" + standInventory[id][i].img + "' width='64' height='64' class='inventoryimg'><span id='standinventoryitem" + String(i) + "name' class='inventoryname'>" + standInventory[id][i].name + "</span><span id='standinventoryitem" + String(i) + "price' class='inventoryamount'>" + getMoneyString(standPrices[id][i]) + "</span></div>"
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
    }
}
function changeHeldItem(id) {
    selectedCharacterID = id;
    document.getElementById("characterHeldItem").src = characterInventory[id].img;
    document.getElementById("selectedHoldingItem").src = characterInventory[id].img;
    for (var i = 0; i < characterInventory.length; i++) {
        document.getElementById("inventoryitem" + String(i) + "name").style.color = "black";
        document.getElementById("inventoryitem" + String(i) + "amount").style.color = "black";
    }
    document.getElementById("inventoryitem" + String(id) + "name").style.color = "white";
    document.getElementById("inventoryitem" + String(id) + "amount").style.color = "white";
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
}
var thig17 = setInterval(updateMoneySpan, 0);
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
        selectedCharacterID = -1;
        document.getElementById("characterHeldItem").src = "assets/null.png";
        document.getElementById("selectedHoldingItem").src = "assets/null.png";
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
function ladderFrame() {
    if (characterOnLadder) {
        characterLocation[1] += characterLadderVert;
        ladderFall = true;
        for (var i = 0; i < blockBoundingBoxes.length; i++) {
            if (characterLadderVert > 0 && boundingBoxCheck(characterBox, blockBoundingBoxes[i]) && previousAirFrameBottom[i]) {
                characterLocation[1] = (window.innerHeight - blockBoundingBoxes[i].bottom - 240 + characterScreenOffset);
                characterLadderVert = 0;
            }
        }
        priorPriorCheck = false;
        for (var i = 0; i < ladderCount; i++) {
            if (characterBox.bottom > ladderBoxes[i].bottom) {
                characterLocation[1] = (window.innerHeight - ladderBoxes[i].bottom);
                characterLadderVert = 0;
            }
            if (boundingBoxCheck(characterBox, ladderBoxes[i])) {
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
            if (boundingBoxCheck(characterBox, blockBoundingBoxes[j]) && characterLadderVert < 0 && characterBox.bottom < blockBoundingBoxes[j].bottom) {
                characterLocation[1] = (window.innerHeight - blockBoundingBoxes[j].top);
                characterLadderVert = 0;
                characterOnLadder = false;
            }
        }
        for (var j = 0; j < blockBoundingBoxes.length; j++) {
            if (boundingBoxCheck(characterBox, blockBoundingBoxes[j]) && characterLadderVert < 0 && characterBox.bottom < blockBoundingBoxes[j].bottom) {
                characterLocation[1] = (window.innerHeight - blockBoundingBoxes[j].top);
                characterLadderVert = 0;
                characterOnLadder = false;
            }
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
        } else if (characterVector == -1) {
            document.getElementById("creeperCface").style.left = "10px";
            document.getElementById("creeperCface").style.bottom = "185px";
            heldItemDirectionOffset = -60;
        }
    } else {
        if (characterVert > 0) {
            document.getElementById("creeperCface").style.left = "27.5px";
            document.getElementById("creeperCface").style.bottom = "200px";
        } else {
            document.getElementById("creeperCface").style.left = "27.5px";
            document.getElementById("creeperCface").style.bottom = "170px";
        }
    }
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
    blockBoundingBoxes.push(whe.getBoundingClientRect());
    previousAirFrame.push(false);
    previousAirFrameBottom.push(false);
    previousAirFrameTemplate.push(1);
    previousFanFrame.push(false);
    creeperRangeTemp.push(false);
    savedBlockY.push(y);
}
function updateBlockPos() {
    for (var i = 0; i < blockBoundingBoxes.length; i++) {
        if (blockBoundingBoxes[i] !== 0) {
            document.getElementById("block" + String(i)).style.bottom = String(savedBlockY[i] - characterScreenOffset) + "px";
        }
    }
}
var thig10 = setInterval(updateBlockPos, 0);
function updateLadderPos() {
    for (var i = 0; i < ladderCount; i++) {
        document.getElementById("ladder" + String(i)).style.bottom = String(savedLadderY[i] - characterScreenOffset) + "px";
    }
}
var thig11 = setInterval(updateLadderPos, 0);
function updateSignPos() {
    for (var i = 0; i < signCount; i++) {
        document.getElementById("sign" + String(i)).style.bottom = String(savedSignY[i] - characterScreenOffset) + "px";
    }
}
var thig12 = setInterval(updateSignPos, 0);
function updateArrowPos() {
    for (var i = 0; i < arrowCount; i++) {
        document.getElementById("arrow" + String(i)).style.bottom = String(savedArrowY[i] - characterScreenOffset) + "px";
    }
}
var thig13 = setInterval(updateArrowPos, 0);
function updateStandPos() {
    for (var i = 0; i < standCount; i++) {
        document.getElementById("stand" + String(i)).style.bottom = String(savedStandY[i] - characterScreenOffset) + "px";
        if (standDirection[i] == "left") {
            document.getElementById("creeper" + String(standManning[i]) + "face").style.left = "10px";
            document.getElementById("creeper" + String(standManning[i]) + "face").style.bottom = "187.5px";
        } else if (standDirection[i] == "right") {
            document.getElementById("creeper" + String(standManning[i]) + "face").style.left = "45px";
            document.getElementById("creeper" + String(standManning[i]) + "face").style.bottom = "187.5px";
        }
    }
}
var thig15 = setInterval(updateStandPos, 0);
function updateFanPos() {
    for (var i = 0; i < fanCount; i++) {
        document.getElementById("fan" + String(i)).style.left = String(fanLocation[i][0]) + "px";
        document.getElementById("fan" + String(i)).style.bottom = String(fanLocation[i][1] - characterScreenOffset) + "px";
    }
}
var thig23 = setInterval(updateFanPos, 0);
function updateTNTY() {
    for (var i = 0; i < tnts.length; i++) {
        document.getElementById(tnts[i].elementName).style.bottom = String(tnts[i].y - characterScreenOffset) + "px";
    }
}
var thig26 = setInterval(updateTNTY, 0);

function updateBoxes() {
    characterBox = document.getElementById("characterCreeper").getBoundingClientRect();
    for (var i = 0; i < blockBoundingBoxes.length; i++) {
        if (blockBoundingBoxes[i] !== 0) {
            blockBoundingBoxes[i] = document.getElementById("block" + String(i)).getBoundingClientRect();
        }
    }
    for (var i = 0; i < creeperBoxes.length; i++) {
        creeperBoxes[i] = document.getElementById("creeper" + String(i)).getBoundingClientRect();
    }
    for (var i = 0; i < ladderBoxes.length; i++) {
        ladderBoxes[i] = document.getElementById("ladder" + String(i)).getBoundingClientRect();
    }
    for (var i = 0; i < standBoxes.length; i++) {
        standBoxes[i] = document.getElementById("stand" + String(i)).getBoundingClientRect();
    }
    for (var i = 0; i < standSquareBoxes.length; i++) {
        standSquareBoxes[i] = document.getElementById("standsq" + String(i)).getBoundingClientRect();
    }
    for (var i = 0; i < fanBoxes.length; i++) {
        fanBoxes[i] = document.getElementById("fan" + String(i)).getBoundingClientRect();
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
    characterStandSquareBox = document.getElementById("characterStandSquare").getBoundingClientRect();
}
var thig22 = setInterval(updateCharacterStandSquare, 0);
function jump() {
    characterVert = 20;
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
        if (characterBox.left < fanBoxes[i].right && characterBox.right > fanBoxes[i].left && runServerTick) {
            if (characterLocation[1] > fanLocation[i][1] + 20 && characterLocation[1] < fanLocation[i][1] + 1020) {
                characterVert += Math.floor(500 / (characterLocation[1] - fanLocation[i][1]));
                prevCK = true;
            }
        }
    }
    characterInFan = prevCK;
    vertFrame();
    setTimeout(gframe2, (25 / 3));
}
function gframe2() {
    if (!characterOnGround && !characterOnLadder) {
        gravityFrame();
    }
}
function blocksCheck() {
    if (characterVector !== 0) {
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
    }
}
function vertFrame() {
    for (var i = 0; i < blockBoundingBoxes.length; i++) {
        if (characterOnGround == false && boundingBoxCheck(characterBox, blockBoundingBoxes[i]) && characterVert >= 0 && previousFanFrame[i] && !characterOnLadder && characterInFan) {
            characterLocation[1] = (window.innerHeight - blockBoundingBoxes[i].bottom - 245 + characterScreenOffset);
            characterVert = 0;
        } else if (characterOnGround == false && boundingBoxCheck(characterBox, blockBoundingBoxes[i]) && characterVert < 0 && characterOnLadder == false) {
            if (previousAirFrame[i]) {
                characterLocation[1] = (window.innerHeight - blockBoundingBoxes[i].top + characterScreenOffset);
                characterOnGround = true;
                ladderFall = false;
                objectIDUnderCharacter = String(i);
                objectUnderCharacter = blockBoundingBoxes[i];
            }
        } else if (characterOnGround == false && boundingBoxCheck(characterBox, blockBoundingBoxes[i]) && characterVert >= 0) {
            if (previousAirFrameBottom[i] && !characterOnLadder) {
                characterLocation[1] = (window.innerHeight - blockBoundingBoxes[i].bottom - 240 + characterScreenOffset);
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
                characterLocation[1] = (window.innerHeight - ladderBoxes[i].top + characterScreenOffset);
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
        if (creeperBoxes[id].left < fanBoxes[i].right && creeperBoxes[id].right > fanBoxes[i].left && runServerTick) {
            if (creeperLocation[id][1] > fanLocation[i][1] + 20 && creeperLocation[id][1] < fanLocation[i][1] + 1020) {
                creeperVert[id] += Math.floor(500 / (creeperLocation[id][1] - fanLocation[i][1]));
                prevCK = true;
            }
        }
    }
    creeperInFan[id] = prevCK;
    vertFrameC(id);
    setTimeout(gframe2C, (25 / 3), id);
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
                creeperLocation[id][1] = (window.innerHeight - blockBoundingBoxes[i].bottom - 245 + characterScreenOffset);
                creeperVert[id] = 0;
            } else {
                if (!creeperRange[(blockBoundingBoxes.length * id) + i]) {
                    creeperLocation[id][1] = (window.innerHeight - blockBoundingBoxes[i].top + characterScreenOffset);
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
                creeperLocation[id][1] = (window.innerHeight - blockBoundingBoxes[i].bottom - 240 + characterScreenOffset);
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
        document.getElementById("crate" + String(i)).style.left = String(crateLocation[i][0]) + "px";
        document.getElementById("crate" + String(i)).style.bottom = String(crateLocation[i][1] - characterScreenOffset) + "px";
    }
}
function clickedGuide() {
    var trev = false;
    var power = 0;
    for (var i = 0; i < tnts.length; i++) {
        if (boundingBoxCheck(document.getElementById("invisibleMouseDetector").getBoundingClientRect(), document.getElementById("block" + String(tnts[i].blockID)).getBoundingClientRect())) {
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
            }
        }
    }
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
}
function fixMouseX(mx, offset) {
    if (mx > window.innerWidth - offset) {
        return window.innerWidth - offset;
    } else if (mx < 0) {
        return 0;
    } else {
        return mx;
    }
}
function updateMouseClicker() {
    document.getElementById("invisibleMouseDetector").style.left = String(mouseX - 1) + "px";
    document.getElementById("invisibleMouseDetector").style.bottom = String(mouseY - 1) + "px";
}
function decorDotsForFan(fanID) {
    var dot = document.createElement("img");
    dot.id = "dd:fan" + String(fanID) + ":" + String(dotTick);
    dot.className = "decorDot";
    document.getElementById("decorDots").appendChild(dot);
    dot.src = "assets/decoration_dot.png";
    dot.style.left = String(Math.floor(Math.random() * 300) + fanLocation[fanID][0]) + "px";
    dot.style.bottom = String(fanLocation[fanID][1] + 20 - characterScreenOffset) + "px";
    if (dotTick == 9999) {
        dotTick = 0;
    } else {
        dotTick++;
    }
    updateDot(document.getElementById(dot.id), dotTick, fanID);
    setTimeout(decorDotsForFan, (1000 / 60), fanID);
}
function updateDot(dotElem, tick, fanID) {
    dotElem.style.bottom = String(fanLocation[fanID][1] + 20 + dotFrame[tick] - characterScreenOffset) + "px";
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
    crateLocation.push([x, y]);
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
    crateLocation.push([x, y]);
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
    crateLocation.push([x, y]);
    crateCount++;
    createBlock(192, 192, x, y);
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
    whe.style.fontSize = "25px";
    whe.style.padding = "5px";
    savedSignY.push(y);
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
}
function createLadder(hei, x, y) {
    var hold = document.getElementById("ladders").innerHTML;
    hold += "<div id='ladder" + String(ladderCount) + "' class='ladder'><img src='assets/ladder.png' width='80' height='2400' class='ladderImg'></div>";
    document.getElementById("ladders").innerHTML = hold;
    document.getElementById("ladder" + String(ladderCount)).style.height = String(hei) + "px";
    document.getElementById("ladder" + String(ladderCount)).style.left = String(x) + "px";
    document.getElementById("ladder" + String(ladderCount)).style.bottom = String(y) + "px";
    ladderBoxes.push(document.getElementById("ladder" + String(ladderCount)).getBoundingClientRect());
    characterLadderRange.push(false);
    savedLadderY.push(y);
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
    standInventory.push(standArray);
    standInventoryIDs.push(itemArray);
    standPrices.push(priceArray);
    standDirection.push(direction);
    standBoxes.push(document.getElementById("stand" + String(standCount)).getBoundingClientRect());
    summonCreepers(1, standX(standCount), y, standCount);
    standCount++;
}
function createFan(x, y) {
    var eef = document.createElement("div");
    eef.id = "fan" + String(fanCount);
    document.getElementById("fans").appendChild(eef);
    eef.className = "fan";
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
    fanBoxes.push(eef.getBoundingClientRect());
    decorDotsForFan(fanCount);
    fanCount++;
}
function removeFloor() {
    document.getElementById("block0").remove();
    blockBoundingBoxes[0] = 0;
}
function rotateFanBlades() {
    if (fanFrame == 29) {
        fanFrame = 0;
    } else {
        fanFrame++;
    }
    for (var i = 0; i < fanCount; i++) {
        document.getElementById("fan" + String(i) + "blade").style.width = String(Math.floor(Math.abs(284 * Math.sin((fanFrame / 30) * Math.PI)))) + "px";
        document.getElementById("fan" + String(i) + "blade").style.left = String((284 - removePXfromStyle(document.getElementById("fan" + String(i) + "blade").style.width)) / 2 + 8) + "px";
    }
}
function reset() {
    document.getElementById("blocks").innerHTML = "";
    document.getElementById("fans").innerHTML = "";
    document.getElementById("arrows").innerHTML = "";
    document.getElementById("signs").innerHTML = "";
    document.getElementById("tradeItems").innerHTML = "";
    document.getElementById("ladders").innerHTML = "";
    document.getElementById("crates").innerHTML = "";
    document.getElementById("creepers").innerHTML = "";
    document.getElementById("standSquares").innerHTML = "";
    document.getElementById("decorDots").innerHTML = "";
    document.getElementById("explosions").innerHTML = "";

    startX = [];
    startY = [];
    bufferX = [];
    bufferY = [];
    creeperLocation = [];
    creeperCount = 0;
    characterLocation = [0, 0];
    characterBox = document.getElementById("characterCreeper").getBoundingClientRect();
    creeperBoxes = [];
    objectUnderCharacter;
    objectIDUnderCharacter = 0;
    objectUnderCreeper = [];
    objectIDUnderCreeper = [];
    characterLadderID = 0;
    previousAirFrame = [];
    previousAirFrameBottom = [];
    previousAirFrameTemplate = [];
    previousFanFrame = [];
    characterInFan = false;
    creeperInFan = [];
    characterVector = 0;
    characterExplosionVector = 0;
    creeperVector = [];
    creeperExplosionVector = [];
    ladderFall = false;
    characterVert = 0;
    characterLadderVert = 0;
    creeperVert = [];
    creeperLadderVert = [];
    creeperRange = [];
    creeperRangeTemp = [];
    xLeftOverride = false;
    xRightOverride = false;
    characterOnGround = true;
    creeperOnGround = [];
    characterScreenOffset = 0;
    jumpKeyHeld = false;
    signCount = 0;
    arrowCount = 0;
    total = "";
    characterMoney = 13775;
    characterInventory = [];
    inventoryShown = false;
    standInventoryShown = false;
    globalColor = [63, 127, 255];
    movementTimeouts = [];
    blockElements = [];
    blockBoundingBoxes = [];
    ladderBoxes = [];
    fallCTimeouts = [];
    crateCount = 0;
    crateLocation = [];
    tntLocation = [];
    tntx10Location = [];
    tntx100Location = [];
    tntx1000Location = [];
    tnts = [];
    fanLocation = [];
    fanBoxes = [];
    junpOrNot = [];
    junps = [];
    ladderCount = 0;
    standCount = 0;
    fanCount = 0;
    tntCount = 0;
    tntx10Count = 0;
    tntx100Count = 0;
    tntx1000Count = 0;
    characterOnLadder = false;
    creeperOnLadder = [];
    creeperSavedLadderID = [];
    characterLadderRange = [];
    creeperLadderCheck = [];
    creeperLadderState = [];
    creeperLadderReset = [];
    creeperFanStack = [];
    savedBlockY = [];
    savedLadderY = [];
    savedSignY = [];
    savedArrowY = [];
    savedStandY = [];
    standItemIDs = [];
    standInventory = [];
    standInventoryIDs = [];
    standPrices = [];
    standDirection = [];
    creeperManning = [];
    standManning = [];
    currentBuyAmount = 0;
    openedStandID = 0;
    selectedPrice = 0;
    selectedItemID = 0;
    subtotal = 0;
    selectedCharacterID = -1;
    characterStandSquareBox;
    heldItemDirectionOffset = 0;
    sufficientFunds = true;
    nullCheck = true;
    priorLadderCheck = false;
    priorVertCheck = false;
    priorPriorCheck = false;
    standBoxes = [];
    standSquareBoxes = [];
    preStandCheck = [];
    standCheck = [];
    elementlocation = [];
    placeObject = false;
    mouseX = 0;
    mouseY = 0;
    fanFrame = 0;
    dotTick = 0;
    dotFrame = [];
    savedTNTBlocks = [];
    saved10xTNTBlocks = [];
    saved100xTNTBlocks = [];
    saved1000xTNTBlocks = [];
    runServerTick = true;
    explosionFrameCount = [];
    explosionCount = 0;
    for (var i = 0; i < 10000; i++) {
        dotFrame.push(0);
    }

    //spawn
    characterLocation = [50, 100];
    jumb();

    //debugLadder
    createLadder(0, -100, -10);

    //mapNecessities
    createBlock(window.innerWidth, 100, 0, 0);
}
var validFunctionList = [
"faviconUpdate",
"lookAround",
"moveToCoordinates",
"moveFrame",
"clear",
"elementDisplayState",
"getStyleColor",
"standX",
"getMoneyString",
"removePXfromStyle",
"flipBoolDisplayValue",
"cycle",
"cycle2",
"cycle3",
"updateBlockPlacement",
"getClosestBlock",
"implyHigherY",
"getClosestBlockOffset",
"getBPGX",
"detectSelected",
"limitStringToNumbers",
"fixAmountInput",
"changeAmountInput",
"junpCheck",
"ladderFrameC",
"lookAtDestination",
"summonCreepers",
"moveCharacterX",
"updateCharacterPos",
"moveCreeperX",
"swapFrame",
"removeTradeElement",
"changePreStandCheck",
"updateVerticalOffset",
"forceResetLadderC",
"updateCreeperPos",
"openStandInventory",
"updateInventory",
"updateItems",
"updateStandItems",
"getColorFromRarity",
"changeHeldItem",
"updateMoneySpan",
"updateSelectedItemImg",
"addItemToInventory",
"removeItemFromInventory",
"buyItem",
"ladderFrame",
"faceJumb",
"createBlock",
"updateBlockPos",
"updateLadderPos",
"updateSignPos",
"updateArrowPos",
"updateStandPos",
"updateFanPos",
"updateTNTY",
"updateBoxes",
"explode",
"summonExplosionParticle",
"explosionFrame",
"boundingBoxCheck",
"updateCharacterStandSquare",
"jump",
"jumb",
"gravityFrame",
"gframe2",
"blocksCheck",
"vertFrame",
"fall",
"fallC",
"jumpC",
"jumbC",
"gravityFrameC",
"gframe2C",
"vertFrameC",
"blocksCheckC",
"updateCratePos",
"clickedGuide",
"detectNearTNTs",
"fixMouseX",
"updateMouseClicker",
"decorDotsForFan",
"updateDot",
"placeCrate",
"placeBigCrate",
"placeDoubleBigCrate",
"placeTNT",
"place10xTNT",
"place100xTNT",
"place1000xTNT",
"deleteTNT",
"delete10xTNT",
"delete100xTNT",
"delete1000xTNT",
"createSign",
"createArrow",
"createAngledArrow",
"createLadder",
"createStand",
"createFan",
"removeFloor",
"rotateFanBlades"
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
var thig24 = setInterval(rotateFanBlades, (1000 / 60));

//spawn
characterLocation = [50, 100];
jumb();

//debugLadder
createLadder(0, -100, -10);

//mapNecessities
createBlock(window.innerWidth, 100, 0, 0);
var left = "left";
var right = "right";

//map

//items

//favicon
function faviconUpdate() {
    var random = Math.floor(Math.random() * 9);
    document.getElementById("fav").href = "assets/favicon/favicon" + String(random) + ".png";
    setTimeout(faviconUpdate, (Math.floor(Math.random() * 8000) + 2000));
}
faviconUpdate();

//VariableCheck