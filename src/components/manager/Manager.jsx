import React, { Component } from "react";
import { connect } from "react-redux"
import { bindActionCreators } from "redux";
import { Row, Col } from "antd"
import Display from "./Display"
import { Creators as TurmaActions } from "../../store/ducks/turmas"
import { Creators as MateriaActions } from "../../store/ducks/materias"
import { Creators as SalaActions } from "../../store/ducks/salas"
import { Creators as professoreAction } from "../../store/ducks/professores"
import Axios from "axios";

class Manager extends Component {

    createNew = (type, obj) => {
        const { createTurma, createMateria, createSala, createProfessor } = this.props
        switch (type) {
            case "turmas":
                Axios.post(`${process.env.REACT_APP_API_URL}/api/turmas`, { nome: obj }).then(() => {
                    createTurma(obj)
                })
                break;
            case "materias":
                Axios.post(`${process.env.REACT_APP_API_URL}/api/materias`, { nome: obj }).then(() => {
                    createMateria(obj)
                })
                break;
            case "salas":
                Axios.post(`${process.env.REACT_APP_API_URL}/api/salas`, { nome: obj }).then(() => {
                    createSala(obj)
                })
                break;
            case "professores":
                Axios.post(`${process.env.REACT_APP_API_URL}/api/professores`, { nome: obj }).then(() => {
                    createProfessor(obj)
                })
                break;
            default:
                alert("Nenhuma action type passada pelo obj ")
                console.log("Nenhuma action type passada pelo obj ", type)
        }
    }
    deleteItem = (type, obj) => {
        console.log(obj, type)
        const { deleteTurma, deleteMateria, deleteSala, deleteProfessor } = this.props
        switch (type) {
            case "turmas":
                Axios.delete(`${process.env.REACT_APP_API_URL}/api/turmas/${obj._id}`).then(() => {
                    deleteTurma(obj.id)
                }).catch((e) => {
                    console.log("Delete error: ", e)
                })
                break;
            case "materias":
                Axios.delete(`${process.env.REACT_APP_API_URL}/api/materias/${obj._id}`).then(() => {
                    deleteMateria(obj.id)
                }).catch((e) => {
                    console.log("Delete error: ", e)
                })
                break;
            case "salas":
                Axios.delete(`${process.env.REACT_APP_API_URL}/api/salas/${obj._id}`).then(() => {
                    deleteSala(obj.id)
                }).catch((e) => {
                    console.log("Delete error: ", e)
                })
                break;
            case "professores":
                Axios.delete(`${process.env.REACT_APP_API_URL}/api/professores/${obj._id}`).then(() => {
                    deleteProfessor(obj.id)
                    console.log("Deletando: Wtf?")
                }).catch((e) => {
                    console.log("Delete error: ", e)
                })
                break;
            default:
                alert("Nenhuma action type passada pelo obj ")
                console.log("Nenhuma action type passada pelo obj ", type)
        }
    }
    render() {
        const { professores, materias, turmas, salas } = this.props
        console.log(salas)
        console.log(professores)
        return (
            <div className="main">
                <Row>
                    <Col span={6}> <Display deleteItem={this.deleteItem} create={this.createNew} type="materias" ctx={materias && materias}> </Display> </Col>
                    <Col span={6}> <Display deleteItem={this.deleteItem} create={this.createNew} type="salas" ctx={salas && salas}> </Display></Col>
                    <Col span={6}> <Display deleteItem={this.deleteItem} create={this.createNew} type="turmas" ctx={turmas && turmas}> </Display></Col>
                    <Col span={6}> <Display deleteItem={this.deleteItem} create={this.createNew} type="professores" ctx={professores && professores}> </Display>  </Col>
                </Row>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    salas: state.salas.locais,
    turmas: state.turmas.turmas,
    materias: state.materias.materias,
    professores: state.professores.professores,
    settings: state.settings,
    aulas: state.aulas.aulas
})

const mapDispatchToProps = dispatch => bindActionCreators({
    ...MateriaActions,
    ...TurmaActions,
    ...SalaActions,
    ...professoreAction
}, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(Manager)