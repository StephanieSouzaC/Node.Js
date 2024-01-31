
// Três tipos de escrever funções: 

//1) Declaração de função
function mostraTexto (texto) {
    console.log(texto);
}

mostraTexto("teste");
mostraTexto("teste 2");


function soma(num1, num2){
    return resultado = num1 + num2;
}

console.log(soma());

function multiplicacao(num1= 1, num2= 1){
    return resultado = num1 * num2;
}

mostraTexto(multiplicacao(soma(1, 3), soma(8, 9)));

function apresentacao(nome, idade){
    return `Meu nome é ${nome} e minha idade é ${idade} anos.`
}
console.log(apresentacao("Steph", 22));

//2) Expressão de função -> se comporta como uma variável, então não tem como utilizar a expressão de função antes dela ser inicializada
//É importante escrever variáveis e funções no início do código.

const soma2 = function(num1, num2) {return num1 + num2}
console.log(soma(99, 1))


//3) Arrow Function
const apresentarArrow = nome => `Meu nome é ${nome}`;
const soma1 =(num1, num2) => num1 + num2;

const somaNumPeqn = (num1, num2) => {
    if (num1 > 10 || num2 > 10){
        return "somente números abaixo de 10."
    } else {
        return num1 + num2
    }
}

console.log(apresentarArrow('Steph'));
console.log(somaNumPeqn(2, 5))