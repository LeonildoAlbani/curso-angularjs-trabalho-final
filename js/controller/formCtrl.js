app.controller("FormCtrl", FormCtrl);

function FormCtrl($scope) {
	$scope.pessoa = new Object();

	$scope.pessoas=[{
		name: "Leonildo G. Albani",
		email: "leonildo.albani@gmail.com",
		phone: 99888899
	},
	{
		name: "Pedro do chip",
		email: "cade@meuchip.com",
		phone: 11122212
	},
	{
		name: "Bem louco",
		email: "vacagrande@leite.com.pr",
		phone: 88775442
	}];

	$scope.preEditarPessoa = function (indexPessoa) {
		$scope.indexPessoa = indexPessoa;
		$scope.pessoa = new pessoa($scope.pessoas[indexPessoa]);

		$scope.editando = true;
	}

	$scope.salvarPessoa = function(pessoa){
		//evitar replicar código
		if(!!$scope.pessoa.name){
			if(!!$scope.editando){
				$scope.pessoas[$scope.indexPessoa] = pessoa;
			}else{
				$scope.pessoas.push(pessoa);
			}
			$scope.limparCampos()
		}else{
			alert("Informe ao menos o nome da pessoa que você deseja cadastrar.");
		}
	}

	$scope.limparCampos = function () {
		$scope.pessoa = new Object();
		$scope.editando = false;
		$scope.indexPessoa = undefined;
	}

	$scope.deletarPessoa = function (indexPessoa){
		$scope.pessoas.splice(indexPessoa, 1);
		//caso edite e não salve ou cancele e delete a mesma linha, tem um bug.
		$scope.limparCampos();
	}
}

function pessoa (object) {
	//construtor pra facilitar a vida...
	//deveria ser um arquivo de classe separado, but, tá bonito aqui :D
	this.name = object.name;
	this.email = object.email;
	this.phone = object.phone;
}