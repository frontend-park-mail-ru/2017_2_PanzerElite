/*$('.message a').click(function() {
    $('form').animate({ height: "toggle", opacity: "toggle" }, "slow");
});*/

/*
const greeting = document.getElementsByClassName('greeting')[0];
greeting.addEventListener('click', () => {

    greeting.classList.add('hidden');
}, false);*/
const login = document.getElementsByClassName('login-form')[0];
const register = document.getElementsByClassName('register-form')[0];
const changeInRegister = document.getElementsByClassName('message')[0];
const changeInLogin = document.getElementsByClassName('message')[1];

changeInLogin.addEventListener('click', () => {
    login.classList.add('hidden');
    register.classList.remove('hidden');
}, false);

changeInRegister.addEventListener('click', () => {
    login.classList.remove('hidden');
    register.classList.add('hidden');
}, false);