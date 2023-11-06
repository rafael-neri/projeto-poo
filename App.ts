import Pessoa from "./Pessoa";

const pessoa = new Pessoa();

pessoa.cadastrar(
    1,
    "Pedro José",
    "M",
    "111.111.111-11",
    "01/01/2000",
    "pedrojose@outlook.com",
    "Rua Carlos do Nascimento 55 - Brasilia - DF"
);

pessoa.getInfo();

pessoa.excluir();


// 9c5b94b1-35ad-49bb-b118-8e8fc24abf8 
