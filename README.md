# breakout3

# Group work `The Cafe Business`

- In this exercise, you will work in a group of 3-4 people.

- We practice...
  - creating classes & instances
  - extending classes 
  - advanced array methods
  - `import` & `export` in node.js
  - git collaboration

- One lead person creates a repo with `solution.js` in it, and invite all members as collaborator

- Split the tasks and work on your own branch. 
  * Tasks to split from `1.first.md`: 
    - step 1, 
    - step 2, 
    - step 3
    - once 1-3 are done, step 4 (together sharing the screen)

- Push your code and merge the branch to main remotely

- Pull the changes locally


### Step 1 - class `Cafe`

- create & work in `cafe.js` file 
- make sure you export the class once it's done

1.1 declare a class `Cafe`
  constructor with following arguments:
  `branchId` - number (starting from 1 later)
  `name`,`city` - string,
  `sellsFood` - boolean, (no default value given)
  (please don't include below three as constructor arguments)
  `employee` - default as empty array,
  `menu` - default as empty array,
  `order` - default as empty array

  * an instance of `Cafe` (e.g. object `cafe1`) would look like this:

  ```js
  //                   branchId    name       city   sellsFood
  const cafe1 = new Cafe(1, "E08 Kreuzberg", "Berlin", false);
  console.log(cafe1); /*
  Cafe {
  branchId: 1,
  name: 'E08 Kreuzberg',
  city: 'Berlin',
  sellsFood: false,
  menu: [],
  employee: [],
  order: []
  } */
  ```

### Step 2 - class `Worker` & `Manager`
- create & work in `worker.js` file 
- make sure you export the class & subclass once it's done

2.1 declare a class `Worker`
  constructor with following arguments:
  `name` - string,
  `position` - string (this will be set as either "cashier" or "barista" when creating an instance of `Worker`)

* an instance of `Worker` (e.g. object `worker1`) would look like this:

```js
//                          name     position
const worker1 = new Worker("Sandy", "Cashier");
console.log(worker1); // Worker { name: 'Sandy', position: 'Cashier' }
```

- 2.2 declare a class `Manager`
  constructor with following arguments:
  `name` - string,
  `branchId`- number, the `branchId` of cafe

  **this class extends from `Worker`, and inherits `name` & `position` from `Worker`**

  properties below are not required as arguments when an instance is created:
  `position` is preset as "manager"
  `branchWorkers` = default as empty array

* an instance of `Manager` (e.g. object `manager1` for `branchId` 1) would look like this:

```js
//                          name  branchId
const manager1 = new Manager("Tina", 1);
console.log(manager1); /*
                          Manager {
                            name: 'Tina',
                            position: 'Manager',
                            branchId: 1,
                            branchWorkers: []
                          }                       */
```

### Step 3 - class `Menu`
- create & work in `menu.js` file 
- make sure you export the class once it's done

- 4.1 declare a class `Menu`
  constructor with following arguments:
- `type` - string (must be either "drinks" or "food" later)
- `name` - string
- `price` - number
- `isWarm` - boolean (no default value given)

* an instance of `Menu` (e.g. object `food1`) would look like this:

```js
//                      type     name         price  isWarm             
const food1 = new Menu("food", "Hot Sandwich", 12.5, true);
console.log(food1); // Menu { type: 'food', name: 'Hot Sandwich', price: 12.5, isWarm: true }
```

### 4. Now, create!

- create and work in `main.js` file
- import all classes from `cafe.js`, `worker.js`, `menu.js`

- create instances of classes below:
  - 3 instances of `Cafe` (in 3 different cities, use different boolean values)
  - 6 instances of `Worker` (each cafe requires 2 workers as "cashier" & "barista" )
  - 3 instances of `Manager` (with `branchId`)
  - minimum 6 instances of `Menu` (3 type: "food", 3 type: "drinks", use different boolean values)

**Well done, time to push, merge, pull the changes and move onto Step 2!**
