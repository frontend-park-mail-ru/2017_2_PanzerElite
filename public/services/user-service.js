import urls, { GET, POST } from "../configs/config.js";
import httpReq from "../modules/http.js";
import Validate from "../modules/validation.js";
import PBar from "../modules/load-bar.js";


// const pBar = new PBar();


export default class UserService {
	constructor() {}

	login(nick, pas) {
		return new Promise((resolve, reject) => {
			if (!Validate.checkLogAndPas(nick, pas)) {
				reject("invalid data");
			} else {
				httpReq(POST, urls.login, {
					login: nick,
					password: pas
				})
					.then(() => {
						resolve();
					})
					.catch(err => {
						reject("wrong nick or password");
					});
			}
		});
	}

	register(nick, pas, conf) {
		return new Promise((resolve, reject) => {
			if (!Validate.checkLogAndPas(nick, pas)) {
				reject("invalid data");
				return;
			} else {
				if (!Validate.confirmPassword(conf, pas)) {
					reject("passwords dont match");
					return;
				} else {
					httpReq(POST, urls.register, { login: nick, password: pas, cf: conf })
						.then(() => {
							resolve();
							return;
						})
						.catch(err => {
							reject("nick already exists");
							return;
						});
				}
			}
		});
	}

	logout() {
		return new Promise((resolve, reject) => {
			httpReq(GET, urls.logout)
				.then(() => {
					resolve();
				})
				.catch(err => {
					reject("unable to logout");
				});
		});
	}

	changePassword(pas, conf) {
		return new Promise((resolve, reject) => {
			if (!Validate.checkPassword(pas)) {
				reject("invalid data");
			} else {
				if (!Validate.confirmPassword(conf, pas)) {
					reject("invalid data");
				} else {

					httpReq(POST, urls.chagePassword, { password: pas, conf })
						.then(() => {
							//this.whoami();
							resolve();
						})
						.catch(err => {
							reject("something went wrong");
						});
				}
			}
		});
	}

	whoami() {
		return new Promise((resolve, reject) => {
			httpReq(GET, urls.check)
				.then(() => {
					resolve();
				})
				.catch(error => {
					reject("its very sad");
				});
		});
	}

}