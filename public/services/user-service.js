import urls, { GET, POST } from "../configs/config.js";
import httpReq from "../modules/http.js";
import Validate from "../modules/validation.js";


export default class UserService {
	constructor(main) { this.main = main; }


	login(nick, pas) {
		if (!Validate.checkLogAndPas(nick, pas)) {
			//sections.login.loginform.warningMsg("Invalid Data", false);
			//his.main.login.warning
		} else {

			httpReq(POST, urls.login, {
				login: nick,
				password: pas
			})
				.then(() => {
					this.whoami();
				})
				.catch(err => {
					//sections.login.loginform.warningMsg("Wrong Nick or Password", false);
					console.log(err);

				});
		}
	}

	register(nick, pas, conf) {
		if (!Validate.checkLogAndPas(nick, pas)) {
			console.log("invalid data");
			//sections.register.registerform.warningMsg("Invalid Data", false);
		} else {
			if (!Validate.confirmPassword(conf, pas)) {
				console.log("ps dont match");
				//sections.register.registerform.warningMsg("Passwords Dont Match", false);
			} else {
				console.log("hey im in register sevice");
				httpReq(POST, urls.register, { login: nick, password: pas, cf: conf })
					.then(() => {
						this.whoami();
					})
					.catch(err => {
						//sections.register.registerform.warningMsg("This Nick already Exists", false);
						console.log(err);

					});
			}
		}
	}


	logout() {
		//sections.login.loginform.warningMsg("", true);
		//sections.register.registerform.warningMsg("", true);

		httpReq(GET, urls.logout)
			.then(() => {
				this.whoami();
			})
			.catch(err => {
				console.log(err);

			});
	}


	changePassword(pas, conf) {
		if (!Validate.checkPassword(pas)) {
			//sections.change.changeform.warningMsg("Invalid Data", false);
		} else {
			if (!Validate.confirmPassword(conf, pas)) {
				//sections.change.changeform.warningMsg("Passwords Dont Match", false);
			} else {

				httpReq(POST, urls.chagePassword, { password: pas, conf })
					.then(() => {
						this.whoami();
					})
					.catch(err => {
						console.log(err);

					});
			}
		}
	}


	whoami() {
		this.main.login.hide();
		this.main.register.hide();
		this.main.menu.hide();
		this.main.change.hide();
		httpReq(GET, urls.check)
			.then(() => {
				this.main.menu.show();
			})
			.catch(error => {
				this.main.login.show();
				console.log(error);
			});
	}
}