import { Component, OnInit } from '@angular/core';
import { GamesService } from '../_services/games.service';

@Component({
  selector: 'app-odds-wnba',
  templateUrl: './odds-wnba.component.html',
  styleUrls: ['./odds-wnba.component.css']
})

export class OddsWNBAComponent implements OnInit {

AllOdds : any;

constructor(private service : GamesService) { }

    ngOnInit(): void {

      this.service.getAllOdds().subscribe(
        (data:any) => {
      let donnees = data[0].response
        console.log("data")
        console.log(data)

        console.log("donnees")
        console.log(donnees)
        this.AllOdds = donnees;
        console.log(data.response)
          }
        );
      }
    }
