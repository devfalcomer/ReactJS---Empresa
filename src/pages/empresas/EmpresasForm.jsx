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
import Box from '../../components/Box';
import validador from '../../validators/EmpresaValidator';
import { FaCheck, FaArrowLeft } from "react-icons/fa";
import EmpresaService from '../../services/EmpresaService';
import { useForm } from 'react-hook-form';
import { mask, unMask } from 'remask';
import { Link } from 'react-router-dom';

const EmpresasForm = (props) => {

    const { register, handleSubmit, setValue, formState: { errors } } = useForm()

    useEffect(() => {
        const id = props.match.params.id

        if (id) {
            const empresas = EmpresaService.get(id)
            for (let campo in empresas) {
                setValue(campo, empresas[campo])
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
        id ? EmpresaService.update(dados, id) : EmpresaService.create(dados)
        props.history.push('/empresas')
    }

    return (
        <>
            <Box tilte="Empresas Formulário">
                <Form>

                    {/* Nome */}
                    <Form.Group as={Row} className="mb-3" controlId="nome">
                        <Form.Label column sm={2}>Nome: </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" {...register("nome", validador.nome)} />
                            {errors.nome && <span className="text-danger">{errors.nome.message}</span>}
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

                    {/* CNPJ */}
                    <Form.Group as={Row} className="mb-3" controlId="cnpj">
                        <Form.Label column sm={2}>CNPJ: </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" {...register("cnpj", validador.cnpj)} mask="99.999.999/9999-99" onChange={handleChange} />
                            {errors.cnpj && <span className="text-danger">{errors.cnpj.message}</span>}
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

export default EmpresasForm
