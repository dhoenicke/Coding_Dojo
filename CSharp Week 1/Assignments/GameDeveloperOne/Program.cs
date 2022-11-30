// See https://aka.ms/new-console-template for more information

Enemy orc = new Enemy("Orc");

Attack slash = new Attack("Slash", 10);
Attack cut = new Attack("Cut", 5);
Attack fireball = new Attack("Fireball", 10);

orc.addAttack(slash).addAttack(cut).addAttack(fireball);
foreach (Attack item in orc.Attacks)
{
    Console.WriteLine($"Attack: {item._Name} DamageDelt: {item._DamageDelt}");
}
orc.RandomAttack();