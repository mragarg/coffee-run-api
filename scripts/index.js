const API_URL = 'https://dc-coffeerun.herokuapp.com/api/coffeeOrders';

let orderDetailsArray = [];

function getEmail(url){
    fetch(API_URL)
        .then(function (response){
            return response.json();
        })
        .then(function (data){
            console.log(data);
            // getCoffeeData(data);
        });
}

function getCoffeeData(data) {
    orderDetailsArray = [
        ...orderDetailsArray,
        ...data
    ];
}


getEmail(API_URL);