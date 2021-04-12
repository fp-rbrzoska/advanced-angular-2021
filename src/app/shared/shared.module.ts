import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HighlightDirective } from './highlight.directive';
import { MyStructDirective } from './my-struct.directive';
import { MyCustomControlComponent } from './my-custom-control/my-custom-control.component';



@NgModule({
  declarations: [
    HighlightDirective,
    MyStructDirective,
    MyCustomControlComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HighlightDirective,
    MyStructDirective,
    MyCustomControlComponent,
  ]
})
export class SharedModule { }
