import { Component, OnInit } from '@angular/core';
import { Ruta } from 'src/app/models/ruta';
import { RutaService } from 'src/app/services/ruta.service';
import { Router } from '@angular/router';
import { HorarioService } from 'src/app/services/horario.service';
import { User } from "../../models/user";

@Component({
  selector: 'app-ruta',
  templateUrl: './ruta.component.html',
  styleUrls: ['./ruta.component.css'],
  providers: [RutaService]
})
export class RutaComponent implements OnInit {
  constructor(private rutaService: RutaService, private horarioService: HorarioService, private router: Router ) { }
  public userLogueado:User;

  ngOnInit() {
    this.userLogueado=JSON.parse(localStorage.getItem("currentUser"));
    if(this.userLogueado!=undefined){
      this.getRutas();
    }else{
      this.router.navigate(['/auth/login']);
    }
    
  }

  getRutas(){
    this.rutaService.getRutas()
      .subscribe(res => {
        this.rutaService.rutas = res as Ruta[];
      });
  }
  pasarRuta(ruta:Ruta){
    //this.horarioService.selectedRuta= "5d58b3175dfaeb3e593e57fd";
    localStorage.setItem('selectedruta', JSON.stringify(ruta));

    this.router.navigate(['/horario']);

  }
}
