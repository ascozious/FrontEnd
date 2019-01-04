import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentFromOrderComponent } from './rent-from-order.component';

describe('RentFromOrderComponent', () => {
  let component: RentFromOrderComponent;
  let fixture: ComponentFixture<RentFromOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentFromOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentFromOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
