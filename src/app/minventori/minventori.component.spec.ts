import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinventoriComponent } from './minventori.component';

describe('MinventoriComponent', () => {
  let component: MinventoriComponent;
  let fixture: ComponentFixture<MinventoriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinventoriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinventoriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
