import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import moment from 'moment';

export default class Main extends Component {


    state = {
        dados_mdk: {}
    };

    componentDidMount() {
        const { id } = this.props.match.params;

        fetch(`http://localhost:3003/sistema/dados_mdk/${id}`)
            .then(dados_mdk =>
                dados_mdk.json().then(dados_mdk => this.setState({ dados_mdk }))
            )


    }

    render() {
        const { dados_mdk } = this.state;

        return (
            <div className="usuariio-info">
                <h2>Status Report</h2>
                <h4>{dados_mdk.titulo}</h4>
                <h4>{dados_mdk.fase}</h4>
        {/* <h4>{moment(dados_mdk.dataFim).format('DD/MM')}</h4>
            Trecho exemplo para conversão de formato de data
        */}
                <h1></h1>
                <div>
                    <Link to={`/mdks`}>Voltar</Link >

                </div>
                <div>
                    <Link to={`/editarMdk/${dados_mdk.id}`}>Editar</Link>

                </div>
                <div>
                    <Link to={`/deletarMdk/${dados_mdk.id}`}>Deletar</Link>

                </div>
            </div>



        )
    }
}