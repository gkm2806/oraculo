import React from "react"
import { Row, Col } from "antd"

import ScheduleAula from "./ScheduleAula.jsx";
import Create from "./ScheduleAulaCreate"
const Dia = ({ aulas, dNome, timeStamps,search, type, user }) => {
    return (
        <Col span={3}>
            <Row> <header> {dNome} </header> </Row>

            {timeStamps.map((time) => {
                let bool = (aulas.filter(aula => (aula.horaInicio).toString() === (time).toString()))[0]
                return (<Row key={time}>
                     {bool ? 
                        (<ScheduleAula className="ScheduleDot" aula={bool} />) : 
                        (<Create user={user} type={type} search={search} dia={dNome} time={time} className="ScheduleDot" /> )} 
                </Row>)
            })}
        </Col>
    );
}

export default Dia