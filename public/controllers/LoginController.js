webapp.controller('loginController', ['$scope','userServices','$state', function($scope,userServices,$state) {

$scope.login = {};
    $scope.LoginDetails=function()
         {
         if($scope.login){
         console.log($scope.login);
          userServices.postAllLoginDetails($scope.login)
                          .then(function (e)
                          {
                             console.log('jAKGSKGaksk',e);
                             if(e.data.loginStatus){
                             alert("LOGIN SUCCESSFUL");
                              $state.go('employeedetails');
                             }
                             else{
                              console.log('kdkkdse');
                                 }
                          },
                           function error(err)
                          {
                           alert("WROND ID OR PASSWORD ENTERED")
                           console.log('userdetail save failed:', err);
                          });
                  };
         }

















}]);