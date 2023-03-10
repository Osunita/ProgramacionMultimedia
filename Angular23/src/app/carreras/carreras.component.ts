import { Component } from '@angular/core';
import { CarrerasService } from './carreras.service';
import { carreras } from './carreras';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-carreras',
  templateUrl: './carreras.component.html',
  styleUrls: ['./carreras.component.css']
})
export class CarrerasComponent {

  carreras: carreras[];

  constructor(private service: CarrerasService, private  activatedRoute : ActivatedRoute) {
    this.carreras = [];

  }
  ngOnInit() {
    this.service.getCarreras().subscribe((datoscarreras) => this.carreras = datoscarreras);
  }
}
