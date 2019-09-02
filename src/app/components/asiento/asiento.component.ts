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
import { isUndefined } from 'util';
declare var M: any;

@Component({
  selector: 'app-asiento',
  templateUrl: './asiento.component.html',
  styleUrls: ['./asiento.component.css']
})
export class AsientoComponent implements OnInit {

  constructor(private asientoService: AsientoService,private router: Router) { }

  public horarioSeleccionado:Horario;
  public usuariologeado:User;
  public nroasientos:number;
  public error1 = "";
  public error2 = "";
  public error3 = "";
  public error4 = "";
  public validar1 = true;
  public validar2 = true;
  public validar3 = true;
  public validar4 = true;
  public myDate ='';
  public mostrar=false;
  public filtro : Number[];

  private asiento: Asiento;

  ngOnInit() {
    this.filtro=[];
    this.usuariologeado=JSON.parse(localStorage.getItem("currentUser"));
    this.filṭ̣roasiento();
    if(this.usuariologeado!=undefined){
      this.horarioSeleccionado=JSON.parse(localStorage.getItem("selectedhorario"));
    
      this.nroasientos=+localStorage.getItem("asientos");
      this.myDate=formatDate(new Date(), 'dd/MM/yyyy', 'en');
      this.asiento={
        _id:'',
        horario:this.horarioSeleccionado._id,
        dia:this.myDate,
        usuario:this.usuariologeado._id,
        asiento1:0,
        asiento2:0,
        asiento3:0,
        asiento4:0
      };
    }else{
      this.router.navigate(['/auth/login']);

    }

  }
  filṭ̣roasiento(){
    this.asientoService.getAsientos()
    .subscribe((res: Asiento[]) => {
      this.asientoService.asientos = res as Asiento[];
      this.asientoService.asientos.forEach(element => {
        if(element.horario==this.horarioSeleccionado._id){
          console.log("dnkwdwkdn");

          if(this.myDate==element.dia){
           
            if(element.asiento1!=0){
              this.filtro.push(element.asiento1);
            }
            if(element.asiento2!=0){
              this.filtro.push(element.asiento2);
            }
            if(element.asiento3!=0){
              this.filtro.push(element.asiento3);
            }
            if(element.asiento4!=0){
              this.filtro.push(element.asiento4);
            }
          }
        }
        
      });
    });
  }

