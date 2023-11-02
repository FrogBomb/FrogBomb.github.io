"use strict";
function process() {
    const startCalcium = document.getElementById("start-calcium").valueAsNumber;
    const startDate = document.getElementById("start-date").valueAsDate;
    const endCalcium = document.getElementById("end-calcium").valueAsNumber;
    const endDate = document.getElementById("end-date").valueAsDate;
    if (!isNaN(startCalcium) & !isNaN(endCalcium) & (startDate !== null) & (endDate !== null)) {
        const startTimeYears = msToYears(startDate.getTime());
        const endTimeYears = msToYears(endDate.getTime());
        const annProg = calculateAnnulizedProgressionPercent(startCalcium, startTimeYears, endCalcium, endTimeYears);
        document.getElementById("result").value = annProg.toFixed(2) + "%";
    }
}

function msToYears(ms) {
    return ms / (1000 * 60 * 60 * 24 * 365.2422);
}

function calculateAnnulizedProgressionPercent(startVal, startYears, endVal, endYears) {
    const startValLn = Math.log(startVal);
    const endValLn = Math.log(endVal);
    const lnValDiff = endValLn - startValLn;
    const lnProg = lnValDiff/(endYears - startYears);
    const prog = Math.exp(lnProg);
    return 100*(prog - 1);
}

document.getElementById("input-fields").addEventListener("change", () => process());