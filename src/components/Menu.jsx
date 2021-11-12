import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Menu = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#">Projeto Empresas</Navbar.Brand>
                    <Nav className="me-auto">
                        <Link className="nav-link" to="/empresas">Empresas</Link>
                        <Link className="nav-link" to="/fornecedores">Fornecedores</Link>
                        <Link className="nav-link" to="/fornecedoresemp">Fornecedores_Empresas</Link>
                        <Link className="nav-link" to="/funcionarios">Funcionários</Link>
                        <Link className="nav-link" to="/funcoes">Funções</Link>
                        <Link className="nav-link" to="/setores">Setores</Link>
                    </Nav>
            </Navbar>
        </>
    )
}

export default Menu
