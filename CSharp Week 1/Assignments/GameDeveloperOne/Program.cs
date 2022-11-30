// See https://aka.ms/new-console-template for more information

Enemy bowser = new Enemy("Bowser");

Attack smash = new Attack("Smash", 50);
Attack punch = new Attack("Punch", 25);
Attack fireball = new Attack("Fireball", 100);

bowser.addAttack(smash).addAttack(punch).addAttack(fireball);
foreach (Attack item in bowser.Attacks)
{
    Console.WriteLine($"Attack: {item._Name} DamageDelt: {item._DamageDelt}");
}
bowser.RandomAttack();