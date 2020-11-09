using Microsoft.AspNetCore.Hosting;
using MovieRecommendationBackend.Interfaces;
using MovieRecommendationBackend.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace MovieRecommendationBackend.Services
{
    public class DataService : IDataService
    {
        public List<Movie> GetMoviesFromCsv()
        {
            var listOfMovies = File.ReadAllLines("movies.csv")
                .Select(v => Movie.FromCsv(v))
                .ToList();
            return listOfMovies;
        }
    }
}
