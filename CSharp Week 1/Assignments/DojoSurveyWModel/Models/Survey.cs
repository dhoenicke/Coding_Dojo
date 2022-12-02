#pragma warning disable CS8618
namespace DojoSurveyWModel.Models;
public class Survey
{
    public string name { get; set; }
    public string location { get; set; }
    public string language { get; set; }
    public string? comment { get; set; }
}