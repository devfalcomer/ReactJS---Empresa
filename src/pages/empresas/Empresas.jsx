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
import EmpresaService from '../../services/EmpresaService';

const Empresas = () => {

    const [empresas, setEmpresas] = useState([])

    useEffect(() => {
        const empresas = EmpresaService.getAll()
        setEmpresas(empresas)
    }, [])

    function excluir(i) {

        if (window.confirm('Deseja realmente excluir o registro?')) {
            EmpresaService.delete(i)
            setEmpresas(EmpresaService.getAll())
        }
    }

    return (
        <>
            <Box title="Empresas Listagem">
                <Link to="/empresas/create" className="btn btn-primary mb-3"><FaPlus /> Novo</Link>

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Açoes</th>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Responsável</th>
                            <th>CNPJ</th>
                        </tr>
                    </thead>
                    <tbody>
                        {empresas.map((empresa, i) => (
                            <tr key={i}>
                                <td>
                                    <Link to={'/empresas/' + i}>
                                        <FaEdit title="Editar" />
                                    </Link>
                                    {' '}
                                    <FaRegTrashAlt className="text-danger" onClick={() => excluir(i)} title="Excluir" />
                                </td>
                                <td>{i}</td>
                                <td>{empresa.nome}</td>
                                <td>{empresa.responsavel}</td>
                                <td>{empresa.cnpj}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Box>
        </>
    )
}

export default Empresas
