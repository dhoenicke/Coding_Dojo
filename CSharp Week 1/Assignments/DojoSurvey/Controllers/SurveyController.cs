using Microsoft.AspNetCore.Mvc;
namespace YourNamespace.Controllers;
public class SurveyController : Controller
{
    [HttpGet]
    [Route("")]
    public ViewResult Index()
    {
        return View("Index");
    }

    [HttpPost("Results")]
    public IActionResult Results(string name, string location, string language, string comment)
    {
        ViewBag.Name = name;
        ViewBag.Location = location;
        ViewBag.Language = language;
        ViewBag.Comment = comment;
        return View("Results");
    }
}