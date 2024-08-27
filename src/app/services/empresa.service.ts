// src/app/services/empresa.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empresa } from '../models/empresa.model';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {
  private apiUrl = 'http://api.example.com/empresas'; // Ajuste a URL da sua API

  constructor(private http: HttpClient) {}

  // Método para adicionar uma nova empresa
  addEmpresa(empresa: Empresa): Observable<Empresa> {
    return this.http.post<Empresa>(this.apiUrl, empresa);
  }

  // Método para atualizar uma empresa existente
  updateEmpresa(id: number, empresa: Empresa): Observable<Empresa> {
    return this.http.put<Empresa>(`${this.apiUrl}/${id}`, empresa);
  }

  // Método para obter uma empresa pelo ID
  getById(id: number): Observable<Empresa> {
    return this.http.get<Empresa>(`${this.apiUrl}/${id}`);
  }

  // Método para obter todas as empresas
    getEmpresas(): Observable<Empresa[]> {
    return this.http.get<Empresa[]>(this.apiUrl);
  }

  // Método para deletar uma empresa
  deleteEmpresa(id: number | null | undefined): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
