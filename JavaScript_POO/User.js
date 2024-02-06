export default class User {
    #nome
    #email
    #nascimento
    #role
    #ativo
    constructor(nome, email, nascimento, role, ativo = true) {
        this.#nome = nome;
        this.#email = email;
        this.#nascimento = nascimento;
        this.#role = role || 'estudante';
        this.#ativo = ativo;
    };

    get nome() {
        return this.#nome
    };

    get email() {
        return this.#email
    };

    get nascimento() {
        return this.#nascimento
    };

    get role() {
        return this.#role
    };

    get ativo() {
        return this.#ativo
    };

    set nome(novoNome) {
        if(novoNome === ''){
            throw new Error ('Formato não válido.')
        };
        this.#nome = novoNome
    };

    set email(novoEmail) {
        if(novoEmail === ''){
            throw new Error ('Formato não válido.')
        };
        this.#email = novoEmail
    };

    set nascimento(novoNascimento) {
        if(novoNascimento === ''){
            throw new Error ('Formato não válido.')
        };
        this.#nascimento = novoNascimento
    };

    set role(novaRole) {
        if(novaRole === ''){
            throw new Error ('Formato não válido.')
        };
        this.#role = novaRole
    };

    set ativo(statusAtivo) {
        this.#ativo = statusAtivo
    };

    exibirInfos() {
        return `${this.nome}, ${this.email}, ${this.nascimento}, ${this.role}, ${this.ativo}`
    };
};

