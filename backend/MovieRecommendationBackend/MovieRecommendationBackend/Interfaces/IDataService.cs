﻿using MovieRecommendationBackend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MovieRecommendationBackend.Interfaces
{
    public interface IDataService
    {
        public List<MovieFullDetails> GetMoviesFromCsv();
    }
}
