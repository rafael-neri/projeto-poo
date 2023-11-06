export default class Pessoa {

    // Atributos, Informações, Dados, Propriedades
    private id!: number;
    private nome!: string;
    private genero!: string;
    private cpf!: string;
    private data_nascimento!: string;
    private email!: string;
    private endereco!: string;

    // Funcionalidades, Metodos, Ações
    cadastrar(
        id: number,
        nome: string,
        genero: string,
        cpf: string,
        data_nascimento: string,
        email: string,
        endereco: string,
    ) {
        this.id = id;
        this.nome = nome;
        this.genero = genero;
        this.cpf = cpf;
        this.data_nascimento = data_nascimento;
        this.email = email;
        this.endereco = endereco;
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
