import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import {connect} from "react-redux" 
import { bindActionCreators } from "redux";

import Display from "./Display"
import { Creators as TurmaActions } from "../../store/ducks/turmas"
import { Creators as MateriaActions } from "../../store/ducks/materias"
import { Creators as SalaActions } from "../../store/ducks/salas"
import { Creators as professoreAction } from "../../store/ducks/professores"
import Aula from "./Aula"

class Manager extends Component{
    
    createNew = (type, obj) => {
        const {createTurma,createMateria, createSala, createProfessor} = this.props

        switch(type){
            case "turmas":
                createTurma({nome: obj})
                break;
            case "materias":
                createMateria({nome: obj})
                break;
            case "salas":
                createSala({nome:obj})
                break;
            case "professores":
                createProfessor({nome: obj})
                break;
            default:
                alert("Nenhuma action type passada pelo obj ", obj)
                console.log("Nenhuma action type passada pelo obj ", type)
        }
    }
    render(){
        const {professores, materias, turmas, salas} = this.props
        return(
            <Grid>
                <Grid.Row>
                    <Grid.Column width={3}> <Display create={this.createNew} type="materias" ctx={materias && materias}> </Display> </Grid.Column>
                    <Grid.Column width={3}> <Display create={this.createNew} type="professores" ctx={professores && professores}> </Display>  </Grid.Column>
                    <Grid.Column width={3}> <Display create={this.createNew} type="salas" ctx={salas && salas}> </Display></Grid.Column>
                    <Grid.Column width={3}> <Display create={this.createNew} type="turmas" ctx={turmas && turmas}> </Display></Grid.Column>
                    <Grid.Column width={3}> <Aula profs={professores} materias={materias} salas={salas} turmas={turmas}/> </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}

const mapStateToProps = (state) => ({
    salas: state.salas,
    turmas: state.turmas,
    materias: state.materias,
    professores: state.professores
})

const mapDispatchToProps = dispatch => bindActionCreators({
    ...MateriaActions,
    ...TurmaActions,
    ...SalaActions,
    ...professoreAction
    }, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(Manager)