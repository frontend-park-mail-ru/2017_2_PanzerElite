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

loginBtn.addEventListener('click', (event) => {
    event.preventDefault();
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
}, false);

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
}, false);