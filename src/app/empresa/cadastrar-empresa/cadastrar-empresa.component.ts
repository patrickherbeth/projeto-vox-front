// src/app/empresa/cadastrar-empresa/cadastrar-empresa.component.ts
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, RouterModule} from '@angular/router';
import { EmpresaService } from '../../services/empresa.service';
import { Empresa } from '../../models/empresa.model';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-cadastrar-empresa',
  templateUrl: './cadastrar-empresa.component.html',
  imports: [
    CommonModule, FormsModule, RouterModule
  ],
  styleUrls: ['./cadastrar-empresa.component.css'],

  standalone: true
})
export class CadastrarEmpresaComponent implements OnInit {
  empresa: Empresa = { id: null, nome: '', descricao: '' }; // Inicialize conforme necessário
  isEditMode = false;

  constructor(
    private empresaService: EmpresaService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.empresaService.getById(+id).subscribe(
        (data: Empresa) => this.empresa = data,
        (error: any) => console.error('Erro ao buscar empresa:', error)
      );
    }
  }

  onSubmit(): void {
    if (this.isEditMode && this.empresa.id != null) { // Verifique se id não é null
      this.empresaService.updateEmpresa(this.empresa.id, this.empresa).subscribe(
        () => this.router.navigate(['/empresas']),
        (error: any) => console.error('Erro ao atualizar empresa:', error)
      );
    } else {
      this.empresaService.addEmpresa(this.empresa).subscribe(
        () => this.router.navigate(['/empresas']),
        (error: any) => console.error('Erro ao criar empresa:', error)
      );
    }
  }
}
