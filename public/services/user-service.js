import urls, { GET, POST } from '../configs/config.js';
import sections from "../configs/sections.js";
import httpReq from "../modules/http.js"

export default class UserService {
    constructor() {}

    login(nick, pas) {
        if (this._validate(nick, pas)) {
            sections.login.loginform.warningMsg('Invalid Data', false);
        } else {
            httpReq(POST, urls.login, {
                    login: nick,
                    password: pas
                })
                .then(res => {
                    this.whoami();
                })
                .catch(err => {
                    sections.login.loginform.warningMsg('Wrong Nick or Password', false);
                    console.log(err);
                });
        }
    }

    register(nick, pas, conf) {
        if (this._validate(nick, pas)) {
            sections.register.registerform.warningMsg('Invalid Data', false);
        } else {
            if (conf !== pas) {
                sections.register.registerform.warningMsg('Passwords Dont Match', false);
            } else {
                httpReq(POST, urls.register, { login: nick, password: pas, cf: conf })
                    .then(res => {
                        this.whoami();
                    })
                    .catch(err => {
                        sections.register.registerform.warningMsg('This Nick already Exists', false);
                        console.log(err);
                    });
            }
        }
    }

    logout() {
        sections.login.loginform.warningMsg('', true);
        sections.register.registerform.warningMsg('', true);
        httpReq(GET, urls.logout)
            .then(res => {
                this.whoami();
            })
            .catch(err => {
                console.log(err);
            });
    }

    changePassword(pas, conf) {
        if (this._validate(conf, pas)) {
            sections.change.changeform.warningMsg('Invalid Data', false);
        } else {
            if (conf !== pas) {
                sections.change.changeform.warningMsg('Passwords Dont Match', false);
            } else {
                httpReq(POST, urls.chagePassword, { password: pas, conf })
                    .then(res => {
                        this.whoami();
                    })
                    .catch(err => {
                        console.log(err);
                    });
            }
        }
    }

    whoami() {
        sections.hide();
        httpReq(GET, urls.check)
            .then(function(response) {
                sections.hide();
                sections.menu.show();
            })
            .catch(function(error) {
                sections.login.show();
                console.log(error);
            });
    }

    _validate(field1, field2) {
        if (field1.length > 20 || field1.length < 1 || field2.length > 20 || field2.length < 1) {
            return true;
        }
        return false;
    }

}