import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ScrollingModule } from '@angular/cdk/scrolling';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppComponent } from './app.component';
import { VirtualComponent } from './virtual/virtual.component';
import { DragdropComponent } from './dragdrop/dragdrop.component';



@NgModule({
  declarations: [
    AppComponent,
    VirtualComponent,
    DragdropComponent,
  ],
  imports: [
    BrowserModule,
    ScrollingModule,
    DragDropModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
