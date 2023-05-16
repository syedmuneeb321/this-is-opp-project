class Person{
    private _personality:string;
    constructor(){
        this._personality='Mystery';
    };
    askQuestion(answer:number):void{
        if(answer===1){
            this._personality='Extravert';
        }else if(answer===2){
            this._personality='Introvert';
        }else{
            this._personality='You are still a Mystery';
        }
    };
    get getPersonality():string{
        return this._personality;
    };
};

export {Person};