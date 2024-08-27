// src/app/empresa/detalhe-empresa/detalhe-empresa.component.ts
import { Component, Input } from '@angular/core';
import { Empresa } from '../../models/empresa.model'; // Importe o modelo Empresa

@Component({
  selector: 'app-detalhe-empresa',
  templateUrl: './detalhe-empresa.component.html',
  styleUrls: ['./detalhe-empresa.component.css']
})
export class DetalheEmpresaComponent {
  @Input() empresa!: Empresa; // A propriedade empresa deve ser do tipo Empresa
}
