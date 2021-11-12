import React from 'react';
import { Container } from 'react-bootstrap';
import { Switch, Route } from 'react-router-dom';
import Empresas from './pages/empresas/Empresas';
import EmpresasForm from './pages/empresas/EmpresasForm';
import Fornecedores from './pages/fornecedores/Fornecedores';
import FornecedoresForm from './pages/fornecedores/FornecedoresForm';
import FornecedoresEmp from './pages/fornecedores_emp/FornecedoresEmp';
import FornecedoresEmpForm from './pages/fornecedores_emp/FornecedoresEmpForm';
import Funcionarios from './pages/funcionarios/Funcionarios';
import FuncionariosForm from './pages/funcionarios/FuncionariosForm';
import Funcoes from './pages/funcoes/Funcoes';
import FuncoesForm from './pages/funcoes/FuncoesForm';
import Setores from './pages/setores/Setores';
import SetoresForm from './pages/setores/SetoresForm';

const Rotas = () => {
    return (
        <>
           <Container className="mt-3">
               <Switch>
                   <Route exact path="/" component={Empresas}/>
                   <Route exact path="/empresas" component={Empresas}/>
                   <Route exact path="/empresas/create" component={EmpresasForm}/>
                   <Route exact path="/empresas/:id" component={EmpresasForm}/>
                   <Route exact path="/fornecedores" component={Fornecedores}/>
                   <Route exact path="/fornecedores/create" component={FornecedoresForm}/>
                   <Route exact path="/fornecedores/:id" component={FornecedoresForm}/>
                   <Route exact path="/fornecedoresemp" component={FornecedoresEmp}/>
                   <Route exact path="/fornecedoresemp/create" component={FornecedoresEmpForm}/>
                   <Route exact path="/fornecedoresemp/:id" component={FornecedoresEmpForm}/>
                   <Route exact path="/funcionarios" component={Funcionarios}/>
                   <Route exact path="/funcionarios/create" component={FuncionariosForm}/>
                   <Route exact path="/funcionarios/:id" component={FuncionariosForm}/>
                   <Route exact path="/funcoes" component={Funcoes}/>
                   <Route exact path="/funcoes/create" component={FuncoesForm}/>
                   <Route exact path="/funcoes/:id" component={FuncoesForm}/>
                   <Route exact path="/setores" component={Setores}/>
                   <Route exact path="/setores/create" component={SetoresForm}/>
                   <Route exact path="/setores/:id" component={SetoresForm}/>
                </Switch> 
            </Container> 
        </>
    )
}

export default Rotas
