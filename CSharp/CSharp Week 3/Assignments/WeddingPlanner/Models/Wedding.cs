#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace WeddingPlanner.Models;
public class Wedding
{
    [Key]
    public int WeddingId { get; set; }
    public int CreatorId { get; set; }
    [Required]
    public string WedderOne { get; set; }
    [Required]
    public string WedderTwo { get; set; }
    [Required]
    [DataType(DataType.Date)]
    [FutureDate]
    public DateTime WeddingDate { get; set; }
    [Required]
    public string Address { get; set; }
    public DateTime CreatedAt { get; set; } = DateTime.Now;
    public DateTime UpdatedAt { get; set; } = DateTime.Now;

    public User? UserName { get; set; }
    public List<Association> GuestList { get; set; } = new List<Association>();

}

public class FutureDateAttribute : ValidationAttribute
{
    protected override ValidationResult IsValid(object value, ValidationContext validationContext)
    {
        DateTime DateValue;
        if (value != null)
        {
            if ((DateTime)value < DateTime.Today)
            {
                return new ValidationResult("Date must be in the future!");
            }
        }
        return ValidationResult.Success;
    }
}