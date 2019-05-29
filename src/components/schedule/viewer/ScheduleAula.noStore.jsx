import React, { Component } from "react";
import { Card, Modal } from "antd"

class ScheduleAula extends Component {
    state = { visible: false }

    showModal = () => {
        this.setState({
            visible: true,
        });
    }

    handleOk = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }

    handleCancel = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });

    }
    render() {
        const { aula } = this.props
        return (
            <div>
                <Card style={{backgroundColor: `${aula.color}` }} className="hoverable aula scheduleCard" onClick={this.showModal}>
                    <CardInside aula={aula} />
                </Card>
                <Modal
                    title={aula.materia}
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    okText="apagar"
                    okType='danger'
                >
                    <p>Inicio: {aula.horaInicio}</p>
                    <p>Fim: {aula.horaFim} </p>
                    <p>Materia: {aula.materia}</p>
                    <p style={this.checkConflito("turma")}>Turma: {aula.turma}</p>
                    <p style={this.checkConflito("local")}>Local: {aula.sala}</p>
                    <p style={this.checkConflito("professor")}>Professor: {aula.professor}</p>
                </Modal>
            </div>
        )
    }
    checkConflito = (param) => {
        if(param == this.props.conflito){
            return({backgroundColor: 'red', color:'white'})
        }
    }
}

const CardInside = ({aula}) => {
    return (
        <div style={{display:"flex"}}>
            <div style={{ fontSize: "1rem", width: "80%", height:"100%" }}>
                {aula.materia}
            </div>
            <div style={{ float: "right", fontSize: "0.6rem",width: "30%", height:"100%", lineHeight: "1rem" }}>
                | {aula.sala} <br />
                | {aula.turma}
            </div>
        </div>
    )
}
export default ScheduleAula