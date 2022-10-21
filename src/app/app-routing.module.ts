import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  
  {
    path: '',
    loadChildren: () => import('./views/dashboard/dashboard.module').then((m) => m.DashboardModule),
  },

  // { path: 'html-n-css', component: HTML_n_CSSComponent },
  // { path: 'javascript', component: JavascriptComponent },
  // { path: 'php-n-mysql', component: PHP_n_MySQLComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
