'use strict'
let gElCanvas
let gCtx

function onInit() {
    gElCanvas = document.querySelector('.canvas');
    gCtx = gElCanvas.getContext('2d');
    renderGallery()

    // window.addEventListener('resize', () => {
    //     resizeCanvas()
    //     renderCanvas()
    // })  
}

function renderMeme(id) {
    const meme = getMeme()
    let img = new Image()
    img.src = `./img/${meme.selectedImgId}.jpg`;
    gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
    img.onload = () => {
        meme.lines.map(line => {

            gCtx.font = `${line.size}px  serif`;
            gCtx.textAlign = `${line.align}`;
            gCtx.strokeStyle = `${line.strokeClr}`;
            gCtx.lineWidth = 7;
            gCtx.strokeText(`${line.txt}`, line.pos.x, line.pos.y);
            gCtx.fillStyle = 'white';
            gCtx.fillText(`${line.txt}`, line.pos.x, line.pos.y);
        }
        )
    }

    drawSelectionRect()
}


function changeSelectedLine() {
    changeMemeLine()
    renderMeme()

    const meme = getMeme()
    document.querySelector('.meme-text').value = meme.lines[meme.selectedLineIdx].txt
}


function onSetLineTxt(txt) {
    setLineTxt(txt)
    renderMeme()
}

function onAddLine() {
    addMemeLine()
    renderMeme()

    const meme = getMeme()
    document.querySelector('.meme-text').value = meme.lines[meme.selectedLineIdx].txt
}

function onRemoveLine(){
    removeMemeLine()
    renderMeme()
}

function drawSelectionRect() {
    const meme = getMeme()
    let line = meme.lines[meme.selectedLineIdx]

    gCtx.beginPath();
    gCtx.rect(0, line.pos.y - (line.size), gElCanvas.width, line.size + 5);
    gCtx.lineWidth = 2;
    gCtx.strokeStyle = 'red';
    gCtx.stroke();
    gCtx.closePath();

}

function onTxtMove(str){
    memeTxtMove(str)
    renderMeme()
}

function onTxtAlign(str){
    memeTxtAlign(str)
    renderMeme()
}

function changeFontSize(str){
    memeFontSize(str)
    renderMeme()
}

// function resizeCanvas() {
//     const elContainer = document.querySelector('.canvas-container')
//     gElCanvas.width = elContainer.offsetWidth
//     gElCanvas.height = elContainer.offsetHeight
// }