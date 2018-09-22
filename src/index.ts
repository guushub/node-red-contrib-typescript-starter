import { Red } from "node-red";
import * as LowerCase from "./nodes/lower-case/lower-case";
import * as UpperCase from "./nodes/upper-case/upper-case";

module.exports = (RED: Red) => {
    LowerCase.register(RED);  
    UpperCase.register(RED);    
}