angular.module("gitSearch").directive("donutChart", function() {
    return {
        restrict: "E",
        template: '<div id="donut" style="min-width: 400px; height: 400px; max-width: 600px; margin: 0 auto"></div>',
        scope: {
            info: "=",
            name: "=",
            title: "="
        },
        link: function postLink(scope, element, attrs) {
            scope.$watchCollection("info", function(newVal, oldVal) {
                if (!newVal[0]) {
                    return;
                }
                $('#donut').highcharts({
                    chart: {
                        plotBackgroundColor: null,
                        plotBorderWidth: 0,
                        plotShadow: false,
                        type: 'pie'
                    },
                    title: {
                        text: scope.title,
                        align: 'center',
                        verticalAlign: 'middle',
                        y: 40
                    },
                    tooltip: {
                        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                    },
                    plotOptions: {
                        pie: {
                            dataLabels: {
                                enabled: true,
                                distance: -50,
                                style: {
                                    fontWeight: 'bold',
                                    color: 'white',
                                    textShadow: '0px 1px 2px black'
                                }
                            },
                            startAngle: -90,
                            endAngle: 90,
                            center: ['50%', '75%']
                        }
                    },
                    series: [{
                        type: "pie",
                        name: scope.name,
                        innerSize: "50%",
                        data: scope.info
                    }]
                });
            });


        }
    };
});
