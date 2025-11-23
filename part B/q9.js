function displayCar() {
  console.log("Vehicle Category: Car");
}

function displayTruck() {
  console.log("Vehicle Category: Truck");
}

function displayBike() {
  console.log("Vehicle Category: Bike");
}
function vehicleInfo(vehicleCategory, callbackFn) {
  console.log("Selected:", vehicleCategory);
  callbackFn();
}
vehicleInfo("Car", displayCar);
vehicleInfo("Truck", displayTruck);
vehicleInfo("Bike", displayBike);
