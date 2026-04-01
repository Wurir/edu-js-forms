const inputEl = document.querySelector('input')
const ulEl = document.querySelector('.images-list')
const liPrototypeEl = document.querySelector('.images-list__item--prototype')

inputEl.addEventListener('change', handleChange)

function handleChange(e){
    e.preventDefault()
}

function createLiFromPrototype(){
    const newLi = liPrototypeEl.cloneNode
    const headerEl = newLi.querySelector('.images-list__item-name')
    const imgEl = newLi.querySelector('.images-list__item-img')
    const footerEl = newLi.querySelector('.images-list__item-size')
}