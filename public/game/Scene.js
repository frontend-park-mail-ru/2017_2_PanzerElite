import Tank from "./models/Tank";
import Turret from "./models/Turret";
import tankLoader from "./utils/tankLoader";
import turretLoader from "./utils/turretLoader";
var THREE = require('three');

export default class Scene {
    constructor(Strategy) {
        this.scene = new THREE.Scene();
        this.tank = new Tank(null, 0, 0, 0);
        this.turret = new Turret(null, 0, 0, 0);
        this.tank.turret = this.turret;
        tankLoader(this.tank, this.scene);
        turretLoader(this.turret, this.scene);
        ///////////////////////////////////////// // Camera ///////////////////////////////////////// 

        this.camera = new THREE.PerspectiveCamera(10, window.innerWidth / window.innerHeight, 1, 1000);
        this.camera.position.set(-1, 15, -115);

        this.camera.lookAt(new THREE.Vector3(-1, 3, 3));
        this.renderer = new THREE.WebGLRenderer({
            alpha: true,
            antialias: true
        });

        this.turret.dae.add(this.camera);

        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(this.renderer.domElement);
        ///////////////////////////////////////// // Lighting ///////////////////////////////////////// 
        var my_color = '#FAFAFA',
            ambientLight = new THREE.AmbientLight('#EEEEEE'),
            hemiLight = new THREE.HemisphereLight(my_color, my_color, 0),
            light = new THREE.PointLight(my_color, 1, 100);
        hemiLight.position.set(0, 50, 0);
        light.position.set(0, 20, 10);
        this.scene.add(ambientLight);
        this.scene.add(hemiLight);
        this.scene.add(light);




        //
        this.strategy = new Strategy(this.tank);
        this._resizeFunction = this._resizeFunction.bind(this);

        this._resizeWindow();


        this._startRenderAnimate()
    }

    _startRenderAnimate() {
        let innerrender = () => {
            window.requestAnimationFrame(innerrender);
            this._render();
        };
        innerrender();
    }
    _render() {
        this.tank.update();
        this.renderer.render(this.scene, this.camera);
    }
    _resizeWindow() {
        window.addEventListener('resize', this._resizeFunction, false);
    }
    _resizeFunction() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this._render();
    }

}