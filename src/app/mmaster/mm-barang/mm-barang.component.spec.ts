import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MmBarangComponent } from './mm-barang.component';

describe('MmBarangComponent', () => {
  let component: MmBarangComponent;
  let fixture: ComponentFixture<MmBarangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MmBarangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MmBarangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
