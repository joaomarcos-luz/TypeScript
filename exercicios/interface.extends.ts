interface pessoa {
    nome: string
    idade: number
}

interface aluno extends pessoa {
    curso: string
    numeroDaMatricula: number
}

// o extends funciona como herança.
// Eu não prcisei colocar pessoa aqui por que aluno já tem dentro dele um extends de pessoa.
// Caso aluno não tivesse o extends de pessoa era so acrecentar pessoa a nota igual exemplo abaixo
// interface notas extends pessoa, aluno {} ; colocando uma virgula (,) para separar os objetos.
interface notas extends aluno {
    notaAv1: number
    notaAv2: number
}

const aluno123: notas = {
    nome: "joao",
    idade: 27,
    curso: "Ads",
    numeroDaMatricula: 123,
    notaAv1: 100,
    notaAv2: 80
}

console.log(aluno123)