var app = angular.module('app',[]);
app.controller('ctrl',controller);
var items = [
  {
    name : "Jhon",quantity :"50"
  },{
    name : "alberto", quantity : "60"
  },{
    name : "jese",quantity : "1000"
  },{
    name : "zak",quantity : "5985"
  }
];


controller.inject=['$scope'];
function controller($scope){


    $scope.iteams=items;
    $scope.valeur=false;
    $scope.v=false;
    
    $scope.add = function(){
       $scope.valeur=true;
    };
    $scope.ajouter = function(){
       var newItem = {
         name : $scope.AddName ,
         quantity: $scope.AddQuantity
       };

       if($scope.AddName!=null && $scope.AddQuantity!=NULL)$scope.iteams.push(newItem);

    };
    $scope.delete=function(){
      $scope.v=true;
    };
    $scope.remove=function(){
           var x = $scope.index-1;
           if($scope.index!=null)$scope.iteams.splice(x,1);
    };



}
