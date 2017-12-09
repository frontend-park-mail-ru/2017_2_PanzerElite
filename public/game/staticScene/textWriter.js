export default function textWriter(classname, text, speed) {

    let ele = document.getElementsByClassName(classname)[0];
    let txt = text.join("").split("");
    let interval = setInterval(function() {
        if (!txt[0]) {
            return clearInterval(interval);
        };
        ele.innerHTML += txt.shift();
    }, speed != undefined ? speed : 10);

    return false;
};