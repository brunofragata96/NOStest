import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Team } from '@app/common/models/team.ts';

@Component({
  selector: 'app-teamDetails',
  templateUrl: './teamDetails.component.html',
  styleUrls: ['./teamDetails.component.scss']
})

export class TeamDetailsComponent implements OnInit {

  @Input() team: Team;

  @Output() evtBack: EventEmitter<any> = new EventEmitter();
  @Output() evtSave: EventEmitter<any> = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

  goBack() {
    this.evtBack.emit();
  }

  save() {
    this.evtSave.emit();
  }

}
