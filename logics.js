const btn1 = document.getElementById("btn1");
const btnReset = document.getElementById("btnReset");
        
var sectionArr = [0, 0, 0, 0, 0, 0];
var resultArr = [0, 0, 0, 0, 0, 0];
var presentNum = 0;

function makeNumberSection5() {
    sectionArr.length = 0;
    resultArr.length = 0;
    for (i = 0; i < 9; i++) {
        sectionArr[i] = i + 1;
    }
    for (i = 0; i < 3; i++) {
        presentNum = Math.floor(Math.random()*(9-i));
        sectionArr.splice(presentNum, 1);
    }
    for (i = 0; i < 6; i++) {
        presentNum = Math.floor(Math.random()*5) + 1;
        resultArr[i] = sectionArr[i] * 5 - 5 + presentNum;
    }
}
function makeNumberSection3() {
    sectionArr.length = 0;
    resultArr.length = 0;
    for (i = 0; i < 15; i++) {
        sectionArr[i] = i + 1;
    }
    for (i = 0; i < 9; i++) {
        presentNum = Math.floor(Math.random()*(15-i));
        sectionArr.splice(presentNum, 1);
    }
    for (i = 0; i < 6; i++) {
        presentNum = Math.floor(Math.random()*3) + 1;
        resultArr[i] = sectionArr[i] * 3 - 3 + presentNum;
    }
}
function makeNumberSection1() {
    sectionArr.length = 0;
    resultArr.length = 0;
    for (i = 0; i < 45; i++) {
        sectionArr[i] = i + 1;
    }
    for (i = 0; i < 39; i++) {
        presentNum = Math.floor(Math.random()*(45-i));
        sectionArr.splice(presentNum, 1);
    }
    for (i = 0; i < 6; i++) {
        presentNum = Math.floor(Math.random()*1) + 1;
        resultArr[i] = sectionArr[i] - 1 + presentNum;
    }
}

btn1.addEventListener('click', () => {
    makeNumberSection5();
    document.getElementById("A1").innerText = resultArr[0];
    document.getElementById("B1").innerText = resultArr[1];
    document.getElementById("C1").innerText = resultArr[2];
    document.getElementById("D1").innerText = resultArr[3];
    document.getElementById("E1").innerText = resultArr[4];
    document.getElementById("F1").innerText = resultArr[5];
    makeNumberSection3();
    document.getElementById("A2").innerText = resultArr[0];
    document.getElementById("B2").innerText = resultArr[1];
    document.getElementById("C2").innerText = resultArr[2];
    document.getElementById("D2").innerText = resultArr[3];
    document.getElementById("E2").innerText = resultArr[4];
    document.getElementById("F2").innerText = resultArr[5];
    makeNumberSection1();
    document.getElementById("A3").innerText = resultArr[0];
    document.getElementById("B3").innerText = resultArr[1];
    document.getElementById("C3").innerText = resultArr[2];
    document.getElementById("D3").innerText = resultArr[3];
    document.getElementById("E3").innerText = resultArr[4];
    document.getElementById("F3").innerText = resultArr[5];
})
btnReset.addEventListener('click', () => {
    document.getElementById("A1").innerText = 0;
    document.getElementById("B1").innerText = 0;
    document.getElementById("C1").innerText = 0;
    document.getElementById("D1").innerText = 0;
    document.getElementById("E1").innerText = 0;
    document.getElementById("F1").innerText = 0;

    document.getElementById("A2").innerText = 0;
    document.getElementById("B2").innerText = 0;
    document.getElementById("C2").innerText = 0;
    document.getElementById("D2").innerText = 0;
    document.getElementById("E2").innerText = 0;
    document.getElementById("F2").innerText = 0;

    document.getElementById("A3").innerText = 0;
    document.getElementById("B3").innerText = 0;
    document.getElementById("C3").innerText = 0;
    document.getElementById("D3").innerText = 0;
    document.getElementById("E3").innerText = 0;
    document.getElementById("F3").innerText = 0;
})