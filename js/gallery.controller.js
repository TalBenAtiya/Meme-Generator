'use strict'

function renderGallery() {
    let imgs = getGalleryImg()
    const strsHTML = imgs.map(img => `<img class="${img.size}" onclick="onSetImg(${img.id})" src="${img.url}" alt="">`)

    const elGrid = document.querySelector('.grid-container')
    elGrid.innerHTML = strsHTML.join('')
}

function onSetImg(id) {
    const editor = document.querySelector('.editor')
    editor.hidden = false
    setMeme(id)
    renderMeme()

    document.querySelector('main').hidden = true
    document.querySelector('.filter-container').hidden = true
}

function backToGallery() {
    document.querySelector('.editor').hidden = true
    document.querySelector('main').hidden = false
    document.querySelector('.filter-container').hidden = false

    renderGallery()
}

function openUserOpts() {
    const elList = document.querySelector('.main-header div')
    elList.classList.toggle('list')

    const elHeader = document.querySelector('.main-header')
    elHeader.classList.toggle('position')
}

function onFilterBy(el) {
    const str = el.innerText
    changeFilterBy(str)
    changeFilterMapValue(str)
    renderFilterOpts()
    renderGallery()

}

function renderFilterOpts() {
    const elSortOpts = document.querySelector('.sort-opts')
    const filterWordMap = getWordMap()
    elSortOpts.innerHTML = ''
    for (const word in filterWordMap) {
        const value = filterWordMap[word];
        elSortOpts.innerHTML += `<span style="font-size:${value}px" onclick="onFilterBy(this)">${word}</span>`
    }
}

function onFilterByText(str) {
    changeFilterBy(str)
    renderGallery()
}
