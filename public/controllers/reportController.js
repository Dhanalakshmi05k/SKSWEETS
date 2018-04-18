webapp.controller('reportController', ['$scope', 'reportService', function ($scope, reportService) {
    $scope.reportSettings = {};
    $scope.saveReportSettings = function () {
        reportService.postReportSettings($scope.reportSettings)
            .then(function (res) {
                    $scope.getAllReportSettings();
                    console.log('systemSettings detail saved successfully');
                },
                function error(err) {
                    alert("ENTER CORRECT DETAILS")
                    console.log('systemSettings save failed:', err);
                });
    };

    $scope.getAllReportSettings = function () {
        reportService.getAllReportSettings().then(function (res) {
            $scope.reportList = res.data;
        });
    };

    $scope.deleteReport = function (reportId) {
        reportService.deleteReport(reportId)
            .then(function (res) {
                    $scope.getAllReportSettings();

                },
                function error(err) {
                    console.log('admin delete failed:', err);
                });
    }

    $scope.getSingleReport = function (reportId) {
        reportService.getSingleReport(reportId).then(function (res) {
            $scope.report = res.data;
            console.log('asdasdsad', $scope.report);
        });
    };

    $scope.updateReport = function () {
        reportService.updateReport($scope.report)
            .then(function (res) {
                    $scope.getAllReportSettings();
                    console.log('system updated.');
                },
                function error(err) {
                    console.log('system update failed:', err);
                });
    }


    $scope.getAllReportSettings();

}]);