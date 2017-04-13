import {Component} from '@angular/core';

//this component could be called a rout component
@Component({
    selector: 'my-app',
    template: `<h1>{{title}}</h1>
        <nav>
             <a routerLink="/heroes">Heroes</a>
             <a routerLink="/dashboard">Dashboard</a>
             <router-outlet></router-outlet>
        </nav>`
            //to tell the browser where to display the component
//routerLink to tell the router where to navigate when the user clicks the link
})

export class AppComponent{
    title = 'Tour of Heroes';

}


//<a routerLink="/dashboard">Dashboard</a>
