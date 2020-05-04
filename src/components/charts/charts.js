import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import { Tabs } from '@material-ui/core';
import { Tab } from '@material-ui/core';
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
import './charts.css';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

const Charts = () => (



    <div id="" style={{textAlign: "center"}}>
        <div id="titulo_gestao" >
            <Typography variant="h5" >PAINEL DE GESTÃO</Typography>
        </div>

        <Grid container >

            <Grid item xs={12} id="paper_charts" >
                <Grid container spacing={3}>

                    <Grid item xs={4}>
                        <div id="div_card">

                            <Grid container style={{ textAlight: "center" }}>
                                <Grid item xs={12}>
                                    <Card >
                                        <Paper id="n_mdk">
                                            <Typography variant="h5"> 4 MDKs</Typography>
                                        </Paper>

                                    </Card>


                                </Grid>
                                <Grid item xs={6}>
                                    <Card style={{ height: "100px" }} id="card_prazo">

                                        <Paper id="no_prazo">
                                            <Typography>NO PRAZO</Typography>
                                        </Paper>
                                        <Divider />
                                        <CardContent>


                                            <Typography variant="h4">
                                                2
                                        </Typography>
                                        </CardContent>


                                    </Card>
                                </Grid>
                                <Grid item xs={6}>
                                    <Card style={{ height: "100px" }} id="card_prazo">
                                        <Paper id="atrazo" >
                                            <Typography > ATRASO/SEM DATA</Typography>
                                        </Paper>
                                        <Divider />
                                        <CardContent>


                                            <Typography variant="h4">
                                                2
                                        </Typography>
                                        </CardContent>


                                    </Card>
                                </Grid>
                            </Grid>

                        </div>




                    </Grid>
                    <Grid item xs={4}>
                        <Paper style={{ height: "130px", fontFamily: 'Roboto' }}>Estregas da semana</Paper>
                    </Grid>
                    <Grid item xs={2}>

                        <Grid container style={{ textAlight: "center" }}>
                            <Grid item xs={12}>
                                <Card style={{ height: "130px" }} id="card_prazo">
                                    <Paper style={{ backgroundColor: "#1976d2", color: "#FFFFFF" }} >
                                        <Typography variant="h5" > Planejado semana</Typography>
                                    </Paper>
                                    <Divider />
                                    <CardContent>


                                        <Typography variant="h4">
                                            2
                                        </Typography>
                                    </CardContent>


                                </Card>

                            </Grid>
                        </Grid>

                    </Grid>
                    <Grid item xs={2}>

                        <Grid container style={{ textAlight: "center" }}>
                            <Grid item xs={12}>
                                <Card style={{ height: "130px" }} id="card_prazo">
                                    <Paper style={{ backgroundColor: "#008a02", color: "#FFFFFF" }} >
                                        <Typography variant="h5"> % Realizado Semana</Typography>
                                    </Paper>
                                    <Divider />
                                    <CardContent>


                                        <Typography variant="h4">
                                            0%
                                        </Typography>
                                    </CardContent>


                                </Card>

                            </Grid>
                        </Grid>

                    </Grid>

                </Grid>
            </Grid>
        </Grid>




    </div >


);

export default Charts;




