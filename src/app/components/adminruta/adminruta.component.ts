import { Component, OnInit } from '@angular/core';
import { RutaService } from '../../services/ruta.service';
import { NgForm } from '@angular/forms';
import { Ruta } from 'src/app/models/ruta';

declare var M: any;

@Component({
  selector: 'app-adminruta',
  templateUrl: './adminruta.component.html',
  styleUrls: ['./adminruta.component.css'],
  providers: [RutaService]
})
export class AdminrutaComponent implements OnInit {


  constructor(private rutaService: RutaService) { }

  ngOnInit() {
    this.getRutas();
  }

  addRuta(form: NgForm) {
    if(form.value._id) {
      this.rutaService.putRuta(form.value)
        .subscribe(res => {
          this.resetForm(form);
          this.getRutas();
          M.toast({html: 'Actualizado Satisfactoriamente'});
        })
    } else {
      this.rutaService.postRuta(form.value)
      .subscribe(res =>{
        this.getRutas();
        this.resetForm(form);
        M.toast({html: 'Guardado Satisfactoriamente'});
      });
    }
  }

  getRutas() {
    this.rutaService.getRutas()
      .subscribe(res => {
        this.rutaService.rutas = res as Ruta[];
      });
  }

  editRuta(ruta: Ruta) {
    this.rutaService.selectedRuta = ruta;
  }

  deleteRuta(_id: string, form: NgForm){
    if(confirm('Esta seguro de querer eliminar?')){
      this.rutaService.deleteRuta(_id)
      .subscribe(res => {
        this.getRutas();
        this.resetForm(form);
        M.toast({html: 'Eliminado Satisfactoriamente'});
      });
    }
  }

  resetForm(form?: NgForm){
    if (form){
      form.reset();
      this.rutaService.selectedRuta = new Ruta();
    }
  }
  
}






  