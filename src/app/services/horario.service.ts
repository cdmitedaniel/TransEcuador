
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Horario } from '../models/horario';
import { Ruta } from '../models/ruta';

import { HorarioComponent } from '../components/horario/horario.component';


@Injectable({
  providedIn: 'root'
})
export class HorarioService {
    selectedRuta: string;
    selectedHorario: Horario;
    horarios: Horario[];
    readonly URL_API = 'http://localhost:3000/horario';
  

  constructor(private http: HttpClient) {
      this.selectedHorario = new Horario();
   }

  getHorarios(){ 
    return this.http.get(this.URL_API);
  }

  postHorario(Horario: Horario){ 
    return this.http.post(this.URL_API, Horario);
  }

  putHorario(horario: Horario){ 
    return this.http.put(this.URL_API + `/${horario._id}`, horario);
  }

  deleteHorario(_id: string){ 
    return this.http.delete(this.URL_API + `/${_id}`);
  }
  
  getHorariosruta(ruta: Ruta){
    return this.http.get(this.URL_API + `/buscar/${ruta._id}`);
  }
}

