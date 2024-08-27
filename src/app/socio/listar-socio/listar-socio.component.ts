// src/app/socio/listar-socio/listar-socio.component.ts
import { Component, OnInit } from '@angular/core';
import { SocioService } from '../../services/socio.service';
import { Socio } from '../../models/socio.model';

@Component({
  selector: 'app-listar-socio',
  templateUrl: './listar-socio.component.html',
  styleUrls: ['./listar-socio.component.css']
})
export class ListarSocioComponent implements OnInit {
  socios: Socio[] = [];

  constructor(private socioService: SocioService) {}

  ngOnInit(): void {
    this.socioService.getSocios().subscribe(
      (data: Socio[]) => this.socios = data,
      (error: any) => console.error('Erro ao buscar sócios:', error)
    );
  }

  deleteSocio(id: number | null): void {
    if (id !== undefined && id !== null) {
      this.socioService.deleteSocio(id).subscribe(
        () => this.socios = this.socios.filter(socio => socio.id !== id),
        (error: any) => console.error('Erro ao deletar sócio:', error)
      );
    }
  }
}
