
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pago } from '../models/pago';
import { AsientoComponent } from '../components/asiento/asiento.component';


@Injectable({
  providedIn: 'root'
})
export class PagoService {
  
    selectedPago: Pago;
    pagos: Pago[];
    readonly URL_API = 'http://localhost:3000/pago';
  

  constructor(private http: HttpClient) {
      this.selectedPago = new Pago();
   }

  getPagos(){ 
    return this.http.get(this.URL_API);
  }

  postPago(pago: Pago){ 
    return this.http.post(this.URL_API, pago);
  }

  putPago(pago: Pago){ 
    return this.http.put(this.URL_API + `/${pago._id}`, pago);
  }

  deletePago(_id: string){ 
    return this.http.delete(this.URL_API + `/${_id}`);
  }
  
}

