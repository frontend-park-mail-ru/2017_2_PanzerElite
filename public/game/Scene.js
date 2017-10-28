import Tank from "./models/Tank";
// import Turret from "./models/Turret";
import tankLoader from "./utils/tankLoader";
import turretLoader from "./utils/turretLoader";
import mapLoader from "./utils/mapLoader";

import progressBar from "../modules/load-bar";
var THREE = require("three");

export default class Scene {
    constructor(startPositionMe, startPositionOpponent) {
        progressBar.show();
        //////
        this._resizeFunction = this._resizeFunction.bind(this);

        this.scene = new THREE.Scene();
        this.tankMe = new Tank(null, startPositionMe);
        this.tankOpponent = new Tank(null, startPositionOpponent);
        let promises = [];


        promises.push(tankLoader());
        promises.push(turretLoader());
        promises.push(tankLoader("1."));
        promises.push(turretLoader("1."));

        Promise.all(promises).then(collades => {
            collades = [collades.slice(0, 2), collades.slice(2, 4)];
            collades.forEach((collada, i) => {
                ["tankOpponent", "tankMe"].forEach((key, j) => {
                    if (i === j) {
                        //tank
                        collada[0].scene.children[0].children[1].children[0].children[3] = new THREE.Object3D();
                        this[key].parent.add(collada[0].scene);
                        this[key].original = collada[0].scene;
                        this[key].dae.rotation.x = -0.5 * Math.PI;
                        this[key].dae.rotation.z = 1 * Math.PI;
                        this.scene.add(this[key].dae);

                        //turret
                        let size = 0.012;
                        collada[1].scene.scale.x = size;
                        collada[1].scene.scale.y = size;
                        collada[1].scene.scale.z = size;
                        this[key].turret.parent.add(collada[1].scene);
                        this[key].turret.dae.rotation.x = -0.5 * Math.PI;
                        this[key].turret.dae.rotation.z = 1 * Math.PI;
                        this.scene.add(this[key].turret.dae);
                    }
                });
            });
            mapLoader()
                .then(collada => {
                    let plc = new THREE.Object3D();
                    let size = 0.05;
                    collada.scene.scale.x = size;
                    collada.scene.scale.y = size;
                    collada.scene.scale.z = size;
                    plc.add(collada.scene);
                    plc.rotation.x = -0.5 * Math.PI;
                    plc.rotation.z = 1 * Math.PI;
                    this.scene.add(plc);
                });
            progressBar.hide();
            this._init();
            this._addMap();
        });
    }

    _init() {
        ///////////////////////////////////////// // Camera ///////////////////////////////////////// 

        this.camera = new THREE.PerspectiveCamera(10, window.innerWidth / window.innerHeight, 1, 1000);
        this.camera.position.set(-1, 15, -115);

        this.camera.lookAt(new THREE.Vector3(-1, 3, 3));
        this.renderer = new THREE.WebGLRenderer({
            alpha: true,
            antialias: true
        });

        this.tankMe.turret.dae.add(this.camera);

        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        ///
        this.renderer.domElement.setAttribute("id", "game");
        this.renderer.domElement.style.background = "rgba(255, 255, 255, 1)";
        this.renderer.domElement.style.position = "absolute";
        this.renderer.domElement.style.zIndex = "99";
        document.getElementsByClassName("game")[0].appendChild(this.renderer.domElement);
        ///////////////////////////////////////// // Lighting ///////////////////////////////////////// 
        var my_color = "#FAFAFA",
            ambientLight = new THREE.AmbientLight("#EEEEEE"),
            hemiLight = new THREE.HemisphereLight(my_color, my_color, 0),
            light = new THREE.PointLight(my_color, 1, 100);
        hemiLight.position.set(0, 50, 0);
        light.position.set(0, 20, 10);
        this.scene.add(ambientLight);
        this.scene.add(hemiLight);
        this.scene.add(light);

        this._resizeWindow();

        this._startRenderAnimate();
    }

    /**
     * object action
     * @param {string} type : tankMe | tankOpponent
     * @param {object} action 
     */
    updateObjects(type, action) {
        Object.keys(action).forEach(key => {
            this[type][key] = action[key];
        });
    }

    _startRenderAnimate() {
        let innerrender = () => {
            window.requestAnimationFrame(innerrender);
            this._render();
        };
        innerrender();
    }

    _render() {
        ["tankMe", "tankOpponent"].forEach(key => {
            this[key].update();
        });
        this.renderer.render(this.scene, this.camera);
    }

    _resizeWindow() {
        window.addEventListener("resize", this._resizeFunction, false);
    }

    _resizeFunction() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this._render();
    }

    _addMap() {
        let planeGeometry = new THREE.PlaneGeometry(600, 600, 1, 1);
        let planeMaterial = new THREE.MeshLambertMaterial({
            color: 0x30E02E
        });
        let plane = new THREE.Mesh(planeGeometry, planeMaterial);
        plane.receiveShadow = true;
        plane.position.x = 0.2;
        plane.position.y = 0.2;
        plane.position.z = 0.05;
        this.scene.add(plane);
    }

}