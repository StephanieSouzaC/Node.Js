/*
function User(nome, email) {
    this.nome = nome;
    this.email = email;

    this.exibirInfos = function(){
        return `${this.nome}, ${this.email}` 
    };
};

//const novoUser = new User('Stephanie', 'email@email.com');
//console.log(novoUser.exibirInfos())

function Admin(role){
    User.call(this, 'Stephanie', 'email@email.com');
    this.role = role || 'professor';
};

Admin.prototype = Object.create(User.prototype);
const novoUser = new Admin('admin');

console.log(novoUser.exibirInfos());
console.log(novoUser.role);
*/

const user = {
    init: function(nome, email){
        this.nome = nome;
        this.email = email;
    },
    exibirInfor: function(nome){
        return this.nome;
    },
};

const novoUser = Object.create(user);
novoUser.init('Ste', 'email@email.com');
console.log(novoUser.exibirInfor());