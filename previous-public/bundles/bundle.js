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
			/******/ 			function getDefault() { return module["default"]; } :
			/******/ 			function getModuleExports() { return module; };
		/******/ 		__webpack_require__.d(getter, "a", getter);
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
	/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

		"use strict";


		Object.defineProperty(exports, "__esModule", {
			value: true
		});

		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		var Block = function () {
			function Block(el) {
				_classCallCheck(this, Block);

				this.el = el;
			}

			_createClass(Block, [{
				key: "setText",
				value: function setText(text) {
					this.el.textContent = text;
				}
			}, {
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
				value: function append(block) {
					this.el.appendChild(block.el);
					return this;
				}
			}], [{
				key: "Create",
				value: function Create() {
					var tagName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "div";
					var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
					var classes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
					var text = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

					var el = document.createElement(tagName);
					classes.forEach(function (className) {
						el.classList.add(className);
					});
					Object.keys(attrs).forEach(function (key) {
						el.setAttribute(key, attrs[key]);
					});
					if (text) {
						el.textContent = text;
					}
					return new Block(el);
				}
			}]);

			return Block;
		}();

		exports.default = Block;

		/***/ }),
	/* 1 */
	/***/ (function(module, exports, __webpack_require__) {

		"use strict";


		Object.defineProperty(exports, "__esModule", {
			value: true
		});
		exports.sectionButtons = undefined;

		var _block = __webpack_require__(0);

		var _block2 = _interopRequireDefault(_block);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		var sections = {
			menu: _block2.default.Create("section", {}, ["form"]),
			login: _block2.default.Create("section", {}, ["form"]),
			register: _block2.default.Create("section", {}, ["form"]),
			change: _block2.default.Create("section", {}, ["form"]),
			scoreboard: _block2.default.Create("section", {}, ["form"]),
			hide: function hide() {
				this.menu.hide();
				this.login.hide();
				this.register.hide();
				this.change.hide();
				this.scoreboard.hide();
			}
		};
		var sectionButtons = exports.sectionButtons = {
			menu: {
				changePassword: 0,
				logout: 1,
				scoreboard: 2
			},
			login: {
				goToRegister: 0
			},
			register: {
				goToLogin: 0
			},
			change: {
				goToMenu: 0
			}
		};

		exports.default = sections;

		/***/ }),
	/* 2 */
	/***/ (function(module, exports, __webpack_require__) {

		"use strict";


		__webpack_require__(3);

		var _block = __webpack_require__(0);

		var _block2 = _interopRequireDefault(_block);

		var _scoreboard = __webpack_require__(4);

		var _scoreboard2 = _interopRequireDefault(_scoreboard);

		var _form = __webpack_require__(6);

		var _form2 = _interopRequireDefault(_form);

		var _loginFields = __webpack_require__(8);

		var _loginFields2 = _interopRequireDefault(_loginFields);

		var _changePasswordFields = __webpack_require__(9);

		var _changePasswordFields2 = _interopRequireDefault(_changePasswordFields);

		var _registerFields = __webpack_require__(10);

		var _registerFields2 = _interopRequireDefault(_registerFields);

		var _menuFields = __webpack_require__(11);

		var _menuFields2 = _interopRequireDefault(_menuFields);

		var _userService = __webpack_require__(12);

		var _userService2 = _interopRequireDefault(_userService);

		var _sections = __webpack_require__(1);

		var _sections2 = _interopRequireDefault(_sections);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		var userService = new _userService2.default();

		var app = new _block2.default(document.getElementById("application"));

		openScoreboard();
		openLogin();
		openChange();
		openMenu();
		openRegister();
		_sections2.default.hide();
		userService.check();

		app.append(_sections2.default.menu).append(_sections2.default.login).append(_sections2.default.register).append(_sections2.default.scoreboard).append(_sections2.default.change);

		function openLogin() {
			_sections2.default.login.show();
			if (!_sections2.default.login.ready) {
				_sections2.default.login.loginform = new _form2.default(_loginFields2.default);
				_sections2.default.login.loginform.onSubmit(function (formdata) {
					userService.login(formdata.nick, formdata.password);
				});
				_sections2.default.login.loginform.onButton(_sections.sectionButtons.login.goToRegister, function () {
					_sections2.default.login.hide();
					_sections2.default.register.show();
				});
				_sections2.default.login.append(_sections2.default.login.loginform);
				_sections2.default.login.ready = true;
			}
		}

		function openRegister() {
			_sections2.default.register.show();
			if (!_sections2.default.register.ready) {
				_sections2.default.register.registerform = new _form2.default(_registerFields2.default);
				_sections2.default.register.registerform.onSubmit(function (formdata) {
					userService.register(formdata.nick, formdata.password, formdata.confirm);
				});
				_sections2.default.register.registerform.onButton(_sections.sectionButtons.register.goToLogin, function () {
					_sections2.default.login.show();
					_sections2.default.register.hide();
				});
				_sections2.default.register.append(_sections2.default.register.registerform);
				_sections2.default.register.ready = true;
			}
		}

		function openMenu() {
			_sections2.default.menu.show();
			if (!_sections2.default.menu.ready) {
				_sections2.default.menu.menuform = new _form2.default(_menuFields2.default);
				_sections2.default.menu.menuform.onButton(_sections.sectionButtons.menu.changePassword, function () {
					_sections2.default.hide();
					_sections2.default.change.show();
				});
				_sections2.default.menu.menuform.onButton(_sections.sectionButtons.menu.logout, function () {
					userService.logout();
				});
				_sections2.default.menu.menuform.onButton(_sections.sectionButtons.menu.scoreboard, function () {
					openScoreboard();
				});
				_sections2.default.menu.append(_sections2.default.menu.menuform);
				_sections2.default.menu.ready = true;
			}
		}

		function openChange() {
			_sections2.default.change.show();
			if (!_sections2.default.change.ready) {
				_sections2.default.change.changeform = new _form2.default(_changePasswordFields2.default);
				_sections2.default.change.changeform.onSubmit(function (formdata) {
					userService.changePassword(formdata.password, formdata.confirm);
				});
				_sections2.default.change.changeform.onButton(_sections.sectionButtons.change.goToMenu, function () {
					_sections2.default.hide();
					_sections2.default.menu.show();
				});
				_sections2.default.change.append(_sections2.default.change.changeform);
				_sections2.default.change.ready = true;
			}
		}

		function openScoreboard() {
			if (!_sections2.default.scoreboard.ready) {
				_sections2.default.scoreboard.score = new _scoreboard2.default();
				_sections2.default.scoreboard.append(_sections2.default.scoreboard.score);
				_sections2.default.scoreboard.ready = true;
			}
			_sections2.default.hide();
			_sections2.default.scoreboard.score.update();
			_sections2.default.scoreboard.show();
		}

		/***/ }),
	/* 3 */
	/***/ (function(module, exports) {

		// removed by extract-text-webpack-plugin

		/***/ }),
	/* 4 */
	/***/ (function(module, exports, __webpack_require__) {

		"use strict";


		Object.defineProperty(exports, "__esModule", {
			value: true
		});

		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

		var _block = __webpack_require__(0);

		var _block2 = _interopRequireDefault(_block);

		var _ScoreboardTEMPLATE = __webpack_require__(5);

		var _ScoreboardTEMPLATE2 = _interopRequireDefault(_ScoreboardTEMPLATE);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

		var Scoreboard = function (_Block) {
			_inherits(Scoreboard, _Block);

			function Scoreboard() {
				_classCallCheck(this, Scoreboard);

				var el = document.createElement("form");
				return _possibleConstructorReturn(this, (Scoreboard.__proto__ || Object.getPrototypeOf(Scoreboard)).call(this, el));
			}

			_createClass(Scoreboard, [{
				key: "update",
				value: function update() {
					var aa = (0, _ScoreboardTEMPLATE2.default)();
					this.el.innerHTML = aa;
				}
			}]);

			return Scoreboard;
		}(_block2.default);

		exports.default = Scoreboard;

		/***/ }),
	/* 5 */
	/***/ (function(module, exports, __webpack_require__) {

		"use strict";


		Object.defineProperty(exports, "__esModule", {
			value: true
		});
		exports.default = scoreboardTEMPLATE;
		function pug_rethrow(n, e, r, t) {
			if (!(n instanceof Error)) throw n;
			if (!("undefined" == typeof window && e || t)) throw n.message += " on line " + r, n;
			try {
				t = t || __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"fs\""); e.code = "MODULE_NOT_FOUND"; throw e; }())).readFileSync(e, "utf8");
			} catch (e) {
				pug_rethrow(n, null, r);
			}
			var i = 3,
	    a = t.split("\n"),
	    o = Math.max(r - i, 0),
	    h = Math.min(a.length, r + i),
	    i = a.slice(o, h).map(function (n, e) {
					var t = e + o + 1;return (t == r ? "  > " : "    ") + t + "| " + n;
				}).join("\n");
			throw n.path = e, n.message = (e || "Pug") + ":" + r + "\n" + i + "\n\n" + n.message, n;
		}

		function scoreboardTEMPLATE(locals) {
			var pug_html = "",
	    pug_mixins = {},
	    pug_interp;
			var pug_debug_filename, pug_debug_line;
			try {
				pug_debug_line = 1;
				pug_debug_filename = "/Users/rubenhovhannisyan/Desktop/JS/2017_2_PanzerElite/public/blocks/scoreboard/scoreboard.pug";
				pug_html = pug_html + "<p>";
				pug_debug_line = 1;
				pug_debug_filename = "/Users/rubenhovhannisyan/Desktop/JS/2017_2_PanzerElite/public/blocks/scoreboard/scoreboard.pug";
				pug_html = pug_html + "HERE MUST BE A SCOREBOARD(in progress)</p>";
			} catch (err) {
				pug_rethrow(err, pug_debug_filename, pug_debug_line);
			}
			return pug_html;
		}

		/***/ }),
	/* 6 */
	/***/ (function(module, exports, __webpack_require__) {

		"use strict";


		Object.defineProperty(exports, "__esModule", {
			value: true
		});

		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

		__webpack_require__(7);

		var _block = __webpack_require__(0);

		var _block2 = _interopRequireDefault(_block);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

		var Form = function (_Block) {
			_inherits(Form, _Block);

			function Form() {
				var fields = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

				_classCallCheck(this, Form);

				var el = document.createElement("form");

				var _this = _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).call(this, el));

				fields.forEach(function (field) {
					var input = _block2.default.Create("input", field.attrs || {}, field.classes || []);
					_this.append(input);
				});
				_this.wrnMsg = _this.el.getElementsByClassName("warning")[0];
				return _this;
			}

			_createClass(Form, [{
				key: "onSubmit",
				value: function onSubmit(callback) {
					var _this2 = this;

					this.el.addEventListener("submit", function (e) {
						e.preventDefault();
						var formdata = {};
						var elements = _this2.el.elements;
						for (var name in elements) {
							formdata[name] = elements[name].value;
						}

						callback(formdata);
					});
				}
			}, {
				key: "warningMsg",
				value: function warningMsg(text, flag) {
					this.wrnMsg.value = text;
					this.wrnMsg.hidden = flag;
				}
			}, {
				key: "onButton",
				value: function onButton(buttonIndex, callback) {
					this.el.getElementsByClassName("button")[buttonIndex].addEventListener("click", callback, false);
				}
			}, {
				key: "reset",
				value: function reset() {
					this.el.reset();
				}
			}]);

			return Form;
		}(_block2.default);

		exports.default = Form;

		/***/ }),
	/* 7 */
	/***/ (function(module, exports) {

		// removed by extract-text-webpack-plugin

		/***/ }),
	/* 8 */
	/***/ (function(module, exports, __webpack_require__) {

		"use strict";


		Object.defineProperty(exports, "__esModule", {
			value: true
		});
		var loginFields = [{
			attrs: {
				class: "inputClass",
				type: "text",
				name: "nick",
				placeholder: "Nickname"
			}
		}, {
			attrs: {
				class: "inputClass",
				type: "password",
				name: "password",
				placeholder: "Password"
			}
		}, {
			attrs: {
				class: "subButton",
				type: "submit",
				value: "Log In"
			}
		}, {
			attrs: {
				class: "button",
				type: "button",
				value: "Havent Account?"
			}
		}, {
			attrs: {
				class: "warning",
				type: "text",
				value: "Invalid Data",
				readonly: "true",
				hidden: "true"
			}
		}];
		exports.default = loginFields;

		/***/ }),
	/* 9 */
	/***/ (function(module, exports, __webpack_require__) {

		"use strict";


		Object.defineProperty(exports, "__esModule", {
			value: true
		});
		var loginFields = [{
			attrs: {
				class: "inputClass",
				type: "password",
				name: "password",
				placeholder: "Password"
			}
		}, {
			attrs: {
				class: "inputClass",
				type: "password",
				name: "confirm",
				placeholder: "Confirm"
			}
		}, {
			attrs: {
				class: "subButton",
				type: "submit",
				value: "Change"
			}
		}, {
			attrs: {
				class: "button",
				type: "button",
				value: "back to menu"
			}
		}, {
			attrs: {
				class: "warning",
				type: "text",
				value: "Invalid Data",
				readonly: "true",
				hidden: "true"
			}
		}];
		exports.default = loginFields;

		/***/ }),
	/* 10 */
	/***/ (function(module, exports, __webpack_require__) {

		"use strict";


		Object.defineProperty(exports, "__esModule", {
			value: true
		});
		var registerFields = [{
			attrs: {
				class: "inputClass",
				type: "text",
				name: "nick",
				placeholder: "Nickname"
			}
		}, {
			attrs: {
				class: "inputClass",
				type: "password",
				name: "password",
				placeholder: "Password"
				//pattern: '^\\S{4,}$',
			}
		}, {
			attrs: {
				class: "inputClass",
				type: "password",
				name: "confirm",
				placeholder: "Confirm Password"
				//pattern: '^\\S{4,}$',
			}
		}, {
			attrs: {
				class: "subButton",
				type: "submit",
				value: "Register"
			}
		}, {
			attrs: {
				class: "button",
				type: "button",
				value: "Already Have Account?"
			}
		}, {
			attrs: {
				class: "warning",
				type: "text",
				value: "Invalid Data",
				readonly: "true",
				hidden: "true"
			}
		}];
		exports.default = registerFields;

		/***/ }),
	/* 11 */
	/***/ (function(module, exports, __webpack_require__) {

		"use strict";


		Object.defineProperty(exports, "__esModule", {
			value: true
		});
		var menuFields = [{
			attrs: {
				class: "button",
				type: "button",
				value: "Change Password"
			}
		}, {
			attrs: {
				class: "button",
				type: "button",
				value: "log out"
			}
		}, {
			attrs: {
				class: "button",
				type: "button",
				value: "scoreboard"
			}
		}];
		exports.default = menuFields;

		/***/ }),
	/* 12 */
	/***/ (function(module, exports, __webpack_require__) {

		"use strict";


		Object.defineProperty(exports, "__esModule", {
			value: true
		});

		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

		var _config = __webpack_require__(13);

		var _config2 = _interopRequireDefault(_config);

		var _sections = __webpack_require__(1);

		var _sections2 = _interopRequireDefault(_sections);

		var _http = __webpack_require__(14);

		var _http2 = _interopRequireDefault(_http);

		var _validation = __webpack_require__(15);

		var _validation2 = _interopRequireDefault(_validation);

		var _loadBar = __webpack_require__(16);

		var _loadBar2 = _interopRequireDefault(_loadBar);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		var pBar = new _loadBar2.default();

		var UserService = function () {
			function UserService() {
				_classCallCheck(this, UserService);
			}

			_createClass(UserService, [{
				key: "login",
				value: function login(nick, pas) {
					var _this = this;

					if (!_validation2.default.checkLogAndPas(nick, pas)) {
						_sections2.default.login.loginform.warningMsg("Invalid Data", false);
					} else {
						pBar.show();
						(0, _http2.default)(_config.POST, _config2.default.login, {
							login: nick,
							password: pas
						}).then(function () {
							_this._whoami();
						}).catch(function (err) {
							_sections2.default.login.loginform.warningMsg("Wrong Nick or Password", false);
							console.log(err);
							pBar.hide();
						});
					}
				}
			}, {
				key: "register",
				value: function register(nick, pas, conf) {
					var _this2 = this;

					if (!_validation2.default.checkLogAndPas(nick, pas)) {
						_sections2.default.register.registerform.warningMsg("Invalid Data", false);
					} else {
						if (!_validation2.default.confirmPassword(conf, pas)) {
							_sections2.default.register.registerform.warningMsg("Passwords Dont Match", false);
						} else {
							pBar.show();
							(0, _http2.default)(_config.POST, _config2.default.register, { login: nick, password: pas, cf: conf }).then(function () {
								_this2._whoami();
							}).catch(function (err) {
								_sections2.default.register.registerform.warningMsg("This Nick already Exists", false);
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

					_sections2.default.login.loginform.warningMsg("", true);
					_sections2.default.register.registerform.warningMsg("", true);
					pBar.show();
					(0, _http2.default)(_config.GET, _config2.default.logout).then(function () {
						_this3._whoami();
					}).catch(function (err) {
						console.log(err);
						pBar.hide();
					});
				}
			}, {
				key: "changePassword",
				value: function changePassword(pas, conf) {
					var _this4 = this;

					if (!_validation2.default.checkPassword(pas)) {
						_sections2.default.change.changeform.warningMsg("Invalid Data", false);
					} else {
						if (!_validation2.default.confirmPassword(conf, pas)) {
							_sections2.default.change.changeform.warningMsg("Passwords Dont Match", false);
						} else {
							pBar.show();
							(0, _http2.default)(_config.POST, _config2.default.chagePassword, { password: pas, conf: conf }).then(function () {
								_this4._whoami();
							}).catch(function (err) {
								console.log(err);
								pBar.hide();
							});
						}
					}
				}
			}, {
				key: "check",
				value: function check() {
					pBar.show();
					this._whoami();
				}
			}, {
				key: "_whoami",
				value: function _whoami() {
					_sections2.default.hide();
					(0, _http2.default)(_config.GET, _config2.default.check).then(function () {
						pBar.hide();
						_sections2.default.hide();
						_sections2.default.menu.show();
					}).catch(function (error) {
						pBar.hide();
						_sections2.default.login.show();
						console.log(error);
					});
				}
			}]);

			return UserService;
		}();

		exports.default = UserService;

		/***/ }),
	/* 13 */
	/***/ (function(module, exports, __webpack_require__) {

		"use strict";


		Object.defineProperty(exports, "__esModule", {
			value: true
		});
		var PREFIX_URL = "https://salty-shelf-19870.herokuapp.com/api/user/";
		var urls = {
			login: PREFIX_URL + "login",
			register: PREFIX_URL + "register",
			logout: PREFIX_URL + "logout",
			check: PREFIX_URL + "getuser",
			chagePassword: PREFIX_URL + "changepassword"
		};
		var GET = "GET";
		var POST = "POST";

		exports.default = urls;
		exports.GET = GET;
		exports.POST = POST;

		/***/ }),
	/* 14 */
	/***/ (function(module, exports, __webpack_require__) {

		"use strict";


		Object.defineProperty(exports, "__esModule", {
			value: true
		});
		function httpReq(type, uRL, sendObject) {
			return new Promise(function (resolve, reject) {
				fetch(uRL, {
					method: type,
					mode: "cors",
					credentials: "include",
					body: JSON.stringify(sendObject),
					headers: {
						"Content-Type": "application/json; charset=utf-8"
					}
				}).then(function (response) {
					if (response.status === 200) {
						resolve();
					} else {
						reject("Something went wrong");
					}
				});
			});
		}
		exports.default = httpReq;

		/***/ }),
	/* 15 */
	/***/ (function(module, exports, __webpack_require__) {

		"use strict";


		Object.defineProperty(exports, "__esModule", {
			value: true
		});

		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		var Validate = function () {
			function Validate() {
				_classCallCheck(this, Validate);
			}

			_createClass(Validate, null, [{
				key: "checkLogin",
				value: function checkLogin(nick) {
					return nick.length < 20 && nick.length > 1;
				}
			}, {
				key: "checkPassword",
				value: function checkPassword(password) {
					return password.length < 20 && password.length > 1;
				}
			}, {
				key: "confirmPassword",
				value: function confirmPassword(password, confirm) {
					return password === confirm;
				}
			}, {
				key: "checkLogAndPas",
				value: function checkLogAndPas(nick, password) {
					return this.checkLogin(nick) && this.checkPassword(password);
				}
			}]);

			return Validate;
		}();

		exports.default = Validate;

		/***/ }),
	/* 16 */
	/***/ (function(module, exports, __webpack_require__) {

		"use strict";


		Object.defineProperty(exports, "__esModule", {
			value: true
		});

		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

		__webpack_require__(17);

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		var pBar = function () {
			function pBar() {
				_classCallCheck(this, pBar);

				this.elem = document.getElementsByClassName("myBar")[0];
				this.id;
			}

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
			}, {
				key: "hide",
				value: function hide() {
					this.elem.hidden = true;
					clearInterval(this.id);
				}
			}]);

			return pBar;
		}();

		exports.default = pBar;

		/***/ }),
	/* 17 */
	/***/ (function(module, exports) {

		// removed by extract-text-webpack-plugin

		/***/ })
/******/ ]);