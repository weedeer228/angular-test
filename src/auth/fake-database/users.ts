import { IUser, IUserRole } from "core/services";
import { roles } from "./roles";

export const Users: Array<IUser> = [
    {
        id: 1,
        //login: "email@example.com"
        //password: "pass"
        firstName: 'fn',
        lastName: 'ln',
        email: 'email@example.com',
        phone: '+72281337951',
        url: '',
        ///TODO: Хэшировать пароль
        password: 'pass',
        role: roles.find(r => r.id === 3) as IUserRole
    },
    {
        id: 2,
        firstName: 'default',
        lastName: 'user',
        email: 'user@mail.com',
        phone: '+70000000000',
        url: 'userwebsite.com',
        ///TODO: Хэшировать пароль
        password: '228',
        role: roles.find(r => r.id === 1) as IUserRole
    },
    {
        id: 2,
        firstName: 'super',
        lastName: 'admin228',
        email: 'admin@super.com',
        phone: '+79999999999',
        url: '',
        ///TODO: Хэшировать пароль
        password: 'admin',
        role: roles.find(r => r.id === 2) as IUserRole
    },
]
