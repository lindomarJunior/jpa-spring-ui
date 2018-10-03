angular.module("jpaSpringApp").factory("jpaSpringCursoFactory", function($q, $http){
	return{
		listar: function(){
			var promessa = $q.defer();

			$http.get("https://jpa-spring.herokuapp.com/curso").then(function(result){
				var cursos = result.data;
				promessa.resolve(cursos);
			})

			return promessa.promise;
		},

	};
})
