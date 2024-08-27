// src/app/empresa/listar-empresa/listar-empresa.component.ts
import { Component, OnInit } from '@angular/core';
import { EmpresaService } from '../../services/empresa.service';
import { Empresa } from '../../models/empresa.model';

@Component({
  selector: 'app-listar-empresa',
  templateUrl: './listar-empresa.component.html',
  styleUrls: ['./listar-empresa.component.css']
})
export class ListarEmpresaComponent implements OnInit {
  empresas: Empresa[] = [];

  constructor(private empresaService: EmpresaService) {}

  ngOnInit(): void {
    this.empresaService.getEmpresas().subscribe(
      (data: Empresa[]) => this.empresas = data,
      (error: any) => console.error('Erro ao buscar empresas:', error)
    );
  }

  deleteEmpresa(id: number | null): void {
    if (id !== undefined && id !== null) {
      this.empresaService.deleteEmpresa(id).subscribe(
        () => this.empresas = this.empresas.filter(empresa => empresa.id !== id),
        (error: any) => console.error('Erro ao deletar empresa:', error)
      );
    }
  }
}
