﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MovieRecommendationBackend.Models
{
    public class MovieRating
    {
        public int MovieId { get; set; }
        public string MovieScore { get; set; }
        public bool MovieUnWatched { get; set; }
    }
}
