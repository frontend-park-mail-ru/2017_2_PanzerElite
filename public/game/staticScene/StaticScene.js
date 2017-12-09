import "./StaticScene.scss";

export default class StaticScene {
    constructor() {
        this.HP = 100;
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
        document.getElementsByClassName("game")[0].appendChild(this.sceneDiv);
        this.hideReload = this.hideReload.bind(this);
        this.hideReload();
        // textWriter(
        //     "comandorText", [
        //         "Дес, сверстай блять\n",
        //         "нормально, пожалуйста\n"
        //     ]
        // );
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
    fireReload() {
        this.loader.classList.remove("hidden");
        setTimeout(this.hideReload, 4000);
    }
    hideReload() {
        this.loader.classList.add("hidden");
    }

}