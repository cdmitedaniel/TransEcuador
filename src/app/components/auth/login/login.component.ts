import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }
  
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
  public loginError = "";
  ngOnInit() {
  }
  onLogin(form: NgForm) {
    if (form.valid) {
          return this.authService.loginuser(this.user.email, this.user.password)
        .subscribe(
          data => {
            this.authService.setUserLoggedIn(data);
            this.router.navigate(['/ruta']);
            location.reload();
          },
          error =>{
            this.loginError = error.error.status;
            setTimeout(() => {
              this.loginError = "";
            }, 4000);
          }
        );
        
      
    } else {
      this.loginError = "Campos son requeridos";
      this.onIsError();
    
    }

}
onIsError(): void {
  this.isError = true;
  setTimeout(() => {
    this.isError = false;
    this.loginError = "";
  }, 4000);
}
}
