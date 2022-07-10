import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ChampionnatsComponent } from './championnats/championnats.component';
import { ApiService } from './api/api.service';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { WnbaComponent } from './wnba/wnba.component';
import { NbaComponent } from './nba/nba.component';
import { WnbaAllstarComponent } from './wnba-allstar/wnba-allstar.component';
import { WnbaPlayoffsComponent } from './wnba-playoffs/wnba-playoffs.component';
import { StandingsComponent } from './standings/standings.component';
import { RouterModule } from '@angular/router';
import { SeasonplayedgamesComponent } from './seasonplayedgames/seasonplayedgames.component';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { StandingswnbaComponent } from './standingswnba/standingswnba.component';
import { OddsWNBAComponent } from './odds-wnba/odds-wnba.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ChampionnatsComponent,
    FooterComponent,
    SignupComponent,
    ProfileComponent,
    BoardAdminComponent,
    LoginComponent,
    LoginpageComponent,
    WnbaComponent,
    NbaComponent,
    WnbaAllstarComponent,
    WnbaPlayoffsComponent,
    StandingsComponent,
    SeasonplayedgamesComponent,
    StandingswnbaComponent,
    OddsWNBAComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', pathMatch: 'full', redirectTo: 'home' },
      { path: 'home', component: HomeComponent },
    ])
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [
    ApiService,
    authInterceptorProviders
  ],

    bootstrap: [AppComponent]
})

export class AppModule {

}
