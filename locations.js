function listAll() {
    fetch("./data.json")
    .then(response => response.json())
    .then(myDishes => loadDishes(myDishes, 1))
    .catch(err => console.log("Error: " + err))
}


function loadDishes(myDishes, option) {
    
}