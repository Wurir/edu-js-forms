document.addEventListener('DOMContentLoaded', init)


const msgList = document.querySelector('.messages')

function init() {

    const formEl = document.querySelector('form')
    if (formEl) {
        formEl.addEventListener('submit', handleSubmit)

    }


}


function handleSubmit(e) {
    e.preventDefault()

    msgList.innerHTML = ''

    const errors = []

    const firstName = e.target.elements.firstName.value
    const lastName = e.target.elements.lastName.value
    const street = e.target.elements.street.value
    const houseNumber = e.target.elements.houseNumber.value
    const flatNumber = e.target.elements.flatNumber.value
    const zip = e.target.elements.zip.value
    const city = e.target.elements.city.value
    const voivodeship = e.target.elements.voivodeship.value

    if(isEmpty(firstName)){
        errors.push('Dane w polu imię są niepoprawne')
    }

    if(isEmpty(lastName)){
        errors.push('Dane w polu nazwisko są niepoprawne')
    }

    if(isEmpty(street)){
        errors.push('Dane w polu ulica są niepoprawne')
    }

    if(isEmpty(houseNumber)){
        errors.push('Dane w polu numer budynku są niepoprawne')
    }

    if(isEmpty(flatNumber)){
        errors.push('Dane w polu numer mieszkania są niepoprawne')
    }

    const zipPattern = e.target.zip.pattern
    const regex = new RegExp(zipPattern)
    if(!regex.test(zip)){
        errors.push('Dane w polu kod pocztowy są niepoprawne')
    }

    if(isEmpty(city)){
        errors.push('Dane w polu miejscowość są niepoprawne')
    }

    if(isEmpty(voivodeship)){
        errors.push('Dane w polu województwo są niepoprawne')
    }
    
    if(errors.length > 0){
        displayErrors(errors)
    }else {
        alert('Dane zostały wysłane')
    }

}

function displayErrors(errList){
    errList.forEach(function(error){
        const liEl = document.createElement('li')
        liEl.innerText = error
        liEl.style.color = 'red'
        msgList.appendChild(liEl)
    })
}

function isEmpty(value){
    return value === ''
}