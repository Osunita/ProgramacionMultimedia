import { Component, OnInit } from '@angular/core';
import { cursos } from './cursos';
import { CursosService } from './cursos.service';
import { ActivatedRoute } from '@angular/router';
import { AlumnoServiceService } from '../Alumno/AlumnoService.service';
import { Alumno } from '../Alumno/IAlumno';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit{
  alumnos: Alumno[];
  cursos: cursos[];
  cursoSelecciona: number;

  constructor(private service: CursosService,private alumnosService: AlumnoServiceService, private activatedRoute: ActivatedRoute) {
    this.cursoSelecciona = 0;
    this.alumnos = []
    this.cursos = [];

  }
  ngOnInit() {

  }

  CursoLista(cursoSelecciona: number): void {

    this.alumnosService.getAlumnos().subscribe(datosAlumnos => {
       this.alumnos =  datosAlumnos.filter(alumno => alumno.cursoID == cursoSelecciona);
    });
    console.log(this.alumnos);

  }

}
