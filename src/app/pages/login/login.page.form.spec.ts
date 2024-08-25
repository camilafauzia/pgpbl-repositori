import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginPageForm } from './login.page.form';

describe('LoginPageForm', () => {

  let loginPageForm: LoginPageForm;
  let form: FormGroup;

  beforeEach(() => {
    loginPageForm = new LoginPageForm(new FormBuilder());
    form = loginPageForm.createForm();
  });

  it('should create login form empty', () => {
    expect(form).not.toBeNull();
    expect(form.get('email')).not.toBeNull();
    expect(form.get('email')?.value).toEqual('');
    expect(form.get('email')?.valid).toBeFalsy();

    expect(form.get('password')).not.toBeNull();
    expect(form.get('password')?.value).toEqual('');
    expect(form.get('password')?.valid).toBeFalsy();
  });

  it('should have email invalid if email is not valid', () => {
    form.get('email')?.setValue('invalid email');
    form.get('email')?.updateValueAndValidity(); // Ensure validation is updated
    expect(form.get('email')?.valid).toBeFalsy();
  });

  it('should have email valid if email is valid', () => {
    form.get('email')?.setValue('valid@email.com');
    form.get('email')?.updateValueAndValidity(); // Ensure validation is updated
    expect(form.get('email')?.valid).toBeTruthy();
  });

  it('should have a valid form', () => {
    form.get('email')?.setValue('valid@email.com');
    form.get('password')?.setValue('anyPassword');
    form.updateValueAndValidity(); // Ensure form validation is updated
    expect(form.valid).toBeTruthy();
  });

});