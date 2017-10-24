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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Block; });
/* unused harmony export FormCreator */


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
        if (attrs.elemType && attrs.elemType !== 'input') {
            el.innerHTML = attrs.value;
        }
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
        key: "setCallback",
        value: function setCallback(callback) {
            this.el.addEventListener("click", function (e) {
                e.preventDefault();
                callback();
            }, true);
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
        var ch = new Block(key.elemType, key);
        main.append(ch, key.name);
    });
}

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Router = function () {
    function Router() {
        _classCallCheck(this, Router);
    }

    _createClass(Router, [{
        key: 'init',
        value: function init(node, config) {
            this.views = config;
            this.node = node;
            this.currentHref = "/login"; //пока что так Дес не психуй
        }
    }, {
        key: 'startListen',
        value: function startListen() {
            var _this = this;

            this.node.addEventListener('click', function (event) {
                return _this._onRouteChange(event);
            });
        }
    }, {
        key: 'go',
        value: function go(href) {
            window.history.pushState({ path: href }, '', href); // for -> <-
            if (href !== this.currentHref) {
                this.views[href].view.show();
                this.views[this.currentHref].view.hide();
                this.currentHref = href;
            }
        }
    }, {
        key: '_onRouteChange',
        value: function _onRouteChange(event) {
            if (event.target instanceof HTMLAnchorElement) {
                event.preventDefault();
                this.go(event.target.getAttribute('href'));
            }
        }
    }]);

    return Router;
}();

/* harmony default export */ __webpack_exports__["a"] = (new Router());

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__block_block__ = __webpack_require__(0);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var BaseView = function () {
    function BaseView(node) {
        _classCallCheck(this, BaseView);

        this.node = node;
    }

    _createClass(BaseView, [{
        key: 'hide',
        value: function hide() {
            this.node.classList.add('hidden');
        }
    }, {
        key: 'show',
        value: function show() {
            this.node.classList.remove('hidden');
        }
    }]);

    return BaseView;
}();

/* harmony default export */ __webpack_exports__["a"] = (BaseView);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__configs_config_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_http_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_validation_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_load_bar_js__ = __webpack_require__(10);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }






var pBar = new __WEBPACK_IMPORTED_MODULE_3__modules_load_bar_js__["a" /* default */]();

