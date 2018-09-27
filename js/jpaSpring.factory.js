angular.module("jpaSpringApp").factory("jpaSpringCursoFactory", function($q, $http){
	return{
		listar: function(){
			var promessa = $q.defer();

			$http.get("http://localhost:8080/curso").then(function(result){
				var cursos = result.data;
				promessa.resolve(cursos);
			})

			return promessa.promise;
		},

	};
})
