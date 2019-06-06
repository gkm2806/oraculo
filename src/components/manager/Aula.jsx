import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import axios from "axios";
import cuid from "cuid";
import moment from "moment"
import { Row, Spin, notification, Col, Form, Button, AutoComplete, TimePicker } from 'antd';
import "dotenv/config"
import { Creators as aulaAction } from "../../store/ducks/aulas"
import Auth from "../../utils/Auth"
import ScheduleAula from "../schedule/viewer/ScheduleAula.noStore"

const aulaCriada = (ok, type="error", err = null) => {
    if (ok) {
        notification[type]({
            message: 'Aula criada com sucesso!'
        })
    } else {
        if(err.response.status == 409){
            console.log(err.response)
            notification[type]({
                message: `colisao de ${err.response.data.aviso}`,
                description: <ScheduleAula conflito={err.response.data.aviso} aula={err.response.data[0]}> </ScheduleAula>
            })
        }
        
    }
};

class Aula extends Component {
    constructor(props) {
        super(props);
        this.state = {
            aula: { materia: "", turma: "", professor: "", sala: "", dia: "", horaInicio: "", horaFim: "", id: 0, creationdate: "" }, 
            loading: true,

        };
    }

    componentDidMount() {
        const { type, search, dia, time } = this.props
        let inicio = moment(time, "HH:mm"), fim = moment(inicio).add(45, 'minutes')

        type ? (
            this.setState(prev =>({
                aula: {
                    ...prev.aula,
                    horaInicio: inicio.format("HH:mm"),
                    horaFim: fim.format("HH:mm"),
                    dia: dia,
                    [type]: search
                }
            }))
        ) : (
                console.log("Sem argumentos")
            )
        this.setState(prev => ({
            aula:{
                ...prev.aula,
                creationdate: inicio.format("YY/MM/DD"),
                id: cuid()
            },
            loading: false,
            visible: false
            
        }))
    }

    dispatch = (obj) => {
        obj.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.setState({visible:true})
                axios({
                    method: 'POST',
                    url: `${'https://shaolinbackend.herokuapp.com'}/api/aulas/`, 
                    data: this.state.aula, 
                    headers: {'Authorization': "Bearer "+this.props.user.token}
                })
                    .then((res) => {
                        console.log(res)
                        this.props.createAula(res.data);
                        aulaCriada(true, "success")
                    })
                    .catch((err) => {
                        console.log("erro ao criar aula: ", err)
                        aulaCriada(false, "error", err)
                    }).then(()=>{
                        this.props.close && this.props.close()
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
        let diasArray = settings.dias.map((dia, i) => ({ "text": dia, "value": dia }))
        let inicio = moment(time, "HH:mm"), fim = moment(inicio).add(45, 'minutes')

        return (
            <Form className="main" onSubmit={this.dispatch} >
               <Spin spinning={this.state.visible} delay={500}>
                {Auth((<Row>
                    <Col span={12} >
                        <Form.Item>
                            <AutoComplete
                                id="professor"
                                dataSource={mapObj(professores)}
                                placeholder="Professor"
                                filterOption={(inputValue, option) => option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1}
                                onChange={(e) => { this.setState(prev => ({ aula:{...prev.aula, professor: e }}))}}
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
                                    onChange={(e) => { this.setState(prev => ({ aula:{...prev.aula, materia: e }}))}}
                                    filterOption={(inputValue, option) => option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1}
                                />
                            )}
                        </Form.Item>
                        <Form.Item>
                            <AutoComplete
                                defaultValue={type === "sala" ? search : null}
                                name="sala"
                                value={this.state.aula.sala}
                                dataSource={mapObj(salas)}
                                placeholder="Sala"
                                onChange={(e) => { this.setState(prev => ({ aula:{...prev.aula, sala: e }}))}}
                                filterOption={(inputValue, option) => option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1}
                            />
                        </Form.Item>
                        <Form.Item>
                            <AutoComplete
                                defaultValue={type === "turma" ? search : null}
                                key="turma"
                                value={this.state.aula.turma}
                                dataSource={mapObj(turmas)}
                                placeholder="Turma"
                                onChange={(e) => { this.setState(prev => ({ aula:{...prev.aula, turma: e }}))}}
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
                                onChange={(e) => { this.setState(prev => ({ aula:{...prev.aula, dia: e }}))}}
                                filterOption={(inputValue, option) => option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1}
                            />
                        </Form.Item>
                        <Form.Item>
                            <Row>
                                <TimePicker
                                    defaultValue={type ? inicio : moment('06:00', 'HH:mm')}
                                    format={'HH:mm'}
                                    onChange={(e) => {this.setState(prev => ({ aula:{...prev.aula, horaInicio: e.format("HH:mm") }}))}}
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
                                    onChange={(e) => {this.setState(prev => ({ aula:{...prev.aula, horaFim: e.format("HH:mm") }}))}}
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
                </Spin>
            </Form>
        );
    }
}
const mapStateToProps = (state) => ({
    salas: state.salas.locais,
    turmas: state.turmas.turmas,
    materias: state.materias,
    professores: state.professores.professores,
    settings: state.settings,
    aulas: state.aulas,
    user: state.user
})

const mapDispatchToProps = dispatch => bindActionCreators({
    ...aulaAction
}, dispatch)

const AulaHOC = Form.create({ name: 'AulaForm' })(Aula);
export default connect(mapStateToProps, mapDispatchToProps)(AulaHOC)