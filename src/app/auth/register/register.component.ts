import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  public formSubmited = false;

  //Declaracion de formulario
  public registerForm = this.fb.group(
    {
      nombre: ['Andy', [Validators.required, Validators.minLength(3)]],
      email: ['andy@gmail.com', [Validators.required, Validators.email]],
      password: ['123456', [Validators.required]],
      confirmPassword: ['123456', [Validators.required]],
      terms: [true, [Validators.required]],
    },
    {
      validators: this.passwordIguales('password', 'confirmPassword'),
    }
  );

  constructor(
    private fb: FormBuilder,
    private usuarioService: UsuarioService
  ) {}

  crearUsuario() {
    this.formSubmited = true;
    if (
      this.registerForm.invalid ||
      this.registerForm.get('terms').value == false
    ) {
      return;
    }

    //Crear usuario -> Posteo
    console.log(this.registerForm.value);
    this.usuarioService.crearUsuario(this.registerForm.value).subscribe(
      (resp) => {
        console.log('Respuesta', resp);
      },
      (err) => {
        console.warn(err.error.msg);
      }
    );
  }

  //Validaciones del formulario//
  campoNoValido(campo: string): boolean {
    if (this.registerForm.get(campo).invalid && this.formSubmited) {
      return true;
    } else {
      return false;
    }
  }

  passwordsValidation() {
    const pass1 = this.registerForm.get('password').value;
    const pass2 = this.registerForm.get('confirmPassword').value;

    if (pass1 !== pass2 && this.formSubmited) {
      return true;
    } else {
      return false;
    }
  }

  aceptaTerminos() {
    return !this.registerForm.get('terms').value && this.formSubmited;
  }

  passwordIguales(pass1Name: string, pass2Name: string) {
    return (formGroup: FormGroup) => {
      const pass1Control = formGroup.get(pass1Name);
      const pass2Control = formGroup.get(pass2Name);

      if (pass1Control.value === pass2Control.value) {
        pass2Control.setErrors(null);
      } else {
        pass2Control.setErrors({ noEsigual: true });
      }
    };
  }
  ////////////////////////////////

  ngOnInit(): void {}
}
