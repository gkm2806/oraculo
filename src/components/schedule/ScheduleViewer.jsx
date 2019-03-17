
import React, { Component } from "react";
import {Row, Col, Card} from "antd"

import Dia from "./Dia"

export default class ScheduleViewer extends Component {
    componentDidMount() {

    }
    render() {
        const {timeStamps, aulas, search, type} = this.props
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

                    <Dia type={type} search={search} timeStamps={timeStamps} dNome="Domingo" aulas={aulas.filter(aula=> aula.dia === "Domingo")}/>
                    <Dia type={type} search={search} timeStamps={timeStamps} dNome="Segunda" aulas={aulas.filter(aula=> aula.dia === "Segunda")}/>
                    <Dia type={type} search={search} timeStamps={timeStamps} dNome="Terça" aulas={aulas.filter(aula=> aula.dia === "Terça")}/>
                    <Dia type={type} search={search} timeStamps={timeStamps} dNome="Quarta" aulas={aulas.filter(aula=> aula.dia === "Quarta")}/>
                    <Dia type={type} search={search} timeStamps={timeStamps} dNome="Quinta" aulas={aulas.filter(aula=> aula.dia === "Quinta")}/>
                    <Dia type={type} search={search} timeStamps={timeStamps} dNome="Sexta" aulas={aulas.filter(aula=> aula.dia === "Sexta")}/>
                    <Dia type={type} search={search} timeStamps={timeStamps} dNome="Sabado" aulas={aulas.filter(aula=> aula.dia === "Sabado")}/>
                </div>

            </div>
            ):(
                <h2> Selecione um contexto no menu ao lado</h2>
            ))
        )
    }
}