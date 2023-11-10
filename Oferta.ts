import Aluno from "./Aluno";
import Curso from "./Curso";
import Professor from "./Professor";

class Oferta {

    private alunos: Aluno[];

    constructor(
        private codigo_oferta: string,
        private curso: Curso,
        private professor: Professor,
    ) {
        this.alunos = [];
    }

    getCodigoOferta() {
        return this.codigo_oferta;
    }

    getCurso() {
        return this.curso;
    }

    excluir() {
        console.log(`Oferta excluida: ${this.codigo_oferta}`);
    }

}

export default Oferta;
