using System.ComponentModel.DataAnnotations;

namespace UnDB.Models
{
    public class University
    {
        public int Id { get; set; }
        [StringLength(60, MinimumLength = 3)]
        [Required]
        [Display(Name = "Название университета")]
        public string? Un_title { get; set; }
        [Display(Name = "Адрес")]
        public string? Address { get; set; }
        [Display(Name = "Факультет")]
        public string? Department { get; set; }
        [Display(Name = "Группа")]
        public string? Group { get; set; }
        [Display(Name = "Номер группы")]
        public int Number { get; set; }
        [Display(Name = "Староста")]
        public string? Headman { get; set; }
        [Display(Name = "Курс")]
        public int Course { get; set; }
        [RegularExpression(@"^[A-Z]+[a-zA-Z0-9""'\s-]*$")]
        [StringLength(5)]
        [Required]
        [Display(Name = "Подгруппа")]
        public string? Sub_group { get; set; }
        [Display(Name = "Номер подгруппы")]
        public int Sub_number { get; set; }
        [Display(Name = "Количество")]
        public int Count { get; set; }
    }
}
