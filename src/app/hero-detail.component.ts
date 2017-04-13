import {Component, Input, OnInit} from '@angular/core';
import { Hero } from './hero';

import {ActivatedRoute, Params} from '@angular/router';
import {Location} from '@angular/common';
import {HeroService} from './hero.service';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'hero-detail', //matches the element tag that identifies this Component
    templateUrl: './hero-detail.component.html',
})

export class HeroDetailComponent implements OnInit { //this is where you do binding
    @Input() hero: Hero;

    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute,
        private location: Location
    ){}

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params)=> this.heroService.getHero(+params['id'])) //+ is a JS operator convert the string to number
            .subscribe(hero => this.hero = hero);
    }

    goBack(): void { //to navigate back
        this.location.back();
}



}

//angular style guide recommends one class per file
