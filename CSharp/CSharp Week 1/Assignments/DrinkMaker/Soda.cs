class Soda : Drink
{
    public bool IsDiet;
    public Soda(string name, string color, double temperature, int calories, bool id) : base(name, color, temperature, true, calories)
    {
        IsDiet = id;
    }

    public override void ShowDrink()
    {
        base.ShowDrink();
        Console.WriteLine($"Is Diet: {IsDiet}");
    }
}