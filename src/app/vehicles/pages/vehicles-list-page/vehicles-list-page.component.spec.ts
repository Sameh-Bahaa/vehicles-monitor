import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclesListPageComponent } from './vehicles-list-page.component';

describe('VehiclesListPageComponent', () => {
  let component: VehiclesListPageComponent;
  let fixture: ComponentFixture<VehiclesListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehiclesListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiclesListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
