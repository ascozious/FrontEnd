import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoEditorComponent } from './ro-editor.component';

describe('RoEditorComponent', () => {
  let component: RoEditorComponent;
  let fixture: ComponentFixture<RoEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
