import Block from "../blocks/block/index.js";
const sections = {
    menu: Block.Create('section', {}, ['form']),
    login: Block.Create('section', {}, ['form']),
    register: Block.Create('section', {}, ['form']),
    change: Block.Create('section', {}, ['form']),
    hide() {
        this.menu.hide();
        this.login.hide();
        this.register.hide();
        this.change.hide();
    }
};
export const sectionButtons = {
    menu: {
        changePassword: 0,
        logout: 1,
    },
    login: {
        goToRegister: 0,
    },
    register: {
        goToLogin: 0,
    },
    change: {
        goToMenu: 0,
    }
};

export default sections;