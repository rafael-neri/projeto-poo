import Pessoa from "./Pessoa";
import Curso from "./Curso";
import Oferta from "./Oferta";

class Aluno extends Pessoa {

    cursos_matriculados: Curso[];

    constructor(
        id: number,
        nome: string,
        cpf: string,
        genero: string,
        data_nascimento: string,
        email: string,
        endereco: string,
        private numero_matricula: number
    ) {
        super(id, nome, cpf, genero, data_nascimento, email, endereco);
        this.cursos_matriculados = [];
    }

    matricular(codigo_curso: string, ofertas: Oferta[]) {
        // 1. Verificar se já está matriculado no curso
        if (
            this.cursos_matriculados.some((curso: Curso) => curso.getCodigoCurso() === codigo_curso)
        ) {
            console.log(`Aluno já matriculado no curso: ${codigo_curso}`);
            return;
        }

        // 2. Verificar a Oferta do Curso
        const oferta = ofertas.find(
            (oferta: Oferta) => oferta.getCurso().getCodigoCurso() === codigo_curso
        )

        if (!oferta) {
            console.log(`Oferta não existe para o curso: ${codigo_curso}`);
            return;
        }

        // 3. Adicionar o curso no array de cursos matriculados
        this.cursos_matriculados.push(oferta.getCurso());
        console.log(`Matrícula no curso ${codigo_curso} realizada com sucesso`);
    }

    desistir(codigo_curso: string) {
        // 1. Verificar se aluno tá matriculado no curso
        const index = this.cursos_matriculados.findIndex((curso: Curso) => curso.getCodigoCurso() === codigo_curso);
        if (index === -1) {
            console.log(`Aluno não está matriculado no curso: ${codigo_curso}`);
            return;
        }

        // 2. Remover do array de cursos matriculados
        this.cursos_matriculados.splice(index, 1);
        console.log(`Desistência do curso ${codigo_curso} realizada com sucesso`);
    }

    verificar_cursos_matriculados() {
        if (this.cursos_matriculados.length == 0) {
            console.log(`Aluno não está matrículado em nenhum curso`);
        } else {
            console.table(this.cursos_matriculados);
        }
    }

}

export default Aluno;
