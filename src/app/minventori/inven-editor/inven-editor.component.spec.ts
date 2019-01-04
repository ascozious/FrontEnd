import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvenEditorComponent } from './inven-editor.component';

describe('InvenEditorComponent', () => {
  let component: InvenEditorComponent;
  let fixture: ComponentFixture<InvenEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvenEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvenEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
