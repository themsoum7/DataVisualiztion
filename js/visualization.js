fetch("http://data.fixer.io/api/latest?access_key=900a6a062b01085bd70009074858c743")
    .then(function (response) {
        return response.json();
    })
    .then(function (myJson) {
        let res = (myJson);
        // console.log(res);

        Object.keys(res["rates"]).forEach(function (key) {
            // console.log('Key : ' + key);
            // console.log(res["rates"][key]);
            document.getElementsByClassName("content__curr-name")[0].innerHTML += key + ": " + res["rates"][key].toFixed(3) + '<br/>';
            // document.getElementsByClassName("content__curr-value")[0].innerHTML += res["rates"][key];
        });
    });


const url = "http://data.fixer.io/api/latest?access_key=900a6a062b01085bd70009074858c743";

const fetchData = (url) => {

};



const currencies = fetchData(url);


const renderCurrencies = (curr) => {
}