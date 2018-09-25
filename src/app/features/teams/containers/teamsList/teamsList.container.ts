import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Team } from '@app/common/models/team';
import { Router } from '@angular/router'
import { ServiceService } from '@app/common/services/service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'feat-teamsList',
  templateUrl: './teamsList.container.html',
  styleUrls: ['./teamsList.container.scss']
})
export class TeamsContainer implements OnInit, OnDestroy {

  teams: Team[] = null;

  constructor(private service: ServiceService, private router: Router) { }

  obsGetTeams: Subscription = null;

  ngOnInit() {
    this.obsGetTeams = this.service.getTeams().subscribe((teams: Team[]) => {
      this.teams = teams;
    });
  }

  ngOnDestroy() {
    this.obsGetTeams.unsubscribe();
  }

  teamSelected(team: Team): void {
    this.router.navigate(['/equipas', team.name]);
  }

  actionHandler(action: { type: string, value: Team }) {
    switch (action.type) {
      case 'delete': {
        this.service.deleteTeam(action.value).subscribe(() => {
          this.service.getTeams().subscribe((teams: Team[]) => {
            this.teams = teams;
            console.log(teams);
          });
        });
        break
      }

      case 'edit': {
        this.service.updateTeam(action.value).subscribe( () => {
          this.service.getTeams().subscribe((teams: Team[]) => {
            this.teams = teams;
            console.log(teams);
          });
        })
        break
      }

      case 'add' : {

      }
    }
  }

}
