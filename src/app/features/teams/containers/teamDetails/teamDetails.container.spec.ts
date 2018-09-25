import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamDetailsContainer } from '@app/features/teams/containers/teamDetails/teamDetails.container';

describe('TeamDetailsComponent', () => {
  let component: TeamDetailsContainer;
  let fixture: ComponentFixture<TeamDetailsContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamDetailsContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamDetailsContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
