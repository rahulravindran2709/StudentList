angular.module('myApp', []).constant('routeConstants',
	{STUDENT_BASE_PREFIX:'/students/'});
	
angular.module('myApp', []).constant('routeConstants',
	{STUDENT_BASE_PREFIX:'/students/'});



var myApp = angular.module('myApp', []);
 
//Define Routing for app
//Uri /AddNewOrder -> template add_order.html and Controller AddOrderController
//Uri /ShowOrders -> template show_orders.html and Controller AddOrderController
myApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/AddNewForm', {
        templateUrl: 'templates/studentForm.html',
        controller: 'AddNewController'
    })
      .
      otherwise({
        redirectTo: '/AddNewStudent'
      });
}]);
 
 
myApp.controller('AddNewController', function($scope) {
     
    $scope.message = 'This is Add new order screen';
     
});
 
 
	
	
