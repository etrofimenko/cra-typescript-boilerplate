import React from 'react';
import PasswordForm from './components/PasswordForm/index';
import './styles/App.scss';

export default class App extends React.Component<{}, {}> {
    state = {
        showModal: true
    };
    render() {
        return <div className="App">
            <header className="App-header">
                <PasswordForm onHide={()=> this.setState({ showModal: false })} show={this.state.showModal} />
            </header>
        </div>
    }
}
