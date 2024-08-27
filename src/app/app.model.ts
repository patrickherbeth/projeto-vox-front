// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpresaModule } from './empresa/empresa.module';
import { RouterModule } from '@angular/router';
import {SocioModule} from "./socio/socio.module"; // Importe o RouterModule

@NgModule({
  declarations: [

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EmpresaModule,
    RouterModule,
    SocioModule,
    AppComponent
  ],
  providers: [],

})
export class AppModule { }
