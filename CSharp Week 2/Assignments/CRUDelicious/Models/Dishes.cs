#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;
namespace CRUDelicious.Models;
public class Dish
{
    [Key]
    [Required]
    public int DishId { get; set; }
    [Required]
    [MinLength(3)]
    public string ChefName { get; set; }
    [Required]
    [MinLength(3)]
    public string DishName { get; set; }
    [Required]
    [Range(1, 5, ErrorMessage = "Tastiness field is required")]
    public int? Tastiness { get; set; }
    [MoreThan0Attribute]
    [Required]
    public int? Calories { get; set; }
    [Required]
    public string Description { get; set; }
    public DateTime CreatedAt { get; set; } = DateTime.Now;
    public DateTime UpdatedAt { get; set; } = DateTime.Now;
}

public class MoreThan0Attribute : ValidationAttribute
{
    protected override ValidationResult IsValid(object value, ValidationContext validationContext)
    {
        if (value != null)
        {
            if ((int)value < 0)
            {
                return new ValidationResult("Must be greater than 0");
            }
        }
        return ValidationResult.Success;
    }
}