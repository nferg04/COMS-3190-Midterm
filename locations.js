function listAll() {
    fetch("./data.json")
    .then(response => response.json())
    .then(myDishes => loadDishes(myDishes, 1))
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
                    <p class="card-text"> <strong>${dish}</strong>, ${restraunt}, $${price}</p>
                </div>
            </div>
        `;
        dishCard.appendChild(AddDishCard);
    }
    dishCard.style.backgroundColor = "#eabe7c";

}