using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MovieRecommendationBackend.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace MovieRecommendationBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        // GET: api/<UsersController>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<UsersController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/user/register
        [HttpPost("register")] 
        public async Task<IActionResult> PostRegister([FromBody] RegisterUser registerUser)
        {
            return new OkObjectResult(registerUser);
        }

        // POST api/user/register
        [HttpPost("authenticate")] 
        public async Task<IActionResult> PostAuthenticate([FromBody] CredentialsUser credentialsUser)
        {
            var userSim = new AuthenticationUser();
            userSim.Firstname = "Adam";
            userSim.Lastname = "Kuzanski";
            userSim.Username = credentialsUser.Username;
            userSim.Password = credentialsUser.Password;
            userSim.ID = 1;
            userSim.Token = "fake-jwt-token";

            return new OkObjectResult(userSim);
        }

        // PUT api/<UsersController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<UsersController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
