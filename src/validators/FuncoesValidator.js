import mensagens from "./mensagens"

const FuncoesValidator = {
    nome: {
        required: mensagens.required,
        maxLength: {value: 50, message: mensagens.maxLength}
    },
    setores_id: {
        required: mensagens.required,
        minLength: {value: 1, message: mensagens.maxLength}
    },
}

export default FuncoesValidator