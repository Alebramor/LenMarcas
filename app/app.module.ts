import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { ContactaConmigoComponent } from './contacta-conmigo/contacta-conmigo.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SobreMiComponent } from './sobre-mi/sobre-mi.component';
import { AficionesComponent } from './aficiones/aficiones.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { CompetenciasComponent } from './competencias/competencias.component';
import { ExperienciaLabroalComponent } from './experiencia-labroal/experiencia-labroal.component';
import { JuegosDeRolComponent } from './juegos-de-rol/juegos-de-rol.component';
import { GuitarraComponent } from './guitarra/guitarra.component';
import { MasComponent } from './mas/mas.component';
import { NavmenuComponent } from './navmenu/navmenu.component';
import { RedesSocialesComponent } from './redes-sociales/redes-sociales.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ContactaConmigoComponent,
    PageNotFoundComponent,
    SobreMiComponent,
    AficionesComponent,
    HabilidadesComponent,
    CompetenciasComponent,
    ExperienciaLabroalComponent,
    JuegosDeRolComponent,
    GuitarraComponent,
    MasComponent,
    NavmenuComponent,
    RedesSocialesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
