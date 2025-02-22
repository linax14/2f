import { signUpUser, signInWithEmail } from "./auth.js"

let main = document.createElement('div')
document.body.appendChild(main)

let authContainer = document.createElement('div')
authContainer.setAttribute('class','auth-container')
main.appendChild(authContainer)

let signIn = document.createElement('button')
signIn.innerText = 'sign in'
authContainer.appendChild(signIn)

let signUp = document.createElement('button')
signUp.innerText = 'sign up'
authContainer.appendChild(signUp)

let authFormContainer = document.createElement('div')
authFormContainer.setAttribute('class','auth-form-container')
authContainer.appendChild(authFormContainer)

signIn.addEventListener('click', () => {
    authFormContainer.innerHTML = ''
    
    let signInForm = document.createElement('form')
    authFormContainer.appendChild(signInForm)

    let emailInput = document.createElement('input')
    emailInput.setAttribute('type', 'email')
    signInForm.appendChild(emailInput)

    let passwordInput = document.createElement('input')
    passwordInput.setAttribute('type', 'password')
    signInForm.appendChild(passwordInput)

    let formSubmit = document.createElement('button')
    formSubmit.innerText = 'sign in'
    signInForm.appendChild(formSubmit)


    signInForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        signInWithEmail(emailInput.value, passwordInput.value)

    });
})

signUp.addEventListener('click', () => {
    authFormContainer.innerHTML = ''

    let signUpForm = document.createElement('form')
    authFormContainer.appendChild(signUpForm)

    let emailInput = document.createElement('input')
    emailInput.setAttribute('type', 'email')
    signUpForm.appendChild(emailInput)

    let passwordInput = document.createElement('input')
    passwordInput.setAttribute('type', 'password')
    signUpForm.appendChild(passwordInput)

    let formSubmit = document.createElement('button')
    formSubmit.innerText = 'sign up'
    signUpForm.appendChild(formSubmit)


    signUpForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        signUpUser(emailInput.value, passwordInput.value)
    });
})

