import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MgKategoriComponent } from './mg-kategori.component';

describe('MgKategoriComponent', () => {
  let component: MgKategoriComponent;
  let fixture: ComponentFixture<MgKategoriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MgKategoriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MgKategoriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
