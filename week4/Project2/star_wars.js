
var Force = document.getElementById("StarWarsButton");
Force.addEventListener("click", star_wars);

function star_wars() {
  axios.get("https://swapi.dev/api/people/", ).then((response) => {
    for (let i = 0; i < response.data.results.length; i++) {
      const name = document.createElement("h2");
      const height = document.createElement("li");
      const birthdate = document.createElement("li");
      const hair = document.createElement("li");
      const gender = document.createElement("li");
      const skincolor = document.createElement("li");

      name.textContent = response.data.results[i].name;
      height.textContent = "Height: " +response.data.results[i].height;
      birthdate.textContent = "Birth Year: " + response.data.results[i].birth_year;
      hair.textContent = "Hair Color: " + response.data.results[i].hair_color;
      gender.textContent = "Gender: " + response.data.results[i].gender;
      skincolor.textContent = "Skin Color: " + response.data.results[i].skin_color;

      document.getElementById("starwars").appendChild(name);
      document.getElementById("starwars").appendChild(height);
      document.getElementById("starwars").appendChild(birthdate);
      document.getElementById("starwars").appendChild(hair);
      document.getElementById("starwars").appendChild(gender);
      document.getElementById("starwars").appendChild(skincolor);

      name.style.textDecorationLine = "underline"

    }
  });
}



// Tried to combine two APIS

// var Force = document.getElementById("StarWarsButton");
// Force.addEventListener("click", star_wars);

// let one = "https://swapi.dev/api/people/"
// let two = "http://swapi.dev/api/planets/"
// const requestOne = axios.get(one);
// const requestTwo = axios.get(two);

// function star_wars() {
//   axios.all([requestOne, requestTwo]).then
//   axios.spread((..response) => {
//     const responseOne = responses[0];
//     const responseTwo = responses[1];
//     for (let i = 0; i < response.data.results.length; i++) {
//       const name = document.createElement("h2");
//       const height = document.createElement("li");
//       const species = document.createElement("li");
//       const gender = document.createElement("li");
//       const homeworld = document.createElement("li");

//       name.textContent = response.data.results[i].name;
//       height.textContent = response.data.results[i].height;
//       species.textContent = response.data.results[i].species;
//       gender.textContent = response.data.results[i].gender;
//       homeworld.textContent = response.data.results[i].homeworld.name;

//       document.getElementById("starwars").appendChild(name);
//       document.getElementById("starwars").appendChild(height);
//       document.getElementById("starwars").appendChild(species);
//       document.getElementById("starwars").appendChild(gender);
//       document.getElementById("starwars").appendChild(homeworld);

//       name.style.textDecorationLine = "underline"

//     }
//   });
// }