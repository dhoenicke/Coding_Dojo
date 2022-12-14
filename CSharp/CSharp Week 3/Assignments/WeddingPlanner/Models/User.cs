#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace WeddingPlanner.Models;
public class User
{
    [Key]
    public int UserId { get; set; }
    [Required]
    [MinLength(2, ErrorMessage = "Must be at least 2 characters!")]
    public string FirstName { get; set; }
    [Required]
    [MinLength(2, ErrorMessage = "Must be at least 2 characters!")]
    public string LastName { get; set; }
    [Required]
    [EmailAddress]
    [UniqueEmail]
    public string Email { get; set; }
    [Required]
    [MinLength(8, ErrorMessage = "Must be at least 8 characters!")]
    [DataType(DataType.Password)]
    public string Password { get; set; }
    public DateTime CreatedAt { get; set; } = DateTime.Now;
    public DateTime UpdatedAt { get; set; } = DateTime.Now;

    public List<Wedding> CreatedWeddings { get; set; } = new List<Wedding>();
    public List<Association> RSVPWeddingList { get; set; } = new List<Association>();

    [NotMapped]
    [DataType(DataType.Password)]
    [Compare("Password")]
    [Display(Name = "Confirm Password")]
    public string ConfirmPassword { get; set; }
}

public class UniqueEmailAttribute : ValidationAttribute
{
    protected override ValidationResult? IsValid(object? value, ValidationContext validationContext)
    {
        if (value == null)
        {
            return new ValidationResult("Email is required!");
        }
        // Connects to the DB
        MyContext _context = (MyContext)validationContext.GetService(typeof(MyContext));
        if (_context.Users.Any(e => e.Email == value.ToString()))
        {
            // If matches => error here
            return new ValidationResult("Email must be unique!");
        }
        else
        {
            // Passed validation
            return ValidationResult.Success;
        }
    }
}