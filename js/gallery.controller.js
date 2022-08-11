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

    document.querySelector('main').hidden = true

    // const elFooter = document.querySelector('.main-footer')
    // elFooter.style.position = 'absolute'
    // elFooter.style.bottom = '0'
}

function backToGallery(){
    document.querySelector('.editor').hidden = true
    document.querySelector('main').hidden = false

    // const elFooter = document.querySelector('.main-footer')
    // elFooter.style.position = 'static'
}

function openUserOpts(){
    const elList = document.querySelector('.main-header div')
    elList.classList.toggle('list')

    const elHeader = document.querySelector('.main-header')
    elHeader.classList.toggle('position')
}