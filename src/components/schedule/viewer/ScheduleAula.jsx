import React, { Component } from "react";
import { Card, Modal, Descriptions } from "antd"

import { connect } from "react-redux"
import { Creators as aulaAction } from "../../../store/ducks/aulas"
import { bindActionCreators } from "redux";
import axios from "axios"

import Auth from "../../../utils/Auth"

class ScheduleAula extends Component {
    state = { visible: false }

    showModal = () => {
        this.setState({
            visible: true,
        })

    }

    handleOk = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });

        axios.delete(`${process.env.REACT_APP_API_URL}/api/aulas/${this.props.aula._id}`).then(() => {
            this.props.deleteAula(this.props.aula._id)
            console.log(this.props.aula._id)
            console.log("WTFFF")
        }).catch((e) => {
            console.log(e);
        })


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
                <Card style={{ backgroundColor: `${aula.color}` }} className="hoverable aula scheduleCard" onClick={this.showModal}>
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
                    <p>Materia: {aula.materia}</p>
                    <p>Horario: {aula.horaInicio} - {aula.horaFim}</p>
                    <p>Turma: {aula.turma}</p>
                    <p>Local: {aula.sala}</p>
                    <p>Professor: {aula.professor}</p>
                </Modal>
            </div>
        )
    }
}

const CardInside = ({ aula }) => {
    return (
        <div style={{ display: "flex" }}>
            <div style={{ fontSize: "1rem", width: "80%", height: "100%" }}>
                {aula.materia}
            </div>
            <div className="sideCard" style={{ float: "right", fontSize: "0.6rem", width: "30%", height: "100%", lineHeight: "1rem" }}>
                | {aula.sala} <br />
                | {aula.turma}
            </div>
        </div>
    )
}
const mapStateToProps = (state) => ({
    user: state.user
})
const mapDispatchToProps = dispatch => bindActionCreators({
    ...aulaAction
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ScheduleAula);