using System;
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

        public MoviesController(IDataService _dataService)
        {
            this.dataService = _dataService;
        }

        // GET: api/movies/allMovies
        [HttpGet("AllMovies")]
        public IEnumerable<Movie> Get()
        {
            var movies = this.dataService.GetMoviesFromCsv();
            return movies;
        }

        // POST api/movies/rateMovies
        [HttpPost("RateMovies")]
        public async Task<IActionResult> RateMoviesPost([FromBody] UserFinalFeedback userFinalFeedback)
        {
            return new OkObjectResult(true);
        }

        // PUT api/<MoviesController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<MoviesController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
