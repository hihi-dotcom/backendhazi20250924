export interface IKutya{
    id: number | null;
    nev: string;
    fajta: string;
    nem: boolean;
    eletkor: number;
    kepUrl: string | null;

}
class Valami{
    public name! : string;
  
    x : number;
    y : number;

    constructor(  y : number, x = 0){
        this.x = x;
        this.y = y;
    }

};

const valami = new Valami(5);
//valami.x = 15;
console.log(`${valami.x}, ${valami.y}`)
export default class Kutya implements IKutya{
    id: number | null;
    nev: string;
    fajta: string;
    nem: boolean;
    eletkor: number;
    kepUrl: string | null;

    constructor(dog: IKutya){
        this.id = dog.id || null;
        this.nev = dog.nev;
        this.fajta = dog.fajta;
        this.nem = dog.nem;
        this.eletkor = dog.eletkor;
        this.kepUrl = dog.kepUrl || null

    }

    get Id(){
        return this.id
    }
    set Id(id:number | null){
        this.id = id
    }

    public dogs(dogs1: IKutya[]): IKutya[] {
        const dogs: IKutya[] = [];
        dogs.push(...dogs1)
        return dogs;
    }
};