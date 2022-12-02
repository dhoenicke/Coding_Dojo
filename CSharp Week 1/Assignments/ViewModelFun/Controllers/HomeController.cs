using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using ViewModelFun.Models;

namespace ViewModelFun.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }

    [HttpGet("")]
    public IActionResult Index()
    {
        string message = "Message.";
        return View("Index", message);
    }

    [HttpGet("numbers")]
    public IActionResult Numbers()
    {
        int[] numbers = new int[] { 1, 2, 10, 21, 8, 7, 3 };
        return View(numbers);
    }

    [HttpGet("User")]
    public IActionResult OneUser()
    {
        User user = new User()
        {
            FirstName = "Daniel",
            LastName = "Hoenicke"
        };
        return View(user);
    }

    [HttpGet("Users")]
    public IActionResult AllUsers()
    {
        List<User> AllUsers = new List<User>();
        AllUsers.Add(new User() { FirstName = "Daniel", LastName = "Hoenicke" });
        AllUsers.Add(new User() { FirstName = "Terry", LastName = "Pratchet" });
        AllUsers.Add(new User() { FirstName = "Jane", LastName = "Austen" });
        AllUsers.Add(new User() { FirstName = "Stephen", LastName = "King" });
        AllUsers.Add(new User() { FirstName = "Mary", LastName = "Schelley" });
        return View(AllUsers);
    }

    public IActionResult Privacy()
    {
        return View();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}