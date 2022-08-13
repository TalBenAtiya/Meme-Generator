'use strict'

function renderGallery() {
    let imgs = getGalleryImg()
    const strsHTML = imgs.map(img => `<img onclick="onSetImg(${img.id})" src="${img.url}" alt="">`)

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

    elSortOpts.innerHTML =
        `<span style="font-size: ${gWordFilterMap.all}px" onclick="onFilterBy(this)">all</span>
         <span style="font-size: ${gWordFilterMap.funny}px" onclick="onFilterBy(this)">funny</span>
         <span style="font-size:${gWordFilterMap.animals}px" onclick = "onFilterBy(this)">animals</span >
         <span style="font-size:${gWordFilterMap.cute}px" onclick="onFilterBy(this)">cute</span>
         <span style="font-size:${gWordFilterMap.baby}px" onclick="onFilterBy(this)">baby</span>
         <span style="font-size:${gWordFilterMap.classic}px" onclick="onFilterBy(this)">classic</span>
         <span style="font-size:${gWordFilterMap.movies}px" onclick="onFilterBy(this)">movies</span>
         <span style="font-size:${gWordFilterMap.politicians}px" onclick="onFilterBy(this)">politicians</span>
         <span style="font-size:${gWordFilterMap.happy}px" onclick="onFilterBy(this)">happy</span>`
}

function onFilterByText(str){
changeFilterBy(str)
renderGallery()
}
