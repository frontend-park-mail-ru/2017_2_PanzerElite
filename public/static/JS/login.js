const login = document.getElementById("login-form")
const register = document.getElementById('register-form');
const loginMsg = document.getElementById('login-message');
const signupMsg = document.getElementById('reg-message');

function changeForm(event) {
    event.preventDefault();
    login.classList.toggle('hidden');
    register.classList.toggle('hidden');
}

loginMsg.addEventListener('click', changeForm);
signupMsg.addEventListener('click', changeForm);


// интерфейсы - все дз(размещаются на портале) проверяются на рк(3шт)
// фронт - дз(размещаются на https://frontend-park-mailru.firebaseapp.com/) заливать за сутки до рк