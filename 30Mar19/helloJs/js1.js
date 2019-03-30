//Variable
let hello = "hello world";
console.log(typeof hello);
console.log(hello);
hello = 12;
console.log(typeof hello);
console.log(hello);

//Constant
const helloWorld = "Hello World Constant";
console.log(helloWorld);

//Arrays
const friends = ["Friend 1","Friend 2","Friend 3",12];
console.log(friends);
console.log(friends[0]);
friends.push("Friend 4");
console.log(friends);
friends[0] = "Friend 1 Edit";
console.log(friends[0]);
console.log(friends);


//Objects
const student = {
    name:"Ishaq",
    age:20,
    friends:["F1","F2","F3"],
    "job-title":"Developer"
};
console.log(student);
console.log(student.name);
const key = "age";
console.log(student[key]);

//Functions
function myFunc1() {
    //this;
    console.log("hello World func");
}
myFunc1();

//Arrow Functions
const myArrowFunc = (msg)=>console.log(msg);
myArrowFunc("hello Arrow Func");
const myArrowAdd = (a,b)=>a+b;
console.log(myArrowAdd(5,10));

//Callbacks HOF
const myCallbackFunc = (myFunc)=>{
    myFunc();
};
const myCallableFunc = ()=>{
    console.log("Hello");
};
myCallbackFunc(myCallableFunc);


//Timeout
setTimeout(()=>{
    //console.log("Hello");
},0);


const mySecCallBackFun = (myCode,value)=>{
    myCode(value+10,20);
};
mySecCallBackFun((val)=>{
   console.log("value is :"+val);
},100);


//Array Functions
const myMarks = [10,20,30,40];

//MAP
const myMapFun = (v,i)=>{
    return "Hello World "+i
};
const myMappedArray = myMarks.map(myMapFun);
console.log(myMappedArray);

//Filter
const filterred = myMarks.filter((v)=>v>20);
console.log(filterred);

//Foreach
myMarks.forEach((v,i)=>{
   console.log("Index : "+i+" Value : "+v)
});

const optionalParams = (a,b=10)=>{
    console.log(a+b);
};
optionalParams(10);
optionalParams(10,20);