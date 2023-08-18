let searchBtton = document.getElementById("search-btn");
let cntryInp = document.getElementById("country-inp");
let result = document.getElementById("result");

searchBtton.addEventListener("click", () => {
    let cntryName = encodeURIComponent(cntryInp.value);
    let finalURL = `https://restcountries.com/v3.1/name/${cntryName}?fullText=true`;

    fetch(finalURL)
        .then((response) => response.json())
        .then((data) => {
            console.log(data[0]);
            console.log(data[0].capital[0]);
            console.log(data[0].flags.svg);
            console.log(data[0].name.common);
            console.log(data[0].continents[0]);
            console.log(Object.keys(data[0].currencies)[0]);
            console.log(data[0].currencies[Object.keys(data[0].currencies)].name);
            console.log(
                Object.values(data[0].languages).toString().split(",").join(",")
            );

            result.innerHTML = `
                <img src="${data[0].flags.svg}" 
                class="flag-img">
                <h2>${data[0].name.common}</h2>
                <div class ="wrapper">
                 <div class ="data-wrapper">
                 <h4>Capital:</h4>
                 <span>${data[0].capital[0]}</span>
                  </div>
                </div>

                <div class ="wrapper">
                 <div class ="data-wrapper">
                 <h4>Continents:</h4>
                 <span>${data[0].continents[0]}</span>
                  </div>
                </div>

                <div class="wrapper">
                <div class="data-wrapper">
                    <h4>Population:</h4>
                    <span>${data[0].population}</span>
                </div>
            </div>

            <div class="wrapper">
                <div class="data-wrapper">
                    <h4>Currency:</h4>
                    <span>${data[0].currencies[Object.keys(data[0].currencies)].name} - ${Object.keys(data[0].currencies)[0]}</span>
                </div>
            </div>

            <div class="wrapper">
                <div class="data-wrapper">
                    <h4>Common Languages:</h4>
                    <span>${Object.values(data[0].languages).toString().split(",").join(",")}</span>
                </div>
            </div>
            `;
        })
        .catch(() => {
            if (cntryName.length == 0) {
                result.innerHTML = `<h3>Oooh! You don't type any thing!</h3>`
            } else {
                result.innerHTML = `<h3> OO00p the Country you type is not exist!</h3>`
            }
        });
});