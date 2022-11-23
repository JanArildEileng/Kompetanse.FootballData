import { Component, OnInit } from '@angular/core';
import { from, map, Observable, of, subscribeOn, Subscriber, tap } from 'rxjs';
import { Team } from 'src/app/data/iteam';
import { ResultServiceService } from 'src/app/services/result-service.service';

@Component({
  selector: 'app-all-teams-view',
  templateUrl: './all-teams-view.component.html',
  styleUrls: ['./all-teams-view.component.css']
})
export class AllTeamsViewComponent implements OnInit {

  teamsNames:string[]=[];
  teamsNames$:Observable<string[]>=of(this.teamsNames)
  
  teams$:Observable<Team[]>| undefined

  newObs$:Observable<Team[]>| undefined


  subscribtion:any;

  constructor(private resultServiceService:ResultServiceService ) { }

  ngOnInit(): void {
 

    this.teamsNames$=  of(this.resultServiceService.teams)
   
    .pipe(
        map( r => r.map( r=>r.teamName ).sort() )
    );
   
   
    this.teamsNames$.subscribe(r=> {
      console.log('team updated')

   });




    /*
       .subscribe(r=> {
          console.log('team updated')

       });
 
 */
 /*
    this.resultServiceService.resultObservables$
    .pipe( 
 //        tap( r=>console.log('team updated'))
    )
    .pipe( 

      tap(r => {
        let f=this.teamsNames.find( c=> {return c===r.homeTeam});
        if (!f) {
          this.teamsNames.push( r.homeTeam)
        }
        let f2=this.teamsNames.find( c=> {return c===r.awayTeam});
        if (!f2) {
          this.teamsNames.push(r.awayTeam)
        }
      }),
      tap(r => {
         this.teamsNames.sort();
  //       this.teamsNames$=of(this.teamsNames)
        })
    ).
    subscribe(r=> {})
*/
  }

}
