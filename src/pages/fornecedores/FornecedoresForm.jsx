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
import { useForm } from 'react-hook-form';
import validador from '../../validators/FornecedoresValidator';
import FornecedoresService from '../../services/FornecedoresService';
import { mask, unMask } from 'remask';

const FornecedoresForm = (props) => {

    const { register, handleSubmit, setValue, formState: { errors } } = useForm()

    useEffect(() => {
        const id = props.match.params.id

        if (id) {
            const fornecedores = FornecedoresService.get(id)
            for (let campo in fornecedores) {
                setValue(campo, fornecedores[campo])
            }
        }
    }, [props, setValue])

    function handleChange(event) {
        const name = event.target.name
        const mascara = event.target.getAttribute('mask')

        let valor = unMask(event.target.value)
        valor = mask(valor, mascara)

        setValue(name, valor)
    }

    function enviarDados(dados) {
        const id = props.match.params.id
        id ? FornecedoresService.update(dados, id) : FornecedoresService.create(dados)
        props.history.push('/fornecedores')
    }

    return (
        <>
            <Box title="Fornecedores Formulário">
                <Form>

                    {/* Nome */}
                    <Form.Group as={Row} className="mb-3" controlId="nome">
                        <Form.Label column sm={2}>Nome: </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" {...register("nome", validador.nome)} />
                            {errors.nome && <span className="text-danger">{errors.nome.message}</span>}
                        </Col>
                    </Form.Group>

                    {/* Descrição */}
                    <Form.Group as={Row} className="mb-3" controlId="descricao">
                        <Form.Label column sm={2}>Descrição: </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" {...register("descricao", validador.descricao)} />
                            {errors.descricao && <span className="text-danger">{errors.descricao.message}</span>}
                        </Col>
                    </Form.Group>

                    {/* CNPJ */}
                    <Form.Group as={Row} className="mb-3" controlId="cnpj">
                        <Form.Label column sm={2}>CNPJ: </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" {...register("cnpj", validador.cnpj)} mask="99.999.999/9999-99" onChange={handleChange} />
                            {errors.cnpj && <span className="text-danger">{errors.cnpj.message}</span>}
                        </Col>
                    </Form.Group>

                    {/* Contato */}
                    <Form.Group as={Row} className="mb-3" controlId="contato">
                        <Form.Label column sm={2}>Contato: </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" {...register("contato", validador.contato)} mask="(99) 99999-9999" onChange={handleChange} />
                            {errors.contato && <span className="text-danger">{errors.contato.message}</span>}
                        </Col>
                    </Form.Group>

                    {/* Responsável */}
                    <Form.Group as={Row} className="mb-3" controlId="responsavel">
                        <Form.Label column sm={2}>Responsável: </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" {...register("responsavel", validador.responsavel)} />
                            {errors.responsavel && <span className="text-danger">{errors.responsavel.message}</span>}
                        </Col>
                    </Form.Group>

                    {/* Botões */}
                    <div className="text-center">
                        <Button variant="success" onClick={handleSubmit(enviarDados)}><FaCheck /> Salvar</Button>
                        <Link className="btn btn-danger" to="/fornecedores"><FaArrowLeft /> Voltar</Link>
                    </div>
                </Form>
            </Box>
        </>
    )
}

export default FornecedoresForm
