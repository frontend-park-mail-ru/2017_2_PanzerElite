import Tank from "./models/Tank";
import modelLoader from "./utils/modelLoader";
import MapCreator from "./utils/MapCreator";

import progressBar from "../modules/load-bar";
// var THREE = require("three");

export default class Scene {
    constructor(startPositionMe, startPositionOpponent) {
        progressBar.show();
        //////
        this._resizeFunction = this._resizeFunction.bind(this);

        this.scene = new THREE.Scene();
        this.tankMe = new Tank(null, startPositionMe);
        this.tankOpponent = new Tank(null, startPositionOpponent);
        modelLoader("Hammer+Tank/model.dae").then(coll => {
            let collada = [coll.scene.clone(), coll.scene.clone()];
            let i = 0;
            ["tankOpponent", "tankMe"].forEach((key) => {
                //tank
                let cpy1 = collada[i].clone();
                let cpy2 = collada[i].clone();
                cpy1.children[0].children[1].children[0].children[1] = new THREE.Object3D();
                cpy2.children[0].children[1].children[0].children[0] = new THREE.Object3D();
                this[key].parent.add(cpy1);
                this[key].dae.rotation.x = -0.5 * Math.PI;
                this[key].dae.rotation.z = 1 * Math.PI;
                this[key].dae.rotation.y = -0.5 * Math.PI;

                // this[key].dae.castShadow = true;
                this.scene.add(this[key].dae);

                //turret
                this[key].turret.parent.add(cpy2);
                this[key].turret.dae.rotation.x = -0.5 * Math.PI;
                this[key].turret.dae.rotation.z = 1 * Math.PI;
                this.scene.add(this[key].turret.dae);
                i++;
            });
            progressBar.hide();
            this._init();
        });
        this._addMap();

    }

    _init() {
        ///////////////////////////////////////// // Camera ///////////////////////////////////////// 

        this.camera = new THREE.PerspectiveCamera(10, window.innerWidth / window.innerHeight, 1, 1000);
        this.camera.position.set(-1, 10, -95);



        this.camera.lookAt(new THREE.Vector3(-1, 3, 3));
        this.renderer = new THREE.WebGLRenderer({
            alpha: true,
            antialias: true
        });
        this.renderer.shadowMap.enabled = true;

        this.tankMe.turret.dae.add(this.camera);
        ///
        this.tankMe.camera = this.camera;
        ///

        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        ///
        this.renderer.domElement.setAttribute("id", "game");
        this.renderer.domElement.style.background = "rgba(255, 255, 255, 1)";
        this.renderer.domElement.style.position = "absolute";
        this.renderer.domElement.style.zIndex = "1";

        document.getElementsByClassName("game")[0].appendChild(this.renderer.domElement);
        ///////////////////////////////////////// // Lighting ///////////////////////////////////////// 
        let light, light2;
        this.scene.add(new THREE.AmbientLight(0x666666));
        light = new THREE.DirectionalLight(0xdfebff, 1.75);
        light2 = new THREE.DirectionalLight(0xdfebff, 1.75);

        light.position.set(50, 200, 100);
        light2.position.set(-150, -200, 100);

        light.position.multiplyScalar(1.3);
        light2.position.multiplyScalar(1.3);

        light.castShadow = true;
        light.shadow.mapSize.width = 1024;
        light.shadow.mapSize.height = 1024;
        let d = 300;
        light.shadow.camera.left = -d;
        light.shadow.camera.right = d;
        light.shadow.camera.top = d;
        light.shadow.camera.bottom = -d;
        light.shadow.camera.far = 1000;
        this.scene.add(light);
        this.scene.add(light2);
        /////////light end
        this._resizeWindow();

        this._startRenderAnimate();

    }

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
        MapCreator(this.scene);
        let loader = new THREE.TextureLoader();
        let groundTexture = loader.load('./game/3dModels/terrain/grasslight-big.jpg');
        groundTexture.wrapS = groundTexture.wrapT = THREE.RepeatWrapping;
        groundTexture.repeat.set(900, 900);
        groundTexture.anisotropy = 16;
        let groundMaterial = new THREE.MeshPhongMaterial({ color: 0xAAAAAA, specular: 0x000000, map: groundTexture });
        let mesh = new THREE.Mesh(new THREE.PlaneBufferGeometry(20000, 20000), groundMaterial);
        mesh.position.z = 0.01;
        this.scene.add(mesh);

        //
    }

}