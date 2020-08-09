import {checkEmail, checkRequired, checkPasswordsMatch, checkLength} from './signform.js'


const signupForm = document.querySelector('.signup-form');

const username = document.querySelector('.username');
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const password2 = document.querySelector('.password2');
const loginBtn= document.querySelector('.loginbtn')
const logoutBtn= document.querySelector('#logout')

signupForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const name= username.value
    const pass= password.value
    const secondPass= password2.value
    const emailAddress= email.value
    let lat;
    let long;
    if('geolocation' in navigator){
        console.log("Location available")
        navigator.geolocation.getCurrentPosition(position=>{
            lat= position.coords.latitude
            long= position.coords.longitude
        })
    }else{
    console.log("geolocation services not available")
    }
    console.log(lat, long)
    pass===secondPass?
    auth.createUserWithEmailAndPassword(emailAddress, pass).then(userInfo=>{
        return db.collection('users').doc(userInfo.user.uid).set({
            name: name,
            password: pass,
            email: emailAddress,
            isAdmin: false,
            location:{
                latutude: lat!=='underfined'?lat:'Location Dinied',
                longitude: long!=='underfined'?long:'Location Dinied',
            }
        })
    }).then(()=>{
        signupForm.reset()
        loginBtn.style.display= 'none'
        logoutBtn.style.display="inline-block"
        window.location="../index.html"
    }).catch((e)=>{
        console.log("Not able to post information")
        alert("Your information was not saved. If you are sure that you have filled the correct information,check your connection and try again later")
    }):console.log("passwords should match")

    console.log(emailAddress, pass, secondPass, name)

    checkRequired([username, password, password2, email]);
    checkLength(username, 3, 15);
    checkLength(password, 6, 25);
    checkEmail(email);
    checkPasswordsMatch(password, password2);


    
});

logoutBtn.addEventListener('click',(e)=>{
    e.preventDefault()
    auth.signOut().then(()=>{
        window.location='login.html'
        console.log("Signed Out successfully")
    })
})

