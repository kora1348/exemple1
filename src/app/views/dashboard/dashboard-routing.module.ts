import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const DASHBOARD_ROUTES: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'category',
        loadChildren: () => import('./views/category/category.module').then((m) => m.CategoryModule),
      },
      {
        path: 'markets',
        loadChildren: () => import('./views/markets/markets.module').then((m) => m.MarketsModule),
      },
  
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(DASHBOARD_ROUTES)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}

