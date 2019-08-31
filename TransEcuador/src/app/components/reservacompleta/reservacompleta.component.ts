import { Component, OnInit } from '@angular/core';
import { Horario } from 'src/app/models/horario';
import { Asiento } from 'src/app/models/asiento';
import { User } from 'src/app/models/user';
import { NgForm } from '@angular/forms';
import { AsientoService } from 'src/app/services/asiento.service';
import { forEach } from '@angular/router/src/utils/collection';
import {formatDate} from '@angular/common';
import { Router } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-reservacompleta',
  templateUrl: './reservacompleta.component.html',
  styleUrls: ['./reservacompleta.component.css']
})
export class ReservacompletaComponent implements OnInit {
  constructor(private asientoService: AsientoService,private router: Router) { }
  public userLogueado:User;
 public horarioSeleccionado:Horario;
  public usuariologeado:User;
  public nroasientos:number;
  public asientoseleccionados:Asiento;
  public myDate ='';


  
  ngOnInit() {
    this.userLogueado=JSON.parse(localStorage.getItem("currentUser"));

    if(this.userLogueado!=undefined){
      this.horarioSeleccionado=JSON.parse(localStorage.getItem("selectedhorario"));
      this.usuariologeado=JSON.parse(localStorage.getItem("currentUser"));
      this.nroasientos=+localStorage.getItem("asientos");
      this.myDate=formatDate(new Date(), 'dd/MM/yyyy', 'en');
      this.asientoseleccionados=JSON.parse(localStorage.getItem("hola"));
    }else{
      this.router.navigate(['/auth/login']);

    }

    

  }

}
