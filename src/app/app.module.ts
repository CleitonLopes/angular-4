import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import module form
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';
import { FormatCurrencyPipe } from './format-currency.pipe';
import { FormatDatePipe } from './format-date.pipe';
import { MyTaskDirective } from './my-task.directive';
import { TaskComponent } from './task/task.component';
import { TaskService } from './task.service'


@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    FormatCurrencyPipe,
    FormatDatePipe,
    MyTaskDirective,
    TaskComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [ TaskService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
