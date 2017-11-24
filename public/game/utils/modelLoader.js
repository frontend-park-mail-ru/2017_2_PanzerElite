// const THREE = require("three");
const ColladaLoader = require("three-collada-loader");

export default function modelLoader(modelPath) {
	return new Promise((resolve, reject) => {
		let loader = new THREE.ColladaLoader();
		loader.options.convertUpAxis = true;
		loader.load("./game/3dModels/" + modelPath, (collada) => {
			resolve(collada);
		});
	});
}