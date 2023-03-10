import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { cursos } from './cursos';


@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private apiUrl = 'https://localhost:44393/api'

  constructor(private _http: HttpClient) { }

  getCursos(): Observable<cursos[]>{
    return this._http.get<cursos[]>("https://localhost:44393/api/Curso");
  }

  getCursoById(id: number) {
    return this._http.get(`${this.apiUrl}/curso/${id}`);
  }

  getAlumnosByCurso(cursoId: number) {
    return this._http.get(`${this.apiUrl}/curso/${cursoId}/alumnos`);
  }
}
