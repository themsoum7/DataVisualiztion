const url = "http://data.fixer.io/api/latest?access_key=900a6a062b01085bd70009074858c743";

const fetchData = (url) => {
    return fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {
            let promise1 = Promise.resolve(myJson["rates"]);

            promise1.then(function (value) {
                console.log(value);
            });
            // return myJson;
        });

};

const currencies = fetchData(url);
console.log(currencies);

const renderCurrencies = (curr) => {
    console.log(curr);
    Object.keys(curr["rates"]).forEach(function (key) {
        // console.log('Key : ' + key);
        // console.log(res["rates"][key]);
        document.getElementsByClassName("content__curr-name")[0].innerHTML += key + ":";
        document.getElementsByClassName("content__curr-value")[0].innerHTML += curr["rates"][key].toFixed(3);
    });
};

console.log(renderCurrencies(currencies));
