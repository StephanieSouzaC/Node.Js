const cliente = {
    nome: "Alfred",
    idade:24,
    cpf: "1958959",
    email: "fredinho@gmail.com",
};

console.log(`O e-mail do cliente é ${cliente.email}`);
console.log(`Os três primeiros digitos do CPF são ${cliente.cpf.substring(0,3)}.`)