const root = document.getElementById("root")
axios.get("https://api.vschool.io/christian_vanloon/todo/")
  .then((response) => {
    for (let i = 0; i < response.data.length; i++) {
        const h2 = document.createElement("h2");
        const h3 = document.createElement("h3");
        const img = document.createElement("img");
        const hr = document.createElement("hr")
        h2.textContent = response.data[i].title;
        h3.textContent = response.data[i].description;
        img.src = response.data[i].imgUrl;
        document.body.appendChild(h2);
        document.body.appendChild(h3);
        document.body.appendChild(img);
        document.body.appendChild(hr)
        if(response.data[i].completed === true){
            h2.style.textDecorationLine = "line-through"
        }
    }
  })
  .catch((error) => console.log(error));




// imgUrl
// completed