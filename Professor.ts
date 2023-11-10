import Curso from "./Curso";
import Oferta from "./Oferta";
import Pessoa from "./Pessoa";

class Professor extends Pessoa {
    private cursos: Curso[];

    constructor(
        id: number,
        nome: string,
        cpf: string,
        genero: string,
        data_nascimento: string,
        email: string,
        endereco: string,
        private numero_registro: number,
    ) {
        super(id, nome, cpf, genero, data_nascimento, email, endereco);
        this.cursos = [];
    }

    excluir() {
        console.log(`Professor excluido: ${this.nome}`)
    }

    alocar(codigo_curso: string, ofertas: Oferta[]) {
        // 1. Verificar se o professor está alocado em uma oferta similar
        if (this.cursos.some((curso) => curso.getCodigoCurso() === codigo_curso)) {
            console.log(`Professor já alocado no curso: ${codigo_curso}`);
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

        // 3. Alocação
        this.cursos.push(oferta.getCurso());

    }

    desalocar(codigo_curso: string) {
        // 1. Verificar se professor está alocado
        const index = this.cursos.findIndex((curso: Curso) => curso.getCodigoCurso() === codigo_curso);
        if (index === -1) {
            console.log(`Professor não está alocado no curso: ${codigo_curso}`);
            return;
        }

        // 2. Fazer a desalocação
        this.cursos.splice(index, 1);
        console.log(`Desalocação do curso ${codigo_curso} realizada com sucesso`);
    }

    verificar_cursos_matriculados() {
        if (this.cursos.length == 0) {
            console.log(`Professor não está alocado em nenhum curso`);
        } else {
            console.table(this.cursos);
        }
    }

}

export default Professor;
