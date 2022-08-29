import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { pipe, switchMap, tap } from 'rxjs';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [`
    img {
      width: 100%;
      border-radius: 5px;
    }
  `]
})
export class HeroeComponent implements OnInit {

  heroe!: Heroe;

  constructor(private activatedRoute: ActivatedRoute, 
              private heroeService: HeroesService,
              private router: Router ) { }

  ngOnInit(): void {

    this.activatedRoute.params
        .pipe(
          switchMap( ({id}) => this.heroeService.getHeroePorId(id) ),
          tap(console.log)
        )
        .subscribe( heroe  => this.heroe = heroe );

  }

  regresar(){
    this.router.navigate(['/heroes/listado']);
  }

}
