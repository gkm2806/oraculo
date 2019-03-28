import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Row, notification, Col, Form, Button, AutoComplete, TimePicker } from 'antd';

import cuid from "cuid";
import moment from "moment"

import { Creators as aulaAction } from "../../store/ducks/aulas"
import Auth from "../../utils/Auth"

const aulaCriada = () => {
    notification.open({
      message: 'Aula',
      description: 'Aula criada!',
      onClick: () => {
        console.log('Notification Clicked!');
      },
    });
  };

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
            creationdate: "",
            loading: true
        };
    }
    
    componentDidMount(){
        const {type, search, dia, time} = this.props

        var inicio  = moment(time,"HH:mm"), fim = moment(inicio).add(45, 'minutes')

        type ? (
            this.setState({
                horaInicio: inicio,
                horaFim: fim,
                dia: dia,
                [type]: search,
                loading: false
            })
        ) : (
            console.log("Sem argumentos")
        )
    }
    validation = (obj) => {
        obj.preventDefault();
        this.dispatch(obj);
    }

    dispatch = (obj) => {
        let newId = cuid();
        let now = moment.now();
        this.setState({ id: newId, creationdate: now });
        console.log(this.state.horaInicio);
        this.props.createAula(this.state);
        aulaCriada()
    }

    handleChange = (a,b,c) => {
        console.log(a)
        console.log(b)
        console.log(a.target)
    }

    render() {
        const { professores, materias, salas, turmas, settings, dia, time, search, type, user} = this.props
        const {loading} = this.state
        function mapObj(array) {
            return array.map((obj, i) => ({  "text": obj.nome, "value": obj.nome }))
        }
        let horariosArray = settings[0].timeStamps.map((horario, i) => ({ "text": horario, "value": horario }))
        let diasArray = settings[0].dias.map((dia, i) => ({ "text": dia, "value": dia }))
        
        return (
            <Form className="main" onSubmit={this.validation} >
            {Auth((<Row>
               <Col span={12} >
                    <Form.Item>
                        <AutoComplete
                            id="professor"
                            dataSource={mapObj(professores)}
                            placeholder="Professor"
                            filterOption={(inputValue, option) => option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1}
                            alo="vtnc"
                            onChange={(e)=> {this.setState({professor: e})}}
                        />
                    </Form.Item>
                    <Form.Item>
                        <AutoComplete
                            key="materia"
                            dataSource={mapObj(materias)}
                            placeholder="Materia"
                            onChange={(e)=> {this.setState({materia: e})}}
                            filterOption={(inputValue, option) => option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1}
                        />
                    </Form.Item>
                    <Form.Item>
                        <AutoComplete
                            defaultValue = {type==="sala" ? search : null}
                            name="sala"
                            value={this.state.sala}
                            dataSource={mapObj(salas)}
                            placeholder="Sala"
                            onChange={(e)=> {this.setState({sala: e})}}
                            filterOption={(inputValue, option) => option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1}
                        />
                    </Form.Item>
                    <Form.Item>
                        <AutoComplete
                            defaultValue = {type==="turma" ? search : null}
                            key="turma"
                            value={this.state.turma}
                            dataSource={mapObj(turmas)}
                            placeholder="Turma"
                            onChange={(e)=> {this.setState({turma: e})}}
                            filterOption={(inputValue, option) => option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1}
                        />
                    </Form.Item>
                </Col >
                <Col span={12}>
                    <Form.Item>
                        <AutoComplete
                            defaultValue = {dia && dia}
                            key="dia"
                            dataSource={diasArray}
                            placeholder="dia"
                            onChange={(e)=> {this.setState({dia: e})}}
                            filterOption={(inputValue, option) => option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Row>
                        <TimePicker 
                            defaultValue={type ?  this.state.horaInicio : moment('06:00', 'HH:mm')} 
                            format={'HH:mm'} 
                            onChange={(e)=> {this.setState({horaInicio: e.format("HH:mm").toString()})}}
                            minuteStep={15}
                            placeholder="Hr Inicio"
                            key="horaInicio"
                            disabledHours={() => [1,2,3,4,4,5]}
                            allowClear= {false}
                        />
                        <TimePicker 
                            defaultValue={type ?  this.state.horaFim : moment('06:00', 'HH:mm')} 
                            format={'HH:mm'} 
                            minuteStep={15}
                            placeholder="Hr Fim"
                            key="horaFim"
                            onChange={(e)=> {this.setState({horaFim: e.format("HH:mm").toString()})}}
                            disabledHours={() => [1,2,3,4,4,5]}
                            allowClear={false}
                        />
                        </Row>
                    </Form.Item>
                    <Form.Item style={{display: "flex", flex:1, justifyContent: "space-between"}}>
                        <Button style={{width:"16em"}}type="primary" htmlType="submit"> criar </Button>
                    </Form.Item>
                </Col>
                </Row>),user,1,(<div>nope</div>),loading)}
            
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