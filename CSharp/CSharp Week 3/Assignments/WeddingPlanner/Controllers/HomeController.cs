// Using statements
using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using WeddingPlanner.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc.ModelBinding;

namespace WeddingPlanner.Controllers;
public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;
    private MyContext _context;
    public HomeController(ILogger<HomeController> logger, MyContext context)
    {
        _logger = logger;
        _context = context;
    }

    // Login & Registration =>

    [HttpGet("")]
    public IActionResult Index()
    {
        return View();
    }

    [HttpPost("users/create")]
    public IActionResult CreateUser(User newUser)
    {
        if (ModelState.IsValid)
        {
            // Hash Passwords
            PasswordHasher<User> Hasher = new PasswordHasher<User>();
            newUser.Password = Hasher.HashPassword(newUser, newUser.Password);
            _context.Add(newUser);
            _context.SaveChanges();
            HttpContext.Session.SetInt32("UserId", newUser.UserId);
            HttpContext.Session.SetString("FirstName", newUser.FirstName);
            return RedirectToAction("Dashboard");
        }
        else
        {
            return View("Index");
        }
    }


    [HttpPost("users/login")]
    public IActionResult LoginUser(LogUser loginUser)
    {
        if (ModelState.IsValid)
        {
            // look up user in DB
            User? userInDb = _context.Users.FirstOrDefault(u => u.Email == loginUser.LEmail);
            // Check to see if user exists
            if (userInDb == null)
            {
                ModelState.AddModelError("LEmail", "Invalid Email/Password");
                return View("Index");
            }
            // Verify password matches whats in the DB
            PasswordHasher<LogUser> hasher = new PasswordHasher<LogUser>();
            var result = hasher.VerifyHashedPassword(loginUser, userInDb.Password, loginUser.LPassword);
            if (result == 0)
            {
                // Failure
                ModelState.AddModelError("LEmail", "Invalid Email/Password");
                return View("Index");
            }
            else
            {
                // Set session and redirect to success
                HttpContext.Session.SetInt32("UserId", userInDb.UserId);
                HttpContext.Session.SetString("FirstName", userInDb.FirstName);
                return RedirectToAction("Dashboard");
            }
        }
        else
        {
            return View("Index");
        }
    }

    [HttpPost("logout")]
    public IActionResult Logout()
    {
        HttpContext.Session.Clear();
        return RedirectToAction("Index");
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }

    [SessionCheck]
    [HttpGet("weddings")]
    public IActionResult Dashboard()
    {
        MyViewModel MyModel = new MyViewModel
        {
            AllWeddings = _context.Weddings.Include(g => g.GuestList).ThenInclude(u => u.User).ToList()
        };
        return View(MyModel);
    }

    [SessionCheck]
    [HttpGet("weddings/new")]
    public IActionResult NewWedding()
    {
        int? UserId = HttpContext.Session.GetInt32("UserId");
        ViewBag.UserId = UserId;
        return View();
    }

    [SessionCheck]
    [HttpPost("weddings/new/create")]
    public IActionResult CreateWedding(Wedding newWedding)
    {
        foreach (KeyValuePair<string, ModelStateEntry> error in ModelState)
        {
            Console.WriteLine("********** ERROR ********");
            Console.WriteLine($"Field: {error.Key}");
            foreach (ModelError err in error.Value.Errors)
            {
                Console.WriteLine($"Error: {err.ErrorMessage}");
            }
        }
        if (ModelState.IsValid)
        {
            _context.Add(newWedding);
            _context.SaveChanges();
            int WeddingId = newWedding.WeddingId;
            return RedirectToAction("ShowWedding", new { WeddingId = newWedding.WeddingId });
        }
        else
        {
            return View("NewWedding");
        }
    }

    [SessionCheck]
    [HttpPost("weddings/{WeddingId}/delete")]
    public IActionResult DestroyWedding(int WeddingId)
    {
        Wedding? WeddingToDestroy = _context.Weddings.SingleOrDefault(d => d.WeddingId == WeddingId);
        _context.Weddings.Remove(WeddingToDestroy);
        _context.SaveChanges();
        return RedirectToAction("Dashboard");
    }

    [SessionCheck]
    [HttpGet("weddings/{WeddingId}/rsvp")]
    public IActionResult RSVP(int WeddingId)
    {
        Association association = new Association();
        association.UserId = (int)HttpContext.Session.GetInt32("UserId");
        association.WeddingId = WeddingId;
        _context.Associations.Add(association);
        _context.SaveChanges();
        return RedirectToAction("Dashboard");
    }

    [SessionCheck]
    [HttpGet("weddings/{WeddingId}/unrsvp")]
    public IActionResult UNRSVP(int WeddingId)
    {
        Association? association = _context.Associations.SingleOrDefault(d => d.WeddingId == WeddingId && d.UserId == HttpContext.Session.GetInt32("UserId"));
        _context.Associations.Remove(association);
        _context.SaveChanges();
        return RedirectToAction("Dashboard");
    }

    [SessionCheck]
    [HttpGet("weddings/{WeddingId}")]
    public IActionResult ShowWedding(int WeddingId)
    {
        Association association = new Association();
        association.WeddingId = WeddingId;

        MyViewModel MyModel = new MyViewModel
        {
            Wedding = _context.Weddings.Include(g => g.GuestList).ThenInclude(u => u.User).FirstOrDefault(w => w.WeddingId == WeddingId)
        };
        if (MyModel.Wedding != null)
        {
            return View("ShowWedding", MyModel);
        }
        else
        {
            return RedirectToAction("Dashboard");
        }
    }
}

public class SessionCheckAttribute : ActionFilterAttribute
{
    public override void OnActionExecuting(ActionExecutingContext context)
    {
        int? userId = context.HttpContext.Session.GetInt32("UserId");
        if (userId == null)
        {
            context.Result = new RedirectToActionResult("Index", "Home", null);
        }
    }
}