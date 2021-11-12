class SetorService {
    
    // Vai mostrar todos os dados
    getAll() {
        const setores = localStorage.getItem('setores')
        return setores ? JSON.parse(setores) : []
    }

    // Vai retornar os dados pelo id
    get(id) {
        const setores = this.getAll()
        return setores[id]
    }

    // Permite criar um novo dado
    create(dados) {
        const setores = this.getAll()
        setores.push(dados)

        localStorage.setItem('setores', JSON.stringify(setores))
    }

    // Permite alterar os dados
    update(dados, id) {
        const setores = this.getAll()
        setores.splice(id, 1, dados)
        localStorage.setItem('setores', JSON.stringify(setores))
    }

    //Permite deletar os dados
    delete(id) {
        const setores = this.getAll()
        setores.splice(id, 1)
        localStorage.setItem('setores', JSON.stringify(setores))
    }
}

export default new SetorService()