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
                        <Grid.Row><Header> </Header></Grid.Row>
                        {timeStamps.map((time)=>{
                            return( <Grid.Row><Segment>{time}</Segment></Grid.Row>)
                        })}
                    </Grid.Column>

                    <Dia timeStamps={timeStamps} aulas={aulas.filter(aula=> aula.dia === "Domingo")}/>
                    <Dia timeStamps={timeStamps} aulas={aulas.filter(aula=> aula.dia === "Segunda")}/>
                    <Dia timeStamps={timeStamps} aulas={aulas.filter(aula=> aula.dia === "Terça")}/>
                    <Dia timeStamps={timeStamps} aulas={aulas.filter(aula=> aula.dia === "Quarta")}/>
                    <Dia timeStamps={timeStamps} aulas={aulas.filter(aula=> aula.dia === "Quinta")}/>
                    <Dia timeStamps={timeStamps} aulas={aulas.filter(aula=> aula.dia === "Sexta")}/>
                    <Dia timeStamps={timeStamps} aulas={aulas.filter(aula=> aula.dia === "Sabado")}/>
                </Grid>

            </Segment>

        )
    }
}