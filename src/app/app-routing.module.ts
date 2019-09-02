import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { RutaComponent } from './components/ruta/ruta.component';
import { UserComponent } from './components/user/user.component';
import { HorarioComponent } from './components/horario/horario.component';
import { AsientoComponent } from './components/asiento/asiento.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { ReservacompletaComponent } from './components/reservacompleta/reservacompleta.component';
import { AcercadeComponent } from './components/acercade/acercade.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ReservafinalizadaComponent } from './components/reservafinalizada/reservafinalizada.component';
import { AdminrutaComponent } from './components/adminruta/adminruta.component';
import { HorariosComponent } from './components/horarios/horarios.component';
import { PagoComponent } from './components/crudpago/crudpago.component';




const routes: Routes = [
  {path: 'auth/login', component: LoginComponent},
  {path: 'auth/register', component: RegisterComponent},
  {path: 'ruta', component: RutaComponent},
  {path: 'horario', component: HorarioComponent},
  {path: 'asiento', component: AsientoComponent},
  {path: 'user', component: UserComponent},
  {path: 'reservacompleta', component: ReservacompletaComponent},
  {path: 'acercade', component: AcercadeComponent},
  {path: 'reservafinalizada', component: ReservafinalizadaComponent},
  {path: 'adminruta', component: AdminrutaComponent},
  {path: 'horarios', component: HorariosComponent},
  {path: 'pago', component: PagoComponent},

  {path: '', component: InicioComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
