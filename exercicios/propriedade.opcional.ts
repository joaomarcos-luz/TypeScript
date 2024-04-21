interface humano {
    nome: string
    idade: number
    carro?: string
}

interface academico extends humano {
    curso: string
    ira: number
}

// O carro não foi colocado e não reclamou por que no objeto humano na propriedade colocamos antes dos dois pontos (:), o sinal de enterrogação (?), que define que a propriedade não é obrigatoria!
const alunoFc: academico = {
    nome: "João",
    idade: 27,
    curso: "Ads",
    ira: 5
}