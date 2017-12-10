import "./StaticScene.scss";
import textWriter from "./textWriter";
import go from "../../utils/Router";
import { setTimeout } from "timers";


export default class StaticScene {
    constructor(type) {
        this.HP = 100;
        this.type = type;
        //All 
        this.sceneDiv = document.createElement("div");
        this.sceneDiv.classList.add("sceneDiv");
        this.sceneDiv.setAttribute("width", "100%");
        this.sceneDiv.setAttribute("height", "100%");
        //HP + RELOADER
        this.hpDiv = document.createElement("div");
        this.hpDiv.classList.add("hpBar");
        this.loader = document.createElement("div");
        this.loader.classList.add("loader");
        this.hpDiv.appendChild(this.loader);
        this.sceneDiv.appendChild(this.hpDiv);
        //Main right div
        this.comandorDiv = document.createElement("div");
        this.comandorDiv.classList.add("comandorDiv");
        //Commandor img
        this.comandorImg = document.createElement("img");
        this.comandorImg.classList.add("man");
        this.comandorImg.setAttribute("src", "../game/staticScene/man.jpg")
        this.comandorDiv.appendChild(this.comandorImg);
        //Commandor text        
        this.comandorText = document.createElement("p");
        this.comandorText.classList.add("comandorText");
        this.comandorText.setAttribute("id", "comandorText")
        this.comandorText.innerHTML = "General: ";
        this.comandorDiv.appendChild(this.comandorText);
        this.sceneDiv.appendChild(this.comandorDiv);
        //Hide btn
        this.hideBtn = document.createElement("button")
        this.hideBtn.classList.add("hideBtn");
        this.hideBtn.innerHTML = "Okay";
        this.comandorDiv.appendChild(this.hideBtn)
        this.hideBtn.addEventListener("click", () => {
            this.comandorDiv.classList.add("hidden")
        })

        //Red  Injure 
        this.injure = document.createElement("div");
        this.injure.classList.add("injure");
        this.injure.classList.add("hidden");
        this.sceneDiv.appendChild(this.injure);
        ///
        this.gameState = document.createElement("p");
        this.gameState.classList.add("state");
        this.gameState.classList.add("hidden");
        this.injure.appendChild(this.gameState);
        ///
        document.getElementsByClassName("game")[0].appendChild(this.sceneDiv);
        this.hideReload = this.hideReload.bind(this);
        this.hideReload();
        if (this.type == "single") {
            textWriter("comandorText", [
                "Welcome to the military training!\n",
                "To move the vehicle push W,A,S,D.\n",
                "To rotate the turret push M,N.\n",
                "You can also change view by pushing V.\n",
                "If you want to shoot-push SPACE button.",
                "After shooting you will see the reload bar in the right bottom corner.\n",
                "Also in that corner you can see your health bar: ",
                "When it comes red you have to be very careful, you can be killed with the one bullet.\n",
                "So now you can try the controlls and watch the map.\n",
                "When you want to quit push ESC.\n"
            ]);
        } else {
            textWriter("comandorText", [
                "Welcome to the battle ground!\n",
                "If you don't know how to play \n",
                "you should have some trainig in the single mode. \n",
                "You are on the war, soldier. So you have to defeat the enemy.\n",
                "Your enemy is the other tank. He is somewhere in the town.",
                "Find him, shoot him and save the civilians!\n",
                "Good luck, soldier!"
            ]);
        }
        // textWriter(
        //     "comandorText", [
        //         "Дес, сверстай блять\n",
        //         "нормально, пожалуйста\n"
        //     ]
        // );
        ////new scenes

    };
    changeHP(HP) {
        if (this.HP !== HP) {
            this.injured();
        }
        this.HP = HP;
        this.hpDiv.classList.remove(this.currentColor);
        if (this.HP == 100) {
            // this.hpDiv.classList.add(" ");
        }
        if (this.HP == 75) {
            this.hpDiv.classList.add("hpBarYellow");
            this.currentColor = "hpBarYellow";
        }
        if (this.HP == 50) {
            this.hpDiv.classList.add("hpBarOrange");
            this.currentColor = "hpBarOrange";

        }
        if (this.HP == 25) {
            this.hpDiv.classList.add("hpBarRed");
            this.currentColor = "hpBarRed";
        }
    }
    injured() {
        this.injure.classList.remove("hidden");
        setTimeout(() => {
            this.injure.classList.add("hidden");
        }, 1000);
    }
    showGameState(state) {
        if (state === -1) {
            this.injure.classList.add("injure-defeat");
            this.gameState.innerHTML = "YOU LOSE!";
        }
        if (state === 0) {
            this.injure.classList.add("injure-draw");
            this.gameState.innerHTML = "DRAW!";
        }
        if (state === 1) {
            this.injure.classList.add("injure-victory");
            this.gameState.innerHTML = "YOU WIN!";
        }
        this.gameState.classList.remove("hidden");
        this.injure.classList.remove("hidden");
        setTimeout(() => { go.go("/menu/", true); }, 5000);

    }
    fireReload() {
        this.loader.classList.remove("hidden");
        setTimeout(this.hideReload, 4000);
    }
    hideReload() {
        this.loader.classList.add("hidden");
    }

}