app.controller("FormCtrl", FormCtrl);

function FormCtrl($scope) {
	$scope.indexTarefa = undefined;
	$scope.clicouEditar = false;

	$scope.tarefas=[{
		check: false,
		tarefa: "leite",
		datacriacao: new Date().getTime()
	},{
		check: false,
		tarefa: "bem louco",
		datacriacao: new Date().getTime()
	},{
		check: false,
		tarefa: "chip do pedro",
		datacriacao: new Date().getTime()
	}];

	$scope.cadastrarTarefa = function ( data ) {
		if (!!data){
			var item = {
				check: false,
				tarefa: data,
				datacriacao: new Date().getTime()
			}
			$scope.tarefas.push(item);
			$scope.tarefa = undefined;
		}
	};

	$scope.alterarTarefa = function( dataIndex ){
		$scope.renomear = $scope.tarefas[dataIndex].tarefa;
		$scope.indexTarefa = dataIndex;
		$scope.clicouEditar = true;
	}

	$scope.renomearTarefa = function( data ){
		console.log($scope.indexTarefa);
		if (!!$scope.indexTarefa) {
			$scope.tarefas[$scope.indexTarefa] = {
				check: false,
				tarefa: data,
				datacriacao: new Date().getTime()//$scope.tarefas[$scope.indexTarefa].datacriacao
			}
			$scope.indexTarefa = undefined;
			$scope.renomear = undefined;
			$scope.clicouEditar = false;
		}
	}

	$scope.cancelarRenomeacao = function( ){
		$scope.indexTarefa = undefined;
		$scope.renomear = undefined;
		$scope.clicouEditar = false;
	}

	$scope.removerTarefa = function( dataIndex ){
		console.log(dataIndex);
		$scope.tarefas.splice(dataIndex, 1);
		$scope.cancelarRenomeacao();
	}
}