  arrayOne(n: number): any[] {
    return Array(n);
  }
  validarAsiento(form: NgForm){
    //ASIENTO1
    if(form.value.asiento1>0 && form.value.asiento1<76){
      this.asientoService.getAsientos()
        .subscribe((res: Asiento[]) => {
          this.asientoService.asientos = res as Asiento[];
          this.asientoService.asientos.forEach(element => {
            if(element.horario==this.horarioSeleccionado._id){
              if(this.myDate==element.dia){
                switch(form.value.asiento1){
                  case element.asiento1:
                    this.error1 = "Asiento ocupado";
                    this.validar1=false;
                    break;
                  case element.asiento2:
                    this.error1 = "Asiento ocupado";
                    this.validar1=false;
                    break;
                  case element.asiento3:
                    this.error1 = "Asiento ocupado";
                    this.validar1=false;
                    break;
                  case element.asiento4:
                    this.error1 = "Asiento ocupado";
                    this.validar1=false;
                    break;
                  default:
                  this.error1 = "Asiento desocupado";
                  this.validar1=true;
                    break;
                }
              }else{
                this.error1 = "Asiento desocupado";
                this.validar1=true;
              }
            }else{
              this.error1 = "Asiento desocupado";
              this.validar1=true;
            }
            
          });
         
        });
    }else{
      if(this.nroasientos==1){
        this.error1 = "Asiento no existe";
        this.validar1=false;
      }else{
        this.error1 = "Asiento no existe";
      }
    }
    //ASIENTO2
    if(form.value.asiento2>0 && form.value.asiento2<76){
      this.asientoService.getAsientos()
        .subscribe((res: Asiento[]) => {
          this.asientoService.asientos = res as Asiento[];
          this.asientoService.asientos.forEach(element => {
            if(element.horario==this.horarioSeleccionado._id){
              if(this.myDate==element.dia){
                switch(form.value.asiento2){
                  case element.asiento1:
                    this.error2 = "Asiento ocupado";
                    this.validar2=false;
                    break;
                  case element.asiento2:
                    this.error2 = "Asiento ocupado";
                    this.validar2=false;
                    break;
                  case element.asiento3:
                    this.error2 = "Asiento ocupado";
                    this.validar2=false;
                    break;
                  case element.asiento4:
                    this.error2 = "Asiento ocupado";
                    this.validar2=false;
                    break;
                  case form.value.asiento1:
                    this.error2 = "Asiento repetido";
                    this.validar2=false;
                    break;
                  default:
                  this.error2 = "Asiento desocupado";
                  this.validar2=true;
                    break;
                }
              }else{
                this.error2 = "Asiento desocupado";
                this.validar2=true;
              }
            }else{
              this.error2 = "Asiento desocupado";
              this.validar2=true;
            }
          });
        });
    }else{
      if(this.nroasientos==2){
        this.error2 = "Asiento no existe";
        this.validar2=false;
      }else{
        this.error2 = "Asiento no existe";
      }
    }
    //ASIENTO3
    if(form.value.asiento3>0 && form.value.asiento3<76){
      this.asientoService.getAsientos()
        .subscribe((res: Asiento[]) => {
          this.asientoService.asientos = res as Asiento[];
          this.asientoService.asientos.forEach(element => {
            if(element.horario==this.horarioSeleccionado._id){
              if(this.myDate==element.dia){
                switch(form.value.asiento3){
                  case element.asiento1:
                    this.error3 = "Asiento ocupado";
                    this.validar3=false;
                    break;
                  case element.asiento2:
                    this.error3 = "Asiento ocupado";
                    this.validar3=false;
                    break;
                  case element.asiento3:
                    this.error3 = "Asiento ocupado";
                    this.validar3=false;
                    break;
                  case element.asiento4:
                    this.error3 = "Asiento ocupado";
                    this.validar3=false;
                    break;
                  case form.value.asiento1:
                    this.error3 = "Asiento repetido";
                    this.validar3=false;
                    break;
                  case form.value.asiento2:
                    this.error3 = "Asiento repetido";
                    this.validar3=false;
                    break;
                  default:
                  this.error3 = "Asiento desocupado";
                  this.validar3=true;
                    break;
                }
            }else{
                this.error3 = "Asiento desocupado";
                this.validar3=true;
              }
            }else{
              this.error3 = "Asiento desocupado";
              this.validar3=true;
            }
          });
        });
    }else{
      if(this.nroasientos==3){
        this.error3 = "Asiento no existe";
        this.validar3=false;
      }else{
        this.error3 = "Asiento no existe";
      }
    }
    //ASIENTO4
    if(form.value.asiento4>0 && form.value.asiento4<76){
      this.asientoService.getAsientos()
        .subscribe((res: Asiento[]) => {
          this.asientoService.asientos = res as Asiento[];
          this.asientoService.asientos.forEach(element => {
            if(element.horario==this.horarioSeleccionado._id){
              if(this.myDate==element.dia){
                switch(form.value.asiento4){
                  case element.asiento1:
                    this.error4 = "Asiento ocupado";
                    this.validar4=false;
                    break;
                  case element.asiento2:
                    this.error4 = "Asiento ocupado";
                    this.validar4=false;
                    break;
                  case element.asiento3:
                    this.error4 = "Asiento ocupado";
                    this.validar4=false;
                    break;
                  case element.asiento4:
                    this.error4 = "Asiento ocupado";
                    this.validar4=false;
                    break;
                  case form.value.asiento1:
                    this.error4 = "Asiento repetido";
                    this.validar4=false;
                    break;
                  case form.value.asiento2:
                    this.error4 = "Asiento repetido";
                    this.validar4=false;
                    break;
                  case form.value.asiento3:
                    this.error4 = "Asiento repetido";
                    this.validar4=false;
                    break;
                  default:
                  this.error4 = "Asiento desocupado";
                  this.validar4=true;
                    break;
                }
              }else{
                this.error4 = "Asiento desocupado";
                this.validar4=true;
              }
            }else{
              this.error4 = "Asiento desocupado";
              this.validar4=true;
            }
          });
        });
    }else{
      if(this.nroasientos==4){
        this.error4 = "Asiento no existe";
        this.validar4=false;
      }else{
        this.error4 = "Asiento no existe";
      }
      
    }
    this.mostrar=true;

  }
  getAsiento() {
    this.asientoService.getAsientos()
    .subscribe(res => {
    this.asientoService.asientos = res as Asiento[];
    });
    }

    editAsiento(asiento: Asiento) {
    this.asientoService.selectedAsiento = asiento;
    }

    deleteAsiento(_id: string, form: NgForm){
    if(confirm('Esta seguro de querer eliminar?')){
    this.asientoService.deleteAsiento(_id)
    .subscribe(res => {
    this.getAsiento();
    //this.resetForm(form);
    M.toast({html: 'Eliminado Satisfactoriamente'});
    });
    }
    }

  finalizarreserva(){
    if(this.validar1 && this.validar2 && this.validar3 && this.validar4){
      //SE GUARDA
      this.asientoService.postAsiento(this.asiento)
        .subscribe(asiento => {
          localStorage.setItem('selectedasiento',JSON.stringify(this.asiento));

          this.router.navigate(['/reservacompleta']);  
        });
    }else{

    }
  }
}
