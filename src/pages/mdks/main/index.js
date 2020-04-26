import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dados_mdk: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:3003/sistema/dados_mdk', {mode: 'cors'})
            .then(dados_mdk =>
                dados_mdk.json().then(dados_mdk => this.setState({ dados_mdk }))
            )
            
        
    }

    render() {
        const { dados_mdk } = this.state;

        return dados_mdk.map((dados_mdk, index) => (
            <div className="mdk-list">
                <div key={index}>
                    <h4>{dados_mdk.titulo}</h4>
                    
                    <article>
                        <h5>{dados_mdk.fase}</h5>
                        <Link to={`/mdks/${dados_mdk.id}`}>Detalhes</Link>
                    </article>
                </div>
            </div>
        ))
    }
}


