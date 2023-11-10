class Pessoa {

    constructor(
        private id: number,
        protected nome: string,
        protected cpf: string,
        protected genero: string,
        protected data_nascimento: string,
        protected email: string,
        protected endereco: string,
    ) { }

    getId() {
        return this.id;
    }

    excluir() {
        console.log(`Pessoa excluida: ${this.nome}`);
    }

    getInfo() {
        console.log(`Id: ${this.id}`);
        console.log(`Nome: ${this.nome}`);
        console.log(`Genero: ${this.genero}`);
        console.log(`CPF: ${this.cpf}`);
        console.log(`Data Nascimento: ${this.data_nascimento}`);
        console.log(`E-mail: ${this.email}`);
        console.log(`Endereço: ${this.endereco}`);
    }
}

export default Pessoa;
