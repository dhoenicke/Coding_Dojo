#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace LoginAndRegistration.Models;
public class User
{
    [Key]
    public int UserId { get; set; }
    [Required]
    [Display(Name = "First Name")]
    [MinLength(2, ErrorMessage = "First name must be at least 2 characters")]
    public string FirstName { get; set; }
    [Required]
    [Display(Name = "Last Name")]
    [MinLength(2, ErrorMessage = "Last name must be at least 2 characters")]
    public string LastName { get; set; }
    [Required]
    [EmailAddress]
    [UniqueEmail]
    public string Email { get; set; }
    [Required]
    [MinLength(8, ErrorMessage = "Password must be at least 8 characters")]
    [DataType(DataType.Password)]
    public string Password { get; set; }
    public DateTime CreatedAt { get; set; } = DateTime.Now;
    public DateTime UpdatedAt { get; set; } = DateTime.Now;

    [NotMapped]
    [DataType(DataType.Password)]
    [Compare("Password")]
    [Display(Name = "Confirm Password")]
    public string Confirm { get; set; }
}

public class UniqueEmailAttribute : ValidationAttribute
{
    protected override ValidationResult? IsValid(object? value, ValidationContext validationContext)
    {
        if (value == null)
        {
            return new ValidationResult("Email is required");
        }
        // This is our connection to the database
        MyContext _context = (MyContext)validationContext.GetService(typeof(MyContext));
        if (_context.Users.Any(e => e.Email == value.ToString()))
        {
            // If it matches, this is a problem, throw an error
            return new ValidationResult("Email must be unique");
        }
        else
        {
            // we passed validation
            return ValidationResult.Success;
        }
    }
}