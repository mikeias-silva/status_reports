import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import './index.css';

class CriarMDK extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dados_mdk: {
                titulo: "",
                fase: ""
            },
            redirect: false
        }
    }

    render() {
        const { redirect } = this.state;

        if (redirect) {
            return <Redirect to="/mdks" />;
        } else {
            return (
                <form onSubmit={this.handleSubmit}>
                    <fieldset>
                        <legend>Criar MDK</legend>
                        <div className="mdk-insert">
                            <label htmlfor="titulo">Titulo</label>
                            <input
                                type="text" id="titulo" name="titulo" placeholder="Titulo da MDK" minLength="3" maxLength="100"
                                value={this.state.dados_mdk.titulo} onChange={this.handleImputChange}
                            />
                        </div>
                        <div className="mdk-insert">
                            <label htmlfor="fase"></label>
                            <input
                                type="text" id="fase" name="fase" placeholder="Fase da MDK" 
                                value={this.state.dados_mdk.fase} onChange={this.handleImputChange}
                            />
                        </div>
                    </fieldset>

                </form>
            )
        }
    }

    handleImputChange = event => {
        const target = event.target;
        const name = target.name;
        const value = target.value;


        this.setState(prevState => ({
            dados_mdk: {...prevState.dados_mdk, [name]: value}
        }))
    }
}