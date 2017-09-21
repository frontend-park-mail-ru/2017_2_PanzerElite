const loginBtn = document.getElementById('login-btn');
const registerBtn = document.getElementById('create-btn');
const changeBtn = document.getElementById('change-btn');
const logoutBtn = document.getElementById('logout-btn');

const warningMsgLog = document.getElementById('warning-msg-log');
const warningMsgReg = document.getElementById('warning-msg-reg');
const warningMsgChange = document.getElementById('warning-msg-change');

const goToRegisterBtn = document.getElementById('go-to-reg');
const goToLoginBtn = document.getElementById('go-to-log');
const goToMenuBtn = document.getElementById('go-to-menu');
const goToChangeBtn = document.getElementById('go-to-change');

const sectionsArray = {
    login: document.getElementById("login-sec"),
    register: document.getElementById("register-sec"),
    menu: document.getElementById("menu-sec"),
    change: document.getElementById("change-sec"),
};
sectionsArray["login"].hidden = false;


import urls from './config.js';

const POST = "post";
const GET = "get";



goToLoginBtn.addEventListener('click', (event) => {
    event.preventDefault();
    warningMsgReg.hidden = true;
    sectionsArray["login"].hidden = false;
    sectionsArray["register"].hidden = true;
}, false);
goToRegisterBtn.addEventListener('click', function(event) {
    event.preventDefault();
    warningMsgLog.hidden = true;
    sectionsArray["login"].hidden = true;
    sectionsArray["register"].hidden = false;
}, false);
goToChangeBtn.addEventListener('click', (event) => {
    event.preventDefault();
    sectionsArray["change"].hidden = false;
    sectionsArray["menu"].hidden = true;
}, false);
goToMenuBtn.addEventListener('click', (event) => {
    event.preventDefault();
    warningMsgReg.hidden = true;
    sectionsArray["change"].hidden = true;
    sectionsArray["menu"].hidden = false;
}, false);

whoami();

loginBtn.addEventListener('click', function(event) {
    event.preventDefault();
    const nick = document.getElementById('nick-log').value;
    const pas = document.getElementById('password-log').value;
    if (nick.length > 15 || pas.length > 20 || nick.length < 1 || pas.length < 1) {
        warningMsgLog.innerHTML = "Invalid Data";
        warningMsgLog.hidden = false;
    } else {
        httpReq(POST, urls.login, { login: nick, password: pas })
            .then(res => {
                whoami();
            }).catch(err => {
                warningMsgLog.innerHTML = "Wrong Nick or Password";
                warningMsgLog.hidden = false;
                console.log(err);
            });
    }
}, false);

registerBtn.addEventListener('click', function(event) {
    event.preventDefault();
    const nick = document.getElementById('nick-reg').value;
    const pas = document.getElementById('password-reg').value;
    const conf = document.getElementById('confirm-reg').value;
    if (nick.length > 15 || pas.length > 20 || nick.length < 1 || pas.length < 1) {
        warningMsgReg.innerHTML = "Invalid Data";
        warningMsgReg.hidden = false;
    } else {
        if (conf !== pas) {
            warningMsgReg.innerHTML = "Passwords do not match";
            warningMsgReg.hidden = false;
        } else {
            httpReq(POST, urls.register, { login: nick, password: pas, cf: conf })
                .then(res => {
                    whoami();
                }).catch(err => {
                    warningMsgReg.innerHTML = "This Nick already exists";
                    warningMsgLog.hidden = false;
                    console.log(err);
                });
        }
    }
}, false);

logoutBtn.addEventListener('click', function(event) {
    event.preventDefault();
    warningMsgLog.hidden = true;
    warningMsgReg.hidden = true;
    httpReq(GET, urls.logout)
        .then(res => {
            whoami();
        }).catch(err => {
            console.log(err);
        });
}, false);

changeBtn.addEventListener('click', function(event) {
    event.preventDefault();
    const pas = document.getElementById('password-change').value;
    const conf = document.getElementById('confirm-change').value;
    if (pas.length > 20 || pas.length < 1) {
        warningMsgChange.innerHTML = "Invalid Data";
        warningMsgChange.hidden = false;
    } else {
        if (conf !== pas) {
            warningMsgChange.innerHTML = "Passwords do not match";
            warningMsgChange.hidden = false;
        } else {
            httpReq(POST, urls.chagePassword, { password: pas, conf })
                .then(res => {
                    whoami();
                }).catch(err => {
                    console.log(err);
                });
        }
    }
}, false);


function whoami() {
    httpReq(GET, urls.check)
        .then(function(response) {
            sectionsArray["login"].hidden = true;
            sectionsArray["register"].hidden = true;
            sectionsArray["change"].hidden = true;
            sectionsArray["menu"].hidden = false;
        })
        .catch(function(error) {
            sectionsArray["login"].hidden = false;
            sectionsArray["register"].hidden = true;
            sectionsArray["change"].hidden = true;
            sectionsArray["menu"].hidden = true;
            console.log(error);
        });
}

function httpReq(type, uRL, sendObject) {
    return axios.request({ url: uRL, method: type, data: sendObject, withCredentials: true });
}