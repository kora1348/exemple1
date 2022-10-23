import { Component, OnInit } from '@angular/core';
import { MenuSidebar } from './types/menuSidebar';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  activeItem: any;

  openSidebar: boolean = true;

  menuSidebar: MenuSidebar[] = [
    {
      link_name: 'Category',
      link: null,
      icon: 'bx bx-collection',
      active: false,
      sub_menu: [
        {
          link_name: 'Portfolio',
          link: '/category/portfolio',
        },
        {
          link_name: 'Contact',
          link: '/category/contact',
        },
      ],
    },
    {
      link_name: 'Markets',
      link: null,
      icon: 'bx bx-collection',
      active: false,
      sub_menu: [
        {
          link_name: 'Indice',
          link: '/markets/indice',
        },
      ],
    },
  ];

  constructor() {}

  ngOnInit() {}

  showSubmenu(item: any) {
    if (item.link_name == this.activeItem) {
      this.activeItem = undefined;
    } else {
      this.activeItem = item.link_name;
    }
  }

  selectMenu(parentMenu: { link_name: string }): void {
    this.menuSidebar.forEach((menu) => {
      if (menu.link_name !== parentMenu.link_name) {
        menu.active = false;
      } else {
        menu.active = !menu.active;
      }
    });
  }
}
