import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Team } from 'src/app/data/iteam';
import { ResultServiceService } from 'src/app/services/result-service.service';

@Component({
  selector: 'app-league-table-view',
  templateUrl: './league-table-view.component.html',
  styleUrls: ['./league-table-view.component.css']
})
export class LeagueTableViewComponent implements OnInit {

  teams$:Observable<Team[]>| undefined

  constructor(private resultServiceService:ResultServiceService) { }

  ngOnInit(): void {
    this.teams$=this.resultServiceService.teams$;
  }

}
