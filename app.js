// Global Variables 

const addCurrencyBtn = document.querySelector(".add-currency-btn");
const addCurrencyList = document.querySelector(".add-currency-list");
const currenciesList = document.querySelector(".currencies");

const initiallyDisplayedCurrencies = ["USD", "EUR", "GBP", "JPY", "RUB"];
let baseCurrency;
let baseCurrencyAmount;

const currencies = [{
        name: "US Dollar",
        abbreviation: "USD",
        symbol: "\u0024",
        flagURL: "https://img.icons8.com/color/48/000000/usa.png",
        rate: 1.1325
    },
    {
        name: "Euro",
        abbreviation: "EUR",
        symbol: "\u20AC",
        flagURL: "https://img.icons8.com/color/48/000000/flag-of-europe.png",
        rate: 1
    },
    {
        name: "Japanese Yen",
        abbreviation: "JPY",
        symbol: "\u00A5",
        flagURL: "https://img.icons8.com/color/48/000000/japan.png",
        rate: 125.5600
    },
    {
        name: "British Pound",
        abbreviation: "GBP",
        symbol: "\u00A3",
        flagURL: "https://img.icons8.com/color/48/000000/great-britain.png",
        rate: 0.8726
    },
    {
        name: "Australian Dollar",
        abbreviation: "AUD",
        symbol: "\u0024",
        flagURL: "https://img.icons8.com/color/48/000000/australia-flag--v1.png",
        rate: 1.5923
    },
    {
        name: "Canadian Dollar",
        abbreviation: "CAD",
        symbol: "\u0024",
        flagURL: "https://img.icons8.com/color/48/000000/canada.png",
        rate: 1.4976
    },
    {
        name: "Swiss Franc",
        abbreviation: "CHF",
        symbol: "\u0043\u0048\u0046",
        flagURL: "https://img.icons8.com/color/48/000000/switzerland.png"
    },
    {
        name: "Chinese Yuan Renminbi",
        abbreviation: "CNY",
        symbol: "\u00A5",
        flagURL: "https://img.icons8.com/color/48/000000/china.png"
    },
    {
        name: "Swedish Krona",
        abbreviation: "SEK",
        symbol: "\u006B\u0072",
        flagURL: "https://img.icons8.com/color/48/000000/sweden.png"
    },
    {
        name: "New Zealand Dollar",
        abbreviation: "NZD",
        symbol: "\u0024",
        flagURL: "https://img.icons8.com/color/48/000000/new-zealand.png"
    },
    {
        name: "Mexican Peso",
        abbreviation: "MXN",
        symbol: "\u0024",
        flagURL: "https://img.icons8.com/color/48/000000/mexico.png"
    },
    {
        name: "Singapore Dollar",
        abbreviation: "SGD",
        symbol: "\u0024",
        flagURL: "https://img.icons8.com/color/48/000000/singapore.png"
    },
    {
        name: "Hong Kong Dollar",
        abbreviation: "HKD",
        symbol: "\u0024",
        flagURL: "https://img.icons8.com/color/48/000000/hongkong-flag.png"
    },
    {
        name: "Norwegian Krone",
        abbreviation: "NOK",
        symbol: "\u006B\u0072",
        flagURL: "https://img.icons8.com/color/48/000000/norway.png"

    },
    {
        name: "South Korean Won",
        abbreviation: "KRW",
        symbol: "\u20A9",
        flagURL: "https://img.icons8.com/color/48/000000/south-korea.png"

    },
    {
        name: "Turkish Lira",
        abbreviation: "TRY",
        symbol: "\u20BA",
        flagURL: "https://img.icons8.com/color/48/000000/turkey.png"

    },
    {
        name: "Russian Ruble",
        abbreviation: "RUB",
        symbol: "\u20BD",
        flagURL: "https://img.icons8.com/color/48/000000/russian-federation.png",
        rate: 74.1694
    },
    {
        name: "Indian Rupee",
        abbreviation: "INR",
        symbol: "\u20B9",
        flagURL: "https://img.icons8.com/color/48/000000/india.png"
    },
    {
        name: "Brazilian Real",
        abbreviation: "BRL",
        symbol: "\u0052\u0024",
        flagURL: "https://img.icons8.com/color/48/000000/brazil.png"
    },
    {
        name: "South African Rand",
        abbreviation: "ZAR",
        symbol: "\u0052",
        flagURL: "https://img.icons8.com/color/48/000000/south-africa.png"
    },
    {
        name: "Philippine Peso",
        abbreviation: "PHP",
        symbol: "\u20B1",
        flagURL: "https://img.icons8.com/color/48/000000/philippines.png"
    },
    {
        name: "Czech Koruna",
        abbreviation: "CZK",
        symbol: "\u004B\u010D",
        flagURL: "https://img.icons8.com/color/48/000000/czech-republic.png"

    },
    {
        name: "Indonesian Rupiah",
        abbreviation: "IDR",
        symbol: "\u0052\u0070",
        flagURL: "https://img.icons8.com/color/48/000000/indonesia.png"
    },
    {
        name: "Malaysian Ringgit",
        abbreviation: "MYR",
        symbol: "\u0052\u004D",
        flagURL: "https://img.icons8.com/color/48/000000/malaysia.png"
    },
    {
        name: "Hungarian Forint",
        abbreviation: "HUF",
        symbol: "\u0046\u0074",
        flagURL: "https://img.icons8.com/color/48/000000/hungary.png"
    },
    {
        name: "Icelandic Krona",
        abbreviation: "ISK",
        symbol: "\u006B\u0072",
        flagURL: "https://img.icons8.com/color/48/000000/iceland.png"

    },
    {
        name: "Croatian Kuna",
        abbreviation: "HRK",
        symbol: "\u006B\u006E",
        flagURL: "https://img.icons8.com/color/48/000000/croatia.png"

    },
    {
        name: "Bulgarian Lev",
        abbreviation: "BGN",
        symbol: "\u043B\u0432",
        flagURL: "https://img.icons8.com/color/48/000000/bulgaria.png"

    },
    {
        name: "Romanian Leu",
        abbreviation: "RON",
        symbol: "\u006C\u0065\u0069",
        flagURL: "https://img.icons8.com/color/48/000000/romania.png"

    },
    {
        name: "Danish Krone",
        abbreviation: "DKK",
        symbol: "\u006B\u0072",
        flagURL: "https://img.icons8.com/color/48/000000/denmark.png"

    },
    {
        name: "Thai Baht",
        abbreviation: "THB",
        symbol: "\u0E3F",
        flagURL: "https://img.icons8.com/color/48/000000/thailand.png"

    },
    {
        name: "Polish Zloty",
        abbreviation: "PLN",
        symbol: "\u007A\u0142",
        flagURL: "https://img.icons8.com/color/48/000000/poland.png"

    },
    {
        name: "Israeli Shekel",
        abbreviation: "ILS",
        symbol: "\u20AA",
        flagURL: "https://img.icons8.com/color/48/000000/israel.png"

    }
];

