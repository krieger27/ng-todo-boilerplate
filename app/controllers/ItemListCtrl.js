"use strict";

angular.module("ToDoApp").controller("ItemListCtrl", function($scope, ItemListFactory, FilterFactory) {

$scope.searchTerm = FilterFactory;

ItemListFactory.getTodoItems()
.then( (todoData) => {
    $scope.items = [];
    for (let todo in todoData) {
    todoData[todo].fbID = todo;
    $scope.items.push(todoData[todo]);
    }
});

});