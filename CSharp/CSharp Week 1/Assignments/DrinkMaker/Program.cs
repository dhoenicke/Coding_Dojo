// See https://aka.ms/new-console-template for more information

Soda DrPepper = new Soda("Dr Pepper", "brown", 40, 140, false);
Coffee ColdBrew = new Coffee("Irish Cream Cold Brew", "light brown", 120, 120, "Dark", "coffee beans");
Wine Apple = new Wine("Apple Spiced Wine", "white", 25, 100, "Unknown", 2022);

List<Drink> AllBeverages = new List<Drink>();
AllBeverages.Add(DrPepper);
AllBeverages.Add(ColdBrew);
AllBeverages.Add(Apple);

foreach (Drink d in AllBeverages)
{
    d.ShowDrink();
}