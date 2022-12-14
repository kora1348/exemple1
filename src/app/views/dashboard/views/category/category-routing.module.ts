import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../../dashboard.component';
import { ContactComponent } from './views/contact/contact.component';
import { PortfolioComponent } from './views/portfolio/portfolio.component';




export const CATEGORY_ROUTES: Routes = [
 
  {
    path: '',
    component: DashboardComponent,

  }, 
  
  {
    path: 'portfolio',
    component: PortfolioComponent,
  },

  {
    path: 'contact',
    component: ContactComponent,
  },
 

];

@NgModule({
  imports: [RouterModule.forChild(CATEGORY_ROUTES)],
  exports: [RouterModule],
})
export class CategoryRoutingModule {}

