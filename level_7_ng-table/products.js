(function(){

	var app = angular.module("store-products", [ ]);

	app.directive("productTitle", function(){  // 测试表明：productTitle 和product-title.html在命名上有对应关系
		return{
			restrict: 'A',
			templateUrl: 'product-title.html'
		};
	});


	app.directive("productPanel", function(){

		return{
			restrict: 'E',
			templateUrl: 'product-panel.html',
			controller: function(){
				this.tab = 1;
				this.selectTab = function(setTab){
					this.tab = setTab;
				};
				this.isSelect = function(checkTab){
					return this.tab === checkTab;
				};
			},
			controllerAs: 'panel'
		};
	});


})();