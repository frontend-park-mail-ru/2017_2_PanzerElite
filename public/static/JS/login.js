const loginForm = document.getElementById("login-form")
const registerForm = document.getElementById('register-form');
const loginMsg = document.getElementById('login-message');
const registerMsg = document.getElementById('reg-message');
const createBtn = document.getElementById('create-btn');
const loginBtn = document.getElementById('login-btn');
const registerBtn = document.getElementById('create-btn');
const warning_msg = document.getElementById('warning-msg');

function changeForm(event) {
    event.preventDefault();
    warning_msg.classList.add('hidden');
    loginForm.classList.toggle('hidden');
    registerForm.classList.toggle('hidden');
}

loginMsg.addEventListener('click', changeForm);
registerMsg.addEventListener('click', changeForm);

createBtn.addEventListener('click', (event) => {
    event.preventDefault();
}, false);

loginBtn.addEventListener('click', (event) => {
    event.preventDefault();
    let nick = document.getElementById('nick-log').value;
    let pas = document.getElementById('password-log').value;

    if (nick.length > 15 || pas.length > 20 || nick.length < 1 || pas.length < 1) {
        warning_msg.innerHTML = "Invalid Data";
        warning_msg.classList.remove('hidden');
    } else {
        if (true) { //some server logic for login
            //debugger;
        } else {
            warning_msg.innerHTML = "Wrong Nick or Password";
            warning_msg.classList.remove('hidden');
        }
    }
}, false);

registerBtn.addEventListener('click', (event) => {
    event.preventDefault();
    let nick = document.getElementById('nick-reg').value;
    let pas = document.getElementById('password-reg').value;
    let conf = document.getElementById('confirm-reg').value;

    if (nick.length > 15 || pas.length > 20 || conf.length > 20 || nick.length < 1 || pas.length < 1 || conf.length < 1) {
        warning_msg.innerHTML = "Invalid Data";
        warning_msg.classList.remove('hidden');
    } else {
        if (conf !== pas) {
            warning_msg.innerHTML = "Passwords do not match";
            warning_msg.classList.remove('hidden');
        } else {
            if (true) { //some server logic for login
                //debugger;
            } else {
                warning_msg.innerHTML = "This Nick already exists";
                warning_msg.classList.remove('hidden');
            }
        }
    }
}, false);



// интерфейсы - все дз(размещаются на портале) проверяются на рк(3шт)
// фронт - дз(размещаются на https://frontend-park-mailru.firebaseapp.com/) заливать за сутки до рк
// swager
//<p class="hidden warning" id="not-correct-data-p">Invalid Data</p>