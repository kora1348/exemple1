import { Component, OnInit } from '@angular/core';


@Component({
selector: 'app-dashboard',
templateUrl: './dashboard.component.html',
styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    openSidebar: boolean = true;

    menuSidebar = [
       {
        link_name: "Category",
        link: null,
        icon: "bx bx-collection",
        sub_menu: [
          {
            link_name: "Portfolio",
            link: "/category/views/portfolio",
          }, 
        ]
      }
    ]
  
    constructor() { }
  
    ngOnInit() {
  
    }
  
    showSubmenu(itemEl: HTMLElement) {
      itemEl.classList.toggle("showMenu");
    }
  }
  