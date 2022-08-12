'use strict'

const gWordFilterMap = { 'all': 25, 'funny': 20, 'animals': 15, 'cute': 10, 'baby': 13, 'classic': 22, 'movies': 10, 'politicians': 12, 'happy': 15, }
let gFilterBy = 'all'
let gImgId = 1

let gImgs = [
    { id: gImgId++, url: './img/1.jpg', keywords: ['politicians', 'funny',] },
    { id: gImgId++, url: './img/2.jpg', keywords: ['animals', 'cute',] },
    { id: gImgId++, url: './img/3.jpg', keywords: ['baby', 'animals', 'cute',] },
    { id: gImgId++, url: './img/4.jpg', keywords: ['cute', 'animals',] },
    { id: gImgId++, url: './img/5.jpg', keywords: ['baby', 'happy', 'classic',] },
    { id: gImgId++, url: './img/6.jpg', keywords: ['funny', 'classic',] },
    { id: gImgId++, url: './img/7.jpg', keywords: ['funny', 'happy',] },
    { id: gImgId++, url: './img/8.jpg', keywords: ['movies', 'happy',] },
    { id: gImgId++, url: './img/9.jpg', keywords: ['laugh', 'classic',] },
    { id: gImgId++, url: './img/10.jpg', keywords: ['laugh', 'politicians',] },
    { id: gImgId++, url: './img/11.jpg', keywords: ['movies', 'boxing',] },
    { id: gImgId++, url: './img/12.jpg', keywords: ['funny', 'classic', 'celebrity',] },
    { id: gImgId++, url: './img/13.jpg', keywords: ['movies', 'classic', 'celebrity',] },
    { id: gImgId++, url: './img/14.jpg', keywords: ['movies', 'classic', 'celebrity',] },
    { id: gImgId++, url: './img/15.jpg', keywords: ['movies', 'classic', 'celebrity',] },
    { id: gImgId++, url: './img/16.jpg', keywords: ['movies', 'funny', 'laugh',] },
    { id: gImgId++, url: './img/17.jpg', keywords: ['politicians',] },
    { id: gImgId++, url: './img/18.jpg', keywords: ['movies', 'classic',] },
]

function getGalleryImg() {
    console.log(gFilterBy);
    if (gFilterBy === 'all') return gImgs
   return gImgs.filter( img => img.keywords.includes(gFilterBy))

}

function changeFilterBy(str){
    gFilterBy = str
}

function changeFilterMapValue(str){
    if (gWordFilterMap[str] >= 50) return
    gWordFilterMap[str]++
    return gWordFilterMap
}