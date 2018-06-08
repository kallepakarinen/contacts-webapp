import { NgModule } from '@angular/core';
import {
  MatButtonModule, MatCardModule, MatDialogModule,
  MatDividerModule, MatFormFieldModule,
  MatIconModule, MatInputModule,
  MatListModule,
  MatSidenavModule, MatSnackBarModule,
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
  MatInputModule,
  MatSnackBarModule,
  MatDialogModule,
  MatFormFieldModule,
  MatSnackBarModule
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
