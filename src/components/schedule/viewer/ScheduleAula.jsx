import React, { Component } from "react";
import { Card, Modal } from "antd"
import { connect } from "react-redux"
import { Creators as aulaAction } from "../../../store/ducks/aulas"
import { bindActionCreators } from "redux";
import axios from "axios"
import "dotenv/config"
import Auth from "../../../utils/Auth"
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

        axios.delete(process.env.API_URL || "http://localhost:4000" + "/api/aulas/" + this.props.aula.id).then(() => {
            this.props.deleteAula(this.props.aula.id)
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
                <Card className="hoverable aula" onClick={this.showModal}>
                    {aula.materia}
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
                    <p>Turma: {aula.turma}</p>
                    <p>Local: {aula.sala}</p>
                    <p>Materia: {aula.materia}</p>
                    <p>Professor: {aula.professor}</p>
                </Modal>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    user: state.user
})
const mapDispatchToProps = dispatch => bindActionCreators({
    ...aulaAction
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ScheduleAula);