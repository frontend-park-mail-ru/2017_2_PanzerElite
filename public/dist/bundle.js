/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Block; });
/* harmony export (immutable) */ __webpack_exports__["b"] = FormCreator;


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Block = function () {
	function Block(type) {
		var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		_classCallCheck(this, Block);

		var el = document.createElement(type);
		Object.keys(attrs).forEach(function (key) {
			el.setAttribute(key, attrs[key]);
		});
		this.el = el;
	}

	_createClass(Block, [{
		key: "clear",
		value: function clear() {
			this.el.innerHTML = "";
		}
	}, {
		key: "hide",
		value: function hide() {
			this.el.setAttribute("hidden", "hidden");
		}
	}, {
		key: "show",
		value: function show() {
			this.el.removeAttribute("hidden");
		}
	}, {
		key: "append",
		value: function append(block, name) {
			this.el.appendChild(block.el);
			this[name] = block;
		}
	}, {
		key: "setCallback",
		value: function setCallback(callback) {
			this.el.addEventListener("click", function (e) {
				e.preventDefault();
				callback();
			}, false);
		}
	}, {
		key: "setAttributes",
		value: function setAttributes() {
			var _this = this;

			var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

			Object.keys(attrs).forEach(function (key) {
				_this.el.setAttribute(key, attrs[key]);
			});
		}
	}]);

	return Block;
}();

function FormCreator(main) {
	var children = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

	children.forEach(function (key) {
		var ch = new Block("input", key);
		main.append(ch, key.name);
	});
}

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_mainGenerator_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__block_block_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_js__ = __webpack_require__(8);




var app = document.getElementById("application");
var main = new __WEBPACK_IMPORTED_MODULE_1__block_block_js__["a" /* Block */]("div", {});
app.appendChild(main.el);

Object(__WEBPACK_IMPORTED_MODULE_0__modules_mainGenerator_js__["a" /* MainGenerator */])(main);

var userService = new __WEBPACK_IMPORTED_MODULE_2__services_user_service_js__["a" /* default */](main);

userService.whoami();

main.login.loginBtn.setCallback(function () {
	userService.login(main.login.nick.el.value, main.login.password.el.value);
});
main.login.changeformBtn.setCallback(function () {
	main.login.hide();
	main.register.show();
});

main.register.registerBtn.setCallback(function () {
	userService.register(main.register.nick.el.value, main.register.password.el.value, main.register.confirm.el.value);
});
main.register.changeformBtn.setCallback(function () {
	main.login.show();
	main.register.hide();
});

main.menu.changeBtn.setCallback(function () {
	main.menu.hide();
	main.change.show();
});
main.menu.logoutBtn.setCallback(function () {
	userService.logout();
});

main.change.changeBtn.setCallback(function () {
	userService.changePassword(main.change.password.el.value, main.change.confirm.el.value);
});
main.change.changeformBtn.setCallback(function () {
	main.change.hide();
	main.menu.show();
});

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = MainGenerator;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__configs_forms_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__block_block_js__ = __webpack_require__(0);



function MainGenerator(main) {
	__WEBPACK_IMPORTED_MODULE_0__configs_forms_js__["a" /* forms */].forEach(function (key) {
		var form = new __WEBPACK_IMPORTED_MODULE_1__block_block_js__["a" /* Block */]("form", { hidden: true, class: "form" });
		Object(__WEBPACK_IMPORTED_MODULE_1__block_block_js__["b" /* FormCreator */])(form, key.children);
		main.append(form, key.name);
	});
}

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return forms; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__views_login_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__views_menu_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views_change_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__views_register_js__ = __webpack_require__(7);





var forms = [{
	name: "login",
	children: __WEBPACK_IMPORTED_MODULE_0__views_login_js__["a" /* default */]
}, {
	name: "register",
	children: __WEBPACK_IMPORTED_MODULE_3__views_register_js__["a" /* default */]
}, {
	name: "menu",
	children: __WEBPACK_IMPORTED_MODULE_1__views_menu_js__["a" /* default */]
}, {
	name: "change",
	children: __WEBPACK_IMPORTED_MODULE_2__views_change_js__["a" /* default */]
}];

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


var loginFields = [{
	name: "nick",
	class: "inputClass",
	type: "text",
	placeholder: "Nickname"
}, {
	name: "password",
	class: "inputClass",
	type: "password",
	placeholder: "Password"
}, {
	name: "loginBtn",
	class: "button",
	type: "button",
	value: "Log In"
}, {
	name: "changeformBtn",
	class: "button",
	type: "button",
	value: "Havent Account?"

}, {
	name: "warning",
	class: "warning",
	type: "text",
	value: "Invalid Data",
	readonly: "true",
	hidden: "true"
}];
/* harmony default export */ __webpack_exports__["a"] = (loginFields);

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


