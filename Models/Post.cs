using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MvcMovie.Models
{
    public class Post
    {
        public int Id { get; set; }

        public String Poster { get; set; }

        [StringLength(60, MinimumLength = 3)]
        [Required]
        public string Title { get; set; }

        [Display(Name = "Post Date")]
        [DataType(DataType.Date)]
        public DateTime PostDate { get; set; } //ToDo: Set the date to the date of the post being created.

        [RegularExpression(@"^[A-Z]+[a-zA-Z]*$")]
        [Required]
        [StringLength(15, MinimumLength = 3)]
        public string Topic { get; set; }

        [StringLength(100, MinimumLength = 3)]
        [Required]
        public string Content{ get; set; }

        [Range(-999, 999)]
        public int Votes { get; set; }
    }
}