import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsContainer } from '@app/features/teams/containers/teamsList/teamsList.container';

describe('TeamsContainer', () => {
  let component: TeamsContainer;
  let fixture: ComponentFixture<TeamsContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamsContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamsContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
