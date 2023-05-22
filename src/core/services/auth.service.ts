import { Injectable } from '@angular/core'
import { PermissionLevel } from 'app/menu/services/menu.services';

export interface IUser{
    id:number;
    email:string;
    firstName:string;
    lastName:string;
    phone:string;
    url:string;
    password:string;
    role:IUserRole;
}

export interface IUserRole{
    id:number
    name:string;
    permissionLevel:PermissionLevel;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
    public login() { }

    public logout() { }
}
