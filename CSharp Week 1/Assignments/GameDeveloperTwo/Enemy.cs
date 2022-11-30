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
        set { HealthAmount = value; }
    }

    public List<Attack> Attacks;

    public Enemy(string name, int healthamount)
    {
        Name = name;
        HealthAmount = healthamount;
        Attacks = new List<Attack>();
    }

    public void PrintInfo()
    {
        Console.WriteLine($"Enemy Name: {this._Name}\nEnemy HealthAmount : {this._HealthAmount}");
        foreach (Attack item in Attacks)
        {
            Console.WriteLine($"Attack: {item._Name} | Damage: {item._DamageDelt}");
        }
    }

    public virtual void RandomAttack()
    {
        Random rand = new Random();
        int attackNumber = rand.Next(0, Attacks.Count);
        Console.WriteLine($"{Name} hit you with a {Attacks[attackNumber]._Name} for {Attacks[attackNumber]._DamageDelt} damage!");
    }
}