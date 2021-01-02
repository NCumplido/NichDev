using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MvcMovie.Models
{
    public class Post
    {
        public int Id { get; set; }
        public string Title { get; set; }

        [Display(Name = "Post Date")]
        [DataType(DataType.Date)]

        public DateTime PostDate { get; set; }

        public string Topic { get; set; }

        public string Content{ get; set; }

        //[Column(TypeName = "decimal(18, 2)")]
        public int Votes { get; set; }
    }
}