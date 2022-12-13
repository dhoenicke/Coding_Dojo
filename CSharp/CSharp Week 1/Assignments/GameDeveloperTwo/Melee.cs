class Melee : Enemy
{
    public Melee(string name) : base(name, 120)
    {
        Attacks.Add(new Attack("Punch", 20));
        Attacks.Add(new Attack("Kick", 15));
        Attacks.Add(new Attack("Tackle", 25));
    }
    public override void RandomAttack()
    {
        Random rand = new Random();
        int attackNumber = rand.Next(0, Attacks.Count);
        Console.WriteLine($"{_Name} hit you with a {Attacks[attackNumber]._Name} for {Attacks[attackNumber]._DamageDelt} damage!");
    }
    public void Rage()
    {
        foreach (Attack move in Attacks)
        {
            move._DamageDelt += 10;
        }
        RandomAttack();
        foreach (Attack move in Attacks)
        {
            move._DamageDelt -= 10;
        }
    }
}