import { Component } from '@angular/core';
import { cursos } from './cursos';
import { CursosService } from './cursos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent {

  cursos: cursos[];

  constructor(private service: CursosService, private activatedRoute: ActivatedRoute) {
    this.cursos = [];

  }
  ngOnInit() {
    this.service.getCursos().subscribe((datoscursos) => this.cursos = datoscursos);
  }

}
