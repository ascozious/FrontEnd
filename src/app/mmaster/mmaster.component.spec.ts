import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MmasterComponent } from './mmaster.component';

describe('MmasterComponent', () => {
  let component: MmasterComponent;
  let fixture: ComponentFixture<MmasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MmasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
