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
import FornecedoresService from '../../services/FornecedoresService';

const Fornecedores = () => {

    const [fornecedores, setFornecedores] = useState([])

    useEffect(() => {
        const fornecedores = FornecedoresService.getAll()
        setFornecedores(fornecedores)
    }, [])

    function excluir(i) {

        if (window.confirm('Deseja realmente excluir o registro?')) {
            FornecedoresService.delete(i)
            setFornecedores(FornecedoresService.getAll())
        }
    }

    return (
        <>
            <Box title="Fornecedores Listagem">
                <Link to="/fornecedores/create" className="btn btn-primary mb-3"><FaPlus /> Novo</Link>

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Açoes</th>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Descrição</th>
                            <th>CNPJ</th>
                            <th>Contato</th>
                            <th>Responsável</th>
                        </tr>
                    </thead>
                    <tbody>
                        {fornecedores.map((fornecedor, i) => (
                            <tr key={i}>
                                <td>
                                    <Link to={'/fornecedores/' + i}>
                                        <FaEdit title="Editar" />
                                    </Link>
                                    {' '}
                                    <FaRegTrashAlt className="text-danger" onClick={() => excluir(i)} title="Excluir" />
                                </td>
                                <td>{i}</td>
                                <td>{fornecedor.nome}</td>
                                <td>{fornecedor.descricao}</td>
                                <td>{fornecedor.cnpj}</td>
                                <td>{fornecedor.contato}</td>
                                <td>{fornecedor.responsavel}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Box>
        </>
    )
}

export default Fornecedores
