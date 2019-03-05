import React, { Component } from "react"
import { Button, Checkbox, Form } from 'semantic-ui-react'

export default class Socorro extends Component{
    morango = (e) => {
        console.log(e)
    }
    render(){
        return(
            <Form>
            <Form.Field>
              <label>First Name</label>
              <input placeholder='First Name' />
            </Form.Field>
            <Form.Field>
              <label>Last Name</label>
              <input placeholder='Last Name' />
            </Form.Field>
            <Form.Field>
              <Checkbox label='I agree to the Terms and Conditions' />
            </Form.Field>
            <Button type='submit'>Submit</Button>
          </Form>
        )
    }
}