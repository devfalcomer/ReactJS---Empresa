class FuncionariosService {

    // Vai mostrar todos os dados
    getAll() {
        const funcionarios = localStorage.getItem('funcionarios')
        return funcionarios ? JSON.parse(funcionarios) : []
    }

    // Vai retornar os dados pelo id
    get(id) {
        const funcionarios = this.getAll()
        return funcionarios[id]
    }

    // Permite criar um novo dado
    create(dados) {
        const funcionarios = this.getAll()
        funcionarios.push(dados)

        localStorage.setItem('funcionarios', JSON.stringify(funcionarios))
    }

    // Permite alterar os dados
    update(dados, id) {
        const funcionarios = this.getAll()
        funcionarios.splice(id, 1, dados)
        localStorage.setItem('funcionarios', JSON.stringify(funcionarios))
    }

    //Permite deletar os dados
    delete(id) {
        const funcionarios = this.getAll()
        funcionarios.splice(id, 1)
        localStorage.setItem('funcionarios', JSON.stringify(funcionarios))
    }
}

export default new FuncionariosService()