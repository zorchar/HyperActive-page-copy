const GrandfathersOfPlusSigns = document.querySelectorAll(".grandfather__plus_sign")
GrandfathersOfPlusSigns.forEach(element => {
    element.addEventListener('click', (event) => {
        element.children[1].classList.toggle('height_fit-content')
        element.children[0].children[0].classList.toggle('fa-circle-arrow-down')
        element.children[0].children[0].classList.toggle('fa-circle-arrow-up')
    })
});
const contactUsForm = document.querySelector('#contact_us_form')
contactUsForm.addEventListener('submit', (event) => {
    event.preventDefault()

    let fullName = event.target[0].value
    let phoneNumber = event.target[1].value
    let email = event.target[2].value
    let isValid = true

    if (fullName === "") {
        event.target[0].value = ""
        event.target[0].placeholder = "*נא להזין שם מלא"
        isValid = false
    }
    if (phoneNumber.length !== 10 || !phoneNumber.includes('0')) {
        event.target[1].value = ""
        event.target[1].placeholder = "*נא להזין טלפון"
        isValid = false
    }
    if (!email.includes('@') || !email.includes('.')) {
        event.target[2].value = ""
        event.target[2].placeholder = "*נא להזין כתובת מייל"
        isValid = false
    }
    if (isValid) {
        const formSentBackdrops = document.querySelectorAll(".form-sent__backdrop")
        formSentBackdrops.forEach(element => {
            element.classList.toggle('hidden')
        });
    }
})

const hearMoreForm = document.querySelector('#hear_more_form')
hearMoreForm.addEventListener('submit', (event) => {
    event.preventDefault()

    let fullName = event.target[0].value
    let phoneNumber = event.target[1].value
    let email = event.target[2].value
    let isValid = true

    if (fullName === "") {
        event.target[0].value = ""
        event.target[0].placeholder = "*נא להזין שם מלא"
        isValid = false
    }
    if (phoneNumber.length !== 10 || !phoneNumber.includes('0')) {
        event.target[1].value = ""
        event.target[1].placeholder = "*נא להזין טלפון"
        isValid = false
    }
    if (!email.includes('@') || !email.includes('.')) {
        event.target[2].value = ""
        event.target[2].placeholder = "*נא להזין כתובת מייל"
        isValid = false
    }
    if (isValid) {
        const formSentBackdrops = document.querySelectorAll(".form-sent__backdrop")
        formSentBackdrops.forEach(element => {
            element.classList.toggle('hidden')
        });
    }
})

const interval_form = document.querySelector('#interval_form')
interval_form.addEventListener('submit', (event) => {
    event.preventDefault()

    event.target[0].classList.add('red')
    event.target[1].classList.add('red')
    event.target[2].classList.add('red')

    let fullName = event.target[0].value
    let phoneNumber = event.target[1].value
    let email = event.target[2].value
    let isValid = true

    if (fullName === "") {
        event.target[0].value = ""
        event.target[0].placeholder = "*נא להזין שם מלא"
        isValid = false
    }
    if (phoneNumber.length !== 10 || !phoneNumber.includes('0')) {
        event.target[1].value = ""
        event.target[1].placeholder = "*נא להזין טלפון"
        isValid = false
    }
    if (!email.includes('@') || !email.includes('.')) {
        event.target[2].value = ""
        event.target[2].placeholder = "*נא להזין כתובת מייל"
        isValid = false
    }
    if (isValid) {
        const formSentBackdrops = document.querySelectorAll(".form-sent__backdrop")
        formSentBackdrops.forEach(element => {
            element.classList.toggle('hidden')
            const intervalBackdrops = document.querySelectorAll(".interval__backdrop")
            intervalBackdrops.forEach(element => {
                element.classList.add('hidden')

            })

        });
    }
})


const intervalBackdrops = document.querySelectorAll(".interval__backdrop")
const xLines = document.querySelector(".x_lines")
xLines.addEventListener('click', (event) => {
    intervalBackdrops.forEach(element => {
        element.classList.toggle('hidden')
    });
})

setTimeout(() => {
    intervalBackdrops.forEach(element => {
        element.classList.toggle('hidden')
    });

}, 2000000)

setInterval(() => {
    intervalBackdrops.forEach(element => {
        element.classList.toggle('hidden')
    });

}, 900000)

const careersTab = document.querySelector('.careers_tab')
careersTab.addEventListener('click', (event) => {
    event.preventDefault()
    event.stopPropagation()
    document.querySelector('.career_menu2').classList.toggle('display-none')
})

const toggleButton = document.querySelector('.toggle-button')
toggleButton.addEventListener('click', (event) => {
    event.preventDefault()
    event.stopPropagation()
    const bars = document.querySelectorAll('.toggle-button__bar')
    bars[0].classList.toggle('upper')
    bars[1].classList.toggle('middle')
    bars[2].classList.toggle('lower')
    document.querySelector('.tabs__container').classList.toggle('display-none')
})



formSentClosingButton = document.querySelector(".fa-times")
formSentClosingButton.addEventListener('click', (event) => {
    event.preventDefault()
    event.stopPropagation()
    const formSentBackdrops = document.querySelectorAll(".form-sent__backdrop")
    formSentBackdrops.forEach(element => {
        element.classList.add('hidden')
    })
})
