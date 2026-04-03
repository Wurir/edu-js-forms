const formEl = document.querySelector('form')
const msgList = document.querySelector('.messages')

formEl.addEventListener('submit', handleSubmit)

function handleSubmit(e){
    e.preventDefault()

    const firstNameEl = e.target.elements['firstName']
    const lastNameEl = e.target.elements['lastName']
    const streetEl = e.target.elements['street']
    const houseNumberEl = e.target.elements['houseNumber']
    const flatNumberEl = e.target.elements['flatNumber']
    const zipEl = e.target.elements['zip']
    const cityEl = e.target.elements['city']
    const voivodeshipEl = e.target.elements['voivodeship']

    console.log(e.target); // zwraca form, moglbym wyszukac querySelectorAll input ktory nie jest type submit
    // nastepnie uzyc foreach wywolujac na kazdy input funckje z walidacja, ktora sprawdzi typ i cxzy posiada pattern
    
}