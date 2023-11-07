import Pessoa from "./Pessoa";
import Curso from "./Curso";

class Aluno extends Pessoa {

    numero_matricula: number;
    cursos_matriculados: Curso[];

    constructor(
        id: number,
        nome: string,
        cpf: string,
        genero: string = "F",
        data_nascimento: string,
        email: string,
        endereco: string,
        numero_matricula: number,
    ) {
        super(id, nome, cpf, genero, data_nascimento, email, endereco);
        this.numero_matricula = numero_matricula;
        this.cursos_matriculados = [];
    }

    matricular() {

    }

}
