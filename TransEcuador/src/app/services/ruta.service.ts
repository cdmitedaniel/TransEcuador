
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ruta } from '../models/ruta';
import { RutaComponent } from '../components/ruta/ruta.component';


@Injectable({
  providedIn: 'root'
})
export class RutaService {
  
    selectedRuta: Ruta;
    rutas: Ruta[];
    readonly URL_API = 'http://localhost:3000/ruta';
  

  constructor(private http: HttpClient) {
      this.selectedRuta = new Ruta();
   }

  getRutas(){ 
    return this.http.get(this.URL_API);
  }

  postRuta(Ruta: Ruta){ 
    return this.http.post(this.URL_API, Ruta);
  }

  putRuta(ruta: Ruta){ 
    return this.http.put(this.URL_API + `/${ruta._id}`, ruta);
  }

  deleteRuta(_id: string){ 
    return this.http.delete(this.URL_API + `/${_id}`);
  }
  
}

