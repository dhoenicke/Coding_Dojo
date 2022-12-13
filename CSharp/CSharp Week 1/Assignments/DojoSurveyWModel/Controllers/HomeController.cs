using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using DojoSurveyWModel.Models;

namespace DojoSurveyWModel.Controllers;

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
        survey = NewSurvey;
        return RedirectToAction("Results");
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