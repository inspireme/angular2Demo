import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { HeroService } from './hero.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule, // <-- import the FormsModule before binding with [(ngModel)]
    //    RouterModule.forRoot([{
    //      path: '',
    //      redirectTo: '/dashboard',
    //      pathMatch: 'full'
    //    },
    //    {
    //      path: 'heroes',
    //      component: HeroesComponent
    //    }, {
    //      path: 'dashboard',
    //      component: DashboardComponent
    //    }, {
    //      path: 'detail/:id',
    //      component: HeroDetailComponent
    //    }
    //    ])
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent,
    HeroSearchComponent
  ],
  providers: [
    HeroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
