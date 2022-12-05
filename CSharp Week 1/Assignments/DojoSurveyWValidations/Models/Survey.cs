#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;
namespace DojoSurveyWModel.Models;
public class Survey
{
    [Required]
    [MinLength(5)]
    public string name { get; set; }
    [Required]
    public string location { get; set; }
    [Required]
    public string language { get; set; }
    [MinLength(30)]
    public string? comment { get; set; }
}