class Coffee : Drink
{
    public string Roast;
    public string Beans;
    public Coffee(string name, string color, double temperature, int calories, string roast, string beans) : base(name, color, temperature, false, calories)
    {
        Roast = roast;
        Beans = beans;
    }

    public override void ShowDrink()
    {
        base.ShowDrink();
        Console.WriteLine($"Roast: {Roast}");
        Console.WriteLine($"Beans: {Beans}");
    }
}