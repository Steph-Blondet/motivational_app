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
            // console.log(response.data);
    },
    function(response){
    })


    //where we create the quote and get a response back with all the quotes from the collection
    this.submit = function(){
        console.log('quote: ' + this.name); //to see what we are submitting in the textbox
        console.log(this);
        $http({
            method: 'POST',
            url: 'http://localhost:3000/quotes',
            data: this
        }).then(
            function(response){
                console.log(response);
                controller.quotes = response.data;
                controller.quote = "";
                controller.author = "";
                controller.name = ""; //this is to clear the input box after after I clicked submit, we can also do empty double quotes
            },
            function(response){

            }
        );
    }



    this.delete = function(id){
        console.log('deleting');
        // console.log(id);

        $http({
            method: 'DELETE',
            url: 'http://localhost:3000/quotes/' + id
        }).then(
            function(response){
                console.log(controller);
            },
            function(response){

            }
        );
    }



}]);
