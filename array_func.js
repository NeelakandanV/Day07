//let request = new XMLHttpRequest();
//request.open("GET","https://restcountries.com/v3.1/all");
//request.send();
//request.onload = function(){
//    let data = JSON.parse(request.response);
//    console.log(data);

    // a. Get all the countries from the Asia continent /region using the Filter function
    
    //let asiaCon = data.filter((country) => country.continents[0]=='Asia' );
    //console.log(asiaCon);

    // output
    // (52) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]



    // b. Get all the countries with a population of less than 2 lakhs using Filter function
    
    //let population = data.filter((populate) => populate.population < 200000);
    //console.log(population);

    // output
    // (62) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]



    // c. Print the following details name, capital, flag using forEach function

    //data.forEach(details =>
    //    console.log(details.name,details.capital,details.flag));
    //}
    
    // output
    // array size same as data 
    // sample output for data[2]
    // {common: 'Finland', official: 'Republic of Finland', nativeName: {…}} ['Helsinki'] '🇫🇮'



    // d. Print the total population of countries using reduce function
    
    //let people = data.reduce((acc,obj) => acc + obj.population,0);
    //console.log(people);

    //output
    //7777721563

    

    // e. Print the country which uses US Dollars as currency.
    
    //let USDcurrency = data.filter((cash) => {
    //  for(let i in  cash.currencies){
    //       if(cash.currencies[i].name ==="United States dollar"){
    //        return cash;
    //       }
    //  } 
    //});
    //console.log(USDcurrency);

    // output
    // (20) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
    //sample output 1 array
    //0: {name: {…}, tld: Array(1), cca2: 'SV', ccn3: '222', cca3: 'SLV', …}
//}

