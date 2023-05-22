import { Component } from '@angular/core';
import { MenuService } from './menu/services/menu.services';
import { MenuItems } from './menu/menu';
import { Users } from 'auth/fake-database/users'
import { IUser } from 'core/services';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less']
})
///TODO: Вынести логику в отдельный сервис
export class AppComponent {
    static currentUser: IUser | null = null;
    constructor(private menuService: MenuService) {
        menuService.items = MenuItems;
        AppComponent.loadUser();
        // if (!AppComponent.loadUser()) {
        //     AppComponent.currentUser = Users.find(u => u.id === 1) as IUser;
        //     AppComponent.saveUser();
        // }
    }

    static saveUser() {
        localStorage.setItem('currentUser', JSON.stringify(this.currentUser))
    }

    static loadUser(): boolean {
        if (!localStorage.getItem('currentUser')) return false;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser')!);
        return true;

    }

    static getUserPermission(): number {
        if (!AppComponent.currentUser) return 0;
        return AppComponent.currentUser!.role.permissionLevel;
    }
    static updateUserData(firstName: string, lastName: string, phone: string, url: string) {
        this.currentUser!.firstName = firstName;
        this.currentUser!.lastName = lastName;
        this.currentUser!.phone = phone;
        this.currentUser!.url = url;
        this.saveUser();
    }
}
