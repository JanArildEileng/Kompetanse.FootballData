import { Component, OnInit } from '@angular/core';
import { Observable, of, tap,map, first, take, Subscriber, interval, buffer } from 'rxjs';
import { FootballResult } from '../data/football-result';
import { IFootballResults } from '../data/ifootball-results';
import { ResultServiceService } from '../services/result-service.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  res2:FootballResult;
  res:FootballResult[]=[];
  lastresult$:Observable<FootballResult[]>=of(this.res);
  last5result$:Observable<FootballResult[]>=of(this.res);
  subscription :any;

  constructor(private resultServiceService:ResultServiceService  ) { 
    this.res2= {ag:0,awayTeam:'',datePlayed:'',hg:0,homeTeam:'',matchNumber:-1 };
  }

  ngOnInit(): void {


    this.resultServiceService.resultObservables$
    .subscribe( r=> {
     //     console.log(r);
         this.res2=r;
    })

  
    
  



    
  }

}
