import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TolistComponent } from './tolist.component';

describe('TolistComponent', () => {
  let component: TolistComponent;
  let fixture: ComponentFixture<TolistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TolistComponent]
    });
    fixture = TestBed.createComponent(TolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
