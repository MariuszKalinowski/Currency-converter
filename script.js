{

    const calculateResult = (sum, currency) => {
        const dolar = 4.4074
        const euro = 4.7716
        const pound = 5.2415

        switch (currency) {
            case "USD":
                return sum / dolar;

            case "EUR":
                return sum / euro;

            case "GBP":
                return sum / pound;
        }
    };

    const uptadeResultText = (sum, result, currency) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerHTML = `<strong>${sum} PLN = ${result.toFixed(2)} ${currency}</strong>`;
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        const sumElement = document.querySelector(".js-sum");
        const currencyElement = document.querySelector(".js-currency");


        const currency = currencyElement.value;
        const sum = sumElement.value;

        const result = calculateResult(sum, currency);

        uptadeResultText(sum, result, currency);
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
    };
    init();
}