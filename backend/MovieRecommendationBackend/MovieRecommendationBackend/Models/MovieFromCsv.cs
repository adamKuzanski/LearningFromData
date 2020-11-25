using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MovieRecommendationBackend.Models
{
    public class MovieFromCsv
    {
        public int ID { get; set; }
        public string Title { get; set; }

        public static MovieFromCsv FromCsv (string csvLine)
        {
            string[] values = csvLine.Split(';');
            var movie = new MovieFromCsv();
            movie.ID = Convert.ToInt32(values[1]);
            movie.Title = values[2];
            return movie;
        }
    }
}
