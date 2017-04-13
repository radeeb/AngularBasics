import {Injectable} from '@angular/core';

import {Hero} from './hero';
import {HEROES} from './mock-heroes';


//injectable decorator
@Injectable()//tells the typescript to emit meta data about the service


//a promise essentially promises to call back when the results are ready.
//heroService with a Promise-returning getHeroes() method
export class HeroService{
    getHeroes(): Promise<Hero[]> {
        return Promise.resolve(HEROES);
    }

    getHero(id: number): Promise<Hero> {
        return this.getHeroes()
             .then(heroes => heroes.find(hero => hero.id === id));
}

}
