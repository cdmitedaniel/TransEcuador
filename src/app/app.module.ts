import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { RutaComponent } from './components/ruta/ruta.component';
import { HorarioComponent } from './components/horario/horario.component';
import { AsientoComponent } from './components/asiento/asiento.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReservacompletaComponent } from './components/reservacompleta/reservacompleta.component';
import { AcercadeComponent } from './components/acercade/acercade.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ReservafinalizadaComponent } from './components/reservafinalizada/reservafinalizada.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RutaComponent,
    HorarioComponent,
    AsientoComponent,
    LoginComponent,
    RegisterComponent,
    ReservacompletaComponent,
    AcercadeComponent,
    InicioComponent,
    ReservafinalizadaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
