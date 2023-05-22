import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'app/app.component';
import { IMenuItem, MenuService } from 'app/menu/services/menu.services';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent implements OnInit {

  constructor(private menuService:MenuService) {
    this.menuService = menuService;
   }

   getMenuItems():Array<IMenuItem>{
    return this.menuService.items;

   }

   getUserPermission():number{
    return AppComponent.getUserPermission();
   }

  ngOnInit() {
  }

}
