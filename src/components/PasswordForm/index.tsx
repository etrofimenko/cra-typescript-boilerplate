import React from 'react';
import {Button, Form, Modal} from 'react-bootstrap';
import PasswordFormProps from './interface';
import './style.scss';

export default class PasswordForm extends React.Component<PasswordFormProps, {}> {
    render() {
        return <Modal show={this.props.show} onHide={this.props.onHide}>
            <Modal.Header closeButton>
                <Modal.Title>PoC</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="formBasicPassword1">
                        <Form.Label>New Password:</Form.Label>
                        <Form.Control type="password" placeholder="Password"/>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword2">
                        <Form.Label>Confirm New Password:</Form.Label>
                        <Form.Control type="password" placeholder="Confirm Password"/>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary">Update</Button>
            </Modal.Footer>
        </Modal>
    }
}