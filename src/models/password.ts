import Validator from 'validatorjs';

export default class PasswordModel {
    password1: string;
    password2: string;

    constructor(p1: string, p2: string) {
        this.password1 = p1;
        this.password2 = p2;
    }

    validate() {
        let validation = new Validator({ password1: this.password1, password_confirmation: this.password2 }, {
            password1: {
                label: 'New Password',
                rules: 'required|min:8|confirm:password2'
            },
            password2: {
                label: 'Confirm New Password',
                rules: 'required|min:8|confirm:password1|password_strength'
            }
        });
        validation.check();
        console.log(validation.errors.all());
        return validation.errors.all();
    }
}