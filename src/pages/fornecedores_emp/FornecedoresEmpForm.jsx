/*
Responsável: Arthur Falcomer

Função: Após clicar no botão novo na página de listagem, será redirecionado
para essa página de formulário, onde será preenchido os campos, após 
clicar no botão salvar deve redirecionar para a página de listagem,
onde nessa página deve mostrar os campos que foram salvos.

Última atualização: 02/11/2021
*/

import React, { useEffect } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaCheck, FaArrowLeft } from "react-icons/fa";
import Box from '../../components/Box';
import FornecedoresEmpService from '../../services/FornecedoresEmpService';
import validador from '../../validators/FornecedoresEmpValidator';
import { useForm } from 'react-hook-form';

const FornecedoresEmpForm = (props) => {

    const { register, handleSubmit, setValue, formState: { errors } } = useForm()

    useEffect(() => {
        const id = props.match.params.id

        if (id) {
            const fornecedoresemp = FornecedoresEmpService.get(id)
            for (let campo in fornecedoresemp) {
                setValue(campo, fornecedoresemp[campo])
            }
        }
    }, [props, setValue])

    function enviarDados(dados) {
        const id = props.match.params.id
        id ? FornecedoresEmpService.update(dados, id) : FornecedoresEmpService.create(dados)
        props.history.push('/fornecedoresemp')
    }

    return (
        <>
            <Box title="Fornecedores_Empresa Formulário">
                <Form>

                    {/* Empresa_ID */}
                    <Form.Group as={Row} className="mb-3" controlId="empresa_id">
                        <Form.Label column sm={2}>Empresa_id: </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" {...register("empresa_id", validador.empresa_id)} />
                            {errors.empresa_id && <span className="text-danger">{errors.empresa_id.message}</span>}
                        </Col>
                    </Form.Group>

                    {/* Fornecedores_ID */}
                    <Form.Group as={Row} className="mb-3" controlId="fornecedores_id">
                        <Form.Label column sm={2}>Fornecedores_id: </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" {...register("fornecedores_id", validador.fornecedores_id)} />
                            {errors.fornecedores_id && <span className="text-danger">{errors.fornecedores_id.message}</span>}
                        </Col>
                    </Form.Group>

                    {/* Botões */}
                    <div className="text-center">
                        <Button variant="success" onClick={handleSubmit(enviarDados)}><FaCheck /> Salvar</Button>
                        <Link className="btn btn-danger" to="/empresas"><FaArrowLeft /> Voltar</Link>
                    </div>
                </Form>
            </Box>
        </>
    )
}

export default FornecedoresEmpForm