//Open currency list with click 
addCurrencyBtn.addEventListener("click", addCurrencyBtnClick);

function addCurrencyBtnClick(event) {
    addCurrencyBtn.classList.toggle("open");
}

//  Add new currencies
addCurrencyList.addEventListener("click", addCurrencyListClick);

function addCurrencyListClick(event) {
    const clickedListItem = event.target.closest("li");
    if (!clickedListItem.classList.contains("disabled")) {
        const newCurrency = currencies.find(c => c.abbreviation === clickedListItem.getAttribute("data-currency"));
        if (newCurrency) newCurrenciesListItem(newCurrency);
    }
}

//Remove currencies from dashboard
currenciesList.addEventListener("click", currenciesListClick);

function currenciesListClick(event) {
    if (event.target.classList.contains("close")) {
        const parentNode = event.target.parentNode;
        parentNode.remove();
        addCurrencyList.querySelector(`[data-currency=${parentNode.id}]`).classList.remove("disabled");
        if (parentNode.classList.contains("base-currency")) {
            const newBaseCurrencyLI = currenciesList.querySelector(".currency");
            if (newBaseCurrencyLI) {
                setNewBaseCurrency(newBaseCurrencyLI);
                baseCurrencyAmount = Number(newBaseCurrencyLI.querySelector(".input input").nodeValue);
            }
        }
    }
}

function setNewBaseCurrency(newBaseCurrencyLI) {
    newBaseCurrencyLI.classList.add("base-currency");
    baseCurrency = newBaseCurrencyLI.id;
    const baseCurrencyRate = currencies.find(currency => currency.abbreviation === baseCurrency).rate;
    currenciesList.querySelectorAll(".currency").forEach(currencyLI => {
        const currencyRate = currencies.find(currency => currency.abbreviation === currencyLI.id).rate;
        const exchangeRate = currencyLI.id === baseCurrency ? 1 : (currencyRate / baseCurrencyRate).toFixed(4);
        currencyLI.querySelector(".base-currency-rate").textContent = `1 ${baseCurrency} = ${exchangeRate} ${currencyLI.id}`;
    }); //31:11
}


//Auxiliary Functions 

function populateAddCurrencyList() {
    for (let i = 0; i < currencies.length; i++) {
        addCurrencyList.insertAdjacentHTML(
            "beforeend",
            `<li data-currency=${currencies[i].abbreviation}><img src=${currencies[i].flagURL} class="flag" alt="New Zealand flag.">
            <span>${currencies[i].abbreviation} - ${currencies[i].name}</span></li>`
        );
    }
}

function populateCurrenciesList() {
    for (let i = 0; i < initiallyDisplayedCurrencies.length; i++) {
        const currency = currencies.find(c => c.abbreviation === initiallyDisplayedCurrencies[i]);
        if (currency) newCurrenciesListItem(currency);
    }
}

function newCurrenciesListItem(currency) {
    if (currenciesList.childElementCount === 0) {
        baseCurrency = currency.abbreviation;
        baseCurrencyAmount = 0;
    }
    addCurrencyList.querySelector(`[data-currency=${currency.abbreviation}]`).classList.add("disabled");
    const baseCurrencyRate = currencies.find(c => c.abbreviation === baseCurrency).rate;
    const exchangeRate = currency.abbreviation === baseCurrency ? 1 : (currency.rate / baseCurrencyRate).toFixed(4);
    const inputValue = baseCurrencyAmount ? (baseCurrencyAmount * exchangeRate).toFixed(4) : "";

    currenciesList.insertAdjacentHTML(
        "beforeend",
        `  <li class="currency ${currency.abbreviation===baseCurrency ? "base-currency" : ""}" id=${currency.abbreviation}>
        <img src=${currency.flagURL} class="flag" alt="Mexico flag." />
        <div class="info">
            <p class="input"> <span class="currency-symbol">${currency.symbol}</span><input type="text" placeholder="0.0000" value=${inputValue} ></p>
            <p class="currency-name">${currency.abbreviation} - ${currency.name}</p>
            <p class="base-currency-rate">1 ${baseCurrency} = ${exchangeRate} ${currency.abbreviation} </p>
        </div>
        <span class="close">&times;</span>
    </li>`
    )
}

populateAddCurrencyList();

populateCurrenciesList();