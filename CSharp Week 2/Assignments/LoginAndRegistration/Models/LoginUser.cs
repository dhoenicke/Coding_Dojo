#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;
namespace LoginAndRegistration.Models;
public class LoginUser
{
    [Required(ErrorMessage = "Email is required")]
    [Display(Name = "Email")]
    [EmailAddress]
    public string UserEmail { get; set; }
    [Required(ErrorMessage = "Password is required")]
    [Display(Name = "Password")]
    [DataType(DataType.Password)]
    public string UserPassword { get; set; }
}