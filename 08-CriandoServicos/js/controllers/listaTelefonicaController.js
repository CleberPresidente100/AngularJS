


angular.module("listaTelefonica")
.controller("listaTelefonicaController", function($scope, coresAPI, contatosAPI, operadorasAPI, serialGenerator){
                
    $scope.app = "Lista Telefônica";


    console.log(serialGenerator.generate());

    $scope.cores = coresAPI.getCores();
    $scope.listaDeContatos = contatosAPI.getContatos();
    $scope.operadoras = operadorasAPI.getOperadoras();


    $scope.adicionarContato = function(contato){        
        contato.data = new Date();
        contato.serial = serialGenerator.generate();

        contatosAPI.saveContato(contato);

        delete $scope.contato;
        $scope.contatosForm.$setPristine();
    };

    
    $scope.apagarContato = function(contatos){
        contatosAPI.deleteContato(contatos);        
        $scope.listaDeContatos = contatosAPI.getContatos();
    };


    $scope.isContatoSelecionado = function(contatos){
        return contatos.some (function(contato){
            return contato.selecionado;
        });
    };


    $scope.ordenarPor = function (campo){
        $scope.criterioDeOrdenacao = campo;
        $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
    };
});






// angular.module("listaTelefonica")
// .controller("listaTelefonicaController", function($scope, $http, contatosAPI){

//     $scope.listaDeCores = [];
//     $scope.listaDeContatos = [];
//     $scope.listaDeOperadoras = [];


//     var carregarCores = function (){
//         $http.get("endereço do arquivo de cores").sucecss(function (data) {
//             $scope.listaDeCores = data;
//         });
//     };

//     var carregarContatos = function (){
//         contatosAPI.getContato().sucecss(function (data) {
//             $scope.listaDeContatos = data;
//         }).error(function (data, status){
//             // Tratamento do Erro
//         });
//     };

//     var carregarOperadoras = function (){
//         $http.get("endereço do arquivo de operadoras").sucecss(function (data) {
//             $scope.listaDeOperadoras = data;
//         });
//     };


//     carregarCores();
//     carregarContatos();
//     carregarOperadoras();
    
    

//     $scope.adicionarContato = function(contato){
//         contato.data = new Date();
//         $http.post("endereço do arquivo de contatos", contato).success(function (data) {
//             delete $scope.contato;
//             $scope.contatosForm.$setPristine();
//             carregarContatos();
//         });
//     };

//     $scope.apagarContato = function(contatos){
//         $scope.listaDeContatos = contatos.filter(function (contato){
//             if(!contato.selecionado){
//                 return contato;
//             }
//         });
//     };


//     $scope.isContatoSelecionado = function(contatos){
//         return contatos.some (function(contato){
//             return contato.selecionado;
//         });
//     }

//     $scope.ordenarPor = function (campo){
//         $scope.criterioDeOrdenacao = campo;
//         $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
//     }
// }



