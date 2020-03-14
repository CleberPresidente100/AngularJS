

angular.module("listaTelefonica").factory("coresAPI", function (){

    var cores = [
        {nome: "Azul", codigo: "blue"},
        {nome: "Verde", codigo: "green"},
        {nome: "Amarelo", codigo: "yellow"},
        {nome: "Vermelho", codigo: "red"},
    ];


    var _getCores = function (){
        return cores;
    }


    return {
        getCores: _getCores,
    };
});




// angular.module("listaTelefonica").factory("coresAPI", function ($http, config){
//     this.getCores = function (){
//         return $http.get(config.baseURL + "/cores");
//     };
// });




