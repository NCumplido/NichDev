using System;
using System.ComponentModel.DataAnnotations;

namespace MvcMovie.Models
{
    public class Post
    {
        public int Id { get; set; }
        public string Title { get; set; }

        [DataType(DataType.Date)]
        public DateTime PostDate { get; set; }
        public string Topic { get; set; }
        public string Content{ get; set; }
        public int Votes { get; set; }
    }
}