let sumElement = document.querySelector(".js-sum");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");
let formElement = document.querySelector(".js-form")
let dolar = 4.4074
let euro = 4.7716
let pound = 5.2415

formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    let currency = currencyElement.value;
    let sum = sumElement.value;
    let result;

    switch (currency) {
        case "USD":
        result = sum/dolar;
        break;

        case "EUR":
        result = sum/euro;
        break;

        case "GBP":
        result = sum/pound;
        break;
    }

    resultElement.innerHTML = `${sum} PLN = ${result.toFixed(2)}
     ${currency}</strong>`;


});
