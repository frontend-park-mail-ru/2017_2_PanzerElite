const application = document.getElementById('application');
const nav = document.getElementById('navigation');
const warningMsgLog = document.getElementById('warning-msg-log');
const warningMsgReg = document.getElementById('warning-msg-reg');
const liveSectionCollection = application.getElementsByTagName('section');
const loginBtn = document.getElementById('login-btn');
const registerBtn = document.getElementById('create-btn');

const sections = [
    ['login-sec', 'SIGN IN'],
    ['register-sec', 'SIGN UP'],
    ['menu-sec', 'MENU'],
    ['about-sec', 'ABOUT'],
];


for (let sect of sections) {
    const button = document.createElement('input');
    button.setAttribute('type', 'button');
    button.setAttribute('class', 'button-nav');

    button.setAttribute('data-section', sect[0]);
    button.value = sect[1];
    nav.appendChild(button);
}


nav.addEventListener('click', (event) => {

    const sectionID = event.target.getAttribute('data-section');
    const sectionsArray = Array.from(liveSectionCollection);
    sectionsArray.forEach((sectionElement) => {
        sectionElement.hidden = true;
        if (sectionElement.id === sectionID) {
            sectionElement.hidden = false;
        }
    });
}, false);
/*
loginBtn.addEventListener('click', (event) => {
    //event.preventDefault();
    let nick = document.getElementById('nick-log').value;
    let pas = document.getElementById('password-log').value;

    if (nick.length > 15 || pas.length > 20 || nick.length < 1 || pas.length < 1) {
        warningMsgLog.innerHTML = "Invalid Data";
        warningMsgLog.hidden = false;
    } else {
        if (true) { //some server logic for login
            //debugger;
        } else {
            warning_msg.hidden = true;
            innerHTML = "Wrong Nick or Password";
            warningMsgLog.hidden = false;
        }
    }
}, false);*/
/*
registerBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const nick = document.getElementById('nick-reg').value;
    const pas = document.getElementById('password-reg').value;
    const conf = document.getElementById('confirm-reg').value;

    if (nick.length > 15 || pas.length > 20 || conf.length > 20 || nick.length < 1 || pas.length < 1 || conf.length < 1) {
        warningMsgReg.innerHTML = "Invalid Data";
        warningMsgReg.hidden = false;
    } else {
        if (conf !== pas) {
            warningMsgReg.innerHTML = "Passwords do not match";
            warningMsgReg.hidden = false;
        } else {
            if (true) { //some server logic for login
                //debugger;
            } else {
                warningMsgReg.innerHTML = "This Nick already exists";
                warningMsgReg.hidden = false;
            }
        }
    }
}, false);*/
//new shit
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
registerBtn.addEventListener('click', function(event) {
    event.preventDefault();
    console.log(loginForm.elements);
    const nick = loginForm.elements['nick-reg'].value;
    const pas = loginForm.elements['password-reg'].value;
    const conf = loginForm.elements['confirm-reg'].value;

    auth(nick, pas, conf, function(err, resp) {
        if (err) {
            return alert(`AUTH Error: ${err.status}`);
        }

        loginForm.reset();
    });
});

loginBtn.addEventListener('click', function(event) {
    event.preventDefault();
    console.log(loginForm.elements);
    const nick = loginForm.elements['nick-log'].value;
    const pas = loginForm.elements['password-log'].value;

    auth(nick, pas, function(err, resp) {
        if (err) {
            return alert(`AUTH Error: ${err.status}`);
        }

        loginForm.reset();
    });
});


function auth(nick, pas, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/login', true);
    xhr.withCredentials = true;
    const user = { nick, pas };
    const body = JSON.stringify(user);

    xhr.setRequestHeader('Content-Type', 'application/json; charset=utf8');

    xhr.onreadystatechange = function() {
        if (xhr.readyState !== 4) return;
        if (+xhr.status !== 200) {
            return callback(xhr, null);
        }

        const response = JSON.parse(xhr.responseText);
        callback(null, response);
    };

    xhr.send(body);
}

function register(nick, pas, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/register', true);
    xhr.withCredentials = true;
    const user = { nick, pas, conf };
    const body = JSON.stringify(user);

    xhr.setRequestHeader('Content-Type', 'application/json; charset=utf8');

    xhr.onreadystatechange = function() {
        if (xhr.readyState !== 4) return;
        if (+xhr.status !== 200) {
            return callback(xhr, null);
        }

        const response = JSON.parse(xhr.responseText);
        callback(null, response);
    };

    xhr.send(body);
}

function whoami(callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', '/me', true);
    xhr.withCredentials = true;

    xhr.onreadystatechange = function() {
        if (xhr.readyState !== 4) return;
        if (+xhr.status !== 200) {
            return callback(xhr, null);
        }

        const response = JSON.parse(xhr.responseText);
        callback(null, response);
    };

    xhr.send();
}