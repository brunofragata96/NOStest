import { Component, OnInit, Input, Output} from '@angular/core';
import { Team } from '@app/common/models/team';
import { TEAMS } from '@app/mockTeams';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'feat-teamsList-comp',
  templateUrl: './teamsList.component.html',
  styleUrls: ['./teamsList.component.scss']
})
export class TeamsComponent implements OnInit {

  @Input() teams:Team[]

  @Output() teamSelected:EventEmitter<Team> = new EventEmitter();
  @Output() actions:EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    
  }

  onSelect = (team:Team) => {
    this.teamSelected.emit(team);
  }

  onDelete = (team:Team) => {
    this.actions.emit({type:'delete', value: team});
  }

  onUpdate = (team:Team) => {
    this.actions.emit({type:'edit', value: team})
  }


}
