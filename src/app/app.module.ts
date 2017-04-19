import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { HeroService } from './hero.service';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [
    BrowserModule,
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
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent
  ],
  providers: [
    HeroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
