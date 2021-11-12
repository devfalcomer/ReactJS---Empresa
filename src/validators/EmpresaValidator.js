import mensagens from "./mensagens"

const EmpresaValidator = {
    nome: {
        required: mensagens.required,
        maxLength: {value: 50, message: mensagens.maxLength}
    },
    responsavel: {
        required: mensagens.required,
        maxLength: {value: 50, message: mensagens.maxLength}
    },
    cnpj: {
        required: mensagens.required,
        minLength: {value: 10, message: mensagens.minLength + ': 10'}, 
        maxLength: {value: 18, message: mensagens.maxLength + ': 18'}
    },
}

export default EmpresaValidator