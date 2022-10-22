import { Component, OnInit } from '@angular/core';
import { MenuSidebar } from './types/menuSidebar';


@Component({
selector: 'app-dashboard',
templateUrl: './dashboard.component.html',
styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    openSidebar: boolean = true;

    menuSidebar: MenuSidebar[] = [
       {
        link_name: 'Category',
        link: null,
        icon: 'bx bx-collection',
        sub_menu: [
          {
            link_name: 'Portfolio',
            link: '/category/portfolio',
          }, 
          {
            link_name: 'Contact',
            link: '/category/contact',
          }, 
        ]
      },
      {
        link_name: 'Markets',
        link: null,
        icon: 'bx bx-collection',
        sub_menu: [
          {
            link_name: 'Indice',
            link: '/markets/indice',
          }, 
        ]
      },
    ]
  
    constructor() { }
  
    ngOnInit() {
  
    }
  
    showSubmenu(itemEl: HTMLElement) {
      itemEl.classList.toggle('showMenu');
    }
  }
  