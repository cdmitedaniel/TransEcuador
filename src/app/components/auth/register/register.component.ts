import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router ) { }

  private user: User = {
    _id:'',
    nombre:'',
    apellido:'', 
    nacimiento: '',
    email: '',
    password: '',
    direccion:'', 
    telefono: '',
    cedula:'',
    ciudad:''
  };

  public isError = false;
  public msgError = 'Campos vacíos';

  ngOnInit() {
  }

  onRegister(form: NgForm){ 
    if(form.valid){
      this.authService
        .registerUser(this.user)
        .subscribe(user => {
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.router.navigate(['/ruta']);
          location.reload();
        },
        res => {
          this.msgError = "Usuario ya existe";
          this.onIsError();
        });
    } else {
      this.onIsError();
    }
    
  }

  onIsError(): void {
    this.isError = true;
    setTimeout(() => {
      this.isError = false;
    }, 4000);
}
}
