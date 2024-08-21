class Vehicle {
  drive(): void {
    console.log("hi");
  }
}

class Car1 extends Vehicle {}
const car1: Vehicle = new Car1();
car1.drive();
