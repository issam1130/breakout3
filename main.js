
import { Cafe } from "./cafe.js";

import { Manager, Worker } from "./worker.js";


import { Menu } from "./menu.js";




const cafe1 = new Cafe(1, "E08 Kreuzberg", "Berlin", false);
 
const cafe2 = new Cafe(2, "E30 Berlin", "Berlin", false);

const cafe3 = new Cafe(5, "E09 München", "München", true);

console.log(cafe1);
console.log(cafe2);
console.log(cafe3);



const food1 = new Menu("food", "Hot Sandwich", 12.5, true);
const food2 = new Menu("food", "Caesar Salad", 9.0, false);
const food3 = new Menu("food", "Grilled Chicken", 15.75, true);
const drink1 = new Menu("drinks", "Cappuccino", 4.5, true);
const drink2 = new Menu("drinks", "Iced Tea", 3.0, false);
const drink3 = new Menu("drinks", "Hot Chocolate", 5.0, true);


console.log(food1);
console.log(food2);
console.log(food3);
 console.log(drink1);
 console.log(drink2);
 console.log(drink3);
 
 
 const worker1 = new Worker("sandy", "Cashier");
const worker2 = new Worker("John", "Cashier");
const worker3 = new Worker("Wick", "Cashier");
const worker4 = new Worker("Jimmy", "barista");
const worker5 = new Worker("Anna", "barista");
const worker6 = new Worker("Mendy", "barista");

console.log(worker1);
console.log(worker2);
console.log(worker3);
console.log(worker4);
console.log(worker5);
console.log(worker6);






const manager1 = new Manager("Tina", 1);
const manager2 = new Manager("Alessandro", 2);
const manager3 = new Manager("Paolo", 3);

console.log(manager1);
console.log(manager2);
console.log(manager3);





console.log(manager1.addWorker(worker1)); 
console.log(manager1.addWorker(worker5)); 

console.log(manager2.addWorker(worker2)); 
console.log(manager2.addWorker(worker6)); 

console.log(manager3.addWorker(worker3)); 
console.log(manager3.addWorker(worker4)); 


console.log(manager1.removeWorker("Sandy")); 
console.log(manager1.branchWorkers); 

console.log(manager1.addWorker(worker1));
console.log(manager1.branchWorkers);


console.log(cafe1.addManager(manager1));

console.log(cafe1.addEmployee());

