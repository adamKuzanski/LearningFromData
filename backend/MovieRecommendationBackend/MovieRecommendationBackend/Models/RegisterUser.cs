using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MovieRecommendationBackend.Models
{
    public class RegisterUser: CredentialsUser
    {
        public string Firstname { get; set; }
        public string Lastname { get; set; }
    }
}
