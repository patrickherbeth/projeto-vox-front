import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; // Importe o RouterModule

import { ListarEmpresaComponent } from './listar-empresa/listar-empresa.component';
import { DetalheEmpresaComponent } from './detalhe-empresa/detalhe-empresa.component';
import { CadastrarEmpresaComponent } from './cadastrar-empresa/cadastrar-empresa.component';

@NgModule({
  declarations: [
    ListarEmpresaComponent,
    DetalheEmpresaComponent,
    CadastrarEmpresaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule // Adicione o RouterModule aqui
  ]
})
export class EmpresaModule { }
