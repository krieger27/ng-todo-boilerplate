"use strict";

angular.module("ToDoApp", ["ngRoute"])
.constant("FBUrl", "https://todoapp-ad55c.firebaseio.com/")
.config( ($routeProvider) => {
$routeProvider
.when('/items/list', {
    templateUrl: "partials/itemlist.html",
    controller: "ItemListCtrl"
})
.when('/items/new', {
    templateUrl: "partials/itemnew.html",
    controller: "ItemNewCtrl"
})
.when('/items/details/:id', {
    templateUrl: "partials/item-details.html",
    controller: "ItemDetailCtrl"
})
.otherwise('/items/list');
});