import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MgMerkComponent } from './mg-merk.component';

describe('MgMerkComponent', () => {
  let component: MgMerkComponent;
  let fixture: ComponentFixture<MgMerkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MgMerkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MgMerkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
