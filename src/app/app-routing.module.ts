import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddHeroComponent } from './add-hero/add-hero.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/herodashboard',
    pathMatch: 'full',
  },
  {
    path: 'herolist',
    component: HeroesComponent,
  },
  {
    path: 'herodashboard',
    component: DashboardComponent,
  },
  {
    path: 'addhero',
    component: AddHeroComponent,
  },
  {
    path: 'details/:heroId',
    component: HeroDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
