var Schwifty = document.getElementById("RickandMortyButton");
Schwifty.addEventListener("click", rick_morty);

function rick_morty() {
  axios.get("https://rickandmortyapi.com/api/character/").then((response) => {
    for (let i = 0; i < response.data.results.length; i++) {
      const name = document.createElement("h2");
      const status = document.createElement("li");
      const species = document.createElement("li");
      const gender = document.createElement("li");
      const origin = document.createElement("li");

      name.textContent = response.data.results[i].name;
      status.textContent = "Status: " +  response.data.results[i].status;
      species.textContent = "Species: " + response.data.results[i].species;
      gender.textContent = "Gender: " + response.data.results[i].gender;
      origin.textContent = "Origin: " + response.data.results[i].origin.name;

      document.getElementById("rickmorty").appendChild(name);
      document.getElementById("rickmorty").appendChild(status);
      document.getElementById("rickmorty").appendChild(species);
      document.getElementById("rickmorty").appendChild(gender);
      document.getElementById("rickmorty").appendChild(origin);

      name.style.textDecorationLine = "underline"

    }
  });
}

// function star_wars() {
//     axios.get("https://swapi.dev/api/people/")
// }
var Force = document.getElementById("StarWarsButton");
Force.addEventListener("click", star_wars);

function star_wars() {
  axios.get("https://swapi.dev/api/people/").then((response) => {
    for (let i = 0; i < response.data.results.length; i++) {
      const name = document.createElement("h2");
    //   const status = document.createElement("li");
      const species = document.createElement("li");
      const gender = document.createElement("li");
    //   const homeworld = document.createElement("li");

      name.textContent = response.data.results[i].name;
    //   status.textContent = response.data.results[i].status;
      species.textContent = response.data.results[i].species;
      gender.textContent = response.data.results[i].gender;
    //   homeworld.textContent = response.data.results[i].homeworld.name;

      document.getElementById("starwars").appendChild(name);
    //   document.getElementById("starwars").appendChild(status);
      document.getElementById("starwars").appendChild(species);
      document.getElementById("starwars").appendChild(gender);
    //   document.getElementById("starwars").appendChild(homeworld);

      name.style.textDecorationLine = "underline"

    }
  });
}