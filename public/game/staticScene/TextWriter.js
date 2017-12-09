// export default class TextWriter {
//     constructor(classname, text, speed) {
//         this.classname = classname;
//         this.text = text;
//         this.speed = speed;
//     }

//     write() {
//         debugger;
//         this.elem = document.getElementsByClassName(this.classname)[0];
//         this.txt = text.join("").split("");

//         this.interval = setInterval(this.shifting, typeof this.speed !== 'undefined' ? this.speed : 70);
//     }

//     shifting() {
//         if (!this.txt[0]) {
//             return clearInterval(this.interval);
//         };
//         this.elem.innerHTML += this.txt.shift();
//     }
// }

// // function textWriter(classname, text, speed) {

// //     const elem = document.getElementsByClassName(classname)[0];
// //     const txt = text.join("").split("");
// //     //console.log(elem);

// //     var interval = setInterval(shiftingFunc, speed != undefined ? speed : 70);

// //     return false;
// // };

// // function shifting() {

// //     if (!this.txt[0]) {

// //         return clearInterval(interval);
// //     };
// //     this.elem.innerHTML += this.txt.shift();
// // }

// // export default textWriter;

export default function textWriter(classname, text, speed) {

    var ele = document.getElementsByClassName(classname)[0];
    var txt = text.join("").split("");
    console.log(ele);

    var interval = setInterval(function() {

        if (!txt[0]) {

            return clearInterval(interval);
        };
        ele.innerHTML += txt.shift();
    }, speed != undefined ? speed : 35);

    return false;
};