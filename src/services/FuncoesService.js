class FuncoesService {
    
    // Vai mostrar todos os dados
    getAll() {
        const funcoes = localStorage.getItem('funcoes')
        return funcoes ? JSON.parse(funcoes) : []
    }  

    // Vai retornar os dados pelo id
    get(id) {
        const funcoes = this.getAll()
        return funcoes[id]
    }

    // Permite criar um novo dado
    create(dados) {
        const funcoes = this.getAll()
        funcoes.push(dados)

        localStorage.setItem('funcoes', JSON.stringify(funcoes))
    }

    // Permite alterar os dados
    update(dados, id) {
        const funcoes = this.getAll()
        funcoes.splice(id, 1, dados)
        localStorage.setItem('funcoes', JSON.stringify(funcoes))
    }

    //Permite deletar os dados
    delete(id) {
        const funcoes = this.getAll()
        funcoes.splice(id, 1)
        localStorage.setItem('funcoes', JSON.stringify(funcoes))
    }
}

export default new FuncoesService()