import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ILogin } from 'src/app/models/ILogin';
import { IResponseLogin } from 'src/app/models/IResponseLogin';
import { LoginService } from 'src/app/servicios/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  formLogin: FormGroup;
  usuario: ILogin;
  responseLogin!: IResponseLogin;
  @Output('authenticated') isAuhenticated = new EventEmitter<boolean>();
  authenticated: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {
    this.formLogin = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
    this.usuario = { username: '', password: '' };
    this.authenticated = false;
  }

  ingresar() {
    this.usuario = {
      username: this.formLogin.value.username,
      password: this.formLogin.value.password,
    };
    console.log(this.usuario);
    this.loginService.postLogin(this.usuario).subscribe((response) => {
      if (response.status > 400) {
        console.log("RESPONSE ");
        this.authenticated = false;
        this.isAuhenticated.emit(this.authenticated);
        this.formLogin.reset();
        this.router.navigate(['/login']);
      } else {
        this.responseLogin = response;
        console.log(this.responseLogin);
        sessionStorage.setItem('token', this.responseLogin.token);
        sessionStorage.setItem('roles', response.roles);
        this.authenticated = true;
        this.isAuhenticated.emit(this.authenticated);
        this.router.navigate(['/home']);
      }
    });
  }
}
