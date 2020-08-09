import {checkRequired} from './signform.js'

const logForm= document.querySelector('.login-form')
const logEmail= document.querySelector(".log-email")
const logPassword= document.querySelector('.log-password')
const logBtn= document.querySelector('.logbtn')
const logoBtn= document.querySelector('#logoutBtn')

auth.onAuthStateChanged(user=>{
  if(user){
      console.log("Hello from user:", user.uid)
      db.collection('users').doc(user.uid).get().then(info=>{
        if(info.data().isAdmin===true){

        }
      })
      logoBtn.style.display="inline-block"
      logBtn.style.display= 'none'
  }else{
    logoBtn.style.display="none"
    logBtn.style.display= 'inline-block'
  }
})

logForm.addEventListener('submit', function(e){
  e.preventDefault()
  checkRequired([logEmail, logPassword])
  const userEmail= logEmail.value
  const userPassword= logPassword.value
  auth.signInWithEmailAndPassword(userEmail, userPassword).then(userInfo=>{
    console.log(userInfo.user)
    logForm.reset()
    window.location="../index.html"
}).catch((e)=>{
    console.log("Can't signin")
    console.log(e)
    alert("Either Email or password is incorrect. Check your input and try again.")
})
})
