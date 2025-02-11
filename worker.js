 export class Worker {
    constructor(name, position) {
        this.name = name;
        this.position = position;
    }
}

const worker1 = new Worker("sandy", "Cashier");
console.log(worker1);



 export class Manager extends Worker {
    constructor(name, branchId) {
      super(name, "Manager"); 
      this.branchId = branchId;
      this.branchWorkers = []; 
    }

    addWorker(worker) {
      this.branchWorkers.push(worker);
      return `${worker.name} is added`;
  }
  }


  const manager1 = new Manager("Tina", 1);
console.log(manager1);