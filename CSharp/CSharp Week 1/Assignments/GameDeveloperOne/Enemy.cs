class Enemy
{
    private string Name;
    public string _Name
    {
        get { return Name; }
    }
    private int HealthAmount;
    public int _HealthAmount
    {
        get { return HealthAmount; }
    }

    public List<Attack> Attacks;
    List<Attack> attackList = new List<Attack>() { new Attack("Smash", 50), new Attack("Punch", 25), new Attack("Fireball", 100) };

    public Enemy addAttack(Attack att)
    {
        Attacks.Add(att);
        return this;
    }

    public Enemy(string name)
    {
        Name = name;
        HealthAmount = 100;
        Attacks = attackList;
    }

    public void RandomAttack()
    {
        Random rand = new Random();
        int attackNumber = rand.Next(0, attackList.Count);
        Console.WriteLine($"{Name} hit you with a {attackList[attackNumber]._DamageDelt} damage!");
    }
}