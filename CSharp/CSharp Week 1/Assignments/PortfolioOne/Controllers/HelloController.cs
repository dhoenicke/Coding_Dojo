using Microsoft.AspNetCore.Mvc;
namespace FirstWeb.Controllers;
public class HelloController : Controller
{
    [HttpGet]
    [Route("")]
    public string Index()
    {
        return "This is my Index!";
    }

    [HttpGet("projects")]
    public string Project()
    {
        return "These are my projects!";
    }

    [HttpGet("contact")]
    public string Contact()
    {
        return "This is my contact!";
    }
}