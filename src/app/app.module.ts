import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';



import { AppComponent } from './app.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';


@NgModule({
  declarations: [
    AppComponent,
    DragDropComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
