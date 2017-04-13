import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { HeroDetailComponent} from './hero-detail.component';
import { AppComponent } from './app.component';
import { HeroesComponent} from './heroes.component';
import { HeroService} from './hero.service';
import { DashboardComponent} from './dashboard.component';

import { RouterModule, Routes} from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([ //routes are an array of route definitions
        {
            path:'heroes',
            component: HeroesComponent
        },
        {
            path:'dashboard',
            component: DashboardComponent
        },
        {
            path: '',
            redirectTo: '/dashboard',
            pathMatch: 'full'
        },
        {//route with a parameter
            path: 'detail/:id',
            component: HeroDetailComponent
        }

    ])
  ],
  providers: [HeroService], //because you will need it in every other view
  bootstrap: [AppComponent]
})
export class AppModule { }
