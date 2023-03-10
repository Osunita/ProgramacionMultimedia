export interface IProferor {
  Nombre: string;
  Apellidos: string;
  carrerasID: number;
  fingreso: string;
}

export class Profesor  implements IProferor{


  constructor(public Nombre: string,
      public Apellidos: string,
      public carrerasID: number,
      public fingreso: string){
  }
}

