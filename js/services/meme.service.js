"use strict"
let gImgId = 1
let gMeme

let gImgs = [
    { id: gImgId++, url: './img/1.jpg', keywords: ['politicians', 'funny'] },
    { id: gImgId++, url: './img/2.jpg', keywords: ['animals', 'cute'] },
    { id: gImgId++, url: './img/3.jpg', keywords: ['baby', 'animals', 'cute'] },
    { id: gImgId++, url: './img/4.jpg', keywords: ['animals', 'cute'] },]




function getMemeForDisplay(id, lineIdx = 0) {
    // if (!id && !lineIdx) return
    gMeme = {
        selectedImgId: null,
        selectedLineIdx: null,
        lines: [{
            txt: 'Change Text Here',
            size: 30,
            align: 'center',
            color: 'white',
            strokeClr: 'black',
        }]
    }
    return gMeme
}




function getGalleryImg() {
    return gImgs
}

