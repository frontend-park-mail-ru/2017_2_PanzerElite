const THREE = require("three");
const ColladaLoader = require("three-collada-loader");
export default function turretLoader() {
	return new Promise((resolve, reject) => {
		let loader = new ColladaLoader();
		loader.options.convertUpAxis = true;
		loader.load("./game/3dModels/turret.dae", (collada) => {
			resolve(collada);
		});
	});
}