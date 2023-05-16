import { Person } from "./person.js";
class Student extends Person {
    _name;
    constructor() {
        super();
        this._name = '';
    }
    ;
    get getName() {
        return this._name;
    }
    ;
    set setName(value) {
        this._name = value;
    }
    ;
}
;
export default Student;
