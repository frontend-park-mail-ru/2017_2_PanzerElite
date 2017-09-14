const loginBtn = document.getElementById('login-btn');
const registerBtn = document.getElementById('create-btn');
const warningMsgLog = document.getElementById('warning-msg-log');
const warningMsgReg = document.getElementById('warning-msg-reg');
const goToRegisterBtn = document.getElementById('go-to-reg');
const goToLoginBtn = document.getElementById('go-to-log');
const logoutBtn = document.getElementById('logout-btn');
const sectionsArray = {
    login: document.getElementById("login-sec"),
    register: document.getElementById("register-sec"),
    menu: document.getElementById("menu-sec"),
    about: document.getElementById("about-sec"),
};
sectionsArray["login"].hidden = false;

goToLoginBtn.addEventListener('click', (event) => {
    event.preventDefault();
    sectionsArray["login"].hidden = false;
    sectionsArray["register"].hidden = true;
}, false);
goToRegisterBtn.addEventListener('click', function(event) {
    event.preventDefault();
    sectionsArray["login"].hidden = true;
    sectionsArray["register"].hidden = false;
}, false);

whoami();

loginBtn.addEventListener('click', function(event) {
    event.preventDefault();
    const nick = document.getElementById('nick-log').value;
    const pas = document.getElementById('password-log').value;
    auth(nick, pas).then(res => {
        console.log(res);
        whoami();
    }).catch(err => {
        warningMsgLog.hidden = false;
        console.log(err);
    });
}, false);

registerBtn.addEventListener('click', function(event) {
    event.preventDefault();
    const nick = document.getElementById('nick-reg').value;
    const pas = document.getElementById('password-reg').value;
    const conf = document.getElementById('confirm-reg').value;
    register(nick, pas, conf).then(res => {
        console.log(res);
        whoami();
    }).catch(err => {
        warningMsgReg.hidden = false;
        console.log(err);
    });
}, false);

logoutBtn.addEventListener('click', function(event) {
    event.preventDefault();
    axios.get('/logout')
        .then(function(response) {
            whoami();
        })
        .catch(function(error) {
            console.log(error);
        });

}, false);


function whoami() {
    axios.get('/check')
        .then(function(response) {
            sectionsArray["login"].hidden = true;
            sectionsArray["register"].hidden = true;
            sectionsArray["menu"].hidden = false;
        })
        .catch(function(error) {
            sectionsArray["login"].hidden = false;
            sectionsArray["register"].hidden = true;
            sectionsArray["menu"].hidden = true;
            console.log(error);
        });

}

function auth(nick, pas) {
    return axios.post('/login', {
        nick,
        pas
    });
}

function register(nick, pas, conf) {
    return axios.post('/register', {
        nick,
        pas,
        conf
    });
}