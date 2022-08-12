"use strict"

let gMeme
let gSavedMemes = []
let gRandomLines = ['i like falafel!', 'god damn!', 'jiggle wiggle', 'oh snap', 'hehe that dog', 'LMAO','frogy wogy', 'what are those','hop hop', 'funny buns', 'LOL', 'your mum', 'oew pew', 'penny weeny','loco coco' ]
let isFlexible = false

function getMeme() {
    return gMeme

}

function setMeme(id) {
    gMeme = {
        selectedImgId: isFlexible ? getRandomInt(1, gImgs.length) : id,
        selectedLineIdx: 0,
        lines: [
            {
                txt: isFlexible ? gRandomLines[getRandomInt(0, gRandomLines.length - 1)] : 'Change Text',
                font: 'Impact',
                size: 30,
                align: 'center',
                color: 'white',
                strokeClr: 'black',
                pos: { x: gElCanvas.width / 2, y: 50 },
            },
        ],
    }
    isFlexible = false
}

function addMemeLine() {
    let pos
    if (gMeme.selectedLineIdx >= 1) {
        pos = { x: gElCanvas.width / 2, y: gElCanvas.height / 2 }
    } else {
        pos = { x: gElCanvas.width / 2, y: gElCanvas.height - 50 }
    }
    gMeme.lines.push(
        {
            txt: 'Change Txt',
            font: 'impact',
            size: 30,
            align: 'center',
            color: 'white',
            strokeClr: 'black',
            pos: pos,
        }
    )
    gMeme.selectedLineIdx++
    console.log(gMeme.selectedLineIdx);
}

function removeMemeLine() {
    gMeme.lines.splice(gMeme.selectedLineIdx, 1)
    gMeme.selectedLineIdx--
}

function setLineTxt(txt) {
    gMeme.lines[gMeme.selectedLineIdx].txt = txt
}

function memeTxtMove(str) {
    if (str === 'up') {
        gMeme.lines[gMeme.selectedLineIdx].pos.y -= 10
    } else if (str === 'down') {
        gMeme.lines[gMeme.selectedLineIdx].pos.y += 10
    }


}

function memeTxtAlign(str) {
    gMeme.lines[gMeme.selectedLineIdx].align = str
}

function memeFontStyle(str) {
    gMeme.lines[gMeme.selectedLineIdx].font = str
}

function lineFontColor(color) {
    gMeme.lines[gMeme.selectedLineIdx].color = color
}

function lineStrokeColor(color) {
    gMeme.lines[gMeme.selectedLineIdx].strokeClr = color
}

function changeMemeLine() {
    gMeme.selectedLineIdx++
    if (gMeme.selectedLineIdx > gMeme.lines.length) gMeme.selectedLineIdx = 0
}

function memeFontSize(str) {
    if (str === 'minus') {
        gMeme.lines[gMeme.selectedLineIdx].size -= 3
    } else if (str === 'plus') {
        gMeme.lines[gMeme.selectedLineIdx].size += 3
    }
}

function saveMeme(url) {
    gMeme.imgUrl = url
    gSavedMemes.push(gMeme)
    _saveMemeToStorage()
}

function _saveMemeToStorage() {
    saveToStorage('memesDB', gSavedMemes)
}

function createRandomMeme(){
    gMeme = {
        selectedImgId: getRandomInt(1, gImgs.length),
        selectedLineIdx: 0,
        lines: [
            {
                txt: gRandomLines[getRandomInt(0, gRandomLines.length - 1)],
                font: 'Impact',
                size: 30,
                align: 'center',
                color: 'white',
                strokeClr: 'black',
                pos: { x: gElCanvas.width / 2, y: 50 },
            },
        ],
    }
    isFlexible = true
    return gMeme.selectedImgId
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
