import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirebaseBackendSimulatorComponent } from './firebase-backend-simulator.component';

describe('FirebaseBackendSimulatorComponent', () => {
  let component: FirebaseBackendSimulatorComponent;
  let fixture: ComponentFixture<FirebaseBackendSimulatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirebaseBackendSimulatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirebaseBackendSimulatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
