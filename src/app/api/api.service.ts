import { Injectable } from '@angular/core';
import { Game } from './../models/game.models';
import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

//URL for api
const API_URL = environment.apiUrl;
//const API_URL = "localhost:5000";
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getGame(): Observable<Game[]>{
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    return this.http.get<Game[]>(API_URL + '/games',{ headers }).pipe( catchError(this.handleError));
  }

  getGameById(gameId: string): Observable<Game>{
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    return this.http.get<Game>(API_URL + '/games/' + gameId, {headers }).pipe(catchError(this.handleError));
  }

  private handleError(error: Response | any){
    return throwError(error);
  }
}
