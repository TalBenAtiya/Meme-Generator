"use strict"

let gMeme
let gRandomLines = ['I like falafel!', 'God damn!', 'Maybe you\'re right', 'Oh snap', 'Got your back', 'Let\'s get drunk!', 'Good vibes only', 'What are those?',]
let isFlexible = false

function getMeme() {
    return gMeme
}

function setMeme(id) {
    gMeme = {
        selectedImgId: id,
        selectedLineIdx: 0,
        lines: [
            {
                txt: isFlexible ? gRandomLines[getRandomInt(0, gRandomLines.length - 1)] : 'Upper Text',
                font: 'Impact',
                size: 30,
                align: 'center',
                color: 'white',
                strokeClr: 'black',
                pos: { x: gElCanvas.width / 2, y: 50 },
                isDrag: false,
            },
        ],
    }
    isFlexible = false
}

function addMemeLine(str) {
    let pos
    if (str) {
        pos = { x: gElCanvas.width / 2, y: gElCanvas.height / 2 }
        gMeme.lines.push(
            {
                txt: str,
                font: 'impact',
                size: 30,
                align: 'center',
                color: 'white',
                strokeClr: 'black',
                pos: pos,
            }
        )
        return
    } else {
        console.log(gMeme.selectedLineIdx);
        if (gMeme.selectedLineIdx < 1) {
            pos = { x: gElCanvas.width / 2, y: gElCanvas.height - 50 }
            gMeme.lines.push(
                {
                    txt: 'Bottom Text',
                    font: 'impact',
                    size: 30,
                    align: 'center',
                    color: 'white',
                    strokeClr: 'black',
                    pos: pos,
                }
            )
        } else {
            pos = { x: gElCanvas.width / 2, y: gElCanvas.height / 2 }
            gMeme.lines.push(
                {
                    txt: 'New Text',
                    font: 'impact',
                    size: 30,
                    align: 'center',
                    color: 'white',
                    strokeClr: 'black',
                    pos: pos,
                }
            )
        }
    }

    gMeme.selectedLineIdx++
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
    if (gMeme.selectedLineIdx >= gMeme.lines.length) gMeme.selectedLineIdx = 0
}

function memeFontSize(str) {
    if (str === 'minus') {
        gMeme.lines[gMeme.selectedLineIdx].size -= 3
    } else if (str === 'plus') {
        gMeme.lines[gMeme.selectedLineIdx].size += 3
    }
}

function _saveMemeToStorage() {
    saveToStorage('memesDB', gSavedMemes)
}

function createRandomMeme() {
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

function isLineClicked(startX, startY) {
    for (var i = 0; i < gMeme.lines.length; i++) {
        const { width } = gCtx.measureText(gMeme.lines[i].txt)
        if (textHittest(startX, startY, i, width)) {
            gMeme.selectedLineIdx = i
            gMeme.lines[gMeme.selectedLineIdx].isDrag = true

        }
    }
}

function textHittest(x, y, textIndex, width) {
    const line = gMeme.lines[textIndex];
    if (line.align === 'center') {
        return ( x > line.pos.x - (width / 2) && x < line.pos.x + width && line.pos.y <= y + line.size && line.pos.y >= y - line.size)
    }
    if (line.align === 'right') {
        return (line.pos.x >= x && line.pos.x <= x + width && line.pos.y <= y + line.size && line.pos.y >= y - line.size)
    }
    if (line.align === 'left') {
        return (x > line.pos.x && x < line.pos.x + (width + 40) && line.pos.y <= y + line.size && line.pos.y >= y - line.size)
    }
}

function moveText(dx, dy) {
    gMeme.lines[gMeme.selectedLineIdx].pos.x += dx
    gMeme.lines[gMeme.selectedLineIdx].pos.y += dy
}

function setTextDrag(bollean) {
    gMeme.lines[gMeme.selectedLineIdx].isDrag = bollean
}
