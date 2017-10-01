"use strict";

const loginFields = [{
	name: "nick",
	class: "inputClass",
	type: "text",
	placeholder: "Nickname"
},
{
	name: "password",
	class: "inputClass",
	type: "password",
	placeholder: "Password"
},
{
	name: "loginBtn",
	class: "button",
	type: "button",
	value: "Log In",
},
{
	name: "changeformBtn",
	class: "button",
	type: "button",
	value: "Havent Account?",

},
{
	name: "warning",
	class: "warning",
	type: "text",
	value: "Invalid Data",
	readonly: "true",
	hidden: "true"
}
];
export default loginFields;