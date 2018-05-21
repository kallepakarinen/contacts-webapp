import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatDividerModule,
  MatIconModule,
  MatListModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

const materialModules = [
  MatButtonModule,
  MatIconModule,
  MatSidenavModule,
  BrowserAnimationsModule,
  MatIconModule,
  MatToolbarModule,
  MatDividerModule,
  MatListModule
];

@NgModule({
  imports: [
   materialModules
  ],
  exports: [
   materialModules
  ]
})
export class MaterialComponentsModule { }
