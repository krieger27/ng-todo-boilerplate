"use strict";

angular.module("ToDoApp").controller("NavCtrl", function($scope, FilterFactory, $location) {

$scope.searchTerm = FilterFactory;

$scope.isActive = viewLocation => viewLocation === $location.path();

$scope.navItems = [
    // TODO: Hide/Show login/out
    {
    name: "Logout",
    url: "#!/logout"
    },
    {
    name: "Log In",
    url: "#!/login"
    },
    {
    name: "All Items",
    url: "#!/items/list"
    },
    {
    name: "New Item",
    url: "#!/items/new"
    }
];

});