import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { StatusComponent } from './status/status.component';
import { AllresultsComponent } from './football/allresults/allresults.component';
import { HomeComponent } from './home/home.component';
import { AllTeamsViewComponent } from './football/all-teams-view/all-teams-view.component';
import { LeagueTableViewComponent } from './football/league-table-view/league-table-view.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    StatusComponent,
    AllresultsComponent,
    HomeComponent,
    AllTeamsViewComponent,
   LeagueTableViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
