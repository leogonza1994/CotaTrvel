import {ElementSchemaRegistry} from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {allowedNodeEnvironmentFlags} from 'process';
import { from } from 'rxjs';
import {Reservas } from '../../models/user';
import { ReservaService} from '../../service/reserva.service';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css']
})
export class ReservasComponent implements OnInit {
  public user :Reservas;

  constructor(private userService:ReservaService) { 
    this.user = new Reservas('','',0, '', 0, 0, '')

  }

  ngOnInit(): void {}

  registro(){

    this.userService.registrarReserva(this.user).subscribe(
      (res:any) => {
        console.log(res);
        if(res.statusCode != 200){
          alert('no se pudo registrar')
        } else{
          alert('registro exitoso')
        }
      },
      (error) =>{
        var errorMensaje = <any>error;
        if(errorMensaje != null){
  
        }
  
  
      }
    )
    console.log( this.userService);
  }

}
