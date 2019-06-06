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
                createTurma(obj)
                break;
            case "materias":
                createMateria(obj)
                break;
            case "salas":
                createSala(obj)
                console.log(obj)
                break;
            case "professores":
                console.log(obj)
                Axios.post(`${'https://shaolinbackend.herokuapp.com'}/api/professores`, {nome: obj}).then(()=>{
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
                deleteTurma(obj.id)
                break;
            case "materias":
                deleteMateria(obj.id)
                break;
            case "salas":
                deleteSala(obj.id)
                break;
            case "professores":
                Axios.delete(`${'https://shaolinbackend.herokuapp.com'}/api/professores/${obj.id}`).then(()=>{
                    deleteProfessor(obj.id)
                    console.log("Deletando: Wtf?")
                }).catch((e)=>{
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
                    <Col span={6}> <Display deleteItem ={this.deleteItem} create={this.createNew} type="materias" ctx={materias && materias}> </Display> </Col>
                    <Col span={6}> <Display deleteItem ={this.deleteItem} create={this.createNew} type="salas" ctx={salas && salas}> </Display></Col>
                    <Col span={6}> <Display deleteItem ={this.deleteItem} create={this.createNew} type="turmas" ctx={turmas && turmas}> </Display></Col>
                    <Col span={6}> <Display deleteItem ={this.deleteItem} create={this.createNew} type="professores" ctx={professores && professores}> </Display>  </Col>
                </Row>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    salas: state.salas.locais,
    turmas: state.turmas.turmas,
    materias: state.materias,
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