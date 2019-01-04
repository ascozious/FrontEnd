import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { REditorComponent } from './r-editor.component';

describe('REditorComponent', () => {
  let component: REditorComponent;
  let fixture: ComponentFixture<REditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ REditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(REditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
