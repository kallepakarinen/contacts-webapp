import { NgModule } from '@angular/core';
import {
  MatButtonModule, MatCardModule,
  MatDividerModule,
  MatIconModule, MatInputModule,
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
  MatListModule,
  MatCardModule,
  MatInputModule
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
