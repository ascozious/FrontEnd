import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MgUnitComponent } from './mg-unit.component';

describe('MgUnitComponent', () => {
  let component: MgUnitComponent;
  let fixture: ComponentFixture<MgUnitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MgUnitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MgUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
