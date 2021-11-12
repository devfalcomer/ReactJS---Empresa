import mensagens from "./mensagens"

const SetoresValidator = {
    nome: {
        required: mensagens.required,
        maxLength: {value: 50, message: mensagens.maxLength}
    },
    empresa_id: {
        required: mensagens.required,
        minLength: {value: 1, message: mensagens.maxLength}
    },
}

export default SetoresValidator