function listAll(location) {
    fetch("./data.json")
    .then(response => response.json())
    .then(myDishes => loadDishes(myDishes, 1, location))
    .catch(err => console.log("Error: " + err))
}


function loadDishes(myDishes, option, location) {
    var dishCard = document.getElementById("col");
    dishCard.innerHTML = "";
    
    let allDishes = Object.values(myDishes)[0];
    let sortedDishes = [];

    for(var i = 0; i < allDishes.length; i++) {
        if(allDishes[i].location == location) {
            sortedDishes.push(allDishes[i]);
        }
    }

    if(option == 1) {
    }

    for (var i = 0; i < sortedDishes.length; i++) {
        let dish = sortedDishes[i].dish;
        let price = sortedDishes[i].price;
        let restraunt = sortedDishes[i].restraunt;
        let url = sortedDishes[i].url;
        let AddDishCard = document.createElement("div");
        AddDishCard.classList.add("col"); // Add Bootstrap class to the column
        AddDishCard.innerHTML = `
            <div class="card shadow-sm">
                <img src=${url} class="card-img-top" alt="..."></img>
                <div class="card-body">
                    <p class="card-text"> <strong>${restraunt}</strong><br> ${dish}, $${price}</p>
                </div>
            </div>
        `;
        dishCard.appendChild(AddDishCard);
    }
    dishCard.style.backgroundColor = "#eabe7c";

}