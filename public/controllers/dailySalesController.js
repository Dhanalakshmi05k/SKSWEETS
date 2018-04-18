/**
 * Created by dhanalakshmi on 7/4/18.
 */
webapp.controller('dailySalesCtrl', ['$scope','salesServices','$state','$stateParams', function($scope,salesServices,$state,$stateParams) {

    $scope.saveCoconutSalesDetails=function (salesCoconutCategoryDetails) {
        console.log("872387109salesCoconutCategoryDetails77423748234")
        console.log(salesCoconutCategoryDetails)
        salesServices.postSalesDetails(salesCoconutCategoryDetails)
            .then(function (res)
                {
                    getAllSales();

                },
                function error(err)
                {

                    console.log('employee save failed:', err);
                });

    }
    function getAllSales() {
        salesServices.getAllSalesDetails()
            .then(function (res)
            {
                console.log('employee detresresresail saved successfully');
                console.log(res)
                $scope.salesDetails=res.data

            })
    }
    getAllSales();

}]);