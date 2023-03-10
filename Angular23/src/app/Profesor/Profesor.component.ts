import { Component, OnInit } from '@angular/core';
import { Profesor } from './Profesor';
import { ProfesorService } from './Profesor.service';

import { CarrerasService } from '../carreras/carreras.service';
import { carreras } from '../carreras/carreras';

@Component({
  selector: 'app-Profesor',
  templateUrl: './Profesor.component.html',
  styleUrls: ['./Profesor.component.css']
})
export class ProfesorComponent implements OnInit {
  carreras: carreras[];
  profesores : Profesor[];
  constructor(private service: ProfesorService, private carreraService: CarrerasService) {
    this.profesores = [];
    this.carreras=[];
  }

  ngOnInit() {
    this.carreraService.getCarreras().subscribe((datoscarreras) => this.carreras = datoscarreras);
    this.service.getProfesores().subscribe((datosprofesores) => this.profesores = datosprofesores);
  }


}
