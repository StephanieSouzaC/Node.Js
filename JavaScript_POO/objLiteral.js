const user = {
    nome: "Ster",
    email: "email@email.com",
    nascimento: "2001/07/12",
    role: "estudante",
    ativo: true,
    exibirInformacoes: function () {
        console.log(this.nome, this.email);
    },
};

const admin = {
    nome: "Julia",
    email: "email12@email.com",
    nascimento: "1998/12/12",
    role: "admin",
    ativo: true,
    criarCurso() {
        console.log('Curso criado.');
    },
};

Object.setPrototypeOf(admin, user)

admin.criarCurso()
admin.exibirInformacoes()