

angular.module("listaTelefonica").factory("contatosAPI", function (){

    var listaDeContatos = [
        {nome: "Cleber", telefone: "123456789", cor: "blue", data: new Date(), operadora: {nome: "Oi", codigo: 14, categoria: "Celular"}},
        {nome: "Presidente", telefone: "987654321", cor: "green", data: new Date(), operadora: {nome: "Vivo", codigo: 15, categoria: "Celular"}},
        {nome: "100%", telefone: "1597532648", cor: "yellow", data: new Date(), operadora: {nome: "GVT", codigo: 25, categoria: "Fixo"}},
    ];


    var _getContatos = function () {
        return listaDeContatos;
    };


    var _saveContato = function (contato) {
        listaDeContatos.push(angular.copy(contato));
        return listaDeContatos;
    };


    var _deleteContato = function (contatos) {
        listaDeContatos = contatos.filter(function (contato){
            if(!contato.selecionado){
                return contato;
            }
        });
    };


    return {
        getContatos: _getContatos,
        saveContato: _saveContato,
        deleteContato: _deleteContato,
    };
});







// angular.module("listaTelefonica").factory("contatosAPI", function ($http, config){
//     var _getContatos = function () {
//         return $http.get(config.baseURL + "/contatos");
//     };

//     var _saveContatos = function (contato) {
//         return $http.post(config.baseURL + "/contatos", contato);
//     };

//     return {
//         getContatos: _getContatos,
//         saveContatos: _saveContatos,
//     };
// });






