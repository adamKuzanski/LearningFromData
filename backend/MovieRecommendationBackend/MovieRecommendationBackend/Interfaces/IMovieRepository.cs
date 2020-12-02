using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MovieRecommendationBackend.Models;

namespace MovieRecommendationBackend.Interfaces
{
    public interface IMovieRepository
    {
        public Task<bool> AddUserRatings(UserFinalFeedback userFinalFeedback);
    }
}
