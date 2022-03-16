//#region Variables
let currenciesInput = document.getElementById('currenciesInput')
let currenciesOutput = document.getElementById('currenciesOutput')
let moneyInput = document.getElementById('moneyInput')
let moneyOutput = document.getElementById('moneyOutput')
let label = document.querySelector('.h2stuff')
let labelOutput = document.querySelector('.h2convertTo')
//#endregion
//#region Selection Logic and FileRead Functions
function readTextFile(file, callback) {
    let rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

function fillCurrencies(){
    readTextFile('data/currencies.json', (text)=>{
        let data = JSON.parse(text);
        console.log(data)
        for (const key in data) {
            let opt = document.createElement('option')
            opt.value = data[key]
            opt.innerHTML = key
            currenciesInput.appendChild(opt)
            opt = document.createElement('option')
            opt.value = data[key]
            opt.innerHTML = key
            currenciesOutput.appendChild(opt)
        }

    })
}

currenciesInput.addEventListener('change', (evt)=>{
    label.innerText = 'Current Currency: ' + evt.currentTarget.options[evt.currentTarget.selectedIndex].value;
})
currenciesOutput.addEventListener('change', (evt)=>{
    labelOutput.innerHTML = 'Converted To: ' + evt.currentTarget.options[evt.currentTarget.selectedIndex].value;
})

window.onload = ()=>{
    fillCurrencies()
}
//#endregion
//#region Async backend logic

//#endregion
