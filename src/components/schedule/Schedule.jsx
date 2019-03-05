import React, { Component } from "react";
import { Segment, Grid } from "semantic-ui-react";

import Dia from "./Dia"

export default class Schedule extends Component {
    componentDidMount(){
        
    }
    render() {
        
        const { ctx, container } = this.props
        console.log(    container);
        return (
            
            <Segment id="alo">
                 <h2>id: {ctx && ctx.nome}</h2>
                 {ctx.aulas && (
                
                <Grid style={{display: "flex"}}>
                    <Grid.Column width={2} >
                        <Dia /*aulas = {ctx.aulas[0]} */></Dia>
                    </Grid.Column>
                    <Grid.Column width={2}>
                        <Dia /*aulas = {ctx.aulas[1]} */></Dia>
                    </Grid.Column>
                    <Grid.Column width={2}>
                        <Dia /*aulas = {ctx.aulas[2]} */></Dia>
                    </Grid.Column>
                    <Grid.Column width={2}>
                        <Dia /*aulas = {ctx.aulas[3]} */></Dia>
                    </Grid.Column>
                    <Grid.Column width={2}>
                        <Dia /*aulas = {ctx.aulas[4]} */></Dia>
                    </Grid.Column>
                    <Grid.Column width={2}>
                        <Dia /*aulas = {ctx.aulas[5]} */></Dia>
                    </Grid.Column>
                    <Grid.Column width={2}>
                        <Dia /*aulas = {ctx.aulas[6]} */></Dia>
                    </Grid.Column>
                </Grid>
                )}
            </Segment>

        )
    }
}