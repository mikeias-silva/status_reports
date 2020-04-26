import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Link } from "react-router-dom";
import './index.css';


class DeletarMDK extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dados_mdk: {},
            redirect: false
        }
    }
    componentDidMount() {
        const { id } = this.props.match.params;

        fetch(`http://localhost:3003/sistema/dados_mdk/${id}`)
            .then(data => {
                data.json().then(data => {
                    this.setState({ dados_mdk: data });
                })
            })
    }

    render() {
        const { redirect } = this.state;

        if (redirect) {
            return <Redirect to="/mdks" />
        } else {
            return (
                <fieldset>
                    <legend>Deletar MDK</legend>
                    <div>
                        <label htmlFor="titulo">{this.state.dados_mdk.titulo}</label>
                        <p>Tem certeza que deseja apagar?</p>

                        <button onClick={this.handleClick}>Remover</button>

                        <Link to={`/mdks`}>Voltar</Link>
                    </div>
                </fieldset>
            )
        }
    }

    handleClick = event => {
        const { id } = this.props.match.params;
        fetch(`http://localhost:3003/sistema/dados_mdk/${id}`, {
            method: "delete"
            
        })
            .then(data => {
                if (data.ok) {
                    this.setState({ redirect: true })
                }
            })

        event.preventDefault();
    }
}

export default DeletarMDK;
