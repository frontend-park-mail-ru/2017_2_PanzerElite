const loginForm = document.getElementById("login-form")
const registerForm = document.getElementById('register-form');
const loginMsg = document.getElementById('login-message');
const signupMsg = document.getElementById('reg-message');
const createBtn = document.getElementById('create-btn');
const loginBtn = document.getElementById('login-btn');


function changeForm(event) {
    event.preventDefault();
    loginForm.classList.toggle('hidden');
    registerForm.classList.toggle('hidden');
}

function changeP(id, flag) {
    if (flag) {
        id.classList.remove('hidden');
    } else {
        id.classList.add('hidden');
    }
}

loginMsg.addEventListener('click', changeForm);
signupMsg.addEventListener('click', changeForm);

createBtn.addEventListener('click', (event) => {
    event.preventDefault();
}, false);

loginBtn.addEventListener('click', (event) => {
    event.preventDefault();
    let nick = document.getElementById('nick-log').value;
    let pas = document.getElementById('password-log').value;

    changeP(document.getElementById('not-correct-data-p'), (nick.length > 15 || pas.length > 20));

    if (false) { //some server logic for login
        debugger;
    } else {
        changeP(document.getElementById('not-correct-p'), true);
    }
}, false);



// интерфейсы - все дз(размещаются на портале) проверяются на рк(3шт)
// фронт - дз(размещаются на https://frontend-park-mailru.firebaseapp.com/) заливать за сутки до рк