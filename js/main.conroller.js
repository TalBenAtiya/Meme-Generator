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

function renderGallery() {
    const imgs = getGalleryImg()
    const strsHTML = imgs.map(img => `<img onclick="onImgClick(${img.id})" src="${img.url}" alt="">`).join('')

    const elGrid = document.querySelector('.grid-container')
    elGrid.innerHTML = strsHTML
}


function onImgClick(id) {
    // resizeCanvas()
    const editor = document.querySelector('.editor')
    editor.hidden = false
    renderCanvas(id)
}

function renderCanvas(id){
    setImgOnCanvas(id)
}

function setImgOnCanvas(id , lineIdx = 0) {
    let meme = getMemeForDisplay(id)
    let img = new Image()
    img.src = `./img/${id}.jpg`;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
        gCtx.font = `${meme.lines[lineIdx].size}px  Ariel`;
        gCtx.textAlign = `${meme.lines[lineIdx].align}`;
        gCtx.strokeStyle = `${meme.lines[lineIdx].strokeClr}`;
        gCtx.lineWidth = 8;
        gCtx.strokeText(`${meme.lines[lineIdx].txt}`, gElCanvas.width / 2, 0 + 50);
        gCtx.fillStyle = 'white';
        gCtx.fillText(`${meme.lines[lineIdx].txt}`, gElCanvas.width / 2, 0 + 50);
    }
}

function resizeCanvas() {
    const elContainer = document.querySelector('.canvas-container')
    gElCanvas.width = elContainer.offsetWidth
    gElCanvas.height = elContainer.offsetHeight 
}


function onChangeTxt(txt){
    

}