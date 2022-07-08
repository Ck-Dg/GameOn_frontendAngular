import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api/api.service';
import { Game } from '../models/game.models';

@Component({
  selector: 'app-championnats',
  templateUrl: './championnats.component.html',
  styleUrls: ['./championnats.component.css']
})
export class ChampionnatsComponent implements OnInit {

  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.getGame();
  }
_games : Game[] = [];

//Get all games
getGame(){
  this.api.getGame()
  .subscribe(
    (data) => { this._games = data }
  )
}
}
