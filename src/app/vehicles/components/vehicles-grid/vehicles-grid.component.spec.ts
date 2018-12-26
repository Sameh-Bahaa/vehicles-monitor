import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclesGridComponent } from './vehicles-grid.component';

describe('VehiclesGridComponent', () => {
  let component: VehiclesGridComponent;
  let fixture: ComponentFixture<VehiclesGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehiclesGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiclesGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
