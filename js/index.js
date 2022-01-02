let elInputNumber = document.querySelector(".input-1");
let elBtnCheck = document.querySelector(".check");
let elResult = document.querySelector(".result");
let elResult1 = document.querySelector(".result-1");
let elResult2 = document.querySelector(".result-2");
let elResult3 = document.querySelector(".result-3");


elBtnCheck.addEventListener("click", () => {
    let elHour = Math.trunc(Number(elInputNumber.value) / 3.6);
    let elHour1 = Math.trunc(Number(elInputNumber.value) / 20.1);
    let elHour2 = Math.trunc(Number(elInputNumber.value) / 70);
    let elHour3 = Math.trunc(Number(elInputNumber.value) / 800);
    let elMinut = (((Number(elInputNumber.value) / 3.6) - `${elHour}`).toFixed(2)) * 100;
    let elMinut1 = (((Number(elInputNumber.value) / 20.1) - `${elHour1}`).toFixed(2)) * 100;
    let elMinut2 = (((Number(elInputNumber.value) / 70) - `${elHour2}`).toFixed(2)) * 100;
    let elMinut3 = (((Number(elInputNumber.value) / 800) - `${elHour3}`).toFixed(2)) * 100;

    if (elMinut >= 60) {
        elResult.textContent = `${elHour + 1}` + " soat " + `${elMinut - 60}` + " minut"; 
    } else {
        elResult.textContent = `${elHour}` + " soat " + `${elMinut}` + " minut";
    }

    if (elMinut1 >= 60) {
        elResult1.textContent = `${elHour1 + 1}` + " soat " + `${elMinut1 - 60}` + " minut"; 
    } else {
        elResult1.textContent = `${elHour1}` + " soat " + `${elMinut1}` + " minut";
    }

    if (elMinut2 >= 60) {
        elResult2.textContent = `${elHour2 + 1}` + " soat " + `${elMinut2 - 60}` + " minut"; 
    } else {
        elResult2.textContent = `${elHour2}` + " soat " + `${elMinut2}` + " minut";
    }

    if (elMinut3 >= 60) {
        elResult3.textContent = `${elHour3 + 1}` + " soat " + `${elMinut3 - 60}` + " minut"; 
    } else {
        elResult3.textContent = `${elHour3}` + " soat " + `${elMinut3}` + " minut";
    }
});


