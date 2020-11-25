using Microsoft.AspNetCore.Hosting;
using MovieRecommendationBackend.Interfaces;
using MovieRecommendationBackend.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;

namespace MovieRecommendationBackend.Services
{
    public class DataService : IDataService
    {
        public List<MovieFullDetails> GetMoviesFromCsv()
        {
            var listOfMovies = File.ReadAllLines("moviesFull.csv")
                .Select(v => MovieFullDetails.FromCsv(v))
                .ToList();

            // var a = GetFullDetails(listOfMovies);

            return listOfMovies;
        }

        public async Task<List<MovieFullDetails>> GetFullDetails(List<MovieFromCsv> moviesCsv)
        {
            List< MovieFullDetails> movieList = new List<MovieFullDetails>();
            foreach (var movie in moviesCsv)
            {
                using (var client = new HttpClient())
                {
                    var baseUrl = @"https://api.themoviedb.org/3/movie/";
                    var movieID = movie.ID;
                    var key = @"f56028cd0294e77ac7b1a477d9d28591";
                    var language = "en-US";

                    var url = new StringBuilder();
                    url.Append(baseUrl);
                    url.Append(movieID);
                    url.Append("?api_key=");
                    url.Append(key);
                    url.Append("&language=");
                    url.Append(language);

                    var response = await client.GetAsync(url.ToString());

                    var movieAllDetails =
                        Newtonsoft.Json.JsonConvert.DeserializeObject<MovieFullDetails>(
                            await response.Content.ReadAsStringAsync());
                    movieList.Add(movieAllDetails);
                }
            }
            var text = JsonSerializer.Serialize(movieList);
            return null;
        }

    }
}
