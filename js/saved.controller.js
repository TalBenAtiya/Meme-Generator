'use strict'

function onSaveMeme() {
    const imgUrl = gElCanvas.toDataURL();
    saveMeme(imgUrl)
}

function renderSavedMemes() {
    const memes = getSavedMemesForDisplay()
    console.log(memes);
    const strsHTML = memes.map(meme => `<img onclick="onEditMeme('${meme.id}')" src="${meme.imgUrl}" alt="">`)
    const elGrid = document.querySelector('.grid-container')
    elGrid.innerHTML = strsHTML.join('')

    
}


function onEditMeme(id) {
    console.log(id);
    const editor = document.querySelector('.editor')
    editor.hidden = false
    renderSavedMeme(id)

    document.querySelector('main').hidden = true
}

function renderSavedMeme(id) {
    const meme = setSavedMeme(id)
    const currMeme = meme[0]

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