"use strict"
let gImgId = 1
let gMeme

let gImgs = [
    { id: gImgId++, url: './img/1.jpg', keywords: ['politicians', 'funny'] },
    { id: gImgId++, url: './img/2.jpg', keywords: ['animals', 'cute'] },
    { id: gImgId++, url: './img/3.jpg', keywords: ['baby', 'animals', 'cute'] },
    { id: gImgId++, url: './img/4.jpg', keywords: ['cute', 'animals',] },
    { id: gImgId++, url: './img/5.jpg', keywords: ['success', 'happy', 'classic'] },
    { id: gImgId++, url: './img/6.jpg', keywords: ['funny', 'classic',] },
    { id: gImgId++, url: './img/7.jpg', keywords: ['funny', 'happy',] },
    { id: gImgId++, url: './img/8.jpg', keywords: ['movies', 'happy',] },
    { id: gImgId++, url: './img/9.jpg', keywords: ['laugh', 'classic'] },
    { id: gImgId++, url: './img/10.jpg', keywords: ['laugh', 'politicians'] },
    { id: gImgId++, url: './img/11.jpg', keywords: ['movies', 'boxing'] },
    { id: gImgId++, url: './img/12.jpg', keywords: ['funny', 'classic' , 'celebrity'] },
    { id: gImgId++, url: './img/13.jpg', keywords: ['movies', 'classic', 'celebrity'] },
    { id: gImgId++, url: './img/14.jpg', keywords: ['movies', 'classic', 'celebrity'] },
    { id: gImgId++, url: './img/15.jpg', keywords: ['movies', 'classic', 'celebrity'] },
    { id: gImgId++, url: './img/16.jpg', keywords: ['movies', 'funny', 'laugh'] },
    { id: gImgId++, url: './img/17.jpg', keywords: ['politicians',] },
    { id: gImgId++, url: './img/18.jpg', keywords: ['movies', 'classic'] },
]

function getMeme() {
    return gMeme

}

function setMeme(id) {
    gMeme = {
        selectedImgId: id,
        selectedLineIdx: 0,
        lines: [
            {
                txt: 'Change Txt',
                font: 'Impact',
                size: 30,
                align: 'center',
                color: 'white',
                strokeClr: 'black',
                pos: { x: gElCanvas.width / 2, y: 50 },
            },
        ],
    }

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

function removeMemeLine(){
    gMeme.lines.splice(gMeme.selectedLineIdx , 1)
    gMeme.selectedLineIdx--
}

function setLineTxt(txt) {
    gMeme.lines[gMeme.selectedLineIdx].txt = txt
}

function memeTxtMove(str){
    if (str === 'up'){
        gMeme.lines[gMeme.selectedLineIdx].pos.y -= 10
    } else if (str === 'down'){
        gMeme.lines[gMeme.selectedLineIdx].pos.y += 10 
    }


}

function memeTxtAlign(str){
    gMeme.lines[gMeme.selectedLineIdx].align = str
}

function memeFontStyle(str){
    gMeme.lines[gMeme.selectedLineIdx].font = str
}

function lineFontColor(color){
    gMeme.lines[gMeme.selectedLineIdx].color = color
}

function lineStrokeColor(color){
    gMeme.lines[gMeme.selectedLineIdx].strokeClr = color 
}

function changeMemeLine(){
    gMeme.selectedLineIdx++
    if ( gMeme.selectedLineIdx >= gMeme.lines.length) gMeme.selectedLineIdx = 0
}

function memeFontSize(str){
    if (str === 'minus'){
        gMeme.lines[gMeme.selectedLineIdx].size -= 3
    } else if (str === 'plus'){
        gMeme.lines[gMeme.selectedLineIdx].size += 3
    }
}

function getGalleryImg() {
    return gImgs
}
