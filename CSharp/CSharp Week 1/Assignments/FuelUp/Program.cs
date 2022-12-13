// See https://aka.ms/new-console-template for more information

Car car = new Car("Hyndia Tucson", 5, "Black", 120, "Gas");
Bicycle bicycle = new Bicycle("Uknown", "Black", 30);
Horse horse = new Horse("Bucky", "Dark Brown", 20, "Hay");

List<Vehicle> AllVehicles = new List<Vehicle>();
AllVehicles.Add(car);
AllVehicles.Add(bicycle);
AllVehicles.Add(horse);

List<INeedFuel> NeedsFuel = new List<INeedFuel>();

foreach (Vehicle v in AllVehicles)
{
    if (v is INeedFuel)
    {
        NeedsFuel.Add((INeedFuel)v);
    }
}

foreach (INeedFuel i in NeedsFuel)
{
    i.GiveFuel(10);
}