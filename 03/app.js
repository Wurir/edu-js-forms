const inputEl = document.querySelector('input')
const ulEl = document.querySelector('.images-list')
const liPrototypeEl = document.querySelector('.images-list__item--prototype')

inputEl.addEventListener('change', handleChange)

function handleChange(e){
    e.preventDefault()
}