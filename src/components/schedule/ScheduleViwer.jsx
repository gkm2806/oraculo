import React, { Component } from "react";
import { Segment, Grid, Header } from "semantic-ui-react";

import Dia from "./Dia"

export default class Schedule extends Component {
    componentDidMount() {

    }
    render() {
        const {timeStamps} = this.props
        return (

            <Segment id="alo">
                <Grid style={{ display: "flex" }}>
                    <Grid.Column width={2} >
                        <Grid.Row><Header> </Header></Grid.Row>
                        {timeStamps.map((time)=>{
                            return( <Grid.Row><Segment>{time}</Segment></Grid.Row>)
                        })}
                    </Grid.Column>
                    <Dia />
                    <Dia />
                    <Dia />
                    <Dia />
                    <Dia />
                    <Dia />
                    <Dia />
                </Grid>

            </Segment>

        )
    }
}