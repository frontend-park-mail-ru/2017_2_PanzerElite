var THREE = require('three');
let Turret = null;
var ColladaLoader = require('three-collada-loader');

export default function turretLoader(turret, scene) {
    Turret = turret;
    let loader = new ColladaLoader();
    loader.options.convertUpAxis = true;
    loader.load('./game/3dModels/turret.dae', _loadCollada);
    scene.add(turret.dae);
}

function _loadCollada(collada) {
    let size = 0.012;
    collada.scene.scale.x = size;
    collada.scene.scale.y = size;
    collada.scene.scale.z = size;
    Turret.parent.add(collada.scene);
    Turret.dae.rotation.x = -0.5 * Math.PI;
    Turret.dae.rotation.z = 1 * Math.PI;
}