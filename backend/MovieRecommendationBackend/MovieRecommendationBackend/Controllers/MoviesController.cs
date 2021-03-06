﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MovieRecommendationBackend.Interfaces;
using MovieRecommendationBackend.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace MovieRecommendationBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MoviesController : ControllerBase
    {
        private readonly IDataService dataService;
        private readonly IMovieRepository movieRepository;

        public MoviesController(IDataService _dataService, IMovieRepository _movieRepository)
        {
            this.dataService = _dataService;
            this.movieRepository = _movieRepository;
        }

        // GET: api/movies/allMovies
        [HttpGet("AllMovies")]
        public IEnumerable<MovieFullDetails> Get()
        {
            var movies = this.dataService.GetMoviesFromCsv();
            return movies;
        }

        // POST api/movies/rateMovies
        [HttpPost("rateMovies")]
        public async Task<IActionResult> RateMoviesPost([FromBody] UserFinalFeedback userFinalFeedback)
        {
            await this.movieRepository.AddUserRatings(userFinalFeedback);
            return new OkObjectResult(true);
        }
    }
}
