class Hoge {
    constructor(public name:string) {

    }
    callName():void {
        console.log(this.name);
    }
};
export = Hoge;