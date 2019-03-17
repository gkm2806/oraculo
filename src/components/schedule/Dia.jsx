import React from "react"
import { Segment, Grid, Header, Modal, Button, Image, Icon } from "semantic-ui-react"
import ScheduleAula from "./ScheduleAula.jsx";

const Dia = ({ aulas, dNome, timeStamps }) => {
    return (
        <Grid.Column width={2} >
            <Grid.Row> <Header> {dNome} </Header> </Grid.Row>

            {timeStamps.map((time) => {
                let bool = (aulas.filter(aula => aula.horaInicio === time))[0]
                return (<Grid.Row key={time}>
                     {bool ? (<ScheduleAula className="ScheduleDot" aula={bool} />) : (<Create className="ScheduleDot" /> )} 
                </Grid.Row>)
            })}



        </Grid.Column>
    );
}

const Create = () =>{
    return(
        <Segment > <center> <Icon size="large" name="calendar plus outline" /> </center></Segment>
    )
}
export default Dia