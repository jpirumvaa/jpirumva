import {checkRequired, checkLength, checkEmail} from './signform.js'

const contForm= document.querySelector('.cont-form')
const contEmail= document.querySelector('.cont-email')
const contUsername= document.querySelector('.cont-username')
const contMessage= document.querySelector('.cont-message')

contForm.addEventListener('submit', function(e){
    e.preventDefault()
    checkRequired([contUsername, contEmail, contMessage])
    checkLength(contMessage, 50, 3000)
    checkEmail(contEmail)
})
