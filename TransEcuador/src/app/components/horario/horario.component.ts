import { Component, OnInit } from '@angular/core';
import { Horario } from 'src/app/models/horario';
import { Ruta } from 'src/app/models/ruta';
import { NgForm } from '@angular/forms';
import { User } from "../../models/user";


import { HorarioService } from 'src/app/services/horario.service';
import { RutaService } from 'src/app/services/ruta.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-horario',
  templateUrl: './horario.component.html',
  styleUrls: ['./horario.component.css'],
  providers: [HorarioService]
})
export class HorarioComponent implements OnInit {

  constructor(private horarioService: HorarioService, private router: Router ) { }

  public rutaSeleccionada:Ruta;
  public error1 = "";
  public userLogueado:User;


  
  ngOnInit() {
    this.userLogueado=JSON.parse(localStorage.getItem("currentUser"));
    if(this.userLogueado!=undefined){
      this.rutaSeleccionada=JSON.parse(localStorage.getItem('selectedruta'));
     this.getHorariosruta();
    }else{
      this.router.navigate(['/auth/login']);
    }
    


    
  }

  getHorariosruta(){
    this.horarioService.getHorariosruta(this.rutaSeleccionada)
      .subscribe((res: Horario[]) => {
        this.horarioService.horarios = res as Horario[];
      });
  }

  pasarHorario(form: NgForm,horario:Horario){
    //pregunta si el numero de asientos es 

    if(form.value.nroasientos > 0 &&  form.value.nroasientos < 5){
      localStorage.setItem('selectedhorario', JSON.stringify(horario));
    localStorage.setItem('asientos',form.value.nroasientos)
    
    this.router.navigate(['/asiento']);


    }else{
      this.error1 = "escoja su numero de Asientos";
    }


    

  }
}


