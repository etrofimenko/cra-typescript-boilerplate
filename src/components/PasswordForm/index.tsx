import React from 'react';
import {Button, Row, Alert, Form} from 'react-bootstrap';
import PasswordFormProps from './interface';
import './style.scss';

export default class PasswordForm extends React.Component<PasswordFormProps, {}> {
    render() {
        return (<Alert show={true} variant="light">
            <Form>
                <Form.Group controlId="formBasicPassword1">
                    <Form.Label>New Password:</Form.Label>
                    <Form.Control type="password" placeholder="Password"/>
                </Form.Group>
                <Form.Group controlId="formBasicPassword2">
                    <Form.Label>Confirm New Password:</Form.Label>
                    <Form.Control type="password" placeholder="Confirm Password"/>
                </Form.Group>
                <Row className="justify-content-md-center">
                    <Button variant="danger">Update</Button>
                </Row>
            </Form>
        </Alert>)
    }
}