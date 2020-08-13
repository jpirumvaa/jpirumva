import {checkRequired} from './signform.js'

const logForm= document.querySelector('.login-form')
const logEmail= document.querySelector(".log-email")
const logPassword= document.querySelector('.log-password')

const container= document.querySelector('.log-container')
const spinner= document.querySelector('.load')


logForm.addEventListener('submit', function(e){
  e.preventDefault()
  checkRequired([logEmail, logPassword])
  const userEmail= logEmail.value
  const userPassword= logPassword.value
  auth.signInWithEmailAndPassword(userEmail, userPassword).then(userInfo=>{
    console.log(userInfo.user)
    logForm.reset()
    window.location="../pages/index.html"
}).catch((e)=>{
    console.log("Can't signin")
    console.log(e)
    alert("Either Email or password is incorrect. Check your input and try again.")
})
})

db.collection('users').get().then(info=>{    
  console.log(info.docs)
}).then(()=>{
  container.style.display= 'block'
  spinner.style.display='none'
}).catch((e)=>{
  alert("An error occured. Check your network and try again.")
  console.log(e)
})
