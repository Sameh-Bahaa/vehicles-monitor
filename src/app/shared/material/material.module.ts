import { NgModule } from '@angular/core';

import {
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  MatExpansionModule,
  MatAutocompleteModule,
  MatSelectModule,
  MatTableModule,
  MatPaginatorModule,
  MatFormFieldModule,
  MatInputModule,
  MatSidenavModule,
  MatListModule,
  MatMenuModule,
  MatToolbarModule,
  MatSlideToggleModule
} from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [],
  imports: [
    //NoopAnimationsModule,
    //BrowserAnimationsModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatExpansionModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    MatToolbarModule,
    MatSlideToggleModule
  ],
  exports: [
    //NoopAnimationsModule,
    //BrowserAnimationsModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatExpansionModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    MatToolbarModule,
    MatSlideToggleModule
  ]

})
export class MaterialModule { }
