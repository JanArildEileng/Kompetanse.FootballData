export class Team {
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

    
    wins():number {
        return this.homeWin+this.awayWin;
    }
    draws():number {
        return this.homeDraw+this.awayDraw;
    }
    losts():number {
        return this.homeLost+this.awayLost;
    }

    points(): number {
        return 3*this.wins()+1*this.draws();

    }
    
    played():number {
        return this.wins()+this.draws()+this.losts();
    }

   
}
