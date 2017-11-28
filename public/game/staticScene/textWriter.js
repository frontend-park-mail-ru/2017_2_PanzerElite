function textWriter(classname, text, speed) {

    var ele = document.getElementsByClassName(classname)[0];
    var txt = text.join("").split("");
    console.log(ele);

    var interval = setInterval(function() {

        if (!txt[0]) {

            return clearInterval(interval);
        };
        ele.innerHTML += txt.shift();
    }, speed != undefined ? speed : 70);

    return false;
};

export default textWriter;