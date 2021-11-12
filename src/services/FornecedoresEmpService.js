class EmpresaService {
    
    // Vai mostrar todos os dados
    getAll() {
        const fornecedoresemp = localStorage.getItem('fornecedoresemp')
        return fornecedoresemp ? JSON.parse(fornecedoresemp) : []
    }

    // Vai retornar os dados pelo id
    get(id) {
        const fornecedoresemp = this.getAll()
        return fornecedoresemp[id]
    }

    // Permite criar um novo dado
    create(dados) {
        const fornecedoresemp = this.getAll()
        fornecedoresemp.push(dados)

        localStorage.setItem('fornecedoresemp', JSON.stringify(fornecedoresemp))
    }

    // Permite alterar os dados
    update(dados, id) {
        const fornecedoresemp = this.getAll()
        fornecedoresemp.splice(id, 1, dados)
        localStorage.setItem('fornecedoresemp', JSON.stringify(fornecedoresemp))
    }

    // Permite deletar os dados
    delete(id) {
        const fornecedoresemp = this.getAll()
        fornecedoresemp.splice(id, 1)
        localStorage.setItem('fornecedoresemp', JSON.stringify(fornecedoresemp))
    }
}

export default new EmpresaService()