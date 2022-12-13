#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;
namespace ChefsNDishes.Models;
public class Chef
{
    [Key]
    public int ChefId { get; set; }
    [Required]
    public string FirstName { get; set; }
    [Required]
    public string LastName { get; set; }
    [Required]
    [DataType(DataType.Date)]
    [DateInPast]
    public DateTime DoB { get; set; }
    public List<Dish> DishesByChef { get; set; } = new List<Dish>();
    public DateTime CreatedAt { get; set; } = DateTime.Now;
    public DateTime UpdatedAt { get; set; } = DateTime.Now;
}

public class DateInPastAttribute : ValidationAttribute
{
    protected override ValidationResult IsValid(object value, ValidationContext validationContext)
    {
        DateTime theDate = (DateTime)value;
        System.Console.WriteLine(theDate);
        if (theDate < DateTime.Now)
        {
            return ValidationResult.Success;
        }
        else
        {
            return new ValidationResult("Date must be in the past");
        }
    }
}