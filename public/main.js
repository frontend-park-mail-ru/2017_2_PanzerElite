"use strict";

import Block from "./blocks/block/index.js";
import Form from "./blocks/form/index.js";
import loginFields from "./configs/login-fields.js";
import changeFields from "./configs/change-password-fields.js";
import registerFields from "./configs/register-fields.js";
import menuFields from "./configs/menu-fields.js";
import UserService from "./services/user-service.js";
import sections, { sectionButtons } from "./configs/sections.js";

const userService = new UserService();

const app = new Block(document.getElementById("application"));

openLogin();
openChange();
openMenu();
openRegister();
sections.hide();
userService.whoami();

app
	.append(sections.menu)
	.append(sections.login)
	.append(sections.register)
	.append(sections.change);

function openLogin() {
	sections.login.show();
	if (!sections.login.ready) {
		sections.login.loginform = new Form(loginFields);
		sections.login.loginform.onSubmit(function(formdata) {
			userService.login(formdata.nick, formdata.password);
		});
		sections.login.loginform.onButton(sectionButtons.login.goToRegister, function() {
			sections.login.hide();
			sections.register.show();

		});
		sections.login
			.append(sections.login.loginform);
		sections.login.ready = true;
	}
}

function openRegister() {
	sections.register.show();
	if (!sections.register.ready) {
		sections.register.registerform = new Form(registerFields);
		sections.register.registerform.onSubmit(function(formdata) {
			userService.register(formdata.nick, formdata.password, formdata.confirm);
		});
		sections.register.registerform.onButton(sectionButtons.register.goToLogin, function() {
			sections.login.show();
			sections.register.hide();
		});
		sections.register
			.append(sections.register.registerform);
		sections.register.ready = true;
	}
}

function openMenu() {
	sections.menu.show();
	if (!sections.menu.ready) {
		sections.menu.menuform = new Form(menuFields);
		sections.menu.menuform.onButton(sectionButtons.menu.changePassword, function() {
			sections.hide();
			sections.change.show();
		});
		sections.menu.menuform.onButton(sectionButtons.menu.logout, function() {
			userService.logout();
		});
		sections.menu
			.append(sections.menu.menuform);
		sections.menu.ready = true;
	}
}

function openChange() {
	sections.change.show();
	if (!sections.change.ready) {
		sections.change.changeform = new Form(changeFields);
		sections.change.changeform.onSubmit(function(formdata) {
			userService.changePassword(formdata.password, formdata.confirm);
		});
		sections.change.changeform.onButton(sectionButtons.change.goToMenu, function() {
			sections.hide();
			sections.menu.show();
		});
		sections.change
			.append(sections.change.changeform);
		sections.change.ready = true;
	}
}