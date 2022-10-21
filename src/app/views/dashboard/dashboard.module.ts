import { NgModule } from '@angular/core';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';

@NgModule({
  imports: [FormsModule,  CommonModule, DashboardRoutingModule],
  declarations: [DashboardComponent],
})
export class DashboardModule {}



