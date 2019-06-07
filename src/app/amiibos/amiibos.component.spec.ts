import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmiibosComponent } from './amiibos.component';

describe('AmiibosComponent', () => {
  let component: AmiibosComponent;
  let fixture: ComponentFixture<AmiibosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmiibosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmiibosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
