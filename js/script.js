function reqListener() {
   console.log(this.responseText);
   const countryArr=JSON.parse(this.responseText);
   console.log(countryArr[0])
   console.log(countryArr[0].flags.png)
   console.log(countryArr[0].name.common)
   console.log(countryArr[0].region)
   console.log(countryArr[0].subregion)
   console.log(countryArr[0].population)
    }
  
  const req = new XMLHttpRequest();
  req.addEventListener("load", reqListener);
  req.open("GET", "https://restcountries.com/v3.1/all");
  req.send();
  