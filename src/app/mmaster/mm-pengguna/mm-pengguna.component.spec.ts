import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MmPenggunaComponent } from './mm-pengguna.component';

describe('MmPenggunaComponent', () => {
  let component: MmPenggunaComponent;
  let fixture: ComponentFixture<MmPenggunaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MmPenggunaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MmPenggunaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
