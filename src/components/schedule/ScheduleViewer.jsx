//@ts-check
import React, { Component } from "react";
import {Row, Col, Card} from "antd"

import Dia from "./Dia"

export default class ScheduleViewer extends Component {
    componentDidMount() {

    }
    render() {
        const {timeStamps, aulas, search} = this.props
        return (
            (search ?(
            <div id="alo">
                <div>
                    <Col span={3} >
                        <Row><header> Hora </header></Row>
                        {timeStamps.map((time)=>{
                            return( <Row><Card style={{backgroundColor: "#999", padding:0}}>{time}</Card></Row>)
                        })}
                    </Col>

                    <Dia timeStamps={timeStamps} dNome="Domingo" aulas={aulas.filter(aula=> aula.dia === "Domingo")}/>
                    <Dia timeStamps={timeStamps} dNome="Segunda" aulas={aulas.filter(aula=> aula.dia === "Segunda")}/>
                    <Dia timeStamps={timeStamps} dNome="Terça" aulas={aulas.filter(aula=> aula.dia === "Terça")}/>
                    <Dia timeStamps={timeStamps} dNome="Quarta" aulas={aulas.filter(aula=> aula.dia === "Quarta")}/>
                    <Dia timeStamps={timeStamps} dNome="Quinta" aulas={aulas.filter(aula=> aula.dia === "Quinta")}/>
                    <Dia timeStamps={timeStamps} dNome="Sexta" aulas={aulas.filter(aula=> aula.dia === "Sexta")}/>
                    <Dia timeStamps={timeStamps} dNome="Sabado" aulas={aulas.filter(aula=> aula.dia === "Sabado")}/>
                </div>

            </div>
            ):(
                <h2> Selecione um Contexto no menu ao lado</h2>
            ))
        )
    }
}