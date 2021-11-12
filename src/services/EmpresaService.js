class EmpresaService {
    
    // Vai mostrar todos os dados
    getAll() {
        const empresas = localStorage.getItem('empresas')
        return empresas ? JSON.parse(empresas) : []
    }

    // Vai retornar os dados pelo id
    get(id) {
        const empresas = this.getAll()
        return empresas[id]
    }

    // Permite criar um novo dado
    create(dados) {
        const empresas = this.getAll()
        empresas.push(dados)

        localStorage.setItem('empresas', JSON.stringify(empresas))
    }

    // Permite alterar os dados
    update(dados, id) {
        const empresas = this.getAll()
        empresas.splice(id, 1, dados)
        localStorage.setItem('empresas', JSON.stringify(empresas))
    }

    // Permite deletar os dados
    delete(id) {
        const empresas = this.getAll()
        empresas.splice(id, 1)
        localStorage.setItem('empresas', JSON.stringify(empresas))
    }
}

export default new EmpresaService()