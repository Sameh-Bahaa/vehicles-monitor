import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutPageComponent } from './layout-page.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { TopnavComponent } from '../../components/topnav/topnav.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { SpinnerComponent } from '../../components/spinner/spinner.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MenuItems } from 'src/app/shared/menu-items/menu-items';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


describe('LayoutPageComponent', () => {
  let component: LayoutPageComponent;
  let fixture: ComponentFixture<LayoutPageComponent>;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule, RouterTestingModule, BrowserAnimationsModule],
      declarations: [LayoutPageComponent, TopnavComponent, SidebarComponent, SpinnerComponent],
      providers: [MenuItems]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
