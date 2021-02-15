import {ElementSchemaRegistry} from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {allowedNodeEnvironmentFlags} from 'process';
import { from } from 'rxjs';
import {User } from '../../models/user';
import { UserService} from '../../service/user.service'

@Component({
  selector: 'app-regusu',
  templateUrl: './regusu.component.html',
  styleUrls: ['./regusu.component.css']
})
export class RegusuComponent implements OnInit {
public user :User;

  constructor(private userService:UserService) {
    this.user = new User('','','','',)
  }

  ngOnInit(): void {  }

registrar(){

  this.userService.registrarUsuario(this.user).subscribe(
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
