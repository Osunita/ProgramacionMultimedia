import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/';
import { carreras } from './carreras';

@Injectable({
  providedIn: 'root'
})
export class CarrerasService {

  constructor(private _http: HttpClient) { }

  getCarreras(): Observable<carreras[]>{
    return this._http.get<carreras[]>("https://localhost:44393/api/Carrera");

  }
}
