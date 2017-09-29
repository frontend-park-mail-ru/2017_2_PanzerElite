export default class Validate {
	constructor() {}
	static checkLogin(nick) {
		return (nick.length < 20 && nick.length > 1);
	}
	static checkPassword(password) {
		return (password.length < 20 && password.length > 1);
	}
	static confirmPassword(password, confirm) {
		return password === confirm;
	}
	static checkLogAndPas(nick, password) {
		return (this.checkLogin(nick) && this.checkPassword(password));
	}
}