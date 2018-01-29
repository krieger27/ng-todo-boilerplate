"use strict";

angular.module("ToDoApp").controller("NavCtrl", function($scope){
    $scope.navItems = [
        {
            name: "Logout",
            url: "#!/logout"
        },
        {
            name: "All Items",
            url: "#!/items/list"
        },
        {
            name: "Add New Item",
            url: "#!/items/new"
        },
        {
            name:"Login",
            url: "#!/login"
        }
    ];
});