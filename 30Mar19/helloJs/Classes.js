class Hello {
    //name = "Hello aa";
    constructor(name){
        this.name = name;
        console.log("hello world "+name);
    }

    hello(){
        console.log("My Hello function")
    }
}
//const cls1 = new Hello("hello");
//console.log(cls1.name);
//cls1.hello();

const cls2 = new Hello("hello 123");
console.log(cls2.name);


class Hello2 extends Hello{
    constructor(name){
        super(name)
    }
}

const clsHello2 = new Hello2("Abc");
console.log(clsHello2.name);
