var request = new XMLHttpRequest();
var requestWeather = new XMLHttpRequest();
const APIKEY = '21e96a1073a696668dd8b903f2f851a2';

request.open('GET', 'https://restcountries.eu/rest/v2/all', true);
request.send();
request.onload = function() {
    var data = JSON.parse(this.response) // same as request.response
    console.log(data.filter((item) => {
      return (item.region === 'Asia');    // countries belonging to region Asia
    }));
    console.log(data.filter((item) => {
        return (item.population < 200000); // countries with population less than 2 lakhs
    }));
    data.forEach((item) => {
      console.log(item.name); // print country name
      console.log(item.capital); // print country capital
      console.log(item.flag); // print country flag
    });
    console.log(data.reduce((accumulator, item) => {
      return accumulator + item.population; // total population
    }, 0));
    console.log(data.filter((item) => {
        return (item.currencies[0].code === 'USD'); // countries USD as currency
    }));
}
