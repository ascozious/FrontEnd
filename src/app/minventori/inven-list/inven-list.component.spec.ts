import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvenListComponent } from './inven-list.component';

describe('InvenListComponent', () => {
  let component: InvenListComponent;
  let fixture: ComponentFixture<InvenListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvenListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvenListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
