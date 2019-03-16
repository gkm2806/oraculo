import React from "react";
import { Header, Modal, Button, Image } from "semantic-ui-react"

const ScheduleAula = ({aula}) => {
    return (
        <Modal trigger={<Button>{aula.materia}</Button>}>
            <Modal.Header>{aula.materia}</Modal.Header>
            <Modal.Content image>
                <Modal.Description>
                    <p>turma: {aula.turma}</p>
                    <p>Local: {aula.sala}</p>
                    <p>professor: {aula.professor}</p>
                </Modal.Description>
            </Modal.Content>
        </Modal>
    )
}

export default ScheduleAula;