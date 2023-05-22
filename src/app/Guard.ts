import { AppComponent } from "./app.component";
import { PermissionLevel } from "./menu/services/menu.services";

export class Guard {


    static forUsers(): boolean {
        return AppComponent.getUserPermission() >= PermissionLevel.user;
    }
    static forAdmins(): boolean {
        return AppComponent.getUserPermission() >= PermissionLevel.admin;
    }
    static forOwner(): boolean {
        return AppComponent.getUserPermission() >= PermissionLevel.owner;
    }
    static onlyIfNotAuth(): boolean {
        return AppComponent.getUserPermission() < PermissionLevel.user;
    }
}
