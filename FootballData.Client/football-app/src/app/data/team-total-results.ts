import { ITeam } from "./iteam";



export class TeamTotalResults {

    constructor(teamName: string) {
        this.teamName = teamName;
      }

    teamName:string="";
    homeWin:number=0;
    homeDraw:number=0;
    homeLost:number=0;
    awayWin:number=0;
    awayDraw:number=0;
    awayLost:number=0;
} 
