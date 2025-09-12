import{data} from "./data"
import {IKutya, Kutya}  from "./kutya";




function createHTMLElementwithParentElement(htmltag:string, parent:HTMLElement ){
    const htmlelem = document.createElement(htmltag);
    parent.appendChild(htmlelem);

    return htmlelem;
}

function createHTMLElementwithParentElementandInnerHtml(htmltag:string, parent:HTMLElement, innerhtml: string | number | boolean | null ){
    const htmlelem = document.createElement(htmltag);
    htmlelem.innerHTML = String(innerhtml)
    parent.appendChild(htmlelem);

    return htmlelem;
}

const table = createHTMLElementwithParentElement('table', document.body);
const tfej = createHTMLElementwithParentElement('thead', table);
const tbody = createHTMLElementwithParentElement('tbody', table);

const tfejsor = createHTMLElementwithParentElement("tr", tfej);

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

for(const fejlcell of fejtomb){
    createHTMLElementwithParentElementandInnerHtml('th', tfejsor, fejlcell.innerhtml);

}

function renderingDogTable(data1: IKutya[]){
    for (const tbodysor of data1) {
        const elemek = [tbodysor.id, tbodysor.nev, tbodysor.fajta, tbodysor.nem, tbodysor.eletkor, tbodysor.kepUrl];
        const trtb = createHTMLElementwithParentElement('tr', tbody);
        for (const elem of elemek) {
            createHTMLElementwithParentElementandInnerHtml("td", trtb, elem);
        }
    
    }
};

renderingDogTable(data);

//const kutya : Kutya =  new Kutya(data[0]);

//console.log(kutya.dogs(data));
