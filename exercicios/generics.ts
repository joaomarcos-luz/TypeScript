type pessoaa<T> = {
    nome: string
    idade: Number
    profissao: T
}

type alunoo = {
    matricula: number
}

interface engenheiro {
    crea: number
}

interface medico {
    crm: number
}

let aluno: pessoaa<alunoo> = {
    nome: "joao",
    idade: 27,
    profissao: { matricula: 123 }
}

let engenheiro: pessoaa<engenheiro> = {
    nome: "jose",
    idade: 70,
    profissao: { crea: 123 }
}

let medico: pessoaa<medico> = {
    nome: "Raimunda",
    idade: 40,
    profissao: { crm: 123 }
}

type Lista<T = string> = T[]

let listar: Lista<number> = [8, 13, 90]