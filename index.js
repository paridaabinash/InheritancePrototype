// 1. Create 2 objects - parent and child. Attach methods to parent and 
// use those methods in child object using parents prototype.

let parent = {
    name: "Mclaren",
    type: "Spider",
    getData: function() {
        console.log(`model is ${this.name} and type is ${this.type}`);
    }
}
parent.getData();

let child = Object.create(parent);
child.name = "Ferrari";

child.getData();



// 2. Write code to explain prototype chaining.----------------------------------

let obj1 = {
    prop1: "value of obj1"
}

let obj2 = Object.create(obj1); // obj2 having access to obj1 properties
obj2.prop2 = "value of obj2";

let obj3 = Object.create(obj2); // obj3 having access to obj2 and obj1 properties
obj3.prop3 = "value of obj3";
obj3.met = function() {
    console.log(this.prop1 + this.prop2 + this.prop3); 
}

obj3.met(); // here we can see the prototype chaining is working.




// 3. Add a method to calculate sum of all elements in Array 
// in array's protype, use that method to calculate sum for multiple arrays.


let array =[1,2,3,4];
let arrObj = {
    getName: function(){
        let result = array.reduce((acc,cur)=> acc = acc + cur ,0);
        console.log(result);
    }
}
arrObj.getName();















