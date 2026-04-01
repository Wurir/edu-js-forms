const inputEl = document.querySelector('input')
const ulEl = document.querySelector('.images-list')
const liPrototypeEl = document.querySelector('.images-list__item--prototype')

inputEl.addEventListener('change', handleChange)

function handleChange(e) {
    e.preventDefault()

    const userFiles = Array.from(e.target.files)
    displayImages(userFiles)

}

function createLiFromPrototype(data) {
    const newLi = liPrototypeEl.cloneNode(true)
    const headerEl = newLi.querySelector('.images-list__item-name')
    const imgEl = newLi.querySelector('.images-list__item-img')
    const footerEl = newLi.querySelector('.images-list__item-size')

    newLi.classList.remove('images-list__item--prototype')
    headerEl.innerText = data.name
    const src = URL.createObjectURL(data)
    imgEl.src = src
    const sizeInMb = bytesToMb(data.size)
    footerEl.innerText = sizeInMb

    return newLi
}

function displayImages(files) {
    if (files) {
        files.forEach(function (file) {
            if (file.type.includes('image')) {
                const newImg = createLiFromPrototype(file)
                ulEl.appendChild(newImg)
            }
        })
    }
}

function bytesToMb(data) {
    if (data) {
        return (data / (1024 * 1024)).toFixed(2) + ' MB'
    }
}