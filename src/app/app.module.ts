import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopnavComponent } from './topnav/topnav.component';
import { FilterComponent } from './filter/filter.component';
import { EmployeeComponent } from './employee/employee.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ViewmoreComponent } from './viewmore/viewmore.component';
import { EmployeeformComponent } from './employeeform/employeeform.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

@NgModule({
  declarations: [
    AppComponent,
    TopnavComponent,
    FilterComponent,
    EmployeeComponent,
    ViewmoreComponent,
    EmployeeformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
