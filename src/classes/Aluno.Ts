import { TUsuario, Usuario } from "./Usuario";

export class Aluno extends Usuario {
    notas: number[] = []

    constructor(usuario: TUsuario){
        super(usuario)
    }

    visualizarNotas(): number[]{
        return this.notas
    }

    visualizarMedia(): string{
        let result = 0
        let contador = 0

        for (const nota of this.notas) {
           result += nota
           contador++
        }

        return `sua media é ${result / contador}`
    }
}