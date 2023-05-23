const loadCountries = () => {
    fetch('https://jsonplaceholder.typicode.com/albums')
    .then(res => res.json())
    .then(data => displayCountries(data));
}

const displayCountries = countries => {
     console.log(countries)
    const countriesHTML = countries.map(country => getCountryHTML(country));
    // console.log(countriesHTML[0])
    const container = document.getElementById('countries')
    container.innerHTML= countriesHTML.join('');
    
}

const getCountryHTML = country => {
    return`
    <div class="country" >
    <h2>${country.id}</h2>
    <h2>${country.title}</h2>
    <h2>User id :${country.userId}</h2>
    
    </div>
    `
}

loadCountries();