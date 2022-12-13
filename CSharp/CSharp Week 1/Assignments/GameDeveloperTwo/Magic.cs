class Magic : Enemy
{
    public Magic(string name) : base(name, 80)
    {
        Attacks.Add(new Attack("Fireball", 25));
        Attacks.Add(new Attack("Shield", 0));
        Attacks.Add(new Attack("Staff Strike", 15));
    }
    public override void RandomAttack()
    {
        Random rand = new Random();
        int attackNumber = rand.Next(0, Attacks.Count);
        Console.WriteLine($"{_Name} hit you with a {Attacks[attackNumber]._Name} for {Attacks[attackNumber]._DamageDelt} damage!");
    }
    public void Heal(Enemy target)
    {
        target._HealthAmount += 40;
        Console.WriteLine($"Mage healed {target._Name} that now has {target._HealthAmount} health!");
    }
}