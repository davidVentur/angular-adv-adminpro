import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  //Declaracion de formulario
  public registerForm = this.fb.group({
    nombre: ['Andy', [Validators.required, Validators.minLength(3)]],
    email: ['andy@gamil.com', [Validators.required]],
    password: ['123456', [Validators.required]],
    confirmPassword: ['123456', [Validators.required]],
    terms: [false, [Validators.required]],
  });

  constructor(private fb: FormBuilder) {}

  crearUsuario() {
    console.log('valor de form', this.registerForm.value);
  }

  ngOnInit(): void {}
}
