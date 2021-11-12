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
import SetorService from '../../services/SetorService';

const Setores = () => {

    const [setores, setSetores] = useState([])

    useEffect(() => {
        const setores = SetorService.getAll()
        setSetores(setores)
    }, [])

    function excluir(i) {
        if (window.confirm('Deseja realmente excluir o registro?')) {
            SetorService.delete(i)
            setSetores(SetorService.getAll())
        }
    }

    return (
        <>
            <Box title="Setores Listagem">
                <Link to="/setores/create" className="btn btn-primary mb-3"><FaPlus /> Novo</Link>

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Açoes</th>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Empresa_ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {setores.map((setor, i) => (
                            <tr key={i}>
                                <td>
                                    <Link to={'/setores/' + i}>
                                        <FaEdit title="Editar" />
                                    </Link>
                                    {' '}
                                    <FaRegTrashAlt className="text-danger" onClick={() => excluir(i)} title="Excluir" />
                                </td>
                                <td>{i}</td>
                                <td>{setor.nome}</td>
                                <td>{setor.empresa_id}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Box>
        </>
    )
}

export default Setores
