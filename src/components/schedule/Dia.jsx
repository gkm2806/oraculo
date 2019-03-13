import React from "react"
import { Segment, Grid, Header, Modal, Button, Image } from "semantic-ui-react"
import ScheduleAula from "./ScheduleAula.jsx";

const Dia = ({ aulas, dNome, timeStamps }) => {
    return (
        <Grid.Column width={2} >
            <Grid.Row> <Header> {dNome} </Header> </Grid.Row>

            {timeStamps.map((time) => {
                let bool = (aulas.filter(aula => aula.horaInicio === time))[0]
                return (<Grid.Row key={time}>
                     {bool ? (<ScheduleAula aula={bool} />) : (<Segment > vazio </Segment> )} 
                </Grid.Row>)
            })}



        </Grid.Column>
    );
}

export default Dia