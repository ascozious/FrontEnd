import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MmPelangganComponent } from './mm-pelanggan.component';

describe('MmPelangganComponent', () => {
  let component: MmPelangganComponent;
  let fixture: ComponentFixture<MmPelangganComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MmPelangganComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MmPelangganComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
