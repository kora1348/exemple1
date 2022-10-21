import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HTML_n_CSSComponent } from './views/category/html-n-css.component';
import { JavascriptComponent } from './views/category/javascript.component';
import { PHP_n_MySQLComponent } from './views/category/php-n-mysql.component';
import { DashboardComponent } from './views/dashboard.component';

const routes: Routes = [
  
  // {
  //   path: '',
  //   loadChildren: () => import('./views/dashboard/dashboard.module').then((m) => m.DashboardModule),
  // },

  { path: 'dashboard', component: DashboardComponent },
  { path: 'html-n-css', component: HTML_n_CSSComponent },
  { path: 'javascript', component: JavascriptComponent },
  { path: 'php-n-mysql', component: PHP_n_MySQLComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
