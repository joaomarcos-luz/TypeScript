type Id = string | number //Criando um type

const id: Id = "Joao"
const id1: Id = "Ana"
const id2: Id = 8
const id3: Id = 13
const id4: Id = "João09"

//Se a caso for usar o mesmo type varias vezes assim evita repetição de codigo.
type Usuario = { nome: string, idade: number }

let user: Usuario = { nome: "João", idade: 27}