import{data} from "./data"
import Kutya from "./kutya";




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

for(const tbodysor of data){
    const trtb = createHTMLElementwithParentElement('tr', tbody);
    createHTMLElementwithParentElementandInnerHtml("td", trtb, tbodysor.id);
    createHTMLElementwithParentElementandInnerHtml("td", trtb, tbodysor.nev);
    createHTMLElementwithParentElementandInnerHtml("td", trtb, tbodysor.fajta);
    createHTMLElementwithParentElementandInnerHtml("td", trtb, tbodysor.nem);
    createHTMLElementwithParentElementandInnerHtml("td", trtb, tbodysor.eletkor);
    createHTMLElementwithParentElementandInnerHtml("td", trtb, tbodysor.kepUrl);
}

const kutya : Kutya =  new Kutya(data[0]);

//console.log(kutya.dogs(data));
