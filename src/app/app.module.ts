import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './views/dashboard.component';
import { HTML_n_CSSComponent } from './views/category/html-n-css.component';
import { JavascriptComponent } from './views/category/javascript.component';
import { PHP_n_MySQLComponent } from './views/category/php-n-mysql.component';

@NgModule({
  imports: [CommonModule, BrowserModule, FormsModule,  AppRoutingModule],
  declarations: [AppComponent, DashboardComponent,  HTML_n_CSSComponent, JavascriptComponent, PHP_n_MySQLComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
