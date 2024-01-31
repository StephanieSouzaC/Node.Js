//atividades curso

const texto1 = "Heloo, World!";
const texto2 = "Olá, Mundo!";
const senha = "senhaTeste123";
const stringNumeros = "123456";
const citacao = 'Ouvi um barulho "toc toc"';

console.log(citacao);

// Concatenação (+)
const pergunta = "Meu nome é: ";
const resposta = "Stephanie";
console.log (pergunta + resposta);



//Pesquisar: tamplate string ou template literal

//conversão unicode
const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)

//Exemplo 
/*
const cidade = "belo horizonte";
const input = "Belo Horizonte";

console.log(cidade === input); // false
*/
const cidade = "belo horizonte";
const input = "Belo Horizonte";

const inputMinusculo = input.toLowerCase();

console.log(cidade === inputMinusculo); // true


//Exemplo 2 - para definir quantidade de caracteres
const senhaTeste123 = "minhaSenha123";
console.log(senha.length); // 13 caracteres



