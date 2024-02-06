import User from "./User.js";
import Docente from "./Docente.js";
import Admin from "./Admin.js";

const newUser = new User ('Ana', 'a@a.com', '1/5/2005')
console.log(newUser.exibirInfos())

const newAdmin = new Admin (']onathan', 'J@email.com', '25/2/2005')
console.log(newAdmin.exibirInfos());
console.log(newAdmin.nome);
newAdmin.nome = 'Jone';
console.log(newAdmin.nome)


const novoDocente = new Docente('Julie', 'profJ@email.com', '1995/5/2');
console.log(novoDocente.exibirInfos());