

angular.module("listaTelefonica").service("operadorasAPI", function (){

    var operadoras = [
        {nome: "Oi", codigo: 14, categoria: "Celular", preco: 1},
        {nome: "Vivo", codigo: 15, categoria: "Celular", preco: 2},
        {nome: "Tim", codigo: 41, categoria: "Celular", preco: 3},
        {nome: "GVT", codigo: 25, categoria: "Fixo", preco: 4},
        {nome: "Embratel", codigo: 21, categoria: "Fixo", preco: 5},
    ];


    this.getOperadoras = function () {
        return operadoras;
    };
});





// angular.module("listaTelefonica").service("operadorasAPI", function($http, config){
//     this.getOperadoras = function (){
//         return $http.get(config.baseURL + "/operadoras");
//     };
// });








