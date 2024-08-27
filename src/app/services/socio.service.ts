import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Socio } from '../models/socio.model';

@Injectable({
  providedIn: 'root'
})
export class SocioService {
  private apiUrl = 'http://localhost:8000/api/socio';

  constructor(private http: HttpClient) { }

  getSocios(): Observable<Socio[]> {
    return this.http.get<Socio[]>(`${this.apiUrl}/socios`);
  }

  getSocio(id: number): Observable<Socio> {
    return this.http.get<Socio>(`${this.apiUrl}/${id}`);
  }

  addSocio(socio: Socio): Observable<Socio> {
    return this.http.post<Socio>(`${this.apiUrl}/create`, socio);
  }

  updateSocio(id: number, socio: Socio): Observable<Socio> {
    return this.http.put<Socio>(`${this.apiUrl}/${id}`, socio);
  }

  deleteSocio(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
