import mensagens from "./mensagens"

const FuncionariosValidator = {
    nome: {
        required: mensagens.required,
        maxLength: { value: 50, message: mensagens.maxLength }
    },
    cpf: {
        required: mensagens.required,
        minLength: { value: 10, message: mensagens.minLength + ': 10' },
        maxLength: { value: 14, message: mensagens.maxLength + ': 14' }
    },
    salario: {
        required: mensagens.required,
        minLength: { value: 4, message: mensagens.maxLength }
    },
    cargahoraria: {
        required: mensagens.required,
        maxLength: { value: 2, message: mensagens.maxLength },
    },
    empresa_id: {
        required: mensagens.required,
        maxLength: { value: 3, message: mensagens.maxLength }
    },
    funcao_id: {
        required: mensagens.required,
        maxLength: { value: 3, message: mensagens.maxLength }
    }
}

export default FuncionariosValidator