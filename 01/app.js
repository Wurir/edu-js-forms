const formEl = document.querySelector('form')
const ulEl = document.querySelector('.users-list')

formEl.addEventListener('submit', handleSubmit)

function handleSubmit(e){
    e.preventDefault()

    const firstNameInput = e.target.elements['firstName']
    const firstName = firstNameInput.value
    const lastNameInput = e.target.elements['lastName']
    const lastName = lastNameInput.value

    const classForLi = 'users-list__person'

    const newUserLi = createListElement(firstName, lastName, classForLi)
    ulEl.appendChild(newUserLi)

    firstNameInput.value = ''
    lastNameInput.value = ''
}

function createListElement(firstName, lastName, classForElement){
    const liEl = document.createElement('li')
    liEl.innerText = firstName + ' ' + lastName
    liEl.classList.add(classForElement)

    return liEl
}