var menuFields = [{
	name: "changeBtn",
	class: "button",
	type: "button",
	value: "Change Password"
}, {
	name: "logoutBtn",
	class: "button",
	type: "button",
	value: "log out"
}, {
	name: "scoreboardBtn",
	class: "button",
	type: "button",
	value: "scoreboard"
}];
/* harmony default export */ __webpack_exports__["a"] = (menuFields);

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


var changeFields = [{

	class: "inputClass",
	type: "password",
	name: "password",
	placeholder: "Password"

}, {

	class: "inputClass",
	type: "password",
	name: "confirm",
	placeholder: "Confirm"

}, {
	name: "changeBtn",
	class: "button",
	type: "button",
	value: "Change"

}, {
	name: "changeformBtn",
	class: "button",
	type: "button",
	value: "back to menu"

}, {
	name: "warning",
	class: "warning",
	type: "text",
	value: "Invalid Data",
	readonly: "true",
	hidden: "true"

}];
/* harmony default export */ __webpack_exports__["a"] = (changeFields);

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


var registerFields = [{

	class: "inputClass",
	type: "text",
	name: "nick",
	placeholder: "Nickname"

}, {

	class: "inputClass",
	type: "password",
	name: "password",
	placeholder: "Password"

}, {

	class: "inputClass",
	type: "password",
	name: "confirm",
	placeholder: "Confirm Password"

}, {
	name: "registerBtn",
	class: "button",
	type: "button",
	value: "Register"

}, {
	name: "changeformBtn",
	class: "button",
	type: "button",
	value: "Already Have Account?"

}, {
	name: "warning",
	class: "warning",
	type: "text",
	value: "Invalid Data",
	readonly: "true",
	hidden: "true"

}];

/* harmony default export */ __webpack_exports__["a"] = (registerFields);

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__configs_config_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_http_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_validation_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_load_bar_js__ = __webpack_require__(12);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }






var pBar = new __WEBPACK_IMPORTED_MODULE_3__modules_load_bar_js__["a" /* default */]();

var UserService = function () {
	function UserService(main) {
		_classCallCheck(this, UserService);

		pBar.show();
		this.main = main;
	}

	_createClass(UserService, [{
		key: "login",
		value: function login(nick, pas) {
			var _this = this;

			pBar.show();
			this.main.register.warning.hide();
			if (!__WEBPACK_IMPORTED_MODULE_2__modules_validation_js__["a" /* default */].checkLogAndPas(nick, pas)) {
				this.main.login.warning.setAttributes({ value: "invalid data" });
				this.main.login.warning.show();
				pBar.hide();
			} else {

				Object(__WEBPACK_IMPORTED_MODULE_1__modules_http_js__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__configs_config_js__["b" /* POST */], __WEBPACK_IMPORTED_MODULE_0__configs_config_js__["c" /* default */].login, {
					login: nick,
					password: pas
				}).then(function () {
					_this.whoami();
				}).catch(function (err) {
					_this.main.login.warning.setAttributes({ value: "wrong nick or password" });
					_this.main.login.warning.show();
					console.log(err);
					pBar.hide();
				});
			}
		}
	}, {
		key: "register",
		value: function register(nick, pas, conf) {
			var _this2 = this;

			pBar.show();
			this.main.login.warning.hide();
			if (!__WEBPACK_IMPORTED_MODULE_2__modules_validation_js__["a" /* default */].checkLogAndPas(nick, pas)) {
				this.main.register.warning.setAttributes({ value: "invalid data" });
				this.main.register.warning.show();
				pBar.hide();
			} else {
				if (!__WEBPACK_IMPORTED_MODULE_2__modules_validation_js__["a" /* default */].confirmPassword(conf, pas)) {
					this.main.register.warning.setAttributes({ value: "passwords dont match" });
					this.main.register.warning.show();
					pBar.hide();
				} else {
					Object(__WEBPACK_IMPORTED_MODULE_1__modules_http_js__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__configs_config_js__["b" /* POST */], __WEBPACK_IMPORTED_MODULE_0__configs_config_js__["c" /* default */].register, { login: nick, password: pas, cf: conf }).then(function () {
						_this2.whoami();
					}).catch(function (err) {
						_this2.main.register.warning.setAttributes({ value: "nick already exists" });
						_this2.main.register.warning.show();
						console.log(err);
						pBar.hide();
					});
				}
			}
		}
	}, {
		key: "logout",
		value: function logout() {
			var _this3 = this;

			this.main.register.warning.hide();
			this.main.login.warning.hide();
			pBar.show();
			Object(__WEBPACK_IMPORTED_MODULE_1__modules_http_js__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__configs_config_js__["a" /* GET */], __WEBPACK_IMPORTED_MODULE_0__configs_config_js__["c" /* default */].logout).then(function () {
				_this3.whoami();
			}).catch(function (err) {
				console.log(err);
				pBar.hide();
			});
		}
	}, {
		key: "changePassword",
		value: function changePassword(pas, conf) {
			var _this4 = this;

			pBar.show();
			if (!__WEBPACK_IMPORTED_MODULE_2__modules_validation_js__["a" /* default */].checkPassword(pas)) {
				this.main.change.warning.setAttributes({ value: "invalid data" });
				this.main.change.warning.show();
				pBar.hide();
			} else {
				if (!__WEBPACK_IMPORTED_MODULE_2__modules_validation_js__["a" /* default */].confirmPassword(conf, pas)) {
					this.main.change.warning.setAttributes({ value: "passwords dont match" });
					this.main.change.warning.show();
					pBar.hide();
				} else {

					Object(__WEBPACK_IMPORTED_MODULE_1__modules_http_js__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__configs_config_js__["b" /* POST */], __WEBPACK_IMPORTED_MODULE_0__configs_config_js__["c" /* default */].chagePassword, { password: pas, conf: conf }).then(function () {
						_this4.whoami();
					}).catch(function (err) {
						console.log(err);
						pBar.hide();
					});
				}
			}
		}
	}, {
		key: "whoami",
		value: function whoami() {
			var _this5 = this;

			this.main.login.hide();
			this.main.register.hide();
			this.main.menu.hide();
			this.main.change.hide();
			Object(__WEBPACK_IMPORTED_MODULE_1__modules_http_js__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__configs_config_js__["a" /* GET */], __WEBPACK_IMPORTED_MODULE_0__configs_config_js__["c" /* default */].check).then(function () {
				_this5.main.menu.show();
				pBar.hide();
			}).catch(function (error) {
				_this5.main.login.show();
				pBar.hide();
				console.log(error);
			});
		}
	}]);

	return UserService;
}();

