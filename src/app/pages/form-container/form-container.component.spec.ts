import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFormComponent } from './form-container.component';

describe('DynamicFormComponent', () => {
  let component: DynamicFormComponent;
  let fixture: ComponentFixture<DynamicFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicFormComponent]
    });
    fixture = TestBed.createComponent(DynamicFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
