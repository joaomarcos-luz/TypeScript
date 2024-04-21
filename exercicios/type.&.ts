// A diferença de type para interface é que interface mão precisa usar o sinal de igual para declarar um esscopo do objeto.
type pessoa1 = {
    nome: string
    idade: number
}

type aluno1 = {
    curso: string
    numeroDaMatricula: number
}

// No Type para fazer a extenção de potro objeto usamos & (e comercial), ja em interface usamos o extends e se tiver mais de um igual o exemplo abaixo usamos virgula (,) para separa os objetos.
// interface notas1 extends pessoa1, aluno1 {}
type notas1 = pessoa1 & aluno1 & {
    notaAv1: number
    notaAv2: number
}

const aluno321: notas1 = {
    nome: "joao",
    idade: 27,
    curso: "Ads",
    numeroDaMatricula: 123,
    notaAv1: 100,
    notaAv2: 80
}

console.log(aluno123)