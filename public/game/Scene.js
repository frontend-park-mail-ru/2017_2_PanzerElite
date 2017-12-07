import Tank from "./models/Tank";
import modelLoader from "./utils/modelLoader";
import MapCreator from "./utils/MapCreator";
import StaticScene from "./staticScene/StaticScene";
import progressBar from "../modules/load-bar";
import { setTimeout } from "timers";
// import { Math } from "../../../../Library/Caches/typescript/2.6/node_modules/@types/three";

export default class Scene {
    constructor(startPositionMe, startPositionOpponent) {
        progressBar.show();
        this.stats = new Stats();
        this.stats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom
        document.body.appendChild(this.stats.dom);
        //////
        this._resizeFunction = this._resizeFunction.bind(this);

        this.scene = new THREE.Scene();
        this.tankMe = new Tank(null, startPositionMe);
        this.tankOpponent = new Tank(null, startPositionOpponent);
        // modelLoader("Hammer+Tank/model.dae").then(coll => {
        modelLoader("T90/model.dae").then(coll => {

            let collada = [coll.scene.clone(), coll.scene.clone()];
            let i = 0;
            ["tankOpponent", "tankMe"].forEach((key) => {
                //tank
                let cpy1 = collada[i].clone();
                let cpy2 = collada[i].clone();

                cpy1.children[2] = new THREE.Object3D();
                cpy1.children[3] = new THREE.Object3D();
                cpy2.children[0] = new THREE.Object3D();
                cpy2.children[1] = new THREE.Object3D();

                // this[key].parent.add(cpy1);
                this[key].dae.add(cpy1);

                this[key].dae.rotation.x = -0.5 * Math.PI;
                this[key].dae.rotation.z = 1 * Math.PI;
                this[key].dae.rotation.y = -0.5 * Math.PI;

                // this[key].dae.castShadow = true;
                this.scene.add(this[key].dae);

                //turret
                this[key].turret.parent.add(cpy2);
                this[key].turret.dae.rotation.x = -0.5 * Math.PI;
                // this[key].turret.dae.rotation.y = +0.5 * Math.PI;

                this[key].turret.dae.rotation.z = 1 * Math.PI;
                this.scene.add(this[key].turret.dae);
                i++;
            });
            // progressBar.hide();
            this._init();
            progressBar.hide();
        });
        this._addMap();

    }

    _init() {
        ///////////////////////////////////////// // Camera ///////////////////////////////////////// 

        this.camera = new THREE.PerspectiveCamera(10, window.innerWidth / window.innerHeight, 1, 1000);


        this.camera.position.set(0, 7.9, 50);
        this.camera.lookAt(new THREE.Vector3(0, 3.60, 0));
        this.renderer = new THREE.WebGLRenderer({
            alpha: true,
            antialias: true
        });
        //this.renderer.shadowMap.enabled = true;

        this.tankMe.turret.dae.add(this.camera);
        ///f
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
        light = new THREE.DirectionalLight(0xdfebff, 1.1);
        light2 = new THREE.DirectionalLight(0xdfebff, 1.1);

        light.position.set(50, 200, 100);
        light2.position.set(-150, -200, 100);

        light.position.multiplyScalar(1.3);
        light2.position.multiplyScalar(1.3);
        this.scene.add(light);
        this.scene.add(light2);
        /////////light end
        this._resizeWindow();

        this._startRenderAnimate();
        this.staticScene = new StaticScene();

    }

    updateObjects(type, instractions) {
        this[type].instractions = instractions;
        if (instractions.fire) {
            if (type === "tankMe") {
                this.staticScene.fireReload();
            }
            this[type].boom.visible = true;
            setTimeout(() => {
                this[type].boom.visible = false;
                this._showBoom(type, instractions.bulletCoords);
            }, 500);
        }

    }

    _showBoom(type, coords = {}) {
        if (type === "tankMe") {
            this.boom2.position.set(coords.x - 5, coords.y, 2);
            this.boom2.visible = true;
            setTimeout(() => { this.boom2.visible = false; }, 300);
        } else {
            this.boom2Op.position.set(coords.x - 5, coords.y, 2);
            this.boom2Op.visible = true;
            setTimeout(() => { this.boom2Op.visible = false; }, 300);
        }

    }
    _startRenderAnimate() {


        let innerrender = () => {
            window.requestAnimationFrame(innerrender);
            this.stats.begin();
            this._render();
            this.stats.end();

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
        let groundTexture = loader.load("./game/3dModels/terrain/www.jpg");
        groundTexture.wrapS = groundTexture.wrapT = THREE.RepeatWrapping;
        groundTexture.repeat.set(1900, 1900);
        groundTexture.anisotropy = 16;
        let groundMaterial = new THREE.MeshPhongMaterial({ color: 0xAAAAAA, specular: 0x000000, map: groundTexture });
        let mesh = new THREE.Mesh(new THREE.PlaneBufferGeometry(20000, 20000), groundMaterial);
        mesh.position.z = 0.01;
        this.scene.add(mesh);
        //
        modelLoader("road/model.dae").then(coll => {
            coll.scene.rotation.x = -0.5 * Math.PI;
            coll.scene.rotation.z = 1 * Math.PI;
            coll.scene.position.z -= 0.1;
            coll.scene.scale.z = 3;
            coll.scene.scale.x = 0.05;
            coll.scene.position.z = 0.11;
            coll.scene.position.y = 500;
            let road2 = coll.scene.clone();
            road2.rotation.y = 0.5 * Math.PI;
            road2.position.y = 0;
            road2.position.x = 500;

            this.scene.add(coll.scene);
            this.scene.add(road2);

        });
        modelLoader("boom/model.dae").then(coll => {
            coll.scene.rotation.x = -0.5 * Math.PI;
            coll.scene.rotation.z = 1 * Math.PI;
            coll.scene.rotation.y = -0.5 * Math.PI;
            coll.scene.scale.z *= 0.45;
            coll.scene.scale.y *= 0.45;
            coll.scene.scale.x *= 0.45;
            this.boom = coll.scene.clone();
            this.boomOp = coll.scene.clone();
            this.boom2 = coll.scene.clone();
            this.boom2.scale.y *= 10;
            this.boom2.scale.x *= 10;
            this.boom2.scale.z *= 10;
            this.boom2Op = this.boom2.clone();
            this.scene.add(this.boom2);
            this.scene.add(this.boom2Op);
            this.boom.position.set(-0.75, 1.75, -6);
            this.boomOp.position.set(-0.75, 1.75, -6);
            this.tankMe.turret.dae.add(this.boom);
            this.tankOpponent.turret.dae.add(this.boomOp);
            this.tankMe.boom = this.boom;
            this.tankOpponent.boom = this.boomOp;
            this.tankMe.boom.visible = false;
            this.tankOpponent.boom.visible = false;
        });

    }

}