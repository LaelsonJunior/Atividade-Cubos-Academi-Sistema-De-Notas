import { Aluno } from './classes/Aluno'
import { Professor } from './classes/Professor';


const teste = new Aluno({nome: 'teste', email:'email', telefone: '123465789', senha: '123'})
const testeProfessor = new Professor({nome: 'testeProfessor', email:'emailProfessor', telefone: '123654789', senha: '123'}, 'Computação')

console.log(testeProfessor)
console.log('-------------');
testeProfessor.login('123')
console.log(testeProfessor)
testeProfessor.atribuirNota(teste, 9)
testeProfessor.atribuirNota(teste, 7)
testeProfessor.atribuirNota(teste, 10)
testeProfessor.atribuirNota(teste, 6)
testeProfessor.atribuirNota(teste, 7)

console.log(teste.visualizarNotas())
console.log(teste.visualizarMedia())