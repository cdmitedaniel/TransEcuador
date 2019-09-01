
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Asiento } from '../models/asiento';
import { AsientoComponent } from '../components/asiento/asiento.component';


@Injectable({
  providedIn: 'root'
})
export class AsientoService {
  
    selectedAsiento: Asiento;
    asientos: Asiento[];
    readonly URL_API = 'http://localhost:3000/asiento';
  

  constructor(private http: HttpClient) {
      this.selectedAsiento = new Asiento();
   }

  getAsientos(){ 
    return this.http.get(this.URL_API);
  }

  postAsiento(asiento: Asiento){ 
    return this.http.post(this.URL_API, asiento);
  }

  putAsiento(asiento: Asiento){ 
    return this.http.put(this.URL_API + `/${asiento._id}`, asiento);
  }

  deleteAsiento(_id: string){ 
    return this.http.delete(this.URL_API + `/${_id}`);
  }
  
}

