export interface Icursos{
  id: number;
  nomCurso: string;
}


export class cursos implements Icursos{
  constructor(
    public id: number,
    public nomCurso : string,){
  }
}
