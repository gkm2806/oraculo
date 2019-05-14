import React from "react"
import { Form, Button, Input, Col, Row, List, Icon } from "antd"

const Display = ({ ctx, type, deleteItem, create }) => {

    const dispatch = (obj) => {
        obj.preventDefault()
        create(type, obj.target.nome.value);
        obj.target.nome.value = ""
    }
    const isColor = (item) => {
        if(item.color)return (
            <Button style={{ float: "left", backgroundColor: `${item.color}` }} >{""}</Button>
        )
    }
    return (
        <div style={{ padding: "1em" }}>
            <center><h1> {type} </h1></center>
            <Row>
                <Form onSubmit={dispatch}>
                    <Form.Item>
                        <Row>
                            <Col span={20}>
                                <Input name="nome"></Input>
                            </Col>
                            <Col span={4}>
                                <Button type="primary" htmlType="submit"> add </Button>
                            </Col>
                        </Row>
                    </Form.Item>
                </Form>
            </Row>
            <h3 style={{ margin: '16px 0' }}>lista de {type}</h3>
            <List
                size="small"
                bordered
                dataSource={ctx}
                renderItem={item => (<List.Item>{item.nome} {isColor(item)} <Icon onClick={() => deleteItem(type, item)} style={{ float: "right" }} type="delete" /></List.Item>)}
            />
        </div>
    )
}
export default Display;