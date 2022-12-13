using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using CRUDelicious.Models;
namespace CRUDelicious.Controllers;
public class HomeController : Controller
{
    private MyContext _context;
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger, MyContext context)
    {
        _logger = logger;
        _context = context;
    }

    [HttpGet("")]
    public IActionResult Index()
    {
        List<Dish> AllDishes = _context.Dishes.ToList();
        return View("Index", AllDishes);
    }

    [HttpGet("dishes/new")]
    public IActionResult NewDish()
    {
        return View("NewDish");
    }

    [HttpPost("create")]
    public IActionResult Create(Dish newDish)
    {
        if (ModelState.IsValid)
        {
            _context.Add(newDish);
            _context.SaveChanges();
            return RedirectToAction("Index");
        }
        else
        {
            return View("NewDish", newDish);
        }
    }

    [HttpGet("dishes/{DishId}")]
    public IActionResult Show(int DishId)
    {
        Dish? showDish = _context.Dishes.SingleOrDefault(i => i.DishId == DishId);
        if (showDish != null)
        {
            return View("ShowDish", showDish);
        }
        else
        {
            return RedirectToAction("Index");
        }
    }

    [HttpPost("dishes/{DishId}/destroy")]
    public IActionResult Destroy(int DishId)
    {
        Dish? deleteDish = _context.Dishes.SingleOrDefault(i => i.DishId == DishId);
        if (deleteDish != null)
        {
            _context.Dishes.Remove(deleteDish);
            _context.SaveChanges();
            return RedirectToAction("Index");
        }
        else
        {
            return RedirectToAction("Index");
        }
    }

    [HttpGet("dishes/{DishId}/edit")]
    public IActionResult Edit(int DishId)
    {
        Dish? dishToEdit = _context.Dishes.FirstOrDefault(i => i.DishId == DishId);
        if (dishToEdit != null)
        {
            return View("EditDish", dishToEdit);
        }
        else
        {
            return RedirectToAction("Index");
        }
    }

    [HttpPost("dishes/{DishId}/update")]
    public IActionResult Update(int DishId, Dish updatedDish)
    {
        if (ModelState.IsValid)
        {
            Dish? theDish = _context.Dishes.FirstOrDefault(i => i.DishId == DishId);
            theDish.DishName = updatedDish.DishName;
            theDish.ChefName = updatedDish.ChefName;
            theDish.Calories = updatedDish.Calories;
            theDish.Tastiness = updatedDish.Tastiness;
            theDish.Description = updatedDish.Description;
            theDish.UpdatedAt = DateTime.Now;
            _context.SaveChanges();
            return Redirect($"/dishes/{DishId}");
        }
        else
        {
            return View("EditDish", updatedDish);
        }
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
