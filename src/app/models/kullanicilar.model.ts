import { Role } from "./role.enum";

export class Kullanicilar {
    id: undefined | undefined;
    kullaniciadi: string = "";
    password: string = "";
    isim: string = "";
    token: string = "";
    role: Role = Role.ADMIN;
}