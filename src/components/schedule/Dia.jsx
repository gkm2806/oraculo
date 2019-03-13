import React from "react"
import { Segment, Grid, Header } from "semantic-ui-react"

const Dia = ({ aulas, dNome, timeStamps }) => {
    return (
        <Grid.Column width={2} >
            <Grid.Row> <Header> {dNome} </Header> </Grid.Row>

            {timeStamps.map((time) => {
                return (<Grid.Row key={time}><Segment> {(aulas.filter(aula => aula.horaInicio === time))[0] ? ((aulas.filter(aula => aula.horaInicio === time))[0]).materia : "none"} </Segment></Grid.Row>)
            })}


        
        </Grid.Column>
    );
}

export default Dia