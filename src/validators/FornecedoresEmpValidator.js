import mensagens from "./mensagens";

const FornecedoresEmpValidator = {
    empresa_id: {
        required: mensagens.required,
        minLength: {value: 1, message: mensagens.maxLength}
    },
    fornecedores_id: {
        required: mensagens.required,
        minLength: {value: 1, message: mensagens.maxLength}
    }
}

export default FornecedoresEmpValidator