import { Component, OnInit } from '@angular/core';
import { Team } from '@app/common/models/team';
import { ServiceService } from '@app/common/services/service.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common'
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-team-details',
  templateUrl: './teamDetails.container.html',
  styleUrls: ['./teamDetails.container.scss']
})
export class TeamDetailsContainer implements OnInit {

  team: Team = null;


  constructor(private service: ServiceService,
    private router: Router,
    private location: Location,
  ) {
  }

  obsGetTeams: Subscription = null;

  ngOnInit() {
    // let queryName: any = this.router.routerState.root.children[0].snapshot.paramMap.get('name');
    let queryName: any = this.router.routerState.snapshot.root.children[0].children[0].paramMap.get('name');
    // let queryName: any = this.router;
    console.log("teste query", queryName);
    this.obsGetTeams = this.service.getTeams().subscribe((teams: Team[]) => {
        teams.forEach((team: Team) => {
          if (team.name == queryName) {
            this.team = team;
          }
        })
      }
    )
  }

  ngOnDestroy() {
    this.obsGetTeams.unsubscribe();
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.service.updateTeam(this.team)
      .subscribe(() => this.goBack());
  }

  

}
