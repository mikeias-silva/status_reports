import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

import { Link } from 'react-router-dom';
import { Paper } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core'
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import moment from 'moment'; 

import './index.css';


var now = moment().format();


var currentDate = moment().format("DD/MM/YYYY");

const Teste = () => {
    return (<div>
        TESTE Teste
        <div>OUTRO TESE OUTRA DIV</div>
    </div>
    )
}

const Comercial = props => {

    const dados_mdk = props.dados_mdk.map((dados_mdk, index) => {

        if (dados_mdk.fase == '2 - Comercial') {
            return (
                <TableRow>

                    <TableCell component="th" scope="row">
                        <Typography variant="headlide" color="inherit" align="centered" centered>
                            MDK2023 - Gestão real a vista - Manutenção

                        </Typography>
                    </TableCell>
                    <TableCell>
                        <Typography variant="headlide" color="inherit">
                            Via Lácteos
                        </Typography>
                    </TableCell>
                    <TableCell>

                        <Typography variant="headlide" color="inherit">30/04</Typography>

                    </TableCell>

                    <TableCell style={{ backgroundColor: "#388e3c", textAlign: "center", color: "#FFFFFF" }}>
                        0%
                                    </TableCell>
                </TableRow>


            );
        }
    });

    return (<TableBody>
        {dados_mdk}
    </TableBody>
    );
}

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: "#5a6d8a",
        color: theme.palette.common.white,
    },
    body: {
        fontSize: "16px",
        fontFamily: 'Roboto',
    },
}))(TableCell);

const Producao = props => {

    const dados_mdk = props.dados_mdk.map((dados_mdk, index) => {

        if (dados_mdk.fase == '4.2 - Producao - Em Execucao') {
            return (
                <TableRow>

                    <TableCell component="th" scope="row">
                        <Typography variant="headlide" color="inherit" align="centered" centered>
                            teste

                        </Typography>
                    </TableCell>
                    <TableCell>
                        <Typography variant="headlide" color="inherit">
                            Cliente
                        </Typography>
                    </TableCell>
                    <TableCell>
                        <Link to={`/mdks/${dados_mdk.id}`}>
                            <Typography variant="headlide" color="inherit">Data</Typography>
                        </Link>
                    </TableCell>
                    <TableCell>
                        Obs
                                    </TableCell>

                </TableRow>


            );
        }
    });

    return (<TableBody>
        {dados_mdk}
    </TableBody>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: '#ff0000',
    },
}));
export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dados_mdk: []
        }
    }
    componentDidMount() {
        fetch('http://localhost:3003/sistema/dados_mdk', { mode: 'cors' })
            .then(dados_mdk =>
                dados_mdk.json().then(dados_mdk => this.setState({ dados_mdk }))
            )


    }


    render() {


        const { dados_mdk } = this.state;

        return (
            <div>
                <div>
                    <div id="card_header" style={{ textAlign: "center" }}>
                        <Typography variant="h5">EVOLUÇÃO DA SEMANA</Typography>
                    </div>

                    < Container id="container">
                        <TableContainer item xs={4} id="tabela" component={Paper} container item xs={12} spacing={3}>
                            <Table size="medium" aria-label="customized table">
                                <TableHead>
                                    <TableRow>

                                        <StyledTableCell>
                                            Titulo
                                    </StyledTableCell>
                                        <StyledTableCell>
                                            Cliente
                                    </StyledTableCell>
                                        <StyledTableCell>
                                            Data
                                    </StyledTableCell>

                                        <StyledTableCell style={{ textAlign: "center" }}>
                                            % de entrega
                                    </StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                <Comercial dados_mdk={dados_mdk} />
                            </Table>
                        </TableContainer>
                    </Container>
                </div>
                <div>
                    <div id="card_header" style={{ textAlign: "center" }}>
                        <Typography variant="h5">PROXIMOS PASSOS/PONTOS DE ATENÇÃO</Typography>
                    </div>
                    < Container container id="paper_prox">
                        <TableContainer   id="tabela" component={Paper}  item xs={12} spacing={3}>
                            <Table id="" size="medium" aria-label="customized table">
                                <TableHead>
                                    <TableRow>

                                        <StyledTableCell>
                                            Titulo
                                    </StyledTableCell>
                                        <StyledTableCell>
                                            Cliente
                                    </StyledTableCell>
                                        <StyledTableCell style={{ textAlign: "center" }}>
                                            Observação
                                    </StyledTableCell>

                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>

                                        <TableCell component="th" scope="row">
                                            <Typography variant="headlide" color="inherit">
                                                MDK2185 - Sou KMM

                                            </Typography>
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            <Typography variant="headlide" color="inherit">
                                                KMM

                                            </Typography>
                                        </TableCell>
                                        <TableCell component="th" scope="row" style={{ textAlign: "center" }}>
                                            <Typography variant="headlide" color="inherit">
                                                Data fim prevista 15/01, atrasado aguardando novo prazo

                                            </Typography>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            <Typography variant="headlide" color="inherit">
                                                MDK2213 - Novo Ponto de SM Brasilrisk

                                            </Typography>
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            <Typography variant="headlide" color="inherit">
                                                Cargosoft

                                            </Typography>
                                        </TableCell>
                                        <TableCell component="th" scope="row" style={{ textAlign: "center" }}>
                                            <Typography variant="headlide" color="inherit" >
                                                Data fim prevista 10/04, atrasado aguardando novo prazo
                                            </Typography>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Container>
                </div>
            </div>

        )

    }


}

