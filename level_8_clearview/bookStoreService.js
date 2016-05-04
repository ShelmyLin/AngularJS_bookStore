console.log("bookStoreService start");
(function(){
	
	// 得使用新的module
	var app = angular.module("bookStore-service",[]);

	app.service('bookStoreService', bookStoreService);

	bookStoreService.$inject = ['$http'];
	
	function bookStoreService($http){

		return {
			getBooksInfo: getBooksInfo,
			delBooksInfo: delBooksInfo
		};

		function getBooksInfo(){
			
			var books = [ ];
			// 注意json文件的格式，变量名需要加""
			$http.get('books.json').success(function(data){
				books = data;
				console.log(books);
			});
			return books;
		}

		function delBooksInfo(bookName){

		}

	}


})();
console.log("bookStoreService end");