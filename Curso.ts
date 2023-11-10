class Curso {

    constructor(
        private codigo_curso: string,
        private nome: string,
        private carga_horaria: number,
    ) { }

    getCodigoCurso() {
        return this.codigo_curso;
    }

    excluir() {
        console.log(`Curso excluido: ${this.nome}`);
    }
}

export default Curso;
