import {checkRequired} from './signform.js'

const logForm= document.querySelector('.login-form')
const logUsername= document.querySelector(".log-username")
const logPassword= document.querySelector('.log-password')

logForm.addEventListener('submit', function(e){
  e.preventDefault()
  checkRequired([logUsername, logPassword])
})