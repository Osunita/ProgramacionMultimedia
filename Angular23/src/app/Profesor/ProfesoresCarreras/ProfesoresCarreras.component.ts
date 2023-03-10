import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { carreras } from 'src/app/carreras/carreras';
import { CarrerasService } from 'src/app/carreras/carreras.service';
import { Profesor } from '../Profesor';
import { ProfesorService } from '../Profesor.service';

@Component({
  selector: 'app-ProfesoresCarreras',
  templateUrl: './ProfesoresCarreras.component.html',
  styleUrls: ['./ProfesoresCarreras.component.css']
})
export class ProfesoresCarrerasComponent implements OnInit {
  profesores:Profesor[]
  carreras: carreras[];
  constructor(private profesorService: ProfesorService,private activatedRoute: ActivatedRoute,private carreraService: CarrerasService) {
    this.profesores=[];
    this.carreras=[];
  }

  ngOnInit() {
    let carrerasID= this.activatedRoute.snapshot.params['carrerasID'];
    this.profesorService.getProfesores().subscribe(datosProfesores => {
      this.profesores = datosProfesores.filter(profesor => profesor.carrerasID == carrerasID);
    });
    this.carreraService.getCarreras().subscribe((datoscarreras) => this.carreras = datoscarreras);
  }

}
