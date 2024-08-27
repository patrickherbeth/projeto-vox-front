import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarEmpresaComponent } from './listar-empresa/listar-empresa.component';
import { DetalheEmpresaComponent } from './detalhe-empresa/detalhe-empresa.component';
import { CadastrarEmpresaComponent } from './cadastrar-empresa/cadastrar-empresa.component';

const routes: Routes = [
  { path: '', component: ListarEmpresaComponent },
  { path: 'editar/:id', component: DetalheEmpresaComponent },
  { path: 'cadastrar', component: CadastrarEmpresaComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpresaRoutingModule { }
