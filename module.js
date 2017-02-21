//create module and have routing
var app = angular.module("myModule", ['ngRoute']);

app.config(function($routeProvider, $locationProvider){
  $routeProvider
    .when('/dog', {
      //controller: 'controller1',
      templateUrl: 'dog.html'
  })

  .when('/cat', {
    //controller: 'controller2',
    templateUrl: 'cat.html'
})
.when('/fish', {
//  controller: 'controller3',
  templateUrl: 'fish.html'
})
.when('/bird', {
//  controller: 'controller4',
  templateUrl: 'bird.html'
})

.otherwise({ redirectTo: '/dog'});

$locationProvider.hashPrefix('');
});
