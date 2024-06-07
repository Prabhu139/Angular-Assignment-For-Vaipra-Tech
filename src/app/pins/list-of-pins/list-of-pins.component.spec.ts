import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfPinsComponent } from './list-of-pins.component';

describe('ListOfPinsComponent', () => {
  let component: ListOfPinsComponent;
  let fixture: ComponentFixture<ListOfPinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfPinsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfPinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
