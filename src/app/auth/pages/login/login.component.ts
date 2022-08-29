import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent {

  constructor(private router: Router,
              private authServie:AuthService) { }

  login(){
    //TODO:
    //Ir al backend | 
    //un usuario
    this.authServie.login()
        .subscribe( resp => {
          console.log( resp );

          if( resp.id){
            //navegar a la patilla de heroes
            this.router.navigate(['./heroes'])
          }
        })


  }

  

}
