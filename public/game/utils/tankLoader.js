var THREE = require('three');
var ColladaLoader = require('three-collada-loader');
let Tank = null;
export default function tankLoader(tank, scene) {
    Tank = tank;
    let loader = new ColladaLoader();
    loader.options.convertUpAxis = true;
    loader.load('./game/3dModels/model.dae', _loadCollada);
    scene.add(tank.dae);
}

function _loadCollada(collada) {
    collada.scene.children[0].children[1].children[0].children[3] = new THREE.Object3D();
    Tank.parent.add(collada.scene);
    Tank.original = collada.scene;
    Tank.dae.rotation.x = -0.5 * Math.PI;
    Tank.dae.rotation.z = 1 * Math.PI;
}