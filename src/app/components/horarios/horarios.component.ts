import { Component, OnInit } from '@angular/core';
import { HorarioService } from '../../services/horario.service';
import { NgForm } from '@angular/forms';
import { Horario } from 'src/app/models/horario';

declare var M: any;

@Component({
selector: 'app-horarios',
templateUrl: './horarios.component.html',
styleUrls: ['./horarios.component.css'],
providers: [HorarioService]
})
export class HorariosComponent implements OnInit {


constructor(private horarioService: HorarioService) { }

  ngOnInit() {
  this.getHorarios();
  }

    addHorario(form: NgForm) {
    if(form.value._id) {
    this.horarioService.putHorario(form.value)
    .subscribe(res => {
    this.resetForm(form);
    this.getHorarios();
    M.toast({html: 'Actualizado Satisfactoriamente'});
    })
    } else {
    this.horarioService.postHorario(form.value)
    .subscribe(res =>{
    this.getHorarios();
    this.resetForm(form);
    M.toast({html: 'Guardado Satisfactoriamente'});
    });
    }
    }

      getHorarios() {
      this.horarioService.getHorarios()
      .subscribe(res => {
      this.horarioService.horarios = res as Horario[];
      });
      }

      editHorario(horario: Horario) {
      this.horarioService.selectedHorario = horario;
      }

      deleteHorario(_id: string, form: NgForm){
      if(confirm('Esta seguro de querer eliminar?')){
      this.horarioService.deleteHorario(_id)
      .subscribe(res => {
      this.getHorarios();
      this.resetForm(form);
      M.toast({html: 'Eliminado Satisfactoriamente'});
      });
      }
      }

      resetForm(form?: NgForm){
      if (form){
      form.reset();
      this.horarioService.selectedHorario = new Horario();
      }
      }

      }

