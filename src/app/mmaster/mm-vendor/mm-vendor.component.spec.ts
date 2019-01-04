import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MmVendorComponent } from './mm-vendor.component';

describe('MmVendorComponent', () => {
  let component: MmVendorComponent;
  let fixture: ComponentFixture<MmVendorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MmVendorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MmVendorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
