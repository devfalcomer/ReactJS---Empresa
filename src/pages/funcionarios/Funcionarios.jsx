/*
Responsável: Arthur Falcomer

Função: Ao clicar no botão salvar na página de formulário com os campos preenchidos,
está pagina deve mostrar em forma de tabela, os devidos campos que foram preenchidos,
que, também, poderão ser excluidos ou editados.

Última atualização: 02/11/2021
*/

import React, { useEffect, useState } from 'react';
import Box from '../../components/Box';
import { FaPlus, FaEdit, FaRegTrashAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import FuncionariosService from '../../services/FuncionariosService';

const Funcionarios = () => {

    const [funcionarios, setFuncionarios] = useState([])

    useEffect(() => {
        const funcionarios = FuncionariosService.getAll()
        setFuncionarios(funcionarios)
    }, [])

    function excluir(i) {

        if (window.confirm('Deseja realmente excluir o registro?')) {
            FuncionariosService.delete(i)
            setFuncionarios(FuncionariosService.getAll())
        }
    }

    return (
        <>
            <Box title="Funcionários">
                <Link to="/funcionarios/create" className="btn btn-primary mb-3"><FaPlus /> Novo</Link>

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Açoes</th>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>CPF</th>
                            <th>Sálario</th>
                            <th>Carga Horaria</th>
                            <th>Empresa_ID</th>
                            <th>Função_ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {funcionarios.map((funcionario, i) => (
                            <tr key={i}>
                                <td>
                                    <Link to={'/funcionarios/' + i}>
                                        <FaEdit title="Editar" />
                                    </Link>
                                    {' '}
                                    <FaRegTrashAlt className="text-danger" onClick={() => excluir(i)} title="Excluir" />
                                </td>
                                <td>{i}</td>
                                <td>{funcionario.nome}</td>
                                <td>{funcionario.cpf}</td>
                                <td>{funcionario.salario}</td>
                                <td>{funcionario.cargahoraria}</td>
                                <td>{funcionario.empresa_id}</td>
                                <td>{funcionario.funcao_id}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Box>
        </>
    )
}

export default Funcionarios
