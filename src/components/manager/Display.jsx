import React from "react"
import { Form, Button, Input, Col, Row, List} from "antd"

const Display = ({ ctx, type, create }) => {

    const dispatch = (obj) => {
        obj.preventDefault()
        create(type, obj.target.nome.value);
        obj.target.nome.value = ""
    }

    return (
        <div style={{padding: "1em"}}>
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
            renderItem={item => (<List.Item>{item.nome}</List.Item>)}
            />
        </div>
    )
}
export default Display;