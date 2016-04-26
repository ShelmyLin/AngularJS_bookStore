(function(){
	// 注意module的命名，我开始用的是store，然后在html文件里面有个ng-controller = "StoreController as store"
	// 刚开始使用ng-repeat = "book in store.product没问题，
	// 但是多了个ng-controller = "PanelController as panel"以后，网页就没办法repeat了，只显示一个book。
	// 猜想是ng-controller = "PanelController as panel把controller的store变成了module的store了。
	// 总结：变量名别重复使用，容易引起混乱。
	var app = angular.module('bookStore', [ ]); 
	app.controller("StoreController", function(){
		this.product = books;
		console.log(this);  // 这里的this指的是StoreController，不是全局boss.
	});


	app.controller("ReviewController", function(){
		this.review = {};
		this.addReview = function(book){
			book.reviews.push(this.review);
			this.review = {};

		};
		
	});

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


	var books = [
	{
		name: "Html from start to give up",
		price: 2,
		count: 10, 
		description: "feel good to annoy you...HUMAN! -- by your dear friend, html. ", 
		specification: "normal but important",
		reviews: [
			{	
				stars: 5,
				body: "An awesome book to be a pillow",
				author: "linxiongmin@baidu.com",
				date: "2015"

			},
			{
				stars: 4,
				body: "An awesome book to be a pillow",
				author: "linxiongmin@baidu.com",
				date: "2016"
			}
		],
		available: true,
		image: "http://s6.51cto.com/wyfs02/M00/6D/76/wKioL1VlI26g_PW2AACuOGjgyHw520.jpg"
	},
	{
		name: "AngularJS from start to give up",
		price: 20,
		count: 2,
		description: "Happy to see you, but I am even harder than html...",
		specification: "hey man, guess what? google is my daddy", 
		reviews:[
			{
				stars: 5,
				body: "Too hard to be a pillow",
				author: "linxiongmin@baidu.com",
				date: "2014"
			},
			{
				stars: 5,
				body: "Too hard to be a pillow",
				author: "linxiongmin@baidu.com",
				date: "2017"
			},
		],
		available: false,
		image: "http://images.csdn.net/20141212/548809ed379e4.jpg"
	}
];
})();