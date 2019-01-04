import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockcardComponent } from './stockcard.component';

describe('StockcardComponent', () => {
  let component: StockcardComponent;
  let fixture: ComponentFixture<StockcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
