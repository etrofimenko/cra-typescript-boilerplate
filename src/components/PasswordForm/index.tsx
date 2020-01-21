import React from 'react';
import {Button, Form, Modal, Alert} from 'react-bootstrap';
import PasswordFormProps from './interface';
import PasswordModel from '../../models/password';
import './style.scss';

interface PasswordFormState {
    password1: string,
    password2: string,
    errors: any,
}

export default class PasswordForm extends React.Component<PasswordFormProps, PasswordFormState> {
    constructor(props: PasswordFormProps){
        super(props);

        this.state = {
            password1: '',
            password2: '',
            errors: {}
        }
    }

    render() {
        return <Modal show={this.props.show} onHide={this.props.onHide}>
            <Modal.Header closeButton>
                <Modal.Title>PoC</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="formBasicPassword1">
                        <Form.Label>New Password:</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            onChange={(el: any) => {
                                const model = new PasswordModel(el.value, this.state.password2);
                                this.setState(Object.assign(this.state, {
                                    password1: el.value,
                                    errors: model.validate()
                                }))
                            }}
                            isInvalid={this.state.errors['password1.rules'] !== undefined} />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword2">
                        <Form.Label>Confirm New Password:</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Confirm Password"
                            onChange={(el: any) => {
                                const model = new PasswordModel(el.value, this.state.password2);
                                this.setState(Object.assign(this.state, {
                                    password1: el.value,
                                    errors: model.validate()
                                }))
                            }}
                            isInvalid={this.state.errors['password2.rules'] !== undefined} />
                    </Form.Group>
                </Form>
                {Object.keys(this.state.errors).length > 0 && <Alert variant={'danger'}>
                    <ul>
                    {Object.keys(this.state.errors).map(key => {
                        return this.state.errors[key].map((error: any) => <li key={error}>{error.replace(key, key === 'password1.rules' ? 'New Password' : 'Confirm New Password')}</li>)
                    })}
                    </ul>
                </Alert>}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary">Update</Button>
            </Modal.Footer>
        </Modal>
    }
}