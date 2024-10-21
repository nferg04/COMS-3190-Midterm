document.addEventListener('DOMContentLoaded', () => loadData(1, "EastAmes"));

let filterButton = document.getElementById("filterButton");
filterButton.addEventListener("click", () => loadData(2, "EastAmes"));


function loadData(option, location) {
    fetch("./data.json")
    .then(response => response.json())
    .then(myDishes => loadDishes(myDishes, option, location))
    .catch(err => console.log("Error: " + err))
}


function loadDishes(myDishes, option, location) {

    var dishCard = document.getElementById("col");
    dishCard.innerHTML = "";
    
    let allDishes = Object.values(myDishes)[0];
    let sortedDishes = [];

    if(option == 1) {
        for(var i = 0; i < allDishes.length; i++) {
            if(allDishes[i].location == location) {
                sortedDishes.push(allDishes[i]);
            }
        }
    }

    if(option == 2) {
        let filterType = document.getElementById("filterInput").value;
        for(var i =0; i < allDishes.length; i++) {
            if(allDishes[i].type == filterType && allDishes[i].location == "CampusTown") {
                sortedDishes.push(allDishes[i]);
            }
        }
    }

    for (var i = 0; i < sortedDishes.length; i++) {
        let dish = sortedDishes[i].dish;
        let price = sortedDishes[i].price;
        let restraunt = sortedDishes[i].restraunt;
        let type = sortedDishes[i].type;
        let url = sortedDishes[i].url;
        let AddDishCard = document.createElement("div");
        AddDishCard.classList.add("col");
        AddDishCard.innerHTML = `
            <div class="card shadow-sm">
                <img src=${url} class="card-img-top" alt="..."></img>
                <div class="card-body">
                    <p class="card-text"> <strong>${restraunt}</strong><br> ${dish}, ${type}, $${price}</p>
                </div>
            </div>
        `;
        dishCard.appendChild(AddDishCard);
    }
}