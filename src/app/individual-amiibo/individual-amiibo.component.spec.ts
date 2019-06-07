import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualAmiiboComponent } from './individual-amiibo.component';

describe('IndividualAmiiboComponent', () => {
  let component: IndividualAmiiboComponent;
  let fixture: ComponentFixture<IndividualAmiiboComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndividualAmiiboComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualAmiiboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
