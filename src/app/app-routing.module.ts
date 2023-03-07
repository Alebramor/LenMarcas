import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AficionesComponent } from './aficiones/aficiones.component';
import { CompetenciasComponent } from './competencias/competencias.component';
import { ContactaConmigoComponent } from './contacta-conmigo/contacta-conmigo.component';
import { ExperienciaLabroalComponent } from './experiencia-labroal/experiencia-labroal.component';
import { GuitarraComponent } from './guitarra/guitarra.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { InicioComponent } from './inicio/inicio.component';
import { JuegosDeRolComponent } from './juegos-de-rol/juegos-de-rol.component';
import { MasComponent } from './mas/mas.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SobreMiComponent } from './sobre-mi/sobre-mi.component';

//Rutas de Navegación
const routes: Routes = [

  {path:'', redirectTo: '/inicio', pathMatch: 'full'},
  {path:'contacta-conmigo', component: ContactaConmigoComponent},
  {path:'inicio', component: InicioComponent},
  {path:'aficiones', component: AficionesComponent},
  {path:'competencias', component: CompetenciasComponent},
  {path:'experienciaLabroal', component: ExperienciaLabroalComponent},
  {path:'sobreMi', component: SobreMiComponent},
  {path:'habilidades', component: HabilidadesComponent},
  {path:'juegosDeRol', component: JuegosDeRolComponent},
  {path:'guitarra', component: GuitarraComponent},
  {path:'mas', component: MasComponent},
  {path:'**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
