console.log("quotes app connected");

var app = angular.module('MotivationalApp', []);

app.controller('QuotesController', ['$http', function($http){

    //setting up controller var
    this.quotes = [];
    var controller = this;

    //this will make an ajax call when the page loads
    $http({
        method: 'GET',
        url: 'http://localhost:3000/quotes'
    }).then(
        function(response){
            controller.quotes = response.data;
            console.log(response.data);
    },
    function(response){
    })


}]);
