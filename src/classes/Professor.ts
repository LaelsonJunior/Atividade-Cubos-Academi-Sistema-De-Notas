import { TUsuario, Usuario } from "./Usuario"
import { Aluno } from "./Aluno"
import { error } from "console"

interface IProfessor {

    atribuirNota(aluno: Aluno, nota: number): void

}

export class Professor extends Usuario implements IProfessor {
    materia: string
    constructor(pessoa: TUsuario, materia: string) {
        super(pessoa)
        this.materia = materia
    }

    private verificarLogin(): void {
        if (!this.logado) {
            throw new Error('Professor não Logado')
        }
    }

    atribuirNota(aluno: Aluno, nota: number): void {
        this.verificarLogin()
        aluno.notas.push(nota)
    }
}