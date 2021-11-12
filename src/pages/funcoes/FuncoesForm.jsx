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
import Box from '../../components/Box';
import { FaCheck, FaArrowLeft } from "react-icons/fa";
import validador from '../../validators/FuncoesValidator';
import FuncoesService from '../../services/FuncoesService';
import { useForm } from 'react-hook-form';

const FuncoesForm = (props) => {

    const { register, handleSubmit, setValue, formState: { errors } } = useForm()

    useEffect(() => {
        const id = props.match.params.id

        if (id) {
            const funcoes = FuncoesService.get(id)
            for (let campo in funcoes) {
                setValue(campo, funcoes[campo])
            }
        }
    }, [props, setValue])

    function enviarDados(dados) {
        const id = props.match.params.id
        id ? FuncoesService.update(dados, id) : FuncoesService.create(dados)
        props.history.push('/funcoes')
    }

    return (
        <>
            <Box title="Funções Formulário">
                <Form>
                    <Form.Group as={Row} className="mb-3" controlId="nome">
                        <Form.Label column sm={2}>Nome: </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" {...register("nome", validador.nome)} />
                            {errors.nome && <span className="text-danger">{errors.nome.message}</span>}
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="setores_id">
                        <Form.Label column sm={2}>Setores_ID: </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" {...register("setores_id", validador.setores_id)} />
                            {errors.setores_id && <span className="text-danger">{errors.setores_id.message}</span>}
                        </Col>
                    </Form.Group>

                    <div className="text-center">
                        <Button variant="success" onClick={handleSubmit(enviarDados)}><FaCheck /> Salvar</Button>
                        <Link className="btn btn-danger" to="/funcoes"><FaArrowLeft /> Voltar</Link>
                    </div>
                </Form>
            </Box>
        </>
    )
}

export default FuncoesForm
