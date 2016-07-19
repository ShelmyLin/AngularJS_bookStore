(function(){
	
	var app = angular.module('bookStore', ['highcharts-ng']); 

	app.controller('StoreController', StoreController);

		StoreController.$inject = ['$http'];
		function StoreController($http){
	    var vm = this;
		vm.chartSeries = [
		    {"name": "Some data", "data": [1, 2, 4, 7, 3]},
		    {"name": "Some data 3", "data": [3, 1, null, 5, 2], connectNulls: true},
		    {"name": "Some data 2", "data": [5, 2, 2, 3, 5], type: "column"},
		    {"name": "My Super Column", "data": [1, 1, 2, 3, 2], type: "column"}
		];

        vm.chartTypes = [
	        {"id": "line", "title": "Line"},
	        {"id": "spline", "title": "Smooth line"},
	        {"id": "area", "title": "Area"},
	        {"id": "areaspline", "title": "Smooth area"},
	        {"id": "column", "title": "Column"},
	        {"id": "bar", "title": "Bar"},
	        {"id": "pie", "title": "Pie"},
	        {"id": "scatter", "title": "Scatter"}
        ];

	    vm.chartConfig = {
		    options: {
		      chart: {
		        type: 'areaspline'
		      },
		      plotOptions: {
		        series: {
		          stacking: ''
		        }
		      }
		    },
		    series: vm.chartSeries,
		    title: {
		      text: 'highcharts-ng Example'
		    },
		    credits: {
		      enabled: true
		    },
		    loading: false,
		    size: {}
	  }

	}
})();
