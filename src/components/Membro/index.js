import React, { Component } from 'react';

class Membro extends Component{

    // Construtor
    constructor(props){
        super(props);
        this.state = {
            nome: props.nome
        };

        // Criar bind , por causa do evento onClick
        this.entrar = this.entrar.bind(this);
    }

    // Função Entrar
    entrar(nome){
        this.setState({nome: nome})
    }

    render(){
        return(
            <div>
                <h2>Bem-vindo(a) {this.state.nome}</h2>
                <button onClick={() => this.entrar('Matheus')}>
                    Entrar no Sistema
                </button>
                <br></br>
                <button onClick={() => this.setState({nome: ''})}>
                    Sair
                </button>
            </div>
        );
    }
}

export default Membro;
