import modelLoader from "./modelLoader";
// const THREE = require("three");

export default function MapCreator(scene) {
    let promises = [];

    promises.push(modelLoader("houses/church/model.dae"));
    promises.push(modelLoader("houses/bighouse/model.dae"));
    promises.push(modelLoader("houses/middlehouse/model.dae"));
    promises.push(modelLoader("houses/smallhouse/model.dae"));

    Promise.all(promises).then(collades => {
        houseParams[4].house = modelInit(collades[0], 0.04);
        houseParams[1].house = modelInit(collades[1], 0.04);
        houseParams[2].house = modelInit(collades[2], 0.05);
        houseParams[3].house = modelInit(collades[3], 0.05);

        housePlace.forEach((key) => {

            let house = houseParams[key.type].house.clone();
            let geometry = new THREE.BoxGeometry(houseParams[key.type].x, houseParams[key.type].y, 1);
            let material = new THREE.MeshBasicMaterial({
                color: houseParams[key.type].color
            });
            let cube = new THREE.Mesh(geometry, material);
            cube.position.x = key.x;
            cube.position.y = key.y;
            if (key.flag) {
                cube.rotation.z = 0.5 * Math.PI;
                house.rotation.y = 0.5 * Math.PI;
                house.position.x = (key.x + houseParams[key.type].shifty);
                house.position.y = (key.y - houseParams[key.type].shiftx);
            } else {
                house.position.x = (key.x + houseParams[key.type].shiftx);
                house.position.y = (key.y + houseParams[key.type].shifty);
            }
            scene.add(cube);


            scene.add(house);
        });

    });
    map.forEach((key) => {
        let geometry = new THREE.BoxGeometry(key.height, key.width, 4);
        let material = new THREE.MeshBasicMaterial({
            color: 0xFF0000
        });
        let cube = new THREE.Mesh(geometry, material);
        cube.position.x = key.x;
        cube.position.y = key.y;
        // scene.add(cube);
        // scene.add(house);
    });

}

function modelInit(collada, size) {
    let plc = new THREE.Object3D();
    collada.scene.scale.x = size;
    collada.scene.scale.y = size;
    collada.scene.scale.z = size;
    plc.add(collada.scene);
    plc.rotation.x = -0.5 * Math.PI;
    plc.rotation.z = 1 * Math.PI;
    plc.position.z -= 0.1;
    return plc;
};


let map = [
    { x: 0, y: 0, height: 57, width: 58 },
    { x: -136, y: 88, height: 18, width: 17 },
    { x: -48, y: 108, height: 18, width: 17 },
    { x: -20, y: 56, height: 18, width: 17 },
    { x: -136, y: -20, height: 18, width: 17 },
    { x: 68, y: 40, height: 18, width: 17 },
    { x: 100, y: 40, height: 18, width: 17 },
    { x: 132, y: 40, height: 18, width: 17 },
    { x: -100, y: 24, height: 32, width: 20 },
    { x: -128, y: -88, height: 32, width: 20 },
    { x: -20, y: -92, height: 20, width: 32 },
    { x: 32, y: 104, height: 32, width: 20 },
    { x: 140, y: 84, height: 20, width: 32 },
    { x: -84, y: 64, height: 42, width: 25 },
    { x: -56, y: -40, height: 25, width: 42 },
];

let houseParams = [{}, {
    x: 57,
    y: 58,
    color: 0x777777,
    house: null,
    shiftx: -6,
    shifty: 25,
}, {
    x: 20,
    y: 32,
    color: 0xCFBDAA,
    house: null,
    shiftx: 7,
    shifty: 15,

}, {
    x: 18,
    y: 17,
    color: 0xFFEBCD,
    house: null,
    shiftx: 8,
    shifty: 10,
}, {
    x: 25,
    y: 42,
    color: 0x888888,
    house: null,
    shiftx: -6,
    shifty: 25,
}];



let housePlace = [{
    x: 0,
    y: 0,
    type: 1
}, {
    x: -136,
    y: 88,
    type: 3,
    flag: false

}, {
    x: -48,
    y: 108,
    type: 3,
    flag: false

}, {
    x: -20,
    y: 56,
    type: 3,
    flag: false

}, {
    x: -136,
    y: -20,
    type: 3,
    flag: false

}, {
    x: 68,
    y: 40,
    type: 3,
    flag: false

}, {
    x: 100,
    y: 40,
    type: 3,
    flag: false

}, {
    x: 132,
    y: 40,
    type: 3,
    flag: false

}, {
    x: -100,
    y: 24,
    type: 2,
    flag: true

}, {
    x: -128,
    y: -88,
    type: 2,
    flag: true

}, {
    x: -20,
    y: -92,
    type: 2,
    flag: false

}, {
    x: 32,
    y: 104,
    type: 2,
    flag: true

}, {
    x: 140,
    y: 84,
    type: 2,
    flag: false

}, {
    x: -84,
    y: 64,
    type: 4,
    flag: true

}, {
    x: -56,
    y: -40,
    type: 4,
    flag: false
}, ];