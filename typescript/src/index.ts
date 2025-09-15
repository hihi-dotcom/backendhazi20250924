import{data} from "./data.js"
import {IKutya, Kutya}  from "./kutya.js"


if(data[0]){
    const kutyus = new Kutya(data[0]);
    kutyus.renderingDogTable(data);
}


//const kutya : Kutya =  new Kutya(data[0]);
//console.log(kutya.dogs(data));

