const clientes = require("./outrosClientes.json");

function ordernar (lista, propriedade){
    const resultado = lista.sort((a, b)=>{
        if(a[propriedade] < b[propriedade]){
            return -1;
        };
        if (a[propriedade > b[propriedade]]){
            return 1
        };
        return 0;
    });
    return resultado
};

const ordenaNome = ordernar(clientes, "nome");

console.log(ordenaNome);