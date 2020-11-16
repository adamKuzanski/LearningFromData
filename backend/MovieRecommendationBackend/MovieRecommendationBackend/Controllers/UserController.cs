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
    public class UserController : ControllerBase
    {
        private IUserRepository userRepository;
       
        public UserController(IUserRepository _userRepository)
        {
            this.userRepository = _userRepository;
        }


        // GET: api/user/all
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
            var newUser = new AuthenticationUser();
            newUser.Firstname = registerUser.Firstname;
            newUser.Lastname = registerUser.Lastname;
            newUser.Username = registerUser.Username;
            newUser.Password = registerUser.Password;
            newUser.Token = "fake-jwt-token";

            var result = this.userRepository.AddNewUser(newUser);

            if(result.Exception != null)
            {
                return new BadRequestObjectResult(result.Exception.InnerExceptions);
            }

            return new OkObjectResult(result);
        }

        // POST api/user/register
        [HttpPost("authenticate")] 
        public async Task<IActionResult> PostAuthenticate([FromBody] CredentialsUser credentialsUser)
        {
            var result = this.userRepository.LoginUser(credentialsUser);

            if (result != null)
            {
                return new OkObjectResult(result);
            }
            else
            {
                return new BadRequestObjectResult("User or password not found in database");
            }

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
