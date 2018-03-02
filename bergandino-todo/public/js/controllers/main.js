angular.module('todoController', [])

	// inject the Todo service 
	.controller('mainController', ['$scope','$http','Todos', function($scope, $http, Todos) {
		$scope.formData = {};
		$scope.loading = true;

		// GET
		Todos.get()
			.success(function(data) {
				$scope.todos = data;
				$scope.loading = false;
			});

		// CREATE
		$scope.createTodo = function() {

			// if form is empty, don't do anything
			if ($scope.formData.text != undefined) {
				$scope.loading = true;

				Todos.create($scope.formData)

					// if successful creation, get all the new todos
					.success(function(data) {
						$scope.loading = false;
						$scope.formData = {};
						$scope.todos = data;
					});
			}
		};

		// DELETE
		$scope.deleteTodo = function(id) {
			$scope.loading = true;

			Todos.delete(id)
					// if successful creation, get all the new todos
				.success(function(data) {
					$scope.loading = false;
					$scope.todos = data;
				});
		};
	}]);
	