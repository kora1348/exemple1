import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketsRoutingModule } from './markets-routing.module';
import { MarketsComponent } from './markets.component';



@NgModule({
  imports: [CommonModule, MarketsRoutingModule],
  declarations: [MarketsComponent],
})
export class MarketsModule {}
