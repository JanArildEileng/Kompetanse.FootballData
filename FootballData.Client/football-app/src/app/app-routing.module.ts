import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';

import { AllresultsComponent } from './football/allresults/allresults.component';
import { AllTeamsViewComponent } from './football/all-teams-view/all-teams-view.component';
import { LeagueTableViewComponent } from './football/league-table-view/league-table-view.component'


const routes: Routes = [ 
    {
    path: 'home',
    component: HomeComponent,
    },
    {
    path: 'allresults',
    component: AllresultsComponent,
    },
    {
    path: 'all-teams-view',
    component: AllTeamsViewComponent,
    },
    
    {
    path: 'league-table-view',
    component: LeagueTableViewComponent,
   }
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