var UserService = function () {
    function UserService() {
        _classCallCheck(this, UserService);
    }

    _createClass(UserService, [{
        key: "login",
        value: function login(nick, pas) {
            return new Promise(function (resolve, reject) {
                pBar.show();
                if (!__WEBPACK_IMPORTED_MODULE_2__modules_validation_js__["a" /* default */].checkLogAndPas(nick, pas)) {
                    //this.main.login.warning.setAttributes({ value: "invalid data" });
                    //this.main.login.warning.show();
                    pBar.hide();
                    reject("invalid data");
                    return;
                } else {
                    Object(__WEBPACK_IMPORTED_MODULE_1__modules_http_js__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__configs_config_js__["b" /* POST */], __WEBPACK_IMPORTED_MODULE_0__configs_config_js__["c" /* default */].login, {
                        login: nick,
                        password: pas
                    }).then(function () {
                        pbar.hide();
                        resolve();
                        return;
                    }).catch(function (err) {
                        pBar.hide();
                        reject("wrong nick or password");
                        return;
                    });
                }
            });
        }
    }, {
        key: "register",
        value: function register(nick, pas, conf) {
            return new Promise(function (resolve, reject) {
                pBar.show();
                if (!__WEBPACK_IMPORTED_MODULE_2__modules_validation_js__["a" /* default */].checkLogAndPas(nick, pas)) {
                    pBar.hide();
                    reject("invalid data");
                    return;
                } else {
                    if (!__WEBPACK_IMPORTED_MODULE_2__modules_validation_js__["a" /* default */].confirmPassword(conf, pas)) {
                        pBar.hide();
                        reject("passwords dont match");
                        return;
                    } else {
                        Object(__WEBPACK_IMPORTED_MODULE_1__modules_http_js__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__configs_config_js__["b" /* POST */], __WEBPACK_IMPORTED_MODULE_0__configs_config_js__["c" /* default */].register, { login: nick, password: pas, cf: conf }).then(function () {
                            pBar.hide();
                            resolve();
                            return;
                        }).catch(function (err) {
                            pBar.hide();
                            reject("nick already exists");
                            return;
                        });
                    }
                }
            });
        }
    }, {
        key: "logout",
        value: function logout() {
            // this.main.register.warning.hide();
            // this.main.login.warning.hide();
            return new Promise(function (resolve, reject) {
                pBar.show();
                Object(__WEBPACK_IMPORTED_MODULE_1__modules_http_js__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__configs_config_js__["a" /* GET */], __WEBPACK_IMPORTED_MODULE_0__configs_config_js__["c" /* default */].logout).then(function () {
                    //this.whoami();
                    resolve();
                }).catch(function (err) {
                    pBar.hide();
                    reject("unable to logout");
                });
            });
        }
    }, {
        key: "changePassword",
        value: function changePassword(pas, conf) {
            return new Promise(function (resolve, reject) {
                pBar.show();
                if (!__WEBPACK_IMPORTED_MODULE_2__modules_validation_js__["a" /* default */].checkPassword(pas)) {
                    // this.main.change.warning.setAttributes({ value: "invalid data" });
                    // this.main.change.warning.show();
                    pBar.hide();
                    reject("invalid data");
                } else {
                    if (!__WEBPACK_IMPORTED_MODULE_2__modules_validation_js__["a" /* default */].confirmPassword(conf, pas)) {
                        pBar.hide();
                        reject("invalid data");
                    } else {

                        Object(__WEBPACK_IMPORTED_MODULE_1__modules_http_js__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__configs_config_js__["b" /* POST */], __WEBPACK_IMPORTED_MODULE_0__configs_config_js__["c" /* default */].chagePassword, { password: pas, conf: conf }).then(function () {
                            //this.whoami();
                            resolve();
                        }).catch(function (err) {
                            pBar.hide();
                            reject("something went wrong");
                        });
                    }
                }
            });
        }
    }, {
        key: "whoami",
        value: function whoami() {
            return new Promise(function (resolve, reject) {
                Object(__WEBPACK_IMPORTED_MODULE_1__modules_http_js__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__configs_config_js__["a" /* GET */], __WEBPACK_IMPORTED_MODULE_0__configs_config_js__["c" /* default */].check).then(function () {
                    //this.main.menu.show();
                    pBar.hide();
                    resolve();
                }).catch(function (error) {
                    //this.main.login.show();
                    pBar.hide();
                    reject("its very sad");
                });
            });
        }
    }]);

    return UserService;
}();

/* harmony default export */ __webpack_exports__["a"] = (UserService);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__block_block_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_Router__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views_LoginView__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__views_RegisterView__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__views_MenuView__ = __webpack_require__(13);






var app = document.getElementById("application");
var main = new __WEBPACK_IMPORTED_MODULE_0__block_block_js__["a" /* Block */]("div", { class: "main-container" });
app.appendChild(main.el);

//MainGenerator(main);


//config
var login = new __WEBPACK_IMPORTED_MODULE_2__views_LoginView__["a" /* default */](main.el);
var register = new __WEBPACK_IMPORTED_MODULE_3__views_RegisterView__["a" /* default */](main.el);
var menu = new __WEBPACK_IMPORTED_MODULE_4__views_MenuView__["a" /* default */](main.el);

login.show();

var config = {
    '/login': {
        view: login
    },
    '/register': {
        view: register
    },
    '/menu': {
        view: menu
    },
    '/': {
        view: login
    },
    '/changepassword': {
        // view: change
    }
};

///
//const router = new Router(main.el, config);
__WEBPACK_IMPORTED_MODULE_1__utils_Router__["a" /* default */].init(main.el, config);
__WEBPACK_IMPORTED_MODULE_1__utils_Router__["a" /* default */].startListen();
__WEBPACK_IMPORTED_MODULE_1__utils_Router__["a" /* default */].go("/login");
//router.go("/login");


// main.login.loginBtn.setCallback(() => {
//     userService.login(main.login.nick.el.value,
//         main.login.password.el.value);
// });
// main.login.changeformBtn.setCallback(() => {
//     main.login.hide();
//     main.register.show();
// });

// main.register.registerBtn.setCallback(() => {
//     userService.register(main.register.nick.el.value,
//         main.register.password.el.value, main.register.confirm.el.value);

// });
// main.register.changeformBtn.setCallback(() => {
//     main.login.show();
//     main.register.hide();
// });

