public class Horse : Vehicle, INeedFuel
{
    public string FuelType { get; set; }
    public int FuelTotal { get; set; }
    public Horse(string name, string color, int ts, string ft) : base(name, 2, color, false, ts)
    {
        FuelType = ft;
        FuelTotal = 10;
    }

    public void GiveFuel(int Amount)
    {
        FuelTotal += Amount;
        Console.WriteLine($"Fed {Name} some {FuelType}.");
    }
}