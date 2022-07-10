import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { HomeComponent } from './home/home.component';
import { ChampionnatsComponent } from './championnats/championnats.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import {ApiService} from './api/api.service'
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { WnbaComponent } from './wnba/wnba.component';
import { NbaComponent } from './nba/nba.component';
import { WnbaPlayoffsComponent } from './wnba-playoffs/wnba-playoffs.component';
import { WnbaAllstarComponent } from './wnba-allstar/wnba-allstar.component';
import { StandingsComponent } from './standings/standings.component';
import { SeasonplayedgamesComponent } from './seasonplayedgames/seasonplayedgames.component';
import { StandingswnbaComponent } from './standingswnba/standingswnba.component';
import { OddsWNBAComponent } from './odds-wnba/odds-wnba.component';

const routes: Routes = [
{path: 'header', component: HeaderComponent},
{path:  'championnats', component: ChampionnatsComponent},
{ path: 'home', component: HomeComponent },
{ path: 'login', component: LoginComponent },
{ path: 'signup', component: SignupComponent },
{ path: 'profile', component: ProfileComponent },
{ path: 'user', component: BoardUserComponent },
{ path: 'admin', component: BoardAdminComponent },
{ path: 'loginpage', component: LoginpageComponent},
{ path: 'wnba', component: WnbaComponent},
{ path: 'nba', component: NbaComponent},
{ path: 'wnba_playoffs', component: WnbaPlayoffsComponent},
{ path: 'wnba_allstar', component: WnbaAllstarComponent},
{ path: 'acceuil', component: AcceuilComponent},
{ path: 'standings', component: StandingsComponent},
{ path: 'seasonedplayedgames', component: SeasonplayedgamesComponent},
{ path: 'standingswnba', component: StandingswnbaComponent},
{ path: 'odds-wnba', component: OddsWNBAComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  BrowserModule,
  FormsModule,
  HttpClientModule
  ],
  providers: [ApiService],
  bootstrap:[AppComponent],
  exports: [RouterModule],
})

export class AppRoutingModule { }
