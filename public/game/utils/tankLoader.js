const THREE = require("three");
const ColladaLoader = require("three-collada-loader");

import httpReq from "../../modules/http";

export default function tankLoader(index) {
	return new Promise((resolve, reject) => {
		let loader = new ColladaLoader();
		loader.options.convertUpAxis = true;
		// httpReq('GET', `./game/3dModels/model.${index ? index : ''}dae`).then(res => {
		//     // console.log(res);
		//     loader.parse(res.body, (collada) => {
		//         resolve(collada);
		//     });
		// });
		loader.load(`./game/3dModels/model.${index ? index : ""}dae`, (collada) => {
			resolve(collada);
		});
	});
}