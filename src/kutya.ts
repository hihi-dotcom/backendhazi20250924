import { data } from "./data"

export interface IKutya {
    id: number | null;
    nev: string;
    fajta: string;
    nem: boolean;
    eletkor: number;
    kepUrl: string | null;

}





export class Kutya implements IKutya {
    id: number | null;
    nev: string;
    fajta: string;
    nem: boolean;
    eletkor: number;
    kepUrl: string | null;
    table: HTMLElement;
    thead!: HTMLElement;
    tbody!: HTMLElement;
    theadrow!: HTMLElement

    constructor(dog: IKutya) {
        this.id = dog.id || null;
        this.nev = dog.nev;
        this.fajta = dog.fajta;
        this.nem = dog.nem;
        this.eletkor = dog.eletkor;
        this.kepUrl = dog.kepUrl || null

        const fejtomb = [
            {
                innerhtml: "id"
            },
            {
                innerhtml: "nev"
            },
            {
                innerhtml: "fajta"
            },
            {
                innerhtml: "nem"
            },
            {
                innerhtml: "eletkor"
            },
            {
                innerhtml: "kepUrl"
            }
        ];
        
     

        const table = this.createHTMLElementwithParentElement('table', document.body);
        const tfej = this.createHTMLElementwithParentElement('thead', table);
        const tbody = this.createHTMLElementwithParentElement('tbody', table);
        const tfejsor = this.createHTMLElementwithParentElement("tr", tfej);

        this.table = table
        this.tbody = tbody
        this.thead = tfej
        this.theadrow = tfejsor 

        for(const fejlcell of fejtomb){
            this.createHTMLElementwithParentElementandInnerHtml('th', tfejsor, fejlcell.innerhtml);
        
        }
    }

    get Id() {
        return this.id
    }
    set Id(id: number | null) {
        this.id = id
    }

    public dogs(dogs1: IKutya[]): IKutya[] {
        const dogs: IKutya[] = [];
        dogs.push(...dogs1)
        return dogs;
    }

    createHTMLElementwithParentElement(htmltag:string, parent:HTMLElement ){
        const htmlelem = document.createElement(htmltag);
        parent.appendChild(htmlelem);
    
        return htmlelem;
    };

    createHTMLElementwithParentElementandInnerHtml(htmltag:string, parent:HTMLElement, innerhtml: string | number | boolean | null ){
        const htmlelem = document.createElement(htmltag);
        htmlelem.innerHTML = String(innerhtml)
        parent.appendChild(htmlelem);
    
        return htmlelem;
    };

    
    renderingDogTable(data1: IKutya[]){
        for (const tbodysor of data1) {
            const elemek = [tbodysor.id, tbodysor.nev, tbodysor.fajta, tbodysor.nem, tbodysor.eletkor, tbodysor.kepUrl];
            const trtb = this.createHTMLElementwithParentElement('tr', this.tbody);
            for (const elem of elemek) {
                this.createHTMLElementwithParentElementandInnerHtml("td", trtb, elem);
            }
        
        }
    };

};

