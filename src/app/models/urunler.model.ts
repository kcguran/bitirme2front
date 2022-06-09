export class Urunler {
    id: number | undefined;
    urunadi: string = "";
    urunfiyati: string = "";
    createTime: Date = new Date();
    urunsatici: string = "";

    constructor(id?: number, urunadi: string = "", urunfiyati: number = 0,urunsatici:string="") {

    }
}