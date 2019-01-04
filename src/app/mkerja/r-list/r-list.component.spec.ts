import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RListComponent } from './r-list.component';

describe('RListComponent', () => {
  let component: RListComponent;
  let fixture: ComponentFixture<RListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
