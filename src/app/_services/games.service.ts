import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  games : string[] = ["Elise", "Valentin", "Cheick"];

  //Depedency injection of an object HTTP Client
  constructor(private http : HttpClient) { }

  getGames()
  {
    return this.games;
  }

  getAllGames(){

    return this.http.get("http://localhost:8082/games");
    //return this.http.get("http://ckgameonnode-env.eba-zzq6z9mi.eu-west-3.elasticbeanstalk.com/games");
    
  }
}