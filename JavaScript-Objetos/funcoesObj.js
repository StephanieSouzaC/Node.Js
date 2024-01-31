const cliente = {
    nome: "Alfred",
    idade: 24,
    email: "fredinho@gmail.com",
    telefone: ["31 3131313131", "31 9999888898"],
    saldo: 200,
    efetuarPgto: function (valor) {
        if (valor > this.saldo) {
            console.log("Compra reprovada. Saldo insulficiente!")
        } else {
            this.saldo -= valor;
            console.log(`Pagamento aprovado. Novo saldo ${this.saldo} reais.`);
        }
    }
};

cliente.efetuarPgto(150)


