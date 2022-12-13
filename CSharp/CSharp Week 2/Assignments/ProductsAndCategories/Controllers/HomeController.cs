using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using ProductsAndCategories.Models;
using Microsoft.EntityFrameworkCore;
namespace ProductsAndCategories.Controllers;
public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;
    private MyContext _context;
    public HomeController(ILogger<HomeController> logger, MyContext context)
    {
        _logger = logger;
        _context = context;
    }

    [HttpGet("")]
    public IActionResult Index()
    {
        MyViewModel MyModel = new MyViewModel
        {
            AllProducts = _context.Products.ToList()
        };
        return View(MyModel);
    }

    [HttpPost("product/create")]
    public IActionResult CreateProduct(Product newProduct)
    {
        if (ModelState.IsValid)
        {
            _context.Add(newProduct);
            _context.SaveChanges();
            return RedirectToAction("Index");
        }
        else
        {
            MyViewModel MyModel = new MyViewModel
            {
                AllProducts = _context.Products.ToList()
            };
            return View("Index", MyModel);
        }
    }

    [HttpGet("categories")]
    public IActionResult Categories()
    {
        MyViewModel MyModel = new MyViewModel
        {
            AllCategories = _context.Categories.ToList()
        };
        return View("AllCategories", MyModel);
    }

    [HttpPost("category/create")]
    public IActionResult CreateCategory(Category newCategory)
    {
        if (ModelState.IsValid)
        {
            _context.Add(newCategory);
            _context.SaveChanges();
            return RedirectToAction("Categories");
        }
        else
        {
            MyViewModel MyModel = new MyViewModel
            {
                AllCategories = _context.Categories.ToList()
            };
            return View("AllCategories", MyModel);
        }
    }

    [HttpGet("products/{ProductId}")]
    public IActionResult ShowProduct(int ProductId)
    {
        ViewBag.AllCategories = _context.Categories.Include(c => c.ProductsInCategory).Where(c => c.ProductsInCategory.All(a => a.ProductId != ProductId));
        Association association = new Association();
        association.ProductId = ProductId;

        MyViewModel MyModel = new MyViewModel
        {
            Product = _context.Products.Include(i => i.CategoriesOfProduct).ThenInclude(i => i.Category).FirstOrDefault(p => p.ProductId == ProductId),
            association = association
        };
        return View(MyModel);
    }

    [HttpPost("association/product/create")]
    public IActionResult CreateAssociationProd(Association association)
    {
        _context.Add(association);
        _context.SaveChanges();
        return RedirectToAction("ShowProduct", new { ProductId = association.ProductId });
    }

    [HttpGet("categories/{CategoryId}")]
    public IActionResult showCategory(int CategoryId)
    {
        ViewBag.AllProducts = _context.Products.Include(c => c.CategoriesOfProduct).Where(c => c.CategoriesOfProduct.All(a => a.CategoryId != a.CategoryId));
        Association association = new Association();
        association.CategoryId = CategoryId;

        MyViewModel MyModel = new MyViewModel
        {
            Category = _context.Categories.Include(i => i.ProductsInCategory).ThenInclude(i => i.Product).FirstOrDefault(p => p.CategoryId == CategoryId),
            association = association
        };
        return View(MyModel);
    }

    [HttpPost("association/category/create")]
    public IActionResult CreateAssociationCat(Association association)
    {
        _context.Add(association);
        _context.SaveChanges();
        return RedirectToAction("ShowCategory", new { CategoryId = association.CategoryId });
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
