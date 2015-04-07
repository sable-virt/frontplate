class Hoge {
    aaa:any;
    constructor(public name:string) {

    }
    callName():void {
        console.log(this.name);
        //console.log(this.aaa.fdasfsdafas);
    }
}
export = Hoge;