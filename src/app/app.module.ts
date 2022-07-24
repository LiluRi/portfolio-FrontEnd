import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { EstudiosComponent } from './componentes/estudios/estudios.component';
import { EstudiosComplementariosComponent } from './componentes/estudios-complementarios/estudios-complementarios.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { HttpClientModule } from '@angular/common/http';
import { LogoApComponent } from './componentes/logo-ap/logo-ap.component';
import { HeaderComponent } from './componentes/header/header.component';
import { RedesSocialesComponent } from './componentes/redes-sociales/redes-sociales.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
@NgModule({
  declarations: [
    AppComponent,
    AcercaDeComponent,
    EstudiosComponent,
    EstudiosComplementariosComponent,
    HabilidadesComponent,
    LogoApComponent,
    HeaderComponent,
    RedesSocialesComponent,
    BannerComponent,
    ProyectosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgCircleProgressModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
