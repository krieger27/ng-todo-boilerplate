"use strict";

angular.module("ToDoApp").controller("ItemNewCtrl", function($scope, $location, ItemListFactory) {
    $scope.newTask = {
        task: "",
        isCompleted: false,
        dueDate: "",
        assignedTo: "",
        location: "",
        urgency: "",
        dependencies: ""
};
    $scope.addNewItem = () => {
        ItemListFactory.addNewItem($scope.newTask);
        $location.url("/items/list");
};
});