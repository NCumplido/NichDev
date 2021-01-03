using System;
using Microsoft.AspNetCore.Mvc.Rendering;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MvcMovie.Models
{
    public class PostTopicViewModel
    {
        public List<Post> Posts { get; set; }
        public SelectList Topics { get; set; }
        public string PostTopic { get; set; }
        public string SearchString { get; set; }
    }
}
