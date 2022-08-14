'use strict'

function onSaveMeme() {
    const imgUrl = gElCanvas.toDataURL();
    saveMeme(imgUrl)
    flashMsg()
}

function renderSavedMemes() {
    document.querySelector('.editor').hidden = true
    document.querySelector('main').hidden = false
    document.querySelector('.filter-container').hidden = false

    const memes = getSavedMemesForDisplay()
    if (memes.length === 0) return
    const strsHTML = memes.map(meme => `<img onclick="onEditMeme('${meme.id}')" src="${meme.imgUrl}" alt="">`)
    const elGrid = document.querySelector('.grid-container')
    elGrid.innerHTML = strsHTML.join('')

    
}

function onEditMeme(id) {
    const editor = document.querySelector('.editor')
    editor.hidden = false
    renderSavedMeme(id)

    document.querySelector('main').hidden = true
}

function renderSavedMeme(id) {
    const currMeme = setSavedMeme(id)
    updateMeme(currMeme)

    let img = new Image()
    img.src = `./img/${currMeme.selectedImgId}.jpg`;
    gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
    img.onload = () => {
        currMeme.lines.forEach(line => {

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
}

function flashMsg(){
    const elMsg = document.querySelector('.flash-msg')
    elMsg.style.opacity = '100%'
    setTimeout( () => {elMsg.style.opacity = 0 }, 2000)
}