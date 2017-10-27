"use strict";

const registerFields = [{
	class: "input",
	type: "text",
	name: "nick",
	placeholder: "Nickname",
	elemType: "input",
},
{
	class: "input",
	type: "password",
	name: "password",
	placeholder: "Password",
	elemType: "input"
},
{
	class: "input",
	type: "password",
	name: "confirm",
	placeholder: "Confirm Password",
	elemType: "input"
},
{
	name: "registerBtn",
	class: " button",
	elemType: "input",
	type: "button",
	value: "Register",
	href: "/menu/"

},
{
	name: "changeformBtn",
	class: " button",
	elemType: "a",
	value: "Already Have Account?",
	href: "/login/"
},

{
	name: "warning",
	class: "warning",
	type: "text",
	value: "Invalid Data",
	elemType: "input",
	readonly: "true",
	hidden: "true"
}
];

export default registerFields;