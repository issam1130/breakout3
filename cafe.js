// ### Step 1 - class `Cafe`

// - create & work in `cafe.js` file 
// - make sure you export the class once it's done

// 1.1 declare a class `Cafe`
//   constructor with following arguments:
//   `branchId` - number (starting from 1 later)
//   `name`,`city` - string,
//   `sellsFood` - boolean, (no default value given)
//   (please don't include below three as constructor arguments)
//   `employee` - default as empty array,
//   `menu` - default as empty array,
//   `order` - default as empty array

//   * an instance of `Cafe` (e.g. object `cafe1`) would look like this:

  
 export class Cafe {
    constructor ( branchId, name, city, sellsFood){
    this.branchId = branchId;
    this.name = name;
    this.city = city;
    this.sellsFood = sellsFood;
    this.employee = [];
    this.menu = [];
    this.order = [];
}
addManager(manager) {
  this.employee.push(manager);
  return ` ${manager.name} is now the manager for ${this.name}.`;
}

addEmployee() {
  const manager = this.employee[0];

  if (manager) {
    manager.branchWorkers.map((worker) => this.employee.push(worker));
    
console.log(this.employee);

    const workerDetails = `${this.employee[1].name}, ${this.employee[2].name}`
    return `Manager: ${manager.name}, Workers: ${workerDetails}`;
    
  }
  
}
  }

   
  const cafe1 = new Cafe(1, "E08 Kreuzberg", "Berlin", false)


  console.log(cafe1);

//   Cafe {
//     branchId: 1,
//     name: 'E08 Kreuzberg',
//     city: 'Berlin',
//     sellsFood: false,
//     employee: [],
//     menu: [],
//     order: []
//   }



 