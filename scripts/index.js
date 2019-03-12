const API_URL = 'https://dc-coffeerun.herokuapp.com/api/coffeeOrders';

fetch(API_URL)
    .then(function (response){
        return response.json();
    })
    .then(function (data){
        console.log(data);
    });