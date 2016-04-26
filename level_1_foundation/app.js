(function(){
	var app = angular.module('store', [ ]);
	app.controller("StoreController", function(){
		this.product = books;
	});
	var books = [
	{
		name: "Html from start to give up",
		price: 2,
		comment: "An awesome book to be a pillow",
		available: true
	},
	{
		name: "AngularJS from start to give up",
		price: 2,
		comment: "Too hard to be a pillow",
		available: false
	}
];
})();