import { Person } from "./person.js";

class Student extends Person{
    private _name:string;
    constructor(){
        super();
        this._name='';
    };
    get getName(){
        return this._name;
    };
    set setName(value:string){
        this._name=value;
    };
};

export default Student;