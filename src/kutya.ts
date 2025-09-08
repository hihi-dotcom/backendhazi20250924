export interface IKutya{
    id: number | null;
    nev: string;
    fajta: string;
    nem: boolean;
    eletkor: number;
    kepUrl: string | null;

}


export default class Kutya{
   private id: number | null;
   private nev: string;
   private fajta: string;
   private nem: boolean;
   private eletkor: number;
   private kepUrl: string | null;

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