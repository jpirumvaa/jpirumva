import {checkRequired, checkLength, checkEmail} from './signform.js'

const contForm= document.querySelector('.cont-form')
const contEmail= document.querySelector('.cont-email')
const contUsername= document.querySelector('.cont-username')
const contMessage= document.querySelector('.cont-message')

const container= document.querySelector('.log-container')
const spinner= document.querySelector('.load')

contForm.addEventListener('submit', function(e){
    e.preventDefault()  
    checkRequired([contUsername, contEmail, contMessage])
    checkLength(contMessage, 50, 3000)
    checkEmail(contEmail)

    if(contUsername.value!=""&&contEmail.value !=""&&contMessage.value!=""){
        db.collection('messages').add({
            name: contUsername.value,
            email: contEmail.value,
            message: contMessage.value
        }).then(()=>{
            alert("Thank you for sending your message.")
            contForm.reset()
            window.location='../pages/index.html'
        })
    }else{
        alert("An error occured. Fill the form correctly and try again.")
    }
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