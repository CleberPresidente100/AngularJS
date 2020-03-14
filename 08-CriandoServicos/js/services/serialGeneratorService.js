


angular.module("listaTelefonica").provider("serialGenerator", function (){
    
    var _tamanho = 20;

    this.getLength = function (){
        return _tamanho;
    };

    this.setLength = function (tamanho){
        _tamanho = tamanho;
    };
    
    this.$get = function (){
        return {
            generate: function (){
                var serial = "";
                while (serial.length < _tamanho){
                    serial += String.fromCharCode(Math.floor(Math.random() * 64) + 32);
                }

                return serial;
            },

        };
    };

});







