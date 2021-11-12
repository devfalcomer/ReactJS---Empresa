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
import validador from '../../validators/SetoresValidator';
import SetorService from '../../services/SetorService';
import { useForm } from 'react-hook-form';

const SetoresForm = (props) => {

    const { register, handleSubmit, setValue, formState: { errors } } = useForm()

    useEffect(() => {
        const id = props.match.params.id

        if (id) {
            const setores = SetorService.get(id)
            for (let campo in setores) {
                setValue(campo, setores[campo])
            }
        }
    }, [props, setValue])

    function enviarDados(dados) {
        const id = props.match.params.id
        id ? SetorService.update(dados, id) : SetorService.create(dados)
        props.history.push('/setores')
    }

    return (
        <>
            <Box title="Setores Formulário">
                <Form>

                    {/* Nome */}
                    <Form.Group as={Row} className="mb-3" controlId="nome">
                        <Form.Label column sm={2}>Nome: </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" {...register("nome", validador.nome)} />
                            {errors.nome && <span className="text-danger">{errors.nome.message}</span>}
                        </Col>
                    </Form.Group>

                    {/* Empresa_ID */}
                    <Form.Group as={Row} className="mb-3" controlId="empresa_id">
                        <Form.Label column sm={2}>Empresa_ID: </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" {...register("empresa_id", validador.empresa_id)} />
                            {errors.empresa_id && <span className="text-danger">{errors.empresa_id.message}</span>}
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

export default SetoresForm
