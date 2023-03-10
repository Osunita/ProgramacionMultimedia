export interface IAlumno {
  id: Number;
  Nombre: string;
  Apellidos: string;
  Direccion: string;
  fnac: string;
  sexo: string;


}

export class Alumno implements IAlumno{

  constructor(public id: number,
     public Nombre: string,
     public Apellidos: string,
     public Direccion: string,
     public fnac: string,
     public sexo: string){
  }

}
