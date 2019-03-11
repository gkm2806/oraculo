import React from "react"
import { Segment, Grid, Header } from "semantic-ui-react"

const Dia = ({ aulas, dNome }) => {
    return (
        <Grid.Column width={2} >
            <Grid.Row> <Header> {dNome && dNome} </Header> </Grid.Row>
            
            <Grid.Row><Segment> NYW </Segment></Grid.Row>
            <Grid.Row><Segment> NYW </Segment></Grid.Row>
            <Grid.Row><Segment> NYW </Segment></Grid.Row>
            <Grid.Row><Segment> NYW </Segment></Grid.Row>

        </Grid.Column>
    );
}

export default Dia