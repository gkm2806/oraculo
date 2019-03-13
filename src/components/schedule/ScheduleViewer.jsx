import React, { Component } from "react";
import { Segment, Grid, Header } from "semantic-ui-react";

import Dia from "./Dia"

export default class ScheduleViewer extends Component {
    componentDidMount() {

    }
    render() {
        const {timeStamps, aulas} = this.props
        return (

            <Segment id="alo">
                <Grid style={{ display: "flex" }}>
                    <Grid.Column width={2} >
                        <Grid.Row><Header> Hora </Header></Grid.Row>
                        {timeStamps.map((time)=>{
                            return( <Grid.Row><Segment>{time}</Segment></Grid.Row>)
                        })}
                    </Grid.Column>

                    <Dia timeStamps={timeStamps} dNome="Domingo" aulas={aulas.filter(aula=> aula.dia === "Domingo")}/>
                    <Dia timeStamps={timeStamps} dNome="Segunda" aulas={aulas.filter(aula=> aula.dia === "Segunda")}/>
                    <Dia timeStamps={timeStamps} dNome="Terça" aulas={aulas.filter(aula=> aula.dia === "Terça")}/>
                    <Dia timeStamps={timeStamps} dNome="Quarta" aulas={aulas.filter(aula=> aula.dia === "Quarta")}/>
                    <Dia timeStamps={timeStamps} dNome="Quinta" aulas={aulas.filter(aula=> aula.dia === "Quinta")}/>
                    <Dia timeStamps={timeStamps} dNome="Sexta" aulas={aulas.filter(aula=> aula.dia === "Sexta")}/>
                    <Dia timeStamps={timeStamps} dNome="Sabado" aulas={aulas.filter(aula=> aula.dia === "Sabado")}/>
                </Grid>

            </Segment>

        )
    }
}