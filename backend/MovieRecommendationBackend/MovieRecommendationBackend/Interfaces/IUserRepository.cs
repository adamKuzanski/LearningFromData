using MovieRecommendationBackend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MovieRecommendationBackend.Interfaces
{
    public interface IUserRepository
    {
        public Task<bool> AddNewUser(AuthenticationUser registerUser);
        public Task<AuthenticationUser> LoginUser(CredentialsUser credentialsUser);
    }
}
