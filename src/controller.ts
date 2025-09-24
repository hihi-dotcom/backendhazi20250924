import Kutya from "./kutya";
import { data } from "./data";
const kutyus = new Kutya(data[0]);
export const valasz = (_req:any, res: any) => {
    res.status(208).send("sodv");
}

export const valasz2 = (_req1:any, res1: any) => {
    res1.status(208).send("sodv");
}

export const valasz3 = (_req2:any, res2: any) => {
    res2.status(205).send(kutyus.renderTable("dogtable", data));
}