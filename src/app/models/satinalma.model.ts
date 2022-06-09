export class Satinalma {
    id: number | undefined;
    kullaniciid: number | undefined;
    urunid: number | undefined;
    urunfiyati: string | undefined;
    satinalmazamani: Date = new Date();
    urunsatici: string| undefined;

    constructor(kullaniciid?: number, urunid?: number, urunfiyati?: string, urunsatici?: string) {
        this.kullaniciid = kullaniciid;
        this.urunid = urunid;
        this.urunfiyati = urunfiyati;
        this.urunsatici = urunsatici;
    }
}