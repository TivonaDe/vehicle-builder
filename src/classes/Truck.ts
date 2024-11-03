// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from './Vehicle.js';
import Motorbike from './Motorbike.js';
import Car from './Car.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';

// TODO: The Truck class should extend the Vehicle class and should implement the AbleToTow interface
class Truck extends Vehicle implements AbleToTow {

 
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];
  towingCapacity: number;

  
constructor(
  vin: string,
  color: string,
  make: string,
  model: string,
  year: number, 
  weight: number,
  topSpeed: number,
  wheels: Wheel[],
  towingCapacity: number,)
  {
    super();
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    this.wheels = wheels;
    this.towingCapacity = towingCapacity;
  }


  // TODO: Implement the tow method from the AbleToTow interface
  AbleToTow(vehicle: Truck | Motorbike | Car): void {
    // TODO: Get the make an model of the vehicle if it exists
    const vehicleMake: string = vehicle.getMake() ? vehicle.getMake() : 'Unknown Make';
    const vehicleModel: string = vehicle.getModel() ? vehicle.getModel() : 'Unknown Model';
    // TODO: Check if the vehicle's weight is less than or equal to the truck's towing capacity
    // TODO: If it is, log that the vehicle is being towed
    // TODO: If it is not, log that the vehicle is too heavy to be towed
    if (vehicle.weight <= this.towingCapacity) {
      console.log(`Towing ${vehicleMake} ${vehicleModel}`);
    } else {
      console.log(`Vehicle is too heavy to be towed`);
  }
}

  // TODO: Override the printDetails method from the Vehicle class
  override getVin(): string {
    return this.vin;
  }
 override getMake(): string {
    return this.make;
  }
 override getModel(): string {
    return this.model;
  }
// TODO: The method should call the printDetails method of the parent class
// TODO: The method should log the details of the Truck
// TODO: The details should include the VIN, make, model, year, weight, top speed, color, towing capacity, and wheels
override printDetails(): void {
  super.printDetails();
  console.log(`VIN: ${this.vin}`);
  console.log(`Make: ${this.make}`);
  console.log(`Model: ${this.model}`);
  console.log(`Year: ${this.year}`);
  console.log(`Weight: ${this.weight}`);
  console.log(`Top Speed: ${this.topSpeed}`);
  console.log(`Color: ${this.color}`);
  console.log(`Towing Capacity: ${this.towingCapacity}`);
  console.log(`Wheels`);
  this.wheels.forEach((wheel, index) => {
    console.log(`Wheel ${index + 1}: Diameter: ${wheel.getDiameter} inches, Tire Brand: ${wheel.getTireBrand}`);
  });
}
}

// Export the Truck class as the default export
export default Truck;
