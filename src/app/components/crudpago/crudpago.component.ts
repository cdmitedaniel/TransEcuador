import { Component, OnInit } from '@angular/core';

import { PagoService } from '../../services/pago.service';
import { NgForm } from '@angular/forms';
import { Pago } from '../../models/pago';


declare var M: any;

@Component({
  selector: 'app-crudpago',
  templateUrl: './crudpago.component.html',
  styleUrls: ['./crudpago.component.css'],
  providers: [ PagoService ]
})
export class PagoComponent implements OnInit {

  constructor(private pagoService: PagoService) { }

  ngOnInit() {
    this.getPagos();
  }
    
 
  addPago(form?: NgForm) {
    console.log(form.value);
    if(form.value._id) {
      this.pagoService.putPago(form.value)
        .subscribe(res => {
          this.resetForm(form);
          this.getPagos();
          M.toast({html: 'Updated Successfully'});
        });
    } else {
      this.pagoService.postPago(form.value)
      .subscribe(res => {
        this.getPagos();
        this.resetForm(form);
        M.toast({html: 'Save successfully'});
      });
    }
    
  }

  getPagos() {
    this.pagoService.getPagos()
      .subscribe(res => {
        this.pagoService.pagos = res as Pago[];
      });
}


  editPago(pago: Pago) {
    this.pagoService.selectedPago = pago;
  }

  deletePago(_id: string, form: NgForm) {
    if(confirm('Are you sure you want to delete it?')) {
      this.pagoService.deletePago(_id)
        .subscribe(res => {
          this.getPagos();
          this.resetForm(form);
          M.toast({html: 'Deleted Succesfully'});
        });
    }
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.pagoService.selectedPago= new Pago();
    }
  }

}
