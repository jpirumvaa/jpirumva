import {checkEmail, checkRequired, checkPasswordsMatch, checkLength} from './signform.js'

const signupForm = document.querySelector('.signup-form');
const username = document.querySelector('.username');
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const password2 = document.querySelector('.password2');

signupForm.addEventListener('submit', function(e) {
    e.preventDefault();
    checkRequired([username, password, password2, email]);
    checkLength(username, 3, 15);
    checkLength(password, 6, 25);
    checkEmail(email);
    checkPasswordsMatch(password, password2);
    
});