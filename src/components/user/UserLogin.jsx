import React, { Component } from "react";
import { connect } from "react-redux"
import { Form, Icon, Input, Button, Col, notification, Switch } from 'antd';
import axios from "axios"
import { withRouter } from "react-router-dom"
import "dotenv/config"
import { bindActionCreators } from "redux"
import { Creators as userActions } from "../../store/ducks/user";
//import history from "../../utils/history"

class UserLogin extends Component {
    state = {
        isSuap: false
    }
    openNotification = (type, message = null) => {
        switch (type) {
            case "info":
                notification[type]({
                    message: 'Atenção!',
                    description: 'Alunos não possuem usuarios',
                });
                break;
            case "error":
                notification[type]({
                    message: type.slice(0, 4),
                    description: message,
                });
                break;
            case "sucess":
                notification[type]({
                    message: "Foi",
                    description: "Usuario Conectado",
                });
                break;
            default:
                console.log(`"${type}" is not recognized`)
        }

    };
    sucessNotification = () => {
        notification["sucess"]({
            message: "Foi",
            description: "Usuario Conectado",
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                {this.state.isSuap 
                    ? (
                        axios.post(
                            `https://suap.ifms.edu.br/api/autenticacao/token/`,
                            {
                                username: values.userName,
                                password: values.password
                            }
                        )
                        .then((response) => {
                            this.props.loginUser({
                                userName: response.data.username,
                                permission: response.data.permission,
                                token: response.data.token
                            })
                            console.log("response: ", response)
                            this.props.history.push('/manager')
                        }).catch((err) => {
                            console.log("erro", err.response.data.message)
                            this.openNotification("error", err.response.data.message)
                        })
                    ):(
                        axios.post(
                            `${'https://shaolinbackend.herokuapp.com'}/api/users/login`,
                            {
                                username: values.userName,
                                password: values.password
                            }
                        )
                        .then((response) => {
                            this.props.loginUser({
                                ...response.data,
                                permission: 1
                            })
                            console.log("response: ", response)
                            this.props.history.push('/manager')
                        }).catch((err) => {
                            console.log("erro", err.response.data)
                            this.openNotification("error", err.response.data.message)
                        })
                )}
            }
        });
    }
    componentDidMount() {
        //this.openNotification("info")
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        const { isSuap } = this.state
        return (
            <div style={{ width: "100%", display: "flex" }}>
                <Col>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item>
                            {getFieldDecorator('userName', {
                                rules: [{ required: true, message: 'Please input your username!' }],
                            })(
                                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: 'Please input your Password!' }],
                            })(
                                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                            )}
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Log in
                            </Button>
                            <Switch style={{marginLeft:"15%"}} onChange={()=> this.setState({isSuap : !isSuap})} checkedChildren="suap" unCheckedChildren="ifms" />
                        </Form.Item>
                    </Form>
                </Col>
            </div>
        );
    }
}
const WrappedForm = Form.create({ name: 'loginForm' })(UserLogin);
const mapDispatchToProps = dispatch => bindActionCreators({
    ...userActions
}, dispatch)

export default withRouter(connect(null, mapDispatchToProps)(WrappedForm))