import React from "react";
import { Header, Modal, Button, Image } from "semantic-ui-react"

const ScheduleAula = ({aula}) => {
    return (
        <Modal trigger={<Button>{aula.materia}</Button>}>
            <Modal.Header>Select a Photo</Modal.Header>
            <Modal.Content image>
                <Image wrapped size='medium' src='/images/avatar/large/rachel.png' />
                <Modal.Description>
                    <Header>Default Profile Image</Header>
                    <p>We've found the following gravatar image associated with your e-mail address.</p>
                    <p>Is it okay to use this photo?</p>
                    {(aula.turma,
                    aula.professor,
                    aula.materia) }
                </Modal.Description>
            </Modal.Content>
        </Modal>
    )
}

export default ScheduleAula;