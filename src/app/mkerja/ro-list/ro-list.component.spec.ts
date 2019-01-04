import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoListComponent } from './ro-list.component';

describe('RoListComponent', () => {
  let component: RoListComponent;
  let fixture: ComponentFixture<RoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
