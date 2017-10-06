import urls, { GET, POST } from "../configs/config.js";
import sections from "../configs/sections.js";
import httpReq from "../modules/http.js";
import Validate from "../modules/validation.js";
import PBar from "../modules/load-bar.js";

let pBar = new PBar();

/**
 * Сервис для работы с юзерами
 * @module UserService
 */
export default class UserService {
	constructor() {}

	/**
     * Вход пользователя
     * @param {string} nick
     * @param {string} password
     */
	login(nick, pas) {
		if (!Validate.checkLogAndPas(nick, pas)) {
			sections.login.loginform.warningMsg("Invalid Data", false);
		} else {
			pBar.show();
			httpReq(POST, urls.login, {
				login: nick,
				password: pas
			})
				.then(() => {
					this._whoami();
				})
				.catch(err => {
					sections.login.loginform.warningMsg("Wrong Nick or Password", false);
					console.log(err);
					pBar.hide();
				});
		}
	}

	/**
     * Регистрирует нового пользователя
     * @param {string} nick
     * @param {string} password
     * @param {string} confirm
     */
	register(nick, pas, conf) {
		if (!Validate.checkLogAndPas(nick, pas)) {
			sections.register.registerform.warningMsg("Invalid Data", false);
		} else {
			if (!Validate.confirmPassword(conf, pas)) {
				sections.register.registerform.warningMsg("Passwords Dont Match", false);
			} else {
				pBar.show();
				httpReq(POST, urls.register, { login: nick, password: pas, cf: conf })
					.then(() => {
						this._whoami();
					})
					.catch(err => {
						sections.register.registerform.warningMsg("This Nick already Exists", false);
						console.log(err);
						pBar.hide();
					});
			}
		}
	}

	/**
     * Закрывает сессию пользователя
     */
	logout() {
		sections.login.loginform.warningMsg("", true);
		sections.register.registerform.warningMsg("", true);
		pBar.show();
		httpReq(GET, urls.logout)
			.then(() => {
				this._whoami();
			})
			.catch(err => {
				console.log(err);
				pBar.hide();
			});
	}

	/**
     * Смена пароля пользователя
     * @param {string} password
     * @param {string} confirm
     */
	changePassword(pas, conf) {
		if (!Validate.checkPassword(pas)) {
			sections.change.changeform.warningMsg("Invalid Data", false);
		} else {
			if (!Validate.confirmPassword(conf, pas)) {
				sections.change.changeform.warningMsg("Passwords Dont Match", false);
			} else {
				pBar.show();
				httpReq(POST, urls.chagePassword, { password: pas, conf })
					.then(() => {
						this._whoami();
					})
					.catch(err => {
						console.log(err);
						pBar.hide();
					});
			}
		}
	}

	/**
     * Проверить залогинен ли пользователь
     */
	check() {
		pBar.show();
		this._whoami();
	}

	_whoami() {
		sections.hide();
		httpReq(GET, urls.check)
			.then(() => {
				pBar.hide();
				sections.hide();
				sections.menu.show();
			})
			.catch(error => {
				pBar.hide();
				sections.login.show();
				console.log(error);
			});
	}
}