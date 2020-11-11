using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MovieRecommendationBackend.Models
{
    public class AuthenticationUser: RegisterUser
    {
        public int ID { get; set; }
        public string Token { get; set; }
    }
}
