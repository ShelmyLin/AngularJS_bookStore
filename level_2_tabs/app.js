(function(){
	// 注意module的命名，我开始用的是store，然后在html文件里面有个ng-controller = "StoreController as store"
	// 刚开始使用ng-repeat = "book in store.product没问题，
	// 但是多了个ng-controller = "PanelController as panel"以后，网页就没办法repeat了，只显示一个book。
	// 猜想是ng-controller = "PanelController as panel把controller的store变成了module的store了。
	// 总结：变量名别重复使用，容易引起混乱。
	var app = angular.module('bookStore', [ ]); 
	app.controller("StoreController", function(){
		this.product = books;
	});
	app.controller("PanelController", function(){
		this.tab = 1;
		this.selectTab = function(setTab){
			this.tab = setTab;
		};
		this.isSelect = function(checkTab){
			return this.tab === checkTab;
		};
	});

	var books = [
	{
		name: "Html from start to give up",
		price: 2,
		count: 10, 
		description: "feel good to annoy you...HUMAN! -- by your dear friend, html. ", 
		specification: "normal but important",
		review: "An awesome book to be a pillow",
		available: true,
		image: "http://s6.51cto.com/wyfs02/M00/6D/76/wKioL1VlI26g_PW2AACuOGjgyHw520.jpg"
	},
	{
		name: "AngularJS from start to give up",
		price: 20,
		count: 2,
		description: "Happy to see you, but I am harder than html...",
		specification: "hey man, guess what? google is my daddy", 
		review: "Too hard to be a pillow",
		available: false,
		image: "http://images.csdn.net/20141212/548809ed379e4.jpg"
	}
];
})();