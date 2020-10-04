const mandalorian = {
    "name": "Boba Fett",
    "height": "183",
    "mass": "78.2",
    "hair_color": "black",
    "skin_color": "fair",
    "eye_color": "brown",
    "birth_year": "31.5BBY",
    "gender": "male",
    "homeworld": "http://swapi.dev/api/planets/10/",
    "films": [
        "http://swapi.dev/api/films/2/",
        "http://swapi.dev/api/films/3/",
        "http://swapi.dev/api/films/5/"
    ],
    "species": [],
    "vehicles": [],
    "starships": [
        "http://swapi.dev/api/starships/21/"
    ],
    "created": "2014-12-15T12:49:32.457000Z",
    "edited": "2014-12-20T21:17:50.349000Z",
    "url": "http://swapi.dev/api/people/22/"
}

const values = Object.values(mandalorian);
const entries = Object.entries(mandalorian);
const starWarsData = document.getElementById('starWarsData');

starWarsData.innerHTML = '<ul>' + entries.map(function(item) {  
    return `<li> ${item[0]}${item[1]} </li>`;         
}).join('') + '</ul>'
