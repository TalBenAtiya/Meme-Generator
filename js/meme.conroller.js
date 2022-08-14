'use strict'

const gTouchEvs = ['touchstart', 'touchmove', 'touchend']
let gElCanvas
let gCtx

function onInit() {
    gElCanvas = document.querySelector('.canvas');
    gCtx = gElCanvas.getContext('2d');
    addListeners()
    renderFilterOpts()
    renderGallery()
}

function renderMeme() {
    
    const meme = getMeme()
    let img = new Image()
    img.src = `./img/${meme.selectedImgId}.jpg`;
    img.onload = () => {
        gElCanvas.height = (img.height / img.width) * gElCanvas.width
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
        meme.lines.forEach(line => {

            gCtx.font = `${line.size}px ${line.font}`;
            gCtx.textAlign = line.align;
            gCtx.strokeStyle = line.strokeClr;
            gCtx.lineWidth = `${line.size}` / 10;
            gCtx.strokeStyle = line.strokeClr
            gCtx.shadowColor = 'black'
            gCtx.shadowOffsetX = gCtx.shadowOffsetY = 5
            gCtx.shadowBlur = 10
            gCtx.fillStyle = line.color;
            gCtx.strokeText(line.txt, line.pos.x, line.pos.y);
            gCtx.fillText(line.txt, line.pos.x, line.pos.y);
        }
        )
    }
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

function onAddLine(txt) {
    addMemeLine(txt)
    renderMeme()

    const meme = getMeme()
    document.querySelector('.meme-text').value = meme.lines[meme.selectedLineIdx].txt
}

function onRemoveLine() {
    removeMemeLine()
    renderMeme()
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

function onFontStyle(str) {
    memeFontStyle(str)
    renderMeme()
}

function onDownloadMeme(elLink) {
    const data = downloadMeme()
    elLink.href = data;
    elLink.download = 'My-Meme'
}

function onShareMeme() {
    shareMeme()
}

function onRandomMeme() {
    const imgId = createRandomMeme()
    onSetImg(imgId)
    renderMeme()
}

function addListeners() {
    addMouseListeners()
    addTouchListeners()
}

function addMouseListeners() {
    gElCanvas.addEventListener('mousemove', onMove)
    gElCanvas.addEventListener('mousedown', onDown)
    gElCanvas.addEventListener('mouseup', onUp)
}

function addTouchListeners() {
    gElCanvas.addEventListener('touchmove', onMove)
    gElCanvas.addEventListener('touchstart', onDown)
    gElCanvas.addEventListener('touchend', onUp)
}

function onDown(ev) {
    ev.preventDefault();
    const pos = getEvPos(ev)
    const startX = pos.x
    const startY = pos.y
    isLineClicked(startX, startY)

    const meme = getMeme()
    document.querySelector('.meme-text').value = meme.lines[meme.selectedLineIdx].txt
}

function onMove(ev) {
    const meme = getMeme()
    if (!meme.lines[meme.selectedLineIdx].isDrag) return
    if (meme.lines[meme.selectedLineIdx] < 0) return
    const pos = getEvPos(ev)
    const dx = pos.x - meme.lines[meme.selectedLineIdx].pos.x
    const dy = pos.y - meme.lines[meme.selectedLineIdx].pos.y
    moveText(dx, dy)
    renderMeme()
}

function onUp() {
    setTextDrag(false)
}

function getEvPos(ev) {
    let pos = {
        x: ev.offsetX,
        y: ev.offsetY
    }
    if (gTouchEvs.includes(ev.type)) {
        ev.preventDefault()
        ev = ev.changedTouches[0]
        pos = {
            x: ev.pageX - ev.target.offsetLeft,
            y: ev.pageY - ev.target.offsetTop
        }
    }
    return pos
}

function onUploadImg(ev, onImageReady){
    var reader = new FileReader()

    reader.onload = (event) => {
        var img = new Image()
        img.src = event.target.result
        img.onload = onImageReady.bind(null, img)
        reader.readAsDataURL(ev.target.files[0])
    }

}