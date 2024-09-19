export type TUsuario = {
    nome: string
    email: string
    senha: string
    telefone: string
}

export abstract class Usuario {
    nome: string
    email: string
    protected senha: string
    telefone: string
    protected logado: boolean = false

    constructor(pessoa: TUsuario){
        this.nome = pessoa.nome
        this.email = pessoa.email
        this.senha = pessoa.senha
        this.telefone = pessoa.telefone
    }

    login(senha: string): void{
        if (this.senha === senha) {
            this.logado = true
            return
        }

        this.logado = false
        return
    }
}