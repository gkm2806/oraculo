import React from "react"
import ScheduleAula from "./ScheduleAula.jsx";
import { Row, Col, Card } from "antd"

const Dia = ({ aulas, dNome, timeStamps }) => {
    return (
        <Col span={3}>
            <Row> <header> {dNome} </header> </Row>

            {timeStamps.map((time) => {
                let bool = (aulas.filter(aula => aula.horaInicio === time))[0]
                return (<Row key={time}>
                     {bool ? (<ScheduleAula className="ScheduleDot" aula={bool} />) : (<Create className="ScheduleDot" /> )} 
                </Row>)
            })}



        </Col>
    );
}

const Create = () =>{
    return(
        <Card > <center> vazio </center></Card>
    )
}
export default Dia