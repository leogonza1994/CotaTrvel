export class User {
  constructor(
    public _id:string,
    public name: string,
    public email: string,
    public contra:string

    ) {}
}

export class Reservas{
   constructor(
    public _id:string, 
    public restaurante:string,
    public fechaReserva: number,
    public horaReserva: string,
    public numPersonas: number,
    public celular: number,
    public email:string
   ){}

}
