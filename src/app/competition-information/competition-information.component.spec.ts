import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitionInformationComponent } from './competition-information.component';

describe('CompetitionInformationComponent', () => {
  let component: CompetitionInformationComponent;
  let fixture: ComponentFixture<CompetitionInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetitionInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetitionInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
