angular.module('todoService', [])
	// returns a promise object 
	.factory('Todos', ['$http',function($http) {
		return {
			get : function() {
				return $http.get('/test/api/todos');
			},
			create : function(todoData) {
				return $http.post('/test/api/todos', todoData);
			},
			delete : function(id) {
				return $http.delete('/test/api/todos/' + id);
			}
		}
	}]);
	
