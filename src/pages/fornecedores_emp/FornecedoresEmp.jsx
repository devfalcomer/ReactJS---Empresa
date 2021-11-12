/*
Responsável: Arthur Falcomer

Função: Ao clicar no botão salvar na página de formulário com os campos preenchidos,
está pagina deve mostrar em forma de tabela, os devidos campos que foram preenchidos,
que, também, poderão ser excluidos ou editados.

Última atualização: 02/11/2021
*/

import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Box from '../../components/Box';
import { FaPlus, FaEdit, FaRegTrashAlt } from "react-icons/fa";
import FornecedoresEmpService from '../../services/FornecedoresEmpService';

const FornecedoresEmp = () => {

    const [fornecedoresemp, setFornecedoresEmp] = useState([])

    useEffect(() => {
        const fornecedoresemp = FornecedoresEmpService.getAll()
        setFornecedoresEmp(fornecedoresemp)
    }, [])

    function excluir(i) {
        if (window.confirm('Deseja realmente excluir o registro?')) {
            FornecedoresEmpService.delete(i)
            setFornecedoresEmp(FornecedoresEmpService.getAll())
        }
    }

    return (
        <>
            <Box title="Fornecedores_Empresas">
                <Link to="/fornecedoresemp/create" className="btn btn-primary mb-3"><FaPlus /> Novo</Link>

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Ações</th>
                            <th>ID</th>
                            <th>Empresa_id</th>
                            <th>Fornecedores_id</th>
                        </tr>
                    </thead>
                    <tbody>
                        {fornecedoresemp.map((fornecedoremp, i) => (
                            <tr key={i}>
                                <td>
                                    <Link to={'/fornecedoresemp/' + i}>
                                        <FaEdit title="Editar" />
                                    </Link>
                                    {' '}
                                    <FaRegTrashAlt className="text-danger" onClick={() => excluir(i)} title="Excluir" />
                                </td>
                                <td>{i}</td>
                                <td>{fornecedoremp.empresa_id}</td>
                                <td>{fornecedoremp.fornecedores_id}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Box>
        </>
    )
}

export default FornecedoresEmp
