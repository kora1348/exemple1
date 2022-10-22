import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MarketsComponent } from './markets.component';
import { IndiceComponent } from './views/indice/indice.component';





export const MARKETS_ROUTES: Routes = [
 
  {
    path: '',
    component: MarketsComponent,

  }, 
  
  {
    path: 'indice',
    component: IndiceComponent,
  },



];

@NgModule({
  imports: [RouterModule.forChild(MARKETS_ROUTES)],
  exports: [RouterModule],
})
export class MarketsRoutingModule {}

