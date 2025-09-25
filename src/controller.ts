import { data } from "./data";

export const getAllData = (req:any, res: any) => {
    res.status(200).send(data);
}

export const run = (req1:any, res1: any) => {
    res1.status(200).send("sodv56");
}

export const valasz3 = (req2:any, res2: any) => {
    res2.status(200).send(data);
}

export const AddData = (req2:Request, res2: any) => {

    const dog = req2.body;
    console.log(dog);
    res2.status(200).send(dog);
}
