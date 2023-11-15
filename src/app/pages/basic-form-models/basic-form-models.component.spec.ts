import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicFormModelsComponent } from './basic-form-models.component';

describe('BasicFormModelsComponent', () => {
  let component: BasicFormModelsComponent;
  let fixture: ComponentFixture<BasicFormModelsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BasicFormModelsComponent]
    });
    fixture = TestBed.createComponent(BasicFormModelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
