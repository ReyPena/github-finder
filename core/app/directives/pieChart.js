angular.module("gitSearch").directive("pieChart", function() {
    return {
        restrict: "E",
        template: '<div id="pie" style="min-width: 300px; height: 300px; max-width: 400px; margin: 0 auto"></div>',
        scope: {
            info: "=",
            name: "=",
            title: "="
        },
        link: function postLink(scope, element, attrs) {
            scope.$watchCollection("info", function(newVal, oldVal) {
              if(!newVal[0]){
                return;
              }
              $('#pie').highcharts({
                chart: {
                  plotBackgroundColor: null,
                  plotBorderWidth: null,
                  plotShadow: false,
                  type: 'pie'
                },
                title: {
                  text: scope.title
                },
                tooltip: {
                  pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                },
                plotOptions: {
                  pie: {
                    formated: function () {
                      if(point.y > 1000000){
                        console.log("hello");
                      }
                    },
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                      enabled: false
                    },
                    showInLegend: true
                  }
                },
                series: [{
                  name: scope.name,
                  colorByPoint: true,
                  data: scope.info
                }]
              });
            });


        }
    };
});