// main.menu.changeBtn.setCallback(() => {
//     main.menu.hide();
//     main.change.show();
// });
// main.menu.logoutBtn.setCallback(() => {
//     userService.logout();
// });

// main.change.changeBtn.setCallback(() => {
//     userService.changePassword(main.change.password.el.value,
//         main.change.confirm.el.value);
// });
// main.change.changeformBtn.setCallback(() => {
//     main.change.hide();
//     main.menu.show();
// });

// main.menu.play.setCallback(() => {
//     main.menu.hide();
//     main.game.show();
// });

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BaseView__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__block_block__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_Router__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__(3);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var userService = new __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* default */]();

var LoginView = function (_BaseView) {
    _inherits(LoginView, _BaseView);

    function LoginView(parentNode) {
        _classCallCheck(this, LoginView);

        var view = new __WEBPACK_IMPORTED_MODULE_2__block_block__["a" /* Block */]("div", { class: "login hidden" });

        var _this = _possibleConstructorReturn(this, (LoginView.__proto__ || Object.getPrototypeOf(LoginView)).call(this, view.el));

        _this.view = view;
        _this.parentNode = parentNode;
        _this.parentNode.appendChild(_this.view.el);
        _this._appendChildren();
        _this._buttonsInit();
        return _this;
    }

    _createClass(LoginView, [{
        key: '_appendChildren',
        value: function _appendChildren() {
            var _this2 = this;

            __WEBPACK_IMPORTED_MODULE_1__login_js__["a" /* default */].forEach(function (key) {
                var ch = new __WEBPACK_IMPORTED_MODULE_2__block_block__["a" /* Block */](key.elemType, key);
                _this2.view.el.appendChild(ch.el);
                _this2[key.name] = ch;
            });
        }
    }, {
        key: '_buttonsInit',
        value: function _buttonsInit() {
            var _this3 = this;

            this.loginBtn.setCallback(function () {
                userService.login(_this3.nick.el.value, _this3.password.el.value).then(function () {
                    __WEBPACK_IMPORTED_MODULE_3__utils_Router__["a" /* default */].go(_this3.loginBtn.el.getAttribute("href"));
                }).catch(function (err) {
                    _this3.warning.setAttributes({ value: err });
                    _this3.warning.show();
                });

                _this3.changeformBtn.setCallback(function () {
                    __WEBPACK_IMPORTED_MODULE_3__utils_Router__["a" /* default */].go(_this3.changeformBtn.el.getAttribute("href"));
                });
            });
        }
    }]);

    return LoginView;
}(__WEBPACK_IMPORTED_MODULE_0__BaseView__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (LoginView);

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


var loginFields = [{
    name: "nick",
    class: "inputClass",
    elemType: "input",
    type: "text",
    placeholder: "Nickname"
}, {
    name: "password",
    class: "inputClass",
    elemType: "input",
    type: "password",
    placeholder: "Password"
}, {
    name: "loginBtn",
    class: "login__button button",
    elemType: "input",
    type: "button",
    value: "Log In",
    href: "/menu"
}, {
    name: "changeformBtn",
    class: "login__button button",
    elemType: "a",
    value: "Havent Account?",
    href: "/register"
}, {
    name: "warning",
    class: "warning",
    elemType: "input",
    type: "text",
    value: "Invalid Data",
    readonly: "true",
    hidden: "true"
}];
/* harmony default export */ __webpack_exports__["a"] = (loginFields);

/***/ }),
/* 7 */
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
/* 8 */
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
/* 9 */
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
/* 10 */
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

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BaseView__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__register_js__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__block_block__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_Router__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__(3);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var userService = new __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* default */]();

