import { PermissionLevel } from "app/menu/services/menu.services"
import { IUserRole } from "core/services"

export const roles: Array<IUserRole> = [
    {
        id: 1,
        name: 'user',
        permissionLevel: PermissionLevel.user,
    },
    {
        id: 2,
        name: 'admin',
        permissionLevel: PermissionLevel.admin,

    },
    {
        id: 3,
        name: 'owner',
        permissionLevel: PermissionLevel.owner,
    }

]
