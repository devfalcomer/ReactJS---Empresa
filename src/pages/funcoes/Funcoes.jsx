/*
Responsável: Arthur Falcomer

Função: Ao clicar no botão salvar na página de formulário com os campos preenchidos,
está pagina deve mostrar em forma de tabela, os devidos campos que foram preenchidos,
que, também, poderão ser excluidos ou editados.

Última atualização: 02/11/2021
*/

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Box from '../../components/Box';
import { FaPlus, FaEdit, FaRegTrashAlt } from "react-icons/fa";
import { Table } from 'react-bootstrap';
import FuncoesService from '../../services/FuncoesService';

const Funcoes = () => {

    const [funcoes, setFuncoes] = useState([])

    useEffect(() => {
        const funcoes = FuncoesService.getAll()
        setFuncoes(funcoes)
    }, [])

    function excluir(i) {
        if (window.confirm('Deseja realmente excluir o registro?')) {
            FuncoesService.delete(i)
            setFuncoes(FuncoesService.getAll())
        }
    }

    return (
        <>
            <Box title="Funções">
                <Link to="/funcoes/create" className="btn btn-primary mb-3"><FaPlus /> Novo</Link>

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Açoes</th>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Setores_ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {funcoes.map((funcao, i) => (
                            <tr key={i}>
                                <td>
                                    <Link to={'/funcoes/' + i}>
                                        <FaEdit title="Editar" />
                                    </Link>
                                    {' '}
                                    <FaRegTrashAlt className="text-danger" onClick={() => excluir(i)} title="Excluir" />
                                </td>
                                <td>{i}</td>
                                <td>{funcao.nome}</td>
                                <td>{funcao.setores_id}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Box>
        </>
    )
}

export default Funcoes
