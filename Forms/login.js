//import {checkRequired} from './signform.js'

const logForm= document.querySelector('.login-form')
const logEmail= document.querySelector(".log-email")
const logPassword= document.querySelector('.log-password')
const logBtn= document.querySelector('.logbtn')
const logoBtn= document.querySelector('#logoutBtn')

logForm.addEventListener('submit', function(e){
  e.preventDefault()
  //checkRequired([logEmail, logPassword])
  const userEmail= logEmail.value
  const userPassword= logPassword.value
  auth.signInWithEmailAndPassword(userEmail, userPassword).then(userInfo=>{
    console.log(userInfo.user)
    logForm.reset()
    logBtn.style.display= 'none'
    logoBtn.style.display="inline-block"
    //window.location="../index.html"
}).catch((e)=>{
    console.log("Can't signin")
    console.log(e)
    alert("Either Email or password is incorrect. Check your input and try again.")
})
})