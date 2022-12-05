using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using DojoSurveyWValidations.Models;

namespace DojoSurveyWValidations.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }

    static Survey? survey;

    [HttpGet("")]
    public IActionResult Index()
    {
        return View("Index");
    }

    [HttpPost("results")]
    public IActionResult Results(Survey NewSurvey)
    {
        if (ModelState.IsValid)
        {
            survey = NewSurvey;
            return RedirectToAction("Results");
        }
        else
        {
            return View("Index");
        }
    }

    [HttpGet("results")]
    public IActionResult SurveyResults()
    {
        return View("Results", survey);
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
