import React from "react"
import { Segment, Grid, Header } from "semantic-ui-react"

const Dia = ({ aulas, dNome, timeStamps }) => {
    return (
        <Grid.Column width={2} >
            <Grid.Row> <Header> {dNome} </Header> </Grid.Row>

            {timeStamps.map((time) => {
                let bool = (aulas.filter(aula => aula.horaInicio === time))[0]
                return (<Grid.Row key={time}>
                    <Segment > {bool ? bool.materia : "vazio"} </Segment>
                </Grid.Row>)
            })}


        
        </Grid.Column>
    );
}

export default Dia