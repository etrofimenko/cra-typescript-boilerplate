import React from 'react'
import { action, computed, observable } from 'mobx'
import { observer } from 'mobx-react'
import classNames from 'classnames'

@observer(['state', 'actions'])
class PasswordStrengthMeter extends React.Component {

  @observable validation = {
    score: -1,
    message: '',
    suggestions: [],
    width: 0
  }

  @computed get passwordMeterClass() {
    return classNames({
      'password-strength': this.validation.score >= 0,
      'hide': this.validation.score < 0
    })
  }

  @computed get barClass() {
    const barClass = {
      [-1]: [''],
      0: ['progress-bar-danger'],
      1: ['progress-bar-warning progress-bar-warning-25'],
      2: ['progress-bar-warning progress-bar-warning-50'],
      3: ['progress-bar-warning progress-bar-warning-75'],
      4: ['progress-bar-success']
    }[this.validation.score];

    return classNames('progress-bar', barClass);
  }

  constructor() {
    super();
    this.passwordValidationOptions = {
      isFirstTimeInput: true
    };
  }

  onValidate = (e) => {
    const { passwordValidator } = this.props.actions,
      email = this.props.form.$('email').value;
    // include devise-zxcvbn compatible options
    this.passwordValidationOptions.inputs = [email].concat(email.split(/[\W_]/g));

    const isValid = passwordValidator.validate(e.target.value, this.validation, this.passwordValidationOptions);
    if (this.props.onValidate) {
      this.props.onValidate(isValid);
    }
  }

  render() {
    const {children, ...props} = this.props;
    const onChange = React.Children.only(children).props.onChange,
      onChangeComposition = (e) => [this.onValidate, onChange].forEach(fn => fn && fn(e)),
      inputPassword = React.cloneElement(children, {
        onChange: onChangeComposition
      });

    return (
      <div className="help-block">
        {inputPassword}
        <div className={this.passwordMeterClass}>
          <div className="progress password-progress">
            <div className={this.barClass} role="progressbar"></div>
          </div>
          <div className="message">{this.validation.message}</div>
          <ul className="suggestions">
            {this.validation.suggestions.map((suggestion, ind) => <li key={ind}>{suggestion}</li>)}
          </ul>
        </div>
      </div>
    );
  }
}

export default PasswordStrengthMeter;