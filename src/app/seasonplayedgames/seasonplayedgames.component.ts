import { Component, OnInit } from '@angular/core';
import { GamesService } from '../_services/games.service';

@Component({
  selector: 'app-seasonplayedgames',
  templateUrl: './seasonplayedgames.component.html',
  styleUrls: ['./seasonplayedgames.component.css']
})
export class SeasonplayedgamesComponent implements OnInit {

games : string []=[];
AllGames : any;

  constructor(private service : GamesService) { }

  ngOnInit(): void {

    this.service.getAllGames().subscribe(
      (data:any) => {
    let donnees = data[0].response
      console.log("data")
      console.log(data)
      console.log("donnees")
      console.log(donnees)
      this.AllGames = donnees;
      console.log(data.response)
            }
      );
    }

  }
