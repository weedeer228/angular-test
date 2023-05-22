import { IMenuItem, PermissionLevel } from "./services/menu.services";

export const MenuItems: Array<IMenuItem> = [
    {
        id:1,
        text: 'Home',
        icon: '',
        route: '/home',
        permissionLevel: PermissionLevel.None,
    },
    {
        id:2,
        text: 'Biling',
        icon: '',
        route: '/biling',
        permissionLevel: PermissionLevel.owner,
    },
    {
        id:3,
        text: 'Inventory',
        icon: '',
        route: '/inventory',
        permissionLevel: PermissionLevel.user,
    },
    {
        id:4,
        text: 'Reports',
        icon: '',
        route: '/reports',
        permissionLevel: PermissionLevel.admin


    },
    {
        id:5,
        text: 'Profile',
        icon: '',
        route: '/profile',
        permissionLevel: PermissionLevel.user
    }

]


