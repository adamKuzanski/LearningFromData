using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MovieRecommendationBackend.Models
{
    public class UserFinalFeedback
    {

        public AuthenticationUser AuthenticationUser { get; set; }
        public List<MovieRating> MovieRatings { get; set; } = new List<MovieRating>();

    }
}
