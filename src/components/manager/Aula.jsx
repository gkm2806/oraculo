//@ts-check
import React, { Component } from 'react';
import { Segment, Form, Button, Input, Dropdown, Grid, Divider } from 'semantic-ui-react'
import cuid from "cuid";
import { SemanticToastContainer, toast } from 'react-semantic-toasts';
import { connect } from "react-redux";
import {Creators as aulaActions } from "../../store/ducks/aulas"
import moment from "moment"
import { Creators as TurmaActions } from "../../store/ducks/turmas"
import { Creators as MateriaActions } from "../../store/ducks/materias"
import { Creators as SalaActions } from "../../store/ducks/salas"
import { Creators as professoreAction } from "../../store/ducks/professores"
import { Creators as aulaAction } from "../../store/ducks/aulas"
import { bindActionCreators } from "redux";

class Aula extends Component {
    constructor(props) {
        super(props);

        this.state = {
            materia: "",
            turma: "",
            professor: "",
            sala:"",
            dia:"",
            horaInicio:"",
            horaFim:"",
            id: 0,
            creationdate: ""
        };
    }

    validation = (obj) => {
        this.dispatch(obj);
    }

    dispatch = (obj) => {
        toast({title:"no validation yet", type: "warning"})
        
        let newId = cuid();
        let now = moment.now();
        this.setState({id: newId, creationdate: now});
        console.log(this.state)
        this.props.createAula(this.state)
    }

    handleChange = (event, { name, value }) => {
        if (this.state.hasOwnProperty(name)) {
            this.setState({ [name]: value });
        }
    }

    render() {
        const { professores, materias, salas, turmas, settings} = this.props
        let horarios = settings[0].timeStamps
        let dias= settings[0].dias
        function mapObj(array){
            return array.map((obj, i) => ({ "key": obj.nome, "text": obj.nome, "value": obj.nome }))
        }
        let profNomes = mapObj(professores)
        let materiaNomes = mapObj(materias)
        let salaNomes = mapObj(salas)
        let turmaNomes = mapObj(turmas)
        let horariosArray = horarios.map((horario, i) => ({ "key": horario, "text": horario, "value": horario }))
        let diasArray = dias.map((dia, i) => ({ "key": dia, "text": dia, "value": dia }))

        return (
            <Segment>
                <SemanticToastContainer />
                <Form onSubmit={this.validation} flex>
                    <Grid>
                        <Grid.Column width={8}>
                            <Form.Field>
                                <Dropdown onChange={this.handleChange} name="materia" placeholder='selecione a Materia' fluid search selection options={materiaNomes} />
                            </Form.Field>
                            <Form.Field>
                                <Dropdown onChange={this.handleChange} name="sala" placeholder='selecione a Sala' fluid search selection options={salaNomes} />
                            </Form.Field>
                            <Form.Field>
                                <Dropdown onChange={this.handleChange} name="turma" placeholder='selecione a Turma' fluid search selection options={turmaNomes} />
                            </Form.Field>
                            <Form.Field>
                                <Dropdown onChange={this.handleChange} name="professor" placeholder='selecione o Professor' fluid search selection options={profNomes} />
                            </Form.Field>
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <Form.Field>
                                <Dropdown onChange={this.handleChange} name="dia" placeholder='Dia da Semana' fluid search selection options={diasArray} />
                            </Form.Field>
                            <Form.Field>
                                <Dropdown onChange={this.handleChange} name="horaInicio" placeholder='Horario de Inicio' fluid search selection options={horariosArray} />
                            </Form.Field>
                            <Form.Field>
                                <Dropdown onChange={this.handleChange} name="horaFim" placeholder='Horario de Termino' fluid search selection options={horariosArray} />
                            </Form.Field>
                            <Button type='submit' positive> add </Button>
                        </Grid.Column>
                        <Divider vertical></Divider>
                    </Grid>
                </Form>
            </Segment>
        );
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


export default connect(mapStateToProps, mapDispatchToProps)(Aula)