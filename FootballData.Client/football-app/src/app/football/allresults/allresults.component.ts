import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FootballResult } from 'src/app/data/football-result';
import { ResultServiceService } from 'src/app/services/result-service.service';

@Component({
  selector: 'app-allresults',
  templateUrl: './allresults.component.html',
  styleUrls: ['./allresults.component.css']
})
export class AllresultsComponent implements OnInit {
  
  res:FootballResult[]=[];
 // lastresult$:Observable<FootballResult[]>=of(this.res);
  allResults$:Observable<FootballResult[]> | undefined

  constructor(private resultServiceService:ResultServiceService  ) { 

  }

  ngOnInit(): void {

    this.allResults$=this.resultServiceService.allResults$;
  }
}
