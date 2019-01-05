import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclesGridComponent } from './vehicles-grid.component';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { MatSnackBar } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { vehicleDto } from 'src/app/shared/DTOs/vehicles';

describe('VehiclesGridComponent', () => {
  let component: VehiclesGridComponent;
  let fixture: ComponentFixture<VehiclesGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot(), MaterialModule, BrowserAnimationsModule],
      providers: [MatSnackBar],
      declarations: [VehiclesGridComponent]
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

  it('should display the column with this order vin, status, client, regNum, make', () => {
    expect(component.displayedColumns[0].def).toBe('vin')
    expect(component.displayedColumns[1].def).toBe('client')
    expect(component.displayedColumns[2].def).toBe('status')
    expect(component.displayedColumns[3].def).toBe('regNum')
  })

  describe('mapper', () => {
    it('should return the mapped client name & status name to be displayed in the Grid', () => {
      let item: vehicleDto = {
        "id": 1,
        "vin": "AD8027002005948Q87291563",
        "status": 1,
        "regNum": "XFMIZRN1QEM",
        "client": 1,
        "make": "KOENIGSEGG",
        "avatar": "https://i.pinimg.com/236x/ea/7f/12/ea7f12e965b319a447eca8684dddff67--peanut-butter-koenigsegg.jpg"
      };
      component._clients = [
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
        }];
      component._status = [
        {
          "id": 1,
          "status": "Connected",
          "color": "green"
        }, {
          "id": 2,
          "status": "Disconnected",
          "color": "red"
        }, {
          "id": 3,
          "status": "Oil check",
          "color": "grey"
        },
        {
          "id": 4,
          "status": "Engine issue",
          "color": "yellow"
        }
      ]
      
      let result = component.mapper(item);

      expect(result.clientName).toBe('Alicia Vikander')
    })
  })
});
