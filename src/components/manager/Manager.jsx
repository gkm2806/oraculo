import React, { Component } from "react";
import { Grid, Divider } from "semantic-ui-react";
import {connect} from "react-redux" 
import { bindActionCreators } from "redux";

import Display from "./Display"
import { Creators as TurmaActions } from "../../store/ducks/turmas"
import { Creators as MateriaActions } from "../../store/ducks/materias"
import { Creators as SalaActions } from "../../store/ducks/salas"
import { Creators as professoreAction } from "../../store/ducks/professores"
import { Creators as aulaAction } from "../../store/ducks/aulas"
import Aula from "./Aula"

class Manager extends Component{
    
    createNew = (type, obj) => {
        const {createTurma,createMateria, createSala, createProfessor, createAula} = this.props

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
        const {professores, materias, turmas, salas, settings} = this.props
        return(
            <Grid>
                <Grid.Row>
                    <Grid.Column width={3}> <Display create={this.createNew} type="materias" ctx={materias && materias}> </Display> </Grid.Column>
                    <Grid.Column width={3}> <Display create={this.createNew} type="professores" ctx={professores && professores}> </Display>  </Grid.Column>
                    <Grid.Column width={3}> <Display create={this.createNew} type="salas" ctx={salas && salas}> </Display></Grid.Column>
                    <Grid.Column width={3}> <Display create={this.createNew} type="turmas" ctx={turmas && turmas}> </Display></Grid.Column>
                    <Divider />
                    <Grid.Column width={6}> <Aula dias={settings[0].dias} horarios={settings[0].timeStamps} profs={professores} materias={materias} salas={salas} turmas={turmas}/> </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}

const mapStateToProps = (state) => ({
    salas: state.salas,
    turmas: state.turmas,
    materias: state.materias,
    professores: state.professores,
    settings: state.settings,
    aulas: state.aulas
})

const mapDispatchToProps = dispatch => bindActionCreators({
    ...MateriaActions,
    ...TurmaActions,
    ...SalaActions,
    ...professoreAction,
    ...aulaAction
    }, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(Manager)