import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { cursos } from './cursos';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor(private _http: HttpClient) { }

  getCursos(): Observable<cursos[]>{
    return this._http.get<cursos[]>("https://localhost:44393/api/Curso");
  }
}
