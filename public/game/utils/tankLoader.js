const THREE = require("three");
const ColladaLoader = require("three-collada-loader");

import httpReq from "../../modules/http";

export default function tankLoader() {
    return new Promise((resolve, reject) => {
        let loader = new ColladaLoader();
        loader.options.convertUpAxis = true;
        loader.load("./game/3dModels/Hammer+Tank/model.dae", (collada) => {
            resolve(collada);
        });
    });
}