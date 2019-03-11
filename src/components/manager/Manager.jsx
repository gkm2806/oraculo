import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import {connect} from "react-redux" 
import { bindActionCreators } from "redux";

import Display from "./Display"
import { Creators as TurmaActions } from "../../store/ducks/turmas"
import { Creators as MateriaActions } from "../../store/ducks/materias"


class Manager extends Component{
    
    createNew = (type, obj) => {
        const {createTurma,createMateria} = this.props

        switch(type){
            case "turmas":
                createTurma({nome: obj})
                break;
            
            case "materias":
                createMateria({nome: obj})
                break;
            default:
                alert("Nenhuma action type passada pelo obj ", obj)
        }
    }
    render(){
        console.log(TurmaActions, this.props.createTurma);
        const {professores, materias} = this.props
        return(
            <Grid>
                <Grid.Row>
                    <Grid.Column width={4}> <Display create={this.createNew} type="materias" ctx={materias && materias}> </Display> </Grid.Column>
                    <Grid.Column width={4}> <Display create={this.createNew} type="professores" ctx={professores && professores}> </Display>  </Grid.Column>
                    <Grid.Column width={4}> Alo</Grid.Column>
                    <Grid.Column width={4}> Alo</Grid.Column>
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

const mapDispatchToProps = dispatch => bindActionCreators(MateriaActions, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(Manager)