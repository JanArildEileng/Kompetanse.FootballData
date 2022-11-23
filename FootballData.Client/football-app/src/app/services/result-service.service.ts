import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IFootballResults } from '../data/ifootball-results';
import { filter, map, Observable, of, tap } from 'rxjs';
import { FootballResult } from '../data/football-result';
import { Team } from '../data/iteam';

@Injectable({
  providedIn: 'root'
})
export class ResultServiceService {

  public resultObservables$:Observable<FootballResult>;

  private allResults:FootballResult[]=[];
  public  allResults$:Observable<FootballResult[]>=of(this.allResults)

  public teams:Team[]=[];
  public teams$:Observable<Team[]>=of(this.teams);
  

  

  constructor(private http: HttpClient) {

    this.resultObservables$=this.startResultObservables();

    let subscribtion2=this.buildAllResultsObservables(this.resultObservables$)
      .subscribe( r=> {});

      let subscribtion3=this.buildLeagueTableObservables(this.resultObservables$)
      .subscribe( r=> {
        console.log('buildLeagueTableObservables');
      });

   }
  


    
  startResultObservables():Observable<FootballResult> {
    let fromMatchNumber:number=1;
    return new Observable<FootballResult>( (subscriber) => {

      let interval2=setInterval(() => {

        this.http.get<IFootballResults>("https://localhost:7040/FootballResult?fromMatchNumber="+fromMatchNumber) 
        .pipe(
   //       tap(result=>console.log(result)),
        )
        .subscribe((result: IFootballResults) => {
          result.results.forEach(r=> {
            fromMatchNumber= r.matchNumber; 
            subscriber.next(r);
          })
          fromMatchNumber++;
          if (fromMatchNumber>380) {
            subscriber.complete();
            clearInterval(interval2);
          }
        }) 

      },5000);

    });

  }  

  buildAllResultsObservables(resultObservables$:Observable<FootballResult>):Observable<FootballResult>  {
    return this.resultObservables$
    .pipe(
      tap(r => {this.allResults.push(r)})
     );
 }
  



  buildLeagueTableObservables(resultObservables$:Observable<FootballResult>):Observable<FootballResult> {
    //let teamNames$:Observable<FootballResult>= resultObservables$
    return resultObservables$    
      .pipe(
        //create entry in teamTotals for all teams...
        tap(r => {
          let f=this.teams.find( c=> {return c.teamName===r.homeTeam});
          if (!f) {
            this.teams.push( new Team(r.homeTeam))
          }
          let f2=this.teams.find( c=> {return c.teamName===r.awayTeam});
          if (!f2) {
            this.teams.push(new Team(r.awayTeam))
          }

        })
       
      )
      .pipe(
        //update entry in teamTotals for homeTeam teams...
        tap(r => {
          let hometeam=this.teams.find( c=> {return c.teamName===r.homeTeam});
          if (hometeam) {
            if ( r.hg>r.ag) hometeam.homeWin++;
            if ( r.hg==r.ag) hometeam.homeDraw++;
            if ( r.hg<r.ag) hometeam.homeLost++;
          }
          //and away teams  
          let awayteam=this.teams.find( c=> {return c.teamName===r.awayTeam});
          if (awayteam) {
            if ( r.hg<r.ag) awayteam.awayWin++;
            if ( r.hg==r.ag) awayteam.awayDraw++;
            if ( r.hg>r.ag) awayteam.awayLost++;
          }
          
        })
       
      )

      .pipe(
        tap(r=>this.teams.sort((a,b) => b.points()-a.points()) ),
     )
      .pipe(
  //       tap(result=>console.log(this.teams)),
      )
      ;
  }




}
