// See https://aka.ms/new-console-template for more information
// Console.WriteLine("Hello, World!");

List<Eruption> eruptions = new List<Eruption>()
{
    new ("La Palma", 2021, "Canary Is", 2426, "Stratovolcano"),
    new ("Villarrica", 1963, "Chile", 2847, "Stratovolcano"),
    new ("Chaiten", 2008, "Chile", 1122, "Caldera"),
    new ("Kilauea", 2018, "Hawaiian Is", 1122, "Shield Volcano"),
    new ("Hekla", 1206, "Iceland", 1490, "Stratovolcano"),
    new ("Taupo", 1910, "New Zealand", 760, "Caldera"),
    new ("Lengai, Ol Doinyo", 1927, "Tanzania", 2962, "Stratovolcano"),
    new ("Santorini", 46, "Greece", 367, "Shield Volcano"),
    new ("Katla", 950, "Iceland", 1490, "Subglacial Volcano"),
    new ("Aira", 766, "Japan", 1117, "Stratovolcano"),
    new ("Ceboruco", 930, "Mexico", 2280, "Stratovolcano"),
    new ("Etna", 1329, "Italy", 3320, "Stratovolcano"),
    new ("Bardarbunga", 1477, "Iceland", 2000, "Stratovolcano")
};
// Example Query - Prints all Stratovolcano eruptions
IEnumerable<Eruption> stratovolcanoEruptions = eruptions.Where(c => c.Type == "Stratovolcano");
PrintEach(stratovolcanoEruptions, "Stratovolcano eruptions.");

// Use LINQ to find the first eruption that is in Chile and print the result.
Eruption? firstChile = eruptions.FirstOrDefault(e => e.Location == "Chile");
Console.WriteLine("First eruption in Chile: \n" + firstChile);

// Find the first eruption from the "Hawaiian Is" location and print it. If none is found, print "No Hawaiian Is Eruption found."
Eruption? firstHawaiian = eruptions.FirstOrDefault(e => e.Location == "Hawaiian Is");
if (firstHawaiian != null)
{
    Console.WriteLine("First eruption in Hawaiian Is: \n" + firstHawaiian.ToString());
}
else
{
    Console.WriteLine("No Hawaiian Is Eruption found.");
}

// Find the first eruption from the "Greenland" location and print it. If none is found, print "No Greenland Eruption found."
Eruption? firstGreenland = eruptions.FirstOrDefault(e => e.Location == "Greenland");
if (firstGreenland != null)
{
    Console.WriteLine("First eruption in Greenland: \n" + firstGreenland.ToString());
}
else
{
    Console.WriteLine("No Greenland Eruption found. \n");
}

// Find the first eruption that is after the year 1900 AND in "New Zealand", then print it.
Eruption? firstNZ = eruptions.Where(i => i.Year > 1900).FirstOrDefault(e => e.Location == "New Zealand");
Console.WriteLine("First New Zealand eruption after 1900: \n" + firstNZ);

// Find all eruptions where the volcano's elevation is over 2000m and print them.
List<Eruption> over2000 = eruptions.Where(e => e.ElevationInMeters > 2000).ToList();
Console.WriteLine("Eruptions over 2000m:");
PrintEach(over2000);

// Find all eruptions where the volcano's name starts with "L" and print them. Also print the number of eruptions found.
IEnumerable<Eruption> startsL = eruptions.Where(e => e.Volcano.StartsWith("L"));
Console.WriteLine("Eruptions where Volcano name starts with 'L':");
PrintEach(startsL);
Console.WriteLine("Number of volcanos that start with 'L': " + startsL.Count() + "\n");

// Find the highest elevation, and print only that integer (Hint: Look up how to use LINQ to find the max!)
int? highestElevation = eruptions.Max(e => e.ElevationInMeters);
Console.WriteLine("Highest volcano elevation: \n");
Console.WriteLine(highestElevation + "\n");

// Use the highest elevation variable to find and print the name of the Volcano with that elevation.
Eruption? highestName = eruptions.FirstOrDefault(e => e.ElevationInMeters == highestElevation);
Console.WriteLine("The volcano with the elevation is: \n" + highestName);

// Print all Volcano names alphabetically.
IEnumerable<string> alpha = eruptions.OrderBy(e => e.Volcano).Select(i => i.Volcano);
Console.WriteLine("Volcanos in alphabetical order: \n");
foreach (string item in alpha)
{
    Console.WriteLine(item);
}
Console.WriteLine("\n");

// Print the sum of all the elevations of the volcanoes combined.
int? sumElevations = eruptions.Sum(e => e.ElevationInMeters);
Console.WriteLine("Sum of elevation of all volcanos: \n");
Console.WriteLine(sumElevations + "\n");

// Print whether any volcanoes erupted in the year 2000 (Hint: look up the Any query)
bool? anyIn2000 = eruptions.Any(e => e.Year == 2000);
Console.WriteLine("Were there any eruptions in 2000? \n\n" + anyIn2000 + "\n");

// Find all stratovolcanoes and print just the first three (Hint: look up Take)
IEnumerable<Eruption> first3 = eruptions.Where(e => e.Type == "Stratovolcano").Take(3).ToList();
Console.WriteLine("The first 3 stratovolcanos:");
PrintEach(first3);

// Print all the eruptions that happened before the year 1000 CE alphabetically according to Volcano name.
IEnumerable<Eruption> before1000 = eruptions.Where(e => e.Year < 1000).OrderBy(i => i.Volcano);
Console.WriteLine("All eruptions before 1000CE:");
PrintEach(before1000);

// Redo the last query, but this time use LINQ to only select the volcano's name so that only the names are printed.
IEnumerable<string> alphaNameOnly = eruptions.Where(e => e.Year < 1000).OrderBy(v => v.Volcano).Select(n => n.Volcano);
Console.WriteLine("Previous query names only in alphabetical order: \n");
foreach (string v in alphaNameOnly)
{
    System.Console.WriteLine(v);
}

// Helper method to print each item in a List or IEnumerable. This should remain at the bottom of your class!
static void PrintEach(IEnumerable<Eruption> items, string msg = "")
{
    Console.WriteLine(msg);
    foreach (Eruption item in items)
    {
        Console.WriteLine(item.ToString());
    }
}