"use strict";

angular.module("ToDoApp").controller("ItemDetailCtrl", function($scope, ItemListFactory, $routeParams) {

let todoItems = ItemListFactory.getTodoItems();

// finding item in todoItems with the matching id as the current $routeParam to only list that specific item
$scope.selectedItem = todoItems.find( (item) => {
    return item.id === +$routeParams.id;
});
});