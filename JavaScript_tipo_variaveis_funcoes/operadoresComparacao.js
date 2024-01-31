// == -> comparação e conversão implicita 
// === -> faz apenas a comparação, de forma mais expecífica sem conversão dos tipos de dados

const num = 7;
const texto = "7";

console.log(num == texto);
console.log(num === texto);

//typeof - mostra o tipo de dado que está sendo salvo na variável
console.log(typeof num);
console.log(typeof texto);

//conversão explicita
//Number()
//String()

/*
||: Operador “ou”, retorna true caso uma condição seja válida;
&&: Operador “e”, retorna true somente se todas as condições forem válidas;
!= e !==: Operadores “não igual” e “estritamente não igual”, utilizados para comparação, da mesma forma que == e === retornam true ou false.
*/

// Operador Ternário

const idadeMin= 18;
const idadeCliente = 16;

if (idadeCliente >= idadeMin){
    console.log("pode beber!");
} else {
    console.log("não pode beber!");
}

console.log(idadeCliente >= idadeMin ? "pode beber" : "não pode beber!");

