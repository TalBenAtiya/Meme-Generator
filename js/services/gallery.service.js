'use strict'

const gWordFilterMap = { 'all': 25, 'funny': 20, 'animals': 15, 'cute': 10, 'baby': 13, 'classic': 22, 'movies': 10, 'politicians': 12, 'happy': 15, }
let gFilterBy = 'all'
let gImgId = 1

let gImgs = [
    { id: gImgId++, url: './img/1.jpg', keywords: ['politicians', 'funny',], size:'xs'},
    { id: gImgId++, url: './img/2.jpg', keywords: ['animals', 'cute',], size:'xxs' },
    { id: gImgId++, url: './img/3.jpg', keywords: ['baby', 'animals', 'cute',], size: 'xs' },
    { id: gImgId++, url: './img/4.jpg', keywords: ['cute', 'animals',], size: 'xxs'  },
    { id: gImgId++, url: './img/5.jpg', keywords: ['baby', 'happy', 'classic',], size: 'xxs' },
    { id: gImgId++, url: './img/6.jpg', keywords: ['funny', 'classic',], size: 'xs' },
    { id: gImgId++, url: './img/7.jpg', keywords: ['funny', 'happy',], size: 'xxs' },
    { id: gImgId++, url: './img/8.jpg', keywords: ['movies', 'happy',], size: 'm' },
    { id: gImgId++, url: './img/9.jpg', keywords: ['laugh', 'classic',], size:'xs'},
    { id: gImgId++, url: './img/10.jpg', keywords: ['laugh', 'politicians',], size: 's'},
    { id: gImgId++, url: './img/11.jpg', keywords: ['movies', 'boxing',], size: 'xxs' },
    { id: gImgId++, url: './img/12.jpg', keywords: ['funny', 'classic', 'celebrity',], size: 's'},
    { id: gImgId++, url: './img/13.jpg', keywords: ['movies', 'classic', 'celebrity',], size: 'xxs' },
    { id: gImgId++, url: './img/14.jpg', keywords: ['movies', 'classic', 'celebrity',], size:'xs'  },
    { id: gImgId++, url: './img/15.jpg', keywords: ['movies', 'classic', 'celebrity',], size:'xs'  },
    { id: gImgId++, url: './img/16.jpg', keywords: ['movies', 'funny', 'laugh',], size:'xs' },
    { id: gImgId++, url: './img/17.jpg', keywords: ['politicians',], size:'xxs'},
    { id: gImgId++, url: './img/18.jpg', keywords: ['movies', 'classic',], size:'xxs' },
    { id: gImgId++, url: './img/19.jpg', keywords: ['celebrity',], size:'xs' },
    { id: gImgId++, url: './img/20.jpg', keywords: ['happy',], size:'xs' },
    { id: gImgId++, url: './img/21.jpg', keywords: ['movie', 'classic'], size:'xxs' },
    { id: gImgId++, url: './img/22.jpg', keywords: ['baby', 'funny'], size:'m' },
    { id: gImgId++, url: './img/23.jpg', keywords: ['politicians',], size:'s' },
    { id: gImgId++, url: './img/24.jpg', keywords: ['animals', 'funny'], size:'s' },
    { id: gImgId++, url: './img/25.jpg', keywords: ['celebrity',], size:'l' },
]

function getGalleryImg() {
    if (gFilterBy === 'all' || gFilterBy === '') return gImgs
    return gImgs.filter(img => img.keywords.join('|').includes(gFilterBy))
}

function changeFilterBy(str) {
    gFilterBy = str
}

function changeFilterMapValue(str) {
    if (gWordFilterMap[str] >= 50) return
    gWordFilterMap[str]++
    return gWordFilterMap
}

function getWordMap() {
    return gWordFilterMap
}