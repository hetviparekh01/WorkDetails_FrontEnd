import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormComponent } from './form/form.component';
import { TableComponent } from './table/table.component';
import { AgGridAngular, AgGridModule } from 'ag-grid-angular';


@NgModule({
  declarations: [
    DashboardComponent,
    FormComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    AgGridAngular,
    AgGridModule
  ]
})
export class PagesModule { }
