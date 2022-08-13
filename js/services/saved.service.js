'use strict'

let gSavedMemes = []


function getSavedMemesForDisplay(){
    gSavedMemes = loadFromStorage('memesDB')
    return gSavedMemes
}

function saveMeme(url) {
    let meme = getMeme()
    meme.id = makeId()
    meme.imgUrl = url
    gSavedMemes.push(meme)
    _saveMemeToStorage()
}

function setSavedMeme(id){
    const currMeme = gSavedMemes.filter( meme => meme.id === id)
    gMeme = currMeme
    return currMeme
}

function makeId(length = 3) {
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    var txt = ''
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return txt
}