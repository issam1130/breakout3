
import { Cafe } from "./cafe.js";

import { Manager, Worker } from "./worker.js";


import { Menu } from "./menu.js";



const cafe1 = new Cafe(1, "E08 Kreuzberg", "Berlin", false);
 
const cafe2 = new Cafe(2)


const food1 = new Menu("food", "Hot Sandwich", 12.5, true);



const worker1 = new Worker("sandy", "Cashier");



const manager1 = new Manager("Tina", 1);
