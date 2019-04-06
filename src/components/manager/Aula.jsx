import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Row, notification, Col, Form, Button, AutoComplete, TimePicker } from 'antd';
import axios from "axios";
import cuid from "cuid";
import moment from "moment"

import { Creators as aulaAction } from "../../store/ducks/aulas"
import Auth from "../../utils/Auth"

const aulaCriada = (ok, type, err=null) => {
    console.log(ok)
    if(ok){
        notification[type]({
            message: 'Aula criada com sucesso!',
        })
    }else{
        notification[type]({
            message: "Falha ao criar aula",
            description: err.response.data,
        })
    }
};

class Aula extends Component {
    constructor(props) {
        super(props);
        this.state = {materia: "",turma: "", professor: "",sala: "",dia: "", horaInicio: "", horaFim: "", id: 0, creationdate: "",loading: true
        };
    }

    componentDidMount() {
        const { type, search, dia, time } = this.props
        let inicio = moment(time, "HH:mm"), fim = moment(inicio).add(45, 'minutes')

        type ? (
            this.setState({
                horaInicio: inicio.format("HH:mm"),
                horaFim: fim.format("HH:mm"),
                dia: dia,
                [type]: search
            })
        ) : (
                console.log("Sem argumentos")
            )
        this.setState({
            creationdate: inicio.format("YY/MM/DD"),
            loading: false,
            id: cuid()
        })
    }

    dispatch = (obj) => {
        obj.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.close && this.props.close()
                let newId = cuid();
                let now = moment.now();
                this.setState({ id: newId, creationdate: now });
                axios.post('http://localhost:4000/api/aulas', this.state)
                    .then((res) =>{
                        this.props.createAula(res.data);
                        aulaCriada(true,"success")
                    })
                    .catch((err)=>{
                        console.log("erro ao criar sala: ", err)
                        aulaCriada(false,"error", err)
                    })
            }
        });
    }

    render() {
        const { professores, materias, salas, turmas, settings, dia, time, search, type, user } = this.props
        const { loading } = this.state
        const { getFieldDecorator } = this.props.form
        function mapObj(array) {
            return array.map((obj, i) => ({ "text": obj.nome, "value": obj.nome }))
        }
        let diasArray = settings[0].dias.map((dia, i) => ({ "text": dia, "value": dia }))
        let inicio = moment(time, "HH:mm"), fim = moment(inicio).add(45, 'minutes')

        return (
            <Form className="main" onSubmit={this.dispatch} >
                {Auth((<Row>
                    <Col span={12} >
                        <Form.Item>
                            <AutoComplete
                                id="professor"
                                dataSource={mapObj(professores)}
                                placeholder="Professor"
                                filterOption={(inputValue, option) => option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1}
                                alo="vtnc"
                                onChange={(e) => { this.setState({ professor: e }) }}
                            />
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('materia', {
                                rules: [{ required: true, message: "Materia não pode ser nula!" }],
                            })(
                                <AutoComplete
                                    key="materia"
                                    dataSource={mapObj(materias)}
                                    placeholder="Materia"
                                    onChange={(e) => { this.setState({ materia: e }) }}
                                    filterOption={(inputValue, option) => option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1}
                                />
                            )}
                        </Form.Item>
                        <Form.Item>
                            <AutoComplete
                                defaultValue={type === "sala" ? search : null}
                                name="sala"
                                value={this.state.sala}
                                dataSource={mapObj(salas)}
                                placeholder="Sala"
                                onChange={(e) => { this.setState({ sala: e }) }}
                                filterOption={(inputValue, option) => option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1}
                            />
                        </Form.Item>
                        <Form.Item>
                            <AutoComplete
                                defaultValue={type === "turma" ? search : null}
                                key="turma"
                                value={this.state.turma}
                                dataSource={mapObj(turmas)}
                                placeholder="Turma"
                                onChange={(e) => { this.setState({ turma: e }) }}
                                filterOption={(inputValue, option) => option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1}
                            />
                        </Form.Item>
                    </Col >
                    <Col span={12}>
                        <Form.Item>
                            <AutoComplete
                                defaultValue={dia && dia}
                                key="dia"
                                dataSource={diasArray}
                                placeholder="dia"
                                onChange={(e) => { this.setState({ dia: e }) }}
                                filterOption={(inputValue, option) => option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1}
                            />
                        </Form.Item>
                        <Form.Item>
                            <Row>
                                <TimePicker
                                    defaultValue={type ? inicio : moment('06:00', 'HH:mm')}
                                    format={'HH:mm'}
                                    onChange={(e) => { this.setState({ horaInicio: e.format("HH:mm") }) }}
                                    minuteStep={15}
                                    placeholder="Hr Inicio"
                                    key="horaInicio"
                                    disabledHours={() => [1, 2, 3, 4, 4, 5]}
                                    allowClear={false}
                                />

                                <TimePicker
                                    defaultValue={type ? fim : moment('06:00', 'HH:mm')}
                                    format={'HH:mm'}
                                    minuteStep={15}
                                    placeholder="Hr Fim"
                                    key="horaFim"
                                    onChange={(e) => { this.setState({ horaFim: e.format("HH:mm") }) }}
                                    disabledHours={() => [1, 2, 3, 4, 4, 5]}
                                    allowClear={false}
                                />
                            </Row>
                        </Form.Item>
                        <Form.Item style={{ display: "flex", flex: 1, justifyContent: "space-between" }}>
                            <Button style={{ width: "16em" }} type="primary" htmlType="submit"> criar </Button>
                        </Form.Item>
                    </Col>
                </Row>), user, 1, (<div>nope</div>), loading)}

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
    aulas: state.aulas,
    user: state.user
})

const mapDispatchToProps = dispatch => bindActionCreators({
    ...aulaAction
}, dispatch)

const AulaHOC = Form.create({ name: 'AulaForm' })(Aula);
export default connect(mapStateToProps, mapDispatchToProps)(AulaHOC)