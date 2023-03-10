export interface Icarreras{
  titulo: string;
  id: number;
}


export class carreras implements Icarreras{
  constructor(
    public id: number,
    public titulo : string,){
  }
}
