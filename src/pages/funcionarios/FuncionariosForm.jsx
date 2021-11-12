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
import FuncionariosService from '../../services/FuncionariosService';
import { mask, unMask } from 'remask';
import { useForm } from 'react-hook-form';
import validador from '../../validators/FuncionariosValidator';

const FuncionariosForm = (props) => {

    const { register, handleSubmit, setValue, formState: { errors } } = useForm()

    useEffect(() => {
        const id = props.match.params.id

        if (id) {
            const funcionarios = FuncionariosService.get(id)
            for (let campo in funcionarios) {
                setValue(campo, funcionarios[campo])
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
        id ? FuncionariosService.update(dados, id) : FuncionariosService.create(dados)
        props.history.push('/funcionarios')
    }

    return (
        <>
            <Box title="Funcionários">
                <Form>
                    <Form.Group as={Row} className="mb-3" controlId="nome">
                        <Form.Label column sm={2}>Nome: </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" {...register("nome", validador.nome)} />
                            {errors.nome && <span className="text-danger">{errors.nome.message}</span>}
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="cpf">
                        <Form.Label column sm={2}>CPF: </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" {...register("cpf", validador.cpf)} mask="999.999.999-99" onChange={handleChange}/>
                            {errors.cpf && <span className="text-danger">{errors.cpf.message}</span>}
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="salario">
                        <Form.Label column sm={2}>Salário: </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" {...register("salario", validador.salario)} mask="9999,99" onChange={handleChange} />
                            {errors.salario && <span className="text-danger">{errors.salario.message}</span>}
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="cargahoraria">
                        <Form.Label column sm={2}>Carga Horaria: </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" {...register("cargahoraria", validador.cargahoraria)} />
                            {errors.cargahoraria && <span className="text-danger">{errors.cargahoraria.message}</span>}
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="empresa_id">
                        <Form.Label column sm={2}>Empresa_ID: </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" {...register("empresa_id", validador.empresa_id)} />
                            {errors.empresa_id && <span className="text-danger">{errors.empresa_id.message}</span>}
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="funcao_id">
                        <Form.Label column sm={2}>Função_ID: </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" {...register("funcao_id", validador.funcao_id)} />
                            {errors.funcao_id && <span className="text-danger">{errors.funcao_id.message}</span>}
                        </Col>
                    </Form.Group>

                    <div className="text-center">
                        <Button variant="success" onClick={handleSubmit(enviarDados)}><FaCheck /> Salvar</Button>
                        <Link className="btn btn-danger" to="/empresas"><FaArrowLeft /> Voltar</Link>
                    </div>
                </Form>
            </Box>
        </>
    )
}

export default FuncionariosForm
