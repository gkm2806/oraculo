import React from "react"
import { Segment } from "semantic-ui-react"

const Dia = ({}) => {
    const aulas = this.props
    return(
        <div>
            {aulas.map((aula) => {
                return(<Segment> {aula} </Segment>)
            })}
        </div>
    );
} 

export default Dia