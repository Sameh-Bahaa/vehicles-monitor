import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclesFilterComponent } from './vehicles-filter.component';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { VehiclesStateService } from 'src/app/store/vehicles/all-vehicles/state-service';
import { Store, StoreModule } from '@ngrx/store';
import { VehiclesActions } from 'src/app/store/vehicles/all-vehicles/actions';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('VehiclesFilterComponent', () => {
  let component: VehiclesFilterComponent;
  let fixture: ComponentFixture<VehiclesFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, TranslateModule.forRoot(), MaterialModule, StoreModule.forRoot({}), BrowserAnimationsModule],
      declarations: [ VehiclesFilterComponent ],
      providers: [VehiclesStateService, Store, VehiclesActions]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiclesFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
