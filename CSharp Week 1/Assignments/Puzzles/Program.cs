// See https://aka.ms/new-console-template for more information

// Coin flip
static string CoinFlip()
{
    Random rand = new Random();
    if(rand.Next(2) == 0)
    {
        return "Heads";
    } else {
        return "Tails";
    }
}

Console.WriteLine(CoinFlip());

// Dice roll
static int DiceRoll()
{
    Random rand = new Random();
    return rand.Next(1,7);
}

Console.WriteLine(DiceRoll());

// Bonus version that accepts a parameter for sides
static int VariableDiceRoll(int sides)
{
    Random rand = new Random();
    return rand.Next(1,sides+1);
}

Console.WriteLine(VariableDiceRoll(20));

// Stat roll
static List<int> MultiRoll()
{
    List<int> Results = new List<int>();
    for(int i = 0; i < 4; i++)
    {
        Results.Add(DiceRoll());
    }
    return Results;
}

List<int> Res = MultiRoll();
Console.WriteLine(string.Join(", ", Res));

//Bonus: Write your function to roll any number of times you would like
static List<int> VariableMultiRoll(int rolls)
{
    List<int> Results = new List<int>();
    for(int i = 0; i < rolls; i++)
    {
        Results.Add(DiceRoll());
    }
    // Extra bonus: print the largest value rolled
    Console.WriteLine($"Largest value: {FindMax(Results)}");
    return Results;
}

List<int> ResMulti = VariableMultiRoll(4);
Console.WriteLine(string.Join(", ", ResMulti));

// Extra bonus: print the largest value rolled
static int FindMax(List<int> numbers)
{
    int max = 0;
    foreach(int num in numbers)
    {
        if(num > max)
        {
            max = num;
        }
    }
    return max;
}

// Roll until
static string RollUntil(int number)
{
    if(number < 1 || number > 6)
    {
        return "Invalid number";
    }
    int count = 1;
    int result = DiceRoll();
    while(result != number)
    {
        result = DiceRoll();
        count++;
    }
    return $"Rolled a {number} after {count} tries";
}

Console.WriteLine(RollUntil(8));
Console.WriteLine(RollUntil(3));