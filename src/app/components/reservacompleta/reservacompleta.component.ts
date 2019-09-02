import { Component, OnInit } from '@angular/core';
import { Horario } from 'src/app/models/horario';
import { Asiento } from 'src/app/models/asiento';
import { User } from 'src/app/models/user';
import { Ruta } from 'src/app/models/ruta';

import { NgForm } from '@angular/forms';
import { AsientoService } from 'src/app/services/asiento.service';
import { PagoService } from 'src/app/services/pago.service';

import { forEach } from '@angular/router/src/utils/collection';
import {formatDate} from '@angular/common';
import { Router } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Pago } from 'src/app/models/pago';



@Component({
  selector: 'app-reservacompleta',
  templateUrl: './reservacompleta.component.html',
  styleUrls: ['./reservacompleta.component.css']
})



export class ReservacompletaComponent implements OnInit {
  constructor(private asientoService: AsientoService,private router: Router,private pagoService: PagoService ) { }
  private pago: Pago;
  public userLogueado:User;
 public horarioSeleccionado:Horario;
  public usuariologeado:User;
  public nroasientos:number;
  public asientoseleccionados:Asiento;
  public myDate ='';
  public rutaSeleccionada:Ruta;
  public total:Number;




  
  ngOnInit() {
    this.userLogueado=JSON.parse(localStorage.getItem("currentUser"));

    if(this.userLogueado!=undefined){
      this.horarioSeleccionado=JSON.parse(localStorage.getItem("selectedhorario"));
      this.usuariologeado=JSON.parse(localStorage.getItem("currentUser"));
      this.nroasientos=+localStorage.getItem("asientos");
      this.myDate=formatDate(new Date(), 'dd/MM/yyyy', 'en');
      this.asientoseleccionados=JSON.parse(localStorage.getItem("selectedasiento"));
      console.log("as: "+this.asientoseleccionados._id);
      this.rutaSeleccionada=JSON.parse(localStorage.getItem('selectedruta'));
      this.pasarPagodinero();
      this.pago = {
        _id:'',
        usuario:this.usuariologeado._id,
        nombretarjeta:'', 
        numerotarjeta: ''
      };

    }else{
      this.router.navigate(['/auth/login']);

    }

  }
  pasarPago(form: NgForm){ 
    if(form.valid){
      this.pagoService.postPago(this.pago)
        .subscribe(pago => {
         console.log("ndjnjdbjed");
         this.router.navigate(['/reservafinalizada']);  

        }
        );
    } else {
      console.log("asda")
    }
    
  }

  pasarPagodinero(){ 
    this.total=this.nroasientos * this.rutaSeleccionada.costopiso1;

    
  }

}
