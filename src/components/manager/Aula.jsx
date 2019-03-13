import React, { Component } from 'react';
import { Segment, Form, Button, Input, Dropdown, Grid, Divider } from 'semantic-ui-react'
import cuid from "cuid";
import { SemanticToastContainer, toast } from 'react-semantic-toasts';

export default class Aula extends Component {
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
            id: 0
        };
    }

    validation = (obj) => {
        toast({title:"no validation yet", type: "warning"})
        this.dispatch(obj)
    }

    dispatch = (obj) => {
        console.log("aula sendo criada")
        var newId = cuid();
        this.setState({id:newId})
        this.props.create("aula", this.state)
    }

    handleChange = (event, { name, value }) => {
        if (this.state.hasOwnProperty(name)) {
            this.setState({ [name]: value });
        }
    }

    render() {
        const { profs, materias, salas, turmas, horarios, dias } = this.props
        function mapObj(array){
            return array.map((obj, i) => ({ "key": obj.nome, "text": obj.nome, "value": obj.nome }))
        }
        let profNomes = mapObj(profs)
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