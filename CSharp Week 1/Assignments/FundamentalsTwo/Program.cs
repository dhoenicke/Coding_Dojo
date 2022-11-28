// See https://aka.ms/new-console-template for more information

// Three Basic Arrays
int[] intArray = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9};

string[] namesArray = {"Tim", "Martin", "Nikki", "Sara"};

bool[] boolArray = new bool[5];
for (int i = 1; i < boolArray.Length; i++)
{
    if (i % 2 == 0)
    {
        boolArray[i] = true;
    }
}
foreach (bool item in boolArray)
{
    Console.WriteLine(item);
}

// List of Flavors
List<string> flavors = new List<string>();
flavors.Add("Vanilla");
flavors.Add("Cookie Dough");
flavors.Add("Mint Chocolate Chip");
flavors.Add("Cookies and Cream");
flavors.Add("Caramel");
// Console.WriteLine(flavors.Count);
// Console.WriteLine(flavors[2]);
// flavors.RemoveAt(2);
// Console.WriteLine(flavors.Count);

// User Dictionary
Random rand = new Random();
Dictionary<string, string> user = new Dictionary<string, string>();
foreach(string name in namesArray)
{
    string randomFlavor = flavors[rand.Next(0, flavors.Count)];
    user.Add(name, randomFlavor);
}

foreach (KeyValuePair<string, string> entry in user)
{
    Console.WriteLine($"{entry.Key}: {entry.Value}");
}