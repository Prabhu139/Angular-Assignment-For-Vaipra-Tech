import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewPinComponent } from './add-new-pin.component';

describe('AddNewPinComponent', () => {
  let component: AddNewPinComponent;
  let fixture: ComponentFixture<AddNewPinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewPinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewPinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
