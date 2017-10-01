"use strict";

const loginFields = [{

	class: "inputClass",
	type: "password",
	name: "password",
	placeholder: "Password"

},
{

	class: "inputClass",
	type: "password",
	name: "confirm",
	placeholder: "Confirm"

},
{
	name: "changeBtn",
	class: "button",
	type: "button",
	value: "Change",

},
{
	name: "changeformBtn",
	class: "button",
	type: "button",
	value: "back to menu",

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