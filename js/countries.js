const loadCountries = () => {
    fetch('https://jsonplaceholder.typicode.com/photos')
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

const getCountryHTML = ({id,title,userId,thumbnailUrl}) => {
    return`
    <div class="country" >
    <h2 class= "id" >${id}</h2>
    <h2 class= "title" >${title}</h2>
    <h2 class= "user" >User id :${userId}</h2>
    <img class="image" src="${thumbnailUrl}">
    </div>
    `
}

loadCountries();