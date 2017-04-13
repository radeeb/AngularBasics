import { Component, OnInit } from '@angular/core';
//OnInit is a angular lifecycle hook. angulat will call it at the right time

import {Hero} from './hero';
import {HeroService} from './hero.service';

@Component({
  styleUrls: ['app.component.css'],
  selector: 'my-heroes', //app-root
  template: `<h2>My Heroes</h2>
            <ul class = "heroes">
                <li [class.selected] ="hero===selectedHero" *ngFor= "let hero of heroes" (click)= "onSelect(hero)">
                    <span class ="badge"> {{hero.id}} </span> {{hero.name}}
                </li>
            </ul>
            <hero-detail [hero]="selectedHero"></hero-detail>`,
providers:  []
})

export class HeroesComponent implements OnInit {
  heroes: Hero[]; //declating type of heroes
  selectedHero: Hero;

  constructor (private heroService: HeroService) { }

  onSelect(hero:Hero): void{
      this.selectedHero = hero;
  }

  ngOnInit(): void{
      this.getHeroes(); //this is the initialization logic
  }

  getHeroes(): void{
      this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
}


/*previously it was
getHeroes(): void {
  this.heroes = this.heroService.getHeroes();
}
*/
