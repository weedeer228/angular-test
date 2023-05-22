import { Injectable } from "@angular/core";

export interface IMenuItem {
    id: number
    text: string;
    icon: string;
    route: string;
    subMenu?: Array<IMenuItem>;
    permissionLevel: PermissionLevel;
}

export enum PermissionLevel {
    None = 0,
    user = 1,
    admin = 2,
    owner = 3,

}
@Injectable()
export class MenuService {
    items!: Array<IMenuItem>;


}
