"use strict";

const registerFields = [{

	class: "inputClass",
	type: "text",
	name: "nick",
	placeholder: "Nickname"

},
{

	class: "inputClass",
	type: "password",
	name: "password",
	placeholder: "Password",


},
{

	class: "inputClass",
	type: "password",
	name: "confirm",
	placeholder: "Confirm Password",


},
{
	name: "registerBtn",
	class: "button",
	type: "button",
	value: "Register",

},
{
	name: "changeformBtn",
	class: "button",
	type: "button",
	value: "Already Have Account?",

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
export default registerFields;