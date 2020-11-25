using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ServiceStack;

namespace MovieRecommendationBackend.Models
{
    public class MovieFullDetails
    {
        public int id { get; set; }
        public string poster_path { get; set; }
        public string title { get; set; }

        public static MovieFullDetails FromCsv(string csvLine)
        {
            string[] values = csvLine.Split(';');
            var movie = new MovieFullDetails();
            movie.id = Convert.ToInt32(values[0]);
            movie.poster_path = values[1];
            movie.title = values[2];
            return movie;
        }
    }

    public class Genre
    {
        public int id { get; set; }
        public string name { get; set; }
    }
}

