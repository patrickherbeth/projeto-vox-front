// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importação dos módulos de roteamento dos módulos específicos
import { EmpresaRoutingModule } from './empresa/empresa-routing.module';
import { SocioRoutingModule } from './socio/socio-routing.module';

export const routes: Routes = [
  { path: '', redirectTo: '/empresas', pathMatch: 'full' },
  // Outras rotas principais, se houver
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    EmpresaRoutingModule, // Importa as rotas do módulo Empresa
    SocioRoutingModule    // Importa as rotas do módulo Socio
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
