let p1Ele = document.getElementsByClassName("p1")[0];
let p1Div = document.getElementsByClassName("p1div")[0];
let p2Ele = document.getElementsByClassName("p2")[0];
let colorP = document.getElementsByClassName("colorP")[0];
let buttonMoveP1P2Right = document.getElementsByClassName("mpr")[0];
let buttonColorChange = document.getElementsByClassName("ccc")[0];
let mp2m = document.querySelector(".mp2m");
let mp2s = document.querySelector(".mp2s");
let swi = document.querySelector("#switch");
let con = document.querySelector(".con");


buttonMoveP1P2Right.addEventListener("click", () => {
    p1Div.classList.toggle("p1divright");
    p2Ele.classList.toggle("p2moveright");
});

buttonColorChange.addEventListener("click", () => {
    colorP.classList.add("colorpChange");
})

let intervalId;
const startMp2m = () => {
    intervalId = setInterval(() => p2Ele.classList.toggle("p2moveright"), 1500)
}

mp2m.addEventListener("click", () => startMp2m());
mp2s.addEventListener("click", () => clearInterval(intervalId));

let switchStatus = "off";

swi.addEventListener("click", () => {
    if(switchStatus === "off") {
        con.classList.add("switchon");
        switchStatus = "on";
        p2Ele.style.backgroundColor = "yellow";
        switchSomething();
    } else {
        con.classList.remove("switchon");
        switchStatus = "off";
        p2Ele.style.backgroundColor = "rgb(241, 34, 162)";
        switchSomething();
    }
});

function switchSomething() {
    console.log(switchStatus);
}