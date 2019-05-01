import React, { Component } from "react";
import {connect} from "react-redux"
import {
    Form, Icon, Input, Button, Col,notification
} from 'antd';
import axios from "axios"
import "dotenv/config"
import {bindActionCreators} from "redux"
import {Creators as userActions} from "../../store/ducks/user";

class UserLogin extends Component {
    openNotification = (type) => {
        notification[type]({
          message: 'Atenção!',
          description: 'Alunos não possuem usuarios',
        });
      };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log("username: ", values.userName, "\n senha: ", values.password);
                axios.post(process.env.API_URL ||"http://localhost:4000" + "/api/users/login", {
                    username: values.userName,
                    password: values.password
                  })
                  .then((response) => {
                    this.props.loginUser({
                        userName: response.username,
                        permission: 1
                      })
                  })
            }
        });
    }
    componentDidMount(){
        this.openNotification("info")
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Col span={6}>
                
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
                    </Form.Item>
                </Form>
            </Col>
        );
    }
}
const WrappedForm = Form.create({ name: 'loginForm' })(UserLogin);
const mapDispatchToProps = dispatch => bindActionCreators({
    ...userActions
    }, dispatch)

export default connect(null,mapDispatchToProps)(WrappedForm)