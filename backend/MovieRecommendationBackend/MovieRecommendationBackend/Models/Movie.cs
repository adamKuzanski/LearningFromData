using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MovieRecommendationBackend.Models
{
    public class Movie
    {
        public int ID { get; set; }
        public string Title { get; set; }

        public static Movie FromCsv (string csvLine)
        {
            string[] values = csvLine.Split(';');
            var movie = new Movie();
            movie.ID = Convert.ToInt32(values[1]);
            movie.Title = values[2];
            return movie;
        }
    }
}
