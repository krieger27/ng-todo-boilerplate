"use strict";

angular.module("ToDoApp").controller("ItemDetailCtrl", function($scope, ItemListFactory, $routeParams) {

let todoItems = ItemListFactory.getTodoItems();


$scope.selectedItem = todoItems.find( (item) => {
    return item.id === +$routeParams.id;
});
});