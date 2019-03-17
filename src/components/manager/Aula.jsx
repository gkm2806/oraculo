//@ts-check
import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Row, Col, Form, Icon, Input, Button, AutoComplete, Select } from 'antd';

import cuid from "cuid";
import moment from "moment"

import { Creators as TurmaActions } from "../../store/ducks/turmas"
import { Creators as MateriaActions } from "../../store/ducks/materias"
import { Creators as SalaActions } from "../../store/ducks/salas"
import { Creators as professoreAction } from "../../store/ducks/professores"
import { Creators as aulaAction } from "../../store/ducks/aulas"


class Aula extends Component {
    constructor(props) {
        super(props);

        this.state = {
            materia: "",
            turma: "",
            professor: "",
            sala: "",
            dia: "",
            horaInicio: "",
            horaFim: "",
            id: 0,
            creationdate: ""
        };
    }

    validation = (obj) => {
        obj.preventDefault();
        this.dispatch(obj);
    }

    dispatch = (obj) => {
        let newId = cuid();
        let now = moment.now();
        this.setState({ id: newId, creationdate: now });
        this.props.createAula(this.state)
 
    }

    handleChange = (event, { key, value }) => {
        if (this.state.hasOwnProperty(key)) {
            this.setState({ [key]: value });
        }
    }

    render() {
        const { Option } = Select
        const { professores, materias, salas, turmas, settings } = this.props
        let horarios = settings[0].timeStamps
        let dias = settings[0].dias
        function mapObj(array) {
            return array.map((obj, i) => ({ "key": obj.nome, "text": obj.nome, "value": obj.nome }))
        }
        let profNomes = mapObj(professores)
        let materiaNomes = mapObj(materias)
        let salaNomes = mapObj(salas)
        let turmaNomes = mapObj(turmas)
        let horariosArray = horarios.map((horario, i) => ({ "key": horario, "text": horario, "value": horario }))
        let diasArray = dias.map((dia, i) => ({ "key": dia, "text": dia, "value": dia }))

        return (
            <Form className="main" onSubmit={this.validation} >
                <Col span={12} >
                    <Form.Item>
                        <AutoComplete
                            key="professor"
                            dataSource={profNomes}
                            placeholder="Professor"
                            filterOption={(inputValue, option) => option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1}
                        />
                    </Form.Item>
                    <Form.Item>
                        <AutoComplete
                            onChange={this.handleChange}
                            key="sala"
                            dataSource={salaNomes}
                            placeholder="Sala"
                            filterOption={(inputValue, option) => option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1}
                        />
                    </Form.Item>
                    <Form.Item>
                        <AutoComplete
                            onChange={this.handleChange}
                            key="turma"
                            dataSource={turmaNomes}
                            placeholder="Turma"
                            filterOption={(inputValue, option) => option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1}
                        />
                    </Form.Item>
                    <Form.Item>
                        <AutoComplete
                            onChange={this.handleChange}
                            key="materia"
                            dataSource={materiaNomes}
                            placeholder="Materia"
                            filterOption={(inputValue, option) => option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1}
                        />
                    </Form.Item>
                </Col >
                <Col span={12}>
                    <Form.Item>
                        <AutoComplete
                            onChange={this.handleChange}
                            key="dia"
                            dataSource={diasArray}
                            placeholder="dia"
                            filterOption={(inputValue, option) => option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1}
                        />
                    </Form.Item>
                    <Form.Item>
                        <AutoComplete
                            onChange={this.handleChange}
                            key="horaInicio"
                            dataSource={horariosArray}
                            placeholder="Horario de Inicio"
                            filterOption={(inputValue, option) => option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1}
                        />
                    </Form.Item>
                    <Form.Item>
                        <AutoComplete
                            onChange={this.handleChange}
                            key="horaFim"
                            dataSource={horariosArray}
                            placeholder="Horario de Termino"
                            filterOption={(inputValue, option) => option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button htmlType="submit"> criar </Button>
                    </Form.Item>
                </Col>
            </Form>
        );
    }
}
const mapStateToProps = (state) => ({
    salas: state.salas,
    turmas: state.turmas,
    materias: state.materias,
    professores: state.professores,
    settings: state.settings,
    aulas: state.aulas
})

const mapDispatchToProps = dispatch => bindActionCreators({
    ...MateriaActions,
    ...TurmaActions,
    ...SalaActions,
    ...professoreAction,
    ...aulaAction
}, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(Aula)