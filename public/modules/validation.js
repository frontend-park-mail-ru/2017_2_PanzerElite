export default class Validate {
    constructor() {}

    /**
     * Проверить логин(ник)
     */
    static checkLogin(nick) {
        return (nick.length < 20 && nick.length > 1);
    }

    /**
     * Проверить пароль
     */
    static checkPassword(password) {
        return (password.length < 20 && password.length > 1);
    }

    /**
     * Проверить совпадение паролей
     */
    static confirmPassword(password, confirm) {
        return password === confirm;
    }

    /**
     * Проверить логин(ник) и пароль
     */
    static checkLogAndPas(nick, password) {
        return (this.checkLogin(nick) && this.checkPassword(password));
    }
}