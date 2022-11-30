public class Car : Vehicle, INeedFuel
{
    public string FuelType { get; set; }
    public int FuelTotal { get; set; }
    public Car(string name, int np, string color, int ts, string ft) : base(name, np, color, true, ts)
    {
        FuelType = ft;
        FuelTotal = 10;
    }

    public void GiveFuel(int Amount)
    {
        FuelTotal += Amount;
        Console.WriteLine($"Fueled the {Name} with {FuelType} to {FuelTotal}.");
    }
}