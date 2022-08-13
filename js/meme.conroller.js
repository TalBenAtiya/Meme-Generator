'use strict'
let gElCanvas
let gCtx

function onInit() {
    gElCanvas = document.querySelector('.canvas');
    gCtx = gElCanvas.getContext('2d');
    renderFilterOpts()
    renderGallery()
}

function renderMeme() {
    const meme = getMeme()
    let img = new Image()
    img.src = `./img/${meme.selectedImgId}.jpg`;
    gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
    img.onload = () => {
        meme.lines.forEach(line => {

            gCtx.font = `${line.size}px ${line.font}`;
            gCtx.textAlign = line.align;
            gCtx.strokeStyle = line.strokeClr;
            gCtx.lineWidth = 5;
            gCtx.strokeStyle = line.strokeClr
            gCtx.shadowColor = 'black'
            gCtx.shadowOffsetX = gCtx.shadowOffsetY = 3
            gCtx.shadowBlur = 5
            gCtx.fillStyle = line.color;
            gCtx.strokeText(line.txt, line.pos.x, line.pos.y);
            gCtx.fillText(line.txt, line.pos.x, line.pos.y);
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

function onRemoveLine() {
    removeMemeLine()
    renderMeme()
}

function drawSelectionRect() {
    const meme = getMeme()
    let line = meme.lines[meme.selectedLineIdx]

    gCtx.beginPath()
    gCtx.rect(0, line.pos.y - (line.size), gElCanvas.width, line.size + 10)
    gCtx.lineWidth = 1
    gCtx.strokeStyle = 'white'
    gCtx.shadowOffsetX = 0
    gCtx.shadowOffsetY = 0
    gCtx.shadowBlur = 0
    gCtx.stroke()
    gCtx.closePath()

}

function onTxtMove(str) {
    memeTxtMove(str)
    renderMeme()
}

function onTxtAlign(str) {
    memeTxtAlign(str)
    renderMeme()
}

function changeFontSize(str) {
    memeFontSize(str)
    renderMeme()
}

function onFontColor(color) {
    lineFontColor(color)
    renderMeme()
}

function onStrokeColor(color) {
    lineStrokeColor(color)
    renderMeme()
}

function onFontStyle(str){
    memeFontStyle(str)
    renderMeme()
}

function onDownloadMeme(elLink) {
   const data = downloadMeme()
   elLink.href = data;
   elLink.download = 'My-Meme'
}

function onShareMeme(){
    shareMeme()
}

function onRandomMeme(){
    const imgId = createRandomMeme()
    onSetImg(imgId)
    renderMeme()
}

