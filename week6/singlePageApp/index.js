// https://api.vschool.io/pokemon
// https://rickandmortyapi.com/api/character/
// https://swapi.dev/api/people/
const container1 = document.getElementById("container1");
const container2 = document.getElementById("container2");
const container3 = document.getElementById("container3");

async function getData() {
  const StarWarsName = await axios.get("https://swapi.dev/api/people/");
  const StarWarsSpecies = await axios.get("https://swapi.dev/api/species/");
  const StarWarsHomeworld = await axios.get("https://swapi.dev/api/planets/");
  addToDom(StarWarsName, StarWarsSpecies, StarWarsHomeworld);
}
getData();

function addToDom(name, species, homeworld) {
  name.data.results.forEach(names => {
    const p = document.createElement("p");
    p.textContent = names.name;
    container1.appendChild(p);
  });
  species.data.results.forEach(race => {
    const p = document.createElement("p");
    p.textContent = race.name;
    container2.appendChild(p);
  });
  homeworld.data.results.forEach(place => {
    const p = document.createElement("p");
    p.textContent = place.name;
    container3.appendChild(p);
  });
}
