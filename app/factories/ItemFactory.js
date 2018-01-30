"use strict";

angular.module("ToDoApp").factory("ItemListFactory", function($http, $q, FBUrl) {

function getTodoItems() {
    return $q( (resolve, reject) => {
    $http
    .get(`${FBUrl}/data.json`)
    .then ( (todoData) => {
        resolve(todoData.data);
    })
    .catch( (error) => {
        console.log(error);
    });
    });
}

function addNewItem(newItem) {
    return $q( (resolve, reject) => {
    $http
    .post(`${FBUrl}/data.json`, JSON.stringify(newItem))
    .then( (addedItem) => {
        console.log(addedItem);
        resolve(addedItem);
    })
    .catch( (error) => {
        console.log(error);
        reject(error);
    });
    });
}

return { getTodoItems, addNewItem };
});