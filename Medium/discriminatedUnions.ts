/* Discriminated unions are a powerful pattern used with union types that have a common field (discriminator) to determine which shape/type 
you're dealing with. */

/* Create three types:
Car → kind: "car", seats: number
Bike → kind: "bike", type: string
Truck → kind: "truck", capacity: number

Create a union type Vehicle of Car | Bike | Truck.

Write a function printVehicleDetails(vehicle: Vehicle) that prints a message depending on the kind. 

eg : Car with 5 seats
Bike of type Mountain
Truck with 2000kg capacity

*/

type car = {kind:"car", seats:number}
type Bike = {kind:"bike",type:string}
type Truck = {kind:"truck", capacity:number}

type Vehicle = car|Bike|Truck;

function printVehicleDetails(vehicle:Vehicle){
  if(vehicle.kind === "car"){
    console.log("Car with", vehicle.seats, "seats");
    
  }else if(vehicle.kind === "bike"){
    console.log("Bike of type", vehicle.type);
  }else{
    console.log("Truck with", vehicle.capacity, "kg capacity");
   }
}

