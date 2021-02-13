import React, { Component } from "react";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";

export class AddDepModals extends Component {
    constructor(props) {
        super(props);
    }

    handleSubmit(event) {

        fetch('https://localhost:44378/api/department', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'content-Type': 'application/json'
            },
            body: JSON.stringify({
                DepartmentID: null,
                DepartmentName: event.target.DepartmentName.value
            })
        })
            .then(res => res.json())
            .then((result) => {
                alert(result)
            },
                (error) => {
                    alert('failed')
                })
                
    }
    render() {
        return (
            <div>
                <Modal
                    {...this.props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Add Department
            </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="container">
                            <Row>
                                <Col sm={6}>
                                    <Form onSubmit={this.handleSubmit}>
                                        <Form.Group controlId="DepartmentName">
                                            <Form.Label>DepartmentName</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="DepartmentName"
                                                required
                                                placeholder="DepartmentName"
                                            />
                                        </Form.Group>
                                        <Form.Group>
                                            <Button variant="primary" type="submit">
                                                Add Department
                      </Button>
                                        </Form.Group>
                                    </Form>
                                </Col>
                            </Row>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={this.props.onHide}>
                            Close
            </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}
