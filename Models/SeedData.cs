using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using MvcMovie.Data;
using System;
using System.Linq;

namespace MvcMovie.Models       //ToDo: Seed lorem ipsum data
{
    public static class SeedData
    {
        public static void Initialize(IServiceProvider serviceProvider)
        {
            using (var context = new MvcMovieContext(
                serviceProvider.GetRequiredService<
                    DbContextOptions<MvcMovieContext>>()))
            {
                // Look for any movies.
                if (context.Post.Any())
                {
                    return;   // DB has been seeded
                }

                context.Post.AddRange(
                    new Post
                    {
                        Title = "When Harry Met Sally",
                        PostDate = DateTime.Parse("1989-2-12"),
                        Topic = "Romantic Comedy",
                        Content = "Blah blah blah",
                        Votes = 3
                    },

                    new Post
                    {
                        Title = "Ghostbusters ",
                        PostDate = DateTime.Parse("1984-3-13"),
                        Topic = "Comedy",
                        Content = "Blah blah blah",
                        Votes = 3
                    },

                    new Post
                    {
                        Title = "Ghostbusters 2",
                        PostDate = DateTime.Parse("1986-2-23"),
                        Topic = "Comedy",
                        Content = "Blah blah blah",
                        Votes = 3
                    },

                    new Post
                    {
                        Title = "Rio Bravo",
                        PostDate = DateTime.Parse("1959-4-15"),
                        Topic = "Western",
                        Content = "Blah blah blah",
                        Votes = 3
                    }
                );
                context.SaveChanges();
            }
        }
    }
}