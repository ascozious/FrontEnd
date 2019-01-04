import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MmLokasiComponent } from './mm-lokasi.component';

describe('MmLokasiComponent', () => {
  let component: MmLokasiComponent;
  let fixture: ComponentFixture<MmLokasiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MmLokasiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MmLokasiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
