import React, { Component } from 'react';
import { Segment, Form, Button, Input} from 'semantic-ui-react'

export default class Aula extends Component {
    dispatch = () =>{

    }
    render() {
        return (
            <Segment>
                <Form onSubmit={this.dispatch}>
                    <Form.Field>
                        <Input placeholder="sala" name="sala"></Input>
                    </Form.Field>
                    <Form.Field>
                        <Input placeholder="materia" name="materia"></Input>
                    </Form.Field>
                    <Form.Field>
                        <Input placeholder="turma" name="turma"></Input>
                    </Form.Field>
                    <Button type='submit' positive> add </Button>
                </Form>
            </Segment>
        );
    }
}