import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclesGridComponent } from './vehicles-grid.component';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { MatSnackBar } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('VehiclesGridComponent', () => {
  let component: VehiclesGridComponent;
  let fixture: ComponentFixture<VehiclesGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot(), MaterialModule, BrowserAnimationsModule],
      providers: [MatSnackBar],
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
