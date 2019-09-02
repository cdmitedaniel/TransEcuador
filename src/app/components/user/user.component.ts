import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from '../../models/user';

declare var M: any;

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [ UserService ]
})
export class UserComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsers();
  }

  addUser(form?: NgForm) {
    console.log(form.value);
    if(form.value._id) {
      this.userService.putUser(form.value)
        .subscribe(res => {
          this.resetForm(form);
          this.getUsers();
          M.toast({html: 'Cliente actualizado'});
        });
    } 
      else {
        if(form.value.name==""){
          M.toast({html:'llenar campo name'});
        }
        if(form.value.position==""){
          M.toast({html:'llenar campo position'});
        }
        if(form.value.office==""){
          M.toast({html:'llenar campo office'});
        }
        if(form.value.salary==""){
          M.toast({html:'llenar campo salary'});
        }
      this.userService.postUser(form.value)
      .subscribe(res => {
        this.getUsers();
        this.resetForm(form);
        M.toast({html: 'Cliente Guardado'});
      });
    }
  
  }

  getUsers() {
    this.userService.getUsers()
      .subscribe(res => {
        this.userService.users = res as User[];
      });
  }

  editUser(user: User) {
    this.userService.selectedUser = user;
  }

  deleteUser(_id: string, form: NgForm) {
    if(confirm('¿Esta seguro de eliminar?')) {
      this.userService.deleteUser(_id)
        .subscribe(res => {
          this.getUsers();
          this.resetForm(form);
          M.toast({html: 'Eiminado'});
        });
    }
  }
  

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.userService.selectedUser = new User();
    }
  }

}

