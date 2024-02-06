import User from "./User.js";

export default class Admin extends User {
    constructor(nome, email, nascimento, role ='admin', ativo = true){
        super(nome, email, nascimento, role, ativo);
    };

    exibirInfos() {
        return `${this.nome}, ${this.role}, ${this.ativo}`
    };

    criarCursos(nomeCurso, qtdVagas){
        return `O curso de ${nomeCurso}, com a quantidade de ${qtdVagas} vagas, foi criado com sucesso.`
    };
};

