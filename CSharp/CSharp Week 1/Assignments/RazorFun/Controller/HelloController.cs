using Microsoft.AspNetCore.Mvc;
namespace YourNamespace.Controllers;
public class HelloController : Controller
{
    [HttpGet]
    [Route("")]
    public ViewResult Index()
    {
        return View();
    }
}