var RegisterView = function (_BaseView) {
    _inherits(RegisterView, _BaseView);

    function RegisterView(parentNode) {
        _classCallCheck(this, RegisterView);

        var view = new __WEBPACK_IMPORTED_MODULE_2__block_block__["a" /* Block */]("div", { class: "register hidden" });

        var _this = _possibleConstructorReturn(this, (RegisterView.__proto__ || Object.getPrototypeOf(RegisterView)).call(this, view.el));

        _this.view = view;
        _this.parentNode = parentNode;
        _this.parentNode.appendChild(_this.view.el);
        _this._appendChildren();
        _this._buttonsInit();
        return _this;
    }

    _createClass(RegisterView, [{
        key: '_appendChildren',
        value: function _appendChildren() {
            var _this2 = this;

            __WEBPACK_IMPORTED_MODULE_1__register_js__["a" /* default */].forEach(function (key) {
                var ch = new __WEBPACK_IMPORTED_MODULE_2__block_block__["a" /* Block */](key.elemType, key);
                _this2.view.el.appendChild(ch.el);
                _this2[key.name] = ch;
            });
        }
    }, {
        key: '_buttonsInit',
        value: function _buttonsInit() {
            var _this3 = this;

            this.registerBtn.setCallback(function () {
                userService.register(_this3.nick.el.value, _this3.password.el.value, _this3.confirm.el.value).then(function () {
                    __WEBPACK_IMPORTED_MODULE_3__utils_Router__["a" /* default */].go(_this3.registerBtn.el.getAttribute("href"));
                }).catch(function (err) {
                    _this3.warning.setAttributes({ value: err });
                    _this3.warning.show();
                });

                _this3.changeformBtn.setCallback(function () {
                    __WEBPACK_IMPORTED_MODULE_3__utils_Router__["a" /* default */].go(_this3.changeformBtnюel.getAttribute("href"));
                });
            });
        }
    }]);

    return RegisterView;
}(__WEBPACK_IMPORTED_MODULE_0__BaseView__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (RegisterView);

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


var registerFields = [{
    class: "inputClass",
    type: "text",
    name: "nick",
    placeholder: "Nickname",
    elemType: "input"
}, {
    class: "inputClass",
    type: "password",
    name: "password",
    placeholder: "Password",
    elemType: "input"
}, {
    class: "inputClass",
    type: "password",
    name: "confirm",
    placeholder: "Confirm Password",
    elemType: "input"
}, {
    name: "registerBtn",
    class: "register__button button",
    elemType: "input",
    type: "button",
    value: "Register",
    href: "/menu"

}, {
    name: "changeformBtn",
    class: "register__button button",
    elemType: "a",
    value: "Already Have Account?",
    href: "/login"
}, {
    name: "warning",
    class: "warning",
    type: "text",
    value: "Invalid Data",
    elemType: "input",
    readonly: "true",
    hidden: "true"
}];

/* harmony default export */ __webpack_exports__["a"] = (registerFields);

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BaseView__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__menu_js__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__block_block__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_Router__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__(3);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var userService = new __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* default */]();

var MenuView = function (_BaseView) {
    _inherits(MenuView, _BaseView);

    function MenuView(parentNode) {
        _classCallCheck(this, MenuView);

        var view = new __WEBPACK_IMPORTED_MODULE_2__block_block__["a" /* Block */]("div", { class: "menu hidden" });

        var _this = _possibleConstructorReturn(this, (MenuView.__proto__ || Object.getPrototypeOf(MenuView)).call(this, view.el));

        _this.view = view;
        _this.parentNode = parentNode;
        _this.parentNode.appendChild(_this.view.el);
        _this._appendChildren();
        _this._buttonsInit();
        return _this;
    }

    _createClass(MenuView, [{
        key: '_appendChildren',
        value: function _appendChildren() {
            var _this2 = this;

            __WEBPACK_IMPORTED_MODULE_1__menu_js__["a" /* default */].forEach(function (key) {
                var ch = new __WEBPACK_IMPORTED_MODULE_2__block_block__["a" /* Block */](key.elemType, key);
                _this2.view.el.appendChild(ch.el);
                _this2[key.name] = ch;
            });
        }
    }, {
        key: '_buttonsInit',
        value: function _buttonsInit() {}
    }]);

    return MenuView;
}(__WEBPACK_IMPORTED_MODULE_0__BaseView__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (MenuView);

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


var menuFields = [{
    name: "changeBtn",
    class: "menu__button",
    elemType: "a",
    href: "/changepass",
    value: "Change Password"
}, {
    name: "logoutBtn",
    class: "menu__button",
    elemType: "a",
    href: "/login",
    value: "log out"
}, {
    name: "scoreboardBtn",
    class: "menu__button",
    elemType: "a",
    value: "scoreboard"
}, {
    name: "play",
    class: "menu__button",
    elemType: "a",
    value: "play"
}];
/* harmony default export */ __webpack_exports__["a"] = (menuFields);

/***/ })
/******/ ]);