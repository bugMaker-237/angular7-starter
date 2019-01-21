export interface IUserMenu {
    id: string
    menus: IMenu[]
}

export interface IMenu {
    path: string;
    name: string;
    icon: string;
}