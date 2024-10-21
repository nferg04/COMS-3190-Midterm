document.addEventListener('DOMContentLoaded', () => loadData(1));

let filterButton = document.getElementById("filterButton");
filterButton.addEventListener("click", () => loadData(2));


function loadData(option, location) {
    fetch("./data.json")
    .then(response => response.json())
    .then(myDishes => loadDishes(myDishes, option))
    .catch(err => console.log("Error: " + err))
}


function loadDishes(myDishes, option) {

    var dishCard = document.getElementById("col");
    dishCard.innerHTML = "";
    
    let allDishes = Object.values(myDishes)[0];
    let sortedDishes = [];

    if(option == 1) {
        sortedDishes = allDishes;
    }

    if(option == 2) {
        let filterType = document.getElementById("filterInput").value;
        for(var i =0; i < allDishes.length; i++) {
            if(allDishes[i].type == filterType) {
                sortedDishes.push(allDishes[i]);
            }
        }
    }

    for (var i = 0; i < sortedDishes.length; i++) {
        let dish = sortedDishes[i].dish;
        let price = sortedDishes[i].price;
        let restaurant = sortedDishes[i].restaurant;
        let type = sortedDishes[i].type;
        let url = sortedDishes[i].url;
        let AddDishCard = document.createElement("div");
        AddDishCard.classList.add("col");
        AddDishCard.innerHTML = `
            <div class="card shadow-sm">
                <img src=${url} class="card-img-top" alt="..."></img>
                <div class="card-body">
                    <p class="card-text"> <strong>${restaurant}</strong><br> ${dish}, ${type} $${price}</p>
                </div>
            </div>
        `;
        dishCard.appendChild(AddDishCard);
    }
}