/* harmony default export */ __webpack_exports__["a"] = (UserService);

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return POST; });
var PREFIX_URL = "https://salty-shelf-19870.herokuapp.com/api/user/";
// const PREFIX_URL = "http://127.0.0.1:8080/api/user/";
var urls = {
	login: PREFIX_URL + "login",
	register: PREFIX_URL + "register",
	logout: PREFIX_URL + "logout",
	check: PREFIX_URL + "getuser",
	chagePassword: PREFIX_URL + "changepassword"
};
var GET = "GET";
var POST = "POST";

/* harmony default export */ __webpack_exports__["c"] = (urls);


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Модуль, предоставляющий методы для выполнения HTTP-запросов
 * @module Http
 */
function httpReq(type, uRL, sendObject) {
	return new Promise(function (resolve, reject) {
		fetch(uRL, {
			method: type,
			headers: {
				"Content-Type": "application/json; charset=utf-8"
			},
			body: JSON.stringify(sendObject),
			mode: "cors",
			credentials: "include"
		}).then(function (response) {
			if (response.status === 200) {
				resolve();
			} else {
				reject("Something went wrong");
			}
		});
	});
}
/* harmony default export */ __webpack_exports__["a"] = (httpReq);

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Validate = function () {
	function Validate() {
		_classCallCheck(this, Validate);
	}

	/**
     * Проверить логин(ник)
     */


	_createClass(Validate, null, [{
		key: "checkLogin",
		value: function checkLogin(nick) {
			return nick.length < 20 && nick.length > 1;
		}

		/**
      * Проверить пароль
      */

	}, {
		key: "checkPassword",
		value: function checkPassword(password) {
			return password.length < 20 && password.length > 1;
		}

		/**
      * Проверить совпадение паролей
      */

	}, {
		key: "confirmPassword",
		value: function confirmPassword(password, confirm) {
			return password === confirm;
		}

		/**
      * Проверить логин(ник) и пароль
      */

	}, {
		key: "checkLogAndPas",
		value: function checkLogAndPas(nick, password) {
			return this.checkLogin(nick) && this.checkPassword(password);
		}
	}]);

	return Validate;
}();

/* harmony default export */ __webpack_exports__["a"] = (Validate);

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//import "./load-bar.css";
var pBar = function () {
	function pBar() {
		_classCallCheck(this, pBar);

		this.elem = document.getElementsByClassName("myBar")[0];
		this.id;
	}

	/**
     * Показать прогресс бар 
     */


	_createClass(pBar, [{
		key: "show",
		value: function show() {
			var _this = this;

			this.elem.hidden = false;
			var shift = 1;
			this.id = setInterval(function () {
				if (shift >= 98) {
					shift = 1;
				} else {
					shift++;
				}
				_this.elem.style.left = shift + "%";
			}, 10);
		}

		/**
      * Скрыть прогресс бар 
      */

	}, {
		key: "hide",
		value: function hide() {
			this.elem.hidden = true;
			clearInterval(this.id);
		}
	}]);

	return pBar;
}();

/* harmony default export */ __webpack_exports__["a"] = (pBar);

/***/ })
/******/ ]);