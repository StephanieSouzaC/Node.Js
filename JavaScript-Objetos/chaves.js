const cliente = {
    nome: "Alfred",
    idade: 24,
    email: "fredinho@gmail.com",
    telefone: ["31 3131313131", "31 9999888898"],
};

cliente.enderecos = [
    {
        rua: "Av Afonso Pena",
        numero: 2125,
        apartamento: false,
        complemento: "casa 1",
    },
];

const chavesDoObjeto = Object.keys(cliente);

if (!chavesDoObjeto.includes("enderecos")) {
    console.error("Erro, não foi cadastrado o endereço.")
}

console.log(chavesDoObjeto);