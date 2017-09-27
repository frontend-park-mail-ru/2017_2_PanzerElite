"use strict";

const registerFields = [{
	attrs: {
		class: "inputClass",
		type: "text",
		name: "nick",
		placeholder: "Nickname"
	}
},
{
	attrs: {
		class: "inputClass",
		type: "password",
		name: "password",
		placeholder: "Password",
		//pattern: '^\\S{4,}$',
	}
},
{
	attrs: {
		class: "inputClass",
		type: "password",
		name: "confirm",
		placeholder: "Confirm Password",
		//pattern: '^\\S{4,}$',
	}
},
{
	attrs: {
		class: "subButton",
		type: "submit",
		value: "Register",
	}
},
{
	attrs: {
		class: "button",
		type: "button",
		value: "Already Have Account?",
	}
},
{
	attrs: {
		class: "warning",
		type: "text",
		value: "Invalid Data",
		readonly: "true",
		hidden: "true"
	}
}
];
export default registerFields;