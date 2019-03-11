import React, { Component } from 'react';
import { Segment, Form, Button, Input, Dropdown } from 'semantic-ui-react'

export default class Aula extends Component {
    dispatch = () => {

    }


    render() {
        const { profs, materias, salas, turmas } = this.props

        let profNomes = profs.map((prof, i) => ({ "key": prof.nome, "text": prof.nome, "value": prof.nome }))

        let materiaNomes = materias.map((materia, i) => ({ "key": materia.nome, "text": materia.nome, "value": materia.nome }))

        let salaNomes = salas.map((sala, i) => ({ "key": sala.nome, "text": sala.nome, "value": sala.nome }))
        let turmaNomes = turmas.map((turma, i) => ({ "key": turma.nome, "text": turma.nome, "value": turma.nome }))
        
        return (
            <Segment>
                <Form onSubmit={this.dispatch}>
                    <Form.Field>
                        <Dropdown placeholder='selecione a Materia' fluid search selection options={materiaNomes} />
                    </Form.Field>
                    <Form.Field>
                        <Dropdown placeholder='selecione a Sala' fluid search selection options={salaNomes} />
                    </Form.Field>
                    <Form.Field>
                        <Dropdown placeholder='selecione a Sala' fluid search selection options={turmaNomes} />
                    </Form.Field>
                    <Form.Field>
                        <Dropdown placeholder='selecione o Professor' fluid search selection options={profNomes} />
                    </Form.Field>
                    <Button type='submit' positive> add </Button>
                </Form>
            </Segment>
        );
    }
}