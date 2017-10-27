"use strict";

const changeFields = [{
	elemType: "input",
	class: "input",
	type: "password",
	name: "password",
	placeholder: "Password"
},
{
	elemType: "input",
	class: "input",
	type: "password",
	name: "confirm",
	placeholder: "Confirm"

},
{
	name: "changeBtn",
	class: " button",
	elemType: "input",
	value: "Change",
	type: "button",
	href: "/menu/"

},
{
	name: "changeformBtn",
	class: " button",
	elemType: "a",
	value: "back to menu",
	href: "/menu/",


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
export default changeFields;