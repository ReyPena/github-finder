angular.module("gitSearch").directive("pieChart", function() {
    return {
        restrict: "E",
        template: '<div id="container" style="min-width: 300px; height: 300px; max-width: 600px; margin: 0 auto"></div>',
        scope: {
          info: "="
        },
        controller: function($scope, $http) {
            $(function() {

                $(document).ready(function() {

                    // Build the chart
                    $('#container').highcharts({
                        chart: {
                            plotBackgroundColor: null,
                            plotBorderWidth: null,
                            plotShadow: false,
                            type: 'pie'
                        },
                        title: {
                            text: 'Tech Used'
                        },
                        tooltip: {
                            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                        },
                        plotOptions: {
                            pie: {
                                allowPointSelect: true,
                                cursor: 'pointer',
                                dataLabels: {
                                    enabled: false
                                },
                                showInLegend: true
                            }
                        },
                        series: [{
                            name: 'Brands',
                            colorByPoint: true,
                            data: $scope.info
                        }]
                    });
                });
            });
        }
    };
});
