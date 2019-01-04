import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MkerjaComponent } from './mkerja.component';

describe('MkerjaComponent', () => {
  let component: MkerjaComponent;
  let fixture: ComponentFixture<MkerjaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MkerjaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MkerjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
