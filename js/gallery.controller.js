'use strict'

function renderGallery() {
    const imgs = getGalleryImg()
    const strsHTML = imgs.map(img => `<img onclick="onSetImg(${img.id})" src="${img.url}" alt="">`).join('')

    const elGrid = document.querySelector('.grid-container')
    elGrid.innerHTML = strsHTML
}


function onSetImg(id) {
    const editor = document.querySelector('.editor')
    editor.hidden = false
    setMeme(id)
    renderMeme(id)
}
