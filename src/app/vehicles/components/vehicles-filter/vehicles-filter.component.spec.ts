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
      declarations: [VehiclesFilterComponent],
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

  describe('remove', () => {
    beforeEach(() => {
      component.clientsList = [
        {
          "id": 1,
          "name": "Alicia Vikander",
          "address": "Långa Gatan, Djurgården",
          "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRfD7N18tcYI6zm-SnQqaqEHD8joHFC5RAPTUBYQx33j448Zz3sVy7qbqhsf8WF-mrXzs"
        },
        {
          "id": 2,
          "name": "Malin Åkerman",
          "address": "Strandvägen, Östermalm",
          "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSmqPzq3kP2mNiRFv11FGRvwss-TOwr2pVVZ8R9E9qyDsQd84biLPoZCpJDRq4NTFc8SQ"
        },
        {
          "id": 3,
          "name": "Alexander Skarsgård",
          "address": "Svartensgatan, Södermalm",
          "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq56Fz8kV2JXyJvxSN0Fm5hN0_KPvP6VoVn-4aCdnYpdbUnDi2V_uvvsSIdx4AtUYKTTQ"
        }]
      component.selectedClients = ['Alicia Vikander', 'Malin Åkerman']
      component.currentClient = [1, 2]
    })

    it('should have only one client after removing one of the two selected clients', () => {
      component.remove('Malin Åkerman')
      expect(component.selectedClients.length).toBe(1)
    })

    it('should remove the item from the selected client list', () => {
      component.remove('Malin Åkerman')
      let c = component.selectedClients.find(c => c == 'Malin Åkerman');
      expect(c).toBe(undefined)
    })
  })
});
