
import React, { Component } from "react";
import { Row, Col, Card } from "antd"
import Dia from "./Dia"
import autoSizer from "../../../utils/autoSizer";

export default class ScheduleViewer extends Component {
    componentDidMount() {

    }
    render() {
        const { timeStamps, aulas, search, type } = this.props
        return (
            (search ? (
                <div>
                    <Col span={3} style={{fontSize: autoSizer()}}>
                        <Row><header> Hora </header></Row>
                        {timeStamps.map((time) => {
                            return (<Row key={time} ><Card  className="timeTable" style={{ backgroundColor: "#999", padding: 0 }}>{time}</Card></Row>)
                        })}
                    </Col>

                    <Dia user={this.props.user} type={type} search={search} timeStamps={timeStamps} dNome="Domingo" key="Domingo" aulas={aulas.filter(aula => aula.dia === "Domingo")} />
                    <Dia user={this.props.user} type={type} search={search} timeStamps={timeStamps} dNome="Segunda" key="Segunda" aulas={aulas.filter(aula => aula.dia === "Segunda")} />
                    <Dia user={this.props.user} type={type} search={search} timeStamps={timeStamps} dNome="Terça" key="Terça" aulas={aulas.filter(aula => aula.dia === "Terça")} />
                    <Dia user={this.props.user} type={type} search={search} timeStamps={timeStamps} dNome="Quarta" key="Quarta" aulas={aulas.filter(aula => aula.dia === "Quarta")} />
                    <Dia user={this.props.user} type={type} search={search} timeStamps={timeStamps} dNome="Quinta" key="Quinta" aulas={aulas.filter(aula => aula.dia === "Quinta")} />
                    <Dia user={this.props.user} type={type} search={search} timeStamps={timeStamps} dNome="Sexta" key="Sexta" aulas={aulas.filter(aula => aula.dia === "Sexta")} />
                    <Dia user={this.props.user} type={type} search={search} timeStamps={timeStamps} dNome="Sabado" key="Sabado" aulas={aulas.filter(aula => aula.dia === "Sabado")} />
                </div>

            ) : (
                    <h2> Selecione um contexto no menu acima</h2>
                )
            )
        )
    }
}

const scrollable = {
    overflowY: "scroll",
    height: "40em"
}