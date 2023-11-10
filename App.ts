import Aluno from "./Aluno";
import Professor from "./Professor";
import Oferta from "./Oferta";
import Curso from "./Curso";



// Cadastro de Professor

const prof_joao = new Professor(
    1,
    "João Ferreira",
    "111.111.111.11",
    "M",
    "01/01/1990",
    "jferreira@gmail.com",
    "Rua 55 casa 8 - Brasilia - DF",
    111
);



// Cadastro de Aluno

const aluno_pedro = new Aluno(
    9,
    "Pedro José",
    "222.222.222-22",
    "M",
    "01/01/2008",
    "pedro@gmail.com",
    "Rua 55 casa 19 - Brasilia - DF",
    999
);



// Cadastro de Curso

const curso_mat = new Curso("MAT", "Matemática", 30);



// Cadastro de Ofertas

const ofertas: Oferta[] = [];

const mat_1599 = new Oferta("MAT1599", curso_mat, prof_joao);
const mat_2050 = new Oferta("MAT2050", curso_mat, prof_joao);

ofertas.push(mat_1599);
ofertas.push(mat_2050);



// Matriculando Aluno
aluno_pedro.matricular("MAT", ofertas);


// Verificando os cursos do aluno
aluno_pedro.verificar_cursos_matriculados();


// Desistindo do curso
aluno_pedro.desistir("MAT");


// Verificando os cursos do aluno
aluno_pedro.verificar_cursos_matriculados();
