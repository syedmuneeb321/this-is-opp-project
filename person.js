class Person {
    _personality;
    constructor() {
        this._personality = 'Mystery';
    }
    ;
    askQuestion(answer) {
        if (answer === 1) {
            this._personality = 'Extravert';
        }
        else if (answer === 2) {
            this._personality = 'Introvert';
        }
        else {
            this._personality = 'You are still a Mystery';
        }
    }
    ;
    get getPersonality() {
        return this._personality;
    }
    ;
}
;
export { Person };
