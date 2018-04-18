webapp.controller('reportDetailController', ['$scope', 'reportService','$stateParams','$state', function ($scope, reportService,$stateParams,$state) {
    var reportId = $stateParams.reportId;

    $scope.getSingleReport = function (reportId) {
        reportService.getSingleReport(reportId).then(function (res) {
            $scope.report = res.data;
            console.log('asdasdsad', $scope.report);
        });
    };

    $scope.getSingleOrder = function (reportId) {
            reportService.getSingleOrder(reportId).then(function (res) {
                $scope.order = res.data;
                console.log('asdasdsad', $scope.order);
            });
        };

    $scope.ordersettings = {};
        $scope.saveOrderSettings = function () {
            $scope.ordersettings.costOfBig = $scope.report.costOfBig;
            $scope.ordersettings.costOfSmall = $scope.report.costOfSmall;
            $scope.ordersettings.costOfLaddu = $scope.report.costOfLaddu;
            $scope.ordersettings.rupees = $scope.report.rupees;
            $scope.ordersettings.customerId = $scope.report._id;
            $scope.ordersettings.total = $scope.getTotal();
            $scope.ordersettings.amountPaid = $scope.amountPaid;
            $scope.ordersettings.otherstates = $scope.otherstates;
            $scope.ordersettings.packageCost = $scope.packageCost;
            $scope.ordersettings.balanceAmount = $scope.balanceAmount;
            $scope.ordersettings.balanceAmount= $scope.ordersettings.total - $scope.ordersettings.amountPaid;
            reportService.postOrderSettings($scope.ordersettings)
                .then(function (res) {
//                        $state.go('report');
                        $scope.getSingleOrder(reportId);
                        console.log('systemSettings detail saved successfully');
                    },
                    function error(err) {
                        alert("ENTER CORRECT DETAILS")
                        console.log('systemSettings save failed:', err);
                    });
        };


     $scope.getTotal = function(){
         $scope.selPage1 = parseInt($scope.ordersettings.packetsOfBig) * parseInt($scope.report.costOfBig);
         $scope.selPage2 = parseInt($scope.ordersettings.packetsOfSmall) * parseInt($scope.report.costOfSmall);
         $scope.selPage3 = parseInt($scope.ordersettings.packetsOfLaddu) * parseInt($scope.report.costOfLaddu);
         $scope.selPage4 = parseInt($scope.ordersettings.packetsInRupees) * parseInt($scope.report.rupees);
         $scope.total = $scope.selPage1+$scope.selPage2+$scope.selPage3+$scope.selPage4+$scope.packageCost;
         return $scope.total;
     };



$scope.getSingleReport(reportId);
$scope.getSingleOrder(reportId);

}]);