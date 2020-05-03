import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveCompetitionDetailsComponent } from './active-competition-details.component';

describe('ActiveCompetitionDetailsComponent', () => {
  let component: ActiveCompetitionDetailsComponent;
  let fixture: ComponentFixture<ActiveCompetitionDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveCompetitionDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveCompetitionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
