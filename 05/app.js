document.addEventListener('DOMContentLoaded', init)

const msgList = document.querySelector('.messages')

function init() {

    const formEl = document.querySelector('form')
    if (formEl) {
        formEl.addEventListener('submit', handleSubmit)
    }

    function handleSubmit(e) {
        e.preventDefault()

        msgList.innerHTML = ''

        const fields = [
            { name: 'firstName', label: 'imię', required: true },
            { name: 'lastName', label: 'nazwisko', required: true },
            { name: 'street', label: 'ulica', required: true },
            { name: 'houseNumber', label: 'numer budynku', type: 'number', required: true },
            { name: 'flatNumber', label: 'numer mieszkania', type: 'number', required: false },
            { name: 'zip', label: 'kod pocztowy', pattern: '[0-9]{2}-[0-9]{3}', required: true },
            { name: 'city', label: 'miejscowość', required: true },
            { name: 'voivodeship', label: 'województwo', required: true },
        ]

        const errors = []

        fields.forEach(function (field) {
            validateForm(formEl, field, errors)
        })

        if (errors.length > 0) {
            displayErrors(errors)
        } else {
            alert('Dane zostały wysłane')
        }

    }
}

function validateForm(formElement, field, errorsList) {
    const value = formElement.elements[field.name].value

    if (field.required && isEmpty(value)) {
        errorsList.push('Dane w polu ' + field.label + ' są niepoprawne')
        return
    }
    if (field.pattern && !isEmpty(value)) {
        const regex = new RegExp(field.pattern)
        if (!regex.test(value)) {
            errorsList.push('Dane w polu ' + field.label + ' są niepoprawne')
        }
    }
}

function displayErrors(errList) {
    errList.forEach(function (error) {
        const liEl = document.createElement('li')
        liEl.innerText = error
        liEl.style.color = 'red'
        msgList.appendChild(liEl)
    })
}

function isEmpty(value) {
    return value === ''
}