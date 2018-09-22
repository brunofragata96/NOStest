import { Component, OnInit } from '@angular/core';
import { Team } from '../team';
import { TEAMS } from '../mockTeams';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {

  teams = TEAMS;

  constructor() { }

  ngOnInit() {
  }

}
