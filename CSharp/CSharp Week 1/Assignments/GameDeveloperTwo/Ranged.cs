class Ranged : Enemy
{
    public int Distance;
    public Ranged(string name, int healthamount) : base(name, healthamount)
    {
        Attacks.Add(new Attack("Shoot Arrow", 20));
        Attacks.Add(new Attack("Throw Knife", 15));
        Distance = 5;
    }
    public override void RandomAttack()
    {
        Random rand = new Random();
        int attackNumber = rand.Next(0, Attacks.Count);
        if (Distance >= 10)
        {
            Console.WriteLine($"{_Name} hit you with a {Attacks[attackNumber]._Name} for {Attacks[attackNumber]._DamageDelt} damage!");
        }
        else
        {
            Console.WriteLine("You are too close to attack!");
        }
    }
    public void Dash()
    {
        Distance = 20;
        Console.WriteLine("The enemy dashed away from you!");
    }
}