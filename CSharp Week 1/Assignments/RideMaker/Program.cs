// See https://aka.ms/new-console-template for more information

// Create 4 vehicles using each constructor at least once
Vehicle car = new Vehicle("Hyndia Tucson", "Black");
Vehicle bicycle = new Vehicle("Unknown", 1, "Black", false, 30);
Vehicle horse = new Vehicle("Cochise", 2, "Spotted", false, 20);
Vehicle scooter = new Vehicle("Scooter", 1, "Black", true, 15);

// Put all the vehicles created into a List
List<Vehicle> AllVehicles = new List<Vehicle>();
AllVehicles.Add(car);
AllVehicles.Add(bicycle);
AllVehicles.Add(horse);
AllVehicles.Add(scooter);

// Loop through the List and have each vehicle run its ShowInfo() method
foreach (Vehicle v in AllVehicles)
{
    v.ShowInfo();
}


// Make one of the vehicles travel 100 miles
car.Travel(100);

// Print the information of the vehicle to verify the distance travelled went up
car.ShowInfo();