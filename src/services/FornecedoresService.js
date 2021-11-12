class FornecedoresService {
    
    // Vai mostrar todos os dados
    getAll() {
        const fornecedores = localStorage.getItem('fornecedores')
        return fornecedores ? JSON.parse(fornecedores) : []
    }

    // Vai retornar os dados pelo id
    get(id) {
        const fornecedores = this.getAll()
        return fornecedores[id]
    }

    // Permite criar um novo dado
    create(dados) {
        const fornecedores = this.getAll()
        fornecedores.push(dados)

        localStorage.setItem('fornecedores', JSON.stringify(fornecedores))
    }

    // Permite alterar os dados
    update(dados, id) {
        const fornecedores = this.getAll()
        fornecedores.splice(id, 1, dados)
        localStorage.setItem('fornecedores', JSON.stringify(fornecedores))
    }

    //Permite deletar os dados
    delete(id) {
        const fornecedores = this.getAll()
        fornecedores.splice(id, 1)
        localStorage.setItem('fornecedores', JSON.stringify(fornecedores))
    }
}

export default new FornecedoresService()