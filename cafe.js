export class Cafe {
  constructor(branchId, name, city, sellsFood) {
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
    return `${manager.name} is now the manager for ${this.name}.`;
  }

  addEmployee() {
    const manager = this.employee[0];
    if (manager) {
      manager.branchWorkers.forEach((worker) => this.employee.push(worker));
      const workerDetails = manager.branchWorkers.map(worker => `${worker.name} (${worker.position})`).join(", ");
      return `Manager: ${manager.name}, Workers: ${workerDetails}`;
    }
  }

  addMenu(menuItem) {
    if (!this.sellsFood && menuItem.type === "food") {
      return `${this.name} doesn't sell food.`;
    }
    this.menu.push(menuItem);
    return `${menuItem.name} is added`;
  }

  removeMenu(menuItem) {
    this.menu = this.menu.filter(item => item.name !== menuItem.name);
    const currentMenu = this.menu.map(item => item.name).join(", ") || "no items available";
    return `${menuItem.name} is removed. Current menu: ${currentMenu}`;
  }
}

// Example Usage
const cafe1 = new Cafe(1, "E08 Kreuzberg", "Berlin", false);
const cafe2 = new Cafe(2, "E30 Berlin", "Berlin", false);
const cafe3 = new Cafe(5, "E09 München", "München", true);

console.log(cafe1);
console.log(cafe2);
console.log(cafe3);
