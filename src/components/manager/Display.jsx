import React, { Component } from "react"
import { Form, Input, Segment, Button, Container } from "semantic-ui-react"


const Display = ({ ctx, type, create }) => {

    const dispatch = (obj) => {
        create(type, obj.target.nome.value)
    }

    return (
        <Segment>
            
                {ctx.map((single) => {
                    return (<Segment><h4> {single.nome} </h4>  </Segment>)
                })}
           
            <Segment>
                <Form onSubmit={dispatch}>
                    <Form.Field>
                        <Input name="nome"></Input>
                    </Form.Field>
                    <Button type='submit' positive> add </Button>
                </Form>
            </Segment>
        </Segment>
    )

}
export default Display;