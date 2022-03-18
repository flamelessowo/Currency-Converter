//#region Variables
let currenciesInput = document.getElementById('currenciesInput')
let currenciesOutput = document.getElementById('currenciesOutput')
let moneyInput = document.getElementById('moneyInput')
let moneyOutput = document.getElementById('moneyOutput')
let label = document.querySelector('.h2stuff')
let labelOutput = document.querySelector('.h2convertTo')
let imageConvert = document.querySelector('.image')
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

moneyInput.addEventListener('change', (evt)=>{
    handleConvertCurrencies()
})

currenciesInput.addEventListener('change', (evt)=>{
    label.innerText = 'Current Currency: ' + currenciesInput.options[evt.currentTarget.selectedIndex].value;
    handleConvertCurrencies()

})

currenciesOutput.addEventListener('change', (evt)=>{
    labelOutput.innerHTML = 'Converted To: ' + currenciesOutput.options[evt.currentTarget.selectedIndex].value;
    handleConvertCurrencies()
})

imageConvert.addEventListener('click', (evt)=>{
    handleConvertCurrencies()
})

window.onload = ()=>{
    fillCurrencies()
}
//#endregion
//#region Async backend logic
async function convertCurrencies(data={}){
    if (!currenciesInput.selectedIndex || !currenciesOutput.selectedIndex){
        return
    }
    let url = new URL('http://localhost:8000/convert');
    let params = {
    fromCurrency: data.fromCurrency,
    to: data.to,
    amount: data.amount
    }
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))

    const response = await fetch(url, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        headers: {'Content-Type': 'application/json'}
    })
    let json = await response.json()
    moneyOutput.value = json.result

}

function handleConvertCurrencies(){
    try{
        convertCurrencies({
        fromCurrency:currenciesInput.options[currenciesInput.selectedIndex].innerText,
        to: currenciesOutput.options[currenciesOutput.selectedIndex].innerText,
        amount: moneyInput.value

    })
    }
    catch (e){
        console.log('Choose currencies and write number to convert')
    }
}
//#endregion
