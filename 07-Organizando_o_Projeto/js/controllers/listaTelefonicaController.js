

angular.module("listaTelefonica").controller("listaTelefonicaController", function($scope, $http){
                
    $scope.app = "Lista Telefônica";

    $scope.listaDeContatos = [
        {nome: "Cleber", telefone: "123456789", cor: "blue", data: new Date(), operadora: {nome: "Oi", codigo: 14, categoria: "Celular"}},
        {nome: "Presidente", telefone: "987654321", cor: "green", data: new Date(), operadora: {nome: "Vivo", codigo: 15, categoria: "Celular"}},
        {nome: "100%", telefone: "1597532648", cor: "yellow", data: new Date(), operadora: {nome: "GVT", codigo: 25, categoria: "Fixo"}},
    ];
    
    $scope.operadoras = [
        {nome: "Oi", codigo: 14, categoria: "Celular", preco: 1},
        {nome: "Vivo", codigo: 15, categoria: "Celular", preco: 2},
        {nome: "Tim", codigo: 41, categoria: "Celular", preco: 3},
        {nome: "GVT", codigo: 25, categoria: "Fixo", preco: 4},
        {nome: "Embratel", codigo: 21, categoria: "Fixo", preco: 5},
    ];
    
    $scope.cores = [
        {nome: "Azul", codigo: "blue"},
        {nome: "Verde", codigo: "green"},
        {nome: "Amarelo", codigo: "yellow"},
        {nome: "Vermelho", codigo: "red"},
    ];

    $scope.adicionarContato = function(contato){
        contato.data = new Date();
        $scope.listaDeContatos.push(angular.copy(contato));
        delete $scope.contato;
        $scope.contatosForm.$setPristine();
    };
    
    $scope.apagarContato = function(contatos){
        $scope.listaDeContatos = contatos.filter(function (contato){
            if(!contato.selecionado){
                return contato;
            }
        });
    };



    // $scope.listaDeCores = [];
    // $scope.listaDeContatos = [];
    // $scope.listaDeOperadoras = [];


    // var carregarCores = function (){
    //     $http.get("endereço do arquivo de cores").sucecss(function (data) {
    //         $scope.listaDeCores = data;
    //     });
    // };

    // var carregarContatos = function (){
    //     $http.get("endereço do arquivo de contatos").sucecss(function (data) {
    //         $scope.listaDeContatos = data;
    //     });
    // };

    // var carregarOperadoras = function (){
    //     $http.get("endereço do arquivo de operadoras").sucecss(function (data) {
    //         $scope.listaDeOperadoras = data;
    //     });
    // };


    // carregarCores();
    // carregarContatos();
    // carregarOperadoras();
    
    

    // $scope.adicionarContato = function(contato){
    //     contato.data = new Date();
    //     $http.post("endereço do arquivo de contatos", contato).success(function (data) {
    //         delete $scope.contato;
    //         $scope.contatosForm.$setPristine();
    //         carregarContatos();
    //     });
    // };

    // $scope.apagarContato = function(contatos){
    //     $scope.listaDeContatos = contatos.filter(function (contato){
    //         if(!contato.selecionado){
    //             return contato;
    //         }
    //     });
    // };

    $scope.isContatoSelecionado = function(contatos){
        return contatos.some (function(contato){
            return contato.selecionado;
        });
    }

    $scope.ordenarPor = function (campo){
        $scope.criterioDeOrdenacao = campo;
        $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
    }
});


