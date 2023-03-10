import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { cursos } from '../cursos';
import { CursosService } from '../cursos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cursosLista',
  templateUrl: './cursosLista.component.html',
  styleUrls: ['./cursosLista.component.css']
})
export class CursosListaComponent implements OnInit{

  @Output()
  cursoSelec: EventEmitter<number> = new EventEmitter<number>();

  cursos: cursos[];
  elegido: number = 0;

  constructor(private service: CursosService, private activatedRoute: ActivatedRoute) {
    this.cursos = [];

  }

  ngOnInit() {
    this.service.getCursos().subscribe((datoscursos) => this.cursos = datoscursos);
  }
  cursoSeleccionado() {
    this.cursoSelec.emit(this.elegido);
  }



}
