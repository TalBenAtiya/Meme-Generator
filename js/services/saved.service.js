'use strict'

let gSavedMemes = []


function getSavedMemesForDisplay(){
    gSavedMemes = loadFromStorage('memesDB')
    return gSavedMemes
}

// function saveMeme(url) {
//     let meme = getMeme()
//     meme.id = makeId()
//     meme.imgUrl = url
//     gSavedMemes.push(meme)
//     _saveMemeToStorage()
// }

function saveMeme(url) {
    let meme = getMeme()
    if (meme.id === undefined) {
        meme.id = makeId()
        meme.imgUrl = url
        gSavedMemes.push(meme)
    } else {
        const memeIdx = getSavedMemeIdxById(meme.id)
        meme.imgUrl = url
        gSavedMemes.splice(memeIdx, 1, meme)
    }
    _saveMemeToStorage()
}

function setSavedMeme(id){
    const currMeme = gSavedMemes.filter( meme => meme.id === id)
    return currMeme[0]
}

function makeId(length = 3) {
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    var txt = ''
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return txt
}

function updateMeme(currMeme){
    gMeme = currMeme
}

function getSavedMemeIdxById(id){
    return gSavedMemes.findIndex(meme => meme.id === id)
}